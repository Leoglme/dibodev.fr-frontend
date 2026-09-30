import type { Ref } from 'vue'
import type { DashboardConfirmOptions } from '~/core/types/Dashboard'

export type UseDashboardConfirmReturn = {
  confirmOptions: Ref<DashboardConfirmOptions | null>
  confirm: (options: DashboardConfirmOptions) => Promise<boolean>
  settleConfirm: (accepted: boolean) => void
}

/** Resolver of the pending confirmation (client only, never serialized). */
let pendingResolver: ((accepted: boolean) => void) | null = null

/**
 * Promise-based confirmation dialog that replaces window.confirm.
 *
 * @returns {UseDashboardConfirmReturn} The open dialog content, the confirm function and the settle callback.
 */
export function useDashboardConfirm(): UseDashboardConfirmReturn {
  const confirmOptions: Ref<DashboardConfirmOptions | null> = useState(
    'dashboard-confirm',
    (): DashboardConfirmOptions | null => null,
  )

  /**
   * Closes the dialog and resolves the pending promise.
   *
   * @param {boolean} accepted - Whether the user confirmed.
   * @returns {void}
   */
  function settleConfirm(accepted: boolean): void {
    confirmOptions.value = null
    const resolver: ((accepted: boolean) => void) | null = pendingResolver
    pendingResolver = null
    resolver?.(accepted)
  }

  /**
   * Opens the dialog and waits for the answer. A previous unanswered dialog is refused.
   *
   * @param {DashboardConfirmOptions} options - Question, consequence and button label.
   * @returns {Promise<boolean>} True when the user confirmed.
   */
  function confirm(options: DashboardConfirmOptions): Promise<boolean> {
    if (pendingResolver) settleConfirm(false)
    confirmOptions.value = options
    return new Promise<boolean>((resolve: (accepted: boolean) => void): void => {
      pendingResolver = resolve
    })
  }

  return { confirmOptions, confirm, settleConfirm }
}
