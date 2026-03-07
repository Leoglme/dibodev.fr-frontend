<template>
  <section
    v-if="html"
    id="sector-intro"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full w-screen max-w-screen flex-col items-center justify-start bg-gray-800"
  >
    <div class="grid w-full gap-16 px-3 py-36 sm:max-w-3xl sm:gap-20 sm:px-6 sm:py-48">
      <div class="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h2 v-if="title" class="w-full text-left text-2xl font-semibold text-gray-100 sm:text-[32px]">
          {{ title }}
        </h2>
        <div
          class="prose prose-invert prose-p:text-gray-100 prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline w-full max-w-none text-left text-base leading-7 font-normal text-gray-100"
          v-html="html"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  /** Titre optionnel de la section (ex. "À propos du secteur") */
  title: {
    type: String as PropType<string>,
    default: '',
  },
  /** Contenu HTML de l’intro (richtext Storyblok converti) */
  html: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
