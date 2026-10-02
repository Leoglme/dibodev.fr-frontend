<template>
  <section id="about-path" class="bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-16">
      <DibodevSectionHeading
        :eyebrow="t('aboutPage.path.eyebrow')"
        :title="t('aboutPage.path.title')"
        :intro="t('aboutPage.path.subtitle', { years: YEARS_OF_EXPERIENCE })"
      />

      <div class="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-10">
        <div v-for="timeline in timelines" :key="timeline.title" class="grid content-start gap-6">
          <h3 class="text-xl font-medium text-gray-100">{{ timeline.title }}</h3>
          <ol class="grid gap-6 border-l-2 border-gray-300 pl-6 sm:pl-10">
            <li v-for="step in timeline.steps" :key="step.title" class="relative">
              <span
                class="absolute top-7 -left-[31px] h-3 w-3 rounded-full sm:top-9 sm:-left-[47px]"
                :class="step.isCurrent ? 'bg-primary ring-accent-tint ring-4' : 'bg-gray-400'"
                aria-hidden="true"
              />
              <DibodevCareerStepCard :step="step" :currentStepLabel="t('aboutPage.path.currentStep')" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutCareerStepConfig, DibodevAboutTimeline } from '~/core/types/DibodevAboutPage'
import type { DibodevCareerStep } from '~/core/types/DibodevCareerStepCard'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevCareerStepCard from '~/components/cards/DibodevCareerStepCard.vue'
import { CareerUtils } from '~/core/utils/CareerUtils'

const { t } = useI18n()

const YEARS_OF_EXPERIENCE: number = CareerUtils.getYearsOfExperience()
const EXPERIENCE_STEPS: DibodevAboutCareerStepConfig[] = [
  {
    key: 'dibodev',
    monogram: 'D',
    logoSrc: '/android-chrome-192x192.png',
    highlightKeys: ['website', 'nightforge', 'goupixdex'],
    technologies: ['Nuxt', 'Storyblok', 'Python', 'FastAPI', 'Tauri', 'Stripe'],
    isCurrent: true,
  },
  {
    key: 'prepeers',
    monogram: 'PP',
    logoSrc: '/images/clients/prepeers.svg',
    highlightKeys: ['platform', 'schools', 'data'],
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'LLM', '.NET', 'Azure', 'PostHog'],
    isCurrent: false,
  },
  {
    key: 'izidoor',
    monogram: 'I',
    logoSrc: '/images/clients/izidoor.png',
    highlightKeys: ['backOffice', 'adoption', 'shareholder'],
    technologies: ['Nuxt', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Stripe', 'Docker'],
    isCurrent: false,
  },
  {
    key: 'kodeva',
    monogram: 'K',
    logoSrc: '/images/clients/kodeva.png',
    highlightKeys: ['stockpme', 'gestTime', 'production'],
    technologies: ['C#', '.NET', 'Nuxt', 'Vue.js', 'SQL Server', 'MongoDB'],
    isCurrent: false,
  },
]
const EDUCATION_STEPS: DibodevAboutCareerStepConfig[] = [
  {
    key: 'master',
    monogram: 'E',
    logoSrc: '/images/about/logos/epitech.svg',
    highlightKeys: [],
    technologies: ['Python', 'Machine learning', 'NLP'],
    isCurrent: false,
  },
  {
    key: 'webAcademy',
    monogram: 'E',
    logoSrc: '/images/about/logos/epitech.svg',
    highlightKeys: [],
    technologies: ['JavaScript', 'Node.js', 'SQL'],
    isCurrent: false,
  },
  {
    key: 'cooking',
    monogram: 'C',
    logoSrc: null,
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
    logoSrc: stepConfig.logoSrc,
    isCurrent: stepConfig.isCurrent,
  }
}
</script>
