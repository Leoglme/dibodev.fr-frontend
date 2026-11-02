<template>
  <article
    class="@container relative z-[1] rounded-lg border border-gray-300 bg-white px-5 py-6 text-sm leading-[1.6] text-gray-200 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_18px_40px_-24px_rgba(20,20,20,0.28)] sm:px-10 sm:py-9"
  >
    <header class="grid gap-2.5 border-b border-gray-300 pb-5">
      <p class="text-muted text-[11px] font-medium tracking-[0.1em] uppercase">{{ props.specification.eyebrow }}</p>
      <component
        :is="titleTag"
        class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-balance sm:text-[26px]"
        :class="props.specification.isTitlePlaceholder ? 'text-[#9a9a92]' : 'text-gray-100'"
      >
        {{ props.specification.title }}
      </component>
      <dl class="flex flex-wrap gap-x-6 gap-y-1 text-[13px]">
        <div v-for="row in props.specification.metaRows" :key="row.label" class="flex gap-1.5">
          <dt class="text-muted">{{ row.label }}{{ props.specification.labelSeparator }}</dt>
          <dd :class="row.isBlank ? 'text-muted rounded bg-gray-800 px-1.5 italic' : 'text-gray-100'">
            {{ row.value }}
          </dd>
        </div>
      </dl>
    </header>

    <div class="border-b border-gray-300 py-4">
      <p class="text-muted mb-2 text-[11px] font-medium tracking-[0.1em] uppercase">
        {{ props.specification.tocTitle }}
      </p>
      <ol class="specification-toc grid gap-x-5 gap-y-1">
        <li
          v-for="part in props.specification.parts"
          :key="part.id"
          class="flex items-center gap-2 text-[13px] leading-normal"
          :class="part.isFilled ? 'text-gray-100' : 'text-[#9a9a92]'"
        >
          <DibodevIcon
            v-if="part.isFilled"
            name="Check"
            mode="stroke"
            :width="12"
            :height="12"
            class="shrink-0 text-[#1f7a4d]"
            aria-hidden="true"
          />
          <span
            v-else
            class="h-3 w-3 shrink-0 rounded-full border-[1.5px] border-dashed border-[#b9b9b1]"
            aria-hidden="true"
          />
          <span>{{ part.number }}. {{ part.title }}</span>
        </li>
      </ol>
    </div>

    <section
      v-for="part in props.specification.parts"
      :key="part.id"
      class="-mx-3 rounded-lg px-3 py-[18px] [&+&]:border-t [&+&]:border-[#1414140f]"
      :class="{ 'specification-part--updated': props.highlightedPartIds.includes(part.id) }"
      :data-part="part.id"
    >
      <component
        :is="partTitleTag"
        class="mb-2 text-[15px] leading-snug font-medium"
        :class="part.isFilled ? 'text-gray-100' : 'text-[#9a9a92]'"
      >
        <span class="text-muted mr-0.5 tabular-nums">{{ part.number }}.</span> {{ part.title }}
      </component>

      <div v-if="part.isFilled" class="grid gap-1.5">
        <template v-for="(block, blockIndex) in part.blocks" :key="`${part.id}-${blockIndex}`">
          <p v-if="block.type === 'paragraph'">
            <strong v-if="block.emphasis" class="font-medium text-gray-100">{{ block.emphasis }}</strong
            >{{ block.text }}
          </p>
          <ul v-else-if="block.type === 'bulletList'" class="grid list-disc gap-1 pl-[18px] marker:text-[#9a9a92]">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>
          <ul v-else-if="block.type === 'checklist'" class="grid gap-1">
            <li v-for="item in block.items" :key="item" class="flex gap-2">
              <span class="text-muted" aria-hidden="true">☐</span>{{ item }}
            </li>
          </ul>
          <ol v-else-if="block.type === 'goalList'" class="grid list-decimal gap-1 pl-[18px] marker:text-[#9a9a92]">
            <li v-for="goal in block.items" :key="goal.text">
              {{ goal.text }}.
              <span class="text-muted"
                >{{ block.measureLabel }}{{ props.specification.labelSeparator }}{{ goal.measure }}.</span
              >
            </li>
          </ol>
          <template v-else-if="block.type === 'pageList'">
            <ul class="flex flex-wrap gap-1.5">
              <li
                v-for="page in block.items"
                :key="page"
                class="rounded-md border border-[#14141424] bg-white px-2.5 py-0.5 text-[13px] text-gray-100"
              >
                {{ page }}
              </li>
            </ul>
            <p class="text-muted text-[13px]">{{ block.note }}</p>
          </template>
          <ul v-else-if="block.type === 'featureList'" class="grid">
            <li
              v-for="feature in block.items"
              :key="feature.label"
              class="flex items-center justify-between gap-3 border-b border-dashed border-[#1414141f] py-1.5 last:border-b-0"
            >
              <span>{{ feature.label }}</span>
              <span
                class="shrink-0 rounded-full border px-2 py-px text-[11.5px] font-medium"
                :class="
                  feature.priority === 'essential'
                    ? 'border-[#1414142e] bg-gray-700 text-gray-100'
                    : 'text-muted border-[#1414141a] bg-gray-800'
                "
              >
                {{ feature.priorityLabel }}
              </span>
            </li>
          </ul>
          <dl v-else-if="block.type === 'factList'" class="grid gap-2">
            <div
              v-for="fact in block.items"
              :key="fact.label"
              class="grid gap-x-3 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)]"
            >
              <dt class="text-muted">{{ fact.label }}</dt>
              <dd class="text-gray-100">{{ fact.value }}</dd>
            </div>
          </dl>
          <p v-else-if="block.type === 'blankField'">
            {{ block.label }}{{ props.specification.labelSeparator
            }}<span class="text-muted rounded bg-gray-800 px-1.5 italic">{{ block.placeholder }}</span>
          </p>
          <p v-else-if="block.type === 'instruction'" class="text-muted italic">{{ block.text }}</p>
        </template>
      </div>

      <div v-else class="grid gap-2 py-1" aria-hidden="true">
        <span class="block h-[9px] w-[94%] rounded-full bg-gray-700" />
        <span class="block h-[9px] w-[81%] rounded-full bg-gray-700" />
        <span class="block h-[9px] w-[62%] rounded-full bg-gray-700" />
      </div>
      <p v-if="!part.isFilled" class="mt-1 text-[12.5px] text-[#9a9a92]">{{ part.pendingLabel }}</p>
    </section>

    <footer class="text-muted mt-5 border-t border-gray-300 pt-4 text-[12.5px] leading-normal">
      {{ props.specification.footer }}
    </footer>
  </article>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationPartId,
} from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationSheetHeadingLevel,
  DibodevProjectSpecificationSheetProps,
} from '~/core/types/DibodevProjectSpecificationSheet'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const props: DibodevProjectSpecificationSheetProps = defineProps({
  specification: {
    type: Object as PropType<DibodevProjectSpecificationDocument>,
    required: true,
  },
  headingLevel: {
    type: String as PropType<DibodevProjectSpecificationSheetHeadingLevel>,
    default: 'none',
  },
  highlightedPartIds: {
    type: Array as PropType<DibodevProjectSpecificationPartId[]>,
    default: (): DibodevProjectSpecificationPartId[] => [],
  },
})

const titleTag: ComputedRef<string> = computed((): string => (props.headingLevel === 'section' ? 'h3' : 'p'))
const partTitleTag: ComputedRef<string> = computed((): string => (props.headingLevel === 'section' ? 'h4' : 'p'))
</script>

<style scoped>
.specification-toc {
  grid-template-columns: minmax(0, 1fr);
}

@container (min-width: 34rem) {
  .specification-toc {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.specification-part--updated {
  animation: specification-part-highlight 1.8s ease-out;
}

@keyframes specification-part-highlight {
  from {
    background-color: #fdf1dc;
  }

  to {
    background-color: rgb(253 241 220 / 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .specification-part--updated {
    animation: none;
  }
}
</style>
