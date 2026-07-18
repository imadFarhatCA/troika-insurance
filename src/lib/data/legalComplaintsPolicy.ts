import type { LegalBlock } from './legalPrivacyPolicy';

export const complaintsPolicy = {
	EN: {
		title: 'Complaints Processing and Dispute Resolution Policy',
		updatedLabel: 'Policy update date',
		updatedDate: '2025-07-01',
		blocks: [
			{ type: 'p', text: 'The purpose of this policy is to ensure the fair handling of complaints and disputes received from our clients.' },
			{ type: 'p', text: 'This policy is intended to provide a framework for:' },
			{ type: 'list', items: [
				'Establishing a free, accessible, and easy-to-use complaint handling service for our clients',
				'Providing clients with information to help them understand how we process their complaints',
				'Managing complaints from receipt through to resolution',
			] },
			{ type: 'p', text: 'It also aims to contribute to the continuous improvement of our services by enabling us to identify common causes of complaints and implement solutions to address recurring issues.' },

			{ type: 'h2', text: 'What We Consider a Complaint' },
			{ type: 'p', text: 'A complaint is an expression of dissatisfaction or a reproach from a client regarding the services or products we offer, together with an expectation that we will take action to address the issue. For example, a client may expect compensation, an apology, or corrective measures to remedy or stop the situation that gave rise to the complaint.' },

			{ type: 'h2', text: 'Certain Communications Are Not Considered Complaints' },
			{ type: 'p', text: 'The following examples are not complaints:' },
			{ type: 'list', items: [
				'A request for information or documentation regarding a product or service offered',
				'A claim for compensation or an insurance claim',
				'A request to correct an administrative error, such as a transcription error or an error in the calculation of an amount due',
				'A request to access or amend personal information',
				'A comment or observation about our organization',
			] },

			{ type: 'h2', text: 'Please Note' },
			{ type: 'p', text: 'However, we consider a request to correct an administrative error to be a complaint when that error results in additional consequences for the client or for several clients. For example, this would be the case if the error resulted in fees that must be reimbursed to the client(s).' },

			{ type: 'h2', text: 'Person Responsible' },
			{ type: 'p', text: 'The person responsible for the application of this policy is Aïman Alameddine, Owner, and Responsible Officer.' },
			{ type: 'p', text: 'Our Complaints Officer ensures the fair treatment of complaints received and oversees compliance with and implementation of this policy within the firm, including ensuring that:' },
			{ type: 'list', items: [
				'Management and staff are aware of and apply this complaint handling policy',
				'Clients can easily obtain information regarding how complaints are handled or about the status of their complaint',
				'Staff carry out the follow-up required for the proper handling of client complaints',
				'The person assigned to handle a complaint possesses the skills and knowledge required to do so',
				"Each complaint is handled objectively and with due consideration for the client's interests",
			] },

			{ type: 'h2', text: 'Complaint Handling Process' },
			{ type: 'p', text: 'We handle each complaint objectively while considering the interests of the client who submitted it, and we communicate with clients in clear and simple language.' },
			{ type: 'p', text: 'Clients may contact us at any time to obtain information about our complaint handling process, to submit a complaint, or to inquire about the status of a complaint.' },
			{ type: 'p', text: 'You may submit your complaint using the method most convenient for you. You may also complete the complaint form available on the website of the Autorité des marchés financiers (AMF). We can assist you in formulating your complaint.' },

			{ type: 'h2', text: 'Contact Information' },
			{ type: 'p', text: 'To contact us or to obtain information regarding our complaint handling process:' },
			{ type: 'list', items: [
				'By mail: 201-1955 Chemin de la Côte-de-Liesse, Montréal, Quebec H4N 3A8',
				'By telephone: 514-447-7997 ext. 340',
				'By email: aiman.a@assuruni.com',
			] },

			{ type: 'h2', text: 'Determining Whether a Communication Is a Complaint' },
			{ type: 'p', text: 'When a client expresses dissatisfaction or a reproach, we determine whether the communication constitutes a complaint. We consider all information provided by the client in making this assessment. If there is uncertainty, we will contact the client to better understand the situation and determine whether a complaint is being made.' },
			{ type: 'p', text: "We are responsible for helping clients clearly formulate their complaints, including by asking questions to better understand the situation. We also ensure we understand the client's expectations, such as whether they are seeking a correction, reimbursement, apology, or other remedy." },

			{ type: 'h2', text: 'Complaint Intake' },
			{ type: 'p', text: 'Each complaint is recorded in our complaint register upon receipt.' },
			{ type: 'p', text: 'We ensure that complaints are acknowledged promptly and handled as quickly as possible.' },

			{ type: 'h2', text: 'Acknowledgement of Reception' },
			{ type: 'p', text: 'We acknowledge receipt of the complaint in writing within 10 days and inform the client of their right to have their complaint file examined by the AMF. We also provide information regarding the expected timeframe for our response and how to obtain updates regarding the handling of the complaint.' },

			{ type: 'h2', text: 'Documentation of Complaints' },
			{ type: 'p', text: 'A file is created for each complaint. We ensure that the complaint file remains current and contains all relevant documents and information collected throughout the complaint handling process.' },
			{ type: 'p', text: 'Complaint files are retained for the same period as client files and in accordance with our Privacy Policy.' },

			{ type: 'h2', text: 'Complaint Analysis' },
			{ type: 'h2', text: "Understanding the Complaint and the Client's Expectations" },
			{ type: 'p', text: 'The person responsible for analyzing the complaint must obtain all information necessary to assess it. This may include contacting the client for additional information or requesting documents and information from staff members or representatives involved.' },

			{ type: 'h2', text: 'Final Written Response' },
			{ type: 'p', text: 'We provide a final written response within 60 days. We may provide one of the following responses:' },
			{ type: 'list', items: [
				"We agree to the client's request and propose corrective action, reimbursement, an apology, or another appropriate remedy",
				"We propose a solution that partially satisfies the client's request or differs from the requested remedy, with the goal of reaching a mutually acceptable resolution",
				'We reject the complaint if, following our analysis, we determine that it is unfounded or that no resolution is possible',
			] },
			{ type: 'p', text: "Our response explains how the complaint was analyzed, the factors that led to our conclusion, and any proposed resolution. We also remind the client of their right to request that the AMF review their complaint file." },
			{ type: 'p', text: 'The issuance of our response does not end communications with the client. We continue to respond to inquiries, comments, and any new relevant information related to the complaint.' },

			{ type: 'h2', text: 'Extension of the Response Period' },
			{ type: 'p', text: 'In some cases, the person handling the complaint may determine that additional time is required due to the complexity of the matter. Any extension may not exceed 30 additional days. Examples of circumstances that may justify an extension include:' },
			{ type: 'list', items: [
				'Delays caused by factors beyond our control, such as waiting for documents from a third party',
				'Exceptional circumstances, such as a significant increase in complaint volume following a natural disaster',
			] },
			{ type: 'p', text: 'In such cases, the client will be notified in writing no later than the date on which the response was originally due.' },

			{ type: 'h2', text: 'Evaluation of Settlement Offers' },
			{ type: 'p', text: 'When we propose a resolution, we provide the client with a reasonable amount of time to evaluate the offer. The timeframe will reflect the complexity of the matter and allow the client to seek advice before accepting, rejecting, or making a counteroffer.' },
			{ type: 'p', text: "Once an agreement is reached, we have 30 days to implement it unless another timeframe is agreed upon and is in the client's interest." },
			{ type: 'p', text: 'We never require a complainant to withdraw another complaint as a condition of settlement. Furthermore, settlement conditions will never prevent a client from:' },
			{ type: 'list', items: [
				'Requesting a review of their complaint by the AMF',
				"Contacting the AMF, the Chambre de la sécurité financière, the Chambre de l'assurance de dommages, or the Canadian Investment Regulatory Organization (CIRO)",
			] },

			{ type: 'h2', text: 'Review of a Complaint File by the AMF' },
			{ type: 'p', text: 'Clients have the right to request that their complaint be reviewed by the AMF if they are dissatisfied with the way we handled their complaint or with our response.' },
			{ type: 'p', text: 'Clients may request that we transfer their complaint file to the AMF or may contact the AMF directly. In either case, we will transmit the complaint file within 15 days of receiving the request.' },

			{ type: 'h2', text: 'Simplified Process for Certain Complaints' },
			{ type: 'p', text: 'Certain complaints may be handled through a simplified process where we are able to provide a satisfactory resolution within 20 days.' },
			{ type: 'p', text: "A complaint is considered resolved to the client's satisfaction when the client accepts the proposed solution or when the explanations provided satisfactorily address the concern." },
			{ type: 'p', text: 'Under this process: complaints may be handled by a member of our customer service team. A written acknowledgement of receipt and a formal written final response are not required. Communications may be conducted verbally, such as by telephone. For each complaint handled under this process, the individual responsible must:' },
			{ type: 'list', items: [
				"Inform the client of the receipt of the complaint and the client's right to request a transfer of the complaint file to the AMF (within 10 days)",
				'Provide the client with our response and proposed resolution (within 20 days)',
			] },
			{ type: 'p', text: 'These communications may be summarized in a document placed in the complaint file or fully documented within the file.' },
			{ type: 'p', text: "If we determine that the complaint cannot be resolved to the client's satisfaction within 20 days, we will notify the client in writing before the end of that period and continue the complaint under the standard complaint handling process." },

			{ type: 'h2', text: 'Our Responsibilities' },
			{ type: 'h2', text: 'Representatives and Employees' },
			{ type: 'p', text: 'Any representative or employee who receives a complaint must promptly forward it to the individuals responsible for complaint handling.' },
			{ type: 'p', text: 'They must cooperate fully in the handling of the complaint and provide any documents or information necessary for its review.' },

			{ type: 'h2', text: 'Staff Assigned to Complaint Handling' },
			{ type: 'p', text: 'The individual responsible for handling a complaint must not do so if they are unable to remain objective.' },
			{ type: 'p', text: 'They must ensure they possess the necessary knowledge and competencies to handle the complaint and seek assistance where appropriate.' },
			{ type: 'p', text: "They are responsible for gathering information and documents necessary for the analysis of the complaint and may contact the client to obtain clarification regarding the circumstances giving rise to the complaint or the client's expectations." },

			{ type: 'h2', text: 'Management Responsibilities' },
			{ type: 'p', text: 'We ensure that this policy is communicated to all staff and that everyone understands their responsibilities.' },
			{ type: 'p', text: 'For example, all personnel who may be involved in handling complaints receive a copy of our complaint handling policy and procedures upon joining the organization and are informed of any subsequent changes.' },
			{ type: 'p', text: 'We establish the procedures and processes necessary to handle complaints effectively and ensure that staff involved in complaint handling receive appropriate training.' },
			{ type: 'p', text: 'We appoint a Complaints Officer only after confirming that the individual possesses the competencies required to fulfill the role.' },
			{ type: 'p', text: 'We also ensure that management and staff cooperate fully in the handling of complaints.' },
		] as LegalBlock[],
	},
	FR: {
		title: 'Politique de traitement des plaintes et de règlement des différends',
		updatedLabel: 'Date de mise à jour de la politique',
		updatedDate: '2025-07-01',
		blocks: [
			{ type: 'p', text: "La présente politique a pour but d'assurer le traitement équitable des plaintes et des différends que nous recevons de la part de notre clientèle." },
			{ type: 'p', text: 'Notre politique vise à encadrer :' },
			{ type: 'list', items: [
				'La mise en place pour nos clients d\'un service de traitement des plaintes gratuit, accessible et facile à utiliser',
				'Les détails à fournir aux clients pour qu\'ils comprennent comment nous traitons leur plainte',
				'La gestion des plaintes reçues, de leur réception à leur résolution',
			] },
			{ type: 'p', text: "Elle a aussi pour objectif de contribuer à l'amélioration de nos services en nous permettant d'identifier les causes communes aux plaintes que nous recevons et de mettre en œuvre les solutions pour corriger les situations problématiques." },

			{ type: 'h2', text: 'Ce que nous considérons comme une plainte' },
			{ type: 'p', text: "Une plainte exprime un reproche ou une insatisfaction de la part d'un client en lien avec les services ou les produits que nous offrons et une attente de sa part à ce que nous prenions des mesures pour y remédier. C'est le cas, par exemple, lorsque le client s'attend à une compensation ou à des excuses de notre part, ou demande que nous posions des actions visant à corriger ou faire cesser la situation à l'origine de sa plainte." },
			{ type: 'h2', text: 'Certaines communications ne sont pas considérées comme des plaintes' },
			{ type: 'p', text: 'Les exemples suivants ne sont pas des plaintes :' },
			{ type: 'list', items: [
				"Une demande de renseignements ou d'un document à propos d'un produit ou d'un service offert",
				"Une demande d'indemnité ou une réclamation d'assurance",
				"Une demande pour corriger une erreur administrative, comme une erreur dans la transcription d'une information ou dans le calcul d'une somme due",
				"Une demande d'accès ou de modification de renseignements personnels",
				'Un commentaire ou une remarque à notre sujet',
			] },
			{ type: 'p', text: "Prenez note : nous considérons néanmoins comme une plainte la demande de correction d'une erreur administrative lorsque celle-ci entraîne d'autres conséquences pour le client ou pour plusieurs de nos clients. C'est le cas, par exemple, si elle entraîne des frais que nous devons rembourser au(x) client(s)." },

			{ type: 'h2', text: 'Personne responsable' },
			{ type: 'p', text: "La personne responsable de l'application de la présente politique est Aïman Alameddine, Propriétaire et Dirigeant Responsable." },
			{ type: 'p', text: "Notre responsable du traitement des plaintes veille au traitement équitable des plaintes que nous recevons et au respect et à la mise en œuvre de notre politique au sein du cabinet, notamment pour que :" },
			{ type: 'list', items: [
				'Notre direction et notre personnel connaissent et appliquent notre politique de traitement des plaintes',
				"Nos clients puissent facilement obtenir de l'information sur la manière dont nous traitons les plaintes ou sur le traitement de leurs plaintes",
				'Notre personnel effectue les suivis nécessaires au bon traitement des plaintes de nos clients',
				"La personne chargée du traitement d'une plainte a les compétences pour traiter la plainte qui lui est assignée",
				"Chaque plainte soit traitée de façon objective et que son traitement prenne en compte les intérêts du client",
			] },

			{ type: 'h2', text: "Les étapes du traitement d'une plainte" },
			{ type: 'p', text: "Nous traitons chaque plainte de façon objective en tenant compte des intérêts du client qui l'a formulée et nous communiquons avec lui en langage clair et simple." },
			{ type: 'p', text: "Nos clients peuvent communiquer avec nous à tout moment pour obtenir de l'information sur la façon dont nous traitons les plaintes, pour formuler une plainte ou pour se renseigner sur le traitement de leur plainte. Vous pouvez formuler votre plainte en communiquant avec nous par le moyen qui vous convient. Vous pouvez également remplir le formulaire mis en ligne de l'Autorité des marchés financiers (« l'Autorité »). Nous pouvons vous aider à formuler votre plainte." },
			{ type: 'p', text: 'Pour nous joindre ou pour connaître la façon dont nous traitons les plaintes :' },
			{ type: 'list', items: [
				'Par la poste : 201-1955 Chemin de la Côte-de-Liesse, Montréal, Québec H4N 3A8',
				'Par téléphone : 514-447-7997 poste 340',
				'Par courriel : aiman.a@assuruni.com',
			] },

			{ type: 'h2', text: 'Nous déterminons si la communication reçue est une plainte' },
			{ type: 'p', text: "Lorsque le client nous exprime un reproche ou une insatisfaction, nous déterminons s'il s'agit d'une plainte ou non. Nous tenons compte de l'ensemble des éléments communiqués par le client pour évaluer s'il formule une plainte. En cas d'incertitude, nous le contactons pour approfondir la situation et évaluer s'il formule une plainte." },
			{ type: 'p', text: "Nous avons la responsabilité d'aider le client à bien formuler sa plainte, par exemple en lui posant des questions pour comprendre la situation. Nous nous assurons aussi de comprendre ses attentes à notre endroit afin, par exemple, de déterminer s'il demande une correction, un remboursement, des excuses, etc." },

			{ type: 'h2', text: 'Nous prenons la plainte en charge' },
			{ type: 'p', text: 'Chaque plainte est consignée à notre registre de plaintes dès sa réception.' },
			{ type: 'p', text: 'Nous veillons à ce que les plaintes soient prises en charge rapidement et qu\'elles soient traitées dans les meilleurs délais.' },

			{ type: 'h2', text: 'Nous accusons réception de la plainte' },
			{ type: 'p', text: "Nous confirmons par écrit au client la réception de sa plainte dans un délai de 10 jours et l'informons de son droit de faire examiner son dossier de plainte par l'Autorité. Nous lui fournissons également les renseignements qui lui permettent d'être informé du délai prévu pour lui communiquer notre réponse ou demander de l'information concernant le traitement de sa plainte." },

			{ type: 'h2', text: 'Nous documentons chaque plainte' },
			{ type: 'p', text: 'Nous créons un dossier pour chaque plainte. Nous veillons à ce que le dossier de plainte soit tenu à jour en y consignant les documents et renseignements pertinents au fur et à mesure du traitement de la plainte.' },
			{ type: 'p', text: 'Le dossier de plainte est conservé pour une période équivalente à celle que nous appliquons pour la conservation du dossier client et conformément à notre politique de protection des renseignements personnels.' },

			{ type: 'h2', text: 'Nous analysons la plainte' },
			{ type: 'p', text: "La personne qui analyse la plainte doit obtenir toute l'information essentielle au traitement de la plainte, par exemple en communiquant avec le client pour lui demander de l'information additionnelle ou en demandant aux membres de notre personnel ou au représentant de lui fournir les renseignements ou documents requis pour analyser la plainte d'un client." },

			{ type: 'h2', text: 'Nous fournissons une réponse finale écrite' },
			{ type: 'p', text: 'Nous fournissons une réponse finale écrite dans un délai de 60 jours. Nous pouvons fournir 3 types de réponse :' },
			{ type: 'list', items: [
				'Nous proposons d\'accorder au client ce qu\'il demande : nous pouvons corriger une situation, offrir un remboursement ou des excuses, etc.',
				"Nous proposons une solution qui répond en partie à la demande du client ou qui est différente de sa demande : nous tentons de trouver un terrain d'entente",
				"Nous rejetons la plainte du client : si nous concluons, après l'analyse, que la plainte n'est pas fondée ou qu'il n'y a pas de règlement possible",
			] },
			{ type: 'p', text: "Notre réponse explique au client comment nous avons analysé sa plainte et ce qui a mené à notre réponse et à la solution que nous lui proposons pour la résoudre. Nous lui rappelons son droit de faire examiner son dossier de plainte par l'Autorité." },
			{ type: 'p', text: "L'envoi de notre réponse ne met pas fin à nos communications avec le client et nous continuons de lui répondre s'il communique avec nous, notamment pour répondre à ses questions, assurer le suivi de ses commentaires ou lui permettre de soumettre de nouveaux faits pertinents au traitement de sa plainte." },

			{ type: 'h2', text: 'Prolongation du délai pour fournir notre réponse finale' },
			{ type: 'p', text: "Il peut cependant arriver que la personne qui fait l'analyse de la plainte constate que le traitement est plus long ou complexe que prévu et détermine qu'un délai additionnel est nécessaire pour poursuivre l'analyse. Ce délai additionnel ne peut dépasser 30 jours. Les raisons suivantes peuvent justifier de prolonger le délai :" },
			{ type: 'list', items: [
				"Des circonstances hors de notre contrôle retardent le traitement de la plainte, par exemple lorsque l'analyse de la plainte requiert la réception de documents provenant d'un tiers, comme un relevé ou un rapport",
				"Des circonstances exceptionnelles se présentent et justifient un prolongement de la période d'analyse de la plainte, par exemple si nous voyons notre volume de plaintes augmenter de façon importante après une catastrophe naturelle",
			] },
			{ type: 'p', text: "Dans ce cas, la personne qui analyse la plainte en avise le client par écrit au plus tard à la date où la réponse devait lui être communiquée." },

			{ type: 'h2', text: "Évaluation de l'offre et règlement de la plainte" },
			{ type: 'p', text: "Lorsque nous proposons une solution visant à régler la plainte d'un client, nous lui accordons un délai raisonnable pour évaluer notre offre. Ce délai doit tenir compte de la complexité du dossier et permettre au client, s'il le souhaite, d'obtenir les conseils dont il a besoin pour accepter notre offre, la refuser ou présenter une contre-offre." },
			{ type: 'p', text: "Lorsque nous nous entendons avec le client pour régler sa plainte, nous avons 30 jours pour donner suite à l'entente. Nous pouvons convenir avec lui d'un délai différent, à condition que cela soit dans son intérêt." },
			{ type: 'p', text: "Nous n'obligeons jamais l'auteur de la plainte à retirer une autre plainte qu'il nous a formulée. De plus, les conditions qui accompagnent l'offre ne visent jamais à empêcher le client :" },
			{ type: 'list', items: [
				'De faire examiner son dossier par l\'Autorité',
				"De communiquer avec l'Autorité, la Chambre de la sécurité financière, la Chambre de l'assurance de dommages ou l'Organisme canadien de réglementation des investissements",
			] },

			{ type: 'h2', text: "Examen du dossier de plainte par l'Autorité" },
			{ type: 'p', text: "Le client a le droit de demander l'examen de sa plainte par l'Autorité s'il est insatisfait de la façon dont nous traitons sa plainte ou de la réponse que nous lui avons fournie." },
			{ type: 'p', text: "Le client peut nous demander le transfert de son dossier de plainte à l'Autorité ou s'adresser directement à celle-ci. Dans tous les cas, nous nous assurons de transmettre son dossier à l'Autorité dans un délai maximal de 15 jours suivant la réception de la demande." },

			{ type: 'h2', text: 'Traitement simplifié de certaines plaintes' },
			{ type: 'p', text: 'Nous pouvons traiter certaines plaintes selon un processus simplifié. Celui-ci s\'applique aux plaintes pour lesquelles nous sommes en mesure d\'offrir aux clients une solution satisfaisante dans un délai de 20 jours.' },
			{ type: 'p', text: "Nous considérons qu'une plainte est réglée à la satisfaction d'un client lorsqu'il accepte la solution que nous lui proposons pour résoudre sa plainte ou que les explications que nous lui fournissons permettent de résoudre la plainte." },
			{ type: 'p', text: "Dans le cadre de ce processus, ces plaintes peuvent notamment être prises en charge par un membre de notre service à la clientèle. De plus, il n'est pas requis de transmettre au client un accusé de réception écrit ou une réponse finale écrite. La personne qui traite la plainte peut le faire verbalement, par exemple dans le cadre d'un appel téléphonique. La personne qui traite la plainte doit, pour chaque plainte :" },
			{ type: 'list', items: [
				"Informer le client de la réception de sa plainte et de son droit de demander le transfert de son dossier à l'Autorité (dans un délai de 10 jours)",
				'Lui communiquer notre réponse et la solution que nous proposons pour résoudre sa plainte (dans un délai de 20 jours)',
			] },
			{ type: 'p', text: 'Ces échanges peuvent être résumés dans un document déposé au dossier de plainte ou être consignés au dossier de plainte intégralement. Le dossier de plainte peut être consigné au dossier du client, incluant les renseignements utilisés dans le cadre du traitement de la plainte et de son règlement.' },
			{ type: 'p', text: "Si nous constatons que la plainte ne peut être résolue à la satisfaction du client dans un délai de 20 jours, nous en informons le client par le biais d'un avis écrit qui lui est communiqué avant l'expiration de ce délai." },

			{ type: 'h2', text: 'Nos responsabilités' },
			{ type: 'p', text: 'Nos représentants et employés : tout représentant ou employé du cabinet qui reçoit une plainte doit la transmettre sans délai aux personnes chargées du traitement des plaintes. Il doit collaborer au traitement de toute plainte et fournir les documents ou les renseignements qui sont nécessaires au traitement de la plainte.' },
			{ type: 'p', text: "Notre personnel assigné au traitement des plaintes : la personne chargée de traiter la plainte ne doit pas le faire si elle n'est pas en mesure de la traiter de façon objective. Elle doit s'assurer d'avoir les compétences ou les connaissances nécessaires pour traiter la plainte et, au besoin, elle doit solliciter le soutien des personnes qui peuvent l'aider à assurer le traitement de la plainte. Elle collecte auprès de notre personnel les informations ou les documents nécessaires à l'analyse de la plainte. Au besoin, elle communique avec le client pour obtenir des précisions sur la situation à l'origine de la plainte ou sur les attentes de ce dernier." },
			{ type: 'p', text: "Notre responsabilité et celle de nos dirigeants : nous nous assurons que notre politique soit connue de l'ensemble de notre personnel et que chacun soit informé de ses responsabilités. Par exemple, nous remettons à tous les membres du personnel, qui pourraient être impliqués dans le traitement d'une plainte, une copie de notre politique et procédure de traitement des plaintes, dès leur entrée en fonction, et nous les informons de tout changement à notre politique ou à nos façons de traiter les plaintes." },
			{ type: 'p', text: "Nous élaborons les procédures et mettons en place les processus nécessaires au traitement des plaintes que nous recevons et nous veillons à la formation de notre personnel chargé du traitement des plaintes. Nous désignons un responsable du traitement des plaintes après nous être assurés qu'il a les compétences nécessaires pour s'acquitter de ses responsabilités. Nous nous assurons que notre personnel et nos dirigeants collaborent au traitement des plaintes." },
		] as LegalBlock[],
	},
};
