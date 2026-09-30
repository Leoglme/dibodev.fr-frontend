<template>
  <div class="flex h-full min-h-0 flex-col">
    <header class="flex shrink-0 items-start gap-3 border-b border-(--dash-line-soft) px-5 pt-5 pb-4">
      <div class="min-w-0 flex-1">
        <p class="dash-label">{{ props.subtitle }}</p>
        <h2
          class="mt-1.5 line-clamp-3 text-[17px] leading-snug font-medium tracking-[-0.01em] text-balance text-gray-100 md:text-lg"
        >
          {{ props.title }}
        </h2>
      </div>
      <div class="flex shrink-0 items-center gap-1">
        <template v-if="canBrowseList">
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-left"
            aria-label="Élément précédent"
            data-tip="Précédent · ←"
            :disabled="props.browseIndex === 0"
            @click="emit('previous')"
          />
          <span class="text-muted min-w-[44px] text-center text-xs tabular-nums">
            {{ (props.browseIndex ?? 0) + 1 }} / {{ props.browseTotal }}
          </span>
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-right"
            aria-label="Élément suivant"
            data-tip="Suivant · →"
            :disabled="(props.browseIndex ?? 0) >= (props.browseTotal ?? 1) - 1"
            @click="emit('next')"
          />
          <span class="mx-1 h-5 w-px bg-gray-300" aria-hidden="true" />
        </template>
        <DashboardButton
          variant="ghost"
          square
          icon="x"
          aria-label="Fermer"
          data-tip="Fermer · Échap"
          @click="emit('close')"
        />
      </div>
    </header>
    <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5">
      <div class="flex flex-col gap-5">
        <slot />
      </div>
    </div>
    <footer
      v-if="$slots.footer"
      class="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-(--dash-line-soft) px-5 pt-3.5 pb-[calc(14px+env(safe-area-inset-bottom,0px))] md:pb-3.5"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardDrawerFrameProps } from '~/core/types/DashboardDrawerFrame'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'

const props: DashboardDrawerFrameProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  browseIndex: {
    type: Number as PropType<number | null>,
    default: null,
  },
  browseTotal: {
    type: Number as PropType<number | null>,
    default: null,
  },
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'previous'): void
  (e: 'next'): void
}>()

const canBrowseList: ComputedRef<boolean> = computed(
  (): boolean => props.browseIndex !== null && props.browseTotal !== null && props.browseTotal > 1,
)

/**
 * Arrow keys browse the list (ignored while typing in a field).
 *
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function onKeydown(event: KeyboardEvent): void {
  if (!canBrowseList.value) return
  const target: HTMLElement | null = event.target as HTMLElement | null
  if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return
  if (event.key === 'ArrowLeft' && (props.browseIndex ?? 0) > 0) emit('previous')
  if (event.key === 'ArrowRight' && (props.browseIndex ?? 0) < (props.browseTotal ?? 1) - 1) emit('next')
}

onMounted((): void => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount((): void => {
  window.removeEventListener('keydown', onKeydown)
})
</script>
