<template>
  <DashboardDrawerFrame :title="record?.title || 'Publier l’article'" subtitle="Publication" @close="closeDrawer">
    <div v-if="isLoadingDraft" class="flex flex-col gap-3">
      <span class="dash-skeleton h-16 w-full" />
      <span class="dash-skeleton h-10 w-2/3" />
      <span class="dash-skeleton h-28 w-full" />
    </div>

    <DashboardEmptyState
      v-else-if="!record"
      icon="file-text"
      title="Brouillon introuvable"
      text="Il a peut-être été supprimé depuis un autre appareil."
    />

    <template v-else>
      <div class="flex items-center gap-3 rounded-xl border border-gray-300 bg-gray-800 p-3">
        <DashboardArticleCover :src="record.coverImageUrl ?? null" size="md" />
        <div class="min-w-0">
          <p class="line-clamp-2 text-sm leading-snug font-medium text-gray-100">{{ record.title || 'Sans titre' }}</p>
          <p class="dash-mono text-muted mt-1 truncate text-xs">/blog/{{ record.slug || '…' }}</p>
        </div>
      </div>

      <p
        v-if="!canPublish"
        class="flex gap-2 rounded-xl bg-(--dash-amber-tint) p-3 text-[13.5px] text-(--dash-amber)"
        role="alert"
      >
        <DashboardIcon name="triangle-alert" :size="16" class="mt-0.5" />
        L’article n’a pas encore de contenu. Reviens à l’éditeur pour l’écrire.
      </p>

      <DashboardSegmented
        v-model="mode"
        :options="MODE_OPTIONS"
        screen-reader-label="Quand publier"
        class="self-start"
      />

      <div class="grid gap-4 sm:grid-cols-2">
        <label class="flex flex-col gap-1.5" for="publish-date">
          <span class="text-[13px] font-medium text-gray-200">Date affichée sur l’article</span>
          <DashboardTextField id="publish-date" v-model="publishDate" type="date" />
        </label>
        <label v-if="mode === 'schedule'" class="flex flex-col gap-1.5" for="publish-at">
          <span class="text-[13px] font-medium text-gray-200">Mise en ligne le</span>
          <DashboardTextField id="publish-at" v-model="scheduledAt" type="datetime-local" :min="minScheduleValue" />
        </label>
      </div>

      <div class="flex flex-col divide-y divide-(--dash-line-soft) rounded-xl border border-gray-300 px-4">
        <div class="flex items-start justify-between gap-4 py-3.5">
          <div>
            <p class="text-sm font-medium text-gray-100">Traduire en anglais et en espagnol</p>
            <p class="text-muted mt-0.5 text-[12.5px]">Mistral traduit, un seul commit pour les deux langues.</p>
          </div>
          <DashboardSwitch v-model="autoTranslate" label="Traduire en anglais et en espagnol" />
        </div>
        <div v-if="mode === 'schedule'" class="flex items-start justify-between gap-4 py-3.5">
          <div>
            <p class="text-sm font-medium text-gray-100">Reconstruire le site</p>
            <p class="text-muted mt-0.5 text-[12.5px]">
              Le blog est statique : sans reconstruction, l’article attend le prochain déploiement.
            </p>
          </div>
          <DashboardSwitch v-model="autoRebuild" label="Reconstruire le site" />
        </div>
      </div>

      <div>
        <p class="dash-label mb-3.5">Ce qui va se passer</p>
        <ol class="flex flex-col">
          <li v-for="(step, index) in steps" :key="step.title" class="relative flex gap-3 pb-3.5 last:pb-0">
            <span
              class="relative z-[1] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border border-gray-400 bg-white text-[11px] font-medium text-gray-100"
            >
              {{ index + 1 }}
            </span>
            <span
              v-if="index < steps.length - 1"
              class="absolute top-[22px] bottom-0 left-[10.5px] w-px bg-gray-300"
              aria-hidden="true"
            />
            <span class="text-[13.5px] text-gray-200">
              {{ step.title }}
              <small class="text-muted block text-xs">{{ step.detail }}</small>
            </span>
          </li>
        </ol>
      </div>
    </template>

    <template v-if="record" #footer>
      <DashboardButton variant="ghost" @click="closeDrawer">Annuler</DashboardButton>
      <DashboardButton
        variant="primary"
        :icon="mode === 'now' ? 'send' : 'calendar-clock'"
        :loading="isPublishing"
        :disabled="!canPublishDraft"
        @click="onSubmit"
      >
        {{ mode === 'now' ? 'Publier maintenant' : 'Planifier la publication' }}
      </DashboardButton>
    </template>
  </DashboardDrawerFrame>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { UseArticlePublisherReturn } from '~/composables/useArticlePublisher'
