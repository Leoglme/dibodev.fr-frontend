<template>
  <section
    :id="props.anchorId || undefined"
    class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    :class="toneClass"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" :align="props.align" />
      <ul class="grid gap-5 lg:gap-6" :class="gridClass">
        <li
          v-for="card in props.cards"
          :key="card.key"
          class="flex flex-col gap-3 rounded-xl border p-6 sm:p-7"
          :class="[
            cardClass,
            card.key === props.highlightedKey
              ? 'border-primary shadow-[0_18px_40px_rgba(111,95,224,0.12)]'
              : 'border-gray-300',
          ]"
        >
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            :class="ICON_TILE_CLASSES[card.iconTone]"
            aria-hidden="true"
          >
            <DibodevIcon :name="card.icon" mode="stroke" :width="20" :height="20" />
          </span>
          <p v-if="card.eyebrow" class="text-muted text-xs font-medium tracking-[0.08em] uppercase">
            {{ card.eyebrow }}
          </p>
          <h3 class="text-lg leading-snug font-medium text-gray-100">
            <DibodevHyphenSafeText :text="card.title" />
          </h3>
          <p class="text-[15px] leading-6 text-gray-200">{{ card.text }}</p>
          <p v-if="card.note" class="text-muted text-sm leading-6">{{ card.note }}</p>
          <NuxtLink
            v-if="card.link"
            :to="card.link.to"
            class="text-primary hover:text-primary-dark mt-auto inline-flex w-fit items-center gap-1.5 pt-1.5 text-[15px] font-medium decoration-2 underline-offset-4 transition-colors hover:underline"
            @click="trackLinkClick(card)"
          >
            {{ card.link.label }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevIconCard,
  DibodevIconCardsColumns,
  DibodevIconCardsSectionProps,
  DibodevIconCardTone,
} from '~/core/types/DibodevIconCardsSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import { useTracking } from '~/composables/useTracking'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const ICON_TILE_CLASSES: Record<DibodevIconCardTone, string> = {
  violet: 'bg-[#efeaff] text-[#5b4bd0]',
  cyan: 'bg-[#e0f5fa] text-[#0e7490]',
  amber: 'bg-[#fdf1dc] text-[#b45309]',
  green: 'bg-[#e4f8ec] text-[#047857]',
  pink: 'bg-[#fde7f3] text-[#be185d]',
}

const GRID_CLASSES: Record<DibodevIconCardsColumns, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 xl:grid-cols-4',
}

const props: DibodevIconCardsSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: '',
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
  align: {
    type: String as PropType<'left' | 'center'>,
    default: 'left',
  },
  cards: {
    type: Array as PropType<DibodevIconCard[]>,
    required: true,
  },
  columns: {
    type: Number as PropType<DibodevIconCardsColumns>,
    default: 3,
  },
  highlightedKey: {
    type: String as PropType<string>,
    default: '',
  },
  trackingLocation: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const { track } = useTracking()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
const gridClass: ComputedRef<string> = computed((): string => GRID_CLASSES[props.columns])

/**
 * Sends the click on a card link to PostHog, as the teasers of the other tools do.
 * @param {DibodevIconCard} card - The card clicked.
 * @returns {void}
 */
function trackLinkClick(card: DibodevIconCard): void {
  if (!props.trackingLocation) {
    return
  }
  track(TRACKING_EVENTS.toolTeaserClicked, { tool: card.key, location: props.trackingLocation })
}
</script>
