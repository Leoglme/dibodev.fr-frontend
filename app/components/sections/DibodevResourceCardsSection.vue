<template>
  <section :id="props.anchorId" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" />

      <ul v-if="props.cards.length > 0" class="grid gap-5 md:grid-cols-2 lg:gap-6">
        <li v-for="(card, index) in props.cards" :key="card.toolId">
          <NuxtLink
            :to="localePath({ name: card.routeName })"
            class="group hover:border-primary/45 focus-visible:border-primary/45 flex h-full items-start gap-4 rounded-xl border border-gray-300 p-5 transition-[border-color,box-shadow] duration-200 hover:shadow-[0_14px_36px_rgba(111,95,224,0.1)] focus-visible:shadow-[0_14px_36px_rgba(111,95,224,0.1)] md:p-6"
            :class="cardClass"
            @click="trackClick(card.toolId)"
          >
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
              aria-hidden="true"
            >
              <DibodevIcon :name="card.icon" mode="stroke" :width="22" :height="22" />
            </span>
            <span class="grid min-w-0 gap-1">
              <span class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ card.label }}</span>
              <span class="group-hover:text-primary text-lg leading-snug font-medium text-gray-100 transition-colors">
                {{ card.title }}
              </span>
              <span class="text-sm leading-6 text-gray-200">{{ card.description }}</span>
            </span>
          </NuxtLink>
        </li>
      </ul>

      <div v-if="props.pills.length > 0" class="grid gap-4">
        <p class="text-base font-medium text-gray-100">{{ props.pillsTitle }}</p>
        <ul class="flex flex-wrap gap-2.5">
          <li v-for="pill in props.pills" :key="pill.routeName">
            <NuxtLink
              :to="localePath({ name: pill.routeName })"
              class="hover:border-primary hover:text-primary flex min-h-11 w-fit items-center rounded-full border border-gray-400 bg-white px-4 py-1.5 text-sm leading-6 font-medium text-gray-100 transition-colors"
              @click="trackClick(pill.toolId)"
            >
              {{ pill.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevResourceCardLink,
  DibodevResourceCardsSectionProps,
  DibodevResourcePill,
} from '~/core/types/DibodevResourceCardsSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * "Going further" section: up to two linked cards towards sister pages of the site, then a row of pills towards related pages.
 */
const props: DibodevResourceCardsSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'resources',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  cards: {
    type: Array as PropType<DibodevResourceCardLink[]>,
    default: (): DibodevResourceCardLink[] => [],
  },
  pillsTitle: {
    type: String as PropType<string>,
    default: '',
  },
  pills: {
    type: Array as PropType<DibodevResourcePill[]>,
    default: (): DibodevResourcePill[] => [],
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
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
 * Sends the click towards a sister page.
 * @param {string} toolId - The id of the page clicked.
 * @returns {void}
 */
function trackClick(toolId: string): void {
  track(TRACKING_EVENTS.toolTeaserClicked, { tool: toolId, location: props.trackingLocation })
}
</script>
