import type { Step, Text } from './quoteFlow';

export type Answers = Record<string, string | string[]>;
const EMAIL = 'info@troikaassurance.ca';

/** Plain-text summary of the questionnaire, in English for the brokers. */
export function summarize(steps: Step[], answers: Answers, ref: string): string {
	const label = (s: Step, v: string) => s.options?.find((x) => x.value === v)?.label.en ?? v;
	const lines = steps
		.filter((s) => s.kind !== 'contact' && answers[s.id])
		.map((s) => {
			const a = answers[s.id];
			return `${s.title.en}\n  ${Array.isArray(a) ? a.map((v) => label(s, v)).join(', ') : label(s, a)}`;
		});
	const c = (k: string) => answers[`contact.${k}`] ?? '';
	return [`Quote request ${ref}`, '', ...lines, '', `Name: ${c('name')}`, `Phone: ${c('phone')}`, `Email: ${c('email')}`, `Preferred contact: ${c('method')}`].join('\n');
}

export function quoteRows(steps: Step[], answers: Answers): { k: string; v: string }[] {
	const label = (s: Step, v: string) => s.options?.find((x) => x.value === v)?.label.en ?? v;
	const rows = steps
		.filter((s) => s.kind !== 'contact' && answers[s.id])
		.map((s) => {
			const a = answers[s.id];
			return { k: s.title.en, v: Array.isArray(a) ? a.map((v) => label(s, v)).join(', ') : label(s, a) };
		});
	const method = String(answers['contact.method'] ?? '');
	return method ? [...rows, { k: 'Preferred contact', v: method }] : rows;
}

export const mailtoLink = (steps: Step[], answers: Answers, ref: string) =>
	`mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request ${ref}`)}&body=${encodeURIComponent(summarize(steps, answers, ref))}`;

export const pick = (t: Text, lang: 'EN' | 'FR') => (lang === 'FR' ? t.fr : t.en);
