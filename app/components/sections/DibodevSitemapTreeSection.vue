<template>
  <section :id="props.anchorId || undefined" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="left" />
      <figure class="sitemap-tree grid rounded-2xl border border-gray-300 bg-white px-5 py-7 sm:px-8 lg:px-8 lg:py-10">
        <figcaption class="sr-only">{{ props.ariaLabel }}</figcaption>
        <div class="sitemap-tree__root" aria-hidden="true">
          <span class="sitemap-tree__node sitemap-tree__node--root">{{ props.rootLabel }}</span>
        </div>
        <ul class="sitemap-tree__level" aria-hidden="true">
          <li v-for="branch in props.branches" :key="branch.label" class="sitemap-tree__branch">
            <span class="sitemap-tree__node">{{ branch.label }}</span>
            <ul v-if="branch.children.length" class="sitemap-tree__children">
              <li v-for="child in branch.children" :key="child" class="sitemap-tree__child">
                <span class="sitemap-tree__node sitemap-tree__node--child">{{ child }}</span>
              </li>
            </ul>
          </li>
        </ul>
        <p
          v-if="props.footerNote"
          class="text-muted mt-6 border-t border-dashed border-gray-300 pt-4 text-center text-sm leading-6"
        >
          {{ props.footerNote }}
        </p>
      </figure>
      <ul v-if="props.notes.length" class="grid gap-6 md:grid-cols-3">
        <li v-for="note in props.notes" :key="note.title" class="grid content-start gap-2">
          <p class="text-base font-medium text-gray-100">{{ note.title }}</p>
          <p class="text-[15px] leading-6 text-gray-200">{{ note.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type {
  DibodevSitemapTreeBranch,
  DibodevSitemapTreeNote,
  DibodevSitemapTreeSectionProps,
} from '~/core/types/DibodevSitemapTreeSection'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** Screen readers get the plan as one sentence: the drawing is hidden from them. */
const props: DibodevSitemapTreeSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: '',
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
  ariaLabel: {
    type: String as PropType<string>,
    required: true,
  },
  rootLabel: {
    type: String as PropType<string>,
    required: true,
  },
  branches: {
    type: Array as PropType<DibodevSitemapTreeBranch[]>,
    required: true,
  },
  footerNote: {
    type: String as PropType<string>,
    default: '',
  },
  notes: {
    type: Array as PropType<DibodevSitemapTreeNote[]>,
    default: (): DibodevSitemapTreeNote[] => [],
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>

<style scoped>
.sitemap-tree__node {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid rgb(20 20 20 / 0.18);
  border-radius: 10px;
  background-color: #ffffff;
  color: #141414;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
}

.sitemap-tree__node--root {
  border-color: #141414;
  background-color: #141414;
  color: #ffffff;
}

.sitemap-tree__node--child {
  border-style: dashed;
  background-color: #f6f6f3;
  font-size: 14px;
  font-weight: 400;
}

.sitemap-tree__root {
  padding-bottom: 12px;
}

.sitemap-tree__level {
  display: grid;
  gap: 10px;
  margin-left: 16px;
  padding: 6px 0 6px 22px;
  border-left: 2px solid #dcdcd5;
}

.sitemap-tree__branch,
.sitemap-tree__child {
  position: relative;
}

.sitemap-tree__branch::before,
.sitemap-tree__child::before {
  position: absolute;
  top: 19px;
  left: -22px;
  width: 18px;
  height: 2px;
  background-color: #dcdcd5;
  content: '';
}

.sitemap-tree__children {
  display: grid;
  gap: 8px;
  margin: 10px 0 0 16px;
  padding-left: 22px;
  border-left: 2px dashed #dcdcd5;
}

.sitemap-tree__child::before {
  top: 17px;
}

@media (min-width: 64rem) {
  .sitemap-tree {
    justify-items: center;
  }

  .sitemap-tree__root {
    position: relative;
    padding-bottom: 0;
  }

  .sitemap-tree__root::after {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 24px;
    margin-left: -1px;
    background-color: #dcdcd5;
    content: '';
  }

  .sitemap-tree__level {
    grid-auto-flow: column;
    justify-content: center;
    gap: 16px;
    margin: 48px 0 0;
    padding: 0;
    border-left: 0;
  }

  .sitemap-tree__branch {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sitemap-tree__branch::before {
    top: -24px;
    left: 50%;
    width: 2px;
    height: 24px;
    margin-left: -1px;
  }

  .sitemap-tree__branch::after {
    position: absolute;
    top: -24px;
    right: -8px;
    left: -8px;
    height: 2px;
    background-color: #dcdcd5;
    content: '';
  }

  .sitemap-tree__branch:first-child::after {
    left: 50%;
  }

  .sitemap-tree__branch:last-child::after {
    right: 50%;
  }

  .sitemap-tree__branch:only-child::after {
    display: none;
  }

  .sitemap-tree__children {
    justify-items: center;
    margin: 14px 0 0;
    padding: 0;
    border-left: 0;
  }

  .sitemap-tree__child::before {
    top: -10px;
    left: 50%;
    width: 2px;
    height: 8px;
    margin-left: -1px;
  }
}
</style>
