import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  DENTIST_COMMUNICATION_GUIDANCE_SOURCE,
  DENTIST_COMMUNICATION_SOURCE,
  DENTIST_FEES_ON_WEBSITE_SOURCE,
  DENTIST_QUOTE_RULES_SOURCE,
} from '~/core/constants/tradeWebsites/dentist/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DENTIST_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour dentiste${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de dentiste à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour cabinet dentaire',
    serviceDescription:
      'Site internet de cabinet dentaire sur un modèle, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec prise de rendez-vous en ligne, dans le respect du code de déontologie des chirurgiens-dentistes.',
    serviceType: 'Création de site internet pour dentiste',
  },
  breadcrumbLabel: 'Dentiste',
  shareImage: {
    titleLines: ['Site internet pour', 'dentiste'],
    highlight: 'dentiste',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour dentiste${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'dentiste',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Le nom du cabinet, votre ville, votre couleur, votre logo et vos photos${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet de cabinet dentaire coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec prise de rendez-vous en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, la page d’honoraires, les urgences et les mentions légales sont prévues, dans le cadre fixé par le code de déontologie des chirurgiens-dentistes.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les indépendants et les petites entreprises, et j’ai conçu le modèle de cabinet dentaire ci-dessus.',
  },
  atelier: {
    styleIntro: 'Un modèle pensé pour les cabinets dentaires. Couleurs, photos et textes sont à vous.',
    templates: {
      dental: {
        name: 'Family Care',
        description:
          'Fond blanc et grands titres élégants, horaires et téléphone dès l’en-tête, gros bouton de prise de rendez-vous.',
      },
    },
    mediaIntro: `Votre cabinet, votre salle de soins, votre équipe${NBSP}: de vraies photos rassurent avant le premier rendez-vous. Jamais de patient reconnaissable. Sans photo, le site garde celles du modèle.`,
    serviceOptions: [
      { id: 'dental-care', label: 'Soins et détartrage', defaultSelected: true },
      { id: 'prosthetics', label: 'Couronnes et prothèses', defaultSelected: true },
      { id: 'dental-emergencies', label: 'Urgences dentaires', defaultSelected: true },
      { id: 'implants', label: 'Implants', defaultSelected: false },
      { id: 'orthodontics', label: 'Orthodontie', defaultSelected: false },
      { id: 'teeth-whitening', label: 'Blanchiment', defaultSelected: false },
      { id: 'children-dentistry', label: 'Soins des enfants', defaultSelected: false },
    ],
    serviceDescription: 'Explications claires et honoraires annoncés avant les soins.',
    requestTitle: 'Votre site de cabinet dentaire, à votre nom',
  },
  examples: {
    title: 'Un exemple de site internet pour cabinet dentaire',
    imageAlt: 'Exemple de site internet pour cabinet dentaire, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce que cherchent les patients',
    title: 'Ce que doit contenir le site d’un dentiste',
    intro: 'Six éléments séparent un site qui informe et rassure d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'Le rendez-vous en un geste',
        description:
          'Un bouton d’appel et un lien de prise de rendez-vous, visibles sur chaque écran de téléphone, sans chercher.',
      },
      {
        icon: 'AlertCircle',
        title: 'Les urgences, clairement',
        description: `Douleur, dent cassée, abcès${NBSP}: comment vous joindre en urgence, et que faire le dimanche ou un jour férié.`,
      },
      {
        icon: 'Euro',
        title: 'Vos honoraires et paiements',
        description:
          'Les honoraires de vos 5 à 10 actes les plus courants, comme le recommande l’Ordre, et les modes de paiement acceptés.',
      },
      {
        icon: 'Info',
        title: 'Les soins, expliqués simplement',
        description: `Une page par soin${NBSP}: détartrage, implants, orthodontie, soins des enfants. Des explications claires, sans promesse de résultat.`,
      },
      {
        icon: 'ShieldCheck',
        title: 'Qui vous soigne',
        description: `Chaque praticien avec sa photo, ses diplômes reconnus et son numéro RPPS${NBSP}: une présentation que le patient peut vérifier.`,
      },
      {
        icon: 'MapPin',
        title: 'Accès, horaires, accessibilité',
        description: `Adresse, transports, parking, horaires et accès en fauteuil roulant${NBSP}: tout ce que l’on cherche avant de venir.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter sur votre site et vos devis',
    intro: `Depuis le décret du 22${NBSP}décembre 2020, un dentiste peut présenter son activité sur un site, dans un cadre précis. Voici ce que les textes et l’Ordre demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: 'Article R. 4127-215-1',
        title: 'Informer, sans témoignages ni comparaison',
        text: `Vos compétences, votre parcours, vos soins et vos conditions d’exercice, oui. Mais une information loyale et honnête${NBSP}: pas de témoignages de patients, pas de comparaison avec vos confrères, rien qui pousse à des soins inutiles.`,
        sourceName: DENTIST_COMMUNICATION_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_SOURCE.url,
      },
      {
        contextLabel: `Recommandations du 19${NBSP}juin 2026`,
        title: 'Ni avis, ni avant-après, ni priorité sur Google',
        text: 'Pour l’Ordre, notes et avis de patients n’ont pas leur place sur le site, et les photos avant-après risquent de suggérer un résultat certain. Tout procédé, payant ou non, pour apparaître en priorité sur Google ou dans un annuaire est proscrit.',
        sourceName: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.url,
      },
      {
        contextLabel: 'Article R. 4127-240',
        title: 'Vos honoraires, sur le site',
        text: 'Un site qui présente votre activité indique vos honoraires, les modes de paiement acceptés et les règles d’accès aux soins sans discrimination, en plus de l’affichage au cabinet. L’information est claire, honnête, précise et non comparative.',
        sourceName: DENTIST_FEES_ON_WEBSITE_SOURCE.name,
        sourceUrl: DENTIST_FEES_ON_WEBSITE_SOURCE.url,
      },
      {
        contextLabel: `Arrêté du 30${NBSP}mai 2018`,
        title: 'Un devis avant toute prothèse',
        text: `Couronne, bridge, prothèse amovible${NBSP}: un devis normalisé est remis avant les soins, et un devis écrit dès que les dépassements d’honoraires atteignent 70${NBSP}€. Pour une prothèse, il indique le lieu de fabrication et, sauf exception, une solution 100${NBSP}% Santé.`,
        sourceName: DENTIST_QUOTE_RULES_SOURCE.name,
        sourceUrl: DENTIST_QUOTE_RULES_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Légifrance (code de la santé publique, articles R. 4127-215-1, R. 4127-217 et R. 4127-240, issus du décret n°${NBSP}2020-1658 du 22${NBSP}décembre 2020), recommandations de l’Ordre national des chirurgiens-dentistes sur la communication professionnelle (version du 19${NBSP}juin 2026), DGCCRF (soins dentaires et devis, d’après l’arrêté du 30${NBSP}mai 2018), Entreprendre.Service-Public.fr (mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle de cabinet dentaire, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, prise de rendez-vous en ligne reliée à votre agenda, une page par soin et par praticien, le site en plusieurs langues, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Pour aller plus loin sur dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: `Site internet de dentiste${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un dentiste${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec prise de rendez-vous en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Un dentiste a-t-il le droit d’avoir un site internet${NBSP}?`,
        answer: `Oui. Le code de déontologie, assoupli par le décret du 22${NBSP}décembre 2020, permet au chirurgien-dentiste de présenter sur un site ses compétences, son parcours et ses conditions d’exercice. Le site reste informatif${NBSP}: ni témoignages ni notes de patients, ni comparaison avec vos confrères.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos textes, vos photos et vos honoraires depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon site va-t-il apparaître sur Google${NBSP}?`,
        answer: `Il est fait pour être trouvé${NBSP}: nom du cabinet, adresse, soins et horaires écrits en clair, lisibles par Google. En revanche, ni annonce payante ni technique pour passer devant vos confrères${NBSP}: le code de déontologie interdit aux chirurgiens-dentistes tout référencement prioritaire.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un dentiste${NBSP}?`,
        answer: `Vos honoraires et les modes de paiement acceptés, les mentions légales (identité, adresse, contact, numéro d’immatriculation, hébergeur), votre titre de chirurgien-dentiste, l’Ordre auquel vous êtes inscrit et les règles professionnelles applicables. Pas de médiateur de la consommation${NBSP}: les soins en sont exclus. Je mets tout en place avec vous avant la mise en ligne.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de cabinet dentaire, prêt à faire prendre rendez-vous',
    description: `Un modèle pensé pour les cabinets dentaires, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de dentiste à votre nom, gratuit à voir',
}
