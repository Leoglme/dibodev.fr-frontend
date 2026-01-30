<template>
  <div ref="rootRef" class="relative flex w-full min-w-max flex-col gap-2">
    <div class="relative w-full">
      <button
        :id="id"
        type="button"
        class="flex h-12 w-full cursor-pointer items-center justify-between rounded-md border-2 border-transparent bg-gray-600 pr-10 pl-3 text-left text-base text-gray-100 transition-colors hover:border-gray-300"
        :aria-expanded="isOpen"
        :aria-haspopup="true"
        aria-label="Choisir la langue"
        @click="isOpen = !isOpen"
      >
        <span>{{ currentLocaleLabel }}</span>
        <div class="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <DibodevIcon
            name="ChevronDown"
            mode="stroke"
            :class="{ 'rotate-180': isOpen }"
            class="transition-transform"
          />
        </div>
      </button>

      <Transition name="dropdown">
        <div
          v-show="isOpen"
          class="absolute top-full right-0 left-0 z-10 mt-1 rounded-md border-2 border-gray-300 bg-gray-600 py-1 shadow-lg"
          role="menu"
        >
          <template v-for="opt in options" :key="opt.value">
            <NuxtLink
              v-if="!isCurrentLocale(opt.value)"
              :to="localePathFor(opt.value)"
              role="menuitem"
              class="block px-3 py-2 text-base text-gray-100 hover:bg-gray-500"
              @click="isOpen = false"
            >
              {{ opt.label }}
            </NuxtLink>
            <span
              v-else
              role="menuitem"
              aria-current="page"
              class="block px-3 py-2 text-base font-semibold text-gray-100"
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
import type { PropType } from 'vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'

const props = defineProps({
  options: {
    type: Array as PropType<DibodevSelectOption[]>,
    required: true,
  },
  id: { type: String, default: 'language-switcher' },
})

const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const currentLocaleLabel = computed((): string => {
  const opt = props.options.find((o) => o.value === locale.value)
  return opt?.label ?? props.options[0]?.label ?? ''
})

const localePathFor = (value: string | number): string => {
  const code = typeof value === 'string' ? value : String(value)
  return switchLocalePath(code)
}

const isCurrentLocale = (value: string | number): boolean => {
  const code = typeof value === 'string' ? value : String(value)
  return locale.value === code
}

const closeOnClickOutside = (event: MouseEvent): void => {
  const target = event.target as Node
  if (rootRef.value && !rootRef.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
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
