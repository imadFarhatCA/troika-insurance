import type { Language } from '$lib/languageStore';

type Copy = { title: string; description: string; schema?: 'Service' | 'AboutPage'; full?: boolean };

export const SEO_COPY: Record<string, Record<Language, Copy>> = {
	'/': {
		EN: { full: true, title: 'Troika Insurance | Premium Insurance Brokers for Home, Auto & Business', description: 'Troika Insurance is a premium insurance brokerage in Quebec offering homeowners, car, and commercial insurance. Continuity-focused protection for individuals and businesses.' },
		FR: { full: true, title: 'Troika Insurance | Courtiers en assurance habitation, auto et entreprise', description: "Troika Insurance est un cabinet de courtage en assurance au Québec : assurance habitation, auto et commerciale. Une protection axée sur la continuité pour les particuliers et les entreprises." }
	},
	'/services': {
		EN: { schema: 'Service', title: 'Insurance Services', description: 'Troika Insurance offers commercial, personal, and specialized insurance services in Quebec, including professional liability, cyber coverage, industry-specific programs, and full advisory support.' },
		FR: { schema: 'Service', title: "Services d'assurance", description: "Troika Insurance offre des services d'assurance commerciale, personnelle et spécialisée au Québec : responsabilité professionnelle, cyberassurance, programmes sectoriels et accompagnement-conseil complet." }
	},
	'/homeowners': {
		EN: { schema: 'Service', title: 'Homeowners Insurance', description: 'Structured residential insurance for homeowners, tenants, condo owners, plex owners, and chalet owners in Quebec. Property, income continuity, and liability protection from Troika Insurance.' },
		FR: { schema: 'Service', title: 'Assurance habitation', description: "Assurance résidentielle structurée pour propriétaires, locataires, copropriétaires, propriétaires de plex et de chalets au Québec. Protection des biens, continuité du revenu et responsabilité civile avec Troika Insurance." }
	},
	'/car': {
		EN: { schema: 'Service', title: 'Car Insurance', description: 'Auto insurance for personal and commercial vehicle use in Quebec. Vehicle asset, mobility continuity, and liability protection structured around how you actually drive.' },
		FR: { schema: 'Service', title: 'Assurance auto', description: "Assurance auto pour usage personnel et commercial au Québec. Protection du véhicule, continuité de la mobilité et responsabilité civile, structurées selon votre façon de conduire." }
	},
	'/commercial': {
		EN: { schema: 'Service', title: 'Commercial Insurance', description: 'Commercial insurance for business owners in Quebec. Property, revenue continuity, and liability protection built around keeping your business running after a loss.' },
		FR: { schema: 'Service', title: 'Assurance commerciale', description: "Assurance commerciale pour propriétaires d'entreprise au Québec. Protection des biens, continuité des revenus et responsabilité civile pour que votre entreprise continue de fonctionner après un sinistre." }
	},
	'/claims': {
		EN: { schema: 'Service', title: 'Claims Support', description: 'Troika acts as your intermediary when a claim happens, guiding, coordinating, and supporting you between you and your insurer from report to resolution.' },
		FR: { schema: 'Service', title: 'Soutien aux réclamations', description: "Troika agit comme votre intermédiaire lors d'un sinistre : nous vous guidons, coordonnons et soutenons auprès de votre assureur, de la déclaration jusqu'au règlement." }
	},
	'/our-approach': {
		EN: { schema: 'AboutPage', title: 'Our Approach', description: 'Troika Insurance operates as a trusted advisory partner, not just a broker. Our continuity-focused approach means we assess, protect, and remain by your side before and after a loss.' },
		FR: { schema: 'AboutPage', title: 'Notre approche', description: "Troika Insurance agit comme partenaire-conseil de confiance, pas seulement comme courtier. Notre approche axée sur la continuité : évaluer, protéger et rester à vos côtés avant et après un sinistre." }
	},
	'/our-partners': {
		EN: { title: 'Our Partners', description: "Troika Insurance partners with Canada's top personal and business insurers to give you the best coverage and pricing." },
		FR: { title: 'Nos partenaires', description: "Troika Insurance collabore avec les meilleurs assureurs de particuliers et d'entreprises au Canada pour vous offrir la meilleure protection au meilleur prix." }
	},
	'/privacy-policy': {
		EN: { title: 'Privacy Policy', description: 'How Troika Insurance collects, uses, discloses, and protects your personal information.' },
		FR: { title: 'Politique de confidentialité', description: 'Comment Troika Insurance recueille, utilise, communique et protège vos renseignements personnels.' }
	},
	'/complaints-policy': {
		EN: { title: 'Complaints Processing and Dispute Resolution Policy', description: 'How Troika Insurance handles client complaints and disputes, from receipt through to resolution.' },
		FR: { title: 'Politique de traitement des plaintes et de règlement des différends', description: "Comment Troika Insurance traite les plaintes et les différends de ses clients, de la réception jusqu'au règlement." }
	}
};
