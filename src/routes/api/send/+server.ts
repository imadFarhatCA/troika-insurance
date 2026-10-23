import { json, error } from '@sveltejs/kit';
import { sendMail } from '$lib/server/mail';
import type { RequestHandler } from './$types';

export const prerender = false;

const LABEL = { quote: 'Quote request', claim: 'Claim', contact: 'Contact message' } as const;
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: RequestHandler = async ({ request, platform }) => {
	const b = await request.json().catch(() => null);
	if (!b) error(400, 'Bad request');
	if (b.website) return json({ ok: true });

	const type = b.type as keyof typeof LABEL;
	const email = str(b.email, 200);
	const body = str(b.body, 8000);
	if (!(type in LABEL) || !body || !/^\S+@\S+\.\S+$/.test(email)) error(400, 'Invalid fields');

	const key = platform?.env?.RESEND_API_KEY;
	if (!key) error(500, 'Mail not configured');

	const ref = str(b.ref, 40);
	try {
		await sendMail(key, { subject: `${LABEL[type]}${ref ? ` ${ref}` : ''}`, text: body, replyTo: email });
	} catch (e) {
		console.error(e);
		error(502, 'Send failed');
	}
	return json({ ok: true });
};
