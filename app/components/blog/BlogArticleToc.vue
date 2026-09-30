<template>
  <nav class="grid gap-3 rounded-lg border border-gray-300 bg-white p-5" :aria-label="$t('blog.toc.title')">
    <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ $t('blog.toc.title') }}</p>
    <ol class="grid gap-2">
      <li v-for="heading in props.headings" :key="heading.id">
        <a :href="`#${heading.id}`" class="hover:text-primary text-[15px] leading-6 text-gray-200 transition-colors">
          {{ heading.text }}
        </a>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BlogArticleTocProps } from '~/core/types/BlogArticleToc'
import type { DibodevArticleHeading } from '~/core/utils/articleHeadings'

/**
 * Table of contents of an article: anchor links to its level-2 headings.
 */
const props: BlogArticleTocProps = defineProps({
  headings: {
    type: Array as PropType<DibodevArticleHeading[]>,
    required: true,
  },
})
</script>
