import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageShared'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Bilan client coach sportif${NBSP}: modèle gratuit PDF et Excel`,
    description: `Bilan client coach sportif${NBSP}: modèle gratuit en PDF et Excel, avec carnet de séances. Mesures, tests, tonnage calculé. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de bilan client et de carnet de séances pour coach sportif',
  },
  breadcrumbLabel: 'Bilan client coach sportif',
  shareImage: {
    titleLines: ['Bilan client', 'coach sportif gratuit'],
    highlight: 'Bilan client',
    subtitle: 'Bilan initial et carnet de séances en PDF et Excel, mesures, tests de départ, tonnage calculé',
    badge: 'Gratuit, sans inscription',
    icon: 'dumbbell',
    alt: `Modèle de bilan client coach sportif gratuit${NBSP}: bilan initial et carnet de séances en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Bilan client coach sportif',
    titleAfter: `${NBSP}: modèle gratuit (+ carnet de séances)`,
    reassurances: ['Bilan initial + carnet de séances', 'Excel avec tonnage calculé', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un bilan initial et un carnet de séances de musculation prêts à remplir, pour un coach sportif indépendant, un personal trainer ou une petite salle. Le bilan note les objectifs, les antécédents, les mesures et les tests de départ du client, et recueille son consentement pour ses données de santé. Le carnet suit chaque séance${NBSP}: séries, répétitions, charges, RPE et tonnage.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles de la carte professionnelle d’éducateur sportif, du certificat médical et des données de santé pour que les mentions soient à jour.',
    updatedAt: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les coachs sportifs indépendants, les personal trainers et les petites salles. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, tonnage calculé',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre pratique. Il ne remplace pas un avis médical.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un bilan initial et un carnet de séances, en PDF et en Excel',
    intro: `Le PDF reprend les deux documents sur deux pages A4, à remplir à la main. L’Excel les reprend sur deux feuilles${NBSP}: la première calcule l’écart entre la dernière mesure et le départ, la seconde le tonnage de chaque exercice et de chaque séance.`,
    documents: [
      {
        title: 'Bilan initial',
        format: 'Page 1 du PDF, feuille « Bilan client » de l’Excel',
        items: [
          'En-tête du coach ou de la structure (nom, téléphone, n° de carte professionnelle d’éducateur sportif), diplôme (BPJEPS, DEUST, STAPS…) et assurance RC pro',
          'Client, date du bilan, date de naissance, téléphone ou e-mail',
          `Objectifs et pratique actuelle${NBSP}: objectif principal, échéance visée, sport pratiqué, séances possibles par semaine, lieu et matériel, sommeil et alimentation`,
          `Antécédents et douleurs${NBSP}: blessures et opérations, douleurs actuelles et mouvements à éviter, suivi médical en cours, certificat médical (facultatif) fourni le…`,
          'Mesures de départ (poids, taille, tours de taille, hanches, poitrine, bras, cuisse) et tests de départ (squat, pompes, tractions, gainage, souplesse, cardio, mobilité), à reprendre à + 1 et + 3 mois (+ 2 mois et écart calculé dans l’Excel)',
          'Plan proposé, deux cases de consentement pour les données de santé, signatures du client et du coach',
        ],
      },
      {
        title: 'Carnet de séances',
        format: 'Page 2 du PDF, feuille « Carnet de séances » de l’Excel',
        items: [
          'Date, type de séance (A, B, push, pull, jambes…), durée, poids du jour',
          `Dans le PDF, avant la séance${NBSP}: énergie et sommeil de 1 à 5, douleur de 0 à 4, échauffement${NBSP}; puis 12 lignes d’exercices avec 4 séries (reps × kg), RPE et tonnage, et le tonnage de la séance précédente du même type`,
          `Dans le PDF, après la séance${NBSP}: ressenti en 4 cases (facile, juste, dur, douleur apparue), notes du coach, prochaine séance`,
          `Dans l’Excel, une ligne par exercice (60 lignes)${NBSP}: séries, répétitions, charge, RPE, tonnage calculé, notes`,
          `Dans l’Excel, un récapitulatif par séance${NBSP}: date, type, poids du jour, énergie et sommeil, notes du coach, tonnage, séries, évolution en % et écart en kg calculés`,
          'Rappel du RPE de 1 à 10 et de la définition du tonnage, mention que le carnet ne remplace pas un avis médical',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le bilan en cinq étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les écarts, le tonnage et l’évolution d’une séance à l’autre se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos références, une fois pour toutes',
        description: `Remplissez l’en-tête${NBSP}: nom ou structure, téléphone, n° de carte professionnelle d’éducateur sportif, diplôme et assurance RC pro, puis enregistrez le fichier comme modèle. Chaque nouveau client part de cette copie.`,
      },
      {
        label: 'Étape 2',
        title: 'Le bilan de la première séance',
        description: `Client, objectif principal et échéance, pratique actuelle, séances possibles, lieu et matériel. Prenez le temps des antécédents et des douleurs${NBSP}: c’est ce qui fixe les mouvements à éviter et les points de vigilance du plan.`,
      },
      {
        label: 'Étape 3',
        title: 'Mesures et tests de départ',
        description: `Remplissez la colonne « Départ » des deux tableaux${NBSP}: poids et tours de taille, puis squat, pompes, gainage, cardio. Aux contrôles suivants, vous reprenez les mêmes lignes à + 1 et + 3 mois, et l’Excel, qui ajoute + 2 mois, affiche l’écart avec le départ.`,
      },
      {
        label: 'Étape 4',
        title: 'Consentement, signatures, exemplaire du client',
        description: `Lisez les deux cases avec le client${NBSP}: l’accord pour noter ses blessures, douleurs, mesures et photos de suivi, et le rappel que le bilan ne remplace pas un avis médical. Il coche, date et signe${NBSP}; vous signez, et il repart avec un exemplaire.`,
      },
      {
        label: 'Étape 5',
        title: 'Le carnet, séance après séance',
        description: `Dans le PDF, une page par séance${NBSP}: date, type, énergie, sommeil et douleur avant de commencer, puis reps × kg de chaque série, RPE et tonnage. Dans l’Excel, une ligne par exercice${NBSP}: le tonnage se calcule et le récapitulatif compare la séance à la précédente.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro: 'Trois règles du coach sportif passent par le bilan client. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Avant la première séance payée',
        title: 'La carte professionnelle d’éducateur sportif',
        text: 'Enseigner, animer ou encadrer une activité physique contre rémunération impose de se déclarer auprès de l’administration, qui vérifie la qualification et l’absence d’interdiction d’encadrer, puis délivre la carte professionnelle. L’en-tête du bilan reprend son numéro, votre diplôme et votre assurance RC pro.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Certificat médical',
        title: 'Pas une obligation légale, souvent demandé',
        text: `Fournir un certificat médical n’est pas une obligation légale pour s’inscrire${NBSP}; la salle peut le demander, car il est lié à son assurance. Le bilan le note comme facultatif, avec la date à laquelle le client l’a fourni.`,
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Données sensibles',
        title: 'Blessures, inaptitudes et mesures croisées',
        text: `L’inaptitude à une activité sportive est une donnée de santé, comme le poids croisé avec d’autres mesures${NBSP}: un régime particulier s’applique (confidentialité, sécurité, interdiction de commercialisation). Le bilan recueille le consentement du client en deux cases et rappelle ses droits de consultation, de correction et de suppression.`,
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de bilan client coach sportif${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de bilan client est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser pour chaque client. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Que doit contenir un bilan client de coaching sportif${NBSP}?`,
        answer:
          'L’objectif et son échéance, la pratique actuelle et les créneaux possibles, les antécédents et les douleurs, des mesures et des tests de départ à refaire à date fixe, le plan proposé et le consentement du client pour ses données de santé. Le modèle suit cet ordre sur une page A4, avec un exemplaire pour le client.',
      },
      {
        question: `Puis-je noter les blessures et le poids de mes clients${NBSP}?`,
        answer: `Oui, avec précaution${NBSP}: une inaptitude à une activité sportive est une donnée de santé selon la CNIL, et un poids croisé avec d’autres mesures peut le devenir. Le bilan recueille le consentement du client en deux cases${NBSP}; à vous de limiter l’accès à ces fiches et d’éviter les messageries grand public pour les échanger.`,
      },
      {
        question: `Faut-il un certificat médical avant la première séance${NBSP}?`,
        answer: `Ce n’est pas une obligation légale pour s’inscrire, mais une salle peut le demander, car il est lié à son assurance. Le bilan prévoit la case « certificat médical (facultatif)${NBSP}: fourni le » et rappelle au client qu’il ne remplace pas un avis médical.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Dans la feuille « Bilan client », vous saisissez les mesures et les tests au départ, puis à 1, 2 et 3 mois${NBSP}; la colonne « Écart » affiche la différence entre la dernière valeur saisie et le départ. Dans la feuille « Carnet de séances », une ligne par exercice avec séries, répétitions et charge${NBSP}: le tonnage se calcule, et le récapitulatif l’additionne par date, puis affiche l’évolution en % et l’écart en kg avec la séance précédente. Les deux feuilles sont réglées pour l’impression A4.`,
      },
      {
        question: `Et quand les clients se multiplient${NBSP}?`,
        answer: `Un modèle suffit tant que vous suivez vos clients un par un. Au-delà, les applications de coaching mettent le bilan, les programmes et le suivi sur le téléphone du client, Harbiz dès 19${NBSP}€ par mois et Hexfit dès 19${NBSP}$. Si votre méthode, vos formules ou votre salle sortent de leur cadre, le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les bilans, les carnets et les programmes se recopient d’un fichier à l’autre, un outil qui les relie à votre agenda et à vos abonnements vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour coachs sportifs',
  },
}
