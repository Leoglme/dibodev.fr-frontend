import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  OVERTIME_RATE_SOURCE,
  TIME_CLOCK_PRIVACY_SOURCE,
  TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
  WORKING_HOURS_DISPUTE_SOURCE,
  WORKING_TIME_DAILY_RECORD_SOURCE,
  WORKING_TIME_RECORDS_RETENTION_SOURCE,
} from '~/core/constants/freeTemplates/timeClockSheet/pageShared'
import { NBSP } from '~/core/constants/typography'

export const TIME_CLOCK_SHEET_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Fiche de pointage${NBSP}: modèle gratuit Excel, Word et PDF`,
    description: `Fiche de pointage gratuite en PDF, Word et Excel${NBSP}: arrivée, pause, départ, heures du jour et de la semaine calculées, heures sup, récapitulatif du mois.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de fiche de pointage hebdomadaire des heures de travail et de récapitulatif mensuel',
  },
  breadcrumbLabel: 'Fiche de pointage',
  shareImage: {
    titleLines: ['Fiche de pointage', 'des heures gratuite'],
    highlight: 'Fiche de pointage',
    subtitle: 'Pointage de la semaine et récapitulatif du mois, en PDF, Word et Excel, heures et heures sup calculées',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de fiche de pointage gratuit${NBSP}: pointage hebdomadaire des heures et récapitulatif mensuel en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Fiche de pointage',
    titleAfter: `${NBSP}: modèle gratuit Excel, Word et PDF (semaine + récapitulatif du mois)`,
    reassurances: [
      'Pointage de la semaine + récap du mois',
      'Excel qui calcule les heures sup',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une fiche de pointage pour noter, jour après jour, l’heure d’arrivée, la pause et l’heure de départ d’un salarié, puis compter ses heures de la semaine et celles qui dépassent 35${NBSP}heures. Le récapitulatif du mois reprend les semaines pour la paie. Une feuille de présence dit qui était là${NBSP}; la fiche de pointage dit combien d’heures chacun a travaillé, et c’est elle qui sert à compter les heures supplémentaires.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro, chez l’éditeur Kodeva, un logiciel de suivi des heures par chantier (Gest-Time), toujours utilisé par des PME. Pour ce modèle, j’ai relu les articles du Code du travail sur le décompte des heures.',
    updatedAt: TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les TPE et PME qui comptent encore les heures sur papier ou dans un tableur${NBSP}: commerce, restauration, nettoyage, bâtiment, associations. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime et se remplit au stylo, l’Excel calcule les heures, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, heures calculées',
      },
      {
        label: 'Télécharger la version Word',
        href: TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise et à votre convention collective. Il ne remplace pas l’avis d’un juriste ni celui de votre gestionnaire de paie.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une fiche de pointage par semaine, un récapitulatif par mois',
    intro: `Le PDF tient sur deux pages A4${NBSP}: la fiche de la semaine, à remplir chaque jour, et le récapitulatif du mois, à remplir à partir des fiches. L’Excel reprend les deux et ajoute une feuille de réglages pour la durée prévue au contrat et les taux de majoration.`,
    documents: [
      {
        title: 'Fiche de pointage de la semaine',
        format: `Page 1 du PDF, feuille «${NBSP}Fiche de la semaine${NBSP}» de l’Excel`,
        items: [
          'En-tête de l’entreprise (nom, adresse, SIRET), nom du salarié, poste ou service, semaine du lundi au dimanche, durée prévue au contrat',
          `Sept lignes, du lundi au dimanche${NBSP}: date, arrivée, début de pause, fin de pause, départ, durée de la pause, heures du jour, observations (absence, retard, déplacement)`,
          `Dans l’Excel, une colonne «${NBSP}Contrôle${NBSP}» par jour${NBSP}: heure manquante, pause en dehors des horaires, plus de 10${NBSP}h dans la journée, pause de moins de 20${NBSP}minutes dès 6${NBSP}h de travail, poste qui passe minuit`,
          `Total de la semaine, heures au-delà de la durée prévue, heures au-delà de 35${NBSP}h réparties entre les 8 premières et les suivantes, alerte au-delà de 48${NBSP}h`,
          `Absences de la semaine en heures${NBSP}: congés payés, maladie ou accident du travail, repos compensateur ou RTT, jour férié chômé, autre`,
          `Signature du salarié («${NBSP}je certifie l’exactitude des heures notées${NBSP}») et du responsable, rappel des articles du Code du travail sur le décompte et les durées maximales`,
        ],
      },
      {
        title: 'Récapitulatif du mois',
        format: `Page 2 du PDF, feuille «${NBSP}Récapitulatif du mois${NBSP}» de l’Excel`,
        items: [
          'Nom du salarié, mois et année, durée prévue, temps plein ou temps partiel',
          `Six lignes de semaine (un mois en touche jusqu’à six)${NBSP}: heures travaillées, heures normales, heures supplémentaires au premier et au second taux, heures au-delà de la durée prévue, absences avec leur code`,
          `Total du mois et, dans l’Excel, une synthèse pour la paie${NBSP}: heures normales, heures sup par taux, absences, moyenne par semaine`,
          `Vérifications du mois à cocher sur le PDF${NBSP}: aucune journée au-delà de 10${NBSP}h, aucune semaine au-delà de 48${NBSP}h, 44${NBSP}h au plus en moyenne sur 12 semaines, pauses, fiches signées, heures transmises à la paie`,
          `Codes d’absence${NBSP}: CP, M, AT, RC, RTT, F, CSS, FO, A, choisis dans une liste dans l’Excel`,
          'Signatures du salarié et du responsable, date à laquelle le récapitulatif est arrêté',
        ],
      },
      {
        title: 'Réglages',
        format: `Feuille «${NBSP}Réglages${NBSP}» de l’Excel`,
        items: [
          `Durée hebdomadaire prévue au contrat en case jaune${NBSP}: 35${NBSP}h par défaut, la durée du contrat pour un temps partiel`,
          `Taux de majoration en cases jaunes${NBSP}: 25${NBSP}% et 50${NBSP}% par défaut, à changer si un accord collectif en prévoit d’autres`,
          `Durée minimale de la pause (20${NBSP}minutes par défaut) et repères fixes du Code du travail${NBSP}: 35${NBSP}h, 8 heures au premier taux, 10${NBSP}h par jour, 48${NBSP}h par semaine`,
          'Pour chaque valeur, l’article du Code du travail d’où elle vient',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir la fiche de pointage en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent. La durée de la pause, les heures du jour, le total de la semaine et les heures supplémentaires se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Les réglages, une fois par salarié',
        description: `Dans la feuille «${NBSP}Réglages${NBSP}», saisissez la durée prévue au contrat (35${NBSP}h pour un temps plein) et, si un accord collectif s’applique, ses taux de majoration. Enregistrez ensuite le fichier sous le nom du salarié${NBSP}: chaque semaine part de cette copie.`,
      },
      {
        label: 'Étape 2',
        title: 'Chaque jour, quatre heures',
        description: `L’arrivée, le début et la fin de la pause, le départ, au format 08:30. Notez-les le jour même, pas à l’avance. La colonne «${NBSP}Contrôle${NBSP}» signale une heure oubliée, une pause trop courte ou une journée de plus de 10${NBSP}heures.`,
      },
      {
        label: 'Étape 3',
        title: 'En fin de semaine, le total et les signatures',
        description: `Le total de la semaine et les heures au-delà de 35${NBSP}h se lisent sous le tableau. Notez les absences en heures, imprimez la fiche, faites-la signer par le salarié puis par le responsable, et gardez-la.`,
      },
      {
        label: 'Étape 4',
        title: 'En fin de mois, le récapitulatif',
        description: `Reportez le total de chaque fiche sur sa ligne du «${NBSP}Récapitulatif du mois${NBSP}»${NBSP}: heures normales et heures supplémentaires par taux se calculent semaine par semaine. Ajoutez les absences avec leur code, puis transmettez la synthèse à la paie.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les règles que le modèle suit déjà',
    intro: `Six règles du Code du travail et de la CNIL passent par le pointage des heures. Le modèle leur réserve une colonne, un calcul ou une mention${NBSP}; il ne remplace pas l’avis d’un juriste en cas de litige.`,
    facts: [
      {
        contextLabel: 'Code du travail, art. D3171-8',
        title: 'Un décompte chaque jour, un récapitulatif chaque semaine',
        text: `Quand les salariés d’un atelier, d’un service ou d’une équipe ne suivent pas tous le même horaire collectif affiché, la durée du travail de chacun se décompte chaque jour, en notant les heures de début et de fin de chaque période ou le nombre d’heures faites, et se récapitule chaque semaine. C’est exactement la page 1 du modèle${NBSP}: une ligne par jour, un total par semaine.`,
        sourceName: WORKING_TIME_DAILY_RECORD_SOURCE.name,
        sourceUrl: WORKING_TIME_DAILY_RECORD_SOURCE.url,
      },
      {
        contextLabel: 'Pendant un an',
        title: 'Les fiches restent à la disposition de l’inspection du travail',
        text: 'L’employeur tient à la disposition de l’inspection du travail, pendant un an, les documents qui permettent de compter les heures faites par chaque salarié, horaires individualisés compris. Fiches de la semaine et récapitulatifs du mois signés, rangés par mois et par salarié, en font partie.',
        sourceName: WORKING_TIME_RECORDS_RETENTION_SOURCE.name,
        sourceUrl: WORKING_TIME_RECORDS_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'À défaut d’accord',
        title: `Au-delà de 35${NBSP}h, 25${NBSP}% puis 50${NBSP}%`,
        text: `Toute heure faite au-delà de 35${NBSP}heures dans la semaine est une heure supplémentaire, et elle se compte semaine par semaine. Sans accord collectif, les 8 premières (de la 36e à la 43e heure) sont majorées de 25${NBSP}%, les suivantes de 50${NBSP}%. Un accord d’entreprise ou de branche peut prévoir d’autres taux, jamais sous 10${NBSP}% (art. L3121-33)${NBSP}: le modèle les prend dans ses réglages.`,
        sourceName: OVERTIME_RATE_SOURCE.name,
        sourceUrl: OVERTIME_RATE_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, art. L3121-16 et L3121-18',
        title: `Une pause de 20${NBSP}minutes dès 6${NBSP}heures, 10${NBSP}heures par jour au plus`,
        text: `Dès que le travail de la journée atteint 6${NBSP}heures, le salarié a droit à une pause d’au moins 20${NBSP}minutes consécutives. La journée de travail effectif ne dépasse pas 10${NBSP}heures, sauf dérogation ou urgence, et la semaine pas 48${NBSP}heures (art. L3121-20). L’Excel contrôle la pause et la journée, et alerte au-delà de 48${NBSP}h.`,
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'En cas de litige',
        title: 'L’employeur doit pouvoir montrer les heures réellement faites',
        text: `Si un salarié conteste ses heures, l’employeur fournit au juge les éléments qui justifient les horaires réellement faits, et le salarié apporte les siens${NBSP}; le juge décide au vu des deux. Un système d’enregistrement automatique doit être fiable et infalsifiable. Une fiche remplie le jour même et signée chaque semaine par les deux vaut mieux qu’un tableau refait de mémoire en fin de mois.`,
        sourceName: WORKING_HOURS_DISPUTE_SOURCE.name,
        sourceUrl: WORKING_HOURS_DISPUTE_SOURCE.url,
      },
      {
        contextLabel: 'CNIL',
        title: 'Une badgeuse, oui, la biométrie, non',
        text: `Un dispositif de contrôle des horaires est permis s’il reste proportionné. Pour la CNIL, une badgeuse biométrique (empreinte, reconnaissance faciale) ou qui photographie le salarié à chaque pointage est excessive. Chaque salarié est informé avant, et les représentants du personnel sont informés ou consultés${NBSP}; les données servant au suivi du temps de travail se gardent au plus 5${NBSP}ans en archive.`,
        sourceName: TIME_CLOCK_PRIVACY_SOURCE.name,
        sourceUrl: TIME_CLOCK_PRIVACY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Fiche de pointage${NBSP}: vos questions`,
    questions: [
      {
        question: `La fiche de pointage est-elle vraiment gratuite${NBSP}?`,
        answer: `Oui. Les trois fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Une fiche de pointage est-elle obligatoire${NBSP}?`,
        answer: `Le Code du travail n’impose pas de formulaire, mais il impose un décompte${NBSP}: dès que vos salariés ne suivent pas tous le même horaire collectif affiché, la durée du travail de chacun se note chaque jour et se récapitule chaque semaine (art. D3171-8). Même avec un horaire commun, une trace des heures réellement faites vous protège${NBSP}: en cas de litige, c’est à l’employeur d’apporter les éléments qui les justifient (art. L3171-4). Papier, Excel ou badgeuse, la forme est libre.`,
      },
      {
        question: `Fiche de pointage ou feuille de présence${NBSP}: quelle différence${NBSP}?`,
        answer: `La feuille de présence dit qui était là, un jour ou à une réunion. La fiche de pointage note à quelle heure chacun est arrivé, a pris sa pause et est parti, pour compter ses heures de travail. C’est la seule des deux qui permet de calculer les heures supplémentaires et de répondre à l’inspection du travail sur la durée du travail.`,
      },
      {
        question: `Comment calculer les heures de travail d’une journée${NBSP}?`,
        answer: `Heures du jour = heure de départ − heure d’arrivée − durée de la pause. Arrivée à 8${NBSP}h, pause de 12${NBSP}h à 13${NBSP}h, départ à 17${NBSP}h${NBSP}30${NBSP}: 9${NBSP}h${NBSP}30 de présence moins 1${NBSP}h de pause, soit 8${NBSP}h${NBSP}30, ou 8,5 heures en décimal. Pour la paie, convertissez les minutes${NBSP}: 15${NBSP}min = 0,25${NBSP}h, 30${NBSP}min = 0,5${NBSP}h, 45${NBSP}min = 0,75${NBSP}h. L’Excel fait ce calcul pour chaque jour.`,
      },
      {
        question: `Comment calculer les heures supplémentaires à partir de la fiche${NBSP}?`,
        answer: `Semaine par semaine, jamais sur le mois${NBSP}: tout ce qui dépasse 35${NBSP}heures dans la semaine est une heure supplémentaire. Sans accord collectif, les heures de la 36e à la 43e sont majorées de 25${NBSP}%, les suivantes de 50${NBSP}%${NBSP}: une semaine de 40,5${NBSP}h donne 5,5${NBSP}h à 25${NBSP}%. Pour un salarié à temps partiel, les heures au-delà de son contrat sont des heures complémentaires, avec leurs propres règles (art. L3123-8)${NBSP}: le modèle les montre dans «${NBSP}au-delà de la durée prévue${NBSP}».`,
      },
      {
        question: `Combien de temps faut-il garder les fiches de pointage${NBSP}?`,
        answer: `Un an au moins${NBSP}: c’est la durée pendant laquelle l’employeur tient à la disposition de l’inspection du travail les documents qui comptent les heures de chaque salarié (art. D3171-16). Pour les données d’une badgeuse, la CNIL admet une conservation en archive jusqu’à 5${NBSP}ans. Rangez fiches et récapitulatifs signés par salarié et par mois.`,
      },
      {
        question: `Puis-je installer une badgeuse ou une pointeuse${NBSP}?`,
        answer: `Oui, si le dispositif reste proportionné. La CNIL juge excessive une badgeuse biométrique (empreinte, reconnaissance faciale) ou qui prend une photo à chaque pointage, et demande de limiter les données à ce qui est nécessaire. Prévenez chaque salarié avant la mise en place (finalité, destinataires, durée de conservation) et informez ou consultez vos représentants du personnel.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Fiche de la semaine${NBSP}»${NBSP}: vous saisissez le lundi, puis l’arrivée, la pause et le départ de chaque jour au format 08:30${NBSP}; la pause, les heures du jour, le total et les heures supplémentaires par taux se calculent, et la colonne «${NBSP}Contrôle${NBSP}» signale les oublis et les dépassements. «${NBSP}Récapitulatif du mois${NBSP}» reprend le total de chaque semaine. «${NBSP}Réglages${NBSP}» porte la durée prévue et les taux. Un poste qui passe minuit (22:00 → 06:00) n’est pas calculé${NBSP}: l’Excel le signale, comptez-le à la main.`,
      },
      {
        question: `Et quand le pointage de toute une équipe devient une corvée${NBSP}?`,
        answer: `Une fiche par salarié et par semaine reste tenable pour quelques personnes. Au-delà, ressaisir les heures de chaque fiche dans la paie, relancer les signatures et repérer les pauses oubliées prend des heures chaque mois${NBSP}: un logiciel de pointage relié au planning et à la paie fait gagner ce temps. Si vous dirigez une entreprise de nettoyage, le test de la page outil vous dit lequel choisir pour le planning et le pointage de vos agents.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les fiches de pointage reviennent en retard, se ressaisissent une à une dans la paie et que les heures sup se recalculent à la main chaque fin de mois, un outil qui relie le pointage, le planning et la paie vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour entreprises de nettoyage',
  },
}
