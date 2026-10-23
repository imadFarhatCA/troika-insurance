import { json, error } from '@sveltejs/kit';
import { sendMail } from '$lib/server/mail';
import { renderHtml, renderText, subject, type Mail, type Row } from '$lib/server/template';
import type { RequestHandler } from './$types';

export const prerender = false;

const TYPES = ['quote', 'claim', 'contact'];
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const POST: RequestHandler = async ({ request, platform }) => {
	const b = await request.json().catch(() => null);
	if (!b) error(400, 'Bad request');
	if (b.website) return json({ ok: true });

	const rows: Row[] = (Array.isArray(b.rows) ? b.rows : []).slice(0, 40).map((r: Row) => ({ k: str(r?.k, 200), v: str(r?.v, 2000) })).filter((r: Row) => r.k && r.v);
	const m: Mail = { type: b.type, ref: str(b.ref, 40), name: str(b.name, 200), email: str(b.email, 200), phone: str(b.phone, 60), rows, message: str(b.message, 8000) };
	if (!TYPES.includes(m.type) || !/^\S+@\S+\.\S+$/.test(m.email) || !(rows.length || m.message)) error(400, 'Invalid fields');

	const key = platform?.env?.RESEND_API_KEY;
	if (!key) error(500, 'Mail not configured');

	try {
		await sendMail(key, { subject: subject(m), text: renderText(m), html: renderHtml(m), replyTo: m.email });
	} catch (e) {
		console.error(e);
		error(502, 'Send failed');
	}
	return json({ ok: true });
};
