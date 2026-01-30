<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useRoute } from 'nuxt/app'
import type { RouteLocationNormalizedLoadedGeneric } from '#vue-router'

type CmsPageContent = {
  seo_title?: string
  seo_description?: string
  [key: string]: unknown
}

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const isStoryblokEditor: boolean = !!route.query._storyblok

/**
 * Normalize slug params into an array of path segments.
 */
const slugSegments: ComputedRef<string[]> = computed((): string[] => {
  const param: string | string[] | undefined = route.params.slug as string | string[] | undefined
  if (!param) {
    return []
  }
  return Array.isArray(param) ? param : [param]
})

/**
 * Resolve Storyblok slug under the "pages" folder.
 *
 * - `/cms` -> `pages`
 * - `/cms/about` -> `pages/about`
 */
const storyPath: ComputedRef<string> = computed((): string => {
  const segments: string[] = slugSegments.value.filter(Boolean)
  if (segments.length === 0) {
    return 'pages'
  }
  return `pages/${segments.join('/')}`
})

const { story } = await useAsyncStoryblok(storyPath.value, {
  bridge: {},
  api: {
    version: isStoryblokEditor ? 'draft' : 'published',
  },
})

const pageTitle: ComputedRef<string> = computed((): string => {
  const content: CmsPageContent | undefined = story.value?.content as CmsPageContent | undefined
  return content?.seo_title || story.value?.name || 'Dibodev CMS'
})

const pageDescription: ComputedRef<string> = computed((): string => {
  const content: CmsPageContent | undefined = story.value?.content as CmsPageContent | undefined
  return content?.seo_description || ''
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div v-else class="mx-auto max-w-5xl px-6 py-16">
    <p class="text-sm text-neutral-600">Chargement du contenu CMS…</p>
  </div>
</template>
