<template>
  <DashboardPage title="Audit SEO" icon="gauge">
    <template #actions>
      <DashboardSegmented
        v-model="strategy"
        :options="STRATEGY_OPTIONS"
        screen-reader-label="Appareil"
        compact-on-mobile
      />
      <DashboardButton
        variant="primary"
        size="sm"
        :icon="selectedSummary ? 'refresh-cw' : 'gauge'"
        :loading="isAuditRunning"
        :disabled="!selectedUrl"
        @click="onRunAudit"
      >
        <span class="max-sm:hidden">{{ selectedSummary ? 'Relancer' : 'Analyser' }}</span>
      </DashboardButton>
    </template>

    <div class="grid items-start gap-6 @4xl:grid-cols-[320px_minmax(0,1fr)] @6xl:grid-cols-[360px_minmax(0,1fr)]">
      <div class="@4xl:hidden">
        <DashboardSelect
          v-model="selectedUrl"
          id="audit-page"
          :options="pageOptions"
          screen-reader-label="Page à analyser"
          class="w-full"
        />
      </div>

      <DashboardCard class="sticky top-0 hidden max-h-[calc(100dvh-120px)] flex-col @4xl:flex">
        <div class="border-b border-(--dash-line-soft) p-3">
          <DashboardSearchInput
            v-model="search"
            id="audit-search"
            :placeholder="`Rechercher parmi ${pages.length} pages…`"
          />
        </div>
        <div v-if="loadingPages && pages.length === 0" class="flex flex-col gap-2 p-3">
          <span v-for="index in 6" :key="index" class="dash-skeleton h-14 w-full" />
        </div>
        <ul v-else class="min-h-0 flex-1 overflow-y-auto p-1.5">
          <li v-for="auditPage in listedPages" :key="auditPage.url">
            <button
              type="button"
              class="flex w-full cursor-pointer flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-colors"
              :class="
                auditPage.url === selectedUrl
                  ? 'bg-surface-tint shadow-[inset_0_0_0_1px_var(--color-accent-tint)]'
                  : 'hover:bg-gray-800'
              "
              :aria-current="auditPage.url === selectedUrl ? 'true' : undefined"
              @click="selectedUrl = auditPage.url"
            >
              <span class="truncate text-sm font-medium text-gray-100">{{ auditPage.title }}</span>
              <span class="dash-mono text-muted truncate text-[11.5px]">{{
                DashboardIndexingUtils.path(auditPage.url)
              }}</span>
              <span v-if="scoresOf(auditPage.url)" class="flex gap-1.5">
                <span
                  v-for="(score, index) in scoresOf(auditPage.url)"
                  :key="index"
                  class="rounded-[5px] px-1.5 py-0.5 text-[11px] font-medium tabular-nums"
                  :class="SCORE_CHIP_CLASSES[DashboardFormatUtils.scoreLevel(score)]"
                >
                  {{ score ?? '—' }}
                </span>
              </span>
              <span v-else class="text-[12px] text-(--dash-faint)">Pas encore analysée</span>
            </button>
          </li>
        </ul>
      </DashboardCard>

      <div class="@container flex min-w-0 flex-col gap-5">
        <div class="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div class="min-w-0">
            <p class="dash-label">
              {{ selectedPage ? DashboardIndexingUtils.TYPES[selectedPage.type].label : 'Page' }}
            </p>
            <h2 class="mt-2 text-2xl font-medium tracking-[-0.01em] text-gray-100">
              {{ selectedPage?.title ?? 'Accueil' }}
            </h2>
            <a
              :href="selectedUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="dash-mono text-primary hover:text-primary-dark mt-1 inline-block max-w-full truncate text-[12.5px]"
            >
              {{ selectedUrl }}
            </a>
          </div>
          <div class="text-muted flex flex-col items-end gap-1 text-[13px] max-sm:items-start">
            <span v-if="selectedSummary" class="inline-flex items-center gap-1.5">
              <DashboardIcon name="clock" :size="14" />
              Analysé {{ DashboardFormatUtils.formatRelative(selectedSummary.auditedAt) }}
            </span>
            <span class="inline-flex items-center gap-2.5 text-xs">
              <span class="inline-flex items-center gap-1"
                ><span class="h-2 w-2 rounded-full bg-(--dash-chart-good)" />90–100</span
              >
              <span class="inline-flex items-center gap-1"
                ><span class="h-2 w-2 rounded-full bg-(--dash-chart-average)" />50–89</span
              >
              <span class="inline-flex items-center gap-1"
                ><span class="h-2 w-2 rounded-full bg-(--dash-chart-poor)" />0–49</span
              >
            </span>
          </div>
        </div>

        <div
          v-if="isAuditRunning"
          class="flex items-center gap-3 rounded-xl border border-(--dash-amber-tint) bg-(--dash-amber-wash) px-4 py-3.5 text-[13.5px] text-gray-200"
          role="status"
        >
          <DashboardIcon name="loader-circle" :size="16" class="dash-spin text-(--dash-amber)" />
          Analyse Lighthouse en cours, mobile et bureau : 20 à 60 secondes.
        </div>
        <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
          <DashboardIcon name="circle-alert" :size="16" />
          {{ error }}
        </p>

        <DashboardCard v-if="!strategyReport && !isAuditRunning && !isLoadingReport">
          <DashboardEmptyState
            icon="gauge"
            title="Page pas encore analysée"
            text="Lance une analyse PageSpeed : performance, accessibilité, bonnes pratiques et SEO, sur mobile et sur ordinateur."
          >
            <DashboardButton variant="primary" icon="gauge" :disabled="!selectedUrl" @click="onRunAudit">
              Analyser la page
            </DashboardButton>
          </DashboardEmptyState>
        </DashboardCard>

        <div v-else-if="isLoadingReport && !strategyReport" class="grid gap-3">
          <span class="dash-skeleton h-[150px] w-full" />
          <span class="dash-skeleton h-24 w-full" />
        </div>

        <template v-else-if="strategyReport">
          <p
            v-if="strategyReport.runtimeError"
            class="flex gap-2.5 rounded-xl bg-(--dash-red-tint) p-3.5 text-[13.5px] text-(--dash-red)"
            role="alert"
          >
            <DashboardIcon name="circle-alert" :size="16" class="mt-0.5" />
            {{ strategyReport.runtimeError }}
          </p>

          <div
            class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-300 bg-gray-300 @xl:grid-cols-4"
          >
            <div
              v-for="category in categories"
              :key="category.id"
              class="flex flex-col items-center gap-3 bg-white px-3 pt-5 pb-4 text-center"
            >
              <DashboardScoreRing :score="category.score" :size="84" :stroke-width="7" />
              <p class="text-[13.5px] font-medium text-gray-100">
                {{ category.label }}
                <small class="text-muted mt-0.5 block text-xs font-normal">{{ category.hint }}</small>
              </p>
            </div>
          </div>

          <DashboardCard
            v-if="metrics.length > 0"
            title="Mesures clés"
            description="Seuils de Google : vert rapide, orange à améliorer, rouge lent."
            divided
          >
            <div class="overflow-hidden rounded-b-xl">
              <div class="-mr-px -mb-px flex flex-wrap">
                <div
                  v-for="metric in metrics"
                  :key="metric.id"
                  class="grow basis-1/2 border-r border-b border-(--dash-line-soft) px-4 py-3.5 @lg:basis-1/3 @3xl:basis-1/5"
                >
                  <p class="dash-label flex items-center gap-1.5">
                    <span class="h-[7px] w-[7px] rounded-full" :class="METRIC_DOT_CLASSES[metric.level]" />
                    {{ metric.label }}
                  </p>
                  <p class="mt-2 text-xl font-medium tracking-[-0.01em] text-gray-100 tabular-nums">
                    {{ metric.displayValue }}
                  </p>
                </div>
              </div>
            </div>
          </DashboardCard>

          <div class="grid items-start gap-5 @4xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <DashboardCard
              title="Aperçu"
              :description="strategy === 'mobile' ? 'Capture Lighthouse, mobile' : 'Capture Lighthouse, ordinateur'"
              divided
            >
              <div class="grid min-h-[260px] place-items-center rounded-b-xl bg-gray-800 p-5">
                <template v-if="strategyReport.screenshotDataUrl">
                  <div
                    v-if="strategy === 'mobile'"
                    class="w-[168px] rounded-[22px] bg-(--dash-device-frame) p-1.5 shadow-[0_12px_24px_-12px_rgba(20,20,20,0.45)]"
                  >
                    <img
                      :src="strategyReport.screenshotDataUrl"
                      alt="Capture mobile de la page"
                      class="w-full rounded-[17px]"
                    />
                  </div>
                  <div
                    v-else
                    class="w-full overflow-hidden rounded-[10px] bg-white shadow-[0_0_0_1px_rgba(20,20,20,0.12),0_12px_24px_-16px_rgba(20,20,20,0.35)]"
                  >
                    <div
                      class="flex h-6 items-center gap-[5px] border-b border-(--dash-line-soft) px-2.5"
                      aria-hidden="true"
                    >
                      <i class="h-[7px] w-[7px] rounded-full bg-gray-700" />
                      <i class="h-[7px] w-[7px] rounded-full bg-gray-700" />
                      <i class="h-[7px] w-[7px] rounded-full bg-gray-700" />
                    </div>
                    <img :src="strategyReport.screenshotDataUrl" alt="Capture ordinateur de la page" class="w-full" />
                  </div>
                </template>
                <p v-else class="text-muted text-[13px]">Pas de capture pour cette analyse.</p>
              </div>
            </DashboardCard>

            <DashboardCard title="À améliorer" :description="improveDescription" divided>
              <ul v-if="failingAudits.length > 0" class="px-2 pt-1 pb-2">
                <li
                  v-for="(audit, index) in failingAudits"
                  :key="audit.id"
                  class="flex items-start gap-3 px-2.5 py-3"
                  :class="{ 'border-t border-(--dash-line-soft)': index > 0 }"
                >
                  <span
                    class="mt-[5px] h-2.5 w-2.5 shrink-0"
                    :class="
                      (audit.score ?? 0) < 0.5
                        ? 'bg-(--dash-chart-poor) [clip-path:polygon(50%_0,100%_100%,0_100%)]'
                        : 'rounded-sm bg-(--dash-chart-average)'
                    "
                    aria-hidden="true"
                  />
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-100">{{ audit.title }}</p>
                    <p v-if="audit.displayValue" class="dash-mono mt-0.5 text-xs text-gray-200">
                      {{ audit.displayValue }}
                    </p>
                    <p v-if="audit.description" class="text-muted mt-1 line-clamp-2 text-[12.5px]">
                      {{ plainText(audit.description) }}
                    </p>
                  </div>
                </li>
              </ul>
              <DashboardEmptyState
                v-else
                icon="circle-check"
                title="Rien de bloquant"
                text="Tous les audits passent sur cette page."
              />
            </DashboardCard>
          </div>

          <div
            class="border-accent-tint bg-surface-tint flex flex-wrap items-center gap-4 rounded-xl border px-[18px] py-4"
          >
            <DashboardIcon name="external-link" :size="18" class="text-primary-dark" />
            <p class="min-w-0 flex-1 text-[13.5px] text-gray-200">
              <strong class="block text-[14.5px] font-medium text-gray-100"
                >Rapport complet sur PageSpeed Insights</strong
              >
              Toutes les recommandations, la cascade réseau et la capture en haute définition.
            </p>
            <DashboardButton variant="outline" size="sm" trailing-icon="arrow-up-right" :href="pageSpeedUrl"
              >Ouvrir</DashboardButton
            >
          </div>
        </template>
      </div>
    </div>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardAuditReturn } from '~/composables/useDashboardAudit'
