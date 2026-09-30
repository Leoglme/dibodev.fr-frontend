<template>
  <main v-editable="blok" class="mx-auto w-full max-w-3xl px-6 pt-[120px] pb-16 sm:px-8 lg:pt-[152px] lg:pb-24">
    <StoryblokComponent v-for="nestedBlok in blok.body || []" :key="nestedBlok._uid" :blok="nestedBlok" />
  </main>
</template>

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
