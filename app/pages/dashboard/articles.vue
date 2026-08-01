<template>
  <div class="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-100">Brouillons & file d’attente</h1>
        <p class="mt-1 text-gray-400">Tes articles en brouillon, planifiés et publiés. Édite, planifie ou publie.</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <DibodevButton type="button" outlined size="sm" :disabled="processingQueue" @click="processQueue">
          {{ processingQueue ? 'Traitement…' : 'Traiter la file' }}
        </DibodevButton>
        <NuxtLink
          :to="localePath('/dashboard/generate-article')"
          class="bg-primary inline-flex items-center rounded px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Nouvel article
        </NuxtLink>
      </div>
    </div>

    <DibodevAlert
      v-if="successMessage"
      :message="successMessage"
      variant="success"
      dismissible
      @hide="successMessage = ''"
    />
    <DibodevAlert v-if="errorMessage" :message="errorMessage" variant="error" dismissible @hide="errorMessage = ''" />

    <div v-if="loading" class="flex justify-center py-16">
      <DibodevSpinner />
    </div>

    <div v-else-if="records.length === 0" class="rounded-lg border border-gray-600 bg-gray-800 p-10 text-center">
      <p class="text-gray-300">Aucun article pour l’instant.</p>
      <NuxtLink
        :to="localePath('/dashboard/generate-article')"
        class="text-primary mt-3 inline-block text-sm font-medium"
      >
        Créer un premier article
      </NuxtLink>
    </div>

    <ul v-else class="flex flex-col gap-4">
      <li
        v-for="record in records"
        :key="record.id"
        class="flex flex-col gap-4 rounded-lg border border-gray-600 bg-gray-800 p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="flex min-w-0 flex-col gap-2">
          <div class="flex flex-wrap items-center gap-2">
            <DibodevBadge
              :backgroundColor="statusStyle(record.status).backgroundColor"
              :textColor="statusStyle(record.status).textColor"
              size="sm"
            >
              {{ statusStyle(record.status).label }}
            </DibodevBadge>
            <span class="text-xs text-gray-400">{{ originLabel(record.origin) }}</span>
          </div>
          <p class="truncate font-medium text-gray-100">{{ record.title || '(sans titre)' }}</p>
          <p class="text-xs text-gray-400">{{ metaLine(record) }}</p>
          <p v-if="record.status === 'failed' && record.error" class="text-xs text-red-400">{{ record.error }}</p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <NuxtLink
            :to="localePath({ path: '/dashboard/generate-article', query: { draft: record.id } })"
            class="hover:border-primary hover:text-primary inline-flex items-center rounded border border-gray-600 px-3 py-1.5 text-sm text-gray-200 transition-colors"
          >
            Éditer
          </NuxtLink>
          <DibodevButton
            v-if="record.status !== 'published' && record.status !== 'publishing'"
            type="button"
            size="sm"
            :disabled="busyId === record.id"
            @click="publishRecord(record)"
          >
            {{ busyId === record.id ? 'Publication…' : 'Publier' }}
          </DibodevButton>
          <a
            v-if="record.status === 'published' && record.fullSlug"
            :href="`https://dibodev.fr/${record.fullSlug}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center rounded border border-gray-600 px-3 py-1.5 text-sm text-gray-200 transition-colors hover:border-gray-400"
          >
            Voir
          </a>
          <DibodevButton
            type="button"
            outlined
            size="sm"
            :disabled="busyId === record.id"
            @click="removeRecord(record)"
          >
            Supprimer
          </DibodevButton>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import { ARTICLE_ORIGIN_LABELS, ARTICLE_STATUS_BADGES } from '~/core/constants/articleStatus'
import type { ArticleEditorMode, ArticleRecord, ArticleRecordStatus, ArticleStatusBadge } from '~/types/dashboard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Brouillons & file — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const localePath = useLocalePath()
const { publishArticleById } = useArticlePublisher()

