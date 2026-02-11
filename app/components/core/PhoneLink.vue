<template>
  <a
    :href="`tel:${PHONE_E164}`"
    :aria-label="ariaLabel"
    :class="linkClasses"
    :style="linkStyle"
    class="focus-visible:ring-primary inline-flex cursor-pointer items-center gap-3 font-medium decoration-2 underline-offset-4 transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
  >
    <DibodevIcon name="Phone" :width="iconSize" :height="iconSize" mode="stroke" class="shrink-0" />
    <span>{{ PHONE_DISPLAY }}</span>
  </a>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { PHONE_DISPLAY, PHONE_E164 } from '~/config/contact'

type PhoneLinkVariant = 'navbar' | 'menu' | 'footer'

const props = defineProps({
  variant: {
    type: String as PropType<PhoneLinkVariant>,
    default: 'navbar',
  },
  class: {
    type: String,
    default: '',
  },
})

const ariaLabel = `Appeler ${PHONE_DISPLAY}`

const iconSize: number = props.variant === 'menu' ? 22 : 18

/** primary-light (#bdb3ff), comme DibodevLink. */
const PRIMARY_LIGHT = '#bdb3ff'

const linkStyle = computed((): { color?: string } => {
  if (props.variant === 'navbar' || props.variant === 'menu') {
    return { color: PRIMARY_LIGHT }
  }
  return {}
})

const linkClasses = computed((): string => {
  const base = 'rounded-md'
  const variantClasses: Record<PhoneLinkVariant, string> = {
    navbar: '',
    menu: 'min-h-[44px] w-full items-center justify-start text-base',
    footer: 'text-gray-300 hover:text-gray-200',
  }
  const variant = variantClasses[props.variant] ?? variantClasses.navbar
  return [base, variant, props.class].filter(Boolean).join(' ')
})
</script>
