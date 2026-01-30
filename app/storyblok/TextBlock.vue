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

<template>
  <section v-editable="blok" class="py-6">
    <div class="prose prose-neutral max-w-none">
      {{ blok.text }}
    </div>
  </section>
</template>
