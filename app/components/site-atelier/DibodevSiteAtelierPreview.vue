<template>
  <div class="@container grid grid-cols-[minmax(0,1fr)] content-start gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <DibodevSiteAtelierPreviewStatus
        class="mr-auto"
        :mode="mode"
        :liveLabel="props.wording.preview.liveLabel"
        :captureLabel="props.wording.preview.captureLabel"
      />
      <DibodevSiteAtelierDeviceToggle
        class="order-last w-full @xl:order-none @xl:w-auto"
        :device="props.device"
        :groupLabel="props.wording.preview.deviceGroupLabel"
        :mobileLabel="props.wording.preview.mobile"
        :desktopLabel="props.wording.preview.desktop"
        @update:device="emit('update:device', $event)"
      />
      <button
        ref="fullScreenButton"
        type="button"
        class="hover:text-primary focus-visible:outline-primary flex h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 text-sm font-medium whitespace-nowrap text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-haspopup="dialog"
        @click="openFullScreen"
      >
        <DibodevIcon name="Expand" mode="stroke" :width="16" :height="16" aria-hidden="true" />
        {{ props.wording.preview.openFullScreen }}
      </button>
    </div>

    <p v-if="mode === 'capture'" class="text-muted text-sm leading-6">{{ props.wording.preview.captureNote }}</p>

    <DibodevSiteAtelierDemoScreen
      :template="props.template"
      :previewMessage="props.previewMessage"
      :device="props.device"
      :frameTitle="props.wording.preview.frameTitle"
      :captureAlt="props.wording.preview.captureAlt"
      :loadingLabel="props.wording.preview.loading"
      @mode-change="mode = $event"
    />

    <DibodevSiteAtelierFullScreenPreview
      :isOpen="isFullScreenOpen"
      :wording="props.wording"
      :template="props.template"
      :previewMessage="props.previewMessage"
      :device="props.device"
      @update:device="emit('update:device', $event)"
      @close="closeFullScreen"
    />
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type {
  DibodevSiteAtelierPreviewMode,
  DibodevSiteAtelierPreviewProps,
} from '~/core/types/DibodevSiteAtelierPreview'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import { nextTick, ref } from 'vue'
import DibodevSiteAtelierDemoScreen from '~/components/site-atelier/DibodevSiteAtelierDemoScreen.vue'
import DibodevSiteAtelierDeviceToggle from '~/components/site-atelier/DibodevSiteAtelierDeviceToggle.vue'
import DibodevSiteAtelierFullScreenPreview from '~/components/site-atelier/DibodevSiteAtelierFullScreenPreview.vue'
import DibodevSiteAtelierPreviewStatus from '~/components/site-atelier/DibodevSiteAtelierPreviewStatus.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/**
 * The preview column of the workshop: its toolbar (live status, phone or computer, full screen) above the live demo.
 */
const props: DibodevSiteAtelierPreviewProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  template: {
    type: Object as PropType<DibodevTradeWebsiteTemplate>,
    required: true,
  },
  previewMessage: {
    type: Object as PropType<DibodevSiteAtelierPreviewMessage>,
    required: true,
  },
  device: {
    type: String as PropType<DibodevSiteAtelierDevice>,
    default: 'desktop',
  },
})

const emit: {
  (event: 'update:device', device: DibodevSiteAtelierDevice): void
  (event: 'open-full-screen'): void
} = defineEmits<{
  (event: 'update:device', device: DibodevSiteAtelierDevice): void
  (event: 'open-full-screen'): void
}>()

/* REFS */
const fullScreenButton: Ref<HTMLButtonElement | null> = ref(null)
const mode: Ref<DibodevSiteAtelierPreviewMode> = ref('checking')
const isFullScreenOpen: Ref<boolean> = ref(false)

/* METHODS */
/**
 * Shows the demo over the whole window, with the visitor's choices.
 * @returns {void}
 */
function openFullScreen(): void {
  isFullScreenOpen.value = true
  emit('open-full-screen')
}

/**
 * Closes the full screen and gives the focus back to its button.
 * @returns {Promise<void>} Resolves once the focus is back.
 */
async function closeFullScreen(): Promise<void> {
  isFullScreenOpen.value = false
  await nextTick()
  fullScreenButton.value?.focus({ preventScroll: true })
}
</script>
