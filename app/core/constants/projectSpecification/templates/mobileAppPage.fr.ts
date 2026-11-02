import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_MOBILE_APP_PAGE_FR: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'mobileApp',
  meta: {
    title: `Cahier des charges application mobile${NBSP}: modèle et exemple`,
    description: `Modèle Word de cahier des charges d’application mobile iPhone et Android, et exemple rempli en PDF${NBSP}: écrans, fonctionnalités, budget. Gratuit, sans e-mail.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Cahier des charges d’une application mobile',
  },
  breadcrumbLabel: 'Application mobile',
  shareImage: {
    titleLines: ['Cahier des charges', 'application mobile'],
    highlight: 'application mobile',
    subtitle: 'Modèle Word et exemple rempli en PDF',
    badge: 'Gratuit · sans e-mail',
    alt: 'Modèle gratuit de cahier des charges pour une application mobile iPhone et Android, en Word, avec un exemple rempli en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Cahier des charges application mobile',
    titleAfter: `${NBSP}: modèle gratuit Word et PDF, avec un exemple rempli`,
    reassurances: ['Modèle + exemple rempli', 'Word modifiable', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un cahier des charges d’application mobile en neuf parties, prêt à remplir, et le même document rempli pour une salle de sport de Rennes. Il s’adresse à une entreprise qui veut une appli iPhone et Android pour ses clients ou ses équipes, et qui demande des devis. Les écrans, les fonctionnalités classées par priorité, le budget et le délai y sont déjà prévus, comme la publication sur les stores et la suppression du compte depuis l’appli.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur indépendant près de Rennes. Ce sont les questions que je pose avant de chiffrer une application mobile.',
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: 'Pour une entreprise qui prépare une appli pour ses clients ou ses équipes. Le Word se remplit et se modifie, le PDF montre le même document rempli de bout en bout.',
    templateLabel: 'Télécharger le modèle Word',
    templateMeta: 'Word, 9 parties à remplir',
    exampleLabel: 'Télécharger l’exemple rempli',
    exampleMeta: 'PDF, une salle de sport à Rennes',
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
          'Objectifs, chacun avec sa mesure, et utilisateurs visés',
          'Les écrans types d’une application mobile, à rayer ou à compléter',
          'Dix fonctionnalités à classer en indispensable ou souhaité',
          'Contenus et identité visuelle, contraintes des stores et du RGPD',
          'Budget, délai, maintenance et ce que chaque devis doit contenir',
        ],
      },
      {
        title: 'L’exemple rempli',
        format: 'PDF, Fitness Moreau à Rennes (entreprise fictive)',
        items: [
          'Une salle de sport de Rennes, avec une équipe de 2 à 10 personnes, qui crée son application pour ses clients',
          `Trois objectifs, chacun avec sa mesure${NBSP}: faire revenir les clients, prendre des réservations, prévenir par notification`,
          `Six écrans${NBSP}: accueil, connexion et création de compte, liste et fiche détaillée, réservation, profil, administration sur ordinateur`,
          'Six fonctionnalités classées en indispensable et souhaité, dont la réservation de créneaux et le paiement dans l’appli',
          'Un budget à définir avec le prestataire, qui propose une version essentielle et ses options, une mise en ligne d’ici six mois et la maintenance chiffrée à part',
          'La liste de ce que chaque devis doit contenir, jusqu’à la propriété du code et des comptes des stores',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Exemple de cahier des charges',
    title: 'L’exemple rempli, à lire ici',
    intro: 'L’application d’une salle de sport à Rennes, telle que le générateur la décrit à partir de cinq réponses.',
    expandLabel: 'Lire tout l’exemple',
    collapseLabel: 'Replier l’exemple',
    generatorLinkLabel: 'Faire le même à mon nom',
    answers: {
      projectType: 'mobileApp',
      kind: 'creation',
      companyName: 'Fitness Moreau',
      activity: `salle de sport${NBSP}: cours collectifs, coaching et abonnements`,
      city: 'Rennes',
      companySize: 'small',
      goals: ['booking', 'loyalty', 'notify'],
      audience: 'customers',
      features: ['iosAndroid', 'accounts', 'notifications', 'admin', 'booking', 'inAppPayment'],
      contentSource: 'together',
      budget: 'unknown',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Arborescence',
    title: 'Les écrans d’une application mobile',
    intro: `C’est la partie qui fixe le prix. Voici les écrans d’une appli de salle de sport${NBSP}: partez de ce plan, rayez ce qui ne vous concerne pas, ajoutez ce qui manque.`,
    ariaLabel: `Plan d’une application mobile de salle de sport${NBSP}: l’accueil, puis le planning des cours avec la réservation d’un cours et mes réservations, l’abonnement et son paiement, les notifications, le profil avec la suppression du compte, et l’administration sur ordinateur${NBSP}; depuis le profil, la confidentialité et les conditions d’utilisation.`,
    rootLabel: 'Accueil',
    branches: [
      { label: 'Planning des cours', children: ['Réserver un cours', 'Mes réservations'] },
      { label: 'Abonnement', children: ['Paiement'] },
      { label: 'Notifications', children: [] },
      { label: 'Profil', children: ['Supprimer mon compte'] },
      { label: 'Administration sur ordinateur', children: [] },
    ],
    footerNote: `Accessibles depuis le profil${NBSP}: confidentialité et conditions d’utilisation`,
    notes: [
      {
        title: 'Le compte, de la création à la suppression',
        text: `Création, connexion et suppression${NBSP}: prévoyez les trois écrans. La suppression du compte depuis l’appli est exigée par l’App Store et par Google Play.`,
      },
      {
        title: 'L’administration, sur ordinateur',
        text: `Qui ajoute les cours et envoie les notifications${NBSP}? Souvent l’équipe, depuis un navigateur. Cet outil fait partie du projet${NBSP}: décrivez-le comme le reste.`,
      },
      {
        title: 'Commencer par l’essentiel',
        text: 'Chaque écran se conçoit et se teste sur iPhone comme sur Android. Gardez pour une mise à jour ce qui n’est pas indispensable le jour de la publication.',
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
        description: `Cinq lignes sur vous, trois objectifs avec leur mesure, et qui utilisera l’appli${NBSP}: vos clients, vos équipes ou les deux.`,
      },
      {
        label: 'Étape 2',
        title: 'Listez les écrans, puis classez les fonctionnalités',
        description: `Gardez les écrans types et dites en une ligne ce que chacun affiche. Classez ensuite chaque fonctionnalité${NBSP}: indispensable le jour de la publication, ou souhaitée pour une mise à jour.`,
      },
      {
        label: 'Étape 3',
        title: 'Dites qui fournit quoi',
        description: `Textes, images, logo, icône de l’appli${NBSP}: qui s’en charge, et pour quand.`,
      },
      {
        label: 'Étape 4',
        title: 'Donnez un budget et une date',
        description:
          'Une fourchette et une date de mise en ligne. Sans fourchette, demandez une version essentielle et ses options. Puis envoyez le même document à deux ou trois prestataires.',
      },
    ],
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Ce que les stores et la loi demandent',
    title: 'Quatre points à écrire dans le cahier des charges',
    intro: `Ils concernent toute appli qui crée des comptes. Le modèle prévoit la suppression du compte et le RGPD dans la partie «${NBSP}contraintes${NBSP}», pour qu’ils soient chiffrés dès le devis.`,
    facts: [
      {
        contextLabel: 'App Store, règle 5.1.1 (v)',
        title: 'Supprimer son compte depuis l’appli',
        text: 'Une appli qui permet de créer un compte doit aussi permettre de le supprimer, depuis l’appli elle-même. Le prévoir dès le cahier des charges évite de le découvrir au moment de la publication.',
        sourceName: 'Apple, App Review Guidelines',
        sourceUrl: 'https://developer.apple.com/app-store/review/guidelines/',
      },
      {
        contextLabel: 'Google Play',
        title: 'La même exigence sur Android',
        text: `Google Play a ses propres obligations de suppression de compte${NBSP}: une appli qui permet d’en créer un doit aussi permettre d’en demander la suppression.`,
        sourceName: 'Google Play, obligations de suppression de compte',
        sourceUrl: 'https://support.google.com/googleplay/android-developer/answer/13327111',
      },
      {
        contextLabel: 'Avant la conception',
        title: 'Les recommandations de la CNIL',
        text: 'La CNIL publie des recommandations propres aux applications mobiles, sur les données personnelles de leurs utilisateurs. Joignez-les au cahier des charges, pour que le prestataire en tienne compte dès la conception.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/recommandations-applications-mobiles',
      },
      {
        contextLabel: 'Dès le premier compte',
        title: 'Les obligations du RGPD',
        text: `Nom, e-mail, réservations${NBSP}: une appli avec des comptes collecte des données personnelles, et l’entreprise qui la publie doit respecter les obligations du RGPD.`,
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cahier des charges d’application mobile${NBSP}: vos questions`,
    questions: [
      {
        question: `Que mettre dans le cahier des charges d’une application mobile${NBSP}?`,
        answer: `Neuf parties${NBSP}: l’entreprise, le projet, les objectifs et les utilisateurs, les écrans, les fonctionnalités, les contenus, les contraintes techniques et légales, le budget et le délai, et ce que chaque devis doit contenir. Le modèle les reprend dans cet ordre. Pour une appli, les contraintes ajoutent la publication sur l’App Store et Google Play au nom de l’entreprise, la suppression du compte depuis l’appli et la propriété du code source.`,
      },
      {
        question: `Une appli pour iPhone et Android${NBSP}: faut-il deux applications${NBSP}?`,
        answer: `Pas forcément. Une seule base de code peut servir les deux${NBSP}: l’appli est écrite une fois, puis publiée sur l’App Store et sur Google Play. Il reste deux publications, une par store, mais un seul code à faire évoluer. Le modèle l’écrit dans ses contraintes${NBSP}: une seule application pour iPhone et Android.`,
      },
      {
        question: `Application mobile ou site adapté au téléphone${NBSP}: que choisir${NBSP}?`,
        answer: `Un site adapté au téléphone suffit pour présenter votre activité, être trouvé sur Google et recevoir des demandes. Une application se justifie quand vos clients ou vos équipes l’ouvrent souvent${NBSP}: réserver un cours, recevoir une notification, travailler sans réseau, payer un abonnement. Si l’usage reste occasionnel, commencez par le site.`,
      },
      {
        question: `Combien coûte une application mobile${NBSP}?`,
        answer:
          'Chez Dibodev, une application mobile se chiffre sur devis, à partir de votre cahier des charges. Le prix dépend surtout du nombre d’écrans, des fonctionnalités (comptes, réservation, paiement, mode hors ligne) et de l’administration à prévoir. Sans budget défini, le générateur demande au prestataire une version essentielle et ses options.',
      },
      {
        question: `Qui publie l’appli sur les stores, et à quel nom${NBSP}?`,
        answer: `L’appli se publie au nom de votre entreprise, sur ses propres comptes App Store et Google Play. Le prestataire peut s’occuper de la publication, mais les comptes et le code source restent à vous${NBSP}: le modèle demande à chaque devis de le confirmer.`,
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
    title: `Un autre projet qu’une application mobile${NBSP}?`,
    generatorCard: {
      projectType: 'mobileApp',
      eyebrow: 'Générateur gratuit',
      title: 'Le vôtre en 5 minutes',
      text: 'Cinq questions, et le document se rédige à votre nom pendant que vous répondez. Word ou PDF, sans e-mail.',
      note: 'Site vitrine, e-commerce, application métier ou mobile',
    },
    generatorLinkLabel: 'Ouvrir le générateur',
  },
  contactCta: {
    title: `Votre cahier des charges est rempli${NBSP}?`,
    description: `Envoyez-le-moi${NBSP}: je vous réponds sous 24${NBSP}h, avec un prix ou avec mes questions. Si un site adapté au téléphone suffit à votre besoin, je vous le dis.`,
    button: 'Demander un devis',
    generatorLinkLabel: 'Le remplir avec le générateur',
  },
  mobileBar: {
    text: 'Modèle gratuit, sans e-mail',
    button: 'Télécharger le modèle Word',
  },
}