import type {
  DashboardAuditCategory,
  DashboardAuditCategoryLabel,
  DashboardAuditMetric,
} from '~/core/types/DashboardAuditPage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardScoreLevel, DashboardSegmentOption, DashboardSelectOption } from '~/core/types/Dashboard'
import type { AuditablePage } from '~/composables/useDashboardAudit'
import type {
  LighthouseAuditItem,
  LighthouseCategoryId,
  LighthouseCategoryScore,
  LighthouseReportResponse,
  LighthouseStrategyReport,
  LighthouseSummary,
} from '~~/server/types/lighthouse'
import { computed, onMounted, ref, watch } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardScoreRing from '~/components/dashboard/ui/DashboardScoreRing.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import DashboardSelect from '~/components/dashboard/ui/DashboardSelect.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { useDashboardAudit } from '~/composables/useDashboardAudit'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Audit SEO · Dibodev Admin',
})

const route: ReturnType<typeof useRoute> = useRoute()

const {
  pages,
  summaries,
  reports,
  loadingPages,
  runningUrls,
  error,
  loadAuditPages,
  loadAuditHistory,
  loadStoredReport,
  runAudit,
}: UseDashboardAuditReturn = useDashboardAudit()

const { showToast }: UseDashboardToastReturn = useDashboardToast()

