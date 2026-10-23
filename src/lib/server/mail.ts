export const MAIL_FROM = 'Troika Insurance <no-reply@troikaassurance.ca>';
export const MAIL_TO = 'info@troikaassurance.ca';

export async function sendMail(apiKey: string, m: { subject: string; text: string; html: string; replyTo?: string }) {
	const res = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ from: MAIL_FROM, to: [MAIL_TO], subject: m.subject, text: m.text, html: m.html, reply_to: m.replyTo })
	});
	if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}
