export type MailPayload = {
	type: 'quote' | 'claim' | 'contact';
	email: string;
	ref?: string;
	name?: string;
	phone?: string;
	rows?: { k: string; v: string }[];
	message?: string;
	website?: string;
};

export async function sendMail(p: MailPayload): Promise<boolean> {
	try {
		const r = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
		return r.ok;
	} catch {
		return false;
	}
}
