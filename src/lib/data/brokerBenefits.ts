export interface BrokerBenefit {
	id: string;
	icon: string;
	title: string;
	description: string;
}

export const brokerBenefits: BrokerBenefit[] = [
	{
		id: 'protect',
		icon: 'shield',
		title: 'We Protect Your Interests',
		description: 'We don\'t work for a single insurance company — we work for you. We search the market, compare insurers, and recommend coverage that truly fits your needs.'
	},
	{
		id: 'speak',
		icon: 'message-circle',
		title: 'We Speak the Insurer\'s Language',
		description: 'Insurance contracts can be complex. We ensure every detail is accurate, properly represented, and aligned with your risk — preventing issues at claim time.'
	},
	{
		id: 'negotiate',
		icon: 'handshake',
		title: 'We Negotiate on Your Behalf',
		description: 'Experienced brokers secure better premiums and stronger terms. We know each insurer\'s appetite, helping us negotiate from a position of knowledge and strength.'
	},
	{
		id: 'claims',
		icon: 'target',
		title: 'We Stand With You During Claims',
		description: 'If a loss happens, you\'re not facing the insurer alone. We advocate for you, guide the process, and ensure you receive what your policy entitles you to.'
	},
	{
		id: 'time',
		icon: 'clock',
		title: 'We Save You Time & Stress',
		description: 'You run your business. We handle the strategy, paperwork, follow-ups, and market negotiations.'
	}
];
