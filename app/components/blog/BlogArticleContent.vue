<template>
  <div v-if="htmlContent" class="blog-article-content max-w-none py-6" :class="proseClass">
    <div v-html="htmlContent" class="blog-article-content__inner" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const props = withDefaults(
  defineProps<{
    content: unknown
    proseClass?: string
  }>(),
  {
    proseClass: '',
  },
)

const htmlContent: ComputedRef<string> = computed((): string => {
  if (!props.content || typeof props.content !== 'object') {
    return ''
  }

  try {
    const result = renderRichText(props.content as { type: string; content?: unknown[] })
    return typeof result === 'string' ? result : ''
  } catch {
    return ''
  }
})
</script>

<style scoped>
.blog-article-content__inner :deep(h1) {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-100, #f5f4fb);
}

@media (min-width: 640px) {
  .blog-article-content__inner :deep(h1) {
    font-size: 1.875rem;
  }
}

.blog-article-content__inner :deep(h2) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-gray-100, #f5f4fb);
}

@media (min-width: 640px) {
  .blog-article-content__inner :deep(h2) {
    font-size: 1.5rem;
  }
}

.blog-article-content__inner :deep(h3) {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-gray-100, #f5f4fb);
}

.blog-article-content__inner :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.7);
}

.blog-article-content__inner :deep(strong) {
  font-weight: 600;
  color: var(--color-gray-100, #f5f4fb);
}

.blog-article-content__inner :deep(em) {
  font-style: italic;
}

.blog-article-content__inner :deep(ul) {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  list-style-type: disc;
  color: rgba(255, 255, 255, 0.7);
}

.blog-article-content__inner :deep(ol) {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  list-style-type: decimal;
  color: rgba(255, 255, 255, 0.7);
}

.blog-article-content__inner :deep(li) {
  line-height: 1.75;
}

.blog-article-content__inner :deep(a) {
  color: #bdb3ff;
  text-decoration: underline;
}

.blog-article-content__inner :deep(a:hover) {
  color: #8472f3;
}

.blog-article-content__inner :deep(blockquote) {
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 4px solid #8472f3;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
}

.blog-article-content__inner :deep(code) {
  padding: 0.125rem 0.375rem;
  font-size: 0.875rem;
  background-color: #35424d;
  border-radius: 0.25rem;
  color: #f5f4fb;
}

.blog-article-content__inner :deep(pre) {
  margin-bottom: 1rem;
  padding: 1rem;
  overflow-x: auto;
  background-color: #222b39;
  border-radius: 0.5rem;
}

.blog-article-content__inner :deep(pre code) {
  padding: 0;
  background-color: transparent;
}

.blog-article-content__inner :deep(img) {
  max-width: 100%;
  border-radius: 0.5rem;
}
</style>
