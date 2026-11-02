import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { RGE_LABEL_CLIENT_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/carpenter/pageShared'
import { NBSP } from '~/core/constants/typography'

export const CARPENTER_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour menuisier${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de menuisier à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour menuisier et agenceur',
    serviceDescription:
      'Site internet de menuisier sur le modèle Édito, à votre nom, à votre couleur et avec les photos de vos réalisations, nom de domaine et hébergement compris, ou site sur mesure avec galerie de réalisations et demande de devis en ligne.',
    serviceType: 'Création de site internet pour menuisier',
  },
  breadcrumbLabel: 'Menuisier',
  shareImage: {
    titleLines: ['Site internet pour', 'menuisier'],
    highlight: 'menuisier',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour menuisier${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'menuisier',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Votre nom, votre ville, votre couleur, votre logo et vos réalisations${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet de menuisier, d’agenceur ou de poseur de fenêtres coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle Édito de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec galerie de réalisations par type d’ouvrage et demande de devis en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, la galerie de vos réalisations, votre zone de pose, votre assurance décennale et les mentions légales obligatoires sont prévues.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans, et j’ai conçu le modèle Édito ci-dessus.',
  },
  atelier: {
    styleIntro:
      'Un modèle sobre, façon magazine, qui laisse toute la place à vos réalisations. Couleurs, photos et textes sont à vous.',
    templates: {
      'artisan-edito': {
        name: 'Édito',
        description: `Papier crème, grande typographie et touche ambre, votre nom en titre et un encadré avec zone, téléphone et devis${NBSP}: l’allure d’un magazine.`,
      },
    },
    mediaIntro: `Une cuisine posée, un escalier, une fenêtre${NBSP}: vos ouvrages finis valent mieux que n’importe quelle photo de banque. Sans photo, le site garde celles du modèle.`,
    serviceOptions: [
      { id: 'custom-joinery', label: 'Menuiserie sur mesure', defaultSelected: true },
      { id: 'windows-doors', label: 'Fenêtres et portes', defaultSelected: true },
      { id: 'staircases', label: 'Escaliers', defaultSelected: true },
      { id: 'fitted-wardrobes', label: 'Placards et dressings', defaultSelected: false },
      { id: 'kitchens', label: 'Cuisines', defaultSelected: false },
      { id: 'shutters-gates', label: 'Volets et portails', defaultSelected: false },
      { id: 'flooring-decking', label: 'Parquet et terrasses', defaultSelected: false },
    ],
    serviceDescription: 'Prise de cotes sur place, devis gratuit.',
    requestTitle: 'Votre site de menuisier, à votre nom',
  },
  examples: {
    title: 'Un exemple de site internet pour menuisier',
    imageAlt: 'Exemple de site internet pour menuisier, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait demander un devis',
    title: 'Ce que doit contenir le site d’un menuisier',
    intro:
      'Six éléments séparent un site qui donne envie de vous confier un chantier d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'Image',
        title: 'Vos réalisations et vos avis',
        description: `Cuisines, escaliers, dressings, fenêtres posées${NBSP}: vos ouvrages finis en photos, classés par type, avec vos avis Google à côté. C’est ce qu’un client regarde en premier.`,
      },
      {
        icon: 'Armchair',
        title: 'Chaque savoir-faire nommé',
        description: `Fabrication sur mesure, pose de fenêtres, agencement, escaliers${NBSP}: chaque prestation écrite en clair, avec les bois et les matériaux que vous travaillez. Google les lit aussi.`,
      },
      {
        icon: 'ClipboardCheck',
        title: 'Une demande de devis qui prépare le métré',
        description: `Type d’ouvrage, dimensions approximatives, photos de la pièce, commune${NBSP}: vous arrivez chez le client avec l’essentiel.`,
      },
      {
        icon: 'MapPin',
        title: 'L’atelier et la zone de pose',
        description:
          'L’adresse de l’atelier, les horaires de visite et les communes où vous posez, écrits noir sur blanc.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Assurance et labels',
        description: `Décennale, label RGE pour les fenêtres et les portes d’entrée${NBSP}: ce que le client vérifie avant de signer, et ce dont dépendent ses aides.`,
      },
      {
        icon: 'CalendarCheck',
        title: 'Les délais annoncés',
        description: `Délai de fabrication à l’atelier, délai de pose, périodes chargées${NBSP}: le client prévoit ses travaux et vous appelle au bon moment.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter sur votre site et vos devis',
    intro: `Tarifs de dépannage, assurance décennale, label RGE, mentions légales${NBSP}: ce qui doit figurer sur votre site, vos devis et vos contrats. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: 'Arrêté du 24 janvier 2017',
        title: 'Tarifs en ligne, devis avant les travaux',
        text: `Menuiserie, serrurerie, vitrerie, portes de garage${NBSP}: pour un dépannage, une réparation ou un entretien, taux horaire TTC, forfaits et frais de déplacement sont faciles à trouver sur votre site, et un devis détaillé précède les travaux, même petits.`,
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Avec chaque devis et facture',
        title: 'L’attestation d’assurance décennale',
        text: 'Pour la pose de fenêtres et de portes, dont les huisseries relèvent de la garantie décennale, l’attestation de votre assurance est jointe à vos devis et à vos factures. La mentionner sur le site rassure avant même le premier appel.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: `Depuis le 2${NBSP}juillet 2025`,
        title: `Label RGE${NBSP}: le dire avant la signature`,
        text: `Fenêtres, volets isolants, porte d’entrée${NBSP}: avant la signature, vous dites par écrit si vous êtes RGE pour ces travaux, justificatif joint, ou sinon ce que cela change pour les aides du client, comme l’éco-prêt à taux zéro. À défaut, le contrat est nul.`,
        sourceName: RGE_LABEL_CLIENT_INFORMATION_SOURCE.name,
        sourceUrl: RGE_LABEL_CLIENT_INFORMATION_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Nom avec la mention EI, adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Légifrance (arrêté du 24 janvier 2017, articles 1 à 4 et annexe 1${NBSP}; Code de la consommation, article L224-114), Entreprendre.Service-Public.fr (garantie décennale, label RGE, mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation), Service-Public.fr (éco-prêt à taux zéro). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle Édito, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et les photos de vos réalisations, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, galerie de réalisations par type d’ouvrage, demande de devis avec dimensions et photos, une page par commune pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Déjà sur dibodev.fr pour les menuisiers',
    toolCard: {
      icon: 'Hammer',
      label: 'Test gratuit, 6 questions',
      title: `Quel logiciel pour votre menuiserie${NBSP}?`,
      description: `Devis avec métré, fiches de débit, planning de l’atelier et des poses${NBSP}: les prix 2026 des logiciels du marché, et quand le sur mesure vaut le coup.`,
    },
    freeTemplateCard: {
      icon: 'FileSpreadsheet',
      label: 'Modèle gratuit',
      title: `Fiche de débit menuiserie${NBSP}: modèle Excel gratuit`,
      description: 'Plus un devis avec métré, un plan de coupe et un PV de réception, coût matière et totaux calculés.',
    },
  },
  faq: {
    title: `Site internet de menuisier${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un menuisier${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec galerie de réalisations et demande de devis en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous ajoutez vos dernières réalisations, changez vos textes et vos photos depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon site va-t-il apparaître sur Google${NBSP}?`,
        answer: `Il est construit pour la recherche locale${NBSP}: zone de pose écrite en clair, chaque prestation nommée, fiche Google reliée. Pour viser plusieurs communes, le sur mesure ajoute une page par ville.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un menuisier${NBSP}?`,
        answer:
          'Vos tarifs de dépannage et de réparation (taux horaire TTC, déplacement, forfaits, devis gratuit ou payant), les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Votre assurance décennale et, si vous l’avez, votre label RGE rassurent aussi. Je mets tout en place avec vous avant la mise en ligne.',
      },
      {
        question: `Dois-je afficher mes prix alors que je travaille sur mesure${NBSP}?`,
        answer: `Pour un ouvrage sur mesure, le prix vient du devis, après le métré. L’arrêté du 24 janvier 2017 vise vos dépannages, réparations et entretiens chez un particulier${NBSP}: pour ceux-là, taux horaire TTC, forfaits et frais de déplacement doivent être faciles à trouver sur le site.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de menuisier, prêt à faire demander des devis',
    description: `Le modèle Édito, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de menuisier à votre nom, gratuit à voir',
}
