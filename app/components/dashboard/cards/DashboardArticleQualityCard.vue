<template>
  <section class="flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4">
    <h2 class="flex items-center gap-2.5 text-[15px] font-medium text-gray-100">
      <DashboardIcon name="list-checks" :size="17" class="text-muted" />
      Qualité et tags
    </h2>
    <div class="flex items-center gap-3.5">
      <DashboardScoreRing :score="props.qualityScore" :size="60" :stroke-width="6" :good-threshold="80" />
      <ul class="flex min-w-0 flex-col gap-1.5 text-[13px] text-gray-200">
        <li v-for="check in qualityChecks" :key="check.label" class="flex items-start gap-2">
          <DashboardIcon
            :name="check.isPassed ? 'circle-check' : 'triangle-alert'"
            :size="15"
            class="mt-0.5"
            :class="check.isPassed ? 'text-(--dash-green)' : 'text-(--dash-amber)'"
          />
          {{ check.label }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <label for="article-tag" class="text-[13px] font-medium text-gray-200">Tags</label>
      <div v-if="props.tags.length > 0" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in props.tags"
          :key="tag"
          class="bg-surface-tint inline-flex h-7 items-center gap-1 rounded-full pr-1 pl-2.5 text-[13px] text-gray-100"
        >
          {{ tag }}
          <button
            type="button"
            class="text-muted hover:bg-accent-tint grid h-5 w-5 cursor-pointer place-items-center rounded-full hover:text-gray-100"
            :aria-label="`Retirer ${tag}`"
            @click="removeTag(tag)"
          >
            <DashboardIcon name="x" :size="12" />
          </button>
        </span>
      </div>
      <DashboardTextField
        id="article-tag"
        v-model="newTag"
        type="text"
        enterkeyhint="done"
        placeholder="Ajouter un tag, puis Entrée"
        size="sm"
        @keydown.enter.prevent="addTag"
        @keydown="addTagOnComma"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DashboardArticleQualityCardProps,
  DashboardArticleQualityCheck,
} from '~/core/types/DashboardArticleQualityCard'
import { computed, ref } from 'vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardScoreRing from '~/components/dashboard/ui/DashboardScoreRing.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

const props: DashboardArticleQualityCardProps = defineProps({
  tags: {
    type: Array as PropType<string[]>,
    required: true,
  },
  qualityScore: {
    type: Number as PropType<number | null>,
    default: null,
  },
  content: {
    type: String,
    required: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  coverUrl: {
    type: String as PropType<string | null>,
    default: null,
  },
})

const emit = defineEmits<{
  (e: 'update:tags', value: string[]): void
}>()

const CONTACT_LINK_PATTERN: RegExp = /\[[^\]]+\]\(\/(?:[a-z]{2}\/)?contact\/?\)/i

const newTag: Ref<string> = ref('')

const wordCount: ComputedRef<number> = computed((): number => DashboardFormatUtils.countWords(props.content))

const headingCount: ComputedRef<number> = computed((): number => (props.content.match(/^##\s/gm) ?? []).length)

const hasContactLink: ComputedRef<boolean> = computed((): boolean => CONTACT_LINK_PATTERN.test(props.content))

const qualityChecks: ComputedRef<DashboardArticleQualityCheck[]> = computed((): DashboardArticleQualityCheck[] => [
  {
    label: `${DashboardFormatUtils.plural(wordCount.value, 'mot')}, ${DashboardFormatUtils.plural(headingCount.value, 'intertitre')}`,
    isPassed: wordCount.value >= 600 && headingCount.value >= 3,
  },
  {
    label: 'Meta title et description dans les clous',
    isPassed:
      props.metaTitle.length >= 55 &&
      props.metaTitle.length <= 65 &&
      props.metaDescription.length >= 140 &&
      props.metaDescription.length <= 160,
  },
  {
    label: hasContactLink.value ? 'Lien vers /contact présent' : 'Aucun lien vers /contact',
    isPassed: hasContactLink.value,
  },
  {
    label: props.coverUrl ? 'Image de couverture choisie' : 'Pas d’image de couverture',
    isPassed: props.coverUrl !== null,
  },
])

/**
 * Adds the typed tag.
 *
 * @returns {void}
 */
function addTag(): void {
  const value: string = newTag.value.replace(/,/g, ' ').trim()
  if (value && !props.tags.includes(value)) emit('update:tags', [...props.tags, value])
  newTag.value = ''
}

/**
 * A comma also adds the tag (quick typing on the iPhone keyboard).
 *
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function addTagOnComma(event: KeyboardEvent): void {
  if (event.key !== ',') return
  event.preventDefault()
  addTag()
}

/**
 * Removes a tag.
 *
 * @param {string} tag - The tag to remove.
 * @returns {void}
 */
function removeTag(tag: string): void {
  emit(
    'update:tags',
    props.tags.filter((item: string): boolean => item !== tag),
  )
}
</script>
