<template>
  <NuxtLink
    role="button"
    :to="props.repoUrl"
    target="_blank"
    class="focus:shadow-outline focus:shadow-outline inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-1 border-gray-300 bg-[#1C2128] px-8 py-3 leading-6 font-semibold text-gray-100 transition duration-150 ease-in-out select-none hover:bg-[#161B22] focus:outline-none active:bg-[#1C2128]"
  >
    <DibodevIcon name="Github" :width="20" :height="20" mode="stroke" />
    <span> Visiter le dépôt GitHub </span>
  </NuxtLink>
</template>
<script setup lang="ts">
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevGitHubButtonProps } from '~/core/types/DibodevGitHubButton'

const props: DibodevGitHubButtonProps = defineProps({
  repoUrl: {
    type: String,
    required: true,
  },
})
</script>
