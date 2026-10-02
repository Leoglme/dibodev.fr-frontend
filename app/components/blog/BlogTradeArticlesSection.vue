<template>
  <section
    v-if="props.links.length > 0"
    id="blog-trades"
    class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <div class="grid content-start gap-6">
        <div class="grid gap-4">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ props.eyebrow }}</p>
          <h2
            class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-balance text-gray-100 sm:text-[36px] lg:text-[40px]"
          >
            {{ props.title }}
          </h2>
        </div>
        <p class="max-w-[520px] text-[17px] leading-7 text-pretty text-gray-200">{{ props.intro }}</p>
        <p class="max-w-[520px] border-t border-gray-300 pt-6 text-[15px] leading-6 text-gray-200">
          {{ props.missingTradeText }}
          <DibodevLink :link="localePath('/contact')">
            <span>{{ props.missingTradeLinkLabel }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </DibodevLink>
        </p>
      </div>

      <ul class="grid content-start gap-x-10 border-t border-gray-300 sm:grid-cols-2">
        <li v-for="tradeLink in props.links" :key="tradeLink.key" class="border-b border-gray-300">
          <NuxtLink
            :to="tradeLink.route"
            class="blog-trade-link hover:text-primary flex min-h-14 items-center justify-between gap-4 py-3 text-[17px] font-medium text-gray-100 transition-colors"
            @click="track(TRACKING_EVENTS.articleCardClicked, { article: tradeLink.route, source: 'trade_list' })"
          >
            <span>{{ tradeLink.label }}</span>
            <DibodevIcon
              name="ArrowRight"
              mode="stroke"
              :width="18"
              :height="18"
              class="text-muted shrink-0"
              aria-hidden="true"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { BlogTradeArticlesSectionProps, DibodevBlogTradeLink } from '~/core/types/DibodevBlogTrade'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Blog section listing the trades that have an article of their own: a short text on the left, one link per trade on the right.
 */
const props: BlogTradeArticlesSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    required: true,
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    required: true,
  },
  links: {
    type: Array as PropType<DibodevBlogTradeLink[]>,
    required: true,
  },
  missingTradeText: {
    type: String as PropType<string>,
    required: true,
  },
  missingTradeLinkLabel: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()
</script>

<style scoped>
.blog-trade-link:hover :deep(svg),
.blog-trade-link:focus-visible :deep(svg) {
  color: inherit;
}
</style>
