import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Feuille d’émargement formation${NBSP}: modèle gratuit PDF + Excel`,
    description: `Feuille d’émargement formation gratuite en PDF et Excel${NBSP}: signature par demi-journée, NDA, présences de la semaine, heures calculées. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de feuille d’émargement et de suivi des heures pour organisme de formation et centre de cours',
  },
  breadcrumbLabel: 'Feuille d’émargement formation',
  shareImage: {
    titleLines: ['Feuille d’émargement', 'formation gratuite'],
    highlight: 'émargement',
    subtitle: 'Émargement par demi-journée et présences de la semaine en PDF, heures et soldes calculés en Excel',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de feuille d’émargement formation gratuit${NBSP}: émargement par demi-journée et présences de la semaine en PDF, suivi des heures en Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Feuille d’émargement formation',
    titleAfter: `${NBSP}: modèle gratuit (+ suivi des heures)`,
    reassurances: [
      'Émargement + présences de la semaine',
      'Excel avec heures et soldes calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une feuille d’émargement à faire signer par demi-journée, pour un organisme de formation ou un formateur indépendant, et une feuille de présences de la semaine pour les cours réguliers d’un centre de soutien scolaire, d’une école de musique ou de langues. Le PDF porte le numéro de déclaration d’activité, les cases matin et après-midi et le contreseing du formateur. L’Excel compte les heures${NBSP}: planning des cours, solde du forfait de chaque élève, heures réalisées par stagiaire pour le certificat de réalisation et le BPF.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu le référentiel Qualiopi de 2026 et les règles de la déclaration d’activité pour que les repères de la feuille soient à jour.',
    updatedAt: TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les organismes de formation, les formateurs indépendants, les centres de soutien scolaire et les écoles de musique. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF se signe, l’Excel compte les heures.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: TRAINING_CENTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: TRAINING_CENTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, heures et soldes calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre organisme et à vos financeurs. Il ne remplace pas le certificat de réalisation du ministère du Travail.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Deux feuilles à signer en PDF, trois feuilles de suivi en Excel',
    intro: `Le PDF tient sur deux pages A4${NBSP}: la feuille d’émargement par demi-journée, puis les présences de la semaine pour les cours réguliers. L’Excel ne reprend pas ces pages${NBSP}: il ajoute trois feuilles de suivi où les durées, les soldes et les heures par stagiaire se calculent dès que vous saisissez un cours.`,
    documents: [
      {
        title: 'Feuille d’émargement',
        format: `Page 1 du PDF${NBSP}; ses heures se reportent dans la feuille « Heures par stagiaire » de l’Excel`,
        items: [
          'Organisme de formation (nom, adresse), numéro de déclaration d’activité et préfet de région, avec la mention « Cet enregistrement ne vaut pas agrément de l’État »',
          'Intitulé de la formation, session ou groupe, formateur, dates, lieu (adresse, ou outil pour la distance), horaires du matin et de l’après-midi, modalité présentiel, à distance ou mixte',
          `Tableau sur 12 lignes${NBSP}: stagiaire (nom, prénom), une case matin et une case après-midi pour le jour 1 et le jour 2, avec la date de chaque jour, et les heures suivies`,
          `Dans chaque case, deux repères à cocher${NBSP}: A (absent) et R (retard ou départ avant l’heure)${NBSP}; en bas, le nom et la signature du formateur pour chaque demi-journée`,
          `Observations (retards, départs anticipés, connexion à distance, incidents) et repères${NBSP}: usage des financeurs, référentiel Qualiopi, certificat de réalisation du ministère du Travail`,
        ],
      },
      {
        title: 'Présences de la semaine',
        format: `Page 2 du PDF, pour les cours réguliers${NBSP}; ses heures se reportent dans la feuille « Heures par élève » de l’Excel`,
        items: [
          'Structure (nom, adresse, téléphone), semaine du, cours, niveau ou groupe, professeur, salle ou lieu',
          `Tableau sur 14 lignes${NBSP}: élève (nom, prénom), une case par jour du lundi au samedi, heures de la semaine, solde du forfait${NBSP}; initiales du professeur sous chaque colonne`,
          `Dans chaque case du jour${NBSP}: la durée du cours en haut (ex. 1${NBSP}h${NBSP}30), puis P (présent), A (absent prévenu) ou N (absent non prévenu)`,
          'Deux encadrés, cours annulés ou reportés (date, élève, motif, nouvelle date) et messages aux familles (progrès, devoirs, rendez-vous, documents à fournir)',
          `Visa du professeur (semaine vérifiée), date de report dans le suivi des heures, repères sur le crédit d’impôt de 50${NBSP}% des services à la personne et l’avance immédiate`,
        ],
      },
      {
        title: 'Planning de la semaine',
        format: 'Feuille 1 de l’Excel, sans équivalent dans le PDF',
        items: [
          `Semaine du, lieu de cours, responsable, puis 24 lignes de cours${NBSP}: jour (liste du lundi au dimanche), début et fin au format hh:mm, cours, professeur, salle, inscrits`,
          'Durée de chaque cours calculée à partir du début et de la fin, juste même pour un cours à cheval sur minuit, et total des heures de cours de la semaine',
          'Colonne « Alerte » en rouge, « Salle déjà occupée » ou « Prof déjà en cours », quand deux cours se chevauchent le même jour',
          'Heures par professeur (nombre de cours, heures de la semaine) et occupation des salles (heures occupées), 8 lignes chacune',
        ],
      },
      {
        title: 'Heures par élève',
        format: 'Feuille 2 de l’Excel',
        items: [
          `Deux réglages${NBSP}: le seuil d’alerte du solde (2${NBSP}h par défaut) et le décompte des absences non prévenues du forfait (Oui ou Non)`,
          `Journal des cours sur 60 lignes${NBSP}: date, élève, cours ou matière, professeur, durée en heures décimales (1,5 pour 1${NBSP}h${NBSP}30), statut Présent, Absent prévenu ou Absent non prévenu, remarque`,
          `Forfaits et soldes sur 15 lignes${NBSP}: élève, formule ou forfait, heures achetées, puis heures faites, absences, heures d’absence décomptées et solde calculés depuis le journal`,
          `Alerte par élève${NBSP}: « Forfait dépassé${NBSP}: à facturer » si le solde est négatif, « Moins de 2${NBSP}h${NBSP}: prévenir la famille » sous le seuil, avec la ligne en rouge`,
        ],
      },
      {
        title: 'Heures par stagiaire',
        format: 'Feuille 3 de l’Excel, en format paysage',
        items: [
          `Intitulé de la formation, formateur, dates, numéro de déclaration d’activité, financeur(s), et heures prévues par demi-journée réglables (3,5${NBSP}h par défaut)`,
          `Tableau sur 12 lignes${NBSP}: stagiaire, entreprise ou financeur, puis matin et après-midi des jours 1 à 5 avec la date de chaque jour${NBSP}; 0 = absent (case en rouge), vide = pas de cours prévu`,
          `Par stagiaire${NBSP}: heures réalisées, heures prévues, assiduité en % et demi-journées d’absence calculées${NBSP}; en bas, les présents par demi-journée`,
          `Bloc « Pour le certificat de réalisation et le BPF »${NBSP}: stagiaires de la session, heures réalisées et heures prévues, tous stagiaires`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir la feuille d’émargement en cinq étapes',
    intro: `Le PDF se remplit à la main et se signe sur place. Dans l’Excel, seules les cases blanches se saisissent${NBSP}: durées, soldes et totaux se calculent tout seuls.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Votre organisme et son numéro de déclaration',
        description: `Remplissez le nom et l’adresse de l’organisme, le numéro de déclaration d’activité et le préfet de région qui l’a enregistré${NBSP}; la mention « ne vaut pas agrément de l’État » est déjà imprimée. Enregistrez cette copie comme modèle.`,
      },
      {
        label: 'Étape 2',
        title: 'La session',
        description: `Intitulé de la formation, session ou groupe, formateur, dates, lieu (ou l’outil utilisé à distance), horaires du matin et de l’après-midi. Cochez la modalité${NBSP}: présentiel, à distance ou mixte.`,
      },
      {
        label: 'Étape 3',
        title: 'Les stagiaires et les dates',
        description: `Une ligne par stagiaire, nom et prénom, jusqu’à 12 par feuille. Écrivez la date de chaque jour en tête des colonnes${NBSP}; pour une session plus longue, imprimez une feuille par tranche de deux jours.`,
      },
      {
        label: 'Étape 4',
        title: 'Une signature par demi-journée',
        description:
          'Chaque stagiaire signe la case du matin et celle de l’après-midi, pas en fin de session. Cochez A s’il est absent, R s’il arrive en retard ou part avant l’heure, et notez l’heure dans les observations. Le formateur contresigne en bas de chaque colonne.',
      },
      {
        label: 'Étape 5',
        title: 'Le report des heures dans l’Excel',
        description: `Reportez les heures suivies de chaque stagiaire dans la feuille « Heures par stagiaire » (0 pour une absence, case vide sans cours)${NBSP}: heures réalisées, heures prévues, assiduité et totaux pour le certificat de réalisation et le BPF se calculent seuls. Pour les cours réguliers, le journal de la feuille « Heures par élève » joue le même rôle.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les repères que le modèle prévoit déjà',
    intro:
      'Quatre règles de la formation et des cours passent par la feuille d’émargement et le suivi des heures. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Dans les 3 mois, puis chaque année',
        title: 'Le numéro de déclaration d’activité et le BPF annuel',
        text: `Déclarez votre activité dans les 3 mois qui suivent la première convention ou le premier contrat signé${NBSP}; son numéro figure ensuite sur vos conventions, devis, factures et contrats. Chaque année, le bilan pédagogique et financier (BPF) la garde valable. La feuille d’émargement porte ce numéro, et l’Excel additionne les heures par stagiaire pour le BPF.`,
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er novembre 2026',
        title: `Qualiopi ne cite pas l’émargement${NBSP}: les financeurs, si`,
        text: `Le décret du 1er août 2026 fixe 7 critères et 33 indicateurs. Le texte ne cite pas l’émargement${NBSP}: c’est la preuve de réalisation que demandent les financeurs, et signer par demi-journée est leur usage, pas une obligation écrite. Pour les modules à distance, l’indicateur 19 demande de vérifier l’effectivité de leur suivi${NBSP}: la feuille prévoit la case « À distance » et les observations de connexion.`,
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Articles L6353-3 à L6353-6',
        title: `Un particulier paie lui-même${NBSP}: 10 jours pour se rétracter`,
        text: `Le contrat est signé avant l’inscription définitive et avant tout paiement. Le stagiaire a 10 jours pour se rétracter par lettre recommandée${NBSP}; rien n’est encaissé avant la fin de ce délai, puis 30${NBSP}% du prix au plus, le solde étant échelonné. La feuille d’émargement garde la trace des heures réellement suivies que vous facturez ensuite.`,
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Soutien scolaire à domicile',
        title: 'L’avance immédiate passe par un logiciel compatible',
        text: `Pour proposer aux familles l’avance immédiate de leur crédit d’impôt, votre structure doit être déclarée ou agréée services à la personne, à jour de ses obligations sociales et fiscales, sans infraction de travail dissimulé depuis 5 ans, et utiliser un logiciel compatible avec l’API Tiers de prestation de l’Urssaf. La feuille de présences ne fait pas l’avance, mais ses heures servent à facturer le mois et à préparer l’attestation fiscale de l’année.`,
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Feuille d’émargement formation${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de feuille d’émargement est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `L’émargement par demi-journée est-il obligatoire${NBSP}?`,
        answer: `Non, aucun texte ne l’écrit. Le référentiel Qualiopi en vigueur depuis le 1er novembre 2026 ne cite pas l’émargement${NBSP}: c’est la preuve de réalisation que demandent les financeurs, et la plupart attendent une signature le matin et une l’après-midi. Le certificat de réalisation, lui, suit le modèle publié par le ministère du Travail${NBSP}: la feuille sert à le remplir, elle ne le remplace pas.`,
      },
      {
        question: `La feuille convient-elle au soutien scolaire ou à une école de musique${NBSP}?`,
        answer: `Oui, c’est la page 2 du PDF${NBSP}: un élève par ligne, une case par cours du lundi au samedi, les heures de la semaine et le solde du forfait, avec les initiales du professeur. Dans l’Excel, le planning signale les doubles réservations de salle ou de prof, et le suivi par élève vous alerte quand il reste moins de 2${NBSP}heures. Une école qui donne des cours de loisirs à des particuliers n’a pas de déclaration d’activité à faire.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. « Planning de la semaine »${NBSP}: vous saisissez le jour, les heures de début et de fin, le prof et la salle${NBSP}; la durée, le total de la semaine, les heures par prof et les alertes de chevauchement se calculent. « Heures par élève »${NBSP}: vous tenez le journal des cours (durée, statut Présent, Absent prévenu ou Absent non prévenu) et le solde de chaque forfait se met à jour. « Heures par stagiaire »${NBSP}: vous notez les heures de chaque demi-journée, et la feuille donne les heures réalisées, l’assiduité et les totaux pour le certificat de réalisation et le BPF.`,
      },
      {
        question: `Et quand les sessions se multiplient${NBSP}?`,
        answer: `Une feuille papier suffit pour quelques sessions par mois. Au-delà, l’émargement en ligne d’Edusign démarre à 29${NBSP}€ par mois à l’année, Digiforma gère sessions, émargement numérique et BPF dès 49${NBSP}€ HT par mois, et Platformeasy facture le soutien scolaire avec l’avance immédiate dès 39${NBSP}€ HT par mois. Si votre organisation sort de leur cadre (formation et soutien scolaire dans la même structure, plusieurs financeurs), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les feuilles signées, le planning et les heures de chaque stagiaire se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour organismes de formation',
  },
}
