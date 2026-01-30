<template>
  <section
    class="relative z-2 mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-14 px-6 py-24 sm:px-8 sm:py-32"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <h1 class="text-left text-3xl font-semibold sm:text-4xl">{{ $t('privacy.title') }}</h1>

    <div class="flex flex-col gap-12 text-left text-base leading-relaxed">
      <p class="text-gray-200">{{ $t('privacy.intro') }}</p>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.dataController.title') }}</h2>
        <p class="text-gray-200">
          {{ $t('privacy.dataController.content') }}
          <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.contactFormData.title') }}</h2>
        <p class="text-gray-200">{{ $t('privacy.contactFormData.paragraph1') }}</p>
        <p class="text-gray-200">{{ $t('privacy.contactFormData.paragraph2') }}</p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.subcontractor.title') }}</h2>
        <p class="text-gray-200">
          {{ $t('privacy.subcontractor.contentBefore') }}<strong>{{ $t('privacy.subcontractor.contentBold') }}</strong
          >{{ $t('privacy.subcontractor.contentAfter') }}
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.umami.title') }}</h2>
        <p class="text-gray-200">
          {{ $t('privacy.umami.contentBefore') }}<strong>{{ $t('privacy.umami.contentBold') }}</strong
          >{{ $t('privacy.umami.contentAfter') }}
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.rights.title') }}</h2>
        <p class="text-gray-200">
          {{ $t('privacy.rights.content') }}
          <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>.
          {{ $t('privacy.rights.complaint') }}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-[#bdb3ff] underline"
            >{{ $t('privacy.rights.cnil') }}</a
          >.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('privacy.applicableLaw.title') }}</h2>
        <p class="text-gray-200">{{ $t('privacy.applicableLaw.content') }}</p>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useHead(() => ({
  title: t('privacy.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('privacy.meta.description'),
    },
  ],
}))
</script>
