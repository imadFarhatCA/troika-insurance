import type { LegalBlock } from './legalPrivacyPolicy';

export const complaintsPolicy = {
	EN: {
		title: 'Complaints Handling and Dispute Resolution Policy',
		updatedLabel: 'Policy last updated',
		updatedDate: '2025-07-01',
		blocks: [
			{ type: 'p', text: 'This policy is intended to ensure the fair handling of complaints and disputes we receive from our clients.' },
			{ type: 'p', text: 'Our policy is designed to govern:' },
			{ type: 'list', items: [
				'The establishment, for our clients, of a complaints-handling service that is free, accessible, and easy to use',
				'The details provided to clients so they understand how we handle their complaint',
				'The management of complaints received, from receipt through to resolution',
			] },
			{ type: 'p', text: 'It also aims to contribute to the improvement of our services by allowing us to identify common causes of the complaints we receive and to implement solutions to correct problematic situations.' },

			{ type: 'h2', text: 'What We Consider a Complaint' },
			{ type: 'p', text: "A complaint expresses a reproach or dissatisfaction on the part of a client relating to the services or products we offer, along with an expectation that we take action to remedy it. This is the case, for example, when a client expects compensation or an apology from us, or asks that we take action to correct or stop the situation giving rise to the complaint." },
			{ type: 'h2', text: 'Certain Communications Are Not Considered Complaints' },
			{ type: 'p', text: 'The following examples are not complaints:' },
			{ type: 'list', items: [
				'A request for information or a document about a product or service offered',
				'A request for indemnity or an insurance claim',
				'A request to correct an administrative error, such as an error in transcribing information or in calculating an amount owed',
				'A request for access to or correction of personal information',
				'A comment or remark about us',
			] },
			{ type: 'p', text: 'Please note: we nonetheless consider a request to correct an administrative error to be a complaint when it has other consequences for the client or for several of our clients — for example, if it results in fees we must reimburse to the client(s).' },

			{ type: 'h2', text: 'Person Responsible' },
			{ type: 'p', text: 'The person responsible for the application of this policy is Aïman Alameddine, Owner and Responsible Officer.' },
			{ type: 'p', text: 'Our complaints-handling officer oversees the fair handling of complaints we receive and the respect and implementation of our policy within the firm, notably to ensure that:' },
			{ type: 'list', items: [
				'Our management and staff know and apply our complaints-handling policy',
				'Our clients can easily obtain information on how we handle complaints or on the handling of their complaint',
				'Our staff carry out the follow-up necessary for the proper handling of our clients\' complaints',
				'The person assigned to handle a complaint has the skills to handle the complaint assigned to them',
				'Each complaint is handled objectively and its handling takes the client\'s interests into account',
			] },

			{ type: 'h2', text: 'Steps in Handling a Complaint' },
			{ type: 'p', text: 'We handle each complaint objectively, taking into account the interests of the client who made it, and we communicate with them in clear and simple language.' },
			{ type: 'p', text: 'Our clients may contact us at any time to obtain information on how we handle complaints, to file a complaint, or to inquire about the handling of their complaint. You may file your complaint by contacting us through whichever means is convenient for you. You may also complete the online form of the Autorité des marchés financiers (the "Autorité"). We can help you formulate your complaint.' },
			{ type: 'p', text: 'To reach us or to find out how we handle complaints:' },
			{ type: 'list', items: [
				'By mail: 201-1955 Chemin de la Côte-de-Liesse, Montreal, Quebec H4N 3A8',
				'By phone: 514-447-7997 ext. 340',
				'By email: aiman.a@assuruni.com',
			] },

			{ type: 'h2', text: 'We Determine Whether the Communication Received Is a Complaint' },
			{ type: 'p', text: 'When a client expresses a reproach or dissatisfaction to us, we determine whether or not it constitutes a complaint. We take into account all elements communicated by the client to assess whether they are making a complaint. In case of uncertainty, we contact them to further explore the situation and assess whether they are making a complaint.' },
			{ type: 'p', text: 'We are responsible for helping the client properly formulate their complaint, for example by asking them questions to understand the situation. We also make sure we understand their expectations of us, for example to determine whether they are requesting a correction, a refund, an apology, etc.' },

			{ type: 'h2', text: 'We Take Charge of the Complaint' },
			{ type: 'p', text: 'Each complaint is recorded in our complaints register upon receipt.' },
			{ type: 'p', text: 'We ensure that complaints are taken in charge promptly and handled as quickly as possible.' },

			{ type: 'h2', text: 'We Acknowledge Receipt of the Complaint' },
			{ type: 'p', text: 'We confirm in writing to the client that we have received their complaint within 10 days, and we inform them of their right to have their complaint file reviewed by the Autorité. We also provide them with information enabling them to know the timeframe within which we will communicate our response, or to request information about the handling of their complaint.' },

			{ type: 'h2', text: 'We Document Each Complaint' },
			{ type: 'p', text: 'We create a file for each complaint. We ensure that the complaint file is kept up to date by recording relevant documents and information as the complaint is handled.' },
			{ type: 'p', text: 'The complaint file is retained for a period equivalent to the one we apply to client file retention, and in accordance with our personal information protection policy.' },

			{ type: 'h2', text: 'We Analyze the Complaint' },
			{ type: 'p', text: 'The person analyzing the complaint must obtain all information essential to handling it — for example, by contacting the client to request additional information, or by asking our staff or the representative to provide the information or documents required to analyze a client\'s complaint.' },

			{ type: 'h2', text: 'We Provide a Final Written Response' },
			{ type: 'p', text: 'We provide a final written response within 60 days. We may provide 3 types of response:' },
			{ type: 'list', items: [
				'We propose to grant the client what they are requesting: we may correct a situation, offer a refund or an apology, etc.',
				'We propose a solution that partly addresses the client\'s request or that differs from it: we attempt to find common ground',
				'We reject the client\'s complaint: if we conclude, after analysis, that the complaint is unfounded or that no settlement is possible',
			] },
			{ type: 'p', text: 'Our response explains to the client how we analyzed their complaint and what led to our response and the solution we propose to resolve it. We remind them of their right to have their complaint file reviewed by the Autorité.' },
			{ type: 'p', text: 'Sending our response does not end our communications with the client, and we continue to respond to them if they contact us, notably to answer their questions, follow up on their comments, or allow them to submit new facts relevant to the handling of their complaint.' },

			{ type: 'h2', text: 'Extension of the Deadline for Our Final Response' },
			{ type: 'p', text: 'It may happen that the person analyzing the complaint finds that handling it is longer or more complex than expected and determines that additional time is needed to continue the analysis. This additional time may not exceed 30 days. The following reasons may justify extending the deadline:' },
			{ type: 'list', items: [
				'Circumstances beyond our control delay the handling of the complaint — for example, when analyzing the complaint requires receiving documents from a third party, such as a statement or a report',
				'Exceptional circumstances arise that justify extending the analysis period — for example, if our volume of complaints increases significantly following a natural disaster',
			] },
			{ type: 'p', text: 'In this case, the person analyzing the complaint notifies the client in writing no later than the date on which the response was due to be communicated.' },

			{ type: 'h2', text: 'Evaluation of the Offer and Settlement of the Complaint' },
			{ type: 'p', text: 'When we propose a solution to settle a client\'s complaint, we allow them a reasonable period to evaluate our offer. This period must take into account the complexity of the file and allow the client, if they wish, to obtain the advice they need to accept our offer, refuse it, or present a counter-offer.' },
			{ type: 'p', text: 'When we reach an agreement with the client to settle their complaint, we have 30 days to act on the agreement. We may agree with them on a different timeframe, provided it is in their interest.' },
			{ type: 'p', text: 'We never require the person who filed the complaint to withdraw another complaint they have made to us. Furthermore, the conditions accompanying the offer are never intended to prevent the client from:' },
			{ type: 'list', items: [
				'Having their file reviewed by the Autorité',
				'Contacting the Autorité, the Chambre de la sécurité financière, the Chambre de l\'assurance de dommages, or the Canadian Investment Regulatory Organization',
			] },

			{ type: 'h2', text: 'Review of the Complaint File by the Autorité' },
			{ type: 'p', text: 'The client has the right to request that their complaint be reviewed by the Autorité if they are dissatisfied with how we have handled their complaint or with the response we have provided.' },
			{ type: 'p', text: 'The client may ask us to transfer their complaint file to the Autorité, or may address it directly. In all cases, we ensure that their file is transmitted to the Autorité within a maximum of 15 days following receipt of the request.' },

			{ type: 'h2', text: 'Simplified Handling of Certain Complaints' },
			{ type: 'p', text: 'We may handle certain complaints through a simplified process. This process applies to complaints for which we are able to offer clients a satisfactory solution within 20 days.' },
			{ type: 'p', text: 'We consider a complaint to be resolved to a client\'s satisfaction when they accept the solution we propose to resolve their complaint, or when the explanations we provide resolve the complaint.' },
			{ type: 'p', text: 'Under this process, these complaints may in particular be taken in charge by a member of our customer service team. In addition, a written acknowledgment of receipt or a final written response is not required — the person handling the complaint may do so verbally, for example during a phone call. For each complaint, the person handling it must:' },
			{ type: 'list', items: [
				'Inform the client of receipt of their complaint and of their right to request the transfer of their file to the Autorité (within 10 days)',
				'Communicate our response and the solution we propose to resolve their complaint (within 20 days)',
			] },
			{ type: 'p', text: 'These exchanges may be summarized in a document placed in the complaint file, or recorded in full in the complaint file. The complaint file may be kept within the client\'s file, including the information used in handling and settling the complaint.' },
			{ type: 'p', text: 'If we determine that the complaint cannot be resolved to the client\'s satisfaction within 20 days, we inform the client through a written notice communicated before that period expires.' },

			{ type: 'h2', text: 'Our Responsibilities' },
			{ type: 'p', text: 'Our representatives and employees: any representative or employee of the firm who receives a complaint must forward it without delay to the persons responsible for handling complaints. They must cooperate in handling any complaint and provide the documents or information necessary for its handling.' },
			{ type: 'p', text: 'Our staff assigned to complaints handling: the person responsible for handling a complaint must not do so if they are unable to handle it objectively. They must ensure they have the necessary skills or knowledge to handle the complaint and, if needed, seek support from others who can help ensure it is properly handled. They gather from our staff the information or documents necessary to analyze the complaint, and, if needed, contact the client to obtain clarification on the situation giving rise to the complaint or on their expectations.' },
			{ type: 'p', text: 'Our responsibility and that of our officers: we ensure that our policy is known to all our staff and that everyone is informed of their responsibilities. For example, we provide all staff members who may be involved in handling a complaint with a copy of our complaints-handling policy and procedure upon starting their employment, and we inform them of any changes to our policy or to our complaint-handling practices. We develop the procedures and put in place the processes necessary to handle the complaints we receive, and we ensure the training of our staff responsible for complaints handling. We appoint a complaints-handling officer after confirming that they have the necessary skills to fulfill their responsibilities. We ensure that our staff and officers cooperate in the handling of complaints.' },
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
