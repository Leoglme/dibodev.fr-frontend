<template>
  <p class="flex items-center gap-2 text-sm font-medium text-gray-100">
    <span
      class="inline-block h-2 w-2 shrink-0 rounded-full"
      :class="props.mode === 'capture' ? 'bg-amber-500' : 'bg-emerald-600'"
      aria-hidden="true"
    />
    {{ props.mode === 'capture' ? props.captureLabel : props.liveLabel }}
  </p>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevSiteAtelierPreviewMode } from '~/core/types/DibodevSiteAtelierPreview'
import type { DibodevSiteAtelierPreviewStatusProps } from '~/core/types/DibodevSiteAtelierPreviewStatus'

/**
 * Says whether the preview shows the live demo or, when it stays silent, the capture of the template.
 */
const props: DibodevSiteAtelierPreviewStatusProps = defineProps({
  mode: {
    type: String as PropType<DibodevSiteAtelierPreviewMode>,
    default: 'checking',
  },
  liveLabel: {
    type: String as PropType<string>,
    required: true,
  },
  captureLabel: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
