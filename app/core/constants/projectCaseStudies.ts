import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type {
  DibodevProjectCaseStudyDefinition,
  DibodevProjectCaseStudyStage,
  DibodevProjectCaseStudyStageAccent,
} from '~/core/types/DibodevProjectCaseStudy'
import { ACCENT_PALETTES } from '~/core/constants/accentPalettes'

/** Stages of a case study, in reading order. */
export const PROJECT_CASE_STUDY_STAGES: DibodevProjectCaseStudyStage[] = ['before', 'built', 'after']

/** Projects with a case study, keyed by route slug; every figure must come from Léo's CV or LinkedIn. */
export const PROJECT_CASE_STUDIES: Record<string, DibodevProjectCaseStudyDefinition> = {
  izidoor: {
    key: 'izidoor',
    statKeys: ['structures', 'bookings', 'shareholder'],
    itemKeys: {
      before: ['product', 'manual', 'competitors'],
      built: ['backOffice', 'onlineBooking', 'engine'],
      after: ['adoption', 'volume', 'switch'],
    },
  },
  'gestion-temps': {
    key: 'gestTime',
    statKeys: ['companySize', 'production', 'applications'],
    itemKeys: {
      before: ['paper', 'retyping', 'visibility'],
      built: ['entry', 'validation', 'reporting'],
      after: ['replaced', 'reliable', 'production'],
    },
  },
  stockpme: {
    key: 'stockPme',
    statKeys: ['companySize', 'production', 'applications'],
    itemKeys: {
      before: ['spreadsheets', 'errors', 'traceability'],
      built: ['catalog', 'transfers', 'labels'],
      after: ['replaced', 'reliable', 'production'],
    },
  },
  'a2m-orizon-solution': {
    key: 'a2mOrizon',
    statKeys: ['visits', 'visitors', 'autonomy'],
    itemKeys: {
      before: ['noPresence', 'noVisibility'],
      built: ['site', 'seo', 'contact'],
      after: ['traffic', 'leads', 'autonomy'],
    },
  },
}

export const PROJECT_CASE_STUDY_STAGE_ICONS: Record<DibodevProjectCaseStudyStage, string> = {
  before: 'AlertCircle',
  built: 'Monitor',
  after: 'CheckCircle',
}

/**
 * Returns the brand accent palette with the given key.
 * @param {DibodevAccentPalette['key']} key - The palette key.
 * @returns {DibodevProjectCaseStudyStageAccent} Its colour and background.
 * @throws {Error} When no palette has this key.
 */
function getPaletteByKey(key: DibodevAccentPalette['key']): DibodevProjectCaseStudyStageAccent {
  const palette: DibodevAccentPalette | undefined = ACCENT_PALETTES.find(
    (candidate: DibodevAccentPalette): boolean => candidate.key === key,
  )
  if (!palette) {
    throw new Error(`Unknown accent palette: ${key}`)
  }
  return { color: palette.color, background: palette.background }
}

export const PROJECT_CASE_STUDY_STAGE_ACCENTS: Record<
  DibodevProjectCaseStudyStage,
  DibodevProjectCaseStudyStageAccent
> = {
  before: { color: 'var(--color-muted)', background: 'var(--color-gray-600)' },
  built: getPaletteByKey('violet'),
  after: getPaletteByKey('green'),
}
