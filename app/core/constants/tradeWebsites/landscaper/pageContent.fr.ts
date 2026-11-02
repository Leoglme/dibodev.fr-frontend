import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { HOME_SERVICES_PRICE_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/landscaper/pageShared'
import { NBSP } from '~/core/constants/typography'

export const LANDSCAPER_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour paysagiste${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de paysagiste à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour paysagiste',
    serviceDescription:
      'Site internet de paysagiste sur un modèle pensé pour le métier, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec demande de devis en ligne.',
    serviceType: 'Création de site internet pour paysagiste',
  },
  breadcrumbLabel: 'Paysagiste',
  shareImage: {
    titleLines: ['Site internet pour', 'paysagiste'],
    highlight: 'paysagiste',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour paysagiste${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'paysagiste',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Votre nom, votre ville, votre couleur, votre logo et les photos de vos jardins${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet de paysagiste coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle Verdure de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec demande de devis en ligne et une page par commune, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, vos prestations, votre zone d’intervention et les mentions légales obligatoires sont prévues, avec l’encart crédit d’impôt si vous êtes déclaré en services à la personne.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans, et j’ai conçu le modèle de paysagiste ci-dessus.',
  },
  atelier: {
    styleIntro: 'Un modèle pensé pour les paysagistes. Couleurs, photos et textes sont à vous.',
    templates: {
      'landscaper-verdure': {
        name: 'Verdure',
        description:
          'Fond crème aux halos vert d’eau, grand titre vert sapin, bouton vert citron et large photo de jardin.',
      },
    },
    mediaIntro: `Un massif, une terrasse, une haie bien taillée${NBSP}: vos propres jardins valent mieux qu’une photo de banque d’images. Sans photo, le site garde celles du modèle.`,
    serviceOptions: [
      { id: 'garden-design', label: 'Création de jardins', defaultSelected: true },
      { id: 'garden-maintenance', label: 'Entretien et tonte', defaultSelected: true },
      { id: 'patios-paths', label: 'Terrasses et allées', defaultSelected: true },
      { id: 'hedge-trimming', label: 'Taille de haies', defaultSelected: false },
      { id: 'tree-work', label: 'Élagage et abattage', defaultSelected: false },
      { id: 'fences-gates', label: 'Clôtures et portails', defaultSelected: false },
      { id: 'irrigation', label: 'Arrosage automatique', defaultSelected: false },
    ],
    serviceDescription: 'Visite du terrain et devis détaillé avant les travaux.',
    requestTitle: 'Votre site de paysagiste, à votre nom',
  },
  examples: {
    title: 'Un exemple de site internet pour paysagiste',
    imageAlt: 'Exemple de site internet pour paysagiste, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait demander un devis',
    title: 'Ce que doit contenir le site d’un paysagiste',
    intro:
      'Six éléments séparent un site qui donne envie de vous confier son jardin d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'Camera',
        title: 'Vos jardins en photos',
        description: `Avant et après, saison après saison${NBSP}: on choisit un paysagiste sur ses photos bien plus que sur ses textes.`,
      },
      {
        icon: 'Sprout',
        title: 'Création et entretien, séparés',
        description: `Une partie pour créer ou refaire un jardin, une autre pour l’entretien à l’année${NBSP}: ce ne sont pas les mêmes clients.`,
      },
      {
        icon: 'MapPin',
        title: 'La zone d’intervention',
        description: 'Les communes où vous intervenez, écrites noir sur blanc. Google les lit aussi.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Les contrats d’entretien',
        description: `Tonte, taille, ramassage des feuilles, nombre de passages par an${NBSP}: un forfait clair donne envie de signer.`,
      },
      {
        icon: 'Euro',
        title: 'Le crédit d’impôt, si vous y avez droit',
        description: `Déclaré en services à la personne${NBSP}? Annoncez le crédit d’impôt de 50${NBSP}% sur le petit jardinage, à part du prix et en plus petit.`,
      },
      {
        icon: 'MessageCircle',
        title: 'Avis et demande de devis',
        description: `Vos avis Google et un formulaire où le client décrit son jardin et ses envies${NBSP}: vous arrivez à la visite en sachant quoi proposer.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter sur votre site et vos devis',
    intro: `Un site de paysagiste qui annonce le crédit d’impôt sans être déclaré, ou qui promet un désherbage chimique chez les particuliers, n’est pas en règle. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: `50${NBSP}%, jusqu’à 5${NBSP}000${NBSP}€ par an`,
        title: 'Le crédit d’impôt de vos clients, si vous êtes déclaré',
        text: `Le petit jardinage chez un particulier (entretien, taille des haies et des arbres, débroussaillage) lui ouvre un crédit d’impôt de 50${NBSP}%, dans la limite de 5${NBSP}000${NBSP}€ de dépenses par an, si votre entreprise est déclarée en services à la personne.`,
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: `Arrêté du 17${NBSP}mars 2015`,
        title: 'Prestations, prix et devis gratuit, affichés en ligne',
        text: `Petit jardinage chez les particuliers${NBSP}: le site liste vos prestations et leur mode d’intervention. Tout prix s’y lit HT et TTC avec ses frais annexes, le crédit d’impôt à part et en plus petit, et une phrase annonce le devis gratuit dès 100${NBSP}€ TTC par mois.`,
        sourceName: HOME_SERVICES_PRICE_INFORMATION_SOURCE.name,
        sourceUrl: HOME_SERVICES_PRICE_INFORMATION_SOURCE.url,
      },
      {
        contextLabel: `Depuis le 1er${NBSP}juillet 2022`,
        title: 'Plus de produits phytosanitaires chez les particuliers',
        text: 'Ils sont interdits dans les propriétés privées à usage d’habitation, jardin compris, sauf produits de biocontrôle, à faible risque ou bio. Là où c’est permis, les appliquer pour un client demande en principe l’agrément de l’entreprise et le Certiphyto.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Nom avec la mention EI, adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Service-Public.fr et servicesalapersonne.gouv.fr (crédit d’impôt, petits travaux de jardinage), Légifrance (arrêté du 17${NBSP}mars 2015, articles 2 à 6${NBSP}; arrêté du 15${NBSP}janvier 2021 et article 14-3 de l’arrêté du 4${NBSP}mai 2017${NBSP}; code rural, article L254-1), Entreprendre.Service-Public.fr (Certiphyto, mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle Verdure, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, demande de devis avec photos du terrain, une page par commune pour le référencement local, et un logiciel derrière le site pour vos contrats d’entretien si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Déjà sur dibodev.fr pour les paysagistes',
    toolCard: {
      icon: 'Laptop',
      label: 'Test gratuit, 6 questions',
      title: `Quel logiciel pour un paysagiste${NBSP}?`,
      description: `Devis, contrats d’entretien, factures${NBSP}: les prix 2026 des logiciels pour paysagistes, et quand le sur mesure vaut le coup.`,
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Modèle gratuit',
      title: `Contrat d’entretien espaces verts${NBSP}: modèle Excel et PDF`,
      description: `Avec le devis paysagiste, la TVA à 10 ou 20${NBSP}% ligne par ligne et les totaux calculés.`,
    },
  },
  faq: {
    title: `Site internet de paysagiste${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un paysagiste${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec demande de devis en ligne ou une page par commune, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos textes, vos photos de chantiers et vos prestations depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon site va-t-il apparaître sur Google${NBSP}?`,
        answer: `Il est construit pour la recherche locale${NBSP}: zone d’intervention écrite en clair, chaque prestation décrite, fiche Google reliée. Pour viser plusieurs communes, le sur mesure ajoute une page par ville.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un paysagiste${NBSP}?`,
        answer:
          'Les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Pour le petit jardinage chez les particuliers, s’y ajoutent la liste de vos prestations et leur mode d’intervention, la phrase sur le devis gratuit, et des prix HT et TTC quand vous les affichez. Je les mets en place avec vous avant la mise en ligne.',
      },
      {
        question: `Puis-je annoncer le crédit d’impôt de 50${NBSP}% sur mon site${NBSP}?`,
        answer: `Oui, si votre entreprise est déclarée en services à la personne, et seulement pour le petit jardinage chez les particuliers${NBSP}: entretien, tonte, taille des haies et des arbres, débroussaillage. La création d’un jardin, l’élagage et le terrassement n’y ouvrent pas droit. La mention s’affiche à part du prix, en plus petit, et le modèle Verdure a un encart prévu pour elle.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de paysagiste, prêt à faire venir les demandes de devis',
    description: `Un modèle pensé pour le métier, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de paysagiste à votre nom, gratuit à voir',
}
