<script setup lang="ts">
type SbBlok = {
  _uid: string
  component: string
  [key: string]: unknown
}

type PageBlok = SbBlok & {
  body?: SbBlok[]
}

defineProps<{
  blok: PageBlok
}>()
</script>

<template>
  <main v-editable="blok" class="mx-auto max-w-6xl px-6 py-10">
    <StoryblokComponent v-for="nestedBlok in blok.body || []" :key="nestedBlok._uid" :blok="nestedBlok" />
  </main>
</template>