import type { DashboardPublishStep } from '~/core/types/DashboardPublishDrawer'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type { DashboardPublishDrawerProps } from '~/core/types/DashboardPublishDrawer'
import type { ArticleRecord } from '~/types/dashboard'
import { computed, onMounted, ref, watch } from 'vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import DashboardSwitch from '~/components/dashboard/ui/DashboardSwitch.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'
import DashboardDrawerFrame from '~/components/dashboard/overlays/DashboardDrawerFrame.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardToast } from '~/composables/useDashboardToast'

const props: DashboardPublishDrawerProps = defineProps({
  articleId: {
    type: String,
    required: true,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const { records, upsertRecord, loadArticles }: UseDashboardArticlesReturn = useDashboardArticles()
const { closeAllDrawers, closeDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()
const { publishArticleById }: UseArticlePublisherReturn = useArticlePublisher()
const { watchDeploys }: UseDashboardDeployStatusReturn = useDashboardDeployStatus()

const MODE_OPTIONS: DashboardSegmentOption[] = [
  { value: 'now', label: 'Maintenant', icon: 'send' },
  { value: 'schedule', label: 'Planifier', icon: 'calendar-clock' },
]

const record: Ref<ArticleRecord | null> = ref(null)
const isLoadingDraft: Ref<boolean> = ref(true)
const isPublishing: Ref<boolean> = ref(false)
const mode: Ref<string> = ref('now')
const publishDate: Ref<string> = ref(DashboardFormatUtils.todayIso())
const scheduledAt: Ref<string> = ref('')
const autoTranslate: Ref<boolean> = ref(true)
const autoRebuild: Ref<boolean> = ref(true)

const canPublish: ComputedRef<boolean> = computed(
  (): boolean => (record.value?.content.trim().length ?? 0) > 0 && (record.value?.title.trim().length ?? 0) > 0,
)

const minScheduleValue: ComputedRef<string> = computed((): string => toLocalInputValue(new Date()))

const canPublishDraft: ComputedRef<boolean> = computed((): boolean => {
  if (!canPublish.value) return false
  if (mode.value === 'now') return true
  return scheduledAt.value !== '' && new Date(scheduledAt.value).getTime() > Date.now()
})

const steps: ComputedRef<DashboardPublishStep[]> = computed((): DashboardPublishStep[] => {
  const list: DashboardPublishStep[] = []
  if (mode.value === 'schedule') {
    list.push({
      title: 'Mise en file de publication',
      detail: scheduledAt.value
        ? `Publiée ${DashboardFormatUtils.formatPlannedDate(new Date(scheduledAt.value).toISOString())}, à la tâche horaire suivante`
        : 'Choisis la date de mise en ligne',
    })
  }
  list.push({
    title: 'Publication dans Storyblok',
    detail: `Date affichée : ${DashboardFormatUtils.formatLongDate(publishDate.value)}`,
  })
  if (autoTranslate.value) {
    list.push({ title: 'Traductions anglaise et espagnole', detail: 'Poussées sur GitHub en un commit' })
  }
  const rebuilds: boolean = mode.value === 'now' || autoTranslate.value || autoRebuild.value
  list.push(
    rebuilds
      ? { title: 'Reconstruction et mise en ligne du site', detail: 'Environ 4 minutes, suivie dans la barre latérale' }
      : { title: 'Pas de reconstruction', detail: 'L’article sera visible au prochain déploiement' },
  )
  if (rebuilds)
    list.push({ title: 'Moteurs de recherche prévenus', detail: 'Bing par IndexNow, Google par le sitemap' })
  return list
})

/**
 * Formats a date for a datetime-local input (local time, minutes precision).
 *
 * @param {Date} date - The date.
 * @returns {string} The YYYY-MM-DDTHH:mm value.
 */
function toLocalInputValue(date: Date): string {
  const parts: string[] = [date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes()].map(
    (value: number): string => String(value).padStart(2, '0'),
  )
  return `${date.getFullYear()}-${parts[0]}-${parts[1]}T${parts[2]}:${parts[3]}`
}

/**
 * Fills the form from the record (defaults: today, tomorrow 9:00, both options on).
 *
 * @param {ArticleRecord} value - The record.
 * @returns {void}
 */
function fillForm(value: ArticleRecord): void {
  record.value = value
  publishDate.value = value.publishDate || DashboardFormatUtils.todayIso()
  autoTranslate.value = value.autoTranslate
  autoRebuild.value = value.autoRebuild
  if (value.scheduledAt) {
    mode.value = 'schedule'
    scheduledAt.value = toLocalInputValue(new Date(value.scheduledAt))
  } else {
    const tomorrow: Date = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0)
    scheduledAt.value = toLocalInputValue(tomorrow)
  }
}

/**
 * Loads the record from memory, or from the server when the list is not loaded.
 *
 * @returns {Promise<void>}
 */
async function loadRecord(): Promise<void> {
  isLoadingDraft.value = true
  const inMemory: ArticleRecord | undefined = records.value.find(
    (item: ArticleRecord): boolean => item.id === props.articleId,
  )
  try {
    if (inMemory) fillForm(inMemory)
    else {
      const data: { record: ArticleRecord } = await $fetch<{ record: ArticleRecord }>(
        `/api/dashboard/articles/drafts/${props.articleId}`,
      )
      fillForm(data.record)
    }
  } catch {
    record.value = null
  } finally {
    isLoadingDraft.value = false
  }
}

/**
 * Saves the publication settings on the record (the content is kept server-side).
 *
 * @param {'draft' | 'scheduled'} status - Draft when publishing now, scheduled when planning.
 * @param {string | undefined} scheduledAtIso - Planned datetime.
 * @returns {Promise<ArticleRecord>} The saved record.
 */
async function persistSettings(status: 'draft' | 'scheduled', scheduledAtIso?: string): Promise<ArticleRecord> {
  const current: ArticleRecord = record.value!
  const data: { record: ArticleRecord } = await $fetch<{ record: ArticleRecord }>('/api/dashboard/articles/drafts', {
    method: 'POST',
    body: {
      id: current.id,
      title: current.title,
      publishDate: publishDate.value || undefined,
      autoTranslate: autoTranslate.value,
      autoRebuild: mode.value === 'now' ? true : autoRebuild.value,
      status,
      scheduledAt: scheduledAtIso,
    },
  })
  upsertRecord(data.record)
  return data.record
}

/**
 * Publishes now or schedules, then closes the drawers and refreshes the list.
 *
 * @returns {Promise<void>}
 */
async function onSubmit(): Promise<void> {
  if (!record.value || !canPublishDraft.value) return
  isPublishing.value = true
  try {
    if (mode.value === 'now') {
      const saved: ArticleRecord = await persistSettings('draft')
      const result: { fullSlug: string; translated: boolean } = await publishArticleById(saved.id, {
        autoTranslate: autoTranslate.value,
      })
      showToast({
        tone: 'green',
        icon: 'rocket',
        title: 'Article publié',
        text:
          autoTranslate.value && !result.translated
            ? 'La traduction a échoué : relance-la depuis Traductions. Le site se reconstruit.'
            : 'Le site se reconstruit, l’article sera en ligne dans 4 minutes environ.',
        durationMs: 7000,
      })
      watchDeploys()
    } else {
      const iso: string = new Date(scheduledAt.value).toISOString()
      await persistSettings('scheduled', iso)
      showToast({
        tone: 'cyan',
        icon: 'calendar-clock',
        title: 'Publication planifiée',
        text: `Mise en ligne ${DashboardFormatUtils.formatPlannedDate(iso)}.`,
      })
    }
    closeAllDrawers()
    await loadArticles(true)
    if (route.path.includes('generate-article')) await navigateTo(localePath('/dashboard/articles'))
  } catch (error: unknown) {
    showToast({
      tone: 'red',
      title: mode.value === 'now' ? 'La publication a échoué' : 'La planification a échoué',
      text: error instanceof Error ? error.message : 'Réessaie dans un instant.',
    })
  } finally {
    isPublishing.value = false
  }
}

watch(
  (): string => props.articleId,
  (): void => {
    loadRecord().catch((): void => undefined)
  },
)

onMounted((): void => {
  loadRecord().catch((): void => undefined)
})
</script>
