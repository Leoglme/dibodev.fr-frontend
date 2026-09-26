<template>
  <section
    id="about-path"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-24 sm:px-8 sm:py-32"
  >
    <div class="grid w-full max-w-5xl gap-16">
      <div class="grid gap-4">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('aboutPage.path.title') }}</h2>
        <p class="text-left text-base leading-8 text-gray-200">{{ t('aboutPage.path.subtitle') }}</p>
      </div>

      <div v-for="timeline in timelines" :key="timeline.title" class="grid gap-8">
        <h3 class="text-xl font-medium text-gray-100">{{ timeline.title }}</h3>
        <ol class="grid gap-8 border-l-2 border-gray-600 pl-6 sm:pl-10">
          <li v-for="step in timeline.steps" :key="step.title" class="relative">
            <span
              class="absolute top-7 -left-[31px] h-3 w-3 rounded-full sm:top-9 sm:-left-[47px]"
              :class="step.isCurrent ? 'bg-primary-light ring-primary/30 ring-4' : 'bg-gray-400'"
              aria-hidden="true"
            />
            <DibodevCareerStepCard :step="step" :currentStepLabel="t('aboutPage.path.currentStep')" />
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutCareerStepConfig, DibodevAboutTimeline } from '~/core/types/DibodevAboutPage'
import type { DibodevCareerStep } from '~/core/types/DibodevCareerStepCard'
import { computed } from 'vue'
import DibodevCareerStepCard from '~/components/cards/DibodevCareerStepCard.vue'

const { t } = useI18n()

const EXPERIENCE_STEPS: DibodevAboutCareerStepConfig[] = [
  {
    key: 'prepeers',
    monogram: 'PP',
    highlightKeys: ['platform', 'schools', 'data'],
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'LLM', '.NET', 'Azure', 'PostHog'],
    isCurrent: true,
  },
  {
    key: 'dibodev',
    monogram: 'D',
    highlightKeys: ['website', 'nightforge', 'goupixdex'],
    technologies: ['Nuxt', 'Storyblok', 'Python', 'FastAPI', 'Tauri', 'Stripe'],
    isCurrent: false,
  },
  {
    key: 'izidoor',
    monogram: 'I',
    highlightKeys: ['backOffice', 'adoption', 'shareholder'],
    technologies: ['Nuxt', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Stripe', 'Docker'],
    isCurrent: false,
  },
  {
    key: 'kodeva',
    monogram: 'K',
    highlightKeys: ['stockpme', 'gestTime', 'production'],
    technologies: ['C#', '.NET', 'Nuxt', 'Vue.js', 'SQL Server', 'MongoDB'],
    isCurrent: false,
  },
]
const EDUCATION_STEPS: DibodevAboutCareerStepConfig[] = [
  {
    key: 'master',
    monogram: 'E',
    highlightKeys: [],
    technologies: ['Python', 'Machine learning', 'NLP'],
    isCurrent: false,
  },
  {
    key: 'webAcademy',
    monogram: 'E',
    highlightKeys: [],
    technologies: ['JavaScript', 'Node.js', 'SQL'],
    isCurrent: false,
  },
  {
    key: 'cooking',
    monogram: 'C',
    highlightKeys: [],
    technologies: [],
    isCurrent: false,
  },
]

const timelines: ComputedRef<DibodevAboutTimeline[]> = computed((): DibodevAboutTimeline[] => [
  { title: t('aboutPage.path.experiencesTitle'), steps: EXPERIENCE_STEPS.map(buildCareerStep) },
  { title: t('aboutPage.path.educationTitle'), steps: EDUCATION_STEPS.map(buildCareerStep) },
])

/**
 * Builds a career step with its translated texts from its static configuration.
 * @param {DibodevAboutCareerStepConfig} stepConfig - The static configuration of the step.
 * @returns {DibodevCareerStep} The career step ready to be displayed.
 */
function buildCareerStep(stepConfig: DibodevAboutCareerStepConfig): DibodevCareerStep {
  const translationPrefix: string = `aboutPage.path.${stepConfig.key}`
  return {
    period: t(`${translationPrefix}.period`),
    title: t(`${translationPrefix}.title`),
    organization: t(`${translationPrefix}.organization`),
    context: t(`${translationPrefix}.context`),
    description: t(`${translationPrefix}.description`),
    highlights: stepConfig.highlightKeys.map((highlightKey: string): string =>
      t(`${translationPrefix}.highlights.${highlightKey}`),
    ),
    technologies: stepConfig.technologies,
    monogram: stepConfig.monogram,
    isCurrent: stepConfig.isCurrent,
  }
}
</script>
