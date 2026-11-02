import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_FR: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'onlineStore',
  meta: {
    title: `Cahier des charges e-commerce${NBSP}: modèle Word et PDF gratuit`,
    description: `Cahier des charges de boutique en ligne${NBSP}: modèle Word gratuit et exemple rempli en PDF. Paiement, livraison, CGV et budget déjà prévus. Sans e-mail.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Cahier des charges d’une boutique en ligne (e-commerce)',
  },
  breadcrumbLabel: 'E-commerce',
  shareImage: {
    titleLines: ['Cahier des charges', 'e-commerce'],
    highlight: 'e-commerce',
    subtitle: 'Modèle Word et exemple rempli en PDF',
    badge: 'Gratuit · sans e-mail',
    alt: 'Modèle gratuit de cahier des charges e-commerce pour une boutique en ligne, en Word, avec un exemple rempli en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cahier des charges e-commerce',
    titleAfter: `${NBSP}: modèle gratuit Word et PDF pour une boutique en ligne, avec un exemple rempli`,
    reassurances: ['Modèle + exemple rempli', 'Word modifiable', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description:
      'Un cahier des charges de boutique en ligne en neuf parties, prêt à remplir, et le même document rempli pour une épicerie fine de Rennes. Il s’adresse aux commerces, artisans et producteurs qui veulent vendre en ligne et recevoir des devis comparables. Les pages de la boutique, les fonctionnalités classées par priorité, le paiement, la livraison et les conditions générales de vente y sont déjà prévus. Il précise aussi que la boutique, le fichier clients et le nom de domaine restent à votre nom.',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur indépendant près de Rennes. Ce sont les questions que je pose avant de chiffrer une boutique en ligne.',
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: 'Pour un commerce, un artisan ou un producteur qui prépare sa boutique en ligne. Le Word se remplit et se modifie, le PDF montre le même document rempli de bout en bout.',
    templateLabel: 'Télécharger le modèle Word',
    templateMeta: 'Word, 9 parties à remplir',
    exampleLabel: 'Télécharger l’exemple rempli',
    exampleMeta: 'PDF, une épicerie fine à Rennes',
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
          'Les neuf pages types d’une boutique en ligne, à rayer ou à compléter',
          'Dix fonctionnalités à classer en indispensable ou souhaité, du paiement par carte au lien avec la caisse',
          'Fiches produit et photos, contraintes techniques et légales (paiement sécurisé, conditions de vente, rétractation)',
          'Budget, délai, maintenance et ce que chaque devis doit contenir',
        ],
      },
      {
        title: 'L’exemple rempli',
        format: 'PDF, Épicerie fine Lemoine à Rennes (entreprise fictive)',
        items: [
          'Une épicerie de 2 à 10 personnes qui crée sa boutique en ligne, pour les particuliers en France',
          `Trois objectifs avec leur mesure${NBSP}: vendre tous les jours, vendre au-delà de Rennes, proposer le retrait en boutique`,
          'Neuf pages types, dont le compte client et les conditions générales de vente',
          'Quatre fonctionnalités indispensables (catalogue, paiement par carte, stock, livraison et retrait), deux souhaitées (codes promo, comptes clients)',
          'Fiches produit et photos fournies par l’épicerie, mises en forme par le prestataire',
          `Un budget de 1${NBSP}500 à 5${NBSP}000${NBSP}€, une mise en ligne d’ici six mois, la maintenance chiffrée à part`,
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Exemple de cahier des charges',
    title: 'L’exemple rempli, à lire ici',
    intro:
      'La boutique en ligne d’une épicerie fine à Rennes, telle que le générateur la rédige à partir de cinq réponses.',
    expandLabel: 'Lire tout l’exemple',
    collapseLabel: 'Replier l’exemple',
    generatorLinkLabel: 'Faire le même à mon nom',
    answers: {
      projectType: 'onlineStore',
      kind: 'creation',
      companyName: 'Épicerie fine Lemoine',
      activity: `épicerie fine${NBSP}: produits bretons, paniers garnis et coffrets cadeaux`,
      city: 'Rennes',
      companySize: 'small',
      goals: ['sell', 'reach', 'pickup'],
      audience: 'consumers',
      features: ['catalog', 'cardPayment', 'stock', 'shipping', 'promoCodes', 'customerAccounts'],
      contentSource: 'client',
      budget: 'from1500to5000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Arborescence',
    title: 'Les pages d’une boutique en ligne',
    intro:
      'C’est la partie qui fixe le prix. Partez de ce plan, rayez ce qui ne vous concerne pas, ajoutez une page par catégorie de produits.',
    ariaLabel: `Plan d’une boutique en ligne${NBSP}: l’accueil, puis le catalogue avec une page par catégorie, les coffrets cadeaux, le panier et le paiement, le compte client et le contact${NBSP}; en pied de page, les conditions générales de vente, la livraison et les retours, les mentions légales, la confidentialité et les cookies.`,
    rootLabel: 'Accueil',
    branches: [
      { label: 'Catalogue', children: ['Biscuits et caramels', 'Conserves de la mer', 'Cidres et boissons'] },
      { label: 'Coffrets cadeaux', children: [] },
      { label: 'Panier et paiement', children: [] },
      { label: 'Compte client', children: [] },
      { label: 'Contact', children: [] },
    ],
    footerNote: `En pied de page${NBSP}: conditions générales de vente, livraison et retours, mentions légales, confidentialité et cookies`,
    notes: [
      {
        title: 'Une page par catégorie',
        text: `Chaque catégorie a sa page, chaque produit sa fiche${NBSP}: une recherche comme «${NBSP}caramel au beurre salé${NBSP}» trouve une page qui en parle.`,
      },
      {
        title: 'Ce qui rassure avant l’achat',
        text: `Frais de port, délais de livraison, retours et moyens de paiement${NBSP}: le client les cherche avant de payer. Donnez-leur une page, liée depuis le panier.`,
      },
      {
        title: 'Le reste en pied de page',
        text: 'Conditions générales de vente, mentions légales et confidentialité sont obligatoires. Avec la page livraison et retours, elles vont en bas de chaque page, pas dans le menu.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Comment le remplir',
    title: 'Remplir le modèle en quatre étapes',
    intro: `Remplacez chaque consigne grise par votre texte, et supprimez ce qui ne vous concerne pas. Gardez l’ordre des parties${NBSP}: c’est celui dans lequel un prestataire le lit.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Commencez par l’entreprise et les objectifs',
        description:
          'Cinq lignes sur vous et vos produits, trois objectifs avec leur mesure. Le reste du document en découle.',
      },
      {
        label: 'Étape 2',
        title: 'Listez les pages, puis classez les fonctionnalités',
        description: `Gardez l’arborescence type et ajoutez une page par catégorie de produits. Classez ensuite les fonctionnalités${NBSP}: catalogue, paiement, stock et livraison d’abord, le reste peut attendre.`,
      },
      {
        label: 'Étape 3',
        title: 'Dites qui prépare les fiches produit',
        description: `Descriptions, photos, prix, poids pour les frais de port${NBSP}: qui s’en charge, et pour combien de produits.`,
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
    intro: `Elles concernent toute boutique en ligne qui vend à des particuliers, quelle que soit sa taille. Le modèle les prévoit dans la partie «${NBSP}contraintes${NBSP}», pour qu’elles soient chiffrées dès le devis.`,
    facts: [
      {
        contextLabel: 'Avant la commande',
        title: 'Les informations et les conditions de vente',
        text: `Caractéristiques des produits, prix toutes taxes comprises, délai de livraison et conditions générales de vente${NBSP}: le client les trouve sur le site avant de commander. Le bouton final porte la mention «${NBSP}Commande avec obligation de paiement${NBSP}».`,
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23455',
      },
      {
        contextLabel: `14${NBSP}jours`,
        title: 'Le droit de rétractation',
        text: `Un particulier qui achète à distance a 14${NBSP}jours pour se rétracter, sans avoir à se justifier, et le site doit l’en informer. Quelques produits en sont exclus, comme les denrées qui se périment vite.`,
        sourceName: 'Service-Public.fr',
        sourceUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10485',
      },
      {
        contextLabel: 'Clients particuliers',
        title: 'Le médiateur de la consommation',
        text: 'Si vous vendez à des particuliers, le site indique le médiateur auquel vos clients peuvent s’adresser en cas de litige.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
      {
        contextLabel: 'Fichier clients',
        title: 'Les données personnelles',
        text: `Adresses, commandes, comptes clients${NBSP}: ne collectez que ce qui sert, dites à quoi servent les données et combien de temps vous les gardez, et protégez-les.`,
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cahier des charges e-commerce${NBSP}: vos questions`,
    questions: [
      {
        question: `Que mettre dans un cahier des charges e-commerce${NBSP}?`,
        answer: `Neuf parties${NBSP}: l’entreprise, le projet, les objectifs et les clients visés, les pages de la boutique, les fonctionnalités, les fiches produit et les photos, les contraintes techniques et légales, le budget et le délai, et ce que chaque devis doit contenir. Le modèle les reprend dans cet ordre, avec le paiement, la livraison et les conditions de vente déjà prévus.`,
      },
      {
        question: `Combien de produits et quelles pages prévoir${NBSP}?`,
        answer: `Indiquez le nombre de produits à l’ouverture, le nombre de catégories, et si un produit existe en plusieurs versions (poids, parfum, taille)${NBSP}: c’est ce qui fait varier le travail sur le catalogue. Côté pages, le modèle prévoit l’accueil, le catalogue avec une page par catégorie, les fiches produit, le panier et le paiement, le compte client, la livraison et les retours, les conditions générales de vente et le contact, plus les mentions légales et la confidentialité en pied de page.`,
      },
      {
        question: `Combien coûte une boutique en ligne${NBSP}?`,
        answer: `Chez Dibodev, une boutique en ligne se fait sur mesure, à partir de 1${NBSP}500${NBSP}€. Le prix dépend de votre cahier des charges${NBSP}: nombre de produits, paiement, livraison, comptes clients. Le baromètre du prix d’un site internet compare les tarifs affichés par 20 prestataires français, du site d’une page à la boutique en ligne.`,
      },
      {
        question: `Faut-il choisir la plateforme dans le cahier des charges${NBSP}?`,
        answer: `Pas forcément. Décrivez ce que la boutique doit faire${NBSP}: Shopify, WooCommerce, PrestaShop ou un développement sur mesure sont des choix techniques que chaque prestataire propose et justifie dans son devis. Si vous avez déjà une plateforme, ou si vous tenez à l’une d’elles, écrivez-le dans les contraintes.`,
      },
      {
        question: `Paiement, livraison, retours${NBSP}: que faut-il préciser${NBSP}?`,
        answer:
          'Les moyens de paiement acceptés, les modes de livraison (transporteur, retrait en boutique), les frais de port et la façon de traiter un retour. Le modèle prévoit déjà un paiement sécurisé par un prestataire reconnu (3-D Secure), une page livraison et retours, et l’affichage du droit de rétractation.',
      },
      {
        question: `Le modèle est-il vraiment gratuit${NBSP}?`,
        answer:
          'Oui. Le modèle Word et l’exemple en PDF se téléchargent sans inscription ni e-mail, et vous pouvez envoyer le document à n’importe quel prestataire, pas seulement à moi.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Les autres modèles',
    title: `Un autre projet qu’une boutique en ligne${NBSP}?`,
    generatorCard: {
      projectType: 'onlineStore',
      eyebrow: 'Générateur gratuit',
      title: 'Le vôtre en 5 minutes',
      text: 'Cinq questions, et le document se rédige à votre nom pendant que vous répondez. Word ou PDF, sans e-mail.',
      note: 'Site vitrine, e-commerce, application métier ou mobile',
    },
    generatorLinkLabel: 'Ouvrir le générateur',
  },
  contactCta: {
    title: `Votre cahier des charges est rempli${NBSP}?`,
    description: `Envoyez-le-moi${NBSP}: je le lis moi-même et je vous réponds sous 24${NBSP}h, avec un prix ou avec mes questions. Si une solution du marché vous suffit, je vous le dis.`,
    button: 'Demander un devis',
    generatorLinkLabel: 'Le remplir avec le générateur',
  },
  mobileBar: {
    text: 'Modèle gratuit, sans e-mail',
    button: 'Télécharger le modèle Word',
  },
}
