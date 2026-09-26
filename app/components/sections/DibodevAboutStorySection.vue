<template>
  <section
    id="about-story"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-24 sm:px-8 sm:py-32"
  >
    <div class="grid w-full max-w-7xl gap-14 lg:grid-cols-[3fr_2fr] lg:gap-20">
      <div class="grid content-start gap-6">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('aboutPage.story.title') }}</h2>
        <p
          v-for="paragraphKey in STORY_PARAGRAPH_KEYS"
          :key="paragraphKey"
          class="text-left text-base leading-8 text-gray-200"
        >
          {{ t(`aboutPage.story.${paragraphKey}`) }}
        </p>
      </div>

      <div class="grid content-start gap-10">
        <div class="grid gap-5 rounded-2xl border border-gray-600 bg-gray-800 p-6 sm:p-7">
          <h3 class="text-lg font-medium text-gray-100">{{ t('aboutPage.facts.title') }}</h3>
          <dl class="grid">
            <div
              v-for="fact in facts"
              :key="fact.label"
              class="grid gap-1 border-t border-gray-600 py-4 first:border-t-0 first:pt-0 last:pb-0"
            >
              <dt class="text-primary-light text-xs font-medium tracking-wide uppercase">{{ fact.label }}</dt>
              <dd class="text-sm leading-6 text-gray-100">{{ fact.value }}</dd>
            </div>
          </dl>
        </div>

        <div class="grid gap-4">
          <h3 class="text-lg font-medium text-gray-100">{{ t('aboutPage.profiles.title') }}</h3>
          <ul class="flex flex-wrap gap-3">
            <li v-for="profileLink in PROFILE_LINKS" :key="profileLink.href">
              <a
                :href="profileLink.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:border-primary-light hover:text-primary-light focus-visible:outline-primary-light inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-600 bg-gray-800 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                @click="
                  track(TRACKING_EVENTS.externalProfileClicked, { platform: profileLink.label, location: 'about' })
                "
              >
                {{ profileLink.label }}
                <DibodevIcon name="ExternalLink" mode="stroke" :width="14" :height="14" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutFact, DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { MALT_PROFILE_URL } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const { t } = useI18n()
const { track } = useTracking()

const STORY_PARAGRAPH_KEYS: string[] = ['background', 'career', 'dibodev', 'ai', 'workingStyle']
const FACT_KEYS: string[] = ['company', 'currentMission', 'location', 'area', 'experience', 'education', 'languages']
const PROFILE_LINKS: DibodevAboutProfileLink[] = [
  { label: 'Malt', href: MALT_PROFILE_URL },
  { label: 'Codeur', href: 'https://www.codeur.com/-leoglme' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dibodev/' },
  { label: 'GitHub', href: 'https://github.com/Leoglme' },
  { label: 'Google Maps', href: 'https://www.google.com/maps?cid=6567115254526097431' },
  { label: 'Pages Jaunes', href: 'https://www.pagesjaunes.fr/pros/64381216' },
  { label: 'dev.to', href: 'https://dev.to/dibodev' },
]

const facts: ComputedRef<DibodevAboutFact[]> = computed((): DibodevAboutFact[] =>
  FACT_KEYS.map(
    (key: string): DibodevAboutFact => ({
      label: t(`aboutPage.facts.${key}.label`),
      value: t(`aboutPage.facts.${key}.value`),
    }),
  ),
)
</script>
