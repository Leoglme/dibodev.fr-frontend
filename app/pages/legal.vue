<template>
  <section
    class="relative z-2 mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-14 px-6 py-24 sm:px-8 sm:py-32"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <h1 class="text-left text-3xl font-semibold sm:text-4xl">{{ $t('legal.title') }}</h1>

    <div class="flex flex-col gap-12 text-left text-base leading-relaxed">
      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('legal.publisher.title') }}</h2>
        <p class="text-gray-200" v-html="$t('legal.publisher.intro')" />
        <p class="text-gray-200">
          <strong>{{ $t('legal.publisher.name') }}</strong
          ><br />
          {{ $t('legal.publisher.legalForm') }}<br />
          <span v-html="$t('legal.publisher.address')" />
        </p>
        <p class="text-gray-200">
          {{ $t('legal.publisher.contact') }}
          <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>
        </p>
        <p class="text-gray-200">{{ $t('legal.publisher.siret') }}</p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('legal.host.title') }}</h2>
        <p class="text-gray-200">{{ $t('legal.host.intro') }}</p>
        <p class="text-gray-200">
          <strong>{{ $t('legal.host.name') }}</strong
          ><br />
          {{ $t('legal.host.addressLine1') }}<br />
          {{ $t('legal.host.addressLine2') }}<br />
          {{ $t('legal.host.addressLine3') }}
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">{{ $t('legal.activity.title') }}</h2>
        <p class="text-gray-200">{{ $t('legal.activity.description') }}</p>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useHead(() => ({
  title: t('legal.meta.title'),
  meta: [
    {
      name: 'description',
      content: t('legal.meta.description'),
    },
  ],
}))
</script>
