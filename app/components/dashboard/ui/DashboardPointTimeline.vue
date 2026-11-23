<template>
  <section
    class="flex shrink-0 flex-col gap-2 border-b border-(--dash-line-soft) bg-(--dash-toolbar) pt-3 pb-2.5 @2xl/page:gap-2.5 @2xl/page:pt-[18px] @2xl/page:pb-4"
    aria-label="Choisir les deux points à comparer"
  >
    <div class="flex flex-wrap items-center gap-x-5 gap-y-1.5 px-4 text-[13px] text-gray-200 md:px-6">
      <p
        class="min-w-0 flex-[1_1_260px] @2xl/page:text-sm @2xl/page:font-medium @2xl/page:text-gray-100"
        aria-live="polite"
      >
        {{ instruction }}
      </p>
      <span class="inline-flex items-center gap-[7px]">
        <span class="bg-primary h-3 w-3 rounded" aria-hidden="true" />
        Point ouvert
      </span>
      <span v-if="props.comparedPointId" class="inline-flex items-center gap-[7px]">
        <span class="border-primary h-3 w-3 rounded border-[1.5px] border-dashed" aria-hidden="true" />
        Comparé à
      </span>
    </div>
    <div ref="scrollContainer" class="dash-scroll-x relative flex gap-2 px-4 py-1 md:px-6">
      <button
        v-for="entry in props.entries"
        :key="entry.id"
        type="button"
        class="flex min-h-14 flex-[1_0_70px] cursor-pointer flex-col items-center justify-center gap-px rounded-xl px-1 py-1.5 transition-colors duration-150 @2xl/page:flex-[1_0_76px]"
        :class="buildPointClasses(entry.id)"
        :aria-pressed="entry.id === props.openedPointId"
        :aria-current="entry.id === props.openedPointId ? 'true' : undefined"
        :aria-label="buildPointLabel(entry)"
        @click="emit('select', entry.id)"
      >
        <span class="text-sm font-medium">{{ entry.id }}</span>
        <span
          class="text-[11.5px] whitespace-nowrap"
          :class="{ 'text-muted': entry.id !== props.openedPointId && entry.id !== props.comparedPointId }"
        >
          {{ entry.dateLabel }}
        </span>
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardPointTimelineProps } from '~/core/types/DashboardPointTimeline'
import type { DashboardPointTimelineEntry } from '~/core/types/DashboardWeeklyPointsPage'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

/** Row of points in time: one is opened (solid violet), another is the one it is compared to (dashed violet). */
const props: DashboardPointTimelineProps = defineProps({
  entries: {
    type: Array as PropType<DashboardPointTimelineEntry[]>,
    required: true,
  },
  openedPointId: {
    type: String,
    required: true,
  },
  comparedPointId: {
    type: String as PropType<string | null>,
    default: null,
  },
  isAwaitingComparedPoint: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'select', pointId: string): void
}>()

const scrollContainer: Ref<HTMLDivElement | null> = ref(null)

const instruction: ComputedRef<string> = computed((): string => {
  if (props.entries.length < 2) {
    return 'Un seul point pour l’instant : la comparaison arrivera avec le suivant.'
  }
  if (props.isAwaitingComparedPoint) {
    return `Touchez un autre point pour le comparer au point ${props.openedPointId}.`
  }
  return 'Touchez un point pour l’ouvrir, un second pour comparer.'
})

/**
 * Styles a point: solid violet when opened, dashed violet when compared, plain otherwise.
 *
 * @param {string} pointId - Id of the point.
 * @returns {string} Its classes.
 */
function buildPointClasses(pointId: string): string {
  if (pointId === props.openedPointId) {
    return 'border border-primary bg-primary text-white'
  }
  if (pointId === props.comparedPointId) {
    return 'border-[1.5px] border-dashed border-primary bg-(--dash-violet-tint) text-primary-dark'
  }
  return 'border border-gray-300 bg-white text-gray-100 hover:border-gray-400 hover:bg-(--dash-row-hover)'
}

/**
 * Names a point for screen readers, with its role in the comparison.
 *
 * @param {DashboardPointTimelineEntry} entry - The point.
 * @returns {string} Its id, its date and whether it is opened or compared.
 */
function buildPointLabel(entry: DashboardPointTimelineEntry): string {
  const name: string = `Point ${entry.id}, ${entry.longDateLabel}`

  if (entry.id === props.openedPointId) {
    return `${name}, point ouvert`
  }
  return entry.id === props.comparedPointId ? `${name}, point de comparaison` : name
}

/**
 * Brings the opened point into view when the row is wider than the screen.
 *
 * @returns {Promise<void>}
 */
async function scrollToOpenedPoint(): Promise<void> {
  await nextTick()
  const container: HTMLDivElement | null = scrollContainer.value
  const openedButton: HTMLElement | null = container?.querySelector<HTMLElement>('[aria-current="true"]') ?? null

  if (!container || !openedButton) {
    return
  }
  container.scrollLeft = openedButton.offsetLeft - (container.clientWidth - openedButton.offsetWidth) / 2
}

watch(
  (): string => `${props.openedPointId}|${props.entries.length}`,
  (): void => {
    scrollToOpenedPoint().catch((): void => undefined)
  },
)

onMounted((): void => {
  scrollToOpenedPoint().catch((): void => undefined)
})
</script>
