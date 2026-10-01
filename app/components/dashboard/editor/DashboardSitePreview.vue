<template>
  <div class="flex min-w-0 flex-col">
    <div
      class="z-10 flex min-h-[52px] flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-300 bg-(--dash-toolbar) px-4 py-2 md:sticky md:top-0 md:px-5"
    >
      <DashboardSegmented
        v-model="selectedDevice"
        :options="SCREEN_OPTIONS"
        screen-reader-label="Écran simulé"
        compact-on-mobile
      />
      <DashboardButton
        variant="ghost"
        size="sm"
        trailing-icon="external-link"
        :href="SITE_URL"
        class="ml-auto max-md:hidden"
      >
        Ouvrir le site
      </DashboardButton>
    </div>

    <div ref="canvasElement" class="px-4 py-5 md:px-6 md:py-6">
      <p class="text-muted mx-auto mb-3 text-center text-[13px]" role="status">
        <slot name="summary" :device="selectedScreen.device" />
      </p>
      <figure
        class="mx-auto overflow-hidden rounded-xl bg-white shadow-(--dash-shadow-raise) transition-[width] duration-300 ease-(--dash-ease)"
        :style="{ width: `${frameWidth}px` }"
      >
        <figcaption
          class="dash-mono text-muted flex h-9 items-center gap-2 border-b border-(--dash-line-soft) px-3 text-[11.5px]"
        >
          <DashboardIcon name="lock" :size="12" class="shrink-0" />
          <span class="truncate">{{ SITE_HOST }}</span>
          <span class="ml-auto shrink-0 tabular-nums"
            >{{ selectedScreen.viewportWidth }} px · {{ scalePercent }} %</span
          >
        </figcaption>
        <div class="relative overflow-hidden bg-gray-800" :style="{ height: `${frameHeight}px` }">
          <iframe
            ref="previewFrame"
            :src="previewUrl"
            title="Aperçu du site"
            tabindex="-1"
            class="absolute top-0 left-0 origin-top-left border-0"
            :class="{ 'opacity-0': !isPreviewReady }"
            :style="{
              width: `${selectedScreen.viewportWidth}px`,
              height: `${previewHeight}px`,
              transform: `scale(${previewScale})`,
            }"
          />
          <div v-if="!isPreviewReady" class="absolute inset-0 flex flex-col gap-3 p-5" aria-hidden="true">
            <span class="dash-skeleton h-6 w-1/3" />
            <span class="dash-skeleton h-full w-full" />
          </div>
        </div>
      </figure>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type { DashboardSitePreviewProps, DashboardSitePreviewScreen } from '~/core/types/DashboardSitePreview'
import type { SiteEditorPreviewMessage } from '~/core/types/SiteEditorPreview'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { HomePageContent } from '~~/server/types/dashboard/homePage'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import {
  DASHBOARD_SITE_PREVIEW_SCREENS,
  SITE_EDITOR_PREVIEW_CHANNEL,
  SITE_EDITOR_PREVIEW_PATH,
} from '~/core/constants/siteEditorPreview'
import { SiteEditorPreviewUtils } from '~/core/utils/SiteEditorPreviewUtils'

