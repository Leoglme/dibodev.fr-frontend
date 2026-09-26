<template>
  <section
    id="faq"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-3xl gap-10 sm:gap-12">
      <h2 class="text-left text-2xl font-semibold text-gray-100 sm:text-[32px]">
        {{ props.title }}
      </h2>

      <div class="grid gap-4">
        <details
          v-for="faqQuestion in props.questions"
          :key="faqQuestion.question"
          class="group rounded-2xl border border-gray-400 bg-gray-800 px-6 py-5"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"
          >
            <h3 class="text-left text-base font-medium text-gray-100 sm:text-lg">
              {{ faqQuestion.question }}
            </h3>
            <DibodevIcon
              name="ChevronDown"
              mode="stroke"
              :width="20"
              :height="20"
              class="shrink-0 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p class="mt-4 text-left text-sm leading-7 font-normal text-gray-200 sm:text-base">
            {{ faqQuestion.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevFaqQuestion, DibodevFaqSectionProps } from '~/core/types/DibodevFaqSection'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { buildFaqSchemaJson } from '~/config/faqSchema'

const props: DibodevFaqSectionProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  questions: {
    type: Array as PropType<DibodevFaqQuestion[]>,
    required: true,
  },
})

useHead(() => ({
  script: [{ type: 'application/ld+json', key: 'schema-faq', innerHTML: buildFaqSchemaJson(props.questions) }],
}))
</script>
