<template>
  <div v-if="hasContent" class="blog-article-content max-w-none py-6" :class="props.proseClass">
    <div class="blog-article-content__inner">
      <StoryblokRichText :doc="richtextDoc" :resolvers="blokResolvers" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, h, Fragment, onBeforeUpdate } from 'vue'
import type { Component, ComputedRef, PropType, VNode } from 'vue'
import { BlockTypes } from '@storyblok/richtext'
import type { StoryblokRichTextDocumentNode, StoryblokRichTextResolvers } from '@storyblok/richtext'
import type { BlogArticleContentProps } from '~/core/types/BlogArticleContent'
import type { DibodevArticleHeading } from '~/core/utils/articleHeadings'
import { extractArticleHeadings, headingIdFromText, richtextNodeText } from '~/core/utils/articleHeadings'
import CtaButton from '~/storyblok/CtaButton.vue'
import CtaLink from '~/storyblok/CtaLink.vue'

const TOC_HEADING_LEVEL: number = 2

/**
 * Renders the Storyblok richtext of an article, including the embedded CTA blocks,
 * and gives every level-2 heading the anchor id used by the table of contents.
 */
const props: BlogArticleContentProps = defineProps({
  content: {
    type: null as unknown as PropType<unknown>,
    required: true,
  },
  proseClass: {
    type: String as PropType<string>,
    default: '',
  },
})

type EmbeddedBlok = { _uid: string; component: string }
type HeadingNode = { attrs?: { level?: number }; children?: VNode[]; content?: unknown[] }

const richtextDoc: ComputedRef<StoryblokRichTextDocumentNode> = computed(
  (): StoryblokRichTextDocumentNode =>
    props.content && typeof props.content === 'object'
      ? (props.content as StoryblokRichTextDocumentNode)
      : ({ type: 'doc', content: [] } as unknown as StoryblokRichTextDocumentNode),
)

const hasContent: ComputedRef<boolean> = computed(
  (): boolean => Array.isArray(richtextDoc.value.content) && richtextDoc.value.content.length > 0,
)

/** Maps the Universal Block components allowed in the article richtext to their Vue renderers. */
const BLOK_COMPONENTS: Record<string, Component> = {
  cta_button: CtaButton,
  cta_link: CtaLink,
}

/**
 * Anchor ids of the level-2 headings, queued by heading text so that duplicated titles keep unique ids
 * in document order. Rebuilt before each render, consumed by the heading resolver.
 * @returns {Map<string, string[]>} The ids per heading text.
 */
function buildHeadingIdQueues(): Map<string, string[]> {
  const queues: Map<string, string[]> = new Map<string, string[]>()
  for (const heading of extractArticleHeadings(richtextDoc.value)) {
    const queue: string[] = queues.get(heading.text) ?? []
    queue.push(heading.id)
    queues.set(heading.text, queue)
  }
  return queues
}

let headingIdQueues: Map<string, string[]> = buildHeadingIdQueues()

onBeforeUpdate((): void => {
  headingIdQueues = buildHeadingIdQueues()
})

/** Renders embedded Storyblok component blocks as real Vue components and anchors the level-2 headings. */
const blokResolvers: StoryblokRichTextResolvers<VNode> = {
  [BlockTypes.COMPONENT]: (node): VNode => {
    const bloks = ((node as { attrs?: { body?: EmbeddedBlok[] } }).attrs?.body ?? []) as EmbeddedBlok[]
    return h(
      Fragment,
      bloks.map((blok: EmbeddedBlok): VNode | null => {
        const component = BLOK_COMPONENTS[blok.component]
        return component ? h(component, { blok, key: blok._uid }) : null
      }),
    )
  },
  [BlockTypes.HEADING]: (node): VNode => {
    const headingNode: HeadingNode = node as HeadingNode
    const level: number = headingNode.attrs?.level ?? TOC_HEADING_LEVEL
    const text: string = richtextNodeText({ content: headingNode.content }).trim()
    const queuedId: string | undefined =
      level === TOC_HEADING_LEVEL && text ? headingIdQueues.get(text)?.shift() : undefined
    const id: string | undefined =
      level === TOC_HEADING_LEVEL && text ? (queuedId ?? headingIdFromText(text)) : undefined
    return h(`h${level}`, id ? { id } : {}, headingNode.children)
  },
}

/** Headings exposed for the table of contents of the parent page. */
const headings: ComputedRef<DibodevArticleHeading[]> = computed((): DibodevArticleHeading[] =>
  extractArticleHeadings(richtextDoc.value),
)

defineExpose({ headings })
</script>

<style scoped>
.blog-article-content__inner :deep(h1) {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-100);
}

@media (min-width: 640px) {
  .blog-article-content__inner :deep(h1) {
    font-size: 1.875rem;
  }
}

.blog-article-content__inner :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.3;
  color: var(--color-gray-100);
  scroll-margin-top: 6rem;
}

@media (min-width: 640px) {
  .blog-article-content__inner :deep(h2) {
    font-size: 1.625rem;
  }
}

.blog-article-content__inner :deep(h3) {
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--color-gray-100);
}

.blog-article-content__inner :deep(p) {
  margin-bottom: 1.25rem;
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-gray-200);
}

.blog-article-content__inner :deep(strong) {
  font-weight: 500;
  color: var(--color-gray-100);
}

.blog-article-content__inner :deep(em) {
  font-style: italic;
}

.blog-article-content__inner :deep(ul) {
  margin-bottom: 1.25rem;
  margin-left: 1.5rem;
  list-style-type: disc;
  color: var(--color-gray-200);
}

.blog-article-content__inner :deep(ol) {
  margin-bottom: 1.25rem;
  margin-left: 1.5rem;
  list-style-type: decimal;
  color: var(--color-gray-200);
}

.blog-article-content__inner :deep(li) {
  margin-bottom: 0.375rem;
  font-size: 17px;
  line-height: 1.7;
}

.blog-article-content__inner :deep(li::marker) {
  color: var(--color-muted);
}

.blog-article-content__inner :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.blog-article-content__inner :deep(a:hover) {
  color: var(--color-primary-dark);
}

/* Embedded CTA button blocks own their styling — keep the button label white and undecorated. */
.blog-article-content__inner :deep(a.dibodev-button),
.blog-article-content__inner :deep(a.dibodev-button:hover) {
  color: #ffffff;
  text-decoration: none;
}

.blog-article-content__inner :deep(blockquote) {
  margin-bottom: 1.25rem;
  padding: 0.25rem 0 0.25rem 1.25rem;
  border-left: 3px solid var(--color-primary);
  font-style: italic;
  color: var(--color-gray-200);
}

.blog-article-content__inner :deep(code) {
  padding: 0.125rem 0.375rem;
  font-size: 0.875rem;
  background-color: var(--color-gray-600);
  border-radius: 0.25rem;
  color: var(--color-gray-100);
}

.blog-article-content__inner :deep(pre) {
  margin-bottom: 1.25rem;
  padding: 1rem;
  overflow-x: auto;
  background-color: #141414;
  border-radius: 0.5rem;
  color: #f5f4fb;
}

.blog-article-content__inner :deep(pre code) {
  padding: 0;
  background-color: transparent;
  color: inherit;
}

.blog-article-content__inner :deep(img) {
  max-width: 100%;
  border-radius: 0.5rem;
}
</style>
