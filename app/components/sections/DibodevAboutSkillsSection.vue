<template>
  <section
    id="about-skills"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-800 px-6 py-24 sm:px-8 sm:py-32"
  >
    <div class="grid w-full max-w-7xl gap-12">
      <div class="grid gap-4">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('aboutPage.skills.title') }}</h2>
        <p class="text-left text-base leading-8 text-gray-200">{{ t('aboutPage.skills.subtitle') }}</p>
      </div>

      <ul class="grid gap-6 md:grid-cols-2">
        <li
          v-for="(skillGroup, index) in skillGroups"
          :key="skillGroup.key"
          class="grid content-start gap-5 rounded-2xl border p-6 sm:p-8"
          :class="
            skillGroup.isHighlighted
              ? 'border-primary from-primary/20 bg-linear-to-br to-gray-900'
              : 'border-gray-600 bg-gray-900'
          "
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl p-3"
              :style="{ backgroundColor: skillGroup.iconBackgroundColor }"
              aria-hidden="true"
            >
              <DibodevServiceIcon :serviceIconName="skillGroup.serviceIconName" />
            </div>
            <h3 class="text-lg font-medium text-gray-100">{{ skillGroup.title }}</h3>
          </div>
          <p class="text-sm leading-7 text-gray-200 sm:text-base">{{ skillGroup.description }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="technology in skillGroup.technologies" :key="technology">
              <DibodevBadge backgroundColor="#35424D" textColor="#F5F4FB" size="sm">{{ technology }}</DibodevBadge>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutSkillGroup, DibodevAboutSkillGroupConfig } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'

const { t } = useI18n()

const SKILL_GROUPS: DibodevAboutSkillGroupConfig[] = [
  {
    key: 'webApps',
    serviceIconName: 'apps',
    iconBackgroundColor: '#F1E8FF',
    technologies: ['Nuxt', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Tauri'],
    isHighlighted: false,
  },
  {
    key: 'ai',
    serviceIconName: 'ai',
    iconBackgroundColor: '#EDEAFF',
    technologies: ['Claude', 'OpenAI', 'LLM', 'RAG', 'NLP', 'Python'],
    isHighlighted: true,
  },
  {
    key: 'backend',
    serviceIconName: 'cloud-storage',
    iconBackgroundColor: '#E2F3FF',
    technologies: ['Node.js', '.NET', 'FastAPI', 'PostgreSQL', 'Stripe'],
    isHighlighted: false,
  },
  {
    key: 'delivery',
    serviceIconName: 'seo',
    iconBackgroundColor: '#ECFFDA',
    technologies: ['Docker', 'GitHub Actions', 'PostHog', 'Storyblok', 'SEO'],
    isHighlighted: false,
  },
]

const skillGroups: ComputedRef<DibodevAboutSkillGroup[]> = computed((): DibodevAboutSkillGroup[] =>
  SKILL_GROUPS.map(
    (skillGroupConfig: DibodevAboutSkillGroupConfig): DibodevAboutSkillGroup => ({
      ...skillGroupConfig,
      title: t(`aboutPage.skills.${skillGroupConfig.key}.title`),
      description: t(`aboutPage.skills.${skillGroupConfig.key}.description`),
    }),
  ),
)
</script>
