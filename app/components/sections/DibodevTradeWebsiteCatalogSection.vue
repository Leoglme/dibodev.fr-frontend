<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <li
          v-for="card in props.cards"
          :key="card.key"
          class="group hover:border-primary/45 focus-within:border-primary/45 flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 transition-[border-color,box-shadow] duration-200 focus-within:shadow-[0_14px_36px_rgba(111,95,224,0.1)] hover:shadow-[0_14px_36px_rgba(111,95,224,0.1)]"
          :class="cardClass"
        >
          <NuxtLink
            :to="localePath({ name: card.routeName })"
            class="block overflow-hidden border-b border-gray-300 bg-white"
            tabindex="-1"
            aria-hidden="true"
            @click="trackClick(card.routeName)"
          >
            <img
              :src="card.thumbnailSrc"
              :alt="card.thumbnailAlt"
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
              class="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
            />
          </NuxtLink>
          <div class="flex flex-1 flex-col gap-3 p-6 sm:p-7">
            <p class="text-muted flex items-center gap-2.5 text-xs font-medium tracking-[0.08em] uppercase">
              <span
                class="bg-accent-tint text-primary-dark grid h-8 w-8 shrink-0 place-items-center rounded-full"
                aria-hidden="true"
              >
                <DibodevIcon :name="card.icon" mode="stroke" :width="16" :height="16" />
              </span>
              {{ card.tradeLabel }}
            </p>
            <h3 class="text-lg leading-snug font-medium text-gray-100">
              <NuxtLink
                :to="localePath({ name: card.routeName })"
                class="hover:text-primary transition-colors"
                @click="trackClick(card.routeName)"
              >
                <DibodevHyphenSafeText :text="card.title" />
              </NuxtLink>
            </h3>
            <p class="text-[15px] leading-6 text-gray-200">{{ card.description }}</p>
            <div class="mt-auto grid gap-3 border-t border-gray-300 pt-4">
              <p class="text-muted text-sm">{{ card.stylesCountLabel }}</p>
              <NuxtLink
                :to="localePath({ name: card.routeName })"
                class="text-primary hover:text-primary-dark tap-area inline-flex w-fit items-center gap-1.5 text-[15px] font-medium transition-colors"
                @click="trackClick(card.routeName)"
              >
                {{ props.linkLabel }}
                <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
              </NuxtLink>
            </div>
          </div>
        </li>
        <li
          class="hover:border-primary/45 focus-within:border-primary/45 flex h-full flex-col gap-3 rounded-xl border border-dashed border-gray-400 p-6 transition-[border-color,box-shadow] duration-200 focus-within:shadow-[0_14px_36px_rgba(111,95,224,0.1)] hover:shadow-[0_14px_36px_rgba(111,95,224,0.1)] sm:p-7"
          :class="cardClass"
        >
          <span
            class="bg-accent-tint text-primary-dark flex h-11 w-11 items-center justify-center rounded-full"
            aria-hidden="true"
          >
            <DibodevIcon name="MessageCircle" mode="stroke" :width="22" :height="22" />
          </span>
          <h3 class="text-lg leading-snug font-medium text-gray-100">{{ props.otherTradeTitle }}</h3>
          <p class="text-[15px] leading-6 text-gray-200">{{ props.otherTradeDescription }}</p>
          <NuxtLink
            :to="localePath('/contact')"
            class="text-primary hover:text-primary-dark tap-area mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-[15px] font-medium transition-colors"
            @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })"
          >
            {{ props.otherTradeLinkLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type {
  DibodevTradeWebsiteCatalogCard,
  DibodevTradeWebsiteCatalogSectionProps,
} from '~/core/types/DibodevTradeWebsiteCatalogSection'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Grid of the trade pages of the hub: one card per trade with the capture of its first template, then a card for the other trades.
 */
const props: DibodevTradeWebsiteCatalogSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'trades',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  cards: {
    type: Array as PropType<DibodevTradeWebsiteCatalogCard[]>,
    required: true,
  },
  linkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  otherTradeTitle: {
    type: String as PropType<string>,
    required: true,
  },
  otherTradeDescription: {
    type: String as PropType<string>,
    required: true,
  },
  otherTradeLinkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'tint',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])

/**
 * Sends the click towards a trade page, identified by its route name.
 * @param {string} routeName - The route of the trade page.
 * @returns {void}
 */
function trackClick(routeName: string): void {
  track(TRACKING_EVENTS.toolTeaserClicked, { tool: routeName, location: props.trackingLocation })
}
</script>
