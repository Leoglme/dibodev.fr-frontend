<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <agentation-vue />
  </ClientOnly>
</template>

<script setup lang="ts">
useSeoMetaFromI18n()
</script>
