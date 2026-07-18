export type LegalBlock =
	| { type: 'h2'; text: string }
	| { type: 'p'; text: string }
	| { type: 'list'; items: string[] };

export const privacyPolicy = {
	EN: {
		title: 'Privacy Policy',
		updatedLabel: 'Last updated',
		updatedDate: '2025-07-01',
		blocks: [
			{ type: 'p', text: "At Troika Insurance, we are committed to protecting the privacy and confidentiality of our clients' personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA)." },
			{ type: 'p', text: 'By using the Troika Insurance website or by choosing to provide personal information through one of our insurance brokers, you consent to the practices described in this Privacy Policy.' },
			{ type: 'p', text: 'We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on our website. We encourage you to review this policy periodically to stay informed about how we protect and use your personal information.' },
			{ type: 'p', text: 'Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.' },

			{ type: 'h2', text: 'Collecting Personal Information' },
			{ type: 'p', text: 'We collect personal information that is necessary to provide you with our insurance brokerage services. Your personal information may be used for the following purposes:' },
			{ type: 'list', items: [
				'To provide, administer, and manage your insurance policies',
				'To communicate with you regarding your policies and our services',
				'For underwriting and claims processing',
				'To comply with legal and regulatory requirements',
				'To prevent and detect fraud',
			] },
			{ type: 'p', text: 'The personal information we may collect includes:' },
			{ type: 'list', items: [
				'Personal Identification Information (such as name, address, date of birth, and contact details)',
				'Financial Information (such as payment details or financial history relevant to insurance coverage)',
				'Insurance-Related Information (such as policy details, claims history, and risk information)',
				'Usage Data (such as information about how you interact with our website)',
			] },
			{ type: 'p', text: 'We obtain your consent to collect, use, and disclose your personal information, except where otherwise permitted or required by law. Consent may be express (for example, in writing) or implied (for example, when you voluntarily provide information to us).' },
			{ type: 'p', text: 'You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice.' },

			{ type: 'h2', text: 'Disclosure of Personal Information' },
			{ type: 'p', text: 'We do not sell your personal information.' },
			{ type: 'p', text: 'We may share your personal information with third parties only when necessary to provide our services, including:' },
			{ type: 'list', items: [
				'Insurance companies for underwriting and claims purposes',
				'Business partners and service providers who support our operations',
				'Regulatory or governmental authorities, when required by law',
			] },
			{ type: 'p', text: 'We retain personal information only for as long as necessary to fulfill the purposes for which it was collected and to meet our legal and regulatory obligations. When the information is no longer required, it will be securely destroyed or anonymized.' },

			{ type: 'h2', text: 'Security and Protection' },
			{ type: 'p', text: 'We have implemented appropriate technical and organizational safeguards to protect your personal information against loss, theft, unauthorized access, disclosure, or misuse. These measures include encryption, access controls, and secure storage systems.' },
			{ type: 'p', text: 'You have the right to request access to the personal information we hold about you and to request corrections if the information is inaccurate or incomplete. To make such a request, please contact our Privacy Officer.' },
			{ type: 'p', text: 'You may also withdraw your consent to our use of your personal information, subject to legal and contractual limitations.' },
			{ type: 'p', text: 'Your personal information may be stored or processed in jurisdictions outside of your province or country of residence where our service providers operate. By using our services, you consent to the transfer of your information to these jurisdictions, which may have different data protection laws.' },

			{ type: 'h2', text: 'Contact Information' },
			{ type: 'p', text: 'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:' },
			{ type: 'list', items: [
				'By mail: 201-1955 Chemin de la Côte-de-Liesse, Montréal, Quebec H4N 3A8',
				'By telephone: 514-447-7997 ext. 340',
				'By email: aiman.a@assuruni.com',
			] },
		] as LegalBlock[],
	},
	FR: {
		title: 'Politique de confidentialité',
		updatedLabel: 'Dernière mise à jour',
		updatedDate: '2025-07-01',
		blocks: [
			{ type: 'p', text: "Chez Troika Insurance, nous nous engageons à protéger la confidentialité et la sécurité des renseignements personnels de nos clients. La présente Politique de confidentialité explique de quelle façon nous recueillons, utilisons, communiquons, conservons et protégeons vos renseignements personnels conformément aux lois canadiennes applicables en matière de protection de la vie privée, notamment la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE) ainsi qu'aux lois provinciales applicables." },
			{ type: 'p', text: "En utilisant le site Web de Troika Insurance ou en choisissant de fournir vos renseignements personnels par l'entremise de l'un de nos courtiers en assurance, vous consentez aux pratiques décrites dans la présente Politique de confidentialité." },
			{ type: 'p', text: 'Nous nous réservons le droit de modifier cette Politique de confidentialité en tout temps. Toute modification sera publiée sur notre site Web. Nous vous invitons à consulter cette politique périodiquement afin de demeurer informé de la façon dont nous protégeons et utilisons vos renseignements personnels.' },
			{ type: 'p', text: "Notre site Web peut contenir des liens vers des sites Web de tiers. La présente Politique de confidentialité ne s'applique pas à ces sites, et nous ne sommes pas responsables de leurs pratiques en matière de protection des renseignements personnels. Nous vous encourageons à consulter les politiques de confidentialité des sites Web de tiers que vous visitez." },

			{ type: 'h2', text: 'Collecte des renseignements personnels' },
			{ type: 'p', text: 'Nous recueillons uniquement les renseignements personnels nécessaires à la prestation de nos services de courtage en assurance. Vos renseignements personnels peuvent être utilisés aux fins suivantes :' },
			{ type: 'list', items: [
				"Fournir, administrer et gérer vos contrats d'assurance",
				'Communiquer avec vous au sujet de vos polices d\'assurance et de nos services',
				'Effectuer les activités de souscription et de traitement des réclamations',
				'Respecter nos obligations légales et réglementaires',
				'Prévenir, détecter et enquêter sur les cas de fraude',
			] },
			{ type: 'p', text: 'Les renseignements personnels que nous pouvons recueillir comprennent notamment :' },
			{ type: 'list', items: [
				'Renseignements d\'identification personnelle (nom, adresse, date de naissance, coordonnées, etc.)',
				"Renseignements financiers (information sur les paiements ou historique financier pertinent à votre couverture d'assurance)",
				"Renseignements liés à l'assurance (détails des polices, historique des réclamations, renseignements sur les risques, etc.)",
				"Données d'utilisation (information concernant votre utilisation de notre site Web)",
			] },
			{ type: 'p', text: "Nous obtenons votre consentement avant de recueillir, d'utiliser ou de communiquer vos renseignements personnels, sauf lorsque la loi permet ou exige autrement. Ce consentement peut être exprès (par exemple, par écrit) ou implicite (par exemple, lorsque vous nous fournissez volontairement vos renseignements)." },
			{ type: 'p', text: 'Vous pouvez retirer votre consentement en tout temps, sous réserve des restrictions prévues par la loi ou par contrat, ainsi que d\'un préavis raisonnable.' },

			{ type: 'h2', text: 'Communication des renseignements personnels' },
			{ type: 'p', text: 'Nous ne vendons jamais vos renseignements personnels.' },
			{ type: 'p', text: 'Nous pouvons toutefois communiquer vos renseignements personnels à des tiers lorsque cela est nécessaire à la prestation de nos services, notamment :' },
			{ type: 'list', items: [
				'Aux assureurs, dans le cadre de la souscription ou du traitement des réclamations',
				'À nos partenaires d\'affaires et fournisseurs de services qui soutiennent nos activités',
				"Aux organismes gouvernementaux ou autorités réglementaires lorsque la loi l'exige",
			] },
			{ type: 'p', text: "Nous conservons les renseignements personnels uniquement pour la durée nécessaire à la réalisation des fins pour lesquelles ils ont été recueillis ainsi qu'au respect de nos obligations légales et réglementaires. Lorsqu'ils ne sont plus requis, ils sont détruits de façon sécuritaire ou anonymisés conformément aux exigences applicables." },

			{ type: 'h2', text: 'Sécurité et protection des renseignements personnels' },
			{ type: 'p', text: 'Nous avons mis en place des mesures de sécurité techniques, administratives et organisationnelles appropriées afin de protéger vos renseignements personnels contre la perte, le vol, l\'accès non autorisé, la divulgation, la modification ou l\'utilisation abusive. Ces mesures comprennent notamment le chiffrement des données, des contrôles d\'accès, des systèmes de stockage sécurisés ainsi que des politiques internes de protection des renseignements personnels.' },
			{ type: 'p', text: "Vous avez le droit de demander l'accès aux renseignements personnels que nous détenons à votre sujet et d'en demander la rectification si ceux-ci sont inexacts, incomplets ou équivoques. Pour exercer ces droits, veuillez communiquer avec notre Responsable de la protection des renseignements personnels." },
			{ type: 'p', text: 'Vous pouvez également retirer votre consentement à l\'utilisation de vos renseignements personnels, sous réserve des limitations prévues par la loi ou par contrat.' },
			{ type: 'p', text: "Vos renseignements personnels peuvent être conservés ou traités à l'extérieur de votre province ou de votre pays de résidence lorsque nos fournisseurs de services exercent leurs activités dans d'autres territoires. En utilisant nos services, vous consentez à ce que vos renseignements soient transférés vers ces territoires, lesquels peuvent être assujettis à des lois différentes en matière de protection des renseignements personnels." },

			{ type: 'h2', text: 'Coordonnées' },
			{ type: 'p', text: 'Pour toute question, préoccupation ou demande concernant la présente Politique de confidentialité ou nos pratiques en matière de protection des renseignements personnels, veuillez communiquer avec nous :' },
			{ type: 'list', items: [
				'Par la poste : 201-1955 Chemin de la Côte-de-Liesse, Montréal, Québec H4N 3A8',
				'Par téléphone : 514-447-7997 poste 340',
				'Par courriel : aiman.a@assuruni.com',
			] },
		] as LegalBlock[],
	},
};
