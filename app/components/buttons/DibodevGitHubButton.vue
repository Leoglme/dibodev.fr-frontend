<template>
  <NuxtLink
    role="button"
    :to="props.repoUrl"
    target="_blank"
    rel="noopener noreferrer"
    @click="track(TRACKING_EVENTS.projectRepoVisited, { repoUrl: props.repoUrl })"
    class="focus-visible:ring-primary inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-[#141414] px-6 py-3 text-[15px] leading-6 font-medium text-white transition duration-150 ease-in-out select-none hover:bg-[#2c2c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  >
    <DibodevIcon name="Github" :width="20" :height="20" mode="stroke" aria-hidden="true" />
    <span>{{ $t('project.about.githubButton') }}</span>
  </NuxtLink>
</template>
<script setup lang="ts">
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevGitHubButtonProps } from '~/core/types/DibodevGitHubButton'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Black button linking to the public repository of a project.
 */
const props: DibodevGitHubButtonProps = defineProps({
  repoUrl: {
    type: String,
    required: true,
  },
})

const { track } = useTracking()
</script>
