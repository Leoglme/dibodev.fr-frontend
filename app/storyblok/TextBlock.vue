<template>
  <section v-editable="blok" class="py-4">
    <p class="text-[17px] leading-7 whitespace-pre-line text-gray-200">
      {{ blok.text }}
    </p>
  </section>
</template>

<script setup lang="ts">
type SbBlok = {
  _uid: string
  component: string
  [key: string]: unknown
}

type TextBlockBlok = SbBlok & {
  text?: string
}

defineProps<{
  blok: TextBlockBlok
}>()
</script>
