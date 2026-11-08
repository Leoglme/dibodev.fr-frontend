import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the driving school rules were last checked: move it when the files or the facts change. */
export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT: string = '2026-11-08'

export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-driving-school-contract'

/** Code de la route, art. L213-2: written contract signed after an initial assessment, free return and transfer of the file, no fee for presenting the student at the test. */
export const DRIVING_SCHOOL_CONTRACT_LAW_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042656354',
}

/** Minimum practical training for a first B licence: 20 hours, 15 of them on open roads (10 with a simulator), 13 hours with an automatic gearbox. */
export const DRIVING_SCHOOL_TRAINING_HOURS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2828',
}

/** Order of 22 December 2009, art. 3: a training record in each student's name, kept three years and copied to the next school. */
export const DRIVING_SCHOOL_TRAINING_RECORD_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000029679197',
}
