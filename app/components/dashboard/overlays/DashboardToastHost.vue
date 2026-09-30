<template>
  <div
    class="pointer-events-none fixed inset-x-3 bottom-[calc(76px+env(safe-area-inset-bottom,0px))] z-[95] flex flex-col gap-2.5 md:inset-x-auto md:right-5 md:bottom-5 md:w-[380px]"
    aria-live="polite"
  >
    <TransitionGroup name="dash-toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-(--dash-shadow-pop)"
        role="status"
      >
        <DashboardIconTile :icon="toast.icon" :tone="toast.tone" size="md" is-round />
        <div class="min-w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-100">{{ toast.title }}</p>
          <p v-if="toast.text" class="text-muted mt-0.5 text-[13px] leading-snug">{{ toast.text }}</p>
          <NuxtLink
            v-if="toast.actionLabel && toast.actionTo"
            :to="toast.actionTo"
            class="text-primary hover:text-primary-dark mt-1.5 inline-flex text-[13px] font-medium"
            @click="dismissToast(toast.id)"
          >
            {{ toast.actionLabel }}
          </NuxtLink>
        </div>
        <DashboardButton
          variant="ghost"
          size="sm"
          square
          icon="x"
          aria-label="Fermer la notification"
          class="-mt-1 -mr-1"
          @click="dismissToast(toast.id)"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import { useDashboardToast } from '~/composables/useDashboardToast'

const { toasts, dismissToast }: UseDashboardToastReturn = useDashboardToast()
</script>

<style scoped>
.dash-toast-enter-active {
  transition:
    opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.dash-toast-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.dash-toast-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.dash-toast-leave-to {
  opacity: 0;
  transform: translateX(24px);
}
</style>
