import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { GARAGE_PRICE_DISPLAY_SOURCE } from '~/core/constants/tradeWebsites/garage/pageShared'
import { AUTO_REPAIR_RULES_SOURCE } from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { CIRCULAR_ECONOMY_PARTS_SOURCE } from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const GARAGE_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour garage${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de garage à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour garage automobile',
    serviceDescription:
      'Site internet de garage automobile sur un modèle pensé pour les garagistes, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec prise de rendez-vous et devis en ligne.',
    serviceType: 'Création de site internet pour garage',
  },
  breadcrumbLabel: 'Garage automobile',
  shareImage: {
    titleLines: ['Site internet pour', 'garage automobile'],
    highlight: 'garage automobile',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour garage automobile${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'garage',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Le nom de votre garage, votre ville, votre couleur, votre logo et vos photos${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet pour un garage ou un mécanicien indépendant coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec prise de rendez-vous en ligne reliée à votre agenda ou devis en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, la demande de rendez-vous, vos tarifs, l’information sur les pièces issues de l’économie circulaire et les mentions légales obligatoires sont prévus.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans, et j’ai conçu le modèle de garage ci-dessus.',
  },
  atelier: {
    styleIntro: 'Un modèle pensé pour les garages. Couleurs, photos et textes sont à vous.',
    templates: {
      'mechanic-pitlane': {
        name: 'Pitlane',
        description:
          'Noir asphalte et rouge course, une grande photo, boutons d’appel et de rendez-vous en haut de page.',
      },
    },
    mediaIntro:
      'Une photo de votre atelier et de votre équipe rassure plus que n’importe quelle photo de banque. Sans photo, le site garde celles du modèle.',
    serviceOptions: [
      { id: 'servicing', label: 'Révision et entretien', defaultSelected: true },
      { id: 'diagnostics', label: 'Diagnostic électronique', defaultSelected: true },
      { id: 'brakes', label: 'Freinage', defaultSelected: true },
      { id: 'tyres', label: 'Pneus et géométrie', defaultSelected: false },
      { id: 'timing-belt', label: 'Distribution et embrayage', defaultSelected: false },
      { id: 'air-conditioning', label: 'Climatisation', defaultSelected: false },
      { id: 'bodywork', label: 'Carrosserie', defaultSelected: false },
    ],
    serviceDescription: 'Prix annoncé avant l’intervention, rien n’est fait sans votre accord.',
    requestTitle: 'Votre site de garage, à votre nom',
  },
  examples: {
    title: 'Un exemple de site internet pour garage automobile',
    imageAlt: 'Exemple de site internet pour garage automobile, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait prendre rendez-vous',
    title: 'Ce que doit contenir le site d’un garage',
    intro: 'Six éléments séparent un site qui donne confiance d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'Phone',
        title: 'Le numéro en un geste',
        description: `Un bouton d’appel visible sur chaque écran de téléphone${NBSP}: un voyant s’allume, le client vous appelle sans chercher.`,
      },
      {
        icon: 'CalendarCheck',
        title: 'La demande de rendez-vous',
        description: `Plaque, modèle, prestation et date souhaitée${NBSP}: vous préparez le créneau et les pièces avant l’arrivée de la voiture.`,
      },
      {
        icon: 'Euro',
        title: 'Vos tarifs, sans surprise',
        description: `Taux horaire, forfaits vidange ou révision, prix du diagnostic${NBSP}: affichés au garage, ils rassurent aussi en ligne.`,
      },
      {
        icon: 'MapPin',
        title: 'Adresse, plan et horaires',
        description: `L’adresse, une carte et les horaires d’ouverture${NBSP}: ce que l’on vérifie avant de déposer sa voiture.`,
      },
      {
        icon: 'ClipboardCheck',
        title: 'Les pièces de l’économie circulaire',
        description: `Obligatoire sur le site${NBSP}: la possibilité de les choisir, les pièces concernées et les cas où vous n’êtes pas tenu d’en proposer.`,
      },
      {
        icon: 'Star',
        title: 'Avis et photos de l’atelier',
        description: `Vos avis Google, votre équipe et votre atelier en vrai${NBSP}: on confie plus facilement sa voiture à des visages déjà vus.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter au garage et sur votre site',
    intro: `En 2024, la DGCCRF a contrôlé plus de 1${NBSP}600 garages, centres auto et concessions${NBSP}: 4 contrôles sur 10 ont abouti à une mise en conformité ou à une sanction, notamment pour des prix incomplets ou illisibles. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: `Arrêté du 27${NBSP}mars 1987`,
        title: 'Vos prix TTC affichés au garage',
        text: `Taux horaires et forfaits TTC, à l’entrée et à l’accueil, avec leur mode de calcul (temps passé ou barème du constructeur)${NBSP}; le détail de chaque forfait se consulte sur demande. Le texte ne vise pas le site, mais les y reprendre rassure avant la visite.`,
        sourceName: GARAGE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: GARAGE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Avant chaque réparation',
        title: 'Un devis sur demande, un ordre de réparation signé',
        text: `Pas obligatoire, le devis ne se refuse pas au client qui le demande, et ne se fait payer que si c’est annoncé. L’ordre de réparation, très conseillé, porte la date, le véhicule, son kilométrage, les travaux, leur coût probable et le délai d’immobilisation.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Code de la consommation, art. D224-25-2',
        title: 'Les pièces issues de l’économie circulaire',
        text: `Le client peut choisir des pièces issues de l’économie circulaire (carrosserie amovible, optiques, vitrages non collés…). Ce choix, les pièces concernées et les exceptions s’affichent à l’accueil et doivent aussi figurer sur votre site.`,
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Raison sociale et forme juridique (ou nom et mention EI), adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: DGCCRF (fiche sur l’ordre de réparation, qui reprend l’arrêté du 27${NBSP}mars 1987, et enquête publiée le 4${NBSP}juin 2026), Institut national de la consommation (les garagistes en 20 questions-réponses), Légifrance (code de la consommation, articles L224-67 et R224-22 à D224-25-5), Entreprendre.Service-Public.fr (mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle, à votre nom et à votre couleur, avec sa demande de rendez-vous. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, prise de rendez-vous en ligne reliée à votre agenda, devis en ligne, une page par prestation et par commune pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Déjà sur dibodev.fr pour les garages',
    toolCard: {
      icon: 'Wrench',
      label: 'Test gratuit, 6 questions',
      title: `Quel logiciel de garage automobile choisir${NBSP}?`,
      description: `Devis, ordres de réparation, facturation${NBSP}: les prix 2026 des logiciels de garage, et quand le sur mesure vaut le coup.`,
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Modèle gratuit',
      title: `Ordre de réparation garage${NBSP}: modèle Excel et PDF`,
      description: 'Avec le devis, le kilométrage, l’accord sur les pièces de réemploi et les totaux calculés.',
    },
  },
  faq: {
    title: `Site internet de garage${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un garage${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec prise de rendez-vous ou devis en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos textes, vos photos, vos prestations et vos tarifs depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mes clients peuvent-ils prendre rendez-vous sur le site${NBSP}?`,
        answer: `Oui. Le modèle comprend un formulaire de demande de rendez-vous${NBSP}: plaque d’immatriculation, marque et modèle, prestations souhaitées et date, envoyés à votre adresse e-mail. Un agenda en ligne avec des créneaux à réserver relève du sur mesure, à partir de 1${NBSP}500${NBSP}€.`,
      },
      {
        question: `Mon site va-t-il apparaître sur Google${NBSP}?`,
        answer: `Il est construit pour la recherche locale${NBSP}: votre ville et votre adresse écrites en clair, chaque prestation nommée, une carte et vos avis Google. Pour viser plusieurs communes, le sur mesure ajoute une page par ville et par prestation.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site en haut de la page, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un garage${NBSP}?`,
        answer: `L’information sur les pièces issues de l’économie circulaire (le choix offert au client, les pièces concernées, les exceptions), les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Vos taux horaires et forfaits TTC, affichés au garage, ont aussi leur place sur le site. Je mets tout en place avec vous avant la mise en ligne.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de garage, prêt à faire appeler',
    description: `Un modèle pensé pour les garages, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de garage à votre nom, gratuit à voir',
}
