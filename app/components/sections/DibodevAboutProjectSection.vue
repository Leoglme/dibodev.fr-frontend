<template>
  <section
    data-aos="fade-up"
    data-aos-duration="600"
    id="project-about"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen flex-col items-center justify-start gap-32"
  >
    <div class="grid w-full gap-16 px-3 py-36 sm:max-w-4xl sm:gap-20 sm:py-48">
      <div class="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h2 class="w-full text-left text-2xl font-semibold text-gray-100 sm:text-[32px]">
          {{ $t('project.about.descriptionTitle') }}
        </h2>
        <div
          v-if="descriptionHtml"
          class="project-long-description text-left text-base leading-7 font-normal text-gray-100 sm:text-base"
          v-html="descriptionHtml"
        />
      </div>
    </div>

    <div class="grid w-full items-center justify-center gap-10 bg-gray-800 p-8 sm:gap-16">
      <h2 class="text-left text-2xl font-semibold text-gray-100 sm:text-center sm:text-[32px]">
        {{ $t('project.about.devEnvironmentTitle') }}
      </h2>
      <DibodevBrandsLogos :names="props.project.stack" :show-labels="true" />
      <div v-if="props.project.repoUrl" class="flex items-center justify-center">
        <DibodevGitHubButton :repoUrl="props.project.repoUrl" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { PropType } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevBrandsLogos from '~/components/icons/DibodevBrandsLogos.vue'
import DibodevGitHubButton from '~/components/buttons/DibodevGitHubButton.vue'
import { stringToDescriptionHtml, isRichtextDocument } from '~/core/utils/projectLongDescriptionHtml'

/* PROPS */
const props = defineProps({
  project: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
})

const richtextHtml: Ref<string> = ref<string>('')

watch(
  () => props.project.longDescription,
  async (value: DibodevProject['longDescription']): Promise<void> => {
    richtextHtml.value = ''
    if (value == null || !isRichtextDocument(value)) return
    try {
      const { richTextResolver } = await import('@storyblok/richtext')
      type RichTextNode = Parameters<ReturnType<typeof richTextResolver>['render']>[0]
      const html: string = richTextResolver().render(value as RichTextNode)
      richtextHtml.value = typeof html === 'string' && html.trim() !== '' ? html.trim() : ''
    } catch {
      richtextHtml.value = ''
    }
  },
  { immediate: true },
)

const descriptionHtml: ComputedRef<string> = computed((): string => {
  const long: DibodevProject['longDescription'] = props.project.longDescription
  if (typeof long === 'string') {
    return stringToDescriptionHtml(long)
  }
  return richtextHtml.value
})
</script>

<style scoped>
.project-long-description :deep(p) {
  margin-bottom: 40px;
}
.project-long-description :deep(p:last-child) {
  margin-bottom: 0;
}
.project-long-description :deep(h2) {
  font-size: 20px;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  padding-bottom: 8px;
  text-decoration: solid underline rgba(255, 255, 255, 0.7);
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;
}
.project-long-description :deep(h3) {
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}
.project-long-description :deep(ul),
.project-long-description :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  list-style-position: outside;
}
.project-long-description :deep(ul) {
  list-style-type: disc;
}
.project-long-description :deep(ul li::marker) {
  color: rgba(255, 255, 255, 0.7);
}
.project-long-description :deep(ol) {
  list-style-type: decimal;
}
.project-long-description :deep(li) {
  margin-bottom: 0.5rem;
}
.project-long-description :deep(li:last-child) {
  margin-bottom: 0;
}
.project-long-description :deep(li > p) {
  margin-bottom: 0;
  display: inline;
}
</style>
