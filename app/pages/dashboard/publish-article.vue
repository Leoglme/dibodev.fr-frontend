<template>
  <div class="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12">
    <div class="flex flex-col gap-2">
      <NuxtLink
        :to="backToEditorLink"
        class="inline-flex w-fit items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-gray-100"
      >
        <DibodevIcon name="ChevronLeft" class="h-4 w-4" mode="stroke" />
        Retour à l’éditeur
      </NuxtLink>
      <h1 class="text-2xl font-semibold text-gray-100">Publication</h1>
      <p class="text-gray-300">Choisis la date, les traductions et le rebuild, puis publie ou planifie.</p>
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

    <div v-else-if="!record" class="rounded-xl border border-gray-600 bg-gray-800 p-8 text-center">
      <p class="text-gray-200">Brouillon introuvable.</p>
      <NuxtLink :to="localePath('/dashboard/articles')" class="text-primary mt-3 inline-block text-sm font-medium">
        Voir mes articles
      </NuxtLink>
    </div>

    <template v-else>
      <!-- Article summary -->
      <section class="flex items-start justify-between gap-3 rounded-xl border border-gray-600 bg-gray-800 p-5">
        <div class="min-w-0">
          <p class="truncate font-medium text-gray-100">{{ record.title || '(sans titre)' }}</p>
          <p class="mt-0.5 truncate text-xs text-gray-400">/{{ record.slug }}</p>
        </div>
        <DibodevBadge :backgroundColor="statusBadge.backgroundColor" :textColor="statusBadge.textColor" size="sm">
          {{ statusBadge.label }}
        </DibodevBadge>
      </section>

      <!-- Publication config -->
      <section class="flex flex-col gap-5 rounded-xl border border-gray-600 bg-gray-800 p-5">
        <div class="grid gap-5 sm:grid-cols-2">
          <div class="flex flex-col gap-1.5">
            <label for="publish-date" class="text-sm font-medium text-gray-200">Date affichée sur l’article</label>
            <input id="publish-date" v-model="publishDate" type="date" :class="INPUT_CLASS" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="scheduled-at" class="text-sm font-medium text-gray-200">Planifier la mise en ligne</label>
            <input id="scheduled-at" v-model="scheduledAt" type="datetime-local" :class="INPUT_CLASS" />
            <p class="text-xs text-gray-400">Laisse vide pour publier maintenant.</p>
          </div>
        </div>

        <div class="flex items-start justify-between gap-4 border-t border-gray-700 pt-4">
          <div class="min-w-0">
            <p class="text-sm font-medium text-gray-100">Traduire en anglais + espagnol</p>
            <p class="mt-0.5 text-xs text-gray-400">
              À la publication immédiate, pousse les traductions EN/ES (ce qui déclenche aussi le rebuild).
            </p>
          </div>
          <DibodevSwitch v-model="autoTranslate" />
        </div>

        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p class="text-sm font-medium text-gray-100">Rebuild du site après publication</p>
            <p class="mt-0.5 text-xs text-gray-400">
              Le blog est statique : un build est nécessaire pour voir l’article.
            </p>
          </div>
          <DibodevSwitch v-model="autoRebuild" />
        </div>
      </section>

      <div class="flex flex-wrap gap-3">
        <DibodevButton type="button" :disabled="!canPublish || publishing || scheduling" @click="publishNow">
          {{ publishing ? 'Publication…' : 'Publier maintenant' }}
        </DibodevButton>
        <DibodevButton
          type="button"
          outlined
          :disabled="!canPublish || !scheduledAt || publishing || scheduling"
          @click="scheduleArticle"
        >
          {{ scheduling ? 'Planification…' : 'Planifier' }}
        </DibodevButton>
      </div>
      <p v-if="!canPublish" class="text-xs text-amber-500">
        L’article n’a pas encore de contenu — reviens à l’éditeur pour le compléter.
      </p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import DibodevSwitch from '~/components/buttons/DibodevSwitch.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { ARTICLE_STATUS_BADGES } from '~/core/constants/articleStatus'
import type { ArticleRecord, ArticleStatusBadge } from '~/types/dashboard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Publication — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const localePath = useLocalePath()
const route = useRoute()
const { publishArticleById } = useArticlePublisher()

