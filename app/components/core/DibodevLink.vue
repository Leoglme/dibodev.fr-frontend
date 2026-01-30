<template>
  <a
    v-if="props.externalLink"
    class="inline-flex cursor-pointer items-center gap-x-1.5 font-medium decoration-2 underline-offset-4 hover:underline"
    :href="href"
    :style="{ color: props.color }"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :to="props.link"
    class="inline-flex cursor-pointer items-center gap-x-1.5 font-medium decoration-2 underline-offset-4 hover:underline"
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
    default: '#bdb3ff',
  },
})

const href: ComputedRef<string | undefined> = computed(() => {
  if (props.externalLink) {
    return String(props.link)
  }
  return undefined
})
</script>
