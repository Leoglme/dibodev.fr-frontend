<template>
  <div
    class="flex overflow-hidden rounded-full border border-gray-300 bg-white"
    role="group"
    :aria-label="props.groupLabel"
  >
    <button
      v-for="option in DEVICE_OPTIONS"
      :key="option.device"
      type="button"
      class="focus-visible:outline-primary flex h-11 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2"
      :class="props.device === option.device ? 'bg-primary text-white' : 'hover:text-primary text-gray-200'"
      :aria-pressed="props.device === option.device"
      @click="emit('update:device', option.device)"
    >
      <DibodevIcon :name="option.icon" mode="stroke" :width="16" :height="16" aria-hidden="true" />
      {{ option.device === 'mobile' ? props.mobileLabel : props.desktopLabel }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevSiteAtelierDevice } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierDeviceToggleProps } from '~/core/types/DibodevSiteAtelierDeviceToggle'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const DEVICE_OPTIONS: { device: DibodevSiteAtelierDevice; icon: string }[] = [
  { device: 'mobile', icon: 'Smartphone' },
  { device: 'desktop', icon: 'Monitor' },
]

/**
 * The phone or computer choice of the preview; its two halves share the width it is given.
 */
const props: DibodevSiteAtelierDeviceToggleProps = defineProps({
  device: {
    type: String as PropType<DibodevSiteAtelierDevice>,
    default: 'desktop',
  },
  groupLabel: {
    type: String as PropType<string>,
    required: true,
  },
  mobileLabel: {
    type: String as PropType<string>,
    required: true,
  },
  desktopLabel: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: (event: 'update:device', device: DibodevSiteAtelierDevice) => void = defineEmits<{
  (event: 'update:device', device: DibodevSiteAtelierDevice): void
}>()
</script>
