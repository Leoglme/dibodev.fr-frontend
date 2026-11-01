<template>
  <a
    v-for="(download, index) in props.downloads"
    :key="download.href"
    :href="download.href"
    download
    class="focus-visible:ring-primary flex items-center gap-4 rounded-lg border px-5 py-3.5 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    :class="index === 0 ? PRIMARY_DOWNLOAD_CLASSES : SECONDARY_DOWNLOAD_CLASSES"
    @click="onDownloadClick(download)"
  >
    <DibodevIcon name="Download" mode="stroke" :width="20" :height="20" class="shrink-0" aria-hidden="true" />
    <span class="grid gap-0.5">
      <span class="text-[15px] leading-6 font-medium">{{ download.label }}</span>
      <span class="text-xs leading-5 opacity-80">{{ download.format }}</span>
    </span>
  </a>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type {
  DibodevFreeTemplateDownload,
  DibodevFreeTemplateDownloadLinksProps,
} from '~/core/types/DibodevFreeTemplateSection'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** The first file is the main one (violet button), the others are outlined. */
const PRIMARY_DOWNLOAD_CLASSES: string = 'bg-primary hover:bg-primary-dark border-transparent text-white'
const SECONDARY_DOWNLOAD_CLASSES: string = 'border-gray-400 bg-transparent text-gray-100 hover:bg-gray-800'

/**
 * One download button per file of a free template (PDF, Excel…), each click sent to PostHog with the file path.
 */
const props: DibodevFreeTemplateDownloadLinksProps = defineProps({
  downloads: {
    type: Array as PropType<DibodevFreeTemplateDownload[]>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { track } = useTracking()

/**
 * Sends the download event of a file of the template.
 * @param {DibodevFreeTemplateDownload} download - The file clicked.
 * @returns {void}
 */
function onDownloadClick(download: DibodevFreeTemplateDownload): void {
  track(TRACKING_EVENTS.fileDownloadClicked, { file: download.href, location: props.trackingLocation })
}
</script>
