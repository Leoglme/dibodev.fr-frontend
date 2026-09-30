<template>
  <Transition name="dash-fade">
    <div
      v-if="confirmOptions"
      class="fixed inset-0 z-[90] flex items-end justify-center bg-(--dash-scrim) p-3 pb-[calc(12px+env(safe-area-inset-bottom,0px))] md:items-center md:p-6"
      @click.self="settleConfirm(false)"
    >
      <div
        class="w-full max-w-[420px] rounded-2xl bg-white p-5 shadow-(--dash-shadow-pop)"
        role="alertdialog"
        aria-modal="true"
        :aria-labelledby="titleId"
      >
        <h2 :id="titleId" class="text-[17px] font-medium text-gray-100">{{ confirmOptions.title }}</h2>
        <p v-if="confirmOptions.text" class="mt-1.5 text-sm text-gray-200">{{ confirmOptions.text }}</p>
        <div class="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <DashboardButton
            variant="outline"
            size="lg"
            class="sm:h-9 sm:px-3.5 sm:text-sm"
            @click="settleConfirm(false)"
          >
            Annuler
          </DashboardButton>
          <DashboardButton
            :variant="confirmOptions.danger ? 'outline' : 'primary'"
            size="lg"
            class="sm:h-9 sm:px-3.5 sm:text-sm"
            :class="confirmOptions.danger ? '!border-(--dash-red) !text-(--dash-red) hover:!bg-(--dash-red-tint)' : ''"
            @click="settleConfirm(true)"
          >
            {{ confirmOptions.confirmLabel ?? 'Confirmer' }}
          </DashboardButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import type { UseDashboardConfirmReturn } from '~/composables/useDashboardConfirm'
import { useId } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import { useDashboardConfirm } from '~/composables/useDashboardConfirm'

const { confirmOptions, settleConfirm }: UseDashboardConfirmReturn = useDashboardConfirm()

const titleId: string = `confirm-${useId()}`
</script>

<style scoped>
.dash-fade-enter-active,
.dash-fade-leave-active {
  transition: opacity 0.18s ease;
}

.dash-fade-enter-from,
.dash-fade-leave-to {
  opacity: 0;
}
</style>