const props: DashboardSitePreviewProps = defineProps({
  homePageContent: {
    type: Object as PropType<HomePageContent>,
    required: true,
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const SITE_HOST: string = new URL(SITE_URL).host
const DEFAULT_SCREEN: DashboardSitePreviewScreen = DASHBOARD_SITE_PREVIEW_SCREENS[0]!
const PHONE_SCREEN: DashboardSitePreviewScreen = DASHBOARD_SITE_PREVIEW_SCREENS.at(-1)!
const NARROW_CANVAS_MAX_WIDTH: number = 480
const INITIAL_PREVIEW_HEIGHT: number = 640
const SCREEN_OPTIONS: DashboardSegmentOption[] = DASHBOARD_SITE_PREVIEW_SCREENS.map(
  (screen: DashboardSitePreviewScreen): DashboardSegmentOption => ({
    value: screen.device,
    label: screen.label,
    icon: screen.icon,
  }),
)

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()

const canvasElement: Ref<HTMLDivElement | null> = ref(null)
const previewFrame: Ref<HTMLIFrameElement | null> = ref(null)
const selectedDevice: Ref<string> = ref(DEFAULT_SCREEN.device)
const canvasWidth: Ref<number> = ref(0)
const previewHeight: Ref<number> = ref(INITIAL_PREVIEW_HEIGHT)
const isPreviewReady: Ref<boolean> = ref(false)
let canvasObserver: ResizeObserver | null = null
let hasPickedInitialScreen: boolean = false

const previewUrl: ComputedRef<string> = computed((): string => localePath(SITE_EDITOR_PREVIEW_PATH))

const selectedScreen: ComputedRef<DashboardSitePreviewScreen> = computed(
  (): DashboardSitePreviewScreen =>
    DASHBOARD_SITE_PREVIEW_SCREENS.find(
      (screen: DashboardSitePreviewScreen): boolean => screen.device === selectedDevice.value,
    ) ?? DEFAULT_SCREEN,
)

const previewScale: ComputedRef<number> = computed((): number =>
  canvasWidth.value > 0 ? Math.min(1, canvasWidth.value / selectedScreen.value.viewportWidth) : 1,
)

const scalePercent: ComputedRef<number> = computed((): number => Math.round(previewScale.value * 100))

const frameWidth: ComputedRef<number> = computed((): number =>
  Math.floor(selectedScreen.value.viewportWidth * previewScale.value),
)

const frameHeight: ComputedRef<number> = computed((): number => Math.ceil(previewHeight.value * previewScale.value))

/**
 * Sends the content being edited to the framed page.
 *
 * @returns {void}
 */
function sendContentToPreview(): void {
  SiteEditorPreviewUtils.postMessage(previewFrame.value?.contentWindow, {
    channel: SITE_EDITOR_PREVIEW_CHANNEL,
    type: 'content',
    homePageContent: { featuredProjectSlugs: [...props.homePageContent.featuredProjectSlugs] },
  })
}

/**
 * Handles the framed page: sends it the content when it announces itself, and follows its height.
 *
 * @param {MessageEvent} event - The message received from the framed page.
 * @returns {void}
 */
function onPreviewMessage(event: MessageEvent): void {
  const message: SiteEditorPreviewMessage | null = SiteEditorPreviewUtils.readMessage(
    event,
    previewFrame.value?.contentWindow,
  )
  if (!message) return
  isPreviewReady.value = true
  if (message.type === 'ready') sendContentToPreview()
  if (message.type === 'height' && message.height > 0) previewHeight.value = message.height
}

/**
 * Measures the width left for the frame inside the canvas paddings; the first measure picks the phone screen in a phone-wide canvas.
 *
 * @returns {void}
 */
function measureCanvas(): void {
  const canvas: HTMLDivElement | null = canvasElement.value
  if (!canvas || canvas.clientWidth === 0) return
  const style: CSSStyleDeclaration = window.getComputedStyle(canvas)
  canvasWidth.value = canvas.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
  if (hasPickedInitialScreen) return
  hasPickedInitialScreen = true
  if (canvasWidth.value < NARROW_CANVAS_MAX_WIDTH) selectedDevice.value = PHONE_SCREEN.device
}

watch((): string[] => props.homePageContent.featuredProjectSlugs, sendContentToPreview)

onMounted((): void => {
  window.addEventListener('message', onPreviewMessage)
  // The frame is in the prerendered HTML: it can be ready before this listener exists, so the content is sent right away too.
  sendContentToPreview()
  measureCanvas()
  canvasObserver = new ResizeObserver(measureCanvas)
  if (canvasElement.value) canvasObserver.observe(canvasElement.value)
})

onBeforeUnmount((): void => {
  window.removeEventListener('message', onPreviewMessage)
  canvasObserver?.disconnect()
})
</script>
