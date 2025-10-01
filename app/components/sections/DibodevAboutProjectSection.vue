<template>
  <!--    data-aos="fade-up"-->
  <!--    data-aos-duration="600"-->
  <section
    id="project-about"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen flex-col items-center justify-between"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-center gap-4 sm:gap-6">
        <h2 class="text-left text-2xl font-semibold text-gray-100 sm:text-[32px]">Description du projet</h2>
        <p class="text-left text-base leading-6 font-normal text-gray-100 sm:max-w-3xl sm:text-base">
          {{ props.project.longDescription }}
        </p>
      </div>
    </div>

    <div class="w-full gap-8 bg-gray-800 p-8">
      <h2 class="text-left text-2xl font-semibold text-gray-100 sm:text-center sm:text-[32px]">
        Environnement de développement
      </h2>
      <DibodevBrandsLogos :names="props.project.stack" />
    </div>
  </section>
</template>
<script setup lang="ts">
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevBrandsLogos from '~/components/icons/DibodevBrandsLogos.vue'

/* PROPS */
const props = defineProps({
  project: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
})
</script>
