<template>
  <div v-if="props.modelValue" class="group relative">
    <button
      type="button"
      class="block w-full cursor-zoom-in"
      aria-label="Agrandir la couverture"
      @click="isLightboxOpen = true"
    >
      <DashboardArticleCover :src="props.modelValue" size="lg" />
    </button>
    <div class="absolute right-3 bottom-3 flex gap-2">
      <DashboardButton
        variant="outline"
        size="sm"
        icon="sparkles"
        class="!bg-white/90 backdrop-blur"
        :loading="isSuggestingCover"
        @click="suggestCover"
      >
        Une autre photo
      </DashboardButton>
      <DashboardButton variant="outline" size="sm" icon="x" class="!bg-white/90 backdrop-blur" @click="removeCover">
        Retirer
      </DashboardButton>
    </div>
  </div>
  <div
    v-else
    class="flex flex-col gap-3 rounded-xl border border-dashed border-gray-400 bg-gray-800 p-4 sm:flex-row sm:items-center"
  >
    <DashboardButton
      variant="outline"
      icon="image"
      :loading="isSuggestingCover"
      :disabled="!props.articleTitle.trim()"
      @click="suggestCover"
    >
      Suggérer une photo
    </DashboardButton>
    <form class="flex min-w-0 flex-1 gap-2" @submit.prevent="setCoverFromCustomUrl">
      <label for="cover-url" class="sr-only">URL d’une image</label>
      <DashboardTextField
        id="cover-url"
        v-model="customCoverUrl"
        type="url"
        inputmode="url"
        placeholder="ou colle l’URL d’une image"
        size="sm"
        class="flex-1"
      />
      <DashboardButton type="submit" variant="outline" :disabled="!customCoverUrl.trim()">OK</DashboardButton>
    </form>
  </div>
  <div
    v-if="suggestedCover"
    class="flex flex-col gap-3 rounded-xl border border-gray-300 p-3 sm:flex-row sm:items-center"
  >
    <img
      :src="suggestedCover.url"
      alt="Photo proposée par Unsplash"
      class="aspect-video w-full rounded-lg object-cover sm:w-44"
    />
    <div class="min-w-0 flex-1">
      <p class="text-sm font-medium text-gray-100">Photo proposée</p>
      <p class="text-muted mt-0.5 truncate text-xs">{{ suggestedCover.attribution }}</p>
    </div>
    <div class="flex gap-2">
      <DashboardButton variant="outline" size="sm" :loading="isSuggestingCover" @click="suggestCover"
        >Une autre</DashboardButton
      >
      <DashboardButton variant="primary" size="sm" icon="check" @click="setCoverFromSuggestion"
        >Utiliser</DashboardButton
      >
    </div>
  </div>
  <p v-if="coverSuggestionError" class="text-[13px] text-(--dash-amber)">{{ coverSuggestionError }}</p>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-[ease]"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200 ease-[ease]"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isLightboxOpen && props.modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Couverture"
        @click="isLightboxOpen = false"
      >
        <img
          :src="props.modelValue"
          alt="Couverture de l’article"
          class="max-h-[90dvh] max-w-full rounded-2xl object-contain"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type {
  DashboardArticleCoverFieldProps,
  DashboardCoverSuggestionResponse,
  DashboardSuggestedCover,
} from '~/core/types/DashboardArticleCoverField'
import { ref } from 'vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'

const props: DashboardArticleCoverFieldProps = defineProps({
  modelValue: {
    type: String as PropType<string | null>,
    default: null,
  },
  articleTitle: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void
}>()

// Unsplash is English-biased: a raw French trade returns off-topic photos, so each trade maps to an English query.
const TRADE_TO_UNSPLASH_QUERY: Record<string, string> = {
  paysagiste: 'landscape gardener',
  jardinier: 'gardener',
  plombier: 'plumber',
  electricien: 'electrician',
  menuisier: 'carpenter workshop',
  charpentier: 'carpenter',
  couvreur: 'roofer',
  macon: 'bricklayer construction',
  carreleur: 'tiler',
  peintre: 'painter decorator',
  platrier: 'plasterer',
  chauffagiste: 'heating engineer',
  serrurier: 'locksmith',
  boulanger: 'bakery',
  boulangerie: 'bakery',
  patissier: 'pastry chef',
  fleuriste: 'florist',
  coiffeur: 'hair salon',
  garagiste: 'car mechanic',
  mecanicien: 'car mechanic',
  restaurateur: 'restaurant kitchen',
  restaurant: 'restaurant kitchen',
  traiteur: 'catering food',
  artisan: 'craftsman workshop',
  batiment: 'construction site',
  btp: 'construction site',
  coach: 'personal trainer',
}

const isSuggestingCover: Ref<boolean> = ref(false)
const isLightboxOpen: Ref<boolean> = ref(false)
const suggestedCover: Ref<DashboardSuggestedCover | null> = ref(null)
const coverSuggestionError: Ref<string> = ref('')
const customCoverUrl: Ref<string> = ref('')

/**
 * Builds an Unsplash query from the tags and title, preferring a mapped trade.
 *
 * @returns {string} A short search query.
 */
function buildCoverSearchQuery(): string {
  const words: string[] = [...props.tags, props.articleTitle]
    .join(' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .map((word: string): string =>
      word
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^a-z0-9]/g, ''),
    )
    .filter((word: string): boolean => word.length > 2)
  for (const word of words) {
    const mapped: string | undefined = TRADE_TO_UNSPLASH_QUERY[word] ?? TRADE_TO_UNSPLASH_QUERY[word.replace(/s$/, '')]
    if (mapped) return mapped
  }
  const firstTag: string | undefined = props.tags[0]?.trim()
  if (firstTag) return firstTag
  if (words.length >= 2) return `${words[0]} ${words[1]}`
  return words[0] ?? 'small business'
}

/**
 * Asks Unsplash for a cover matching the article.
 *
 * @returns {Promise<void>}
 */
async function suggestCover(): Promise<void> {
  isSuggestingCover.value = true
  coverSuggestionError.value = ''
  try {
    const data: DashboardCoverSuggestionResponse = await $fetch<DashboardCoverSuggestionResponse>(
      `/api/dashboard/articles/suggest-cover?query=${encodeURIComponent(buildCoverSearchQuery())}`,
    )
    if (data.url) suggestedCover.value = { url: data.url, attribution: data.attribution ?? 'Unsplash' }
    else coverSuggestionError.value = 'Aucune photo trouvée pour ce sujet.'
  } catch {
    coverSuggestionError.value = 'Impossible de contacter Unsplash.'
  } finally {
    isSuggestingCover.value = false
  }
}

/**
 * Uses the suggested photo as the cover.
 *
 * @returns {void}
 */
function setCoverFromSuggestion(): void {
  if (!suggestedCover.value) return
  emit('update:modelValue', suggestedCover.value.url)
  suggestedCover.value = null
}

/**
 * Uses a pasted image URL as the cover.
 *
 * @returns {void}
 */
function setCoverFromCustomUrl(): void {
  const url: string = customCoverUrl.value.trim()
  if (!url) return
  emit('update:modelValue', url)
  customCoverUrl.value = ''
  suggestedCover.value = null
}

/**
 * Removes the cover.
 *
 * @returns {void}
 */
function removeCover(): void {
  emit('update:modelValue', null)
  suggestedCover.value = null
}
</script>
