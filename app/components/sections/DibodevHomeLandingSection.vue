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
      <DibodevPhotoSlideshow
        :slides="tradePhotoSlides"
        :accessibleName="$t('home.hero.trades.label')"
        :captionIntro="$t('home.hero.trades.intro')"
        @navigate="onTradePhotoNavigation"
      />
    </template>
  </DibodevLandingSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevHeroTradePhoto } from '~/core/types/DibodevHeroTradePhoto'
import type { DibodevPhotoSlideshowNavigation, DibodevPhotoSlideshowSlide } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevPhotoSlideshow from '~/components/data-displays/DibodevPhotoSlideshow.vue'
import { useHeroStats } from '~/composables/useHeroStats'
import { useTracking } from '~/composables/useTracking'
import { HERO_TRADE_PHOTOS, HERO_TRADE_PHOTO_WIDTHS } from '~/core/constants/heroTradePhotos'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Reassurance points under the buttons (texts shared with the contact page). */
const REASSURANCE_KEYS: string[] = ['response24h', 'freeQuote', 'noCommitment']

const { t } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()

/* COMPUTED */
const tradePhotoSlides: ComputedRef<DibodevPhotoSlideshowSlide[]> = computed((): DibodevPhotoSlideshowSlide[] =>
  HERO_TRADE_PHOTOS.map(
    (photo: DibodevHeroTradePhoto): DibodevPhotoSlideshowSlide => ({
      id: photo.id,
      imageUrl: buildTradePhotoUrl(photo.fileSlug, HERO_TRADE_PHOTO_WIDTHS[0]!),
      imageSrcset: HERO_TRADE_PHOTO_WIDTHS.map(
        (width: number): string => `${buildTradePhotoUrl(photo.fileSlug, width)} ${width}w`,
      ).join(', '),
      imageAlt: t(`home.hero.trades.items.${photo.id}.alt`),
      title: t(`home.hero.trades.items.${photo.id}.name`),
      subtitle: t(`home.hero.trades.items.${photo.id}.tasks`),
    }),
  ),
)

const reassurances: ComputedRef<string[]> = computed((): string[] =>
  REASSURANCE_KEYS.map((key: string): string => t(`contact.reassurance.${key}`)),
)

/* METHODS */
/**
 * Builds the URL of a trade photo file at a given width.
 * @param {string} fileSlug - Slug of the photo files.
 * @param {number} width - Width of the file, in pixels.
 * @returns {string} The URL of the photo, served from `public/images/hero`.
 */
function buildTradePhotoUrl(fileSlug: string, width: number): string {
  return `/images/hero/trade-${fileSlug}-${width}.webp`
}

/**
 * Tracks a slide change made by the visitor in the trade photos (auto-play is not reported).
 * @param {DibodevPhotoSlideshowNavigation} navigation - The slide now displayed and how the visitor reached it.
 * @returns {void}
 */
function onTradePhotoNavigation(navigation: DibodevPhotoSlideshowNavigation): void {
  track(TRACKING_EVENTS.photoSlideshowNavigated, {
    slide: navigation.slideId,
    method: navigation.method,
    location: 'home_hero',
  })
}
</script>
