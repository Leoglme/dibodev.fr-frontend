<template>
  <DashboardPage title="Articles" icon="file-text">
    <template #actions>
      <DashboardButton
        v-if="dueCount > 0"
        variant="outline"
        size="sm"
        icon="send"
        :loading="isProcessingQueue"
        data-tip="Publie les articles planifiés dont l’heure est passée"
        @click="onProcessQueue"
      >
        <span class="max-sm:hidden">Traiter la file</span>
        <span class="text-muted tabular-nums">{{ dueCount }}</span>
      </DashboardButton>
      <DashboardButton
        variant="primary"
        size="sm"
        icon="plus"
        :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1' } })"
      >
        <span class="max-sm:hidden">Nouvel article</span>
        <span class="sm:hidden">Nouveau</span>
      </DashboardButton>
    </template>

    <template #toolbar>
      <DashboardTabs
        v-model="tab"
        :items="tabs"
        screen-reader-label="Statut des articles"
        class="min-w-0 @max-4xl/page:w-full"
      />
      <DashboardSearchInput
        v-model="search"
        id="articles-search"
        placeholder="Rechercher un article…"
        class="w-full pb-1 @4xl/page:ml-auto @4xl/page:w-[220px] @4xl/page:pb-0 @6xl/page:w-[260px]"
      />
    </template>

    <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
      <DashboardIcon name="circle-alert" :size="16" />
      {{ error }}
    </p>

    <DashboardCard>
      <div v-if="isLoadingArticles && rows.length === 0" class="flex flex-col gap-2 p-5">
        <span v-for="index in 6" :key="index" class="dash-skeleton h-14 w-full" />
      </div>

      <DashboardEmptyState
        v-else-if="filteredRows.length === 0"
        :icon="emptyStateContent.icon"
        :title="emptyStateContent.title"
        :text="emptyStateContent.text"
      >
        <DashboardButton
          v-if="tab === 'draft' || tab === 'all'"
          variant="primary"
          icon="plus"
          :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1' } })"
        >
          Écrire un article
        </DashboardButton>
      </DashboardEmptyState>

      <template v-else>
        <table class="dash-table @max-xl:hidden">
          <thead>
            <tr>
              <th>Article</th>
              <th>Statut</th>
              <th class="dash-col-sm">Langues</th>
              <th>Date</th>
              <th class="is-right"><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in pagedRows"
              :key="row.key"
              class="is-clickable"
              :class="{ 'is-selected': openedItemKey === row.key }"
              @click="openArticle(row.key)"
            >
              <td class="dash-col-main">
                <div class="flex min-w-0 items-center gap-3">
                  <DashboardArticleCover :src="row.coverImageUrl" class="dash-col-lg" />
                  <div class="min-w-0">
                    <p class="line-clamp-2 leading-snug font-medium text-gray-100">{{ row.title }}</p>
                    <p class="dash-mono text-muted mt-0.5 truncate text-xs">/blog/{{ row.slug || '…' }}</p>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap">
                <div class="flex flex-col items-start gap-1.5">
                  <DashboardBadge
                    :tone="DASHBOARD_ARTICLE_STATUSES[row.status].tone"
                    :icon="DASHBOARD_ARTICLE_STATUSES[row.status].icon"
                    :is-spinning="row.status === 'publishing'"
                  >
                    {{ DASHBOARD_ARTICLE_STATUSES[row.status].label }}
                  </DashboardBadge>
                  <span v-if="row.origin" class="text-muted inline-flex items-center gap-1.5 text-[12.5px]">
                    <DashboardIcon :name="row.origin === 'ai' ? 'sparkles' : 'pen-line'" :size="13" />
                    {{ ARTICLE_ORIGIN_LABELS[row.origin] }}
                  </span>
                </div>
              </td>
              <td class="dash-col-sm">
                <DashboardLangChips :english="languagesOf(row).english" :spanish="languagesOf(row).spanish" />
              </td>
              <td class="whitespace-nowrap">
                <span class="block text-[13px] text-gray-200">{{ dateOf(row) }}</span>
                <span class="text-muted block text-xs">{{ DATE_KIND_LABELS[row.dateKind] }}</span>
              </td>
              <td class="is-right" @click.stop>
                <div class="inline-flex items-center justify-end gap-1">
                  <DashboardButton
                    v-if="row.status === 'published' && row.slug"
                    variant="ghost"
                    size="sm"
                    trailing-icon="arrow-up-right"
                    :href="`https://dibodev.fr/blog/${row.slug}`"
                    class="dash-col-sm"
                  >
                    Voir
                  </DashboardButton>
                  <DashboardButton
                    v-else-if="row.recordId && row.status !== 'publishing'"
                    variant="outline"
                    size="sm"
                    class="dash-col-sm"
                    @click="openPublish(row.recordId)"
                  >
                    {{ row.status === 'failed' ? 'Réessayer' : row.status === 'scheduled' ? 'Replanifier' : 'Publier' }}
                  </DashboardButton>
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="chevron-right"
                    :aria-label="`Détail de « ${row.title} »`"
                    @click="openArticle(row.key)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <ul class="@xl:hidden">
          <DashboardListRow
            v-for="row in pagedRows"
            :key="row.key"
            :is-selected="openedItemKey === row.key"
            @select="openArticle(row.key)"
          >
            <DashboardArticleCover :src="row.coverImageUrl" />
            <span class="min-w-0 flex-1">
              <span class="line-clamp-2 text-sm leading-snug font-medium text-gray-100">{{ row.title }}</span>
              <span class="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <DashboardBadge
                  :tone="DASHBOARD_ARTICLE_STATUSES[row.status].tone"
                  :icon="DASHBOARD_ARTICLE_STATUSES[row.status].icon"
                  :is-spinning="row.status === 'publishing'"
                >
                  {{ DASHBOARD_ARTICLE_STATUSES[row.status].label }}
                </DashboardBadge>
                <span class="text-muted text-xs">{{ dateOf(row) }}</span>
              </span>
            </span>
            <DashboardIcon name="chevron-right" :size="16" class="text-muted" />
          </DashboardListRow>
        </ul>
      </template>

      <template v-if="filteredRows.length > 0" #footer>
        <span class="tabular-nums">{{ countLabel }}</span>
        <span v-if="pageCount > 1" class="inline-flex items-center gap-1">
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-left"
            aria-label="Page précédente"
            :disabled="page === 1"
            @click="page -= 1"
          />
          <span class="min-w-[52px] text-center text-xs tabular-nums">{{ page }} / {{ pageCount }}</span>
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-right"
            aria-label="Page suivante"
            :disabled="page === pageCount"
            @click="page += 1"
          />
        </span>
      </template>
    </DashboardCard>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type {
  DashboardArticleLanguages,
  DashboardArticlesEmptyContent,
  DashboardArticlesTab,
} from '~/core/types/DashboardArticlesPage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardArticleRow, DashboardTabItem } from '~/core/types/Dashboard'
import type { TranslatableItem } from '~/types/dashboard/translations'
import { computed, onMounted, ref, watch } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardBadge from '~/components/dashboard/ui/DashboardBadge.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardListRow from '~/components/dashboard/ui/DashboardListRow.vue'
import DashboardLangChips from '~/components/dashboard/ui/DashboardLangChips.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardTabs from '~/components/dashboard/ui/DashboardTabs.vue'
import { ARTICLE_ORIGIN_LABELS, DASHBOARD_ARTICLE_STATUSES } from '~/core/constants/articleStatus'
import { DASHBOARD_EDITOR_PATH } from '~/core/constants/dashboardNavigation'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardToast } from '~/composables/useDashboardToast'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Articles · Dibodev Admin',
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const router: ReturnType<typeof useRouter> = useRouter()

