<template>
  <div>
    <section class="px-6 pt-[120px] pb-12 sm:px-8 lg:pt-[160px] lg:pb-16" data-aos="fade-up">
      <div class="mx-auto grid w-full max-w-3xl justify-items-center gap-5 text-center">
        <DibodevBreadcrumb :items="breadcrumbs" />
        <h1 class="text-[32px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[40px]">
          {{ $t('legal.title') }}
        </h1>
        <p class="max-w-[600px] text-[17px] leading-7 text-gray-200">{{ $t('legal.intro') }}</p>
      </div>
    </section>

    <section class="bg-gray-800 px-6 py-16 sm:px-8 lg:py-20" data-aos="fade-up">
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('legal.publisher.title') }}</h2>
          <p class="text-gray-200">
            {{ $t('legal.publisher.introBefore') }}<strong>{{ $t('legal.publisher.introBold') }}</strong
            >{{ $t('legal.publisher.introAfter') }}
          </p>
          <p class="text-gray-200">
            <strong>{{ $t('legal.publisher.name') }}</strong
            ><br />
            {{ $t('legal.publisher.legalForm') }}<br />
            {{ $t('legal.publisher.addressLine1') }}<br />
            {{ $t('legal.publisher.addressLine2') }}<br />
            {{ $t('legal.publisher.addressLine3') }}
          </p>
          <p class="text-gray-200">
            {{ $t('legal.publisher.contact') }}
            <a href="mailto:contact@dibodev.fr" class="text-primary font-medium underline">contact@dibodev.fr</a>
          </p>
          <p class="text-gray-200">{{ $t('legal.publisher.siret') }}</p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('legal.host.title') }}</h2>
          <p class="text-gray-200">{{ $t('legal.host.intro') }}</p>
          <p class="text-gray-200">
            <strong>{{ $t('legal.host.name') }}</strong
            ><br />
            {{ $t('legal.host.addressLine1') }}<br />
            {{ $t('legal.host.addressLine2') }}<br />
            {{ $t('legal.host.addressLine3') }}
          </p>
        </section>

        <section
          class="grid gap-4 rounded-xl border border-gray-300 bg-white p-6 text-left text-base leading-relaxed sm:p-8"
        >
          <h2 class="text-xl font-medium text-gray-100">{{ $t('legal.activity.title') }}</h2>
          <p class="text-gray-200">{{ $t('legal.activity.description') }}</p>
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
  { label: t('footer.legal'), to: null },
])

useHead(() => ({
  title: t('legal.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('legal.meta.description'),
    },
    { property: 'og:title', content: t('legal.meta.title') },
    { property: 'og:description', content: t('legal.meta.description') },
  ],
}))
</script>
