export interface NetworkFeature {
	id: string;
	icon: string;
	title: string;
	description: string;
}

export const networkFeatures: NetworkFeature[] = [
	{
		id: 'capacity',
		icon: 'trending-up',
		title: 'Enhanced Market Capacity',
		description: 'Through the AssurUni network, we access more insurers, specialty markets, and competitive products, allowing us to handle both simple and complex risks effectively.'
	},
	{
		id: 'experts',
		icon: 'award',
		title: 'Access to Top Industry Experts',
		description: 'We collaborate with leading underwriters and specialists across Canada. This network expertise ensures you receive knowledgeable, high-quality advice tailored to your operations.'
	},
	{
		id: 'service',
		icon: 'star',
		title: 'Big-Network Power, Boutique-Level Service',
		description: 'With AssurUni, you benefit from the reach of a large organization while enjoying the personalized attention of a dedicated advisor.'
	}
];