const {
  rows,
  counts,
  loading: isLoadingArticles,
  error,
  loadArticles,
  processQueue,
}: UseDashboardArticlesReturn = useDashboardArticles()

const { lists: translationLists, loadTranslations }: UseDashboardTranslationsReturn = useDashboardTranslations()
const { openedItemKey, openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()
const initialTab: string = typeof route.query.tab === 'string' ? route.query.tab : 'all'

const TAB_VALUES: DashboardArticlesTab[] = ['all', 'draft', 'scheduled', 'published', 'failed']
const PAGE_SIZE: number = 20

const DATE_KIND_LABELS: Record<DashboardArticleRow['dateKind'], string> = {
  updated: 'Modifié',
  scheduled: 'Mise en ligne',
  published: 'Publié',
}

const tab: Ref<string> = ref(TAB_VALUES.includes(initialTab as DashboardArticlesTab) ? initialTab : 'all')
const search: Ref<string> = ref('')
const page: Ref<number> = ref(1)
const isProcessingQueue: Ref<boolean> = ref(false)
const now: Ref<number> = ref(Date.now())

const tabs: ComputedRef<DashboardTabItem[]> = computed((): DashboardTabItem[] => [
  { value: 'all', label: 'Tous', count: counts.value.total },
  { value: 'draft', label: 'Brouillons', count: counts.value.draft },
  { value: 'scheduled', label: 'Planifiés', count: counts.value.scheduled },
  { value: 'published', label: 'Publiés', count: counts.value.published },
  { value: 'failed', label: 'Échecs', count: counts.value.failed, alert: counts.value.failed > 0 },
])

const filteredRows: ComputedRef<DashboardArticleRow[]> = computed((): DashboardArticleRow[] => {
  const needle: string = DashboardFormatUtils.toSearchableText(search.value.trim())
  return rows.value.filter((row: DashboardArticleRow): boolean => {
    if (tab.value !== 'all' && row.status !== tab.value) return false
    return !needle || DashboardFormatUtils.toSearchableText(`${row.title} ${row.slug}`).includes(needle)
  })
})

const pageCount: ComputedRef<number> = computed((): number =>
  Math.max(1, Math.ceil(filteredRows.value.length / PAGE_SIZE)),
)

const pagedRows: ComputedRef<DashboardArticleRow[]> = computed((): DashboardArticleRow[] =>
  filteredRows.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE),
)

