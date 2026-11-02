<template>
  <div class="grid grid-cols-[minmax(0,1fr)] content-start gap-4">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="flex items-center gap-2 text-sm font-medium text-gray-100">
        <span
          class="inline-block h-2 w-2 rounded-full"
          :class="mode === 'capture' ? 'bg-amber-500' : 'bg-emerald-600'"
          aria-hidden="true"
        />
        {{ mode === 'capture' ? props.wording.preview.captureLabel : props.wording.preview.liveLabel }}
      </p>
      <div
        class="flex overflow-hidden rounded-full border border-gray-300 bg-white"
        role="group"
        :aria-label="props.wording.preview.deviceGroupLabel"
      >
        <button
          v-for="option in DEVICE_OPTIONS"
          :key="option.device"
          type="button"
          class="flex h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors"
          :class="props.device === option.device ? 'bg-primary text-white' : 'hover:text-primary text-gray-200'"
          :aria-pressed="props.device === option.device"
          @click="emit('update:device', option.device)"
        >
          <DibodevIcon :name="option.icon" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ option.device === 'mobile' ? props.wording.preview.mobile : props.wording.preview.desktop }}
        </button>
      </div>
    </div>

    <div ref="stageElement" class="flex w-full min-w-0 justify-center">
      <div
        class="relative overflow-hidden bg-white shadow-[0_24px_60px_-30px_rgba(20,20,20,0.45)] transition-[width,height] duration-300 motion-reduce:transition-none"
        :class="isPhoneFrame ? 'rounded-[34px] border-[6px] border-gray-100' : 'rounded-xl border border-gray-300'"
        :style="{ width: `${scaledWidth}px`, height: `${scaledHeight}px` }"
      >
        <iframe
          v-if="isMounted"
          :key="frameUrl"
          ref="frameElement"
          :src="frameUrl"
          :title="props.wording.preview.frameTitle"
          class="absolute left-0 origin-top-left border-0 bg-white"
          :style="{
            top: `${scaledViewportTop}px`,
            width: `${screenSize.width}px`,
            height: `${screenViewportHeight}px`,
            transform: `scale(${screenScale})`,
          }"
        />
        <template v-if="isPhoneFrame">
          <span
            class="absolute inset-x-0 top-0 flex items-center justify-center bg-gray-100"
            :style="{ height: `${scaledPhoneStatusBarHeight}px` }"
            aria-hidden="true"
          >
            <span class="h-2/5 w-1/4 rounded-full bg-black" />
          </span>
          <span
            class="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gray-100"
            :style="{ height: `${scaledPhoneHomeBarHeight}px` }"
            aria-hidden="true"
          >
            <span class="h-1/5 w-1/3 rounded-full bg-white/60" />
          </span>
        </template>
        <Transition
          leave-active-class="transition-opacity duration-[250ms] ease-[ease] motion-reduce:transition-none"
          leave-to-class="opacity-0"
        >
          <img
            v-if="mode !== 'live'"
            :src="props.template.thumbnailSrc"
            :alt="props.wording.preview.captureAlt"
            width="1200"
            height="750"
            class="absolute inset-0 z-10 h-full w-full object-cover object-top"
          />
        </Transition>
        <Transition
          leave-active-class="transition-opacity duration-[250ms] ease-[ease] motion-reduce:transition-none"
          leave-to-class="opacity-0"
        >
          <div
            v-if="mode === 'checking' && isMounted"
            class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-white/90"
            role="status"
          >
            <span
              class="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span class="text-muted text-sm">{{ props.wording.preview.loading }}</span>
          </div>
        </Transition>
      </div>
    </div>

    <div class="grid gap-3">
      <a
        :href="fullScreenUrl"
        target="_blank"
        rel="noopener"
        class="text-primary hover:text-primary-dark tap-area inline-flex w-fit items-center gap-x-1.5 text-[15px] font-medium underline-offset-4 hover:underline"
        @click="emit('open-full-screen')"
      >
        {{ props.wording.preview.openFullScreen }}
        <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" aria-hidden="true" />
      </a>
      <p class="text-muted text-sm leading-6">
        {{ mode === 'capture' ? props.wording.preview.captureNote : props.wording.preview.note }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierScreenSize,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type {
  DibodevSiteAtelierPreviewMode,
  DibodevSiteAtelierPreviewProps,
} from '~/core/types/DibodevSiteAtelierPreview'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  SITE_ATELIER_DEMO_ORIGIN,
  SITE_ATELIER_FRAME_MAX_HEIGHT_RATIOS,
  SITE_ATELIER_FRAME_MAX_HEIGHTS_PX,
  SITE_ATELIER_PHONE_HOME_BAR_HEIGHT_PX,
  SITE_ATELIER_PHONE_STATUS_BAR_HEIGHT_PX,
  SITE_ATELIER_PREVIEW_DEBOUNCE_MS,
  SITE_ATELIER_PREVIEW_READY_MESSAGE_TYPE,
  SITE_ATELIER_PREVIEW_READY_TIMEOUT_MS,
  SITE_ATELIER_SCREEN_SIZES,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { SiteAtelierPreviewUtils } from '~/core/utils/SiteAtelierPreviewUtils'

const SCALE_BEFORE_MEASURE: number = 0.4

const DEVICE_OPTIONS: { device: DibodevSiteAtelierDevice; icon: string }[] = [
  { device: 'mobile', icon: 'Smartphone' },
  { device: 'desktop', icon: 'Monitor' },
]

/**
 * The showcase demo of the picked template in a real screen scaled to the column, fed with the visitor's choices once it is ready.
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

let resizeObserver: ResizeObserver | null = null
let messageTimer: ReturnType<typeof setTimeout> | null = null
let readyTimer: ReturnType<typeof setTimeout> | null = null
let isFrameListening: boolean = false

/* REFS */
const stageElement: Ref<HTMLElement | null> = ref(null)
const frameElement: Ref<HTMLIFrameElement | null> = ref(null)
const stageWidth: Ref<number> = ref(0)
const windowHeight: Ref<number> = ref(0)
const isMounted: Ref<boolean> = ref(false)
const mode: Ref<DibodevSiteAtelierPreviewMode> = ref('checking')

/* COMPUTED */
const screenSize: ComputedRef<DibodevSiteAtelierScreenSize> = computed(
  (): DibodevSiteAtelierScreenSize => SITE_ATELIER_SCREEN_SIZES[props.device],
)
const frameUrl: ComputedRef<string> = computed((): string => SiteAtelierPreviewUtils.demoUrlOf(props.template, true))
const fullScreenUrl: ComputedRef<string> = computed((): string =>
  SiteAtelierPreviewUtils.demoUrlOf(props.template, false),
)
const frameMaxHeight: ComputedRef<number> = computed((): number => {
  const ceiling: number = SITE_ATELIER_FRAME_MAX_HEIGHTS_PX[props.device]
  return windowHeight.value > 0
    ? Math.min(windowHeight.value * SITE_ATELIER_FRAME_MAX_HEIGHT_RATIOS[props.device], ceiling)
    : ceiling
})
const screenScale: ComputedRef<number> = computed((): number => {
  if (stageWidth.value === 0) {
    return SCALE_BEFORE_MEASURE
  }
  return Math.min(1, stageWidth.value / screenSize.value.width, frameMaxHeight.value / screenSize.value.height)
})
const scaledWidth: ComputedRef<number> = computed((): number => Math.round(screenSize.value.width * screenScale.value))
const scaledHeight: ComputedRef<number> = computed((): number =>
  Math.round(screenSize.value.height * screenScale.value),
)
const isPhoneFrame: ComputedRef<boolean> = computed((): boolean => props.device === 'mobile')
const scaledPhoneStatusBarHeight: ComputedRef<number> = computed(
  (): number => SITE_ATELIER_PHONE_STATUS_BAR_HEIGHT_PX * screenScale.value,
)
const scaledPhoneHomeBarHeight: ComputedRef<number> = computed(
  (): number => SITE_ATELIER_PHONE_HOME_BAR_HEIGHT_PX * screenScale.value,
)
const scaledViewportTop: ComputedRef<number> = computed((): number =>
  isPhoneFrame.value ? scaledPhoneStatusBarHeight.value : 0,
)
const screenViewportHeight: ComputedRef<number> = computed((): number =>
  isPhoneFrame.value
    ? screenSize.value.height - SITE_ATELIER_PHONE_STATUS_BAR_HEIGHT_PX - SITE_ATELIER_PHONE_HOME_BAR_HEIGHT_PX
    : screenSize.value.height,
)

/* METHODS */
/**
 * Pushes the visitor's whole state into the demo, copied to plain data first so the reactive proxies never cross.
 * @returns {void}
 */
function postPreviewMessage(): void {
  const frameWindow: Window | null | undefined = frameElement.value?.contentWindow
  if (!frameWindow || !isFrameListening) {
    return
  }
  const plainMessage: DibodevSiteAtelierPreviewMessage = JSON.parse(JSON.stringify(props.previewMessage))
  frameWindow.postMessage(plainMessage, SITE_ATELIER_DEMO_ORIGIN)
}

/**
 * Pushes the state a moment after the last change, so typing does not flood the demo.
 * @returns {void}
 */
function schedulePreviewMessage(): void {
  if (messageTimer) {
    clearTimeout(messageTimer)
  }
  messageTimer = setTimeout(postPreviewMessage, SITE_ATELIER_PREVIEW_DEBOUNCE_MS)
}

/**
 * Waits for the demo of a new address to announce itself, and shows the capture when it stays silent.
 * @returns {void}
 */
function waitForDemo(): void {
  isFrameListening = false
  mode.value = 'checking'
  if (readyTimer) {
    clearTimeout(readyTimer)
  }
  readyTimer = setTimeout((): void => {
    if (!isFrameListening) {
      mode.value = 'capture'
    }
  }, SITE_ATELIER_PREVIEW_READY_TIMEOUT_MS)
}

/**
 * Tells whether a message is the demo of the frame saying it listens.
 * @param {MessageEvent} event - A message received by the page.
 * @returns {boolean} True for `dlh:preview-ready` coming from the frame.
 */
function isReadyMessageFromFrame(event: MessageEvent): boolean {
  const frameWindow: Window | null | undefined = frameElement.value?.contentWindow
  if (!frameWindow || event.source !== frameWindow || event.origin !== SITE_ATELIER_DEMO_ORIGIN) {
    return false
  }
  const data: unknown = event.data
  return (
    typeof data === 'object' && data !== null && Reflect.get(data, 'type') === SITE_ATELIER_PREVIEW_READY_MESSAGE_TYPE
  )
}

/**
 * Shows the live demo once it listens and sends it the whole state, since a fresh load starts from the published demo.
 * @param {MessageEvent} event - A message received by the page.
 * @returns {void}
 */
function onWindowMessage(event: MessageEvent): void {
  if (!isReadyMessageFromFrame(event)) {
    return
  }
  isFrameListening = true
  if (readyTimer) {
    clearTimeout(readyTimer)
  }
  mode.value = 'live'
  postPreviewMessage()
}

/**
 * Reads the window height, which bounds the frame.
 * @returns {void}
 */
function readWindowHeight(): void {
  windowHeight.value = window.innerHeight
}

/* WATCHERS */
watch((): DibodevSiteAtelierPreviewMessage => props.previewMessage, schedulePreviewMessage, { deep: true })

watch(frameUrl, waitForDemo)

/* LIFECYCLE */
onMounted((): void => {
  isMounted.value = true
  readWindowHeight()
  window.addEventListener('resize', readWindowHeight)
  window.addEventListener('message', onWindowMessage)
  if (stageElement.value) {
    resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]): void => {
      const entry: ResizeObserverEntry | undefined = entries[0]
      if (entry) {
        stageWidth.value = entry.contentRect.width
      }
    })
    resizeObserver.observe(stageElement.value)
  }
  waitForDemo()
})

onBeforeUnmount((): void => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', readWindowHeight)
  window.removeEventListener('message', onWindowMessage)
  if (messageTimer) {
    clearTimeout(messageTimer)
  }
  if (readyTimer) {
    clearTimeout(readyTimer)
  }
})
</script>
