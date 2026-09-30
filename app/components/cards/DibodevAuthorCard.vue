<template>
  <div
    class="rounded-lg border border-gray-300 bg-white"
    :class="props.variant === 'inline' ? 'grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8' : 'grid gap-4 p-5'"
  >
    <img
      :src="PORTRAIT_SRC"
      :alt="$t('home.founder.portraitAlt')"
      :width="PORTRAIT_RENDERED_SIZE"
      :height="PORTRAIT_RENDERED_SIZE"
      loading="lazy"
      decoding="async"
      class="rounded-full object-cover"
      :class="props.variant === 'inline' ? 'h-20 w-20' : 'h-14 w-14'"
    />
    <div class="grid gap-3">
      <div class="grid gap-0.5">
        <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ $t('blog.author.eyebrow') }}</p>
        <p class="text-base font-medium text-gray-100">{{ PERSON_NAME }}</p>
        <p class="text-sm text-gray-200">{{ $t('blog.author.role') }}</p>
      </div>
      <p v-if="props.variant === 'inline'" class="text-[15px] leading-6 text-gray-200">{{ $t('blog.author.bio') }}</p>
      <DibodevLink :link="localePath('about')" class="text-sm">
        <span>{{ $t('blog.author.link') }}</span>
        <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
      </DibodevLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevAuthorCardProps } from '~/core/types/DibodevAuthorCard'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { PERSON_NAME } from '~/config/schema'

const PORTRAIT_SRC: string = '/images/about/leo-guillaume-portrait-400.webp'
const PORTRAIT_RENDERED_SIZE: number = 80

/**
 * Author card of the blog: portrait, name, role, optional bio and a link to the about page.
 */
const props: DibodevAuthorCardProps = defineProps({
  variant: {
    type: String as PropType<'sidebar' | 'inline'>,
    default: 'sidebar',
  },
})

const localePath = useLocalePath()
</script>
