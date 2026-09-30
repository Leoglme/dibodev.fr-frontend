<template>
  <section id="landing" class="relative w-full overflow-hidden px-6 pt-[120px] pb-16 sm:px-8 lg:pt-[160px] lg:pb-28">
    <template v-if="props.decorated">
      <div
        class="bg-primary/10 pointer-events-none absolute -top-40 right-[-6%] h-[28rem] w-[28rem] rounded-full blur-[110px]"
        aria-hidden="true"
      />
      <div
        class="bg-accent-tint pointer-events-none absolute top-48 left-[-12%] h-[22rem] w-[22rem] rounded-full opacity-70 blur-[110px]"
        aria-hidden="true"
      />
    </template>

    <div class="max-w-site relative mx-auto grid w-full gap-12 lg:gap-14">
      <div
        class="grid items-center gap-12"
        :class="
          $slots.aside
            ? 'lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] xl:gap-20 2xl:grid-cols-[minmax(0,1fr)_minmax(0,38rem)] 2xl:gap-24'
            : ''
        "
      >
        <div
          class="grid max-w-3xl gap-8"
          :class="isCentered ? 'mx-auto justify-items-center text-center' : ''"
          data-aos="fade-up"
        >
          <div class="grid gap-5" :class="isCentered ? 'justify-items-center' : ''">
            <DibodevBreadcrumb v-if="props.breadcrumbs.length > 0" :items="props.breadcrumbs" />
            <p v-if="props.eyebrow" class="text-muted text-xs font-medium tracking-[0.08em] uppercase">
              {{ props.eyebrow }}
            </p>
            <h1 class="font-medium tracking-[-0.01em] text-gray-100" :class="titleClass">
              <span v-if="props.titleHighlight1">
                {{ props.titlePart1 }}<span class="text-primary">{{ props.titleHighlight1 }}</span
                >{{ props.titlePart2
                }}<span v-if="props.titleHighlight2" class="text-primary">{{ props.titleHighlight2 }}</span
                >{{ props.titlePart3 }}
              </span>
              <span v-else>{{ props.title ?? $t('home.hero.title') }}</span>
            </h1>
            <p class="max-w-[600px] text-[17px] leading-7 text-gray-200">
              {{ props.description }}
            </p>
          </div>

          <div
            v-if="props.ctaText || props.secondaryCta"
            class="flex flex-wrap items-center gap-3"
            :class="isCentered ? 'justify-center' : ''"
          >
            <DibodevButton
              v-if="props.ctaText && props.ctaPrimaryTo"
              :to="props.ctaPrimaryTo"
              class="w-full sm:w-auto"
              @click="onPrimaryCtaClick"
            >
              {{ props.ctaText }}
            </DibodevButton>
            <DibodevButton
              v-else-if="props.ctaText"
              class="w-full sm:w-auto"
              @click="scrollToTargetSection(props.ctaTarget)"
            >
              {{ props.ctaText }}
            </DibodevButton>

            <DibodevButton
              v-if="props.secondaryCta && props.secondaryCta.to"
              :to="props.secondaryCta.to"
              :outlined="true"
              class="w-full sm:w-auto"
            >
              {{ props.secondaryCta.text }}
            </DibodevButton>
            <DibodevButton
              v-else-if="props.secondaryCta && props.secondaryCta.target"
              :outlined="true"
              class="w-full sm:w-auto"
              @click="scrollToTargetSection(props.secondaryCta.target)"
            >
              {{ props.secondaryCta.text }}
            </DibodevButton>
          </div>

          <DibodevKeyFiguresLine
            v-if="props.stats.length > 0"
            :figures="props.stats"
            :class="isCentered ? 'items-center sm:justify-center' : ''"
          />

          <ul
            v-if="props.reassurances.length > 0"
            class="flex flex-col gap-2.5 text-left text-sm text-gray-200 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2"
            :class="isCentered ? 'sm:justify-center' : ''"
          >
            <li v-for="reassurance in props.reassurances" :key="reassurance" class="flex items-center gap-2">
              <DibodevIcon
                name="Check"
                mode="stroke"
                :width="16"
                :height="16"
                class="text-primary shrink-0"
                aria-hidden="true"
              />
              {{ reassurance }}
            </li>
          </ul>
        </div>

        <div v-if="$slots.aside" class="min-w-0">
          <slot name="aside" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type {
  DibodevLandingAlignment,
  DibodevLandingSecondaryCta,
  DibodevLandingSectionProps,
} from '~/core/types/DibodevLandingSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevBreadcrumb from '~/components/navigations/DibodevBreadcrumb.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevKeyFiguresLine from '~/components/data-displays/DibodevKeyFiguresLine.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Distance kept between the top of the viewport and a section scrolled to (fixed navbar + breathing room). */
const SCROLL_TARGET_OFFSET: number = 96

