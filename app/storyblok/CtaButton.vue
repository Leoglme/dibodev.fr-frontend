<template>
  <div v-editable="blok" class="my-8 flex justify-center">
    <DibodevButton :to="href" :outlined="blok.style === 'outlined'" size="lg">
      {{ blok.label }}
    </DibodevButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import { StoryblokLinkUtils } from '~/core/utils/StoryblokLinkUtils'
import type { StoryblokLinkField } from '~/core/utils/StoryblokLinkUtils'

type CtaButtonBlok = {
  _uid: string
  component: string
  label?: string
  link?: StoryblokLinkField
  style?: 'primary' | 'outlined'
  [key: string]: unknown
}

const props = defineProps<{
  blok: CtaButtonBlok
}>()

const href: ComputedRef<string> = computed((): string => StoryblokLinkUtils.resolveHref(props.blok.link))
</script>
