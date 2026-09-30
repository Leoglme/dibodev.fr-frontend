<template>
  <a
    :href="`tel:${PHONE_E164}`"
    :aria-label="ariaLabel"
    @click="onPhoneClick"
    :class="linkClasses"
    class="focus-visible:ring-primary inline-flex cursor-pointer items-center gap-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    <DibodevIcon name="Phone" :width="iconSize" :height="iconSize" mode="stroke" class="shrink-0" />
    <span>{{ PHONE_DISPLAY }}</span>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { PhoneLinkProps, PhoneLinkVariant } from '~/core/types/PhoneLink'
import { PHONE_DISPLAY, PHONE_E164 } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Phone link with its icon, tracked on click.
 */
const props: PhoneLinkProps = defineProps({
  variant: {
    type: String as PropType<PhoneLinkVariant>,
    default: 'navbar',
  },
  class: {
    type: String,
    default: '',
  },
})

const { track } = useTracking()

const ariaLabel: string = `Appeler ${PHONE_DISPLAY}`

const iconSize: number = props.variant === 'menu' ? 22 : 18

const linkClasses: ComputedRef<string> = computed((): string => {
  const base: string = 'rounded-md'
  const variantClasses: Record<PhoneLinkVariant, string> = {
    navbar: 'text-primary hover:text-primary-dark text-[15px]',
    menu: 'text-primary hover:text-primary-dark min-h-[44px] w-full items-center justify-start text-lg',
    footer: 'text-[15px] text-gray-200 hover:text-gray-100',
  }
  const variant: string = variantClasses[props.variant] ?? variantClasses.navbar
  return [base, variant, props.class].filter(Boolean).join(' ')
})

/**
 * Track the analytics event when the phone link is clicked.
 * @returns {void}
 */
function onPhoneClick(): void {
  track(TRACKING_EVENTS.contactPhone, { location: props.variant })
}
</script>
