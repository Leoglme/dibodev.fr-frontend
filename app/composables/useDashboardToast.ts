import type { Ref } from 'vue'
import type { DashboardToast, DashboardToastInput } from '~/core/types/Dashboard'

export type UseDashboardToastReturn = {
  toasts: Ref<DashboardToast[]>
  showToast: (input: DashboardToastInput) => void
  dismissToast: (id: number) => void
}

const DEFAULT_TOAST_DURATION_MS: number = 4200
const ERROR_TOAST_DURATION_MS: number = 6500
const MAX_VISIBLE_TOASTS: number = 3

/**
 * Toast notifications of the back-office.
 *
 * @returns {UseDashboardToastReturn} The toast list and the functions to show or dismiss one.
 */
export function useDashboardToast(): UseDashboardToastReturn {
  const toasts: Ref<DashboardToast[]> = useState('dashboard-toasts', (): DashboardToast[] => [])
  const counter: Ref<number> = useState('dashboard-toast-counter', (): number => 0)

  /**
   * Removes a toast.
   *
   * @param {number} id - Id of the toast to remove.
   * @returns {void}
   */
  function dismissToast(id: number): void {
    toasts.value = toasts.value.filter((toast: DashboardToast): boolean => toast.id !== id)
  }

  /**
   * Shows a toast; errors stay longer. Only the three most recent toasts are kept.
   *
   * @param {DashboardToastInput} input - Title and optional tone, icon, text and action.
   * @returns {void}
   */
  function showToast(input: DashboardToastInput): void {
    counter.value += 1
    const tone: DashboardToast['tone'] = input.tone ?? 'green'
    const toast: DashboardToast = {
      id: counter.value,
      tone,
      icon: input.icon ?? (tone === 'red' ? 'circle-alert' : 'check'),
      title: input.title,
      text: input.text ?? '',
      actionLabel: input.actionLabel ?? null,
      actionTo: input.actionTo ?? null,
      durationMs: input.durationMs ?? (tone === 'red' ? ERROR_TOAST_DURATION_MS : DEFAULT_TOAST_DURATION_MS),
    }
    toasts.value = [...toasts.value, toast].slice(-MAX_VISIBLE_TOASTS)
    if (import.meta.client) {
      window.setTimeout((): void => dismissToast(toast.id), toast.durationMs)
    }
  }

  return { toasts, showToast, dismissToast }
}