const SITE_HOME_URL: string = 'https://dibodev.fr/'

const STRATEGY_OPTIONS: DashboardSegmentOption[] = [
  { value: 'mobile', label: 'Mobile', icon: 'smartphone' },
  { value: 'desktop', label: 'Bureau', icon: 'monitor' },
]

const CATEGORY_LABELS: Record<LighthouseCategoryId, DashboardAuditCategoryLabel> = {
  performance: { label: 'Performance', hint: 'Vitesse de chargement' },
  accessibility: { label: 'Accessibilité', hint: 'Lisible par tous' },
  'best-practices': { label: 'Bonnes pratiques', hint: 'Sécurité et code' },
  seo: { label: 'SEO', hint: 'Lu par Google' },
}

const CATEGORY_ORDER: LighthouseCategoryId[] = ['performance', 'accessibility', 'best-practices', 'seo']

const SCORE_CHIP_CLASSES: Record<DashboardScoreLevel, string> = {
  good: 'bg-(--dash-green-tint) text-(--dash-green)',
  average: 'bg-(--dash-amber-tint) text-(--dash-amber)',
  poor: 'bg-(--dash-red-tint) text-(--dash-red)',
  empty: 'text-(--dash-faint)',
}

const METRIC_DOT_CLASSES: Record<DashboardScoreLevel, string> = {
  good: 'bg-(--dash-chart-good)',
  average: 'bg-(--dash-chart-average)',
  poor: 'bg-(--dash-chart-poor)',
  empty: 'bg-(--dash-chart-empty)',
}

