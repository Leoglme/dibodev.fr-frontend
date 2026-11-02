import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE } from '~/core/constants/tradeWebsites/electrician/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ELECTRICIAN_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour électricien${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site d’électricien à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour électricien',
    serviceDescription:
      'Site internet d’électricien sur l’un de deux modèles, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec demande de dépannage et devis en ligne.',
    serviceType: 'Création de site internet pour électricien',
  },
  breadcrumbLabel: 'Électricien',
  shareImage: {
    titleLines: ['Site internet pour', 'électricien'],
    highlight: 'électricien',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour électricien${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'électricien',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Votre nom, votre ville, votre couleur, votre logo et vos photos de chantier${NBSP}: votre site d’électricien se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet d’électricien coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur l’un des deux modèles de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec demande de dépannage ou de devis en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, le bouton d’appel pour les dépannages, vos tarifs, votre zone d’intervention, vos qualifications et les mentions légales obligatoires sont prévus.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans, et j’ai conçu les deux modèles d’électricien ci-dessus.',
  },
  atelier: {
    styleIntro: 'Deux modèles faits pour les électriciens. Tout reste modifiable ensuite.',
    templates: {
      'electrician-eclat': {
        name: 'Éclat',
        description: `Clair et sobre${NBSP}: fond blanc, boutons bleu nuit, votre ville en couleur dans le titre et votre note Google en vue.`,
      },
      'electrician-lumen': {
        name: 'Lumen',
        description: `Fond nuit et jaune haute visibilité, gros bouton d’appel, dépannage 7${NBSP}j${NBSP}/${NBSP}7 et installations aux normes en bandeau.`,
      },
    },
    mediaIntro:
      'Vos tableaux refaits et vos chantiers valent mieux que n’importe quelle photo de banque. Sans photo, le site garde celles du modèle.',
    serviceOptions: [
      { id: 'troubleshooting', label: 'Dépannage électrique', defaultSelected: true },
      { id: 'compliance-upgrade', label: 'Mise aux normes', defaultSelected: true },
      { id: 'electrical-panel', label: 'Tableau électrique', defaultSelected: true },
      { id: 'make-safe', label: 'Mise en sécurité', defaultSelected: false },
      { id: 'rewiring', label: 'Rénovation électrique', defaultSelected: false },
      { id: 'ev-charging', label: 'Borne de recharge', defaultSelected: false },
      { id: 'lighting', label: 'Éclairage et domotique', defaultSelected: false },
    ],
    serviceDescription: `Devis gratuit, installation aux normes NF${NBSP}C${NBSP}15-100.`,
    requestTitle: 'Votre site d’électricien, à votre nom',
  },
  examples: {
    title: 'Deux exemples de sites internet pour électricien',
    imageAlt: 'Exemple de site internet pour électricien, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait appeler',
    title: 'Ce que doit contenir le site d’un électricien',
    intro: 'Six éléments séparent un site qui rassure d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'Phone',
        title: 'Le numéro en un geste',
        description: `Une coupure se signale depuis un téléphone, parfois à la lampe torche${NBSP}: le bouton d’appel reste en haut de chaque écran.`,
      },
      {
        icon: 'MapPin',
        title: 'La zone d’intervention',
        description: 'Les communes servies, écrites noir sur blanc. Google les lit aussi.',
      },
      {
        icon: 'AlertCircle',
        title: 'Le dépannage d’abord',
        description: `Disjoncteur qui saute, coupure de courant, prise qui chauffe${NBSP}: les pages que l’on cherche le soir et le week-end.`,
      },
      {
        icon: 'Euro',
        title: 'Les tarifs de dépannage',
        description: `Taux horaire, déplacement, forfaits${NBSP}: obligatoires, et rassurants quand ils sont affichés.`,
      },
      {
        icon: 'ShieldCheck',
        title: 'Qualifications et assurances',
        description: `Qualifelec, IRVE pour les bornes, décennale${NBSP}: les mentions qui rassurent avant de vous confier un tableau ou une borne.`,
      },
      {
        icon: 'Camera',
        title: 'Photos, avis et demande de devis',
        description: `Vos tableaux avant et après, vos avis Google et un formulaire de demande de devis${NBSP}: le client écrit le soir, vous le rappelez le matin.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à connaître avant de mettre votre site en ligne',
    intro: `Un site de dépannage qui n’affiche pas ses prix n’est pas en règle, et il rassure moins. Voici ce que les textes demandent à un électricien, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: `Arrêté du 24${NBSP}janvier 2017`,
        title: 'Vos tarifs en ligne, un devis avant chaque dépannage',
        text: `Taux horaire TTC, décompte du temps, forfaits, frais de déplacement, devis gratuit ou payant${NBSP}: faciles à trouver sur votre site. Avant tout dépannage, réparation ou entretien chez un particulier, un devis détaillé est remis, quel que soit le montant.`,
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Avec chaque devis et facture',
        title: 'L’attestation d’assurance décennale',
        text: `Une installation électrique encastrée relève de la garantie décennale. L’attestation de votre assurance est jointe à vos devis et à vos factures${NBSP}; la mentionner sur le site rassure avant même le premier appel.`,
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'Code de l’énergie, article D353-2',
        title: 'Une qualification pour poser des bornes de recharge',
        text: `Sauf borne de 3,7${NBSP}kW au plus dans un logement privé, un point de recharge est posé par un professionnel titulaire d’une qualification délivrée par un organisme agréé (IRVE). Si votre site propose des bornes, affichez cette qualification.`,
        sourceName: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Nom avec la mention EI, adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Légifrance (arrêté du 24${NBSP}janvier 2017, articles 2 à 4 et annexe 1, qui vise l’électricité${NBSP}; code de l’énergie, article D353-2, en vigueur depuis le 1er${NBSP}juillet 2024), Entreprendre.Service-Public.fr (garantie décennale, mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Un des deux modèles, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, demande de dépannage ou de devis en ligne reliée à votre agenda, une page par commune pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Déjà sur dibodev.fr pour les électriciens',
    toolCard: {
      icon: 'Zap',
      label: 'Test gratuit, 6 questions',
      title: `Quel logiciel pour un électricien${NBSP}?`,
      description: `Devis, interventions, attestations Consuel${NBSP}: les prix 2026 des logiciels du marché, et quand le sur mesure vaut le coup.`,
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Modèle gratuit',
      title: `PV de mise en service électricien${NBSP}: modèle Excel et PDF`,
      description: 'Avec le devis, les contrôles du tableau et de la terre, et le suivi de l’attestation Consuel.',
    },
  },
  faq: {
    title: `Site internet d’électricien${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un électricien${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec demande de dépannage ou de devis en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos textes, vos photos et vos tarifs depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon site va-t-il apparaître sur Google${NBSP}?`,
        answer: `Il est construit pour la recherche locale${NBSP}: zone d’intervention écrite en clair, prestations nommées comme vos clients les cherchent, fiche Google reliée. Pour viser plusieurs communes, le sur mesure ajoute une page par ville.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un électricien${NBSP}?`,
        answer:
          'Vos tarifs (taux horaire TTC, déplacement, forfaits, devis gratuit ou payant), les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Je les mets en place avec vous avant la mise en ligne, avec vos qualifications et votre assurance décennale.',
      },
      {
        question: `Mon site peut-il mettre en avant le dépannage 7${NBSP}j${NBSP}/${NBSP}7${NBSP}?`,
        answer: `Oui${NBSP}: le bouton d’appel reste en haut de chaque écran, et vos jours et horaires de dépannage sont écrits en clair. Le modèle Lumen l’affiche dès le premier écran. Si vous ne dépannez pas le week-end, on l’écrit aussi${NBSP}: vous évitez les appels auxquels vous ne pouvez pas répondre.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site d’électricien, prêt à faire appeler',
    description: `Deux modèles, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site d’électricien à votre nom, gratuit à voir',
}
