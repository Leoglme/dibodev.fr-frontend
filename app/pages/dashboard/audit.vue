<template>
  <div class="flex min-w-0 flex-1 flex-col overflow-x-hidden px-4 py-8 sm:px-6 sm:py-12">
    <!-- Vue liste des pages -->
    <template v-if="!reportUrlParam">
      <header class="mb-8">
        <h1 class="text-2xl font-semibold text-gray-100">Audit SEO & Performance</h1>
        <p class="mt-2 text-gray-200">
          Cliquez sur une page pour ouvrir son rapport Lighthouse (SEO, performance, accessibilité, bonnes pratiques).
          Le rapport se charge automatiquement.
        </p>
      </header>

      <DibodevAlert v-if="error" :message="error" variant="error" dismissible @hide="error = ''" />

      <div class="flex min-w-0 flex-col gap-4">
        <div class="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="w-full min-w-0 flex-1 sm:max-w-md">
            <DibodevSearchBar title="Recherche" placeholder="Titre ou URL…" v-model:value="searchText" />
          </div>
          <DibodevButton class="w-full sm:w-auto" :disabled="loading" @click="fetchPages(true)">
            <span
              v-if="loading"
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
            />
            {{ loading ? 'Chargement…' : 'Actualiser la liste' }}
          </DibodevButton>
        </div>

        <div v-if="loading && items.length === 0" class="flex items-center gap-2 text-gray-200">
          <DibodevSpinner :size="24" />
          Chargement…
        </div>

        <div
          v-else-if="filteredItems.length === 0"
          class="rounded-xl border border-gray-600 bg-gray-800 p-8 text-center text-gray-200"
        >
          {{ items.length === 0 ? 'Aucune page (vérifiez le sitemap).' : 'Aucun résultat pour la recherche.' }}
        </div>

        <ul v-else class="flex w-full min-w-0 flex-col gap-3">
          <li v-for="item in filteredItems" :key="item.url" class="w-full min-w-0">
            <NuxtLink
              :to="listItemToQuery(item.url)"
              class="group hover:border-primary flex w-full min-w-0 items-center justify-between gap-3 overflow-hidden rounded-xl border border-gray-600 bg-gray-800 px-3 py-3 transition-colors hover:bg-gray-700 sm:px-4 sm:py-4"
            >
              <div class="min-w-0 flex-1 overflow-hidden">
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span class="group-hover:text-primary font-medium break-words text-gray-100">{{ item.title }}</span>
                  <span
                    class="bg-primary-light/20 text-primary-light shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                  >
                    {{ item.type }}
                  </span>
                </div>
                <p class="mt-1 text-sm break-all text-gray-200">{{ item.url }}</p>
              </div>
              <span class="group-hover:text-primary shrink-0 text-gray-200" aria-hidden="true">
                <DibodevIcon name="ChevronRight" class="h-5 w-5" mode="stroke" />
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </template>

    <!-- Vue rapport (page dédiée par URL) -->
    <template v-else>
      <div class="mx-auto w-full max-w-4xl min-w-0">
        <DibodevLink
          :link="localePath('/dashboard/audit')"
          color="rgba(255, 255, 255, 0.7)"
          class="mb-4 inline-flex items-center gap-2 text-sm transition-colors hover:text-gray-100 sm:mb-6"
        >
          <DibodevIcon name="ArrowLeft" class="h-4 w-4 shrink-0" mode="stroke" />
          <span class="break-words">Retour à la liste des pages</span>
        </DibodevLink>

        <div v-if="reportLoading" class="flex flex-col items-center justify-center gap-4 py-12 text-center sm:py-20">
          <DibodevSpinner :size="48" />
          <p class="max-w-sm text-sm text-gray-200 sm:text-base">
            Analyse Lighthouse en cours (mobile + desktop)… 20–60 secondes.
          </p>
        </div>

        <DibodevAlert
          v-else-if="reportError"
          :message="reportError"
          variant="error"
          dismissible
          @hide="reportError = ''"
        />

        <template v-else-if="report !== null">
          <header class="mb-6 sm:mb-8">
            <h1 class="text-xl font-semibold text-gray-100 sm:text-2xl">Rapport d’audit</h1>
            <p class="mt-2 text-sm break-all text-gray-200 sm:text-base">{{ report.finalUrl }}</p>
          </header>

          <!-- Onglets Mobile / Desktop -->
          <nav
            class="mb-6 flex flex-col gap-2 rounded-xl border border-gray-600 bg-gray-800 p-2 sm:mb-8 sm:flex-row sm:gap-2 sm:p-1"
            aria-label="Stratégie d’analyse"
          >
            <button
              type="button"
              class="flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              :class="
                auditTab === 'mobile'
                  ? 'bg-primary text-gray-100'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-gray-100'
              "
              @click="auditTab = 'mobile'"
            >
              <DibodevIcon name="Smartphone" class="h-4 w-4 shrink-0" mode="stroke" />
              Mobile
            </button>
            <button
              type="button"
              class="flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              :class="
                auditTab === 'desktop'
                  ? 'bg-primary text-gray-100'
                  : 'text-gray-200 hover:bg-gray-700 hover:text-gray-100'
              "
              @click="auditTab = 'desktop'"
            >
              <DibodevIcon name="Monitor" class="h-4 w-4 shrink-0" mode="stroke" />
              <span class="sm:hidden">Desktop</span>
              <span class="hidden sm:inline">Bureau (desktop)</span>
            </button>
          </nav>

          <template v-if="currentStrategyReport">
            <p class="mb-4 text-sm text-gray-200 sm:mb-6">
              {{ auditTab === 'mobile' ? 'Analyse mobile' : 'Analyse bureau' }} ·
              {{ formatFetchTime(currentStrategyReport.fetchTime) }}
            </p>

            <section
              v-if="currentStrategyReport.runtimeError"
              class="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300 sm:mb-8 sm:p-4 sm:text-base"
            >
              {{ currentStrategyReport.runtimeError }}
            </section>

            <template v-else>
              <!-- 1. Scores Lighthouse -->
              <section class="mb-8 sm:mb-12" aria-labelledby="scores-heading">
                <h2 id="scores-heading" class="mb-3 text-base font-semibold text-gray-100 sm:mb-4 sm:text-lg">
                  Scores Lighthouse
                </h2>
                <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
                  <div
                    v-for="cat in currentStrategyReport.categories"
                    :key="cat.id"
                    class="rounded-xl border border-gray-600 bg-gray-800 p-4 text-center shadow-lg sm:rounded-2xl sm:p-6"
                  >
                    <div
                      class="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold tabular-nums sm:mb-4 sm:h-24 sm:w-24 sm:text-3xl"
                      :class="scoreRingClass(cat.score)"
                    >
                      {{ scoreLabel(cat.score) }}
                    </div>
                    <p class="text-xs font-semibold tracking-wider text-gray-200 uppercase">
                      {{ categoryLabel(cat.id) }}
                    </p>
                    <p class="mt-1 line-clamp-2 text-xs text-gray-200 sm:text-sm">{{ cat.title }}</p>
                  </div>
                </div>
              </section>

              <!-- 2. Bandeau rapport complet PageSpeed -->
              <section
                class="border-primary/50 bg-primary/10 mb-8 rounded-xl border-2 p-4 sm:mb-10 sm:rounded-2xl sm:p-6"
                aria-labelledby="full-report-heading"
              >
                <h2 id="full-report-heading" class="text-base font-semibold text-gray-100 sm:text-lg">
                  Rapport complet (screenshot, tous les détails)
                </h2>
                <p class="mt-2 text-sm text-gray-200">
                  Pour la capture d’écran, les métriques détaillées et l’ensemble des recommandations, ouvrez le rapport
                  officiel PageSpeed Insights ({{ auditTab === 'mobile' ? 'mobile' : 'bureau' }}).
                </p>
                <a
                  :href="currentPageSpeedReportUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-primary hover:bg-primary-dark mt-4 inline-flex w-full flex-wrap items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium text-white transition-colors sm:mt-4 sm:w-auto sm:justify-start sm:px-5"
                >
                  <span class="text-center sm:text-left">Ouvrir sur PageSpeed Insights</span>
                  <DibodevIcon name="ArrowRight" class="h-5 w-5 shrink-0" mode="stroke" />
                </a>
              </section>

              <!-- 3. Capture d’écran -->
              <section
                v-if="currentStrategyReport.screenshotDataUrl"
                class="mb-8 sm:mb-10"
                aria-labelledby="screenshot-heading"
              >
                <h2 id="screenshot-heading" class="mb-3 text-base font-semibold text-gray-100 sm:mb-4 sm:text-lg">
                  Aperçu de la page
                </h2>
                <div class="overflow-hidden rounded-xl border border-gray-600 bg-gray-900 shadow-lg">
                  <img
                    :src="currentStrategyReport.screenshotDataUrl"
                    :alt="auditTab === 'mobile' ? 'Capture d’écran mobile' : 'Capture d’écran bureau'"
                    class="block max-h-[280px] w-full max-w-full object-contain sm:max-h-[400px] lg:max-h-[480px]"
                  />
                </div>
              </section>

              <!-- 4. Audits détaillés -->
              <section v-if="currentStrategyReport.audits.length > 0" aria-labelledby="audits-heading">
                <h2 id="audits-heading" class="mb-3 text-base font-semibold text-gray-100 sm:mb-4 sm:text-lg">
                  Détail des audits
                </h2>
                <ul class="flex flex-col gap-3">
                  <li
                    v-for="audit in currentStrategyReport.audits"
                    :key="audit.id"
                    class="flex flex-col gap-2 rounded-xl border border-gray-600 bg-gray-800 p-3 sm:flex-row sm:items-start sm:justify-between sm:p-4"
                  >
                    <div class="min-w-0 flex-1">
                      <h3 class="text-sm font-medium text-gray-100 sm:text-base">{{ audit.title }}</h3>
                      <p
                        v-if="audit.description"
                        class="mt-1 text-xs text-gray-200 sm:text-sm"
                        v-html="audit.description"
                      />
                      <span v-if="audit.displayValue" class="mt-1 block text-xs text-gray-200">
                        {{ audit.displayValue }}
                      </span>
                    </div>
                    <span
                      class="w-fit shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium"
                      :class="auditScoreClass(audit.score)"
                    >
                      {{ auditScoreLabel(audit.score) }}
                    </span>
                  </li>
                </ul>
              </section>
            </template>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import type { Ref } from 'vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import type { LighthouseReportResponse, LighthouseStrategyReport } from '~~/server/types/lighthouse'
