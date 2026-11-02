import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_FR: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'showcaseWebsite',
  meta: {
    title: `Cahier des charges site vitrine${NBSP}: modèle Word et PDF gratuit`,
    description: `Modèle de cahier des charges de site vitrine en Word et exemple rempli en PDF${NBSP}: pages, fonctionnalités, budget, obligations légales. Gratuit, sans e-mail.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Cahier des charges d’un site vitrine',
  },
  breadcrumbLabel: 'Site vitrine',
  shareImage: {
    titleLines: ['Cahier des charges', 'site vitrine'],
    highlight: 'site vitrine',
    subtitle: 'Modèle Word et exemple rempli en PDF',
    badge: 'Gratuit · sans e-mail',
    alt: 'Modèle gratuit de cahier des charges pour un site vitrine, en Word, avec un exemple rempli en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cahier des charges site vitrine',
    titleAfter: `${NBSP}: modèle gratuit Word et PDF, avec un exemple rempli`,
    reassurances: ['Modèle + exemple rempli', 'Word modifiable', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un cahier des charges de site vitrine en neuf parties, prêt à remplir, et le même document rempli pour un plombier chauffagiste de Bruz. Il tient en quelques pages${NBSP}: assez pour recevoir des devis comparables, assez court pour être lu en entier. Les pages du site, les fonctionnalités classées par priorité, le budget et la propriété du nom de domaine y sont déjà prévus.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur indépendant près de Rennes. Ce sont les questions que je pose avant de chiffrer un site vitrine.',
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: 'Pour un artisan, un commerce ou un indépendant qui prépare son site. Le Word se remplit et se modifie, le PDF montre le même document rempli de bout en bout.',
    templateLabel: 'Télécharger le modèle Word',
    templateMeta: 'Word, 9 parties à remplir',
    exampleLabel: 'Télécharger l’exemple rempli',
    exampleMeta: 'PDF, un plombier à Bruz',
    generatorText: `Plus rapide${NBSP}: répondez à cinq questions et le document se rédige tout seul, à votre nom.`,
    generatorLinkLabel: 'Le remplir en 5 minutes avec le générateur',
    footnote: 'Modèle libre d’utilisation, à adapter à votre projet et à envoyer à n’importe quel prestataire.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un modèle à remplir et un exemple complet',
    intro:
      'Le Word reprend les neuf parties avec, sous chaque titre, une consigne en gris à remplacer par votre texte. Le PDF est le même document rempli, pour voir le niveau de détail attendu.',
    documents: [
      {
        title: 'Le modèle à remplir',
        format: 'Word, modifiable dans Word, LibreOffice, Google Docs ou Pages',
        items: [
          'Présentation de l’entreprise et du projet, création ou refonte',
          'Objectifs, chacun avec sa mesure, et clients visés',
          'Les pages types d’un site vitrine, à rayer ou à compléter',
          'Dix fonctionnalités à classer en indispensable ou souhaité',
          'Contenus et identité visuelle, contraintes techniques et légales',
          'Budget, délai, maintenance et ce que chaque devis doit contenir',
        ],
      },
      {
        title: 'L’exemple rempli',
        format: 'PDF, Plomberie Martin à Bruz (entreprise fictive)',
        items: [
          'Une entreprise de 2 à 10 personnes, sans site aujourd’hui, qui veut des appels et des demandes de devis',
          'Trois objectifs, chacun avec la façon de le mesurer',
          'Huit pages, dont une page par prestation',
          'Sept fonctionnalités classées en indispensable et souhaité',
          `Un budget de 1${NBSP}500 à 5${NBSP}000${NBSP}€, une mise en ligne d’ici trois mois, la maintenance chiffrée à part`,
          'La liste de ce que chaque devis doit contenir pour être comparé aux autres',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Exemple de cahier des charges',
    title: 'L’exemple rempli, à lire ici',
    intro:
      'Le site vitrine d’un plombier chauffagiste à Bruz, tel que le générateur le rédige à partir de cinq réponses.',
    expandLabel: 'Lire tout l’exemple',
    collapseLabel: 'Replier l’exemple',
    generatorLinkLabel: 'Faire le même à mon nom',
    answers: {
      projectType: 'showcaseWebsite',
      kind: 'creation',
      companyName: 'Plomberie Martin',
      activity: `plombier chauffagiste${NBSP}: dépannage, chaudières et salles de bain`,
      city: 'Bruz',
      companySize: 'small',
      goals: ['google', 'quotes', 'calls'],
      audience: 'consumers',
      features: ['contactForm', 'callButton', 'servicePages', 'gallery', 'reviews', 'booking', 'photoQuote'],
      contentSource: 'together',
      budget: 'from1500to5000',
      launchDate: 'threeMonths',
    },
  },
  sitemap: {
    eyebrow: 'Arborescence',
    title: 'Les pages d’un site vitrine',
    intro:
      'C’est la partie qui fixe le prix. Partez de ce plan, rayez ce qui ne vous concerne pas, ajoutez une page par prestation.',
    ariaLabel: `Plan d’un site vitrine${NBSP}: l’accueil, puis les prestations avec une page par prestation, les réalisations, les avis clients, la page à propos et le contact${NBSP}; en pied de page, les mentions légales et la confidentialité.`,
    rootLabel: 'Accueil',
    branches: [
      { label: 'Prestations', children: ['Dépannage et fuites', 'Chaudière et chauffage', 'Salle de bain'] },
      { label: 'Réalisations', children: [] },
      { label: 'Avis clients', children: [] },
      { label: 'À propos', children: [] },
      { label: 'Contact', children: [] },
    ],
    footerNote: `En pied de page${NBSP}: mentions légales, confidentialité et cookies`,
    notes: [
      {
        title: 'Une page par prestation',
        text: `C’est ce que Google lit en premier${NBSP}: «${NBSP}dépannage chaudière Bruz${NBSP}» trouve une page qui en parle.`,
      },
      {
        title: 'Six à dix pages suffisent',
        text: 'C’est la taille de la plupart des sites d’artisans. Un blog se prévoit à part, s’il y a quelqu’un pour l’écrire.',
      },
      {
        title: 'Les pages légales en bas',
        text: 'Mentions légales et confidentialité sont obligatoires, mais elles n’ont pas leur place dans le menu.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Comment le remplir',
    title: 'Remplir le modèle en quatre étapes',
    intro:
      'Comptez une heure à la main. Remplacez chaque consigne grise par votre texte, et supprimez ce qui ne vous concerne pas.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Commencez par l’entreprise et les objectifs',
        description: 'Cinq lignes sur vous, trois objectifs avec leur mesure. Le reste du document en découle.',
      },
      {
        label: 'Étape 2',
        title: 'Listez les pages, puis classez les fonctionnalités',
        description: `Gardez l’arborescence type, rayez ce qui ne vous concerne pas, ajoutez une page par prestation. Classez ensuite chaque fonctionnalité${NBSP}: indispensable à la mise en ligne, ou souhaitée plus tard.`,
      },
      {
        label: 'Étape 3',
        title: 'Dites qui fournit quoi',
        description: `Textes, photos, logo, accès au nom de domaine${NBSP}: qui s’en charge, et pour quand.`,
      },
      {
        label: 'Étape 4',
        title: 'Donnez un budget et une date',
        description: 'Une fourchette et une date de mise en ligne, puis le même document à deux ou trois prestataires.',
      },
    ],
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre obligations à écrire dans le cahier des charges',
    intro: `Elles concernent tous les sites d’entreprise, même d’une seule page. Le modèle les prévoit dans la partie «${NBSP}contraintes${NBSP}», pour qu’elles soient chiffrées dès le devis.`,
    facts: [
      {
        contextLabel: 'Tout site professionnel',
        title: 'Les mentions légales',
        text: 'Nom ou dénomination, adresse, numéro SIREN ou SIRET, moyen de contact et hébergeur du site, sur une page accessible depuis toutes les autres.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37351',
      },
      {
        contextLabel: 'Avant tout traceur',
        title: 'Les cookies',
        text: 'Pas de traceur publicitaire sans l’accord du visiteur, et un refus aussi simple que l’acceptation. Certaines mesures d’audience en sont dispensées.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31228',
      },
      {
        contextLabel: 'Formulaire de contact',
        title: 'Les données personnelles',
        text: 'Dire à quoi servent les données envoyées, combien de temps vous les gardez, et renvoyer vers votre politique de confidentialité.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence',
      },
      {
        contextLabel: 'Clients particuliers',
        title: 'Le médiateur de la consommation',
        text: 'Si vous travaillez pour des particuliers, le site indique le médiateur auquel vos clients peuvent s’adresser en cas de litige.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cahier des charges de site vitrine${NBSP}: vos questions`,
    questions: [
      {
        question: `Que mettre dans le cahier des charges d’un site vitrine${NBSP}?`,
        answer: `Neuf parties${NBSP}: l’entreprise, le projet, les objectifs et les cibles, les pages, les fonctionnalités, les contenus, les contraintes techniques et légales, le budget et le délai, et ce que chaque devis doit contenir. Le modèle les reprend dans cet ordre.`,
      },
      {
        question: `Combien de pages pour un site vitrine${NBSP}?`,
        answer: `Six à dix pages en général${NBSP}: l’accueil, une page par prestation, les réalisations, la page à propos et le contact, plus les mentions légales et la confidentialité en pied de page.`,
      },
      {
        question: `Combien coûte un site vitrine${NBSP}?`,
        answer: `Chez Dibodev, 290${NBSP}€ une seule fois sur modèle, nom de domaine et hébergement compris, ou à partir de 1${NBSP}500${NBSP}€ sur mesure. Le baromètre du prix d’un site internet compare les tarifs affichés par 20 prestataires français.`,
      },
      {
        question: `Un cahier des charges pour un site à 290${NBSP}€, c’est utile${NBSP}?`,
        answer: `Non. Pour un site sur modèle, un appel de 30${NBSP}minutes suffit. Le cahier des charges sert quand vous demandez plusieurs devis ou un site sur mesure.`,
      },
      {
        question: `Word ou PDF${NBSP}?`,
        answer:
          'Le Word se remplit et se modifie dans Word, LibreOffice, Google Docs ou Pages. Le PDF est l’exemple rempli, à lire ou à imprimer.',
      },
      {
        question: `Le modèle est-il vraiment gratuit${NBSP}?`,
        answer:
          'Oui, sans inscription ni e-mail. Vous pouvez l’envoyer à n’importe quel prestataire, pas seulement à moi.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Les autres modèles',
    title: `Un autre projet qu’un site vitrine${NBSP}?`,
    generatorCard: {
      projectType: 'showcaseWebsite',
      eyebrow: 'Générateur gratuit',
      title: 'Le vôtre en 5 minutes',
      text: 'Cinq questions, et le document se rédige à votre nom pendant que vous répondez. Word ou PDF, sans e-mail.',
      note: 'Site vitrine, e-commerce, application métier ou mobile',
    },
    generatorLinkLabel: 'Ouvrir le générateur',
  },
  contactCta: {
    title: `Votre cahier des charges est rempli${NBSP}?`,
    description: `Envoyez-le-moi${NBSP}: je vous réponds sous 24${NBSP}h, avec un prix ou avec mes questions. Si un site sur modèle à 290${NBSP}€ vous suffit, je vous le dis.`,
    button: 'Demander un devis',
    generatorLinkLabel: 'Le remplir avec le générateur',
  },
  mobileBar: {
    text: 'Modèle gratuit, sans e-mail',
    button: 'Télécharger le modèle Word',
  },
}
