<template>
  <div class="flex min-h-dvh">
    <div class="flex w-full flex-col md:w-1/2 md:border-r md:border-gray-300">
      <header class="flex px-6 pt-[calc(24px+env(safe-area-inset-top,0px))] md:px-10">
        <NuxtLink
          :to="localePath('/')"
          class="text-muted -ml-2 inline-flex h-9 items-center gap-1.5 rounded-lg px-2 text-[13.5px] font-medium transition-colors hover:bg-(--dash-hover) hover:text-gray-100"
        >
          <DashboardIcon name="arrow-left" :size="15" />
          {{ $t('dashboard.login.backToSite') }}
        </NuxtLink>
      </header>

      <main
        class="flex flex-1 items-center justify-center px-6 pt-10 pb-[calc(48px+env(safe-area-inset-bottom,0px))] md:px-12"
      >
        <div class="dash-rise w-full max-w-sm">
          <div class="flex items-center gap-2.5">
            <DibodevLogo :size="34" />
            <span class="text-lg font-medium tracking-[-0.01em] text-gray-100">Dibodev</span>
            <span class="text-muted text-sm">Admin</span>
          </div>
          <h1 class="mt-9 text-4xl font-medium tracking-[-0.025em] text-gray-100">
            {{ $t('dashboard.login.heading') }}
          </h1>
          <p class="mt-3 text-[15px] leading-relaxed text-gray-200">{{ $t('dashboard.login.subtitle') }}</p>

          <Form ref="loginForm" class="mt-9 flex flex-col gap-9" @submit="onSubmit">
            <div class="relative">
              <DibodevInput
                :id="PASSWORD_FIELD_ID"
                v-model:value="password"
                type="password"
                autocomplete="current-password"
                :label="$t('dashboard.login.passwordLabel')"
                @keydown="onPasswordKey"
                @keyup="onPasswordKey"
              />
              <p
                v-if="isCapsLockOn"
                class="absolute top-0.5 right-0 flex items-center gap-1.5 text-[13px] text-(--dash-amber)"
                role="status"
              >
                <DashboardIcon name="triangle-alert" :size="14" />
                {{ $t('dashboard.login.capsLockOn') }}
              </p>
            </div>

            <DashboardButton
              type="submit"
              variant="primary"
              size="lg"
              block
              :loading="isLoggingIn"
              :disabled="!password"
            >
              {{ $t('dashboard.login.submit') }}
            </DashboardButton>
          </Form>

          <p class="text-muted mt-8 flex items-start gap-1.5 text-[13px] leading-snug">
            <DashboardIcon name="lock" :size="14" class="mt-px" />
            {{ $t('dashboard.login.protectedAccess') }}
          </p>
        </div>
      </main>
    </div>

    <aside class="bg-surface-tint relative hidden overflow-hidden md:flex md:flex-1" aria-hidden="true">
      <span class="pointer-events-none absolute -right-28 -bottom-32 opacity-[0.14]">
        <DibodevLogo :size="560" />
      </span>
      <div class="relative flex flex-1 items-center px-10 lg:px-14 xl:px-20">
        <div class="dash-rise">
          <p
            v-for="wordKey in PANEL_WORD_KEYS"
            :key="wordKey"
            class="text-[52px] leading-[1.02] font-medium tracking-[-0.035em] text-gray-100 lg:text-[76px] xl:text-[92px]"
          >
            {{ $t(`dashboard.login.${wordKey}`) }}<span class="text-primary">.</span>
          </p>
          <p class="mt-8 max-w-sm text-base leading-relaxed text-gray-200">{{ $t('dashboard.login.panelLine') }}</p>
          <ul class="mt-8 flex max-w-md flex-wrap gap-2">
            <li
              v-for="module in panelModules"
              :key="module.key"
              class="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pr-3.5 pl-1.5 text-[13px] font-medium text-gray-100 shadow-(--dash-shadow-raise)"
            >
              <DashboardIconTile :icon="module.icon" :tone="module.tone" size="xs" is-round />
              {{ $t(`dashboard.login.panelModules.${module.key}`) }}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import type { UseDashboardSessionReturn } from '~/composables/useDashboardSession'
import type { ComputedRef, Ref } from 'vue'
import type { FormContext } from 'vee-validate'
import type { DashboardNavGroup, DashboardNavItem } from '~/core/types/Dashboard'
import { computed, nextTick, onMounted, ref } from 'vue'
import { Form } from 'vee-validate'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import { DASHBOARD_NAV_GROUPS } from '~/core/constants/dashboardNavigation'
import { useDashboardSession } from '~/composables/useDashboardSession'

definePageMeta({
  layout: 'login',
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const { t }: { t: (key: string) => string } = useI18n()
const { markSessionVerified }: UseDashboardSessionReturn = useDashboardSession()

useHead(() => ({
  title: t('dashboard.login.title'),
}))

const PASSWORD_FIELD_ID: string = 'dashboard-password'
const PANEL_WORD_KEYS: string[] = ['panelWordWrite', 'panelWordMeasure', 'panelWordImprove']

const loginForm: Ref<FormContext | null> = ref(null)
const password: Ref<string> = ref('')
const isLoggingIn: Ref<boolean> = ref(false)
const isCapsLockOn: Ref<boolean> = ref(false)

const panelModules: ComputedRef<DashboardNavItem[]> = computed((): DashboardNavItem[] =>
  DASHBOARD_NAV_GROUPS.flatMap((group: DashboardNavGroup): DashboardNavItem[] => group.items).filter(
    (item: DashboardNavItem): boolean => item.key !== 'overview',
  ),
)

const redirectPath: ComputedRef<string> = computed((): string => {
  const redirect: string = typeof route.query.redirect === 'string' ? route.query.redirect : ''
  return redirect.startsWith('/dashboard') ? redirect : localePath('/dashboard')
})

/**
 * Password field of the page.
 *
 * @returns {HTMLInputElement | null} The input, once rendered.
 */
function getPasswordInput(): HTMLInputElement | null {
  return document.getElementById(PASSWORD_FIELD_ID) as HTMLInputElement | null
}

/**
 * Warns when Caps Lock is on while typing the password.
 *
 * @param {KeyboardEvent} event - Key event bubbling up from the password field.
 * @returns {void}
 */
function onPasswordKey(event: KeyboardEvent): void {
  if (typeof event.getModifierState === 'function') isCapsLockOn.value = event.getModifierState('CapsLock')
}

/**
 * Signs in, then opens the page asked before the login (or the overview).
 *
 * @returns {Promise<void>}
 */
async function onSubmit(): Promise<void> {
  if (!password.value) return
  isLoggingIn.value = true
  try {
    await $fetch<{ ok: true }>('/api/auth/login', {
      method: 'POST',
      body: { password: password.value },
    })
    markSessionVerified()
    await navigateTo(redirectPath.value)
  } catch {
    loginForm.value?.setFieldError(PASSWORD_FIELD_ID, t('dashboard.login.errorInvalid'))
    await nextTick()
    getPasswordInput()?.select()
  } finally {
    isLoggingIn.value = false
  }
}

onMounted((): void => {
  if (window.matchMedia('(pointer: fine)').matches) getPasswordInput()?.focus()
  $fetch<{ ok: true }>('/api/auth/me')
    .then(async (): Promise<void> => {
      markSessionVerified()
      await navigateTo(redirectPath.value, { replace: true })
    })
    .catch((): void => undefined)
})
</script>
