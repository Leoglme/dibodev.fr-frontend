import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  CONSUMER_MEDIATION_SOURCE,
  HOME_REPAIR_PRICE_DISPLAY_SOURCE,
  HOME_REPAIR_QUOTE_RULES_SOURCE,
} from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PLUMBER_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour plombier${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de plombier à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour plombier chauffagiste',
    serviceDescription:
      'Site internet de plombier chauffagiste sur l’un de trois modèles, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec prise de rendez-vous et devis en ligne.',
    serviceType: 'Création de site internet pour plombier',
  },
  breadcrumbLabel: 'Plombier chauffagiste',
  shareImage: {
    titleLines: ['Site internet pour', 'plombier chauffagiste'],
    highlight: 'plombier chauffagiste',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour plombier chauffagiste${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'plombier chauffagiste',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Votre nom, votre ville, votre couleur, votre logo et vos photos${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet de plombier chauffagiste coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur l’un des trois modèles de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec prise de rendez-vous ou devis en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, je mets en place avec vous les tarifs de dépannage, la zone d’intervention et les mentions légales obligatoires.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans, et j’ai conçu les trois modèles de plombier ci-dessus.',
  },
  atelier: {
    styleIntro: 'Trois modèles faits pour les plombiers. Tout reste modifiable ensuite.',
    templates: {
      'plumber-signature': {
        name: 'Signature',
        description: 'Bandeau d’urgence en haut, gros bouton d’appel, galerie de chantiers avec avant et après.',
      },
      'plumber-atelier': {
        name: 'Atelier',
        description: `Papier chaud et belle typographie, fiche d’intervention en tête${NBSP}: le style d’un artisan installé.`,
      },
      'plumber-cuivre': {
        name: 'Source',
        description: `Bleu eau et blanc, votre nom en grand, encart d’urgence${NBSP}: clair et rassurant, même sans photo.`,
      },
    },
    mediaIntro:
      'Vos chantiers avant et après valent mieux que n’importe quelle photo de banque. Sans photo, le site garde celles du modèle.',
    serviceOptions: [
      { id: 'leaks', label: 'Dépannage et fuites', defaultSelected: true },
      { id: 'heating', label: 'Chaudière et chauffage', defaultSelected: true },
      { id: 'bathroom', label: 'Salle de bain', defaultSelected: true },
      { id: 'heat-pump', label: 'Pompe à chaleur', defaultSelected: false },
      { id: 'unblocking', label: 'Débouchage', defaultSelected: false },
      { id: 'boiler-servicing', label: 'Entretien annuel', defaultSelected: false },
      { id: 'water-softener', label: 'Adoucisseur d’eau', defaultSelected: false },
    ],
    serviceDescription: 'Devis gratuit, tarifs annoncés avant l’intervention.',
    requestTitle: 'Votre site de plombier, à votre nom',
  },
  examples: {
    title: 'Trois exemples de sites internet pour plombier',
    imageAlt: 'Exemple de site internet pour plombier chauffagiste, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait appeler',
    title: 'Ce que doit contenir le site d’un plombier',
    intro: 'Six éléments séparent un site qui rassure d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'Phone',
        title: 'Le numéro en un geste',
        description: 'Un bouton d’appel visible sur chaque écran de téléphone, en haut, sans chercher.',
      },
      {
        icon: 'MapPin',
        title: 'La zone d’intervention',
        description: 'Les communes servies, écrites noir sur blanc. Google les lit aussi.',
      },
      {
        icon: 'Flame',
        title: 'Les urgences d’abord',
        description: `Fuite, chaudière en panne, WC bouché${NBSP}: les trois pages que l’on cherche à 22${NBSP}h.`,
      },
      {
        icon: 'Euro',
        title: 'Les tarifs de dépannage',
        description: `Taux horaire, déplacement, forfaits${NBSP}: obligatoires, et rassurants quand ils sont affichés.`,
      },
      {
        icon: 'ShieldCheck',
        title: 'Qualifications et assurances',
        description: `PG, RGE, décennale${NBSP}: les mentions qui comptent pour une installation gaz ou une pompe à chaleur.`,
      },
      {
        icon: 'Camera',
        title: 'Photos, avis et demande de devis',
        description: `Vos chantiers avant et après, vos avis Google, et un formulaire de demande de devis${NBSP}: le client écrit à 22${NBSP}h, vous le rappelez le matin.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter sur votre site et vos devis',
    intro: `Un site de dépannage qui n’affiche pas ses prix n’est pas en règle, et il rassure moins. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: 'Arrêté du 24 janvier 2017',
        title: 'Vos tarifs, faciles à trouver en ligne',
        text: `Taux horaire TTC, décompte du temps, prix des forfaits, frais de déplacement, devis gratuit ou payant${NBSP}: affichés dans vos locaux, ils doivent aussi être aisément accessibles sur votre site.`,
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis détaillé avant toute intervention',
        text: `Quel que soit le montant${NBSP}: le seuil de 150${NBSP}€ qui dispensait les petits dépannages a disparu. Le devis précise les travaux, le taux horaire, les frais de déplacement et sa durée de validité.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Avec chaque devis et facture',
        title: 'L’attestation d’assurance décennale',
        text: 'L’attestation de votre assurance de responsabilité civile décennale est jointe à vos devis et à vos factures. La mentionner sur le site rassure avant même le premier appel.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Nom avec la mention EI, adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Légifrance (arrêté du 24 janvier 2017, articles 2 à 4), Institut national de la consommation, Entreprendre.Service-Public.fr (garantie décennale, mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Un des trois modèles, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, prise de rendez-vous ou devis en ligne reliés à votre agenda, une page par commune pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Déjà sur dibodev.fr pour les plombiers',
    toolCard: {
      icon: 'Flame',
      label: 'Test gratuit, 6 questions',
      title: `Quel logiciel pour un plombier-chauffagiste${NBSP}?`,
      description: `Devis, interventions, contrats d’entretien${NBSP}: les prix 2026 des logiciels du marché, et quand le sur mesure vaut le coup.`,
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Modèle gratuit',
      title: `Devis plombier chauffagiste${NBSP}: modèle Excel et PDF`,
      description: 'Avec le bon d’intervention, les mentions obligatoires et les totaux calculés.',
    },
  },
  faq: {
    title: `Site internet de plombier${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un plombier${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec prise de rendez-vous ou devis en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
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
        answer: `Il est construit pour la recherche locale${NBSP}: zone d’intervention écrite en clair, chaque prestation nommée, fiche Google reliée. Pour viser plusieurs communes, le sur mesure ajoute une page par ville.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un plombier${NBSP}?`,
        answer:
          'Vos tarifs (taux horaire TTC, déplacement, forfaits, devis gratuit ou payant), les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Je les mets en place avec vous avant la mise en ligne.',
      },
      {
        question: `Et si je n’ai ni logo ni photos${NBSP}?`,
        answer: `Aucun problème${NBSP}: sans logo, votre nom s’affiche en titre, et le site garde les photos du modèle jusqu’à ce que vous envoyiez les vôtres. Des photos de vos vrais chantiers rassurent davantage, même prises au téléphone.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de plombier, prêt à faire appeler',
    description: `Trois modèles, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de plombier à votre nom, gratuit à voir',
}
