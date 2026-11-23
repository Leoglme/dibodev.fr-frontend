<template>
  <article class="grid grid-cols-1 items-start gap-x-10 gap-y-8 @5xl/page:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
    <div class="flex min-w-0 flex-col gap-8 @2xl/page:gap-9">
      <header class="flex flex-col gap-2.5">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p class="dash-label min-w-0 flex-1">{{ pointLabel }}</p>
          <DashboardButton variant="outline" icon="copy" class="max-md:h-11" @click="emit('copy')">
            Copier le texte
          </DashboardButton>
        </div>
        <h2
          class="text-[25px] leading-[1.2] font-medium tracking-[-0.02em] text-balance text-gray-100 @2xl/page:text-[30px]"
        >
          {{ props.openedPoint.headline }}
        </h2>
        <p v-if="props.openedPoint.context" class="text-[15.5px] text-gray-200 @2xl/page:text-[16.5px]">
          {{ props.openedPoint.context }}
        </p>
      </header>

      <section v-for="section in sentenceSections" :key="section.title" class="flex flex-col gap-3">
        <h3 class="text-lg font-medium tracking-[-0.01em] text-gray-100">{{ section.title }}</h3>
        <ul class="flex list-disc flex-col gap-2 pl-5 text-[14.5px] text-gray-200">
          <li v-for="(sentence, sentenceIndex) in section.sentences" :key="sentenceIndex">{{ sentence }}</li>
        </ul>
      </section>

      <section v-if="doneGroups.length > 0" class="flex flex-col gap-4">
        <h3 class="text-lg font-medium tracking-[-0.01em] text-gray-100">Ce qui a été fait</h3>
        <div v-for="group in doneGroups" :key="group.kind" class="flex flex-col">
          <p class="dash-label pb-2">{{ group.label }}</p>
          <ul>
            <li
              v-for="(doneEntry, entryIndex) in group.entries"
              :key="entryIndex"
              class="flex items-center gap-4 border-t border-(--dash-line-soft) py-2.5"
            >
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-100">{{ doneEntry.title }}</p>
                <p v-if="doneEntry.detail" class="text-muted text-[13px]">{{ doneEntry.detail }}</p>
                <p v-if="doneEntry.webUrl" class="text-muted text-[13px] [overflow-wrap:anywhere]">
                  {{ WeeklyPointUtils.formatUrlForDisplay(doneEntry.webUrl) }}
                </p>
              </div>
              <a
                v-if="doneEntry.webUrl"
                :href="doneEntry.webUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-dark hover:text-primary inline-flex min-h-11 shrink-0 items-center gap-1.5 text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
                :aria-label="`Ouvrir « ${doneEntry.title} » dans un nouvel onglet`"
              >
                Ouvrir
                <DashboardIcon name="arrow-up-right" :size="15" :stroke-width="2" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <section class="flex min-w-0 flex-col gap-4" aria-labelledby="weekly-report-figures">
      <div>
        <h3 id="weekly-report-figures" class="text-lg font-medium tracking-[-0.01em] text-gray-100">Les chiffres</h3>
        <p class="text-muted mt-0.5 text-[13px]">{{ figuresDescription }}</p>
      </div>
      <DashboardChannelMetricsCard
        v-for="channelComparison in measuredChannelComparisons"
        :key="channelComparison.channel.key"
        :channel-comparison="channelComparison"
      />
      <p v-if="measuredChannelComparisons.length === 0" class="text-muted text-[13px]">
        Aucun chiffre relevé pour ce point.
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type { DashboardWeeklyChannelComparison, DashboardWeeklyDoneGroup } from '~/core/types/DashboardWeeklyPointsPage'
import type {
  DashboardWeeklyReportPanelProps,
  DashboardWeeklyReportSection,
} from '~/core/types/DashboardWeeklyReportPanel'
import { computed } from 'vue'
import DashboardChannelMetricsCard from '~/components/dashboard/cards/DashboardChannelMetricsCard.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** Reading view of a whole weekly point: the story on the left, the figures by channel on the right. */
const props: DashboardWeeklyReportPanelProps = defineProps({
  openedPoint: {
    type: Object as PropType<DashboardWeeklyPoint>,
    required: true,
  },
  comparedPoint: {
    type: Object as PropType<DashboardWeeklyPoint | null>,
    default: null,
  },
  channelComparisons: {
    type: Array as PropType<DashboardWeeklyChannelComparison[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'copy'): void
}>()

const pointLabel: ComputedRef<string> = computed(
  (): string => `${WeeklyPointUtils.formatLongDay(props.openedPoint.date, true)} · Point ${props.openedPoint.id}`,
)

const sentenceSections: ComputedRef<DashboardWeeklyReportSection[]> = computed((): DashboardWeeklyReportSection[] =>
  [
    { title: 'Ce qui explique ces chiffres', sentences: props.openedPoint.explanations },
    { title: 'Décisions', sentences: props.openedPoint.decisions },
    { title: 'À suivre', sentences: props.openedPoint.followUps },
  ].filter((section: DashboardWeeklyReportSection): boolean => section.sentences.length > 0),
)

const doneGroups: ComputedRef<DashboardWeeklyDoneGroup[]> = computed((): DashboardWeeklyDoneGroup[] =>
  WeeklyPointUtils.groupDoneItems(props.openedPoint.doneItems),
)

const measuredChannelComparisons: ComputedRef<DashboardWeeklyChannelComparison[]> = computed(
  (): DashboardWeeklyChannelComparison[] =>
    props.channelComparisons.filter(
      (channelComparison: DashboardWeeklyChannelComparison): boolean => channelComparison.metrics.length > 0,
    ),
)

const figuresDescription: ComputedRef<string> = computed((): string => {
  const weekRange: string = WeeklyPointUtils.formatWeekRange(props.openedPoint.weekStart, props.openedPoint.weekEnd)
  const weekLabel: string = weekRange ? `Semaine ${weekRange}` : `Point ${props.openedPoint.id}`

  return props.comparedPoint ? `${weekLabel}, comparée au point ${props.comparedPoint.id}.` : `${weekLabel}.`
})
</script>