const METRIC_IDS: Record<string, string> = {
  'first-contentful-paint': 'FCP',
  'largest-contentful-paint': 'LCP',
  'total-blocking-time': 'TBT',
  'cumulative-layout-shift': 'CLS',
  'speed-index': 'Speed Index',
}

const strategy: Ref<string> = ref('mobile')
const search: Ref<string> = ref('')
const selectedUrl: Ref<string> = ref(typeof route.query.url === 'string' ? route.query.url : SITE_HOME_URL)
const isLoadingReport: Ref<boolean> = ref(false)

const listedPages: ComputedRef<AuditablePage[]> = computed((): AuditablePage[] => {
  const needle: string = search.value.trim().toLowerCase()
  const filtered: AuditablePage[] = pages.value.filter(
    (auditPage: AuditablePage): boolean =>
      !needle || `${auditPage.title} ${auditPage.url}`.toLowerCase().includes(needle),
  )
  return [...filtered].sort((a: AuditablePage, b: AuditablePage): number => {
    const auditedA: number = summaries.value[a.url] ? 0 : 1
    const auditedB: number = summaries.value[b.url] ? 0 : 1
    return auditedA - auditedB
  })
})

const pageOptions: ComputedRef<DashboardSelectOption[]> = computed((): DashboardSelectOption[] =>
  (pages.value.length > 0 ? pages.value : [{ url: SITE_HOME_URL, title: 'Accueil', type: 'page' as const }]).map(
    (auditPage: AuditablePage): DashboardSelectOption => ({
      value: auditPage.url,
      label: `${auditPage.title}${summaries.value[auditPage.url] ? '' : ' (pas encore analysée)'}`,
    }),
  ),
)

const selectedPage: ComputedRef<AuditablePage | null> = computed(
  (): AuditablePage | null =>
    pages.value.find((auditPage: AuditablePage): boolean => auditPage.url === selectedUrl.value) ?? null,
)

const selectedSummary: ComputedRef<LighthouseSummary | null> = computed(
  (): LighthouseSummary | null => summaries.value[selectedUrl.value] ?? null,
)

const report: ComputedRef<LighthouseReportResponse | null> = computed(
  (): LighthouseReportResponse | null => reports.value[selectedUrl.value] ?? null,
)

const strategyReport: ComputedRef<LighthouseStrategyReport | null> = computed((): LighthouseStrategyReport | null =>
  report.value ? (strategy.value === 'mobile' ? report.value.mobile : report.value.desktop) : null,
)

const isAuditRunning: ComputedRef<boolean> = computed((): boolean => runningUrls.value.includes(selectedUrl.value))