import type { LighthouseCategoryId } from '~~/server/types/lighthouse'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

definePageMeta({
  layout: 'dashboard',
})

const route: RouteLocationNormalizedLoaded = useRoute()
const localePath: (path: string) => string = useLocalePath()

const reportUrlParam = computed((): string | null => {
  const url: unknown = route.query?.url
  return typeof url === 'string' && url.trim().length > 0 ? url.trim() : null
})

useHead({
  title: computed((): string =>
    reportUrlParam.value ? `Audit — ${reportUrlParam.value}` : 'Audit SEO & Performance — Dashboard',
  ),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type SitemapPageItem = {
  url: string
  title: string
  type: string
}

type SitemapPagesResponse = {
  items: SitemapPageItem[]
}

const items: Ref<SitemapPageItem[]> = ref([])
const loading: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')
const searchText: Ref<string> = ref('')
const report: Ref<LighthouseReportResponse | null> = ref(null)
const reportLoading: Ref<boolean> = ref(false)
const reportError: Ref<string> = ref('')
const auditTab: Ref<'mobile' | 'desktop'> = ref('mobile')

const currentStrategyReport = computed((): LighthouseStrategyReport | null => {
  const r: LighthouseReportResponse | null = report.value
  if (r === null) return null
  return auditTab.value === 'mobile' ? r.mobile : r.desktop
})

const currentPageSpeedReportUrl = computed((): string => {
  if (report.value === null) return 'https://pagespeed.web.dev/'
  const url: string = encodeURIComponent(report.value.finalUrl)
  const formFactor: string = auditTab.value === 'mobile' ? 'mobile' : 'desktop'
  return `https://pagespeed.web.dev/analysis?url=${url}&form_factor=${formFactor}`
})

const filteredItems = computed((): SitemapPageItem[] => {
  const q: string = searchText.value.trim().toLowerCase()
  if (q.length === 0) return items.value
  return items.value.filter(
    (row: SitemapPageItem): boolean => row.title.toLowerCase().includes(q) || row.url.toLowerCase().includes(q),
  )
})

function listItemToQuery(pageUrl: string): { path: string; query: { url: string } } {
  return {
    path: localePath('/dashboard/audit'),
    query: { url: pageUrl },
  }
}

function categoryLabel(id: LighthouseCategoryId): string {
  const labels: Record<LighthouseCategoryId, string> = {
    performance: 'Performance',
    accessibility: 'Accessibilité',
    'best-practices': 'Bonnes pratiques',
    seo: 'SEO',
  }
  return labels[id] ?? id
}

function scoreLabel(score: number | null): string {
  if (score === null) return '—'
  return String(Math.round(score * 100))
}

function scoreRingClass(score: number | null): string {
  if (score === null) return 'bg-gray-600 text-gray-200'
  const pct: number = score * 100
  if (pct >= 90) return 'bg-emerald-500/20 text-emerald-400 ring-4 ring-emerald-500/40'
  if (pct >= 50) return 'bg-amber-500/20 text-amber-400 ring-4 ring-amber-500/40'
  return 'bg-red-500/20 text-red-400 ring-4 ring-red-500/40'
}

function auditScoreLabel(score: number | null): string {
  if (score === null) return 'N/A'
  if (score >= 0.9) return 'OK'
  if (score >= 0.5) return 'À améliorer'
  return 'Échec'
}

function auditScoreClass(score: number | null): string {
  if (score === null) return 'bg-gray-600 text-gray-200'
  if (score >= 0.9) return 'bg-emerald-500/20 text-emerald-400'
  if (score >= 0.5) return 'bg-amber-500/20 text-amber-400'
  return 'bg-red-500/20 text-red-400'
}

function formatFetchTime(iso: string): string {
  try {
    const d: Date = new Date(iso)
    return d.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

async function fetchPages(force: boolean = false): Promise<void> {
  const cacheKey: string = 'dashboard-audit-sitemap-pages'
  const cached: Ref<SitemapPagesResponse | null> = useState<SitemapPagesResponse | null>(cacheKey)
  const cachedData: SitemapPagesResponse | null | undefined = cached.value
  if (!force && cachedData != null && Array.isArray(cachedData.items)) {
    items.value = cachedData.items
    loading.value = false
    return
  }
  loading.value = true
  error.value = ''
  try {
    const data: SitemapPagesResponse = await $fetch<SitemapPagesResponse>('/api/dashboard/sitemap-pages')
    items.value = data.items ?? []
    cached.value = data
  } catch (e: unknown) {
    const message: string = e instanceof Error ? e.message : 'Erreur lors du chargement.'
    error.value = message
    items.value = []
  } finally {
    loading.value = false
  }
}

async function fetchReport(url: string): Promise<void> {
  reportLoading.value = true
  reportError.value = ''
  report.value = null
  try {
    const data: LighthouseReportResponse = await $fetch<LighthouseReportResponse>('/api/dashboard/lighthouse', {
      query: { url },
    })
    report.value = data
  } catch (e: unknown) {
    const message: string = e instanceof Error ? e.message : 'Erreur lors de l’audit.'
    reportError.value = message
  } finally {
    reportLoading.value = false
  }
}

onMounted((): void => {
  fetchPages(false)
  const url: string | null = reportUrlParam.value
  if (url !== null) fetchReport(url)
})

watch(reportUrlParam, (url: string | null): void => {
  if (url !== null) fetchReport(url)
  else {
    report.value = null
    reportError.value = ''
  }
})
</script>
