<template>
  <section id="about-skills" class="px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="t('aboutPage.skills.eyebrow')"
        :title="t('aboutPage.skills.title')"
        :intro="t('aboutPage.skills.subtitle')"
      />

      <ul class="grid gap-5 md:grid-cols-2">
        <li
          v-for="skillGroup in skillGroups"
          :key="skillGroup.key"
          class="grid content-start gap-5 rounded-lg border bg-white p-6 sm:p-8"
          :class="skillGroup.isHighlighted ? 'border-primary' : 'border-gray-300'"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg p-3"
              :style="{ backgroundColor: skillGroup.iconBackgroundColor }"
              aria-hidden="true"
            >
              <DibodevServiceIcon :serviceIconName="skillGroup.serviceIconName" />
            </div>
            <h3 class="text-lg font-medium text-gray-100">{{ skillGroup.title }}</h3>
          </div>
          <p class="text-[15px] leading-6 text-gray-200 sm:text-base sm:leading-7">{{ skillGroup.description }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="technology in skillGroup.technologies" :key="technology">
              <DibodevBadge backgroundColor="#f0f0ee" textColor="#141414" size="sm">{{ technology }}</DibodevBadge>
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
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'

const { t } = useI18n()

const SKILL_GROUPS: DibodevAboutSkillGroupConfig[] = [
  {
    key: 'webApps',
    serviceIconName: 'apps',
    iconBackgroundColor: '#FFF1F1',
    technologies: ['Nuxt', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Tauri'],
    isHighlighted: false,
  },
  {
    key: 'ai',
    serviceIconName: 'ai',
    iconBackgroundColor: '#F0F0EE',
    technologies: ['Claude', 'OpenAI', 'LLM', 'RAG', 'NLP', 'Python'],
    isHighlighted: false,
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