const categories: ComputedRef<DashboardAuditCategory[]> = computed((): DashboardAuditCategory[] =>
  CATEGORY_ORDER.map((id: LighthouseCategoryId): DashboardAuditCategory => {
    const found: LighthouseCategoryScore | undefined = strategyReport.value?.categories.find(
      (category: LighthouseCategoryScore): boolean => category.id === id,
    )
    return {
      id,
      ...CATEGORY_LABELS[id],
      score: typeof found?.score === 'number' ? Math.round(found.score * 100) : null,
    }
  }),
)

const metrics: ComputedRef<DashboardAuditMetric[]> = computed((): DashboardAuditMetric[] =>
  Object.entries(METRIC_IDS).flatMap(([id, label]: [string, string]): DashboardAuditMetric[] => {
    const audit: LighthouseAuditItem | undefined = strategyReport.value?.audits.find(
      (item: LighthouseAuditItem): boolean => item.id === id,
    )
    if (!audit?.displayValue) return []
    const level: DashboardScoreLevel = DashboardFormatUtils.scoreLevel(audit.score === null ? null : audit.score * 100)
    return [{ id, label, displayValue: audit.displayValue, score: audit.score, level }]
  }),
)

const failingAudits: ComputedRef<LighthouseAuditItem[]> = computed((): LighthouseAuditItem[] =>
  (strategyReport.value?.audits ?? [])
    .filter(
      (audit: LighthouseAuditItem): boolean => audit.score !== null && audit.score < 0.9 && !(audit.id in METRIC_IDS),
    )
    .sort((a: LighthouseAuditItem, b: LighthouseAuditItem): number => (a.score ?? 0) - (b.score ?? 0))
    .slice(0, 8),
)

const improveDescription: ComputedRef<string> = computed((): string => {
  const passed: number = (strategyReport.value?.audits ?? []).filter(
    (audit: LighthouseAuditItem): boolean => audit.score !== null && audit.score >= 0.9,
  ).length
  return `Du plus lourd au plus léger. ${DashboardFormatUtils.plural(passed, 'audit réussi', 'audits réussis')}.`
})

const pageSpeedUrl: ComputedRef<string> = computed(
  (): string =>
    `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(selectedUrl.value)}&form_factor=${strategy.value}`,
)

/**
 * Last mobile or desktop scores of a page, as whole numbers.
 *
 * @param {string} url - Page URL.
 * @returns {Array<number | null> | null} The four scores, or null when never audited.
 */
function scoresOf(url: string): Array<number | null> | null {
  const summary: LighthouseSummary | undefined = summaries.value[url]
  if (!summary) return null
  const scores: Record<LighthouseCategoryId, number | null> =
    strategy.value === 'mobile' ? summary.mobile.scores : summary.desktop.scores
  return CATEGORY_ORDER.map((id: LighthouseCategoryId): number | null => {
    const score: number | null = scores[id]
    return score === null ? null : Math.round(score * 100)
  })
}

/**
 * Lighthouse descriptions are Markdown: keep the text of the links, drop the rest of the syntax.
 *
 * @param {string} markdown - The description.
 * @returns {string} Plain text.
 */
function plainText(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_]/g, '')
    .trim()
}

/**
 * Loads the last stored report of the selected page.
 *
 * @returns {Promise<void>}
 */
async function loadSelectedReport(): Promise<void> {
  if (!selectedSummary.value || report.value) return
  isLoadingReport.value = true
  await loadStoredReport(selectedUrl.value)
  isLoadingReport.value = false
}

/**
 * Runs a new PageSpeed analysis of the selected page.
 *
 * @returns {Promise<void>}
 */
async function onRunAudit(): Promise<void> {
  const url: string = selectedUrl.value
  const result: LighthouseReportResponse | null = await runAudit(url)
  if (result) {
    showToast({
      tone: 'amber',
      icon: 'gauge',
      title: 'Analyse terminée',
      text: `${selectedPage.value?.title ?? url} : mobile et bureau.`,
    })
  } else {
    showToast({
      tone: 'red',
      title: 'L’analyse a échoué',
      text: 'PageSpeed n’a pas répondu. Réessaie dans une minute.',
    })
  }
}

watch(selectedUrl, (): void => {
  loadSelectedReport().catch((): void => undefined)
})

onMounted((): void => {
  loadAuditPages().catch((): void => undefined)
  loadAuditHistory()
    .then((): Promise<void> => loadSelectedReport())
    .catch((): void => undefined)
})
</script>
