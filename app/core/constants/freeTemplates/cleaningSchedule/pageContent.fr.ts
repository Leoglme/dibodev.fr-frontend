import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/cleaningSchedule/pageShared'
import {
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const CLEANING_SCHEDULE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Planning de passages nettoyage${NBSP}: modèle Excel gratuit`,
    description: `Planning de passages nettoyage${NBSP}: modèle gratuit en Excel et PDF, avec fiche de contrôle qualité. Heures et conformité calculées. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de planning des passages et de fiche de contrôle qualité pour entreprise de nettoyage',
  },
  breadcrumbLabel: 'Planning de nettoyage',
  shareImage: {
    titleLines: ['Planning de passages', 'nettoyage gratuit'],
    highlight: 'Planning de passages',
    subtitle: 'Planning des passages et fiche de contrôle qualité en Excel et PDF, heures et conformité calculées',
    badge: 'Gratuit, sans inscription',
    icon: 'sparkles',
    alt: `Modèle de planning de nettoyage gratuit${NBSP}: planning des passages et fiche de contrôle qualité en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning de passages nettoyage',
    titleAfter: `${NBSP}: modèle Excel gratuit (+ fiche de contrôle qualité)`,
    reassurances: [
      'Planning + fiche de contrôle qualité',
      'Excel avec heures et conformité calculées',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description:
      'Un planning des passages de la semaine et une fiche de contrôle qualité prêts à remplir, pour une entreprise de propreté, un responsable d’agents ou un auto-entrepreneur du ménage. Le planning donne, site par site, l’agent et ses horaires de chaque jour, puis le total d’heures de chaque agent face à son contrat. La fiche note un site zone par zone, avec les photos des défauts et la signature du client.',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu la convention collective de la propreté et les règles du pointage pour que les repères du modèle soient à jour.',
    updatedAt: CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les entreprises de nettoyage, les responsables d’équipe et les auto-entrepreneurs du ménage. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule les heures et le taux de conformité.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, heures et conformité calculées',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise et à vos contrats. Il ne remplace pas la lecture de votre convention collective.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un planning des passages et une fiche de contrôle qualité, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec les heures de la semaine, les totaux par agent et par site, puis le taux de conformité calculés dès que vous saisissez un horaire ou une note.',
    documents: [
      {
        title: 'Planning des passages',
        format: 'Page 1 du PDF, feuille « Planning des passages » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone), semaine du, secteur ou équipe, responsable (le PDF ajoute la date de mise à jour)',
          `Tableau des passages${NBSP}: site client et adresse, agent, heure de début et de fin pour chaque jour du lundi au dimanche, heures de la semaine (12 lignes dans le PDF, 16 dans l’Excel), total des heures planifiées`,
          `Total d’heures par agent${NBSP}: heures planifiées face aux heures au contrat dans le PDF${NBSP}; dans l’Excel, somme automatique par agent et repère « Moins de 16${NBSP}h${NBSP}: vérifier le contrat de l’agent »`,
          'L’Excel ajoute un total d’heures par site client et compte juste un passage de nuit (22:00 → 06:00)',
          `Consignes par site${NBSP}: clés et badges, code d’alarme, accès, horaires d’ouverture, produits et matériel sur place, contact du client`,
          'Visa du responsable (planning validé), date de remise aux agents, rappel de la convention de la propreté sur le temps partiel',
        ],
      },
      {
        title: 'Fiche de contrôle qualité',
        format: 'Page 2 du PDF, feuille « Contrôle qualité » de l’Excel',
        items: [
          'Site client et adresse, date et heure, contrôleur, agent(s) du site, contact client et fonction, contrat et fréquence de passage, type de contrôle (programmé, inopiné ou avec le client)',
          `Barème de 1 à 4 (très insuffisant, insuffisant, satisfaisant, très satisfaisant), zone conforme à partir de 3${NBSP}; le seuil se modifie dans l’Excel`,
          '9 zones pré-remplies avec leurs points contrôlés (accueil, bureaux, salles de réunion, sanitaires, cuisine, circulations, ascenseur, vitres et miroirs, poubelles et tri) et 3 lignes libres',
          `Par zone${NBSP}: note, conforme oui ou non (calculé dans l’Excel, en vert ou en rouge), n° de la photo du défaut, action corrective`,
          `Résultat${NBSP}: zones contrôlées, zones conformes, taux de conformité (l’Excel ajoute la note moyenne sur 4)`,
          'Actions correctives et délai, observations du client, signatures du contrôleur et du client, rappel de prévoir la fiche et sa fréquence dans le contrat',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le planning et la fiche de contrôle en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les heures de la semaine, les totaux par agent et par site, la conformité et le taux se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Votre entreprise et la semaine',
        description:
          'Remplissez l’en-tête (nom, adresse, téléphone), la semaine du, le secteur ou l’équipe et le responsable, puis enregistrez le fichier comme modèle. Chaque semaine part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Un agent par ligne, ses horaires de chaque jour',
        description: `Pour chaque site, écrivez l’agent, puis l’heure de début et l’heure de fin de chaque jour (au format hh:mm dans l’Excel). Deux passages le même jour sur le même site${NBSP}: une ligne de plus. L’Excel compte les heures de la semaine, passage de nuit compris.`,
      },
      {
        label: 'Étape 3',
        title: 'Le total d’heures de chaque agent face à son contrat',
        description: `Dans le PDF, reportez les heures planifiées de chaque agent à côté des heures de son contrat. Dans l’Excel, écrivez son nom comme dans le planning${NBSP}: la somme se fait seule et un total sous 16${NBSP}h est signalé.`,
      },
      {
        label: 'Étape 4',
        title: 'Consignes, visa et remise aux agents',
        description:
          'Notez pour chaque site les clés, le code d’alarme, les accès et les produits sur place. Le responsable vise le planning validé, et vous datez sa remise aux agents.',
      },
      {
        label: 'Étape 5',
        title: 'Le contrôle qualité, zone par zone',
        description:
          'Sur place, notez chaque zone de 1 à 4, photographiez chaque défaut et reportez son numéro dans la colonne « Photo n° », puis écrivez l’action corrective. Dans l’Excel, « Conforme » et le taux suivent.',
      },
      {
        label: 'Étape 6',
        title: 'Résultat, actions et signature du client',
        description:
          'Comptez les zones contrôlées et conformes, calculez le taux, fixez un délai pour les actions correctives et recueillez les observations du client. La fiche se signe à deux et une copie lui est remise.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les repères que le modèle prévoit déjà',
    intro:
      'Trois règles de l’entreprise de propreté passent par le planning et le compte des heures. Le modèle leur réserve une colonne ou une mention.',
    facts: [
      {
        contextLabel: 'Convention de la propreté, art. 6.2.4.1',
        title: `Un temps partiel de 16${NBSP}heures par semaine au minimum`,
        text: `Sauf demande écrite du salarié, un contrat à temps partiel compte au moins 16${NBSP}heures par semaine, avec au plus 2 vacations par jour sous 24${NBSP}heures hebdomadaires, et 3 au-delà. Le modèle met les heures planifiées de chaque agent face à son contrat, et l’Excel signale un total sous 16${NBSP}h.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Règles de la CNIL',
        title: 'Le pointage sur site, annoncé avant d’être lancé',
        text: `Badge NFC, QR code ou géolocalisation du téléphone${NBSP}: un dispositif de contrôle des horaires est porté à la connaissance des salariés avant sa mise en place, et le CSE est consulté à partir de 50 salariés. Le planning remis aux agents n’en est pas un${NBSP}; le jour où vous passez au pointage, prévenez-les d’abord.`,
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'Dès 400 heures sur 12 mois',
        title: 'Un plan de prévention écrit chez le client',
        text: `Votre entreprise et le client analysent ensemble les risques après une inspection commune des lieux. Le plan de prévention est écrit dès 400${NBSP}heures de travail sur 12 mois, ou pour les travaux dangereux listés par l’arrêté du 19 mars 1993. Le total d’heures par site de l’Excel vous aide à voir venir ce seuil.`,
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de planning de nettoyage${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de planning de nettoyage est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Combien d’heures par semaine au minimum pour un agent à temps partiel${NBSP}?`,
        answer: `16${NBSP}heures, sauf demande écrite du salarié (convention de la propreté, art. 6.2.4.1), avec au plus 2 vacations par jour sous 24${NBSP}heures hebdomadaires et 3 au-delà. Quand la durée du travail est calculée en moyenne sur le semestre civil, un planning prévisionnel est remis chaque mois et tout changement est annoncé 3 jours ouvrés à l’avance. Le tableau « Total d’heures par agent » sert à cette vérification.`,
      },
      {
        question: `La fiche de contrôle qualité est-elle obligatoire${NBSP}?`,
        answer: `Je n’ai trouvé aucun texte qui impose ce rapport ou une attestation de passage${NBSP}: c’est un usage du métier, que les clients attendent et qu’il vaut mieux prévoir, avec sa fréquence, dans votre contrat. Le modèle en donne la trame${NBSP}: une note par zone, une photo de chaque défaut, la fiche signée avec le client et remise en copie.`,
      },
      {
        question: `Le planning peut-il servir de pointage${NBSP}?`,
        answer:
          'Non. Il donne les horaires prévus, pas les heures réellement faites. Si vous passez au pointage (badge NFC, QR code ou géolocalisation du téléphone), le dispositif est porté à la connaissance des salariés avant sa mise en place, et le CSE est consulté à partir de 50 salariés (CNIL).',
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Dans la feuille « Planning des passages », vous saisissez l’heure de début et de fin de chaque jour au format hh:mm${NBSP}: les heures de la semaine de chaque ligne, le total planifié, le total par agent (avec le repère 16${NBSP}h) et le total par site se calculent tout seuls, passage de nuit compris. Dans la feuille « Contrôle qualité », vous notez chaque zone de 1 à 4${NBSP}: la colonne « Conforme », le taux de conformité et la note moyenne suivent, à partir d’une note minimale de 3 que vous pouvez changer. Chaque feuille s’imprime sur une page A4.`,
      },
      {
        question: `Et quand les sites se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour une équipe et quelques sites. Au-delà, les logiciels de propreté (PROPRET, PROGESTI, CleanPlus) ajoutent le pointage, les photos et le portail client à partir de 29${NBSP}€ HT par mois, souvent plus un prix par agent. Si votre organisation sort de leur cadre (vacations, reprises de marché, plans de prévention), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand le planning se recopie chaque semaine, que les heures repartent vers la paie à la main et que les fiches de contrôle dorment dans un classeur, un outil qui les enchaîne vous rend des heures. Décrivez-moi vos sites et vos équipes${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de propreté',
  },
}
