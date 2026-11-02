<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :title="props.wording.services.title"
      :intro="props.wording.services.intro"
    />
    <div class="flex flex-wrap gap-2.5">
      <DibodevTogglePill
        v-for="option in props.tradeWording.serviceOptions"
        :key="option.id"
        :active="props.state.selectedServiceIds.includes(option.id)"
        class="min-h-11"
        @click="emit('toggle-service', option.id)"
      >
        {{ option.label }}
      </DibodevTogglePill>
    </div>
    <label
      v-if="props.hasEmergencyOption"
      class="flex min-h-11 cursor-pointer items-center gap-3 text-[15px] text-gray-100"
    >
      <input
        type="checkbox"
        :checked="props.state.hasEmergencyService"
        class="accent-primary h-5 w-5 shrink-0"
        @change="emit('set-emergency', readChecked($event))"
      />
      {{ props.wording.services.emergencyLabel }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierState,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierServicesStepProps } from '~/core/types/DibodevSiteAtelierServicesStep'
import { ref } from 'vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import DibodevTogglePill from '~/components/ui/DibodevTogglePill.vue'

/**
 * Fifth step: the services of the trade as pills, and the emergency option when the trade has one.
 */
const props: DibodevSiteAtelierServicesStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  tradeWording: {
    type: Object as PropType<DibodevSiteAtelierTradeWording>,
    required: true,
  },
  state: {
    type: Object as PropType<DibodevSiteAtelierState>,
    required: true,
  },
  hasEmergencyOption: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit: {
  (event: 'toggle-service', serviceId: string): void
  (event: 'set-emergency', hasEmergencyService: boolean): void
} = defineEmits<{
  (event: 'toggle-service', serviceId: string): void
  (event: 'set-emergency', hasEmergencyService: boolean): void
}>()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)

/**
 * State of the checkbox that fired a change event.
 * @param {Event} event - The change event.
 * @returns {boolean} True when checked.
 */
function readChecked(event: Event): boolean {
  return event.target instanceof HTMLInputElement ? event.target.checked : false
}

/**
 * Moves the focus to the step title.
 * @returns {void}
 */
function focusTitle(): void {
  heading.value?.focusTitle()
}

defineExpose({ focusTitle })
</script>
