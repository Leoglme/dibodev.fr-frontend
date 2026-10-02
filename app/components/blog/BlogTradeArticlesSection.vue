<template>
  <section
    v-if="props.links.length > 0"
    id="blog-trades"
    class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <div class="grid gap-8 lg:gap-10">
        <ul class="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <li v-for="tradeLink in props.links" :key="tradeLink.key">
            <NuxtLink
              :to="tradeLink.route"
              class="blog-trade-link bg-surface-tint flex min-h-16 items-center justify-between gap-4 rounded-2xl px-5 py-4 text-[17px] font-medium text-gray-100"
              @click="track(TRACKING_EVENTS.articleCardClicked, { article: tradeLink.route, source: 'trade_list' })"
            >
              <span>{{ tradeLink.label }}</span>
              <DibodevIcon
                name="ArrowRight"
                mode="stroke"
                :width="18"
                :height="18"
                class="text-primary shrink-0"
                aria-hidden="true"
              />
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          :to="localePath('/contact')"
          class="blog-trade-link blog-trade-link--contact flex flex-col gap-3 rounded-2xl bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-7"
          @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: 'blog_trades' })"
        >
          <span class="text-lg font-medium text-gray-100 sm:text-xl">{{ props.missingTradeText }}</span>
          <span class="text-primary inline-flex shrink-0 items-center gap-2 text-[17px] font-medium">
            {{ props.missingTradeLinkLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" class="shrink-0" aria-hidden="true" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { BlogTradeArticlesSectionProps, DibodevBlogTradeLink } from '~/core/types/DibodevBlogTrade'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Blog section listing the trades that have an article of their own: a heading, one tile per trade, then a wider contact row for the trades not listed yet.
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
.blog-trade-link {
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.blog-trade-link:hover,
.blog-trade-link:focus-visible {
  background-color: var(--color-accent-tint);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.blog-trade-link--contact {
  box-shadow: inset 0 0 0 1.5px var(--color-accent-tint);
}

.blog-trade-link--contact:hover,
.blog-trade-link--contact:focus-visible {
  background-color: white;
  box-shadow: inset 0 0 0 1.5px var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
  .blog-trade-link {
    transition: none;
  }

  .blog-trade-link:hover,
  .blog-trade-link:focus-visible {
    transform: none;
  }
}
</style>
