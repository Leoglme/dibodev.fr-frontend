import type { DibodevProjectSpecificationGeneratorPageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_GENERATOR_PAGE_FR: DibodevProjectSpecificationGeneratorPageContent = {
  meta: {
    title: `Cahier des charges${NBSP}: générateur gratuit, modèles Word et PDF`,
    description: `5 questions, et votre cahier des charges se rédige en direct${NBSP}: site vitrine, e-commerce, application métier ou mobile. Gratuit, sans inscription, Word ou PDF.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Cahier des charges d’un site internet, d’une boutique en ligne ou d’une application',
  },
  applicationName: 'Générateur de cahier des charges',
  breadcrumbLabel: 'Cahier des charges',
  shareImage: {
    titleLines: ['Cahier des charges', 'en 5 minutes'],
    highlight: 'Cahier des charges',
    subtitle: 'Site vitrine, e-commerce, application métier ou mobile',
    badge: 'Gratuit · Word et PDF',
    alt: `Générateur de cahier des charges gratuit de dibodev.fr${NBSP}: site vitrine, e-commerce, application métier ou mobile`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cahier des charges',
    titleAfter: ` en 5${NBSP}minutes${NBSP}: site vitrine, e-commerce, application métier ou mobile`,
    reassurances: ['5 questions, 5 minutes', 'Sans inscription ni e-mail', 'Word et PDF'],
    aboutTitle: 'En bref',
    description: `Un cahier des charges tient en quatre à huit pages${NBSP}: l’entreprise, le projet, les objectifs et les cibles, les pages ou les écrans, les fonctionnalités, les contenus, les contraintes, le budget et le délai. Ce générateur le rédige en cinq minutes à partir de vos réponses, pour un site vitrine, une boutique en ligne (e-commerce), une application métier ou une application mobile. Il est gratuit, sans inscription, en Word ou en PDF, et le document reste neutre${NBSP}: vous pouvez l’envoyer à n’importe quel prestataire.`,
    authorIntro: 'Outil conçu par',
    authorBio:
      'développeur indépendant près de Rennes. Le générateur pose les questions que je pose moi-même avant de chiffrer un site ou une application.',
  },
  guide: {
    eyebrow: 'Ce que contient le document',
    title: 'Les neuf parties d’un bon cahier des charges',
    intro: `Le générateur les remplit pour vous. Si vous l’écrivez à la main, gardez cet ordre${NBSP}: c’est celui dans lequel un prestataire le lit.`,
    pitfallLabel: 'L’erreur fréquente',
    items: [
      {
        title: 'Présentation de l’entreprise',
        text: 'Qui vous êtes, ce que vous vendez, à qui, et où. Cinq lignes suffisent.',
        pitfall: 'Raconter l’histoire de l’entreprise sur une page.',
      },
      {
        title: 'Le projet',
        text: 'Création ou refonte, ce qui existe aujourd’hui (site, fichiers, outils) et pourquoi changer maintenant.',
        pitfall: 'Oublier l’adresse du site ou le nom du logiciel actuel.',
      },
      {
        title: 'Objectifs et cibles',
        text: 'Trois objectifs au plus, chacun avec sa mesure, et les clients ou les utilisateurs visés.',
        pitfall: `«${NBSP}Être visible${NBSP}», sans dire auprès de qui.`,
      },
      {
        title: 'Les pages ou les écrans',
        text: 'La liste des pages du site, ou des écrans de l’application, et ce que chacun contient. C’est la partie qui fixe le prix.',
        pitfall: 'Ajouter des pages au fil du projet.',
      },
      {
        title: 'Les fonctionnalités',
        text: 'Formulaire, rendez-vous, paiement, espace client, mode hors ligne, classés en indispensable et souhaité.',
        pitfall: 'Tout classer en indispensable.',
      },
      {
        title: 'Contenus et identité',
        text: 'Qui écrit les textes, d’où viennent les photos, le logo, les couleurs, ou les données à reprendre pour une application.',
        pitfall: 'Découvrir à la fin que personne n’a écrit les textes.',
      },
      {
        title: 'Contraintes techniques et légales',
        text: 'Téléphone, sécurité, référencement, mentions légales, cookies, propriété du nom de domaine et du code.',
        pitfall: 'Laisser le nom de domaine ou le code au nom du prestataire.',
      },
      {
        title: 'Budget, délai et maintenance',
        text: 'Une fourchette, une date de mise en ligne, et la maintenance chiffrée à part.',
        pitfall: `Cacher son budget «${NBSP}pour voir les prix${NBSP}».`,
      },
      {
        title: 'Ce que chaque devis doit contenir',
        text: 'Un devis détaillé, un planning, des exemples, la maintenance et la propriété du site ou de l’application.',
        pitfall: 'Comparer des devis qui ne chiffrent pas la même chose.',
      },
    ],
  },
  templates: {
    eyebrow: 'Modèles gratuits',
    title: 'Quatre modèles à télécharger, avec un exemple rempli',
    intro: `Vous préférez remplir un document Word${NBSP}? Chaque modèle reprend les neuf parties, adaptées au type de projet, avec un exemple complet pour voir le niveau de détail attendu.`,
    linkLabel: 'Voir le modèle',
    cards: [
      {
        projectType: 'showcaseWebsite',
        eyebrow: 'Word + exemple en PDF',
        title: 'Cahier des charges site vitrine',
        text: `Accueil, prestations, réalisations, contact${NBSP}: le modèle des artisans, des commerces et des indépendants.`,
        note: `Exemple rempli${NBSP}: un plombier à Bruz`,
      },
      {
        projectType: 'onlineStore',
        eyebrow: 'Word + exemple en PDF',
        title: 'Cahier des charges e-commerce',
        text: `Catalogue, paiement, livraison, retours et conditions de vente${NBSP}: ce qu’il faut trancher avant le premier devis.`,
        note: `Exemple rempli${NBSP}: une épicerie fine à Rennes`,
      },
      {
        projectType: 'businessSoftware',
        eyebrow: 'Word + exemple en PDF',
        title: 'Cahier des charges application métier',
        text: 'Les écrans, les rôles, les données à reprendre et les fichiers Excel à remplacer.',
        note: `Exemple rempli${NBSP}: une entreprise de nettoyage`,
      },
      {
        projectType: 'mobileApp',
        eyebrow: 'Word + exemple en PDF',
        title: 'Cahier des charges application mobile',
        text: 'iPhone et Android, comptes, notifications, mode hors ligne et publication sur les stores.',
        note: `Exemple rempli${NBSP}: une salle de sport`,
      },
    ],
  },
  pitfalls: {
    eyebrow: 'Vu du côté du prestataire',
    title: 'Trois erreurs qui rendent les devis impossibles à comparer',
    intro: 'Je les vois souvent dans les demandes de devis. Les questions du générateur les évitent.',
    cards: [
      {
        key: 'competitor-reference',
        icon: 'Eye',
        iconTone: 'amber',
        eyebrow: '',
        title: `«${NBSP}Un site comme celui de mon concurrent${NBSP}»`,
        text: 'Une référence sans liste de pages donne des devis qui ne parlent pas du même projet. Gardez l’exemple, et ajoutez les pages et les fonctions que vous voulez vraiment.',
        note: '',
        link: null,
      },
      {
        key: 'everything-essential',
        icon: 'ClipboardCheck',
        iconTone: 'cyan',
        eyebrow: '',
        title: `Tout en «${NBSP}indispensable${NBSP}»`,
        text: 'Si tout est prioritaire, le prestataire chiffre tout au prix fort. Séparez ce qui doit être là le jour de la mise en ligne de ce qui peut attendre trois mois.',
        note: '',
        link: null,
      },
      {
        key: 'hidden-budget',
        icon: 'SlidersHorizontal',
        iconTone: 'green',
        eyebrow: '',
        title: `Pas de budget «${NBSP}pour voir les prix${NBSP}»`,
        text: 'Sans fourchette, chacun chiffre la version qu’il imagine. Une fourchette honnête vous donne des devis à votre taille, et des options quand le budget est juste.',
        note: '',
        link: null,
      },
    ],
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: `Combien coûte le projet que vous décrivez${NBSP}?`,
    intro: `Le générateur ne chiffre pas${NBSP}: votre document reste le même pour tous les prestataires. Voici mes prix publics, et ceux du marché relevés en 2026.`,
    offers: [
      {
        title: 'Site sur modèle',
        price: `290${NBSP}€ une seule fois`,
        description: `Nom de domaine et hébergement compris. Pour ce site-là, pas besoin de cahier des charges${NBSP}: un appel de 30${NBSP}minutes suffit.`,
        isHighlighted: false,
      },
      {
        title: 'Site sur mesure',
        price: `À partir de 1${NBSP}500${NBSP}€`,
        description: `Design unique, prise de rendez-vous, devis ou boutique en ligne${NBSP}: le prix suit votre cahier des charges.`,
        isHighlighted: true,
      },
      {
        title: 'IA et automatisation',
        price: `À partir de 2${NBSP}500${NBSP}€`,
        description: `Une tâche répétitive confiée à l’IA${NBSP}: tri des demandes, document rempli tout seul, assistant.`,
        isHighlighted: false,
      },
      {
        title: 'Application métier',
        price: `5${NBSP}000 à 15${NBSP}000${NBSP}€`,
        description:
          'Au forfait, après un premier échange gratuit. Une application mobile se chiffre sur devis, à partir de votre cahier des charges.',
        isHighlighted: false,
      },
    ],
    notes: [
      `Maintenance de 100 à 300${NBSP}€ par mois, si vous la voulez.`,
      `Prix nets${NBSP}: TVA non applicable (article 293${NBSP}B du CGI).`,
      'Vous êtes propriétaire du site, du code et du nom de domaine.',
    ],
    ctaLabel: 'Demander un devis',
    secondaryLinkLabel: 'Prix d’un site internet en 2026',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cahier des charges${NBSP}: vos questions`,
    questions: [
      {
        question: `Qu’est-ce qu’un cahier des charges${NBSP}?`,
        answer: `C’est le document qui décrit votre projet avant de demander des devis${NBSP}: votre entreprise, vos objectifs, les pages ou les écrans, les fonctionnalités, les contenus, le budget et le délai. Il sert à recevoir des devis comparables, puis de référence pendant tout le projet, qu’il s’agisse d’un site vitrine, d’un e-commerce ou d’une application.`,
      },
      {
        question: `Combien de pages doit faire un cahier des charges${NBSP}?`,
        answer: `Quatre à huit pages pour un site vitrine ou une boutique en ligne, davantage pour une application métier ou mobile. Au-delà, il est rarement lu en entier${NBSP}: une liste de pages et de fonctionnalités claire vaut mieux qu’un long texte.`,
      },
      {
        question: `Faut-il un cahier des charges pour un petit site vitrine${NBSP}?`,
        answer: `Pour un site sur modèle à 290${NBSP}€, non${NBSP}: un appel de 30${NBSP}minutes suffit. Dès que vous demandez plusieurs devis ou un site sur mesure, oui${NBSP}: c’est le seul moyen de comparer les prix sur la même base.`,
      },
      {
        question: `Cahier des charges fonctionnel ou technique${NBSP}: quelle différence${NBSP}?`,
        answer: `Le fonctionnel dit ce que le site ou l’application doit faire, avec vos mots. Le technique dit comment le faire (langage, hébergement, sécurité)${NBSP}: c’est souvent le prestataire qui l’écrit. Le générateur rédige le fonctionnel, avec les contraintes techniques qui vous concernent.`,
      },
      {
        question: `Pourquoi ne pas le faire écrire par ChatGPT${NBSP}?`,
        answer: `Vous pouvez. Une IA rédige vite, mais elle comble les trous avec des généralités et ne vous demande ni votre budget, ni à qui appartiendront le nom de domaine et le code. Le générateur pose ces questions-là. Les deux se complètent${NBSP}: téléchargez le Word, puis faites-le reformuler si vous le souhaitez.`,
      },
      {
        question: `Mes réponses sont-elles enregistrées${NBSP}?`,
        answer: `Non. Le document se fabrique dans votre navigateur. Rien ne part tant que vous ne cliquez pas sur «${NBSP}Demander un devis à Léo${NBSP}», et dans ce cas seuls le document et vos coordonnées me sont envoyés.`,
      },
      {
        question: `À qui envoyer mon cahier des charges${NBSP}?`,
        answer:
          'À deux ou trois prestataires, par exemple une agence, un indépendant et un créateur de sites si votre projet est simple. Donnez à chacun le même document et la même date de réponse.',
      },
      {
        question: `Combien coûte la création d’un site ou d’une application${NBSP}?`,
        answer: `Chez Dibodev, 290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris, à partir de 1${NBSP}500${NBSP}€ pour un site sur mesure et de 5${NBSP}000 à 15${NBSP}000${NBSP}€ pour une application métier. Les baromètres du prix d’un site internet et du prix d’un logiciel sur mesure comparent les tarifs affichés par d’autres prestataires français.`,
      },
    ],
  },
  related: {
    eyebrow: 'Pour aller plus loin',
    title: 'Avant de demander vos devis',
    linkLabel: 'Ouvrir la page',
    links: [
      {
        key: 'website-price-barometer',
        routeName: 'website-price-barometer',
        icon: 'FileSpreadsheet',
        eyebrow: 'Baromètre 2026',
        title: 'Prix d’un site internet',
        text: 'Les tarifs affichés par 20 prestataires français, du site d’une page à la boutique en ligne.',
      },
      {
        key: 'custom-software-price-barometer',
        routeName: 'custom-software-price-barometer',
        icon: 'SlidersHorizontal',
        eyebrow: 'Baromètre 2026',
        title: 'Prix d’un logiciel sur mesure',
        text: `Outil simple, application métier ou plateforme${NBSP}: les fourchettes de 14 prestataires.`,
      },
      {
        key: 'website-health-check',
        routeName: 'tools-website-health-check',
        icon: 'ShieldCheck',
        eyebrow: 'Outil gratuit',
        title: 'Tester mon site actuel',
        text: `Pour une refonte${NBSP}: huit vérifications en dix secondes, à joindre à votre cahier des charges.`,
      },
    ],
  },
  contactCta: {
    title: `Votre cahier des charges est prêt${NBSP}? Envoyez-le-moi`,
    description: `Je le lis moi-même et je vous réponds sous 24${NBSP}h, avec un prix ou avec mes questions. Si un outil du marché vous suffit, je vous le dis.`,
    button: 'Demander un devis',
  },
  mobileBar: {
    text: `Votre cahier des charges est prêt${NBSP}? Je vous réponds sous 24${NBSP}h`,
    button: 'Demander un devis',
  },
}
