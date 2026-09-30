<template>
  <section v-if="props.articles.length > 0" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12">
      <DibodevSectionHeading :eyebrow="displayEyebrow" :title="props.title" :intro="props.intro" />
      <div class="grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
        <BlogArticleCard
          v-for="(article, articleIndex) in props.articles"
          :key="article.slug"
          :isWideOnTablet="articleIndex === tabletWideArticleIndex"
          :title="article.title"
          :excerpt="article.excerpt"
          :date="article.date"
          :cover-image-url="article.coverImageUrl"
          :tags="article.tags"
          :reading-time-minutes="article.readingTimeMinutes"
          :route="article.route"
          source="related"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { BlogRelatedArticlesProps } from '~/core/types/BlogRelatedArticles'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import BlogArticleCard from '~/components/blog/BlogArticleCard.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/**
 * Related articles listed under an article or a service page.
 */
const props: BlogRelatedArticlesProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  articles: {
    type: Array as PropType<DibodevArticle[]>,
    default: (): DibodevArticle[] => [],
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

const { t } = useI18n()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const displayEyebrow: ComputedRef<string> = computed((): string =>
  props.eyebrow.trim() ? props.eyebrow : t('blog.related.eyebrow'),
)
/** Last card of an odd list, widened on two-column tablets so no card sits alone on its row (-1 when none). */
const tabletWideArticleIndex: ComputedRef<number> = computed((): number =>
  props.articles.length > 1 && props.articles.length % 2 === 1 ? props.articles.length - 1 : -1,
)
</script>
