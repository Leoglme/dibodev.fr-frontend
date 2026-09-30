<template>
  <NuxtLayout>
    <section class="px-6 pt-[120px] pb-20 sm:px-8 lg:pt-[160px] lg:pb-28">
      <div class="mx-auto grid w-full max-w-3xl gap-8">
        <div class="grid gap-5">
          <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">
            {{ $t('error.codeLabel', { code: props.error.statusCode }) }}
          </p>
          <h1 class="text-[34px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[44px]">
            {{ isNotFound ? $t('error.notFound.title') : $t('error.generic.title') }}
          </h1>
          <p class="max-w-[600px] text-[17px] leading-7 text-gray-200">
            {{ isNotFound ? $t('error.notFound.description') : $t('error.generic.description') }}
          </p>
          <pre
            v-if="isDevelopment && !isNotFound"
            class="max-w-full overflow-auto rounded-lg bg-gray-800 p-4 text-xs leading-5 whitespace-pre-wrap text-gray-100"
            >{{ errorDetails }}</pre
          >
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <DibodevButton class="w-full sm:w-auto" @click="goTo('/')">{{ $t('error.home') }}</DibodevButton>
          <DibodevButton :outlined="true" class="w-full sm:w-auto" @click="goTo('projects')">
            {{ $t('error.projects') }}
          </DibodevButton>
          <DibodevButton :outlined="true" class="w-full sm:w-auto" @click="goTo('/contact')">
            {{ $t('error.contact') }}
          </DibodevButton>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { NuxtError } from '#app'
import type { DibodevErrorPageProps } from '~/core/types/DibodevErrorPage'
import DibodevButton from '~/components/core/DibodevButton.vue'

const NOT_FOUND_STATUS_CODE: number = 404

/**
 * Error page (404 and server errors) rendered inside the default layout, with the three most useful exits.
 */
const props: DibodevErrorPageProps = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()

const isNotFound: ComputedRef<boolean> = computed((): boolean => props.error.statusCode === NOT_FOUND_STATUS_CODE)
/** Development only: the raw error is printed on the page so a capture of an error page is diagnosable. */
const isDevelopment: boolean = import.meta.dev
const errorDetails: ComputedRef<string> = computed((): string =>
  [props.error.statusMessage, props.error.message, props.error.stack].filter(Boolean).join('\n\n'),
)

useHead(() => ({
  title: isNotFound.value ? t('error.notFound.title') : t('error.generic.title'),
  meta: [{ name: 'robots', content: 'noindex' }],
}))

/**
 * Clears the error and navigates to a localized route.
 * @param {string} route - Route name or path accepted by `localePath`.
 * @returns {void}
 */
function goTo(route: string): void {
  clearError({ redirect: localePath(route) })
}
</script>
