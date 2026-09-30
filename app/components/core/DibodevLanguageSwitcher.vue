<template>
  <div ref="rootRef" class="relative flex w-full min-w-max flex-col gap-2">
    <div class="relative w-full">
      <button
        :id="id"
        type="button"
        class="flex h-11 w-full min-w-[88px] cursor-pointer items-center justify-between rounded-lg border border-gray-400 bg-white pr-10 pl-3 text-left text-base text-gray-100 transition-colors hover:border-gray-100"
        :aria-expanded="isOpen"
        :aria-haspopup="true"
        :aria-label="`${currentLocaleLabel} — ${$t('accessibility.chooseLanguage')}`"
        @click="isOpen = !isOpen"
      >
        <span>{{ currentLocaleLabel }}</span>
        <div class="text-muted pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <DibodevIcon
            name="ChevronDown"
            mode="stroke"
            :width="20"
            :height="20"
            :class="{ 'rotate-180': isOpen }"
            class="transition-transform"
          />
        </div>
      </button>

      <Transition name="dropdown">
        <div
          v-show="isOpen"
          class="absolute top-full right-0 left-0 z-10 mt-1 rounded-lg border border-gray-300 bg-white py-1 shadow-lg"
          role="menu"
        >
          <template v-for="opt in options" :key="opt.value">
            <NuxtLink
              v-if="!isCurrentLocale(opt.value)"
              :to="localePathFor(opt.value)"
              role="menuitem"
              class="block px-3 py-2 text-base text-gray-200 hover:bg-gray-800 hover:text-gray-100"
              @click="onSelectLocale(opt.value)"
            >
              {{ opt.label }}
            </NuxtLink>
            <span
              v-else
              role="menuitem"
              aria-current="page"
              class="block px-3 py-2 text-base font-medium text-gray-100"
            >
              {{ opt.label }}
            </span>
          </template>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { DibodevLanguageSwitcherProps } from '~/core/types/DibodevLanguageSwitcher'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Locale switcher: current locale as a button, the others as crawlable links.
 */
const props: DibodevLanguageSwitcherProps = defineProps({
  options: {
    type: Array as PropType<DibodevSelectOption[]>,
    required: true,
  },
  id: { type: String, default: 'language-switcher' },
})

const { locale } = useI18n()
const switchLocalePathWithSlug = useSwitchLocalePathWithSlug()
const { track } = useTracking()

const isOpen: Ref<boolean> = ref(false)
const rootRef: Ref<HTMLElement | null> = ref<HTMLElement | null>(null)

const currentLocaleLabel: ComputedRef<string> = computed((): string => {
  const opt: DibodevSelectOption | undefined = props.options.find(
    (option: DibodevSelectOption): boolean => option.value === locale.value,
  )
  return opt?.label ?? props.options[0]?.label ?? ''
})

/**
 * Localized path of the current page in another locale.
 * @param {string | number} value - The target locale code.
 * @returns {string} The path.
 */
const localePathFor = (value: string | number): string => {
  const code: string = typeof value === 'string' ? value : String(value)
  return switchLocalePathWithSlug(code)
}

/**
 * Whether the option is the active locale.
 * @param {string | number} value - The locale code.
 * @returns {boolean} True when active.
 */
const isCurrentLocale = (value: string | number): boolean => {
  const code: string = typeof value === 'string' ? value : String(value)
  return locale.value === code
}

/**
 * Track the locale change, then close the menu.
 * @param {string | number} value - The target locale.
 * @returns {void}
 */
function onSelectLocale(value: string | number): void {
  const to: string = typeof value === 'string' ? value : String(value)
  track(TRACKING_EVENTS.localeSwitched, { from: locale.value, to })
  isOpen.value = false
}

/**
 * Close the menu when clicking outside of it.
 * @param {MouseEvent} event - The document click event.
 * @returns {void}
 */
const closeOnClickOutside = (event: MouseEvent): void => {
  const target: Node = event.target as Node
  if (rootRef.value && !rootRef.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted((): void => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted((): void => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
