import type { ComputedRef, Ref } from 'vue'
import type { DashboardTone } from '~/core/types/Dashboard'
import type { DeployStatusResponse } from '~~/server/types/dashboard/deploy'
import { computed } from 'vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

export type DeployDisplay = {
  tone: DashboardTone
  title: string
  detail: string
  running: boolean
}

export type UseDashboardDeployStatusReturn = {
  status: Ref<DeployStatusResponse | null>
  display: ComputedRef<DeployDisplay>
  loadDeployStatus: () => Promise<void>
  watchDeploys: () => void
  unwatchDeploys: () => void
}

const IDLE_POLL_MS: number = 120_000
const RUNNING_POLL_MS: number = 15_000

let pollTimer: ReturnType<typeof setTimeout> | null = null

/**
 * Live status of the site deployment (deployed commit and latest GitHub Actions run), polled faster while a deploy runs.
 *
 * @returns {UseDashboardDeployStatusReturn} The status, its display and the polling controls.
 */
export function useDashboardDeployStatus(): UseDashboardDeployStatusReturn {
  const status: Ref<DeployStatusResponse | null> = useState(
    'dashboard-deploy-status',
    (): DeployStatusResponse | null => null,
  )

  const display: ComputedRef<DeployDisplay> = computed((): DeployDisplay => {
    const value: DeployStatusResponse | null = status.value
    if (!value) return { tone: 'neutral', title: 'Statut du site', detail: 'Vérification…', running: false }
    if (value.run && (value.run.status === 'queued' || value.run.status === 'in_progress')) {
      return {
        tone: 'amber',
        title: 'Déploiement en cours',
        detail: `Lancé ${DashboardFormatUtils.formatRelative(value.run.startedAt)}`,
        running: true,
      }
    }
    if (value.run?.status === 'completed' && value.run.conclusion && value.run.conclusion !== 'success') {
      return {
        tone: 'red',
        title: 'Dernier déploiement en échec',
        detail: `Échoué ${DashboardFormatUtils.formatRelative(value.run.finishedAt ?? value.run.startedAt)}`,
        running: false,
      }
    }
    if (value.synced === false) {
      return {
        tone: 'amber',
        title: 'Mise en ligne en attente',
        detail: `Modifié ${DashboardFormatUtils.formatRelative(value.headDate)}`,
        running: false,
      }
    }
    if (!value.configured)
      return { tone: 'neutral', title: 'Statut indisponible', detail: 'GitHub non configuré', running: false }
    const onlineSince: string | null = value.run?.finishedAt ?? value.headDate
    return {
      tone: 'green',
      title: 'Site à jour',
      detail: onlineSince
        ? `Mis en ligne ${DashboardFormatUtils.formatRelative(onlineSince)}`
        : 'Dernière version en ligne',
      running: false,
    }
  })

  /**
   * Loads the status once.
   *
   * @returns {Promise<void>}
   */
  async function loadDeployStatus(): Promise<void> {
    try {
      status.value = await $fetch<DeployStatusResponse>('/api/dashboard/deploy-status')
    } catch {
      // the card keeps its last known state
    }
  }

  /**
   * Stops polling.
   *
   * @returns {void}
   */
  function unwatchDeploys(): void {
    if (pollTimer) clearTimeout(pollTimer)
    pollTimer = null
  }

  /**
   * Polls the status: every 15 s while a deploy runs, every 2 min otherwise.
   *
   * @returns {void}
   */
  function watchDeploys(): void {
    unwatchDeploys()
    loadDeployStatus()
      .catch((): void => undefined)
      .finally((): void => {
        pollTimer = setTimeout(watchDeploys, display.value.running ? RUNNING_POLL_MS : IDLE_POLL_MS)
      })
  }

  return { status, display, loadDeployStatus, watchDeploys, unwatchDeploys }
}
