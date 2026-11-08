import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DRIVING_SCHOOL_CONTRACT_LAW_SOURCE,
  DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  DRIVING_SCHOOL_TRAINING_HOURS_SOURCE,
  DRIVING_SCHOOL_TRAINING_RECORD_SOURCE,
} from '~/core/constants/freeTemplates/drivingSchoolContract/pageShared'
import {
  DRIVING_SCHOOL_RULE_SOURCES,
  DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
  DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Contrat auto-école${NBSP}: modèle gratuit PDF et Excel (+ suivi)`,
    description: `Contrat auto-école${NBSP}: modèle gratuit en PDF et Excel, d’après le contrat type en vigueur depuis 2025. Évaluation de départ, prix, échéancier, fiche de suivi.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de contrat de formation à la conduite et de fiche de suivi de l’élève pour auto-école',
  },
  breadcrumbLabel: 'Contrat auto-école',
  shareImage: {
    titleLines: ['Contrat de formation', 'auto-école gratuit'],
    highlight: 'Contrat de formation',
    subtitle: 'Contrat et fiche de suivi de l’élève en PDF et Excel, évaluation de départ, prix, échéancier, heures',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de contrat auto-école gratuit${NBSP}: contrat de formation et fiche de suivi de l’élève en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrat auto-école',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ fiche de suivi de l’élève)`,
    reassurances: [
      'Contrat + fiche de suivi',
      'Excel avec heures et échéancier calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un contrat de formation à la conduite et une fiche de suivi de l’élève prêts à remplir, pour une auto-école de quartier ou un enseignant qui ouvre la sienne. Le contrat suit les rubriques du contrat type du permis B${NBSP}: évaluation préalable, nombre d’heures prévu, prix TTC, paiement, annulation et résiliation. La fiche de suivi garde la trace des leçons, des heures, des compétences travaillées et des examens.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai déjà développé un logiciel de gestion d’auto-école, et j’ai relu le code de la route et le contrat type pour que les mentions soient à jour.',
    updatedAt: DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les auto-écoles et les enseignants de la conduite. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, heures et échéancier calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre école. Il ne remplace ni le contrat type publié au Journal officiel ni le livret d’apprentissage numérique.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un contrat de formation et une fiche de suivi, en PDF et en Excel',
    intro: `Le PDF tient sur deux pages A4${NBSP}: le contrat à signer en deux exemplaires, puis la fiche de suivi à remplir leçon après leçon. L’Excel les reprend sur trois feuilles${NBSP}: le montant du contrat, l’échéancier, les heures faites et restantes et les examens se calculent au fil de la saisie.`,
    documents: [
      {
        title: 'Contrat de formation (permis B)',
        format: 'Page 1 du PDF, feuille « Contrat et échéancier » de l’Excel',
        items: [
          `École de conduite${NBSP}: raison sociale, adresse, RCS ou RM, n° de TVA, n° d’agrément et préfecture${NBSP}; n° de contrat, date de signature, durée en mois et date de fin (calculée dans l’Excel)`,
          `Élève, représentant légal s’il est mineur, règlement intérieur annexé ou non, et la formation choisie${NBSP}: boîte manuelle ou automatique, apprentissage anticipé, conduite supervisée, véhicule adapté`,
          `Évaluation préalable${NBSP}: date, enseignant et n° de son autorisation d’enseigner, moyen utilisé, nombre prévisionnel d’heures de conduite, formation théorique, fiche d’évaluation annexée`,
          `Tableau des prix TTC, non révisables pendant le contrat${NBSP}: évaluation, frais de dossier et de mandat ANTS, livret, redevance du code à 30${NBSP}€, leçons, forfait, bilan de compétences, accompagnement à l’examen, frais de résiliation`,
          `Paiement (arrhes, comptant, à l’unité, échelonné sans frais, permis à 1${NBSP}€ par jour), annulation des leçons sous 48${NBSP}heures ouvrées, résiliation par l’élève ou par l’école, dossier restitué gratuitement`,
          `Assurance, garantie financière, label, médiateur de la consommation, signatures de l’élève, du représentant légal et de l’école${NBSP}; l’Excel ajoute l’échéancier de paiement, le reste à payer et le contrôle du plafond de l’accompagnement`,
        ],
      },
      {
        title: 'Fiche de suivi de l’élève',
        format: 'Page 2 du PDF, feuilles « Suivi des leçons » et « Examens » de l’Excel',
        items: [
          'N° de dossier ou NEPH, date d’inscription, heures prévues au contrat, boîte de vitesses, enseignant référent, formule (classique, anticipée, supervisée)',
          `Leçons de conduite${NBSP}: date, horaire, durée, type (route, simulateur, piste, collective), enseignant, compétences travaillées, observations, visa de l’élève (20 lignes sur le PDF, 30 dans l’Excel)`,
          `Totaux${NBSP}: heures faites, prévues et restantes, dont route et simulateur, avec le repère du minimum de 20${NBSP}heures (13 en boîte automatique) calculé dans l’Excel`,
          'Les quatre compétences du livret d’apprentissage, avec les leçons où chacune a été travaillée et ce qu’il reste à revoir (heures par compétence dans l’Excel)',
          `Examens et bilans${NBSP}: épreuve théorique (code), bilans de compétences, attestation de fin de formation, épreuve pratique, accompagnement facturé`,
          'Heures complémentaires acceptées par écrit, rappel de la conservation de la fiche pendant trois ans et du livret d’apprentissage numérique',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le contrat et la fiche de suivi en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Le montant du contrat, l’échéancier, les heures restantes et le total par compétence se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Votre école, une fois pour toutes',
        description:
          'Remplissez l’en-tête (raison sociale, adresse, RCS ou RM, n° d’agrément), votre assurance, votre médiateur et vos prix TTC, puis enregistrez le fichier comme modèle. Chaque nouvel élève part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'L’évaluation préalable, avant de signer',
        description: `Faites l’évaluation de départ, puis notez sa date, l’enseignant et le n° de son autorisation d’enseigner, le moyen utilisé et le nombre d’heures de conduite prévu. Joignez la fiche d’évaluation${NBSP}: le contrat ne se signe qu’après.`,
      },
      {
        label: 'Étape 3',
        title: 'Les prix, le paiement et la signature',
        description: `Indiquez le nombre de leçons ou d’heures de chaque ligne${NBSP}: l’Excel calcule le montant du contrat. Pour un paiement échelonné, saisissez les arrhes, le nombre d’échéances et la date de la première${NBSP}: l’échéancier se remplit. Deux exemplaires signés, un pour l’élève.`,
      },
      {
        label: 'Étape 4',
        title: 'La fiche de suivi, leçon après leçon',
        description: `Après chaque leçon, notez l’horaire, le type de leçon, l’enseignant et la compétence travaillée${NBSP}: les heures faites, les heures restantes et le total par compétence suivent. Sur la feuille « Examens », notez les dates, les résultats et l’accompagnement facturé.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Six règles de l’enseignement de la conduite passent par le contrat et la fiche de suivi. Le modèle leur réserve une case, une ligne ou une clause.',
    facts: [
      {
        contextLabel: 'Code de la route, art. L213-2',
        title: 'Un contrat écrit, après une évaluation préalable',
        text: 'L’enseignement payant de la conduite passe par un contrat écrit, signé à l’école ou à distance, et seulement après une évaluation préalable de l’élève. La présentation à l’examen ne se facture pas, la restitution et le transfert du dossier sont gratuits. Le modèle prévoit l’encadré de l’évaluation et la clause du dossier.',
        sourceName: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2025',
        title: 'Le contrat type, dans sa version de 2024',
        text: `Les nouveaux contrats suivent le modèle fixé par l’arrêté du 11 octobre 2024${NBSP}: durée en mois, heures fixées par l’évaluation, prix TTC non révisables, paiement, assurance et médiateur${NBSP}; l’accompagnement à l’examen ne dépasse pas le prix d’une heure de leçon. La page 1 suit ces rubriques, le texte officiel fait foi.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: `20${NBSP}heures au minimum`,
        title: 'Le volume de formation pratique',
        text: `Pour un premier permis B, la formation pratique dure au moins 20${NBSP}heures, dont 15 sur route au minimum (10 avec un simulateur)${NBSP}; 13${NBSP}heures en boîte automatique. Le contrat porte le nombre d’heures prévu par l’évaluation, et l’Excel compare les heures faites à ce minimum.`,
        sourceName: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.url,
      },
      {
        contextLabel: `48${NBSP}heures ouvrées`,
        title: 'Les leçons décommandées trop tard',
        text: `Une leçon que l’élève ne décommande pas au moins 48${NBSP}heures ouvrées à l’avance n’est pas remboursée, sauf force majeure ou motif légitime${NBSP}; l’école ne peut pas non plus annuler dans ce délai (mêmes exceptions) et reporte ou rembourse la leçon payée. La clause figure en toutes lettres sur le contrat du modèle.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: `Effet au bout de 15${NBSP}jours`,
        title: 'La résiliation par l’élève',
        text: `L’élève résilie à tout moment (après 14${NBSP}jours si le contrat a été signé à distance), par lettre recommandée ou courriel${NBSP}: effet 15${NBSP}jours plus tard, immédiat pour un motif légitime. Il paie les prestations faites et récupère son dossier gratuitement${NBSP}; des frais de résiliation ne sont possibles que sans motif légitime, avant la formation pratique.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Conservée trois ans',
        title: 'La fiche de suivi de formation',
        text: `Avant la formation, l’école établit au nom de l’élève une fiche de suivi de formation, gardée trois ans${NBSP}; une copie suit l’élève s’il change d’école. Le texte n’en fixe pas le contenu${NBSP}: la page 2 du modèle en propose un, à côté du livret d’apprentissage numérique.`,
        sourceName: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Contrat auto-école${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de contrat auto-école est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Ce modèle remplace-t-il le contrat type officiel${NBSP}?`,
        answer: `Non. Depuis le 1er juin 2020, le contrat d’une auto-école doit être conforme au contrat type du permis B, et sa version de l’arrêté du 11 octobre 2024 s’applique aux contrats proposés depuis le 1er janvier 2025. Le modèle en reprend les rubriques et les clauses clés sur une page, avec l’échéancier et la fiche de suivi. Relisez-le à côté du texte publié au Journal officiel, qui fait foi${NBSP}: ce modèle n’est pas un conseil juridique.`,
      },
      {
        question: `L’évaluation de départ est-elle obligatoire${NBSP}?`,
        answer: `Oui. Le contrat ne peut être signé qu’après une évaluation préalable de l’élève (article L213-2 du code de la route). Le contrat note sa date, l’enseignant qui en a la responsabilité et le n° de son autorisation d’enseigner, le moyen utilisé (véhicule, simulateur…) et le nombre prévisionnel d’heures de conduite${NBSP}; la fiche d’évaluation y est annexée. Elle figure en tête du tableau des prix${NBSP}: l’école en fixe le tarif.`,
      },
      {
        question: `Combien d’heures de conduite prévoir dans le contrat${NBSP}?`,
        answer: `Le nombre que donne l’évaluation de départ. Le minimum légal reste de 20${NBSP}heures de formation pratique pour un premier permis B, dont 15 sur route au minimum (10 avec un simulateur), et de 13${NBSP}heures en boîte automatique. Si les heures prévues ne suffisent pas, l’école peut proposer un complément${NBSP}: leur nombre et leur prix font l’objet d’un accord écrit, que la fiche de suivi garde en mémoire.`,
      },
      {
        question: `Que se passe-t-il si l’élève annule une leçon au dernier moment${NBSP}?`,
        answer: `Une leçon que l’élève ne décommande pas au moins 48${NBSP}heures ouvrées à l’avance n’est pas remboursée, ou reste due si elle n’était pas payée, sauf force majeure ou motif légitime. Dans l’autre sens, l’école ne peut pas annuler moins de 48${NBSP}heures ouvrées avant, sauf force majeure ou motif légitime, et doit reporter ou rembourser la leçon payée. Le contrat du modèle l’écrit en toutes lettres.`,
      },
      {
        question: `Comment un élève résilie-t-il son contrat d’auto-école${NBSP}?`,
        answer: `Par lettre recommandée ou par courriel à l’école, à tout moment si le contrat a été signé à l’école, après 14${NBSP}jours s’il a été signé à distance. La résiliation prend effet 15${NBSP}jours plus tard, ou tout de suite s’il a un motif légitime. Il paie les prestations déjà faites, au prorata pour un forfait, et son dossier lui est rendu gratuitement. Des frais de résiliation ne sont possibles que sans motif légitime et avant le début de la formation pratique.`,
      },
      {
        question: `La fiche de suivi remplace-t-elle le livret d’apprentissage${NBSP}?`,
        answer: `Non. Le livret d’apprentissage numérique est obligatoire depuis le 1er janvier 2024${NBSP}: il fixe les objectifs de formation et enregistre les heures de conduite et la formation dispensée. La fiche de suivi est votre document interne${NBSP}: l’arrêté du 22 décembre 2009 vous demande d’en établir une au nom de chaque élève et de la garder trois ans. Le modèle y reprend les quatre compétences du livret pour noter ce qui a été travaillé à chaque leçon.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Contrat et échéancier », vous saisissez le prix et le nombre de chaque prestation${NBSP}: le montant du contrat se calcule, puis l’échéancier à partir des arrhes, du nombre d’échéances et de la date de la première. Sur « Suivi des leçons », l’horaire de début et de fin donne la durée de chaque leçon, les heures faites et restantes, le total par compétence et le repère des 20${NBSP}heures. « Examens » garde les dates et les résultats, et signale un accompagnement facturé plus cher qu’une heure de leçon.`,
      },
      {
        question: `Et quand les élèves se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques élèves à la fois. Au-delà, les logiciels d’auto-école tiennent le planning, les heures et les paiements de chaque élève, et plusieurs gèrent aussi le livret numérique${NBSP}: Drivea est gratuit, Ma Gestion Zen coûte 39${NBSP}€ HT par mois (tarifs relevés fin septembre 2026). Si votre organisation sort de leur cadre (plusieurs agences, réservation et paiement sur votre site), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les contrats, les heures de chaque élève et les paiements se recopient d’un fichier à l’autre, et que le planning des moniteurs vit sur un tableau blanc, un outil qui les relie vous rend des heures. Décrivez-moi votre auto-école${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels d’auto-école',
  },
}
