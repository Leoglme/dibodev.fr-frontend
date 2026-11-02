<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none"
      enter-from-class="scale-[0.98] opacity-0"
      leave-active-class="transition-opacity duration-150 ease-in motion-reduce:transition-none"
      leave-to-class="opacity-0"
      @after-leave="leaveHistoryEntry"
    >
      <div
        v-if="props.isOpen"
        class="site-atelier-full-screen fixed inset-0 z-[9999] flex flex-col bg-gray-800"
        role="dialog"
        aria-modal="true"
        :aria-label="props.wording.preview.fullScreenTitle"
      >
        <div class="flex h-16 shrink-0 items-center gap-3 border-b border-gray-300 bg-white px-4 sm:px-6">
          <div class="mr-auto hidden sm:block">
            <DibodevSiteAtelierPreviewStatus
              :mode="mode"
              :liveLabel="props.wording.preview.liveLabel"
              :captureLabel="props.wording.preview.captureLabel"
            />
          </div>
          <DibodevSiteAtelierDeviceToggle
            class="mr-auto sm:mr-0"
            :device="props.device"
            :groupLabel="props.wording.preview.deviceGroupLabel"
            :mobileLabel="props.wording.preview.mobile"
            :desktopLabel="props.wording.preview.desktop"
            @update:device="emit('update:device', $event)"
          />
          <button
            ref="closeButton"
            type="button"
            class="hover:text-primary focus-visible:outline-primary flex h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 text-sm font-medium text-gray-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-4"
            :aria-label="props.wording.preview.closeFullScreen"
            @click="emit('close')"
          >
            <DibodevIcon name="X" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            <span class="hidden sm:inline">{{ props.wording.preview.closeFullScreen }}</span>
          </button>
        </div>
        <div class="min-h-0 flex-1 p-4 sm:p-6">
          <DibodevSiteAtelierDemoScreen
            :template="props.template"
            :previewMessage="props.previewMessage"
            :device="props.device"
            isFullScreen
            :frameTitle="props.wording.preview.frameTitle"
            :captureAlt="props.wording.preview.captureAlt"
            :loadingLabel="props.wording.preview.loading"
            @mode-change="mode = $event"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierFullScreenPreviewProps } from '~/core/types/DibodevSiteAtelierFullScreenPreview'
import type { DibodevSiteAtelierPreviewMode } from '~/core/types/DibodevSiteAtelierPreview'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import DibodevSiteAtelierDemoScreen from '~/components/site-atelier/DibodevSiteAtelierDemoScreen.vue'
import DibodevSiteAtelierDeviceToggle from '~/components/site-atelier/DibodevSiteAtelierDeviceToggle.vue'
import DibodevSiteAtelierPreviewStatus from '~/components/site-atelier/DibodevSiteAtelierPreviewStatus.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const FULL_SCREEN_HISTORY_KEY: string = 'siteAtelierFullScreen'
const APP_ROOT_ID: string = '__nuxt'

/**
 * The live demo over the whole window, with the visitor's choices; the close button, Escape and the back button close it without leaving the page.
 */
const props: DibodevSiteAtelierFullScreenPreviewProps = defineProps({
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
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit: {
  (event: 'update:device', device: DibodevSiteAtelierDevice): void
  (event: 'close'): void
} = defineEmits<{
  (event: 'update:device', device: DibodevSiteAtelierDevice): void
  (event: 'close'): void
}>()

let ownsHistoryEntry: boolean = false
let pageUrlAtOpening: string = ''

/* REFS */
const closeButton: Ref<HTMLButtonElement | null> = ref(null)
const mode: Ref<DibodevSiteAtelierPreviewMode> = ref('checking')

/* METHODS */
/**
 * Tells whether a history state is the entry added when the full screen opened.
 * @param {unknown} state - A history state.
 * @returns {boolean} True for the full screen entry.
 */
function isFullScreenHistoryState(state: unknown): boolean {
  return typeof state === 'object' && state !== null && Reflect.get(state, FULL_SCREEN_HISTORY_KEY) === true
}

/**
 * Adds a history entry on the same address, keeping the router's state, so the back button closes the full screen.
 * @returns {void}
 */
function addHistoryEntry(): void {
  const currentState: unknown = window.history.state
  const routerState: object = typeof currentState === 'object' && currentState !== null ? currentState : {}
  pageUrlAtOpening = window.location.href
  window.history.pushState({ ...routerState, [FULL_SCREEN_HISTORY_KEY]: true }, '')
  ownsHistoryEntry = true
  window.addEventListener('popstate', onPopState, { capture: true })
}

/**
 * Stops listening to the history once the full screen entry is left.
 * @returns {void}
 */
function releaseHistoryEntry(): void {
  ownsHistoryEntry = false
  window.removeEventListener('popstate', onPopState, { capture: true })
}

/**
 * Closes the full screen when the visitor goes back, and keeps the router out of it while the address stays the page's.
 * @param {PopStateEvent} event - The history change.
 * @returns {void}
 */
function onPopState(event: PopStateEvent): void {
  if (window.location.href === pageUrlAtOpening) {
    event.stopImmediatePropagation()
  }
  releaseHistoryEntry()
  if (props.isOpen) {
    emit('close')
  }
}

/**
 * Once the full screen is gone, steps back over its history entry when the close button or Escape closed it.
 * @returns {void}
 */
function leaveHistoryEntry(): void {
  if (ownsHistoryEntry && isFullScreenHistoryState(window.history.state)) {
    window.history.back()
  }
}

/**
 * Closes the full screen with the Escape key.
 * @param {KeyboardEvent} event - The key pressed.
 * @returns {void}
 */
function closeOnEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    emit('close')
  }
}

/**
 * Freezes or frees the page under the full screen: its scroll, and its links for the keyboard.
 * @param {boolean} isFrozen - True while the full screen is open.
 * @returns {void}
 */
function setPageFrozen(isFrozen: boolean): void {
  document.body.style.overflow = isFrozen ? 'hidden' : ''
  const appRoot: HTMLElement | null = document.getElementById(APP_ROOT_ID)
  if (appRoot) {
    appRoot.inert = isFrozen
  }
}

/**
 * Sets the page up for the full screen, then gives the focus to the close button.
 * @returns {Promise<void>} Resolves once the full screen is rendered.
 */
async function onOpen(): Promise<void> {
  setPageFrozen(true)
  document.addEventListener('keydown', closeOnEscape)
  if (!ownsHistoryEntry) {
    addHistoryEntry()
  }
  await nextTick()
  closeButton.value?.focus()
}

/**
 * Gives the page back its scroll and its keyboard.
 * @returns {void}
 */
function onClose(): void {
  setPageFrozen(false)
  document.removeEventListener('keydown', closeOnEscape)
}

/* WATCHERS */
watch(
  (): boolean => props.isOpen,
  (isOpen: boolean): void => {
    if (isOpen) {
      onOpen()
      return
    }
    onClose()
  },
)

/* LIFECYCLE */
onBeforeUnmount((): void => {
  if (props.isOpen) {
    onClose()
  }
  releaseHistoryEntry()
})
</script>
