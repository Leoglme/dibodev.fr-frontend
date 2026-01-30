<template>
  <section
    data-aos="fade-up"
    data-aos-duration="600"
    id="project-about"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen flex-col items-center justify-start gap-32"
  >
    <div class="grid w-full gap-16 px-3 py-36 sm:max-w-4xl sm:gap-20 sm:py-48">
      <div class="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h2 class="w-full text-left text-2xl font-semibold text-gray-100 sm:text-[32px]">Description du projet</h2>
        <p class="text-left text-base leading-7 font-normal text-gray-100 sm:text-base">
          {{ props.project.longDescription }}
        </p>
      </div>
    </div>

    <div class="grid w-full items-center justify-center gap-8 bg-gray-800 p-8">
      <h2 class="text-left text-2xl font-semibold text-gray-100 sm:text-center sm:text-[32px]">
        Environnement de développement
      </h2>
      <DibodevBrandsLogos :names="props.project.stack" />
      <div v-if="props.project.repoUrl" class="flex items-center justify-center">
        <DibodevGitHubButton :repoUrl="props.project.repoUrl" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevBrandsLogos from '~/components/icons/DibodevBrandsLogos.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevGitHubButton from '~/components/buttons/DibodevGitHubButton.vue'

/* PROPS */
const props = defineProps({
  project: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
})
</script>
