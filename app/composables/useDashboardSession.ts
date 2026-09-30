import type { Ref } from 'vue'

export type UseDashboardSessionReturn = {
  sessionVerifiedAt: Ref<number>
  markSessionVerified: () => void
  forgetSession: () => void
}

/**
 * Last time the server confirmed the back-office session, so that moving between pages does not wait for it.
 *
 * @returns {UseDashboardSessionReturn} The confirmation time and the functions to set or clear it.
 */
export function useDashboardSession(): UseDashboardSessionReturn {
  const sessionVerifiedAt: Ref<number> = useState('dashboard-session-verified-at', (): number => 0)

  /**
   * Records that the session was just confirmed (login, or a successful check).
   *
   * @returns {void}
   */
  function markSessionVerified(): void {
    sessionVerifiedAt.value = Date.now()
  }

  /**
   * Forgets the confirmation, so the next page checks the session again (logout, expired session).
   *
   * @returns {void}
   */
  function forgetSession(): void {
    sessionVerifiedAt.value = 0
  }

  return { sessionVerifiedAt, markSessionVerified, forgetSession }
}
