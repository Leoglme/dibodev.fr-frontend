<template>
  <section id="about-story" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-20 lg:gap-32">
      <div class="grid gap-14 lg:gap-20">
        <div class="grid gap-7">
          <div class="grid gap-4">
            <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">
              {{ t('aboutPage.story.eyebrow') }}
            </p>
            <h2
              class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
            >
              {{ t('aboutPage.story.title', { years: yearsOfExperience }) }}
            </h2>
          </div>
          <p class="max-w-4xl text-[19px] leading-8 text-gray-100 sm:text-[21px] sm:leading-9">
            {{ t('aboutPage.story.lead') }}
          </p>
        </div>
        <div class="grid gap-y-10 lg:gap-y-14">
          <div
            v-for="storyBlock in storyBlocks"
            :key="storyBlock.title"
            class="grid gap-3 lg:grid-cols-[minmax(0,22rem)_minmax(0,42rem)] lg:gap-x-20"
          >
            <h3 class="text-xl leading-[1.35] font-medium text-gray-100 lg:text-2xl lg:leading-[1.3]">
              {{ storyBlock.title }}
            </h3>
            <p class="text-[17px] leading-7 text-gray-200 lg:text-lg lg:leading-8">{{ storyBlock.text }}</p>
          </div>
        </div>
      </div>

      <div class="grid gap-9">
        <h3 class="text-2xl font-medium text-gray-100">{{ t('aboutPage.facts.title') }}</h3>
        <dl class="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="fact in facts" :key="fact.label" class="flex items-start gap-5">
            <span
              class="bg-accent-tint text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              aria-hidden="true"
            >
              <DibodevIcon :name="fact.icon" mode="stroke" :width="21" :height="21" />
            </span>
            <div class="grid gap-1.5">
              <dt class="text-muted text-[13px] font-medium tracking-[0.08em] uppercase">{{ fact.label }}</dt>
              <dd class="text-lg leading-7 text-gray-100">{{ fact.value }}</dd>
            </div>
          </div>
        </dl>
      </div>

      <div class="grid gap-7">
        <h3 class="text-2xl font-medium text-gray-100">{{ t('aboutPage.profiles.title') }}</h3>
        <ul class="flex flex-wrap gap-3">
          <li v-for="profileLink in ABOUT_PROFILE_LINKS" :key="profileLink.href">
            <a
              :href="profileLink.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:border-primary hover:text-primary focus-visible:outline-primary inline-flex min-h-12 items-center gap-2.5 rounded-full border border-gray-400 bg-white pr-4 pl-3 text-[15px] font-medium text-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              @click="track(TRACKING_EVENTS.externalProfileClicked, { platform: profileLink.label, location: 'about' })"
            >
              <img
                :src="profileLink.logoSrc"
                alt=""
                class="h-6 w-6 shrink-0 object-contain"
                width="24"
                height="24"
                loading="lazy"
                decoding="async"
              />
              {{ profileLink.label }}
              <DibodevIcon
                name="ExternalLink"
                mode="stroke"
                :width="14"
                :height="14"
                class="text-muted shrink-0"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutKeyFact, DibodevAboutStoryBlock } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { ABOUT_PROFILE_LINKS } from '~/core/constants/aboutProfileLinks'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { CareerUtils } from '~/core/utils/CareerUtils'

const { t } = useI18n()
const { track } = useTracking()

/** Titled paragraphs of the story (i18n `aboutPage.story.*`), one per row with the title beside its text on wide screens. */
const STORY_BLOCK_KEYS: string[] = ['proof', 'clients', 'method']
/** Facts of the "in short" list (i18n `aboutPage.facts.*`), each with its line icon. */
const FACT_ICONS: Record<string, string> = {
  company: 'Store',
  location: 'MapPin',
  area: 'Globe',
  experience: 'CalendarCheck',
  education: 'CheckCircle',
  languages: 'MessageCircle',
}

const yearsOfExperience: number = CareerUtils.getYearsOfExperience()

const storyBlocks: ComputedRef<DibodevAboutStoryBlock[]> = computed((): DibodevAboutStoryBlock[] =>
  STORY_BLOCK_KEYS.map(
    (key: string): DibodevAboutStoryBlock => ({
      title: t(`aboutPage.story.${key}.title`),
      text: t(`aboutPage.story.${key}.text`),
    }),
  ),
)

const facts: ComputedRef<DibodevAboutKeyFact[]> = computed((): DibodevAboutKeyFact[] =>
  Object.entries(FACT_ICONS).map(
    ([key, icon]: [string, string]): DibodevAboutKeyFact => ({
      label: t(`aboutPage.facts.${key}.label`),
      value: t(`aboutPage.facts.${key}.value`, { years: yearsOfExperience }),
      icon,
    }),
  ),
)
</script>
