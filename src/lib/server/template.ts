export type Row = { k: string; v: string };
export type Mail = { type: 'quote' | 'claim' | 'contact'; ref: string; name: string; email: string; phone: string; rows: Row[]; message: string };

const TITLE = { quote: 'New quote request', claim: 'New claim report', contact: 'New contact message' };
const BADGE = { quote: '#92278f', claim: '#d9534f', contact: '#4dadc9' };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const nl = (s: string) => esc(s).replace(/\n/g, '<br>');

export const subject = (m: Mail) => `${TITLE[m.type]}${m.ref ? ` · ${m.ref}` : ''}${m.name ? ` · ${m.name}` : ''}`;

export function renderText(m: Mail): string {
	return [TITLE[m.type] + (m.ref ? ` ${m.ref}` : ''), '', `Name: ${m.name}`, `Email: ${m.email}`, ...(m.phone ? [`Phone: ${m.phone}`] : []), '', ...m.rows.map((r) => `${r.k}: ${r.v}`), ...(m.message ? ['', m.message] : [])].join('\n');
}

export function renderHtml(m: Mail): string {
	const c = BADGE[m.type];
	const rows = m.rows
		.map((r, i) => `<tr><td style="padding:14px 20px;background:${i % 2 ? '#ffffff' : '#fafafa'};border-top:1px solid #eee"><div style="font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#8a8f98;margin-bottom:4px">${esc(r.k)}</div><div style="font-size:15px;color:#1a1a1a;line-height:1.5">${nl(r.v)}</div></td></tr>`)
		.join('');
	const contact = (label: string, value: string) => value && `<td style="padding:0 20px 0 0;vertical-align:top"><div style="font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#8a8f98;margin-bottom:4px">${label}</div><div style="font-size:15px;color:#1a1a1a">${value}</div></td>`;
	return `<!doctype html><html><body style="margin:0;padding:0;background:#f1f3f6;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f3f6"><tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(20,20,40,.08)">
<tr><td style="background:#92278f;padding:28px 32px"><div style="font-size:13px;font-weight:700;letter-spacing:2px;color:#f3d6f2">TROIKA INSURANCE</div>
<div style="font-size:24px;font-weight:700;color:#ffffff;margin-top:10px">${TITLE[m.type]}</div>
${m.ref ? `<div style="margin-top:12px"><span style="display:inline-block;background:${c === '#92278f' ? 'rgba(255,255,255,.18)' : c};color:#fff;font-size:12px;font-weight:600;letter-spacing:.6px;padding:5px 12px;border-radius:999px">REF ${esc(m.ref)}</span></div>` : ''}</td></tr>
<tr><td style="padding:28px 32px 8px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>
${contact('Name', esc(m.name))}${contact('Email', `<a href="mailto:${esc(m.email)}" style="color:#92278f;text-decoration:none">${esc(m.email)}</a>`)}${contact('Phone', m.phone && `<a href="tel:${esc(m.phone)}" style="color:#92278f;text-decoration:none">${esc(m.phone)}</a>`)}
</tr></table></td></tr>
${rows ? `<tr><td style="padding:20px 32px 8px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:12px;overflow:hidden">${rows}</table></td></tr>` : ''}
${m.message ? `<tr><td style="padding:20px 32px 8px"><div style="background:#f7fafc;border-left:4px solid #92278f;border-radius:8px;padding:18px 20px;font-size:15px;color:#1a1a1a;line-height:1.6">${nl(m.message)}</div></td></tr>` : ''}
<tr><td style="padding:24px 32px 32px"><a href="mailto:${esc(m.email)}?subject=${encodeURIComponent('Re: ' + (m.ref || TITLE[m.type]))}" style="display:inline-block;background:#92278f;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:10px">Reply to ${esc(m.name || 'sender')}</a></td></tr>
<tr><td style="background:#fafafa;border-top:1px solid #eee;padding:18px 32px;font-size:12px;color:#8a8f98">Sent from the Troika Insurance website. Replying goes straight to the customer.</td></tr>
</table></td></tr></table></body></html>`;
}
