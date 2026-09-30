<template>
  <DibodevLandingSection
    :eyebrow="$t('home.hero.eyebrow')"
    :titlePart1="$t('home.hero.titlePart1')"
    :titleHighlight1="$t('home.hero.titleHighlight1')"
    :titlePart2="$t('home.hero.titlePart2')"
    :description="$t('home.hero.description')"
    :ctaText="$t('home.hero.ctaPrimary')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#projects"
    :secondaryCta="{ text: $t('home.hero.ctaSecondary'), target: '#projects' }"
    :stats="heroStats"
    :reassurances="reassurances"
    :decorated="true"
  >
    <template #aside>
      <DibodevHeroShowcase :slides="showcaseSlides" />
    </template>
  </DibodevLandingSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevHeroShowcaseSlide, DibodevShowcaseProjectEntry } from '~/core/types/DibodevHeroShowcase'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevHeroShowcase from '~/components/data-displays/DibodevHeroShowcase.vue'
import { useHeroStats } from '~/composables/useHeroStats'
import { useProjectShowcaseSlides } from '~/composables/useProjectShowcaseSlides'

/** Real screenshots shown in the hero carousel: management tools and a client website, as the title promises. */
const SHOWCASE_PROJECTS: DibodevShowcaseProjectEntry[] = [
  { slug: 'driving-school', media: 'media1' },
  { slug: 'a2m-orizon-solution', media: 'media1' },
  { slug: 'gestion-temps', media: 'media2' },
  { slug: 'goupixdex', media: 'media2' },
]

/** Reassurance points under the buttons (texts shared with the contact page). */
const REASSURANCE_KEYS: string[] = ['response24h', 'freeQuote', 'noCommitment']

const { t } = useI18n()
const localePath = useLocalePath()
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()
const showcaseSlides: ComputedRef<DibodevHeroShowcaseSlide[]> = await useProjectShowcaseSlides(SHOWCASE_PROJECTS)

const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`contact.reassurance.${key}`)),
)
</script>
