import type { DibodevWorkHoursCalculatorPageContent } from '~/core/types/DibodevWorkHoursCalculatorPage'
import { TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/timeClockSheet/pageShared'
import { WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/weeklySchedule/pageShared'
import { NBSP } from '~/core/constants/typography'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  DAILY_REST_SOURCE,
  FULL_TIME_MAXIMUM_DURATIONS_SOURCE,
  OVERTIME_DEFAULT_RATES_SOURCE,
  OVERTIME_SERVICE_PUBLIC_SOURCE,
  OVERTIME_WEEKLY_COUNT_SOURCE,
} from '~/core/constants/workHoursCalculator/pageShared'

export const WORK_HOURS_CALCULATOR_PAGE_FR: DibodevWorkHoursCalculatorPageContent = {
  meta: {
    title: `Calcul des heures de travail${NBSP}: calculatrice et heures sup`,
    description: `Calculez vos heures de travail gratuitement${NBSP}: arrivée, départ et pause de chaque jour, total en heures et en décimal, heures sup à 25${NBSP}% et 50${NBSP}%.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Calcul des heures de travail de la semaine, conversion en heures décimales et heures supplémentaires',
  },
  breadcrumbLabel: 'Calcul des heures de travail',
  numberLocale: 'fr-FR',
  shareImage: {
    titleLines: ['Calcul des heures', 'de travail gratuit'],
    highlight: 'Calcul des heures',
    subtitle: `Total de la semaine en heures et en décimal, pause déduite, heures sup à 25${NBSP}% et 50${NBSP}%`,
    badge: 'Gratuit, sans inscription',
    alt: `Calculateur gratuit des heures de travail${NBSP}: total de la semaine en heures et en décimal, pause déduite et heures supplémentaires, sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Calcul des heures de travail',
    titleAfter: ' en ligne',
    reassurances: ['Total en heures et en décimal', `Heures sup à 25${NBSP}% et 50${NBSP}%`, 'Rien n’est enregistré'],
    aboutTitle: 'À propos du calculateur',
    description: `Un calculateur d’heures de travail pour compter la semaine d’un salarié, ou la vôtre, à partir des horaires de chaque jour${NBSP}: pause déduite, poste de nuit compté, total converti en heures décimales pour la paie. Avec la durée de référence et un taux horaire brut, il sépare les heures au-delà de la référence et donne leur montant avec les majorations prévues par la loi quand aucun accord ne fixe d’autres taux.`,
    authorIntro: 'Calculateur préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro, chez l’éditeur Kodeva, un logiciel de suivi des heures par chantier (Gest-Time), toujours utilisé par des PME. Pour ce calculateur, j’ai relu les articles du Code du travail et les pages de Service-Public sur la durée du travail et les heures supplémentaires.',
  },
  calculator: {
    dayLabels: {
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
    },
    dayColumnLabel: 'Jour',
    arrivalLabel: 'Arrivée',
    departureLabel: 'Départ',
    breakLabel: 'Pause (min)',
    dayTotalLabel: 'Total',
    nextDayTag: 'fin le lendemain',
    breakTooLongTag: 'pause trop longue',
    referenceLabel: 'Durée de référence (heures par semaine)',
    referenceHint: `35${NBSP}h par défaut, la durée légale. Les montants ne s’affichent qu’avec 35${NBSP}h.`,
    hourlyRateLabel: 'Taux horaire brut en euros (facultatif)',
    hourlyRateHint: 'Pour afficher le montant des heures. Il reste dans votre navigateur.',
    copyMondayButton: 'Recopier le lundi sur les jours ouvrés',
    clearButton: 'Tout effacer',
    copySummaryButton: 'Copier le récapitulatif',
    copiedStatus: `Récapitulatif copié${NBSP}: collez-le dans un mail ou un tableur.`,
    copyFailedStatus: `La copie n’a pas fonctionné dans ce navigateur${NBSP}: notez le résultat à la main.`,
    durationTemplate: `{hours}${NBSP}h${NBSP}{minutes}`,
    resultLabel: 'Total de la semaine',
    emptyResultText: `Saisissez l’arrivée et le départ d’au moins un jour${NBSP}: le total se calcule à chaque saisie.`,
    decimalTemplate: `soit {decimal}${NBSP}h en heures décimales`,
    regularLabel: 'Heures jusqu’à la référence',
    beyondReferenceTemplate: 'Au-delà de {reference}',
    firstTierLabel: '8 premières heures au-delà',
    nextTierLabel: 'Heures suivantes',
    payTitle: 'Montant brut estimé',
    payRegularLabel: 'Heures normales',
    payFirstTierLabel: `8 premières heures sup (+25${NBSP}%)`,
    payNextTierLabel: `Heures sup suivantes (+50${NBSP}%)`,
    payTotalLabel: 'Total de la semaine',
    payNote: `Taux par défaut de l’article L3121-36 du Code du travail, quand aucun accord ne fixe autre chose. Votre convention collective ou un accord d’entreprise peut prévoir d’autres taux, d’au moins 10${NBSP}%.`,
    payUnavailableNote: `Les montants ne s’affichent qu’avec la référence de 35${NBSP}h, la durée légale. Avec une autre référence, les règles changent (heures complémentaires d’un temps partiel, heures déjà majorées d’un contrat à 39${NBSP}h)${NBSP}: voyez votre contrat et votre convention.`,
    alertsTitle: 'À vérifier',
    dailyMaximumAlertTemplate: `{days}${NBSP}: plus de 10${NBSP}h de travail effectif, le maximum par jour sauf dérogation.`,
    shortBreakAlertTemplate: `{days}${NBSP}: 6${NBSP}h de travail ou plus avec une pause de moins de 20${NBSP}minutes.`,
    weeklyMaximumAlert: `Plus de 48${NBSP}h dans la semaine, le maximum sauf autorisation exceptionnelle.`,
    listConjunction: 'et',
    privacyNote: `Tout se calcule dans votre navigateur${NBSP}: aucun horaire ni taux n’est envoyé ni enregistré.`,
    summary: {
      title: 'Récapitulatif des heures de la semaine',
      dayLineTemplate: `{day}${NBSP}: {arrival} à {departure}, pause de {break}${NBSP}min, {duration} ({decimal}${NBSP}h)`,
      restDayTemplate: `{day}${NBSP}: non travaillé`,
      totalTemplate: `Total${NBSP}: {duration} ({decimal}${NBSP}h)`,
      beyondReferenceTemplate: `Au-delà de {reference}${NBSP}: {duration} ({decimal}${NBSP}h), dont {firstTier} pour les 8 premières heures et {nextTier} pour les suivantes`,
      regularPayTemplate: `Heures normales${NBSP}: {amount}`,
      firstTierPayTemplate: `8 premières heures sup (+25${NBSP}%)${NBSP}: {amount}`,
      nextTierPayTemplate: `Heures sup suivantes (+50${NBSP}%)${NBSP}: {amount}`,
      totalPayTemplate: `Montant brut estimé${NBSP}: {amount}`,
      footer:
        'Calculé avec le calculateur d’heures de travail de dibodev.fr. Estimation à vérifier avec votre convention collective.',
    },
  },
  summary: {
    eyebrow: 'En bref',
    text: `Heures du jour = départ − arrivée − pause. Additionnez les sept jours, du lundi au dimanche, puis convertissez les minutes en centièmes en les divisant par 60 (30${NBSP}min = 0,50${NBSP}h). Toute heure au-delà de 35${NBSP}h dans la semaine est une heure supplémentaire${NBSP}: sans accord collectif, les 8 premières sont majorées de 25${NBSP}%, les suivantes de 50${NBSP}%.`,
    dateLabel: 'Règles relues le 22 novembre 2026 sur Légifrance et Service-Public.',
  },
  howToCount: {
    eyebrow: 'Comment compter',
    title: 'Compter ses heures sans se tromper',
    intro: `Quatre points font la différence entre un total juste et un total faux${NBSP}: la pause, la conversion en décimal, le poste de nuit et la semaine.`,
    steps: [
      {
        label: 'La pause',
        title: 'Retirer la pause du temps de présence',
        description: `Arrivée à 8${NBSP}h, départ à 17${NBSP}h${NBSP}30, une heure de pause${NBSP}: 9${NBSP}h${NBSP}30 de présence, 8${NBSP}h${NBSP}30 de travail. Si votre contrat ou votre convention paie la pause, ou si vous restez à la disposition de l’employeur pendant ce temps, laissez 0 dans la case.`,
      },
      {
        label: 'Le décimal',
        title: 'Convertir les minutes en centièmes',
        description: `La paie compte en heures décimales${NBSP}: divisez les minutes par 60. 15${NBSP}min = 0,25${NBSP}h, 30${NBSP}min = 0,50${NBSP}h, 45${NBSP}min = 0,75${NBSP}h, 20${NBSP}min = 0,33${NBSP}h. 7${NBSP}h${NBSP}30 s’écrit donc 7,50 et non 7,30. Le calculateur affiche les deux.`,
      },
      {
        label: 'Minuit',
        title: 'Un poste de nuit qui passe minuit',
        description: `Si l’heure de départ est plus tôt que l’heure d’arrivée, le poste finit le lendemain${NBSP}: 22${NBSP}h à 6${NBSP}h font 8${NBSP}h de présence. Le calculateur compte tout le poste sur le jour d’arrivée. Pour un poste qui commence le dimanche soir, les heures d’après minuit appartiennent en toute rigueur à la semaine suivante, qui commence le lundi à 0${NBSP}h.`,
      },
      {
        label: 'La semaine',
        title: 'Comparer la semaine à 35 heures',
        description: `Les heures supplémentaires se comptent semaine par semaine, jamais sur le mois${NBSP}: une semaine de 40${NBSP}h donne 5${NBSP}heures sup, même si la suivante n’en fait que 30, sauf accord qui aménage le temps de travail sur plusieurs semaines. Réglez la référence sur la durée de votre contrat pour voir les heures qui la dépassent.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que dit la loi',
    title: 'Six règles sur la durée du travail et les heures sup',
    intro: `Lues le 22 novembre 2026 sur Légifrance et Service-Public, pour un salarié du privé à temps plein. Une convention collective ou un accord peut en changer plusieurs${NBSP}: elles valent quand rien d’autre n’est prévu.`,
    facts: [
      {
        contextLabel: 'Code du travail, art. L3121-29',
        title: 'Les heures sup se comptent semaine par semaine',
        text: `Le Code du travail le dit en une phrase${NBSP}: les heures supplémentaires se décomptent par semaine. Service-Public précise que la semaine va du lundi 0${NBSP}heure au dimanche 24${NBSP}heures et que la durée légale est de 35${NBSP}heures. C’est ce que fait le calculateur, du lundi au dimanche.`,
        sourceName: OVERTIME_WEEKLY_COUNT_SOURCE.name,
        sourceUrl: OVERTIME_WEEKLY_COUNT_SOURCE.url,
      },
      {
        contextLabel: 'À défaut d’accord, art. L3121-36',
        title: `Au-delà de 35${NBSP}h, 25${NBSP}% puis 50${NBSP}%`,
        text: `Sans accord, chacune des 8 premières heures supplémentaires de la semaine, de la 36e à la 43e, est majorée de 25${NBSP}%. Les heures suivantes, à partir de la 44e, sont majorées de 50${NBSP}%. Ce sont les taux qu’applique le calculateur quand vous donnez un taux horaire.`,
        sourceName: OVERTIME_DEFAULT_RATES_SOURCE.name,
        sourceUrl: OVERTIME_DEFAULT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Accord ou convention',
        title: `D’autres taux possibles, jamais sous 10${NBSP}%`,
        text: `Un accord collectif peut fixer d’autres taux de majoration, chacun d’au moins 10${NBSP}%, d’après Service-Public. Sans convention ni accord, le contingent est de 220${NBSP}heures supplémentaires par salarié et par an. Avant de payer ou de réclamer des heures, lisez votre convention collective.`,
        sourceName: OVERTIME_SERVICE_PUBLIC_SOURCE.name,
        sourceUrl: OVERTIME_SERVICE_PUBLIC_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, art. L3121-18',
        title: '10 heures de travail effectif par jour au plus',
        text: `La durée quotidienne de travail effectif ne peut pas dépasser 10${NBSP}heures, sauf dérogation accordée par l’inspection du travail, urgence ou cas prévus par la loi. Le calculateur signale chaque jour qui dépasse 10${NBSP}h.`,
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'Temps plein',
        title: `48${NBSP}h dans une semaine, 44${NBSP}h en moyenne sur 12 semaines`,
        text: `Pour un salarié à temps plein de 18 ans ou plus, Service-Public fixe le maximum à 48${NBSP}heures sur une même semaine et à 44${NBSP}heures en moyenne sur 12 semaines consécutives. Une pause d’au moins 20${NBSP}minutes consécutives est due dès 6${NBSP}heures de travail.`,
        sourceName: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.name,
        sourceUrl: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Repos quotidien',
        title: '11 heures de repos entre deux journées',
        text: `Entre deux journées de travail, un salarié majeur a droit à au moins 11${NBSP}heures de repos consécutives. Des dérogations peuvent les réduire, jamais sous 9${NBSP}heures. Un poste qui finit à 23${NBSP}h permet de reprendre au plus tôt à 10${NBSP}h le lendemain.`,
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Le calculateur ne remplace pas votre convention collective.',
    calloutText: `Il applique les taux par défaut de la loi. Une convention, un accord d’entreprise, un forfait en jours, un temps partiel ou un temps de travail réparti sur plusieurs semaines changent le calcul${NBSP}: vérifiez-les avant de payer ou de réclamer des heures.`,
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Calcul des heures${NBSP}: vos questions`,
    questions: [
      {
        question: `Comment calculer ses heures de travail${NBSP}?`,
        answer: `Pour chaque jour${NBSP}: heure de départ − heure d’arrivée − durée de la pause. Arrivée à 8${NBSP}h${NBSP}30, départ à 17${NBSP}h, 45${NBSP}minutes de pause${NBSP}: 8${NBSP}h${NBSP}30 de présence, 7${NBSP}h${NBSP}45 de travail, soit 7,75 heures. Additionnez ensuite les jours du lundi au dimanche pour obtenir la semaine. Le calculateur de cette page fait le calcul à chaque saisie.`,
      },
      {
        question: `Comment convertir des minutes en centièmes${NBSP}?`,
        answer: `Divisez les minutes par 60. 6${NBSP}min = 0,10${NBSP}h, 10${NBSP}min = 0,17${NBSP}h, 15${NBSP}min = 0,25${NBSP}h, 20${NBSP}min = 0,33${NBSP}h, 30${NBSP}min = 0,50${NBSP}h, 40${NBSP}min = 0,67${NBSP}h, 45${NBSP}min = 0,75${NBSP}h, 50${NBSP}min = 0,83${NBSP}h. Dans l’autre sens, multipliez les centièmes par 60${NBSP}: 0,40${NBSP}h = 24${NBSP}minutes.`,
      },
      {
        question: `7${NBSP}h${NBSP}30 en décimal, ça donne quoi${NBSP}?`,
        answer: `7,50 heures${NBSP}: 30${NBSP}minutes font une demi-heure, donc 0,50. L’erreur courante est d’écrire 7,30, qui vaut en réalité 7${NBSP}h${NBSP}18. De même, 7${NBSP}h${NBSP}45 = 7,75, 7${NBSP}h${NBSP}20 = 7,33 et 8${NBSP}h${NBSP}15 = 8,25.`,
      },
      {
        question: `Comment calculer ses heures supplémentaires${NBSP}?`,
        answer: `Faites le total de la semaine, du lundi au dimanche, et retirez 35${NBSP}heures. Ce qui reste, ce sont les heures supplémentaires de la semaine. Une semaine de 41${NBSP}h${NBSP}30 donne 6${NBSP}h${NBSP}30 d’heures sup, toutes au premier taux. Une semaine de 45${NBSP}h donne 10${NBSP}heures sup${NBSP}: 8 au premier taux, 2 au second. Elles se comptent semaine par semaine, jamais sur le mois.`,
      },
      {
        question: `Quelle majoration pour les heures supplémentaires${NBSP}?`,
        answer: `Sans accord, la loi prévoit 25${NBSP}% pour chacune des 8 premières heures sup de la semaine (de la 36e à la 43e) et 50${NBSP}% à partir de la 44e (art. L3121-36 du Code du travail). Une convention ou un accord collectif peut fixer d’autres taux, d’au moins 10${NBSP}%. À 12${NBSP}€ brut de l’heure, une heure majorée de 25${NBSP}% vaut 15${NBSP}€, de 50${NBSP}% 18${NBSP}€.`,
      },
      {
        question: `Comment compter un poste de nuit qui passe minuit${NBSP}?`,
        answer: `Comptez l’heure de départ sur le lendemain${NBSP}: de 21${NBSP}h à 5${NBSP}h, cela fait 8${NBSP}h de présence, et non un nombre négatif. Dans le calculateur, saisissez simplement l’arrivée et le départ sur la même ligne${NBSP}: un départ plus tôt que l’arrivée est compté le lendemain, et la ligne l’indique.`,
      },
      {
        question: `La pause déjeuner compte-t-elle dans le temps de travail${NBSP}?`,
        answer: `En général non${NBSP}: on la retire du temps de présence. Elle compte comme du travail effectif quand le salarié reste à la disposition de l’employeur et ne peut pas vaquer librement à ses occupations, par exemple s’il doit répondre au téléphone. Votre contrat ou votre convention peut aussi la payer. Dans ces cas, laissez la pause à 0.`,
      },
      {
        question: `Et pour un salarié à temps partiel${NBSP}?`,
        answer: `Les heures faites au-delà de la durée du contrat ne sont pas des heures supplémentaires mais des heures complémentaires, avec leurs propres règles (art. L3123-8 du Code du travail). Réglez la durée de référence sur celle du contrat${NBSP}: le calculateur affiche les heures qui la dépassent, mais pas de montant, car les taux de 25${NBSP}% et 50${NBSP}% ne s’y appliquent pas.`,
      },
      {
        question: `Combien d’heures supplémentaires peut-on faire dans l’année${NBSP}?`,
        answer: `Sans convention ni accord, le contingent est de 220${NBSP}heures supplémentaires par salarié et par an, d’après Service-Public. Les maximums restent valables chaque semaine${NBSP}: 48${NBSP}heures sur une semaine, 44${NBSP}heures en moyenne sur 12 semaines, 10${NBSP}heures par jour sauf dérogation.`,
      },
      {
        question: `Le calculateur garde-t-il mes horaires${NBSP}?`,
        answer: `Non. Tout se calcule dans votre navigateur${NBSP}: aucun horaire ni taux horaire n’est envoyé ni enregistré, et tout s’efface quand vous fermez la page. Pour garder une trace, copiez le récapitulatif ou utilisez la fiche de pointage gratuite.`,
      },
    ],
  },
  templates: {
    eyebrow: 'Modèles gratuits',
    title: 'Garder une trace des heures de chaque semaine',
    intro:
      'Le calculateur ne garde rien. Pour conserver les heures, les faire signer et préparer la semaine suivante, deux modèles gratuits en PDF, Word et Excel, sans inscription.',
    links: [
      {
        routeName: TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME,
        title: 'Fiche de pointage',
        description: `Arrivée, pause et départ de chaque jour, total de la semaine et heures au-delà de 35${NBSP}h, récapitulatif du mois pour la paie.`,
        linkLabel: 'Voir la fiche de pointage',
      },
      {
        routeName: WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME,
        title: 'Planning hebdomadaire',
        description:
          'Planning de l’équipe et semainier à imprimer, avec les heures du jour, les repos et les totaux calculés.',
        linkLabel: 'Voir le planning hebdomadaire',
      },
    ],
  },
  contactCta: {
    title: `Les heures de toute une équipe à compter chaque mois${NBSP}?`,
    description: `Quand les fiches se ressaisissent une à une dans la paie et que les heures sup se recalculent à la main chaque fin de mois, un outil qui relie le pointage, le planning et la paie vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
