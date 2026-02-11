<template>
  <div class="flex flex-col gap-10 px-6 py-12 sm:gap-8 sm:px-8">
    <div>
      <h1 class="text-2xl font-semibold text-gray-100">Générer un article</h1>
      <p class="mt-1 text-gray-400">
        Proposition de sujet (avec liste des sujets déjà traités), puis génération et création dans Storyblok.
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <DibodevLabel id="optional-sentence"> Idée optionnelle (une phrase pour orienter le sujet) </DibodevLabel>
      <textarea
        id="optional-sentence"
        v-model="optionalSentence"
        rows="3"
        placeholder="Ex: un article pour les plombiers qui cherchent un site vitrine"
        class="w-full rounded border-2 border-transparent bg-gray-600 px-3 py-2 text-gray-100 placeholder:text-base placeholder:text-gray-300 hover:border-gray-300 focus:border-[#8472F3] focus:bg-gray-800 focus:outline-none"
      />
    </div>

    <div v-if="step === 'idle'" class="flex flex-col gap-4">
      <DibodevButton type="button" :disabled="loadingSubject" @click="suggestSubject">
        {{ loadingSubject ? 'Proposition…' : 'Proposer un sujet' }}
      </DibodevButton>
      <DibodevAlert v-if="errorSubject" :message="errorSubject" variant="error" dismissible @hide="errorSubject = ''" />
    </div>

    <div
      v-if="step === 'subject' && suggestedTopic"
      class="flex flex-col gap-4 rounded-lg border border-gray-600 bg-gray-800 p-6"
    >
      <p class="text-sm text-gray-400">Sujet proposé</p>
      <p class="text-lg font-medium text-gray-100">
        {{ suggestedTopic }}
      </p>
      <div class="flex flex-wrap gap-3">
        <DibodevButton type="button" :disabled="loadingArticle" @click="generateArticle">
          {{ loadingArticle ? 'Génération…' : 'OK, générer l’article' }}
        </DibodevButton>
        <DibodevButton type="button" outlined :disabled="loadingSubject" @click="suggestSubject">
          Non, un autre sujet
        </DibodevButton>
      </div>
      <DibodevAlert v-if="errorArticle" :message="errorArticle" variant="error" dismissible @hide="errorArticle = ''" />
    </div>

    <div v-if="step === 'preview' && article" class="flex flex-col gap-6">
      <div class="rounded-lg border border-gray-600 bg-gray-800 p-6">
        <h2 class="text-lg font-semibold text-gray-100">Aperçu</h2>
        <p class="mt-1 text-sm text-gray-400">{{ article.title }} — {{ article.slug }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <DibodevBadge v-for="tag in article.tags" :key="tag" backgroundColor="#35424d" textColor="#f5f4fb" size="sm">
            {{ tag }}
          </DibodevBadge>
        </div>
        <div class="mt-6 max-h-[60vh] overflow-y-auto rounded border border-gray-600 bg-gray-900 p-6">
          <BlogArticleContent :content="article.contentRichtext" />
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
          <DibodevButton type="button" :disabled="creating" @click="createInStoryblok">
            {{ creating ? 'Création…' : 'Valider et créer dans Storyblok' }}
          </DibodevButton>
          <DibodevButton type="button" outlined @click="step = 'subject'"> Revenir au sujet </DibodevButton>
        </div>
        <div class="mt-4 flex flex-col gap-2">
          <DibodevAlert
            v-if="errorCreate"
            :message="errorCreate"
            variant="error"
            dismissible
            @hide="errorCreate = ''"
          />
          <DibodevAlert
            v-if="createSuccess"
            :message="createSuccess"
            variant="success"
            dismissible
            @hide="createSuccess = ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import type { GeneratedArticleForPreview } from '~/types/dashboard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Générer un article — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type Step = 'idle' | 'subject' | 'preview'

const optionalSentence: Ref<string> = ref('')
const existingSubjects: Ref<string[]> = ref([])
const step: Ref<Step> = ref('idle')
const suggestedTopic: Ref<string> = ref('')
const loadingSubject: Ref<boolean> = ref(false)
const errorSubject: Ref<string> = ref('')
const loadingArticle: Ref<boolean> = ref(false)
const errorArticle: Ref<string> = ref('')
const article: Ref<GeneratedArticleForPreview | null> = ref<GeneratedArticleForPreview | null>(null)
const creating: Ref<boolean> = ref(false)
const errorCreate: Ref<string> = ref('')
const createSuccess: Ref<string> = ref('')

async function fetchSubjects(): Promise<void> {
  try {
    const data = await $fetch<{ existingSubjects: string[] }>('/api/dashboard/articles/subjects')
    existingSubjects.value = data.existingSubjects ?? []
  } catch {
    existingSubjects.value = []
  }
}

async function suggestSubject(): Promise<void> {
  loadingSubject.value = true
  errorSubject.value = ''
  errorArticle.value = ''
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const data = await $fetch<{ suggestedTopic: string }>('/api/dashboard/articles/suggest-subject', {
      method: 'POST',
      body: {
        existingSubjects: existingSubjects.value,
        optionalSentence: optionalSentence.value.trim() || undefined,
      },
    })
    suggestedTopic.value = data.suggestedTopic
    step.value = 'subject'
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la proposition du sujet.'
    errorSubject.value = msg
  } finally {
    loadingSubject.value = false
  }
}

async function generateArticle(): Promise<void> {
  if (!suggestedTopic.value) return
  loadingArticle.value = true
  errorArticle.value = ''
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const data = await $fetch<GeneratedArticleForPreview>('/api/dashboard/articles/generate', {
      method: 'POST',
      body: {
        suggestedTopic: suggestedTopic.value,
        existingSubjects: existingSubjects.value,
      },
    })
    article.value = data
    step.value = 'preview'
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la génération.'
    errorArticle.value = msg
  } finally {
    loadingArticle.value = false
  }
}

async function createInStoryblok(): Promise<void> {
  if (!article.value) return
  creating.value = true
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const data = await $fetch<{ storyId: number; fullSlug: string; message: string }>(
      '/api/dashboard/articles/create-storyblok',
      {
        method: 'POST',
        body: { article: article.value },
      },
    )
    createSuccess.value = `${data.message} (${data.fullSlug})`
    existingSubjects.value = [...existingSubjects.value, article.value.title]
    step.value = 'idle'
    suggestedTopic.value = ''
    article.value = null
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la création Storyblok.'
    errorCreate.value = msg
  } finally {
    creating.value = false
  }
}

onMounted(() => {
  fetchSubjects()
})
</script>
