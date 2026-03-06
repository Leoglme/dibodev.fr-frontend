<template>
  <!-- Route enfant (ex. /projets/secteur/voyage-transport) : rendre la page secteur via l’outlet -->
  <NuxtPage v-if="isSectorRoute || isCategoryRoute" />
  <!-- Route index /projets : liste des projets -->
  <template v-else>
    <DibodevProjectsLandingSection />
    <DibodevProjectsSection />
  </template>
</template>
<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

definePageMeta({
  i18n: {
    paths: {
      fr: '/projets',
      en: '/projects',
      es: '/proyectos',
    },
  },
})

const route: RouteLocationNormalizedLoaded = useRoute()
const isSectorRoute: ComputedRef<boolean> = computed((): boolean => {
  const p: string = route.path ?? ''
  return p.includes('/secteur/') || p.includes('/sector/')
})
const isCategoryRoute: ComputedRef<boolean> = computed((): boolean => {
  const p: string = route.path ?? ''
  return p.includes('/categorie/') || p.includes('/category/') || p.includes('/categoria/')
})

import { normalizeUrlPath } from '~/composables/useSeoMetaFromI18n'
import DibodevProjectsLandingSection from '~/components/sections/DibodevProjectsLandingSection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
// import DibodevPricingSection from '~/components/sections/DibodevPricingSection.vue'

const CANONICAL_ORIGIN = 'https://dibodev.fr'
const SEO_LOCALES = [
  { code: 'fr', hreflang: 'fr-FR' as const },
  { code: 'en', hreflang: 'en-US' as const },
  { code: 'es', hreflang: 'es-ES' as const },
]

const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function buildCanonicalUrl(path: string): string {
  const normalized = normalizeUrlPath(path)
  const pathPart = normalized === '/' ? '' : normalized
  return `${CANONICAL_ORIGIN}${pathPart}`
}

useHead(() => {
  const path = (route.path && String(route.path)) || '/projets'
  const canonicalUrl = buildCanonicalUrl(path)
  const alternateLinks: Array<{ rel: string; hreflang: string; href: string }> = []
  for (const { code, hreflang } of SEO_LOCALES) {
    const p = switchLocalePath(code)
    const targetPath = typeof p === 'string' && p.trim() ? p : path
    alternateLinks.push({ rel: 'alternate', hreflang, href: buildCanonicalUrl(targetPath) })
  }
  const defaultPath = switchLocalePath('fr')
  alternateLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: buildCanonicalUrl(typeof defaultPath === 'string' && defaultPath.trim() ? defaultPath : path),
  })

  const title = t('meta.projectsPage.title')
  const description = t('meta.projectsPage.description')
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }, ...alternateLinks],
  }
})
</script>
