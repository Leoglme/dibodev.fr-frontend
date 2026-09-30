<template>
  <div>
    <section class="px-6 pt-[120px] pb-12 sm:px-8 lg:pt-[160px] lg:pb-16" data-aos="fade-up">
      <div class="mx-auto grid w-full max-w-3xl justify-items-center gap-5 text-center">
        <DibodevBreadcrumb :items="breadcrumbs" />
        <h1 class="text-[32px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[40px]">
          {{ $t('privacy.title') }}
        </h1>
        <p class="max-w-[600px] text-[17px] leading-7 text-gray-200">{{ $t('privacy.intro') }}</p>
      </div>
    </section>

    <section class="bg-gray-800 px-6 py-16 sm:px-8 lg:py-20" data-aos="fade-up">
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.dataController.title') }}</h2>
          <p class="text-gray-200">
            {{ $t('privacy.dataController.content') }}
            <a href="mailto:contact@dibodev.fr" class="text-primary font-medium underline">contact@dibodev.fr</a>.
          </p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.contactFormData.title') }}</h2>
          <p class="text-gray-200">{{ $t('privacy.contactFormData.paragraph1') }}</p>
          <p class="text-gray-200">{{ $t('privacy.contactFormData.paragraph2') }}</p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.subcontractor.title') }}</h2>
          <p class="text-gray-200">
            {{ $t('privacy.subcontractor.contentBefore') }}<strong>{{ $t('privacy.subcontractor.contentBold') }}</strong
            >{{ $t('privacy.subcontractor.contentAfter') }}
          </p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.umami.title') }}</h2>
          <p class="text-gray-200">
            {{ $t('privacy.umami.contentBefore') }}<strong>{{ $t('privacy.umami.contentBold') }}</strong
            >{{ $t('privacy.umami.contentAfter') }}
          </p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.rights.title') }}</h2>
          <p class="text-gray-200">
            {{ $t('privacy.rights.content') }}
            <a href="mailto:contact@dibodev.fr" class="text-primary font-medium underline">contact@dibodev.fr</a>.
            {{ $t('privacy.rights.complaint') }}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary font-medium underline"
              >{{ $t('privacy.rights.cnil') }}</a
            >.
          </p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('privacy.applicableLaw.title') }}</h2>
          <p class="text-gray-200">{{ $t('privacy.applicableLaw.content') }}</p>
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import DibodevBreadcrumb from '~/components/navigations/DibodevBreadcrumb.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { usePageShareImage } from '~/composables/usePageShareImage'

const { t } = useI18n()
usePageShareImage('home')
const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('footer.privacy'), to: null },
])

useHead(() => ({
  title: t('privacy.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('privacy.meta.description'),
    },
    { property: 'og:title', content: t('privacy.meta.title') },
    { property: 'og:description', content: t('privacy.meta.description') },
  ],
}))
</script>
