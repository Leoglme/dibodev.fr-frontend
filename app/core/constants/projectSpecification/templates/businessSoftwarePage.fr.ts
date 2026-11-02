import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_FR: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'businessSoftware',
  meta: {
    title: `Cahier des charges application métier${NBSP}: modèle gratuit`,
    description:
      'Modèle Word de cahier des charges pour une application métier ou un logiciel de gestion sur mesure, avec un exemple rempli en PDF. Gratuit, sans e-mail.',
    inLanguage: 'fr-FR',
    schemaAbout: 'Cahier des charges d’une application métier ou d’un logiciel de gestion sur mesure',
  },
  breadcrumbLabel: 'Application métier',
  shareImage: {
    titleLines: ['Cahier des charges', 'application métier'],
    highlight: 'application métier',
    subtitle: 'Modèle Word et exemple rempli en PDF',
    badge: 'Gratuit · sans e-mail',
    alt: 'Modèle gratuit de cahier des charges pour une application métier, en Word, avec un exemple rempli en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cahier des charges application métier',
    titleAfter: `${NBSP}: modèle gratuit Word et PDF, avec un exemple rempli`,
    reassurances: ['Modèle + exemple rempli', 'Word modifiable', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description:
      'Un cahier des charges d’application métier en neuf parties, prêt à remplir, et le même document rempli pour une entreprise de nettoyage de Cesson-Sévigné. Il s’adresse aux TPE et PME qui veulent remplacer leurs fichiers Excel, ou leur logiciel de gestion actuel, par un logiciel sur mesure. Les écrans, les rôles des utilisateurs, les données à reprendre, le budget et la propriété du code y sont déjà prévus.',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur indépendant près de Rennes. Ce sont les questions que je pose avant de chiffrer une application métier.',
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: 'Pour une TPE ou une PME qui veut remplacer ses fichiers Excel ou son logiciel de gestion. Le Word se remplit et se modifie, le PDF montre le même document rempli de bout en bout.',
    templateLabel: 'Télécharger le modèle Word',
    templateMeta: 'Word, 9 parties à remplir',
    exampleLabel: 'Télécharger l’exemple rempli',
    exampleMeta: 'PDF, une entreprise de nettoyage',
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
          `Présentation de l’entreprise et du projet${NBSP}: création ou refonte, outils utilisés aujourd’hui`,
          'Objectifs, chacun avec sa mesure, et utilisateurs visés',
          'Les six écrans types d’une application métier, à rayer ou à compléter',
          'Dix fonctionnalités à classer en indispensable ou souhaité',
          'Les données à reprendre (fichiers Excel ou autre logiciel), les contraintes techniques et légales',
          'Budget, délai, maintenance et ce que chaque devis doit contenir',
        ],
      },
      {
        title: 'L’exemple rempli',
        format: 'PDF, Propreté Bernard à Cesson-Sévigné (entreprise fictive)',
        items: [
          'Une entreprise de nettoyage de 11 à 50 personnes, qui crée un outil pour le bureau et les équipes sur le terrain',
          `Trois objectifs avec leur mesure${NBSP}: remplacer les fichiers Excel, planifier les équipes, avoir des chiffres fiables`,
          `Cinq écrans${NBSP}: connexion, tableau de bord, clients, planning, paramètres et utilisateurs`,
          'Sept fonctionnalités classées en indispensable et souhaité, dont le mode hors ligne et la signature sur téléphone',
          `Les fichiers Excel actuels à reprendre, un budget de 5${NBSP}000 à 15${NBSP}000${NBSP}€ et une mise en ligne d’ici six mois`,
          'Le code source et les données au nom de l’entreprise, à confirmer dans chaque devis',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Exemple de cahier des charges',
    title: 'L’exemple rempli, à lire ici',
    intro:
      'L’application de gestion d’une entreprise de nettoyage à Cesson-Sévigné, telle que le générateur la rédige à partir de cinq réponses.',
    expandLabel: 'Lire tout l’exemple',
    collapseLabel: 'Replier l’exemple',
    generatorLinkLabel: 'Faire le même à mon nom',
    answers: {
      projectType: 'businessSoftware',
      kind: 'creation',
      companyName: 'Propreté Bernard',
      activity: `entreprise de nettoyage${NBSP}: bureaux, copropriétés et vitrerie`,
      city: 'Cesson-Sévigné',
      companySize: 'medium',
      goals: ['planning', 'spreadsheets', 'figures'],
      audience: 'both',
      features: ['roles', 'dashboard', 'spreadsheetImport', 'exports', 'planning', 'offline', 'signature'],
      contentSource: 'client',
      budget: 'from5000to15000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Arborescence',
    title: 'Les écrans d’une application métier',
    intro:
      'C’est la partie qui fixe le prix. Partez de ce plan, rayez ce qui ne vous concerne pas, ajoutez un écran pour chaque tâche que l’application doit prendre en charge.',
    ariaLabel: `Plan d’une application métier${NBSP}: le tableau de bord, puis le planning par équipe et par chantier, les clients et sites avec leurs contrats, les interventions avec la feuille de passage et la signature du client, les équipes, et les paramètres et utilisateurs${NBSP}; derrière chaque écran, un compte par personne et des droits selon son rôle.`,
    rootLabel: 'Tableau de bord',
    branches: [
      { label: 'Planning', children: ['Par équipe', 'Par chantier'] },
      { label: 'Clients et sites', children: ['Contrats'] },
      { label: 'Interventions', children: ['Feuille de passage', 'Signature du client'] },
      { label: 'Équipes', children: [] },
      { label: 'Paramètres et utilisateurs', children: [] },
    ],
    footerNote: `Derrière chaque écran${NBSP}: un compte par personne, et des droits selon son rôle`,
    notes: [
      {
        title: 'Un écran par tâche réelle',
        text: `Partez de ce que vos équipes font chaque semaine${NBSP}: le planning, le passage chez un client, la signature. Un écran par tâche, avec les mots de votre métier.`,
      },
      {
        title: `Les rôles${NBSP}: qui voit quoi`,
        text: `Le bureau gère les clients et le planning${NBSP}; une équipe sur le terrain voit ses interventions du jour. Écrivez ces rôles dans le cahier des charges${NBSP}: ce sont eux qui fixent les droits.`,
      },
      {
        title: 'Ce que l’on reprend des fichiers Excel',
        text: 'Listez les fichiers à reprendre (clients, sites, contrats) et leurs colonnes utiles. Une colonne que personne ne remplit n’a pas besoin d’être reprise.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Comment le remplir',
    title: 'Remplir le modèle en quatre étapes',
    intro: `Remplacez chaque consigne grise par votre texte, et supprimez ce qui ne vous concerne pas. Remplissez-le avec ceux qui utiliseront l’application${NBSP}: ce sont eux qui connaissent les vraies tâches.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Commencez par l’entreprise et les objectifs',
        description:
          'Cinq lignes sur vous, ce que vous utilisez aujourd’hui (fichiers Excel, logiciel), trois objectifs avec leur mesure.',
      },
      {
        label: 'Étape 2',
        title: 'Listez les écrans, puis classez les fonctionnalités',
        description: `Gardez les écrans types et ajoutez un écran par tâche réelle. Classez ensuite chaque fonctionnalité, indispensable dès le premier jour ou souhaitée plus tard, et précisez les rôles${NBSP}: qui voit quoi, qui modifie quoi.`,
      },
      {
        label: 'Étape 3',
        title: 'Décrivez les données à reprendre',
        description: 'Quels fichiers Excel ou quel logiciel, combien de lignes à peu près, et qui les fournit.',
      },
      {
        label: 'Étape 4',
        title: 'Donnez un budget et une date',
        description:
          'Une fourchette et une date de mise en service, puis le même document à deux ou trois prestataires.',
      },
    ],
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre obligations à écrire dans le cahier des charges',
    intro: `Une application métier garde des données de clients et de salariés, et parfois des factures. Le modèle prévoit déjà l’accès par compte et les sauvegardes${NBSP}: ajoutez le reste dans la partie «${NBSP}contraintes${NBSP}», pour qu’il soit chiffré dès le devis.`,
    facts: [
      {
        contextLabel: 'Clients et salariés',
        title: 'La protection des données (RGPD)',
        text: `Noms, adresses, téléphones, plannings des salariés${NBSP}: ce sont des données personnelles, et le RGPD fixe des obligations à l’entreprise qui les garde. Le cahier des charges dit quelles données l’application enregistre, et qui peut les voir.`,
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
      {
        contextLabel: 'Chaque traitement de données',
        title: 'Le registre des traitements',
        text: `Fichier clients, planning des salariés${NBSP}: ce que l’application fait de ces données s’inscrit au registre des activités de traitement de l’entreprise. La liste des données écrite dans le cahier des charges sert à le tenir à jour.`,
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement',
      },
      {
        contextLabel: 'Accès et sauvegardes',
        title: 'La sécurité des données',
        text: `Accès par compte, droits selon le rôle, sauvegarde chaque jour${NBSP}: le modèle écrit déjà ces points dans les contraintes. Gardez-les, pour que chaque devis les chiffre.`,
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/cybersecurite/securite-des-donnees',
      },
      {
        contextLabel: 'Depuis le 1er septembre 2026',
        title: 'La facture électronique',
        text: 'La facturation électronique est effective depuis le 1er septembre 2026. Si l’application doit éditer des factures, écrivez-le dès le cahier des charges, pour que chaque devis en tienne compte.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/actualites/A18953',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cahier des charges d’application métier${NBSP}: vos questions`,
    questions: [
      {
        question: `Que mettre dans le cahier des charges d’une application métier${NBSP}?`,
        answer: `Neuf parties${NBSP}: l’entreprise, le projet, les objectifs et les utilisateurs, les écrans, les fonctionnalités, les données à reprendre, les contraintes techniques et légales, le budget avec le délai et la maintenance, puis ce que chaque devis doit contenir. Le plus utile pour un prestataire${NBSP}: la liste des écrans, les rôles de chacun et les fichiers à reprendre. Le modèle suit cet ordre.`,
      },
      {
        question: `Application sur mesure ou logiciel du marché${NBSP}?`,
        answer: `Un logiciel du marché suffit quand il colle à votre façon de travailler${NBSP}: il est prêt tout de suite et se paie en général par abonnement. Une application sur mesure se justifie quand aucun ne colle, et que vos équipes finissent par tout refaire dans des fichiers Excel. Le cahier des charges sert dans les deux cas${NBSP}: envoyez-le aussi aux éditeurs de logiciels, pour comparer. Si un logiciel du marché vous suffit, je vous le dis dès le premier échange.`,
      },
      {
        question: `Combien coûte une application métier sur mesure${NBSP}?`,
        answer: `Chez Dibodev, de 5${NBSP}000 à 15${NBSP}000${NBSP}€ au forfait, avec un prix fixé dans le devis après un premier échange gratuit. Le prix dépend du nombre d’écrans, d’utilisateurs et de liens avec vos autres logiciels. La maintenance se chiffre à part. Le baromètre du prix d’un logiciel sur mesure compare les tarifs affichés par d’autres prestataires français.`,
      },
      {
        question: `Faut-il reprendre mes fichiers Excel${NBSP}?`,
        answer: `Oui, s’ils servent encore${NBSP}: clients, sites, contrats ou tarifs sont importés dans l’application, pour que personne ne reparte de zéro. Dans le générateur, la reprise des fichiers Excel est cochée d’office et classée indispensable. Dites dans le cahier des charges quels fichiers reprendre et lesquels laisser de côté.`,
      },
      {
        question: `À qui appartient le code de l’application${NBSP}?`,
        answer: `À votre entreprise, si le cahier des charges et le devis le disent. Le modèle l’écrit deux fois${NBSP}: dans les contraintes, puis dans ce que chaque devis doit confirmer. Chez Dibodev, le code source et les données vous appartiennent.`,
      },
      {
        question: `Le modèle est-il vraiment gratuit${NBSP}?`,
        answer:
          'Oui, sans inscription ni e-mail. Vous pouvez l’envoyer à n’importe quel prestataire ou éditeur de logiciel, pas seulement à moi.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Les autres modèles',
    title: `Un autre projet qu’une application métier${NBSP}?`,
    generatorCard: {
      projectType: 'businessSoftware',
      eyebrow: 'Générateur gratuit',
      title: 'Le vôtre en 5 minutes',
      text: 'Cinq questions, et le document se rédige à votre nom pendant que vous répondez. Word ou PDF, sans e-mail.',
      note: 'Site vitrine, e-commerce, application métier ou mobile',
    },
    generatorLinkLabel: 'Ouvrir le générateur',
  },
  contactCta: {
    title: `Votre cahier des charges est rempli${NBSP}?`,
    description: `Envoyez-le-moi${NBSP}: je vous réponds sous 24${NBSP}h, avec un prix ou avec mes questions. Si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Demander un devis',
    generatorLinkLabel: 'Le remplir avec le générateur',
  },
  mobileBar: {
    text: 'Modèle gratuit, sans e-mail',
    button: 'Télécharger le modèle Word',
  },
}
