export type Text = { en: string; fr: string };
export type Option = { value: string; label: Text };
export type Kind = 'choice' | 'multi' | 'text' | 'contact';
export type Step = { id: string; title: Text; kind: Kind; options?: Option[]; optional?: boolean; placeholder?: Text };
export type CategoryId = 'auto' | 'home' | 'commercial' | 'fleet';

const o = (value: string, en: string, fr = en): Option => ({ value, label: { en, fr } });
const yesNo = [o('yes', 'Yes', 'Oui'), o('no', 'No', 'Non')];

export const CATEGORY_STEP: Step = {
	id: 'category',
	title: { en: 'What would you like to insure?', fr: 'Que souhaitez-vous assurer?' },
	kind: 'choice',
	options: [o('auto', 'Auto', 'Auto'), o('home', 'Home', 'Habitation'), o('commercial', 'Business', 'Entreprise'), o('fleet', 'Fleet', 'Flotte')]
};

/** Steps specific to one category. The category question itself is skipped when the visitor starts from that category's page. */
export const CATEGORY_STEPS: Record<CategoryId, Step[]> = {
	auto: [
		{ id: 'vehicle', kind: 'choice', title: { en: 'What do you need to insure?', fr: 'Que devez-vous assurer?' },
			options: [o('car', 'Car, SUV or truck', 'Auto, VUS ou camion'), o('moto', 'Motorcycle', 'Moto'), o('rv', 'Recreational vehicle', 'Véhicule récréatif'), o('other', 'Something else', 'Autre')] },
		{ id: 'drivers', kind: 'choice', title: { en: 'How many drivers?', fr: 'Combien de conducteurs?' }, options: [o('1', '1'), o('2', '2'), o('3+', '3 or more', '3 ou plus')] },
		{ id: 'insured', kind: 'choice', title: { en: 'Are you currently insured?', fr: 'Êtes-vous actuellement assuré?' }, options: yesNo }
	],
	home: [
		{ id: 'property', kind: 'choice', title: { en: 'What type of property?', fr: 'Quel type de propriété?' },
			options: [o('house', 'House', 'Maison'), o('condo', 'Condo'), o('tenant', 'Tenant (renter)', 'Locataire'), o('plex', 'Plex'), o('chalet', 'Chalet')] },
		{ id: 'occupancy', kind: 'choice', title: { en: 'How is the property used?', fr: 'Comment la propriété est-elle utilisée?' },
			options: [o('main', 'Main residence', 'Résidence principale'), o('rental', 'Rented to others', 'Louée à des tiers'), o('seasonal', 'Seasonal', 'Saisonnière')] },
		{ id: 'insured', kind: 'choice', title: { en: 'Are you currently insured?', fr: 'Êtes-vous actuellement assuré?' }, options: yesNo }
	],
	commercial: [
		{ id: 'business', kind: 'text', title: { en: 'What does your business do?', fr: 'Quelle est l\'activité de votre entreprise?' }, placeholder: { en: 'e.g. restaurant, contractor, retail shop', fr: 'ex. restaurant, entrepreneur, commerce' } },
		{ id: 'employees', kind: 'choice', title: { en: 'How many employees?', fr: 'Combien d\'employés?' }, options: [o('1-5', '1 to 5', '1 à 5'), o('6-20', '6 to 20', '6 à 20'), o('21-50', '21 to 50', '21 à 50'), o('50+', 'More than 50', 'Plus de 50')] },
		{ id: 'needs', kind: 'multi', title: { en: 'What coverage are you looking for?', fr: 'Quelle protection recherchez-vous?' },
			options: [o('property', 'Property', 'Biens'), o('liability', 'Liability', 'Responsabilité'), o('cyber', 'Cyber'), o('equipment', 'Equipment', 'Équipement'), o('unsure', 'Not sure yet', 'Je ne sais pas encore')] }
	],
	fleet: [
		{ id: 'vehicles', kind: 'choice', title: { en: 'How many vehicles?', fr: 'Combien de véhicules?' }, options: [o('2-5', '2 to 5', '2 à 5'), o('6-20', '6 to 20', '6 à 20'), o('20+', 'More than 20', 'Plus de 20')] },
		{ id: 'use', kind: 'choice', title: { en: 'How are they used?', fr: 'Quel est leur usage?' },
			options: [o('delivery', 'Delivery', 'Livraison'), o('trades', 'Trades and services', 'Métiers et services'), o('transport', 'Transport', 'Transport'), o('other', 'Other', 'Autre')] }
	]
};

/** Steps every quote ends with. */
export const COMMON_STEPS: Step[] = [
	{ id: 'province', kind: 'choice', title: { en: 'Which province?', fr: 'Quelle province?' }, options: [o('quebec', 'Quebec', 'Québec'), o('ontario', 'Ontario')] },
	{ id: 'contact', kind: 'contact', title: { en: 'How can we reach you?', fr: 'Comment pouvons-nous vous joindre?' } },
	{ id: 'notes', kind: 'text', optional: true, title: { en: 'Anything else we should know?', fr: 'Autre chose à nous dire?' }, placeholder: { en: 'Tell us more...', fr: 'Dites-nous en plus...' } }
];

export const stepsFor = (category: CategoryId | '' | null, preset: boolean): Step[] => [
	...(preset ? [] : [CATEGORY_STEP]),
	...(category ? CATEGORY_STEPS[category] : []),
	...COMMON_STEPS
];