const records: Ref<ArticleRecord[]> = ref([])
const loading: Ref<boolean> = ref(true)
const processingQueue: Ref<boolean> = ref(false)
const busyId: Ref<string | null> = ref(null)
const successMessage: Ref<string> = ref('')
const errorMessage: Ref<string> = ref('')

/**
 * Returns the badge style/label for a given status.
 *
 * @param status - The article status.
 * @returns The label and colors for the status badge.
 */
function statusStyle(status: ArticleRecordStatus): ArticleStatusBadge {
  return ARTICLE_STATUS_BADGES[status]
}

/**
 * Returns a human label for the article origin.
 *
 * @param origin - The article origin.
 * @returns The origin label.
 */
function originLabel(origin: ArticleEditorMode): string {
  return ARTICLE_ORIGIN_LABELS[origin]
}

/**
 * Builds the secondary info line for a record (slug, dates).
 *
 * @param record - The article record.
 * @returns A short descriptive line.
 */
function metaLine(record: ArticleRecord): string {
  const parts: string[] = [`/${record.slug}`]
  if (record.status === 'scheduled' && record.scheduledAt) {
    parts.push(`planifié le ${new Date(record.scheduledAt).toLocaleString('fr-FR')}`)
  } else if (record.status === 'published' && record.publishedAt) {
    parts.push(`publié le ${new Date(record.publishedAt).toLocaleDateString('fr-FR')}`)
  } else if (record.publishDate) {
    parts.push(`date ${record.publishDate}`)
  }
  return parts.join(' · ')
}

/**
 * Loads all stored article records.
 *
 * @returns Nothing.
 */
async function loadRecords(): Promise<void> {
  loading.value = true
  try {
    const data = await $fetch<{ records: ArticleRecord[] }>('/api/dashboard/articles/drafts')
    records.value = data.records
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors du chargement.'
  } finally {
    loading.value = false
  }
}

/**
 * Publishes a record now (mirrors the editor: publish, then optional translation).
 *
 * @param record - The record to publish.
 * @returns Nothing.
 */
async function publishRecord(record: ArticleRecord): Promise<void> {
  busyId.value = record.id
  errorMessage.value = ''
  successMessage.value = ''
  try {
    const result = await publishArticleById(record.id, { autoTranslate: record.autoTranslate })
    let message = result.message
    if (record.autoTranslate) {
      message += result.translated
        ? ' Traductions EN + ES poussées (rebuild en cours).'
        : ' ⚠️ Publié, mais la traduction a échoué — relance-la depuis Traductions.'
    }
    successMessage.value = message
    await loadRecords()
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la publication.'
  } finally {
    busyId.value = null
  }
}

/**
 * Deletes a record after confirmation.
 *
 * @param record - The record to delete.
 * @returns Nothing.
 */
async function removeRecord(record: ArticleRecord): Promise<void> {
  if (typeof window !== 'undefined' && !window.confirm(`Supprimer « ${record.title || 'cet article'} » ?`)) {
    return
  }
  busyId.value = record.id
  errorMessage.value = ''
  try {
    await $fetch(`/api/dashboard/articles/drafts/${record.id}`, { method: 'DELETE' })
    records.value = records.value.filter((r: ArticleRecord): boolean => r.id !== record.id)
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la suppression.'
  } finally {
    busyId.value = null
  }
}

/**
 * Runs the drip queue processor now (publishes any due scheduled article).
 *
 * @returns Nothing.
 */
async function processQueue(): Promise<void> {
  processingQueue.value = true
  errorMessage.value = ''
  successMessage.value = ''
  try {
    const data = await $fetch<{ message: string }>('/api/dashboard/articles/process-queue', { method: 'POST' })
    successMessage.value = data.message
    await loadRecords()
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors du traitement de la file.'
  } finally {
    processingQueue.value = false
  }
}

onMounted((): void => {
  loadRecords()
})
</script>
