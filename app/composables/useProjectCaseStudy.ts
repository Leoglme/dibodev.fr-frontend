import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {
  DibodevProjectCaseStudy,
  DibodevProjectCaseStudyColumn,
  DibodevProjectCaseStudyDefinition,
  DibodevProjectCaseStudyStage,
} from '~/core/types/DibodevProjectCaseStudy'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import { PROJECT_CASE_STUDIES, PROJECT_CASE_STUDY_STAGES } from '~/core/constants/projectCaseStudies'

/**
 * Translated case study of a project (role, key figures, before / built / after), or null when the project has none.
 * @param {string} projectSlug - Route slug of the project (e.g. "izidoor").
 * @returns {ComputedRef<DibodevProjectCaseStudy | null>} The case study, translated in the current locale.
 */
export function useProjectCaseStudy(projectSlug: string): ComputedRef<DibodevProjectCaseStudy | null> {
  const { t } = useI18n()

  return computed((): DibodevProjectCaseStudy | null => {
    const definition: DibodevProjectCaseStudyDefinition | undefined = PROJECT_CASE_STUDIES[projectSlug]
    if (!definition) {
      return null
    }
    const messagePrefix: string = `project.caseStudy.studies.${definition.key}`
    return {
      role: t(`${messagePrefix}.role`),
      stats: definition.statKeys.map(
        (statKey: string): DibodevStatItemProps => ({
          value: t(`${messagePrefix}.stats.${statKey}.value`),
          label: t(`${messagePrefix}.stats.${statKey}.label`),
        }),
      ),
      columns: PROJECT_CASE_STUDY_STAGES.map(
        (stage: DibodevProjectCaseStudyStage): DibodevProjectCaseStudyColumn => ({
          stage,
          title: t(`project.caseStudy.stages.${stage}`),
          items: definition.itemKeys[stage].map((itemKey: string): string => t(`${messagePrefix}.${stage}.${itemKey}`)),
        }),
      ),
    }
  })
}