const countLabel: ComputedRef<string> = computed((): string => {
  const total: number = filteredRows.value.length
  const start: number = (page.value - 1) * PAGE_SIZE + 1
  const end: number = Math.min(total, page.value * PAGE_SIZE)
  return `${start}–${end} sur ${DashboardFormatUtils.plural(total, 'article')}`
})

const dueCount: ComputedRef<number> = computed(
  (): number =>
    rows.value.filter(
      (row: DashboardArticleRow): boolean =>
        row.status === 'scheduled' && row.dateIso !== null && new Date(row.dateIso).getTime() <= now.value,
    ).length,
)

const emptyStateContent: ComputedRef<DashboardArticlesEmptyContent> = computed((): DashboardArticlesEmptyContent => {
  if (search.value)
    return { icon: 'search', title: 'Aucun article ne correspond', text: `Rien pour « ${search.value} ».` }
  const byTab: Record<DashboardArticlesTab, DashboardArticlesEmptyContent> = {
    all: {
      icon: 'file-text',
      title: 'Aucun article pour l’instant',
      text: 'Écris le premier, à la main ou avec l’IA.',
    },
    draft: { icon: 'pen-line', title: 'Aucun brouillon', text: 'Tout ce qui est commencé est publié ou planifié.' },
    scheduled: {
      icon: 'calendar-clock',
      title: 'Rien de planifié',
      text: 'Planifie un brouillon pour étaler les publications.',
    },
    published: { icon: 'file-text', title: 'Aucun article publié', text: 'Les articles publiés apparaîtront ici.' },
    failed: { icon: 'circle-check', title: 'Aucune publication en échec', text: 'Tout est passé.' },
  }
  return byTab[tab.value as DashboardArticlesTab]
})

/**
 * Languages of an article: published articles read the translation files, others are French only.
 *
 * @param {DashboardArticleRow} row - The article.
 * @returns {DashboardArticleLanguages} English and Spanish availability.
 */
function languagesOf(row: DashboardArticleRow): DashboardArticleLanguages {
  if (row.status !== 'published') return { english: false, spanish: false }
  const item: TranslatableItem | undefined = translationLists.value?.articles.find(
    (article: TranslatableItem): boolean => article.slug === row.slug,
  )
  return { english: item?.hasEn ?? null, spanish: item?.hasEs ?? null }
}

/**
 * Date shown in the list.
 *
 * @param {DashboardArticleRow} row - The article.
 * @returns {string} Planned datetime, relative update time or publication date.
 */
function dateOf(row: DashboardArticleRow): string {
  if (row.dateKind === 'scheduled') return DashboardFormatUtils.formatPlannedDate(row.dateIso)
  if (row.dateKind === 'updated') return DashboardFormatUtils.formatRelative(row.dateIso, now.value)
  return DashboardFormatUtils.formatShortDate(row.dateIso)
}

/**
 * Opens the drawer of an article; the arrows browse the filtered list.
 *
 * @param {string} key - Row key.
 * @returns {void}
 */
function openArticle(key: string): void {
  openDrawer({
    kind: 'article',
    articleKey: key,
    browseKeys: filteredRows.value.map((row: DashboardArticleRow): string => row.key),
  })
}

/**
 * Opens the publication drawer of a record.
 *
 * @param {string} recordId - Local record id.
 * @returns {void}
 */
function openPublish(recordId: string): void {
  openDrawer({ kind: 'publish', articleId: recordId })
}

/**
 * Publishes the scheduled articles whose time has come.
 *
 * @returns {Promise<void>}
 */
async function onProcessQueue(): Promise<void> {
  isProcessingQueue.value = true
  try {
    const message: string = await processQueue()
    showToast({ tone: 'cyan', icon: 'calendar-clock', title: 'File traitée', text: message })
  } catch {
    showToast({ tone: 'red', title: 'Le traitement de la file a échoué', text: 'Réessaie dans un instant.' })
  } finally {
    isProcessingQueue.value = false
  }
}

watch([tab, search], (): void => {
  page.value = 1
})

watch(tab, (value: string): void => {
  router.replace({ query: { ...route.query, tab: value === 'all' ? undefined : value } }).catch((): void => undefined)
})

onMounted((): void => {
  loadArticles().catch((): void => undefined)
  loadTranslations().catch((): void => undefined)
  const publishId: unknown = route.query.publish
  if (typeof publishId === 'string' && publishId) openPublish(publishId)
})
</script>
