export async function sendMail(type: 'quote' | 'claim' | 'contact', ref: string, email: string, body: string, website = ''): Promise<boolean> {
	try {
		const r = await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, ref, email, body, website }) });
		return r.ok;
	} catch {
		return false;
	}
}
