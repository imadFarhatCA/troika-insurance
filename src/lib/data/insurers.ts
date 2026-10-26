// Insurer database - one record per insurer, following Troika_Assureur_Partenaire.xlsx
// (verified Oct 12, 2026). Add or edit insurers HERE only.
//
// Stored for every insurer:
//   name, categories (an insurer can have several), website, claimsPhones (Québec),
//   noteFr / noteEn (claims notes) and logo (file in src/lib/assets/partnerLogos).
// Displayed today: only name + website, grouped by category (see our-partners page).
// claimsPhones and the notes are kept for later use and are NOT shown on the site.

export type InsurerCategory = 'personal' | 'commercial' | 'mga';

export type Insurer = {
	id: string;
	name: string;
	categories: InsurerCategory[];
	website: string;
	claimsPhones: string[];
	noteFr?: string;
	noteEn?: string;
	logo?: string;
};

export const insurers: Insurer[] = [
	{ id: 'aviva', name: 'Aviva', categories: ['personal', 'commercial'], website: 'https://www.aviva.ca/fr/', claimsPhones: ['1 866 692-8482'], logo: 'aviva.webp' },
	{ id: 'chubb', name: 'CHUBB', categories: ['personal', 'commercial'], website: 'https://www.chubb.com/ca-fr/', claimsPhones: ['1 800 532-4822', '1 877 772-7797'], noteFr: 'Particuliers : premier numéro. Entreprises : deuxième numéro.', noteEn: 'Individuals: first number. Businesses: second number.', logo: 'chubb.webp' },
	{ id: 'cime', name: 'Cime', categories: ['personal'], website: 'https://www.cimeinc.qc.ca/fr/index.html', claimsPhones: ['1 866 820-2463'], noteFr: 'Standard CIME, demander les réclamations.', noteEn: 'CIME switchboard, ask for claims.', logo: 'cime.webp' },
	{ id: 'echelon', name: 'Echelon', categories: ['personal', 'commercial'], website: 'https://echeloninsurance.ca/fr/', claimsPhones: ['1 866 923-5666'], noteFr: 'Déclaration des sinistres 24 h, Québec.', noteEn: '24-hour claim reporting, Québec.', logo: 'echelon-insurance.webp' },
	{ id: 'economical', name: 'Economical', categories: ['personal', 'commercial'], website: 'https://www.economical.com/fr/accueil', claimsPhones: ['1 888 875-8088'], logo: 'economical.svg' },
	{ id: 'intact', name: 'Intact', categories: ['personal', 'commercial'], website: 'https://www.intact.ca/fr/assurance-particuliers', claimsPhones: ['1 866 464-2424'], logo: 'intact-insurance.svg' },
	{ id: 'intact-prestige', name: 'Intact Prestige', categories: ['personal'], website: 'https://www.intact.ca/fr/assurance-particuliers/intact-prestige', claimsPhones: ['1 844 613-7794'], logo: 'intact-prestige.webp' },
	{ id: 'l-unique', name: 'L\'Unique', categories: ['personal', 'commercial'], website: 'https://www.lunique.qc.ca/accueil', claimsPhones: ['1 800 463-4800', '1 866 727-3011'], noteFr: 'Auto/habitation : premier numéro. Bateau/commercial : deuxième numéro.', noteEn: 'Auto/home: first number. Boat/commercial: second number.', logo: 'l-unique.webp' },
	{ id: 'optimum', name: 'Optimum', categories: ['personal', 'commercial'], website: 'https://www.optimum-general.com/fr/quebec', claimsPhones: ['1 800 361-7653'], logo: 'optimum.webp' },
	{ id: 'orbite', name: 'Orbite', categories: ['personal'], website: 'https://www.orbiteservicesdassurances.ca/', claimsPhones: ['1 800 567-0927'], noteFr: 'Standard Québec, demander l’accompagnement pour un sinistre; suivre l’assureur sur la police.', noteEn: 'Québec switchboard, ask for help with a claim; follow the insurer named on your policy.', logo: 'orbit.webp' },
	{ id: 'pafco', name: 'PAFCO', categories: ['personal'], website: 'https://www.pafco.ca/', claimsPhones: ['1 877 463-2727'], logo: 'pafco.webp' },
	{ id: 'promutuel', name: 'Promutuel', categories: ['personal', 'commercial'], website: 'https://www.promutuelassurance.ca/fr', claimsPhones: ['1 888 590-2433'], noteFr: 'Urgence hors des heures de bureau; durant les heures de bureau, joindre sa mutuelle.', noteEn: 'Emergency outside office hours; during office hours, contact your local mutual.', logo: 'promutuel.webp' },
	{ id: 'prysm', name: 'Prysm', categories: ['personal'], website: 'https://prysmassurances.ca/accueil', claimsPhones: ['1 877 650-4851'], logo: 'prysm.webp' },
	{ id: 'wawanesa', name: 'Wawanesa', categories: ['personal', 'commercial'], website: 'https://www.wawanesa.com/canada/', claimsPhones: ['1 844 929-2637'], logo: 'wawanesa.webp' },
	{ id: '3-dimensional-insurance', name: '3 Dimensional Insurance', categories: ['mga'], website: 'https://www.3diltd.co.uk/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: '3-dimensional-insurance.webp' },
	{ id: '3-spheres-assurances', name: '3 Spheres Assurances', categories: ['mga'], website: 'https://www.3spheresassurance.com/', claimsPhones: ['1 800 287-8273', '1 855 907-6787'], noteFr: 'Premier : SIAdvisers. Deuxième : responsabilité civile, Opus.', noteEn: 'First: SIAdvisers. Second: civil liability, Opus.', logo: '3-spheres-assurances.webp' },
	{ id: 'april', name: 'April', categories: ['mga'], website: 'https://april.ca/', claimsPhones: ['514 789-2399'], logo: 'april-insurance.webp' },
	{ id: 'arag', name: 'Arag', categories: ['mga'], website: 'https://www.arag.ca/fr/', claimsPhones: ['1 888 582-5586, option 1'], logo: 'arag.webp' },
	{ id: 'assurance-image', name: 'Assurance IMAGE', categories: ['mga'], website: 'https://assuranceimage.com/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: 'assurance-image.webp' },
	{ id: 'beazley', name: 'Beazley', categories: ['mga'], website: 'https://www.beazley.com/en-ca/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: 'beazley.webp' },
	{ id: 'burns-wilcox', name: 'Burns & Wilcox', categories: ['mga'], website: 'https://www.burnsandwilcox.ca/', claimsPhones: ['1 855 801-0296'], noteFr: 'Ligne Canada publiée par les courtiers; Québec à confirmer sur la police.', noteEn: 'Canada line published by brokers; confirm the Québec number on your policy.', logo: 'burns-wilcox.webp' },
	{ id: 'ches-special-risk', name: 'CHES Special Risk', categories: ['mga'], website: 'https://www.chesspecialrisk.ca/', claimsPhones: ['1 844 384-0867'], noteFr: 'Ligne Canada publiée par les courtiers; Québec à confirmer sur la police.', noteEn: 'Canada line published by brokers; confirm the Québec number on your policy.', logo: 'ches-special-risk.webp' },
	{ id: 'coast-underwriters', name: 'Coast Underwriters', categories: ['mga'], website: 'https://www.coastunderwriters.ca/', claimsPhones: ['514 288-7997'], noteFr: 'Réclamations commerciales, bureau de Montréal (Kevyn Stromei). Plaisance : suivre la police Intact.', noteEn: 'Commercial claims, Montréal office (Kevyn Stromei). Pleasure craft: follow the Intact policy.', logo: 'coast-underwriters.webp' },
	{ id: 'juste-underwriting', name: 'JUSTe Underwriting', categories: ['mga'], website: 'https://just-underwriting.com/', claimsPhones: ['1 833 656-3553'], logo: 'juste-underwriting.svg' },
	{ id: 'k-k-insurance-canada', name: 'K&K Insurance Canada', categories: ['mga'], website: 'https://www.kandkcanada.com/', claimsPhones: ['1 800 753-2632'], logo: 'k-k-insurance-canada.webp' },
	{ id: 'markel', name: 'Markel', categories: ['mga'], website: 'https://www.markel.ca/', claimsPhones: ['1 800 223-8858', '1 877 243-2875'], noteFr: 'Premier : heures de bureau. Deuxième : urgences hors heures.', noteEn: 'First: office hours. Second: after-hours emergencies.', logo: 'markel.webp' },
	{ id: 'morin-elliot', name: 'Morin Elliot', categories: ['mga'], website: 'https://www.morinelliott.ca/', claimsPhones: ['450 444-0771', '450 444-3247'], noteFr: 'Premier : heures de bureau. Deuxième : urgences hors heures.', noteEn: 'First: office hours. Second: after-hours emergencies.', logo: 'morin-elliot.webp' },
	{ id: 'pacific-marine-underwriting-managers', name: 'Pacific Marine Underwriting Managers', categories: ['mga'], website: 'https://pacificmarine.ca/fr/', claimsPhones: ['1 888 974-4974'], noteFr: 'Bureau du Québec, heures normales.', noteEn: 'Québec office, regular hours.', logo: 'pacific-marine-underwriting-managers.svg' },
	{ id: 'pal-insurance', name: 'PAL Insurance', categories: ['mga'], website: 'https://www.palcanada.com/', claimsPhones: ['1 800 265-8098'], noteFr: 'Demander votre représentant PAL; procédure selon le produit.', noteEn: 'Ask for your PAL representative; the procedure depends on the product.', logo: 'pal-insurance.webp' },
	{ id: 'pistagnesi', name: 'Pistagnesi', categories: ['mga'], website: 'https://pistagnesi.com/', claimsPhones: ['1 800 235-8784'], noteFr: 'Urgence ou sinistre hors des heures de bureau.', noteEn: 'Emergency or claim outside office hours.', logo: 'pistagnesi.svg' },
	{ id: 'premier-canada', name: 'Premier Canada', categories: ['mga'], website: 'https://premiergroup.ca/', claimsPhones: ['1 800 235-8784'], noteFr: 'Urgences hors des heures de bureau.', noteEn: 'Emergencies outside office hours.', logo: 'premier-canada.svg' },
	{ id: 'revau', name: 'Revau', categories: ['mga'], website: 'https://www.revau.com/', claimsPhones: ['1 866 254-4221'], noteFr: 'Standard, demander le service des réclamations.', noteEn: 'Switchboard, ask for the claims department.', logo: 'revau.webp' },
	{ id: 'services-de-gestion-tsw', name: 'Services de Gestion TSW', categories: ['mga'], website: 'https://www.tsw-management.ca/fr/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: 'tsw-management-services.svg' },
	{ id: 'smb-assurance', name: 'SMB Assurance', categories: ['mga'], website: 'https://smbrs.ca/', claimsPhones: ['514 447-6762, poste 101'], noteFr: 'Standard, déclaration de sinistre par le courtier; pas une ligne d’urgence.', noteEn: 'Switchboard, claims are reported through your broker; not an emergency line.', logo: 'smb-assurance.webp' },
	{ id: 'soplex', name: 'Soplex', categories: ['mga'], website: 'https://soplex.ca/', claimsPhones: ['581 318-8828'], noteFr: 'Bureau du Québec : demander le service des sinistres.', noteEn: 'Québec office: ask for the claims department.', logo: 'soplex.svg' },
	{ id: 'south-western-insurance-group', name: 'South Western Insurance Group', categories: ['mga'], website: 'https://swgins.com/', claimsPhones: ['1 866 794-5463'], logo: 'south-western-insurance-group.webp' },
	{ id: 'sum-insurance', name: 'SUM Insurance', categories: ['mga'], website: 'https://www.suminsurance.ca/', claimsPhones: ['1 855 845-7861'], noteFr: 'Bureau de Montréal : demander le service des réclamations.', noteEn: 'Montréal office: ask for the claims department.', logo: 'sum-insurance.webp' },
	{ id: 'tcim-profescau', name: 'TCIM-Profescau', categories: ['mga'], website: 'https://www.tcim.ca/', claimsPhones: ['1 844 849-5099'], noteFr: 'Urgences hors des heures de bureau, Canada.', noteEn: 'Emergencies outside office hours, Canada.', logo: 'tcim-profescau.webp' },
	{ id: 'totten-group', name: 'Totten Group', categories: ['mga'], website: 'https://www.tottengroup.com/', claimsPhones: ['1 855 535-0554'], noteFr: 'Urgences hors des heures de bureau.', noteEn: 'Emergencies outside office hours.', logo: 'totten-group.webp' },
	{ id: 'trinity-underwriting', name: 'Trinity Underwriting', categories: ['mga'], website: 'https://www.trinityunderwriting.ca/', claimsPhones: ['416 363-3431'], noteFr: 'Standard Canada, réclamation par formulaire/courriel; pas une ligne d’urgence.', noteEn: 'Canada switchboard, claims by form/email; not an emergency line.', logo: 'trinity-underwriting.webp' },
	{ id: 'vago', name: 'Vago', categories: ['mga'], website: 'https://vagoassure.com/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: 'vago.webp' },
	{ id: 'victor', name: 'Victor', categories: ['mga'], website: 'https://www.victorinsurance.com/ca/fr/home.html', claimsPhones: ['1 800 267-6684'], noteFr: 'Standard biens/responsabilité, demander les réclamations; numéro selon la police.', noteEn: 'Property/liability switchboard, ask for claims; the number depends on your policy.', logo: 'victor.webp' },
	{ id: 'allianz-trade', name: 'Allianz Trade', categories: ['commercial'], website: 'https://www.allianz-trade.com/fr_CA.html', claimsPhones: ['1 877 511-3224'], noteFr: 'Service aux assurés; réclamation de crédit via Allianz Trade Online.', noteEn: 'Policyholder service; credit claims through Allianz Trade Online.', logo: 'allianz-trade.webp' },
	{ id: 'berkley-canada', name: 'Berkley Canada', categories: ['commercial'], website: 'https://www.berkleycanada.com/', claimsPhones: ['1 877 304-1178'], logo: 'berkley-canada.webp' },
	{ id: 'northbridge', name: 'Northbridge', categories: ['commercial'], website: 'https://www.northbridgeassurance.ca/', claimsPhones: ['1 855 621-6262'], logo: 'northbridge-insurance.webp' },
	{ id: 'tokio-marine', name: 'Tokio Marine', categories: ['commercial'], website: 'https://tokiomarinecanada.com/fr/', claimsPhones: [], noteFr: 'Numéro Québec non confirmé. Consulter la police ou le courtier.', noteEn: 'Québec number not confirmed. Check your policy or ask your broker.', logo: 'tokio-marine.webp' },
	{ id: 'zurich', name: 'Zurich', categories: ['commercial'], website: 'https://www.zurichcanada.com/fr-ca', claimsPhones: ['1 866 345-3454'], logo: 'zurich.webp' },
];

/** Insurers of one category, alphabetical (as in the source workbook). */
export const insurersIn = (category: InsurerCategory): Insurer[] =>
	insurers.filter((i) => i.categories.includes(category)).sort((a, b) => a.name.localeCompare(b.name, 'en'));
