<template>
  <!-- Route enfant (ex. /projets/secteur/voyage-transport) : rendre la page secteur via l’outlet -->
  <NuxtPage v-if="isSectorRoute || isCategoryRoute" />
  <!-- Route index /projets : liste des projets -->
  <template v-else>
    <DibodevProjectsLandingSection />
    <DibodevProjectTaxonomySection
      :eyebrow="t('projects.hub.typesEyebrow')"
      :title="t('projects.hub.typesTitle')"
      :intro="t('projects.hub.typesIntro')"
      :links="categoryLinks"
      variant="cards"
      tone="tint"
    />
    <DibodevProjectsSection />
    <DibodevProjectTaxonomySection
      :eyebrow="t('projects.hub.sectorsEyebrow')"
      :title="t('projects.hub.sectorsTitle')"
      :links="sectorLinks"
      variant="photoTiles"
    />
    <DibodevContactCtaSection
      :title="t('projects.cta.text')"
      :description="t('projects.cta.description')"
      :ctaText="t('projects.cta.button')"
    />
  </template>
</template>
<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { DibodevProject } from '~/core/types/DibodevProject'

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
import { usePageShareImage } from '~/composables/usePageShareImage'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { useProjectTaxonomyLinks } from '~/composables/useProjectTaxonomyLinks'
import DibodevProjectsLandingSection from '~/components/sections/DibodevProjectsLandingSection.vue'
import DibodevProjectTaxonomySection from '~/components/sections/DibodevProjectTaxonomySection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'

const CANONICAL_ORIGIN = 'https://dibodev.fr'
const SEO_LOCALES = [
  { code: 'fr', hreflang: 'fr-FR' as const },
  { code: 'en', hreflang: 'en-US' as const },
  { code: 'es', hreflang: 'es-ES' as const },
]

const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
// Also the share image of the sector and category pages, which render inside this parent route.
usePageShareImage('projects')

const { data: storyblokProjectsData } = await useProjectsWithTranslations()
const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => storyblokProjectsData.value ?? [])
const { categoryLinks, sectorLinks } = useProjectTaxonomyLinks(allProjects)

/**
 * Canonical URL of a path (no trailing slash, no query string).
 * @param {string} path - The route path.
 * @returns {string} The canonical URL.
 */
function buildCanonicalUrl(path: string): string {
  const normalized = normalizeUrlPath(path)
  const pathPart = normalized === '/' ? '' : normalized
  return `${CANONICAL_ORIGIN}${pathPart}`
}

useHead(() => {
  const path = (route.path && String(route.path)) || '/projets'
  const canonicalUrl = buildCanonicalUrl(path)
  // `key` alignée sur useSeoMetaFromI18n : dédup Unhead (évite un double jeu d'alternates sur /projets).
  const alternateLinks: Array<{ rel: string; hreflang: string; href: string; key: string }> = []
  for (const { code, hreflang } of SEO_LOCALES) {
    const p = switchLocalePath(code)
    const targetPath = typeof p === 'string' && p.trim() ? p : path
    alternateLinks.push({
      rel: 'alternate',
      hreflang,
      href: buildCanonicalUrl(targetPath),
      key: `i18n-alternate-${hreflang}`,
    })
  }
  const defaultPath = switchLocalePath('fr')
  alternateLinks.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: buildCanonicalUrl(typeof defaultPath === 'string' && defaultPath.trim() ? defaultPath : path),
    key: 'i18n-alternate-x-default',
  })

  const title = t('meta.projectsPage.title')
  const description = t('meta.projectsPage.description')
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonicalUrl },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }, ...alternateLinks],
  }
})
</script>
