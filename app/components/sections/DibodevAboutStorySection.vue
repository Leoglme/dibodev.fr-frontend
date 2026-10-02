<template>
  <section id="about-story" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-14 lg:gap-16">
      <div class="mx-auto grid w-full max-w-4xl gap-8">
        <div class="grid gap-4 text-center">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ t('aboutPage.story.eyebrow') }}</p>
          <h2
            class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
          >
            {{ t('aboutPage.story.title') }}
          </h2>
        </div>
        <p class="text-center text-[19px] leading-8 text-gray-100 sm:text-[21px] sm:leading-9">
          {{ t(`aboutPage.story.${STORY_LEAD_KEY}`) }}
        </p>
        <div class="grid gap-6 text-[17px] leading-7 text-gray-200 md:grid-cols-2 md:gap-x-12">
          <p v-for="paragraphKey in STORY_BODY_KEYS" :key="paragraphKey">
            {{ t(`aboutPage.story.${paragraphKey}`) }}
          </p>
        </div>
      </div>

      <dl class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(fact, index) in facts"
          :key="fact.label"
          class="grid content-start gap-2 rounded-xl border border-gray-300 bg-gray-800 p-5"
          :class="index === 0 ? 'sm:col-span-2' : ''"
        >
          <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ fact.label }}</dt>
          <dd class="text-[15px] leading-6 text-gray-100">{{ fact.value }}</dd>
        </div>
      </dl>

      <div class="flex flex-col gap-4 border-t border-gray-300 pt-8 lg:flex-row lg:items-center lg:gap-8">
        <h3 class="shrink-0 text-lg font-medium text-gray-100">{{ t('aboutPage.profiles.title') }}</h3>
        <ul class="flex flex-wrap gap-3">
          <li v-for="profileLink in PROFILE_LINKS" :key="profileLink.href">
            <a
              :href="profileLink.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:border-primary hover:text-primary focus-visible:outline-primary inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-400 bg-white px-4 text-sm font-medium text-gray-100 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              @click="track(TRACKING_EVENTS.externalProfileClicked, { platform: profileLink.label, location: 'about' })"
            >
              {{ profileLink.label }}
              <DibodevIcon name="ExternalLink" mode="stroke" :width="14" :height="14" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutFact, DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { GOOGLE_BUSINESS_URL, MALT_PROFILE_URL } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { CareerUtils } from '~/core/utils/CareerUtils'

const { t } = useI18n()
const { track } = useTracking()

/** First paragraph, displayed as a lead. */
const STORY_LEAD_KEY: string = 'background'
/** Remaining paragraphs, displayed in two columns on wide screens. */
const STORY_BODY_KEYS: string[] = ['career', 'dibodev', 'ai', 'workingStyle']
const FACT_KEYS: string[] = ['company', 'currentMission', 'location', 'area', 'experience', 'education', 'languages']
const PROFILE_LINKS: DibodevAboutProfileLink[] = [
  { label: 'Malt', href: MALT_PROFILE_URL },
  { label: 'Codeur', href: 'https://www.codeur.com/-leoglme' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dibodev/' },
  { label: 'GitHub', href: 'https://github.com/Leoglme' },
  { label: 'Google Maps', href: GOOGLE_BUSINESS_URL },
  { label: 'Pages Jaunes', href: 'https://www.pagesjaunes.fr/pros/64381216' },
  { label: 'dev.to', href: 'https://dev.to/dibodev' },
]

const facts: ComputedRef<DibodevAboutFact[]> = computed((): DibodevAboutFact[] =>
  FACT_KEYS.map(
    (key: string): DibodevAboutFact => ({
      label: t(`aboutPage.facts.${key}.label`),
      value: t(`aboutPage.facts.${key}.value`, { years: CareerUtils.getYearsOfExperience() }),
    }),
  ),
)
</script>
