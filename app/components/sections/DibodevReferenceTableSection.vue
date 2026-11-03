<template>
  <section :id="props.anchorId" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <div class="hidden overflow-hidden rounded-2xl border border-gray-300 bg-white md:block">
        <table class="w-full border-collapse text-left">
          <thead>
            <tr class="border-b border-gray-300">
              <th scope="col" class="text-muted w-[20%] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.nameColumnLabel }}
              </th>
              <th scope="col" class="text-muted px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.detailColumnLabel }}
              </th>
              <th scope="col" class="text-muted w-[26%] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.linkColumnLabel }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in props.rows" :key="row.name" class="border-b border-gray-300 last:border-b-0">
              <th scope="row" class="px-6 py-4 align-top text-[15px] font-medium text-gray-100">{{ row.name }}</th>
              <td class="px-6 py-4 align-top text-sm leading-6 text-gray-200">{{ row.detail }}</td>
              <td class="px-6 py-4 align-top">
                <a
                  :href="row.linkUrl"
                  target="_blank"
                  rel="noopener"
                  class="text-primary hover:text-primary-dark inline-flex items-start gap-1.5 text-sm leading-6 font-medium transition-colors"
                >
                  <span>{{ row.linkLabel }}</span>
                  <DibodevIcon
                    name="ExternalLink"
                    mode="stroke"
                    :width="14"
                    :height="14"
                    class="mt-1.5 shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="grid gap-3 md:hidden">
        <li
          v-for="row in props.rows"
          :key="`card-${row.name}`"
          class="grid gap-1.5 rounded-2xl border border-gray-300 bg-white p-5"
        >
          <span class="text-base font-medium text-gray-100">{{ row.name }}</span>
          <p class="text-sm leading-6 text-gray-200">{{ row.detail }}</p>
          <a
            :href="row.linkUrl"
            target="_blank"
            rel="noopener"
            class="text-primary hover:text-primary-dark inline-flex w-fit items-start gap-1.5 text-sm leading-6 font-medium transition-colors"
          >
            <span>{{ row.linkLabel }}</span>
            <DibodevIcon
              name="ExternalLink"
              mode="stroke"
              :width="14"
              :height="14"
              class="mt-1.5 shrink-0"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>

      <slot name="footer" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevReferenceTableRow,
  DibodevReferenceTableSectionProps,
} from '~/core/types/DibodevReferenceTableSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** A table of entries with a detail and an external link each: a list of providers with their official guide, for example. */
const props: DibodevReferenceTableSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'references',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  nameColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  detailColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  linkColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  rows: {
    type: Array as PropType<DibodevReferenceTableRow[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