/** Page header shared by every page, with an optional visual (`aside` slot) and a line of key figures under the buttons. */
const props: DibodevLandingSectionProps = defineProps({
  breadcrumbs: {
    type: Array as PropType<DibodevBreadcrumbItem[]>,
    default: (): DibodevBreadcrumbItem[] => [],
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string | null>,
    default: null,
  },
  titlePart1: { type: String as PropType<string>, default: '' },
  titleHighlight1: { type: String as PropType<string>, default: '' },
  titlePart2: { type: String as PropType<string>, default: '' },
  titleHighlight2: { type: String as PropType<string>, default: '' },
  titlePart3: { type: String as PropType<string>, default: '' },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  ctaText: {
    type: String as PropType<string>,
    default: '',
  },
  ctaTarget: {
    type: String as PropType<string>,
    default: '',
  },
  ctaPrimaryTo: {
    type: String as PropType<string | null>,
    default: null,
  },
  secondaryCta: {
    type: Object as PropType<DibodevLandingSecondaryCta | null>,
    default: null,
  },
  stats: {
    type: Array as PropType<DibodevStatItemProps[]>,
    default: (): DibodevStatItemProps[] => [],
  },
  compactTitle: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  align: {
    type: String as PropType<DibodevLandingAlignment>,
    default: 'left',
  },
  reassurances: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  decorated: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  singleLineTitleOnPhones: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const slots = useSlots()
const { track } = useTracking()

/* COMPUTED */
/** Centred only when asked for and when no visual takes the right-hand column. */
const isCentered: ComputedRef<boolean> = computed((): boolean => props.align === 'center' && !slots.aside)

const titleClass: ComputedRef<string> = computed((): string => {
  if (props.compactTitle) {
    return 'text-[28px] leading-[1.2] sm:text-[34px] lg:text-[38px]'
  }
  const phoneSizeClass: string = props.singleLineTitleOnPhones
    ? 'text-[clamp(1.375rem,7.2vw,2.125rem)] whitespace-nowrap sm:whitespace-normal'
    : 'text-[34px]'
  return `${phoneSizeClass} leading-[1.15] sm:text-[44px] lg:text-[40px] xl:text-[52px]`
})

/* METHODS */
/**
 * Track the contact CTA event when the primary CTA points to the contact page.
 * @returns {void}
 */
function onPrimaryCtaClick(): void {
  if (props.ctaPrimaryTo && props.ctaPrimaryTo.includes('/contact')) {
    track(TRACKING_EVENTS.ctaProjectDiscussion, { location: 'hero' })
  }
}

/**
 * Smoothly scroll to a section of the page, keeping room for the fixed navbar.
 * @param {string} target - CSS selector of the section.
 * @returns {void}
 */
function scrollToTargetSection(target: string): void {
  const targetSection: HTMLElement | null = document.querySelector(target)
  if (targetSection) {
    const top: number = targetSection.getBoundingClientRect().top + window.scrollY - SCROLL_TARGET_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  } else {
    console.warn(`Target section ${target} not found.`)
  }
}
</script>
