<template>
  <a
    v-if="props.externalLink"
    class="dibodev-link inline-flex cursor-pointer items-center gap-x-1.5 font-medium decoration-2 underline-offset-4 hover:underline"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :style="{ color: props.color }"
    :aria-label="props.ariaLabel || undefined"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :to="props.link"
    class="dibodev-link inline-flex cursor-pointer items-center gap-x-1.5 font-medium decoration-2 underline-offset-4 hover:underline"
    :style="{ color: props.color }"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts" setup>
import type { DibodevLinkProps } from '~/core/types/DibodevLink'
import { computed, type ComputedRef } from 'vue'

/**
 * Type definitions for the DibodevLink component props
 * @type {DibodevLinkProps}
 * @property {boolean} externalLink - Whether the link is external or internal
 * @property {string} link - The link to navigate to
 * @property {string} color - The link color (accent ink by default)
 */
const props: DibodevLinkProps = defineProps({
  externalLink: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#6f5fe0',
  },
  ariaLabel: {
    type: String,
    default: null,
  },
})

const href: ComputedRef<string | undefined> = computed((): string | undefined => {
  if (props.externalLink) {
    return String(props.link)
  }
  return undefined
})
</script>

<style scoped>
.dibodev-link :slotted(svg[data-icon='ArrowRight']),
.dibodev-link :slotted(svg[data-icon='ExternalLink']) {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.dibodev-link:hover :slotted(svg[data-icon='ArrowRight']),
.dibodev-link:focus-visible :slotted(svg[data-icon='ArrowRight']) {
  transform: translateX(4px);
}

.dibodev-link:hover :slotted(svg[data-icon='ExternalLink']),
.dibodev-link:focus-visible :slotted(svg[data-icon='ExternalLink']) {
  transform: translate(2px, -2px);
}

@media (prefers-reduced-motion: reduce) {
  .dibodev-link :slotted(svg[data-icon='ArrowRight']),
  .dibodev-link :slotted(svg[data-icon='ExternalLink']) {
    transition: none;
  }
}
</style>
