<template>
  <div class="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border p-5 sm:p-6" :class="toneClasses.frame">
    <span
      class="text-primary-dark flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      :class="toneClasses.iconBadge"
      aria-hidden="true"
    >
      <DibodevIcon :name="props.icon" mode="stroke" :width="18" :height="18" />
    </span>
    <div class="grid gap-1.5">
      <p class="text-[15px] leading-6 text-gray-200">
        <span class="font-medium text-gray-100">{{ props.emphasizedIntro }}</span> {{ props.text }}
      </p>
      <p v-if="props.footnote" class="text-muted text-sm">{{ props.footnote }}</p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevCalloutProps, DibodevCalloutTone, DibodevCalloutToneClasses } from '~/core/types/DibodevCallout'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const TONE_CLASSES: Record<DibodevCalloutTone, DibodevCalloutToneClasses> = {
  white: { frame: 'border-gray-300 bg-white', iconBadge: 'bg-accent-tint' },
  tint: { frame: 'border-accent-tint bg-surface-tint', iconBadge: 'bg-white' },
}

const props: DibodevCalloutProps = defineProps({
  icon: {
    type: String as PropType<string>,
    default: 'Info',
  },
  emphasizedIntro: {
    type: String as PropType<string>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    required: true,
  },
  footnote: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevCalloutTone>,
    default: 'white',
  },
})

const toneClasses: ComputedRef<DibodevCalloutToneClasses> = computed(
  (): DibodevCalloutToneClasses => TONE_CLASSES[props.tone],
)
</script>
