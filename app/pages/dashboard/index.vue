<template>
  <div class="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
    <header class="mb-10">
      <h1 class="text-2xl font-semibold text-gray-100">Dashboard</h1>
      <p class="mt-2 text-gray-200">
        Bienvenue sur le back-office. Accédez aux outils ci-dessous pour générer du contenu, suivre l’indexation Google,
        gérer les traductions et auditer le SEO et les performances du site.
      </p>
    </header>

    <nav class="grid gap-6 sm:grid-cols-2" aria-label="Sections du dashboard">
      <NuxtLink
        :to="localePath('/dashboard/generate-article')"
        class="group hover:border-primary flex flex-col rounded-xl border border-gray-600 bg-gray-800 p-6 transition-colors hover:bg-gray-700"
      >
        <h2 class="group-hover:text-primary text-lg font-semibold text-gray-100">Générer un article</h2>
        <p class="mt-2 flex-1 text-sm text-gray-300">
          Créer un article de blog à partir d’une fiche (sujet, persona, angle). Génération du contenu et des
          métadonnées SEO.
        </p>
        <span class="text-primary mt-4 inline-flex items-center text-sm font-medium">
          Ouvrir
          <DibodevIcon name="ChevronRight" class="ml-1 h-4 w-4" mode="stroke" />
        </span>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/dashboard/indexing')"
        class="group hover:border-primary flex flex-col rounded-xl border border-gray-600 bg-gray-800 p-6 transition-colors hover:bg-gray-700"
      >
        <h2 class="group-hover:text-primary text-lg font-semibold text-gray-100">Indexation Google</h2>
        <p class="mt-2 flex-1 text-sm text-gray-300">
          Liste des pages du site et statut d’indexation dans Google Search Console. Actualiser les données et inspecter
          les URLs.
        </p>
        <span class="text-primary mt-4 inline-flex items-center text-sm font-medium">
          Ouvrir
          <DibodevIcon name="ChevronRight" class="ml-1 h-4 w-4" mode="stroke" />
        </span>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/dashboard/translations')"
        class="group hover:border-primary flex flex-col rounded-xl border border-gray-600 bg-gray-800 p-6 transition-colors hover:bg-gray-700"
      >
        <h2 class="group-hover:text-primary text-lg font-semibold text-gray-100">Traductions</h2>
        <p class="mt-2 flex-1 text-sm text-gray-300">
          Traduire le contenu des projets et des articles (FR → EN, ES). Pousse des fichiers sur le dépôt GitHub.
        </p>
        <span class="text-primary mt-4 inline-flex items-center text-sm font-medium">
          Ouvrir
          <DibodevIcon name="ChevronRight" class="ml-1 h-4 w-4" mode="stroke" />
        </span>
      </NuxtLink>

      <NuxtLink
        :to="localePath('/dashboard/audit')"
        class="group hover:border-primary flex flex-col rounded-xl border border-gray-600 bg-gray-800 p-6 transition-colors hover:bg-gray-700"
      >
        <h2 class="group-hover:text-primary text-lg font-semibold text-gray-100">Audit SEO & Performance</h2>
        <p class="mt-2 flex-1 text-sm text-gray-300">
          Liste des pages du site (sitemap) et rapport Lighthouse par page : performance, accessibilité, SEO, bonnes
          pratiques.
        </p>
        <span class="text-primary mt-4 inline-flex items-center text-sm font-medium">
          Ouvrir
          <DibodevIcon name="ChevronRight" class="ml-1 h-4 w-4" mode="stroke" />
        </span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

definePageMeta({
  layout: 'dashboard',
})

const localePath = useLocalePath()

useHead({
  title: 'Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
