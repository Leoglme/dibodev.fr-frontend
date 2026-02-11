<template>
  <div class="mx-auto max-w-7xl px-6 py-12">
    <h1 class="text-2xl font-semibold text-gray-100">Dashboard</h1>
    <p class="mt-2 text-gray-100">Bienvenue sur le dashboard. Utilisez le menu pour générer un article.</p>
    <div class="mt-6">
      <NuxtLink
        :to="localePath('/dashboard/generate-article')"
        class="inline-flex items-center rounded-md bg-[#8472F3] px-4 py-3 font-medium text-white hover:bg-[#6B59D9]"
      >
        Générer un article
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
const localePath = useLocalePath()

useHead({
  title: 'Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
