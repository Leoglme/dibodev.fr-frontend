<template>
  <div ref="previewRoot" class="dashboard-root site-preview" inert>
    <DibodevFeaturedProjectsSection :projectSlugs="homePageContent.featuredProjectSlugs" />
  </div>
</template>

<script lang="ts" setup>
import type { SiteEditorPreviewMessage } from '~/core/types/SiteEditorPreview'
import type { Ref } from 'vue'
import type { HomePageContent } from '~~/server/types/dashboard/homePage'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import '~/assets/css/dashboard.css'
import DibodevFeaturedProjectsSection from '~/components/sections/DibodevFeaturedProjectsSection.vue'
import { HOME_PAGE_CONTENT } from '~/core/constants/homePageContent'
import { SITE_EDITOR_PREVIEW_CHANNEL } from '~/core/constants/siteEditorPreview'
import { HomePageContentUtils } from '~/core/utils/HomePageContentUtils'
import { SiteEditorPreviewUtils } from '~/core/utils/SiteEditorPreviewUtils'

definePageMeta({
  layout: false,
})

useHead({
  title: 'Aperçu · Dibodev Admin',
  // The editor sizes the frame to the content: a scrollbar would only narrow the simulated screen.
  htmlAttrs: { class: 'overflow-hidden' },
})

const previewRoot: Ref<HTMLDivElement | null> = ref(null)
const homePageContent: Ref<HomePageContent> = ref(HOME_PAGE_CONTENT)
let heightObserver: ResizeObserver | null = null

/**
 * Applies the draft content sent by the editor.
 *
 * @param {MessageEvent} event - The message received from the editor window.
 * @returns {void}
 */
function onEditorMessage(event: MessageEvent): void {
  const message: SiteEditorPreviewMessage | null = SiteEditorPreviewUtils.readMessage(event, window.parent)
  if (message?.type !== 'content') return
  homePageContent.value = HomePageContentUtils.normalize(message.homePageContent)
  // Answering every content message lets an editor that missed the first announcement know the frame is alive.
  reportHeight()
}

/**
 * Tells the editor how tall the previewed content is, so the frame shows all of it.
 *
 * @returns {void}
 */
function reportHeight(): void {
  SiteEditorPreviewUtils.postMessage(window.parent, {
    channel: SITE_EDITOR_PREVIEW_CHANNEL,
    type: 'height',
    height: previewRoot.value?.offsetHeight ?? 0,
  })
}

onMounted((): void => {
  if (window.parent === window) return
  window.addEventListener('message', onEditorMessage)
  heightObserver = new ResizeObserver(reportHeight)
  if (previewRoot.value) heightObserver.observe(previewRoot.value)
  SiteEditorPreviewUtils.postMessage(window.parent, { channel: SITE_EDITOR_PREVIEW_CHANNEL, type: 'ready' })
  // The prerendered page holds the projects known at build time: projects published since then are loaded here.
  refreshNuxtData().catch((): void => undefined)
})

onBeforeUnmount((): void => {
  window.removeEventListener('message', onEditorMessage)
  heightObserver?.disconnect()
})
</script>

<style scoped>
/* Sections wait for the scroll animation library to reveal them; it only runs in the public layout. */
.site-preview :deep([data-aos]) {
  opacity: 1 !important;
  transform: none !important;
}
</style>
