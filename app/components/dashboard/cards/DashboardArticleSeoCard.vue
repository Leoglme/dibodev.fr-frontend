<template>
  <section class="flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4">
    <h2 class="flex items-center gap-2.5 text-[15px] font-medium text-gray-100">
      <DashboardIcon name="search" :size="17" class="text-muted" />
      Référencement
    </h2>
    <div class="flex flex-col gap-1.5">
      <div class="flex items-center justify-between">
        <label for="meta-title" class="text-[13px] font-medium text-gray-200">Meta title</label>
        <DashboardCounter :length="props.metaTitle.length" :min="55" :max="65" />
      </div>
      <DashboardTextField
        id="meta-title"
        v-model="metaTitleModel"
        multiline
        :rows="2"
        placeholder="55 à 65 caractères"
      />
    </div>
    <div class="flex flex-col gap-1.5">
      <div class="flex items-center justify-between">
        <label for="meta-description" class="text-[13px] font-medium text-gray-200">Meta description</label>
        <DashboardCounter :length="props.metaDescription.length" :min="140" :max="160" />
      </div>
      <DashboardTextField
        id="meta-description"
        v-model="metaDescriptionModel"
        multiline
        :rows="4"
        placeholder="140 à 160 caractères, qui donnent envie de cliquer"
      />
    </div>
    <div class="flex flex-col gap-1.5">
      <p class="text-[13px] font-medium text-gray-200">Aperçu dans Google</p>
      <div
        class="rounded-[10px] border border-(--dash-line-soft) bg-white p-3.5 font-[Arial,'Helvetica_Neue',sans-serif]"
      >
        <div class="flex items-center gap-2.5">
          <span class="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-(--dash-serp-favicon)">
            <DibodevLogo :size="16" />
          </span>
          <span class="min-w-0">
            <span class="block text-sm leading-tight text-(--dash-serp-site)">Dibodev</span>
            <span class="block truncate text-xs text-(--dash-serp-text)"
              >https://dibodev.fr › blog › {{ props.slug || '…' }}</span
            >
          </span>
        </div>
        <p class="mt-2 line-clamp-2 text-[17px] leading-snug text-(--dash-serp-title)">
          {{ props.metaTitle || props.articleTitle || 'Titre de l’article' }}
        </p>
        <p class="mt-1 line-clamp-3 text-[13px] leading-normal text-(--dash-serp-text)">
          <span class="text-(--dash-serp-meta)">{{ googlePreviewDate }} — </span>{{ googlePreviewDescription }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { DashboardArticleSeoCardProps } from '~/core/types/DashboardArticleSeoCard'
import { computed } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DashboardCounter from '~/components/dashboard/ui/DashboardCounter.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

const props: DashboardArticleSeoCardProps = defineProps({
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  articleTitle: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:metaTitle', value: string): void
  (e: 'update:metaDescription', value: string): void
}>()

const googlePreviewDate: string = DashboardFormatUtils.formatShortDate(new Date().toISOString())

const metaTitleModel: WritableComputedRef<string> = computed({
  get: (): string => props.metaTitle,
  set: (value: string): void => emit('update:metaTitle', value),
})

const metaDescriptionModel: WritableComputedRef<string> = computed({
  get: (): string => props.metaDescription,
  set: (value: string): void => emit('update:metaDescription', value),
})

const googlePreviewDescription: ComputedRef<string> = computed((): string => {
  const text: string = props.metaDescription || props.excerpt || 'La meta description apparaîtra ici.'
  return text.length > 158 ? `${text.slice(0, 155).trim()}…` : text
})
</script>
