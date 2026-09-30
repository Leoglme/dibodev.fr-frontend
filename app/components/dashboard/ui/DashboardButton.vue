<template>
  <NuxtLink v-if="props.to && !isInteractionBlocked" :to="props.to" :class="classes">
    <DashboardIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :size="iconSize"
      :class="{ 'dash-spin': props.loading, 'text-primary': props.hasAccentIcon }"
    />
    <slot />
    <DashboardIcon v-if="props.trailingIcon" :name="props.trailingIcon" :size="iconSize" />
  </NuxtLink>
  <a
    v-else-if="props.href && !isInteractionBlocked"
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
    :class="classes"
  >
    <DashboardIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :size="iconSize"
      :class="{ 'text-primary': props.hasAccentIcon }"
    />
    <slot />
    <DashboardIcon v-if="props.trailingIcon" :name="props.trailingIcon" :size="iconSize" />
  </a>
  <button v-else :type="props.type" :class="classes" :disabled="isInteractionBlocked" :aria-busy="props.loading">
    <DashboardIcon
      v-if="leadingIcon"
      :name="leadingIcon"
      :size="iconSize"
      :class="{ 'dash-spin': props.loading, 'text-primary': props.hasAccentIcon }"
    />
    <slot />
    <DashboardIcon v-if="props.trailingIcon" :name="props.trailingIcon" :size="iconSize" />
  </button>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardButtonProps, DashboardButtonSize, DashboardButtonVariant } from '~/core/types/DashboardButton'
import { computed } from 'vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

const props: DashboardButtonProps = defineProps({
  variant: {
    type: String as PropType<DashboardButtonVariant>,
    default: 'outline',
  },
  size: {
    type: String as PropType<DashboardButtonSize>,
    default: 'md',
  },
  icon: {
    type: String as PropType<DashboardIconName | null>,
    default: null,
  },
  trailingIcon: {
    type: String as PropType<DashboardIconName | null>,
    default: null,
  },
  square: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  hasAccentIcon: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String as PropType<string | null>,
    default: null,
  },
  href: {
    type: String as PropType<string | null>,
    default: null,
  },
  type: {
    type: String as PropType<'button' | 'submit'>,
    default: 'button',
  },
})

const VARIANT_CLASSES: Record<DashboardButtonVariant, string> = {
  primary: 'border-transparent bg-primary text-white hover:bg-primary-dark active:translate-y-px',
  outline: 'border-gray-400 bg-white text-gray-100 hover:bg-gray-800',
  ghost: 'border-transparent bg-transparent text-gray-200 hover:bg-(--dash-hover) hover:text-gray-100',
  danger: 'border-transparent bg-transparent text-(--dash-red) hover:bg-(--dash-red-tint)',
}

const SIZE_CLASSES: Record<DashboardButtonSize, string> = {
  sm: 'h-[30px] gap-1.5 px-2.5 text-[13px]',
  md: 'h-9 gap-2 px-3.5 text-sm',
  lg: 'h-11 gap-2 px-[18px] text-[15px]',
}

const SQUARE_CLASSES: Record<DashboardButtonSize, string> = {
  sm: 'h-[30px] w-[30px]',
  md: 'h-9 w-9',
  lg: 'h-11 w-11',
}

const isInteractionBlocked: ComputedRef<boolean> = computed((): boolean => props.disabled || props.loading)

const leadingIcon: ComputedRef<DashboardIconName | null> = computed((): DashboardIconName | null =>
  props.loading ? 'loader-circle' : props.icon,
)

const iconSize: ComputedRef<number> = computed((): number => (props.size === 'sm' ? 14 : 16))

const classes: ComputedRef<string[]> = computed((): string[] => [
  'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border font-medium leading-none whitespace-nowrap select-none transition-[background-color,border-color,color,transform] duration-150',
  VARIANT_CLASSES[props.variant],
  props.square ? SQUARE_CLASSES[props.size] : SIZE_CLASSES[props.size],
  props.block ? 'w-full' : '',
  isInteractionBlocked.value ? 'pointer-events-none opacity-60' : '',
])
</script>
