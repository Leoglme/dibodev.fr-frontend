<template>
  <DashboardDrawerFrame
    :title="row?.title ?? 'Article introuvable'"
    subtitle="Article"
    :browse-index="browseIndex"
    :browse-total="props.browseKeys.length"
    @close="closeDrawer"
    @previous="showPreviousOrNextArticle(-1)"
    @next="showPreviousOrNextArticle(1)"
  >
    <template v-if="row">
      <DashboardArticleCover :src="row.coverImageUrl" size="lg" />

      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <DashboardBadge
          :tone="statusDisplay.tone"
          :icon="statusDisplay.icon"
          :is-spinning="row.status === 'publishing'"
        >
          {{ statusDisplay.label }}
        </DashboardBadge>
        <span class="text-muted text-[13px]">{{ dateLabel }}</span>
      </div>

      <p v-if="row.excerpt" class="text-[15px] leading-relaxed text-gray-200">{{ row.excerpt }}</p>

      <div
        v-if="row.status === 'failed' && row.error"
        class="flex gap-2.5 rounded-xl bg-(--dash-red-tint) p-3.5 text-[13.5px] text-(--dash-red)"
        role="alert"
      >
        <DashboardIcon name="circle-alert" :size="16" class="mt-0.5" />
        <span>{{ row.error }}</span>
      </div>

      <dl class="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3.5 text-sm">
        <dt class="dash-label">Adresse</dt>
        <dd class="flex min-w-0 items-center justify-end gap-1 text-right">
          <span class="dash-mono truncate text-[12.5px] text-gray-200">/blog/{{ row.slug || '…' }}</span>
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="copy"
            aria-label="Copier l’URL"
            data-tip="Copier l’URL"
            @click="copyUrl"
          />
        </dd>
        <dt class="dash-label">Rédaction</dt>
        <dd class="text-right text-gray-200">{{ originLabel }}</dd>
        <dt class="dash-label">Langues</dt>
        <dd class="flex justify-end">
          <DashboardLangChips :english="translation?.hasEn ?? null" :spanish="translation?.hasEs ?? null" />
        </dd>
        <template v-if="indexingRow">
          <dt class="dash-label">Google</dt>
          <dd class="flex justify-end">
            <button
              type="button"
              class="cursor-pointer rounded-md px-1 hover:bg-gray-800"
              :aria-label="`Voir l’indexation : ${indexingDisplay.label}`"
              @click="openIndexing"
            >
              <DashboardBadge :tone="indexingDisplay.tone" :icon="indexingDisplay.icon">
                {{ indexingDisplay.label }}
              </DashboardBadge>
            </button>
          </dd>
        </template>
        <template v-if="row.qualityScore !== null">
          <dt class="dash-label">Qualité IA</dt>
          <dd class="flex justify-end">
            <DashboardScoreRing :score="row.qualityScore" :size="40" :stroke-width="4" :good-threshold="80" />
          </dd>
        </template>
      </dl>
    </template>
    <DashboardEmptyState
      v-else
      icon="file-text"
      title="Cet article n’est plus dans la liste"
      text="Il a peut-être été supprimé ou publié depuis un autre appareil."
    />

    <template v-if="row" #footer>
      <DashboardButton
        v-if="row.recordId && row.status !== 'published' && row.status !== 'publishing'"
        variant="danger"
        icon="trash-2"
        :loading="isDeletingDraft"
        aria-label="Supprimer le brouillon"
        @click="onDelete"
      >
        <span class="max-sm:hidden">Supprimer</span>
      </DashboardButton>
      <span class="flex-1" aria-hidden="true" />
      <DashboardButton v-if="publicUrl" variant="outline" icon="external-link" :href="publicUrl">Voir</DashboardButton>
      <DashboardButton
        v-if="row.recordId"
        variant="outline"
        icon="pencil"
        :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { draft: row.recordId } })"
      >
        Éditer
      </DashboardButton>
      <DashboardButton
        v-if="row.recordId && (row.status === 'draft' || row.status === 'failed' || row.status === 'scheduled')"
        variant="primary"
        icon="send"
        @click="openPublish"
      >
        {{ row.status === 'scheduled' ? 'Replanifier' : 'Publier…' }}
      </DashboardButton>
    </template>
  </DashboardDrawerFrame>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardConfirmReturn } from '~/composables/useDashboardConfirm'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardArticleRow } from '~/core/types/Dashboard'
import type { DashboardArticleDrawerProps } from '~/core/types/DashboardArticleDrawer'
import type { IndexingStateDisplay } from '~/core/utils/DashboardIndexingUtils'
import type { TranslatableItem } from '~/types/dashboard/translations'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import type { ArticleStatusDisplay } from '~/core/constants/articleStatus'
import { computed, ref } from 'vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardBadge from '~/components/dashboard/ui/DashboardBadge.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardLangChips from '~/components/dashboard/ui/DashboardLangChips.vue'
import DashboardScoreRing from '~/components/dashboard/ui/DashboardScoreRing.vue'
import DashboardDrawerFrame from '~/components/dashboard/overlays/DashboardDrawerFrame.vue'
import { DASHBOARD_ARTICLE_STATUSES } from '~/core/constants/articleStatus'
import { DASHBOARD_EDITOR_PATH } from '~/core/constants/dashboardNavigation'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardConfirm } from '~/composables/useDashboardConfirm'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardToast } from '~/composables/useDashboardToast'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

