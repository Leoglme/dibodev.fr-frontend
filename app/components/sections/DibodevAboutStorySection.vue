<template>
  <section
    id="about-story"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-7xl gap-16 lg:grid-cols-[3fr_2fr] lg:gap-20">
      <div class="grid content-start gap-6">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('aboutPage.story.title') }}</h2>
        <p
          v-for="paragraphKey in STORY_PARAGRAPH_KEYS"
          :key="paragraphKey"
          class="text-left text-sm leading-7 text-gray-200 sm:text-base"
        >
          {{ t(`aboutPage.story.${paragraphKey}`) }}
        </p>
      </div>

      <div class="grid content-start gap-10">
        <div class="grid gap-4 rounded-2xl border-2 border-gray-400 bg-gray-800 px-6 py-6">
          <h3 class="text-base font-medium text-gray-100 sm:text-lg">{{ t('aboutPage.facts.title') }}</h3>
          <dl class="grid gap-4">
            <div v-for="fact in facts" :key="fact.label" class="grid gap-1">
              <dt class="text-xs font-medium tracking-wide text-gray-300 uppercase">{{ fact.label }}</dt>
              <dd class="text-sm leading-6 text-gray-100">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="grid gap-4">
          <h3 class="text-base font-medium text-gray-100 sm:text-lg">{{ t('aboutPage.profiles.title') }}</h3>
          <ul class="flex flex-wrap gap-x-6 gap-y-3">
            <li v-for="profileLink in PROFILE_LINKS" :key="profileLink.href">
              <DibodevLink :link="profileLink.href" externalLink>{{ profileLink.label }}</DibodevLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevAboutFact, DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'

const STORY_PARAGRAPH_KEYS: string[] = ['background', 'dibodev', 'workingStyle']
const FACT_KEYS: string[] = ['company', 'location', 'area', 'experience', 'education', 'stack']
const PROFILE_LINKS: DibodevAboutProfileLink[] = [
  { label: 'Malt', href: 'https://www.malt.fr/profile/leoguillaume2' },
  { label: 'Codeur', href: 'https://www.codeur.com/-leoglme' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dibodev/' },
  { label: 'GitHub', href: 'https://github.com/Leoglme' },
  { label: 'Google Maps', href: 'https://www.google.com/maps?cid=6567115254526097431' },
  { label: 'Pages Jaunes', href: 'https://www.pagesjaunes.fr/pros/64381216' },
  { label: 'dev.to', href: 'https://dev.to/dibodev' },
]

const { t } = useI18n()

const facts: ComputedRef<DibodevAboutFact[]> = computed((): DibodevAboutFact[] =>
  FACT_KEYS.map(
    (key: string): DibodevAboutFact => ({
      label: t(`aboutPage.facts.${key}.label`),
      value: t(`aboutPage.facts.${key}.value`),
    }),
  ),
)
</script>
