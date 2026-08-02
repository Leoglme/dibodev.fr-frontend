<template>
  <p v-editable="blok" class="my-4">
    <DibodevLink :link="href" :externalLink="isExternal">{{ blok.label }}</DibodevLink>
  </p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { StoryblokLinkUtils } from '~/core/utils/StoryblokLinkUtils'
import type { StoryblokLinkField } from '~/core/utils/StoryblokLinkUtils'

type CtaLinkBlok = {
  _uid: string
  component: string
  label?: string
  link?: StoryblokLinkField
  [key: string]: unknown
}

const props = defineProps<{
  blok: CtaLinkBlok
}>()

const href: ComputedRef<string> = computed((): string => StoryblokLinkUtils.resolveHref(props.blok.link))
const isExternal: ComputedRef<boolean> = computed((): boolean => StoryblokLinkUtils.isExternal(href.value))
</script>