const props: DashboardArticleDrawerProps = defineProps({
  articleKey: {
    type: String,
    required: true,
  },
  browseKeys: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { rows, removeRecord }: UseDashboardArticlesReturn = useDashboardArticles()
const { payload: indexingPayload }: UseDashboardIndexingReturn = useDashboardIndexing()
const { lists: translationLists }: UseDashboardTranslationsReturn = useDashboardTranslations()
const { openDrawer, replaceDrawer, closeDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { confirm }: UseDashboardConfirmReturn = useDashboardConfirm()
const { showToast }: UseDashboardToastReturn = useDashboardToast()

const SITE_URL: string = 'https://dibodev.fr'

const isDeletingDraft: Ref<boolean> = ref(false)

const row: ComputedRef<DashboardArticleRow | null> = computed(
  (): DashboardArticleRow | null =>
    rows.value.find((item: DashboardArticleRow): boolean => item.key === props.articleKey) ?? null,
)

const browseIndex: ComputedRef<number | null> = computed((): number | null => {
  const index: number = props.browseKeys.indexOf(props.articleKey)
  return index >= 0 ? index : null
})

const statusDisplay: ComputedRef<ArticleStatusDisplay> = computed(
  (): ArticleStatusDisplay => DASHBOARD_ARTICLE_STATUSES[row.value?.status ?? 'draft'],
)

const originLabel: ComputedRef<string> = computed((): string => {
  if (row.value?.origin === 'ai') return 'Avec l’IA'
  if (row.value?.origin === 'manual') return 'Manuelle'
  return 'Publié directement sur Storyblok'
})

const dateLabel: ComputedRef<string> = computed((): string => {
  const current: DashboardArticleRow | null = row.value
  if (!current?.dateIso) return ''
  if (current.dateKind === 'scheduled')
    return `Mise en ligne ${DashboardFormatUtils.formatPlannedDate(current.dateIso)}`
  if (current.dateKind === 'published') return `Publié le ${DashboardFormatUtils.formatLongDate(current.dateIso)}`
  return `Modifié ${DashboardFormatUtils.formatRelative(current.dateIso)}`
})

const publicUrl: ComputedRef<string | null> = computed((): string | null =>
  row.value?.status === 'published' && row.value.slug ? `${SITE_URL}/blog/${row.value.slug}` : null,
)

const translation: ComputedRef<TranslatableItem | null> = computed(
  (): TranslatableItem | null =>
    translationLists.value?.articles.find((item: TranslatableItem): boolean => item.slug === row.value?.slug) ?? null,
)

const indexingRow: ComputedRef<IndexingStatusRow | null> = computed((): IndexingStatusRow | null => {
  const slug: string | undefined = row.value?.slug
  if (!slug || row.value?.status !== 'published') return null
  return (
    indexingPayload.value?.items.find(
      (item: IndexingStatusRow): boolean => DashboardIndexingUtils.path(item.url) === `/blog/${slug}`,
    ) ?? null
  )
})

const indexingDisplay: ComputedRef<IndexingStateDisplay> = computed(
  (): IndexingStateDisplay =>
    indexingRow.value
      ? DashboardIndexingUtils.STATES[DashboardIndexingUtils.state(indexingRow.value)]
      : DashboardIndexingUtils.STATES.unknown,
)

/**
 * Shows the previous or next article of the list.
 *
 * @param {number} direction - -1 for previous, 1 for next.
 * @returns {void}
 */
function showPreviousOrNextArticle(direction: number): void {
  if (browseIndex.value === null) return
  const key: string | undefined = props.browseKeys[browseIndex.value + direction]
  if (key) replaceDrawer({ kind: 'article', articleKey: key, browseKeys: props.browseKeys })
}

/**
 * Copies the public URL of the article.
 *
 * @returns {void}
 */
function copyUrl(): void {
  const url: string = `${SITE_URL}/blog/${row.value?.slug ?? ''}`
  navigator.clipboard
    .writeText(url)
    .then((): void => showToast({ tone: 'ink', icon: 'copy-check', title: 'URL copiée', text: url }))
    .catch((): void => showToast({ tone: 'red', title: 'Copie impossible', text: url }))
}

/**
 * Opens the publication drawer on top of this one.
 *
 * @returns {void}
 */
function openPublish(): void {
  if (row.value?.recordId) openDrawer({ kind: 'publish', articleId: row.value.recordId })
}

/**
 * Opens the Google indexing drawer of the article.
 *
 * @returns {void}
 */
function openIndexing(): void {
  if (indexingRow.value)
    openDrawer({ kind: 'indexing', url: indexingRow.value.url, browseUrls: [indexingRow.value.url] })
}

/**
 * Deletes the local record after confirmation.
 *
 * @returns {Promise<void>}
 */
async function onDelete(): Promise<void> {
  const current: DashboardArticleRow | null = row.value
  if (!current?.recordId) return
  const accepted: boolean = await confirm({
    title: `Supprimer « ${current.title} » ?`,
    text: 'Le brouillon disparaît du dashboard. Un article déjà publié reste en ligne.',
    confirmLabel: 'Supprimer',
    danger: true,
  })
  if (!accepted) return
  isDeletingDraft.value = true
  try {
    await removeRecord(current.recordId)
    closeDrawer()
    showToast({ tone: 'ink', icon: 'trash-2', title: 'Brouillon supprimé' })
  } catch {
    showToast({ tone: 'red', title: 'La suppression a échoué', text: 'Réessaie dans un instant.' })
  } finally {
    isDeletingDraft.value = false
  }
}
</script>
