import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { DibodevWorkHoursDayKey } from '~/core/types/DibodevWorkHours'
import { NBSP } from '~/core/constants/typography'

/** Day the Labour Code articles and the Service-Public pages were last re-read: move it at each re-read. */
export const WORK_HOURS_CALCULATOR_PAGE_UPDATED_AT: string = '2026-11-22'

export const WORK_HOURS_CALCULATOR_ROUTE_NAME: string = 'tools-work-hours-calculator'

export const WORK_HOURS_CALCULATOR_ANCHOR_ID: string = 'calculateur'

export const WORK_HOURS_DAY_KEYS: DibodevWorkHoursDayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export const MONDAY_COPY_TARGET_DAY_KEYS: DibodevWorkHoursDayKey[] = ['tuesday', 'wednesday', 'thursday', 'friday']

export const LEGAL_WEEKLY_HOURS: number = 35
export const DEFAULT_REFERENCE_WEEKLY_HOURS: number = LEGAL_WEEKLY_HOURS
export const FIRST_TIER_OVERTIME_HOURS: number = 8
export const FIRST_TIER_OVERTIME_RATE_PERCENT: number = 25
export const NEXT_TIER_OVERTIME_RATE_PERCENT: number = 50
export const DAILY_MAXIMUM_WORK_HOURS: number = 10
export const WEEKLY_MAXIMUM_WORK_HOURS: number = 48
export const BREAK_THRESHOLD_WORK_HOURS: number = 6
export const MINIMUM_BREAK_MINUTES: number = 20

/** Labour Code, art. L3121-36, read on 22 November 2026: without an agreement, +25 % for the first eight overtime hours, +50 % after. */
export const OVERTIME_DEFAULT_RATES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020341',
}

/** Service-Public, page checked by the administration on 8 June 2026, read on 22 November 2026: 36th to 43rd hour at 25 %, 10 % minimum by agreement, week from Monday 0:00 to Sunday 24:00, 220 hours a year. */
export const OVERTIME_SERVICE_PUBLIC_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2391',
}

/** Labour Code, art. L3121-29, read on 22 November 2026: overtime is counted week by week. */
export const OVERTIME_WEEKLY_COUNT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020370',
}

/** Labour Code, art. L3121-18, read on 22 November 2026: ten hours of actual work per day at most. */
export const DAILY_MAXIMUM_WORK_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020428',
}

/** Service-Public, full-time working hours, read on 22 November 2026: 48 hours a week, 44 hours on average over 12 weeks, 20-minute break after 6 hours. */
export const FULL_TIME_MAXIMUM_DURATIONS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1911',
}

/** Service-Public, daily rest, read on 22 November 2026: 11 consecutive hours between two working days. */
export const DAILY_REST_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F990',
}

/** The calculator, teased from the tools hub and the business software page. */
export const WORK_HOURS_CALCULATOR_TEASER: DibodevToolTeaserContent = {
  toolId: 'work-hours-calculator',
  routeName: WORK_HOURS_CALCULATOR_ROUTE_NAME,
  icon: 'Clock',
  wording: {
    fr: {
      emphasizedIntro: `Combien d’heures cette semaine${NBSP}?`,
      text: `Arrivée, départ et pause de chaque jour${NBSP}: le calculateur donne le total en heures et en décimal, les heures au-delà de 35${NBSP}h et, avec un taux horaire, leur montant majoré.`,
      linkLabel: 'Calculer mes heures de la semaine',
      listLabel: 'Calcul des heures de travail',
      hubDescription: `Les heures du jour et de la semaine en heures et minutes et en décimal, la pause déduite, le poste de nuit compté, les heures sup à 25${NBSP}% et 50${NBSP}%.`,
      hubMeta: '7 jours · résultat immédiat',
    },
    en: {
      emphasizedIntro: 'How many hours this week?',
      text: 'Arrival, departure and break of each day: the calculator gives the total in hours and in decimal, the hours beyond 35 h and, with an hourly rate, their increased pay under French law.',
      linkLabel: 'Calculate my hours of the week',
      listLabel: 'Work hours calculator',
      hubDescription:
        'Daily and weekly hours in hours and minutes and in decimal, break deducted, night shift counted, overtime at 25% and 50% under French law.',
      hubMeta: '7 days · instant result',
    },
    es: {
      emphasizedIntro: '¿Cuántas horas esta semana?',
      text: 'Entrada, salida y pausa de cada día: la calculadora te da el total en horas y en decimal, las horas por encima de 35 h y, con una tarifa por hora, su importe con recargo según la ley francesa.',
      linkLabel: 'Calcular mis horas de la semana',
      listLabel: 'Calculadora de horas de trabajo',
      hubDescription:
        'Las horas del día y de la semana en horas y minutos y en decimal, pausa descontada, turno de noche contado, horas extra al 25 % y al 50 % según la ley francesa.',
      hubMeta: '7 días · resultado inmediato',
    },
  },
}
