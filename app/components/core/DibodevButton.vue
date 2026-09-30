<template>
  <component
    class="dibodev-button"
    :is="componentType"
    :to="isLink ? props.to : undefined"
    :href="isExternalLink || isLink ? props.to : undefined"
    :disabled="props.disabled"
    :class="computedClass"
    :style="{
      '--background-color': props.outlined ? 'transparent' : backgroundColor,
      '--background-hover-color': backgroundHoverColorComputed,
    }"
    :target="isExternalLink ? '_blank' : undefined"
  >
    <span class="flex items-center justify-center">
      <span v-if="props.icon && props.iconPosition === 'left' && !isIconOnly" class="mr-2 h-6">
        <DibodevIcon :name="props.icon" class="button-icon" mode="stroke" />
      </span>
      <slot v-if="!isIconOnly" />
      <span v-if="props.icon && props.iconPosition === 'right' && !isIconOnly" class="ml-2 h-6">
        <DibodevIcon :name="props.icon" class="button-icon" mode="stroke" />
      </span>
      <DibodevIcon v-if="isIconOnly && props.icon" class="button-icon" :name="props.icon" mode="stroke" />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import { useSlots } from '@vue/runtime-core'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevButtonProps, DibodevButtonSize } from '~/core/types/DibodevButton'
import {
  DIBODEV_BUTTON_DEFAULT_BACKGROUND_COLOR,
  DIBODEV_BUTTON_DEFAULT_BACKGROUND_HOVER_COLOR,
} from '~/core/types/DibodevButton'
import { ColorUtils } from '~/core/utils/ColorUtils'

/** Hover surface of the outlined variant (off-white). */
const OUTLINED_HOVER_BACKGROUND_COLOR: string = '#f6f6f3'

/**
 * Button props: primary (brand violet) by default, outlined variant, optional icon and route.
 */
const props: DibodevButtonProps = defineProps({
  to: {
    type: String,
    default: null,
  },
  backgroundColor: {
    type: String,
    default: DIBODEV_BUTTON_DEFAULT_BACKGROUND_COLOR,
  },
  backgroundHoverColor: {
    type: String,
    default: DIBODEV_BUTTON_DEFAULT_BACKGROUND_HOVER_COLOR,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String as PropType<'left' | 'right' | null>,
    default: 'left',
  },
  size: {
    type: String as PropType<DibodevButtonSize>,
    default: 'md',
  },
  outlined: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const backgroundHoverColorComputed: ComputedRef<string> = computed((): string => {
  if (props.outlined) {
    return OUTLINED_HOVER_BACKGROUND_COLOR
  }

  if (props.backgroundColor === DIBODEV_BUTTON_DEFAULT_BACKGROUND_COLOR) {
    return props.backgroundHoverColor
  }

  return ColorUtils.hslToHex(ColorUtils.adjustLightness(ColorUtils.hexToHSL(props.backgroundColor), 6))
})

const buttonSizes: Record<DibodevButtonSize, string> = {
  xs: 'px-2.5 py-1 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-6 py-3.5 text-base',
  xl: 'px-8 py-4 text-lg',
  '2xl': 'px-10 py-5 text-xl',
}

const slots: SetupContext['slots'] = useSlots()
const isIconOnly: ComputedRef<boolean> = computed((): boolean => props.icon !== null && !slots.default?.().length)

const computedClass: ComputedRef<string> = computed(
  (): string => `
  inline-flex items-center justify-center
  font-medium select-none whitespace-nowrap
  border leading-6 rounded-lg
  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition duration-150 ease-in-out
  ${props.disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
  ${isIconOnly.value ? 'p-2.5 w-fit' : buttonSizes[props.size]}
  ${props.outlined ? 'border-gray-400 text-gray-100' : 'border-transparent text-white'}
`,
)

const isExternalLink: ComputedRef<boolean> = computed((): boolean => {
  if (!props.to) return false
  return /^(http|https):\/\//.test(props.to)
})

const isLink: ComputedRef<boolean> = computed((): boolean => {
  if (!props.to) return false
  return !isExternalLink.value
})

const componentType: ComputedRef<string> = computed((): string => {
  if (isExternalLink.value) return 'a'
  if (isLink.value) return 'RouterLink'
  return 'button'
})
</script>

<style>
.button-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

:root {
  --background-color: #6f5fe0;
  --background-hover-color: #5b4bd0;
}

.dibodev-button,
.dibodev-button:active,
.dibodev-button:hover:active {
  background-color: var(--background-color);
}

.dibodev-button:hover {
  background-color: var(--background-hover-color);
}

.dibodev-button:disabled,
.dibodev-button:disabled:hover,
.dibodev-button:disabled:active {
  background-color: var(--background-color);
}
</style>
