<template>
  <section
    v-if="props.html"
    id="sector-intro"
    class="bg-surface-tint w-full px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
      <div class="grid w-full gap-10">
        <div class="grid max-w-3xl gap-6">
          <h2
            v-if="props.title"
            class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px]"
          >
            {{ props.title }}
          </h2>
          <div class="sector-intro w-full text-left text-[17px] leading-7 text-gray-200" v-html="props.html" />
        </div>

        <DibodevKeyFiguresLine v-if="props.facts.length > 0" :figures="props.facts" />

        <div v-if="props.technologies.length > 0" class="grid gap-3">
          <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ props.technologiesTitle }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="technology in props.technologies" :key="technology">
              <DibodevBadge backgroundColor="#ffffff" textColor="#141414" size="md">{{ technology }}</DibodevBadge>
            </li>
          </ul>
        </div>
      </div>

      <aside v-if="$slots.aside" class="lg:sticky lg:top-24">
        <slot name="aside" />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevAboutFact } from '~/core/types/DibodevAboutPage'
import type { DibodevSectorIntroSectionProps } from '~/core/types/DibodevSectorIntroSection'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevKeyFiguresLine from '~/components/data-displays/DibodevKeyFiguresLine.vue'

/**
 * Intro of a category or sector listing page (Storyblok richtext), followed by the listing's key figures
 * and the technologies met on its projects, with an optional sticky sidebar slot.
 */
const props: DibodevSectorIntroSectionProps = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  html: {
    type: String as PropType<string>,
    required: true,
  },
  facts: {
    type: Array as PropType<DibodevAboutFact[]>,
    default: (): DibodevAboutFact[] => [],
  },
  technologies: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  technologiesTitle: {
    type: String as PropType<string>,
    default: '',
  },
})
</script>

<style scoped>
.sector-intro :deep(p) {
  margin-bottom: 1.25rem;
}
.sector-intro :deep(p:last-child) {
  margin-bottom: 0;
}
.sector-intro :deep(h2),
.sector-intro :deep(h3) {
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-gray-100);
}
.sector-intro :deep(h2) {
  font-size: 22px;
}
.sector-intro :deep(h3) {
  font-size: 18px;
}
.sector-intro :deep(strong) {
  font-weight: 500;
  color: var(--color-gray-100);
}
.sector-intro :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.sector-intro :deep(ul),
.sector-intro :deep(ol) {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}
.sector-intro :deep(ul) {
  list-style-type: disc;
}
.sector-intro :deep(ol) {
  list-style-type: decimal;
}
.sector-intro :deep(li) {
  margin-bottom: 0.375rem;
}
</style>