const INPUT_CLASS =
  'h-11 w-full rounded-lg border border-gray-600 bg-gray-900/50 px-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-[#8472F3] focus:bg-gray-900 focus:outline-none'

const record: Ref<ArticleRecord | null> = ref(null)
const loading: Ref<boolean> = ref(true)
const publishing: Ref<boolean> = ref(false)
const scheduling: Ref<boolean> = ref(false)

const publishDate: Ref<string> = ref('')
const scheduledAt: Ref<string> = ref('')
const autoTranslate: Ref<boolean> = ref(true)
const autoRebuild: Ref<boolean> = ref(true)

const successMessage: Ref<string> = ref('')
const errorMessage: Ref<string> = ref('')

const draftId: ComputedRef<string> = computed((): string =>
  typeof route.query.draft === 'string' ? route.query.draft : '',
)

const backToEditorLink: ComputedRef<ReturnType<typeof localePath>> = computed(() =>
  draftId.value
    ? localePath({ path: '/dashboard/generate-article', query: { draft: draftId.value } })
    : localePath('/dashboard/generate-article'),
)

const statusBadge: ComputedRef<ArticleStatusBadge> = computed(
  (): ArticleStatusBadge => (record.value ? ARTICLE_STATUS_BADGES[record.value.status] : ARTICLE_STATUS_BADGES.draft),
)

const canPublish: ComputedRef<boolean> = computed(
  (): boolean => record.value != null && record.value.content.trim().length > 0,
)

/**
 * Returns today's date as a YYYY-MM-DD string (local time).
 *
 * @returns The ISO date for today.
 */
function todayIso(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

/**
 * Persists the publication settings onto the record (content is preserved server-side).
 *
 * @param status - The target status (draft when publishing now, scheduled when planning).
 * @param scheduledAtIso - The ISO schedule datetime, for the scheduled status.
 * @returns The updated record, or null on failure.
 */
async function persistConfig(status: 'draft' | 'scheduled', scheduledAtIso?: string): Promise<ArticleRecord | null> {
  if (!record.value) return null
  try {
    const data = await $fetch<{ record: ArticleRecord }>('/api/dashboard/articles/drafts', {
      method: 'POST',
      body: {
        id: record.value.id,
        title: record.value.title,
        publishDate: publishDate.value || undefined,
        autoTranslate: autoTranslate.value,
        autoRebuild: autoRebuild.value,
        status,
        scheduledAt: scheduledAtIso,
      },
    })
    record.value = data.record
    return data.record
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de l’enregistrement des réglages.'
    return null
  }
}

/**
 * Publishes the article now: saves the settings, creates the Storyblok story, then
 * optionally translates it (which also rebuilds the site).
 *
 * @returns Nothing.
 */
async function publishNow(): Promise<void> {
  if (!record.value) return
  publishing.value = true
  errorMessage.value = ''
  successMessage.value = ''
  try {
    const saved = await persistConfig('draft')
    if (!saved) return
    await publishArticleById(saved.id, { autoTranslate: autoTranslate.value })
    await navigateTo(localePath('/dashboard/articles'))
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la publication.'
  } finally {
    publishing.value = false
  }
}

/**
 * Schedules the article for automatic publication at the chosen date/time.
 *
 * @returns Nothing.
 */
async function scheduleArticle(): Promise<void> {
  if (!record.value || !scheduledAt.value) return
  scheduling.value = true
  errorMessage.value = ''
  try {
    const scheduledAtIso = new Date(scheduledAt.value).toISOString()
    const saved = await persistConfig('scheduled', scheduledAtIso)
    if (!saved) return
    await navigateTo(localePath('/dashboard/articles'))
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la planification.'
  } finally {
    scheduling.value = false
  }
}

onMounted(async (): Promise<void> => {
  if (!draftId.value) {
    loading.value = false
    return
  }
  try {
    const data = await $fetch<{ record: ArticleRecord }>(`/api/dashboard/articles/drafts/${draftId.value}`)
    record.value = data.record
    publishDate.value = data.record.publishDate || todayIso()
    scheduledAt.value = data.record.scheduledAt ? data.record.scheduledAt.slice(0, 16) : ''
    autoTranslate.value = data.record.autoTranslate
    autoRebuild.value = data.record.autoRebuild
  } catch {
    record.value = null
  } finally {
    loading.value = false
  }
})
</script>
