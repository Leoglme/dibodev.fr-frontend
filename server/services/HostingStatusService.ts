import { DateTime } from 'luxon'
import type {
  HostingIncident,
  HostingIncidentImpact,
  HostingInfomaniakSource,
  HostingLwsSource,
  HostingProviderConfig,
  HostingProviderKey,
  HostingProviderStatus,
  HostingSourceReadResult,
  HostingStateChange,
  HostingStatuspageCurrentState,
  HostingStatuspageSource,
  HostingStatusSnapshot,
  HostingStatusSource,
  HostingStatusState,
  StatuspageAffectedComponent,
  StatuspageIncident,
  StatuspageIncidentsPayload,
  StatuspageIncidentUpdate,
  StatuspageMaintenance,
  StatuspageSummary,
} from '~~/server/types/tools/hostingStatus'
import { HOSTING_PROVIDER_KEYS, HOSTING_PROVIDERS } from '~~/server/constants/hostingProviders'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'

const SNAPSHOT_STORAGE_KEY: string = 'hosting-status:snapshot'
const HISTORY_STORAGE_KEY_PREFIX: string = 'hosting-status:history:'
const STALE_AFTER_MS: number = 12 * 60 * 1000
const FETCH_TIMEOUT_MS: number = 15000
const MAX_RECENT_INCIDENTS: number = 8
const MAX_HISTORY_ENTRIES: number = 60
const PARIS_ZONE: string = 'Europe/Paris'
const USER_AGENT: string = 'DibodevHostingStatus/1.0 (+https://dibodev.fr/outils/hebergeur-en-panne)'
const BROWSER_USER_AGENT: string =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'

const TAG_REGEX: RegExp = /<[^>]+>/g
const WHITESPACE_REGEX: RegExp = /\s+/g
const SCRIPT_STYLE_REGEX: RegExp = /<(script|style|noscript)\b[\s\S]*?<\/\1>/gi
const NUMERIC_ENTITY_REGEX: RegExp = /&#(\d+);/g
const TRAILING_SLASH_REGEX: RegExp = /\/$/

const INFOMANIAK_SERVICES_START_REGEX: RegExp = /id="services"/i
const INFOMANIAK_HISTORY_START_REGEX: RegExp = /id="events-history"/i
const INFOMANIAK_EVENT_TITLE_REGEX: RegExp = /class="services__title[^"]*"[^>]*>([\s\S]*?)<\/h4>/gi
const INFOMANIAK_EVENT_LABEL_REGEX: RegExp = /class="label--([a-z_]+)[^"]*"[^>]*>([^<]*)</i
const INFOMANIAK_EVENT_DATE_REGEX: RegExp =
  /(?:<strong>|services__date"[^>]*>)\s*(\d{2}\/\d{2}\/\d{4})(?:\s*(?:à\s*)?(\d{1,2}):(\d{2}))?/i
const INFOMANIAK_EVENT_LINK_REGEX: RegExp = /class="read-more"[^>]*href="\.\/([A-Za-z0-9]+)"/i
const INFOMANIAK_HISTORY_ITEM_REGEX: RegExp =
  /<div class="timeline\b[^"]*"[^>]*>([\s\S]*?)(?=<div class="timeline\b|$)/gi
const INFOMANIAK_HISTORY_DATE_REGEX: RegExp = /timeline__date"[^>]*>\s*(\d{2}\/\d{2}\/\d{4})\s*</i
const INFOMANIAK_HISTORY_TITLE_REGEX: RegExp = /class="event__title[^"]*"[^>]*>([\s\S]*?)<\/div>/i
const INFOMANIAK_HISTORY_LINK_REGEX: RegExp = /class="event read-more"[^>]*href="\.\/([A-Za-z0-9]+)"/i

/** Order of the states, from the calmest to the most serious, used to cap a state with the provider's own indicator. */
const STATE_SEVERITY: Record<HostingStatusState, number> = {
  unknown: 0,
  operational: 1,
  maintenance: 2,
  degraded: 3,
  incident: 4,
}

const LWS_STATE_REGEX: RegExp = /v4-etat\s+v4-etat--(success|info|warning|danger)/i
const LWS_EVENT_REGEX: RegExp = /<article class="v4-evenement[^"]*"[^>]*>([\s\S]*?)<\/article>/gi
const LWS_EVENT_TITLE_REGEX: RegExp = /v4-evenement__titre"[^>]*>([\s\S]*?)<\/h3>/i
const LWS_EVENT_STARTED_REGEX: RegExp = /Commencé le\s*:?\s*<\/strong>\s*(\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2})/i
const LWS_EVENT_RESOLVED_REGEX: RegExp = /Résolu le\s*:?\s*<\/strong>\s*(\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2})/i
const LWS_MAINTENANCE_TITLE_REGEX: RegExp = /maintenance|amélioration|amelioration|correctif/i
const LWS_CLOSED_TITLE_REGEX: RegExp = /\(termin/i

/** Reads the public status of the watched hosting providers, stores it and records every change of state. */
export class HostingStatusService {
  private static memorySnapshot: HostingStatusSnapshot | null = null
  private static refreshPromise: Promise<HostingStatusSnapshot> | null = null

  /**
   * Returns the last snapshot, refreshing it first when it is missing or too old.
   * @returns {Promise<HostingStatusSnapshot>} The status of every provider.
   */
  static async getSnapshot(): Promise<HostingStatusSnapshot> {
    const snapshot: HostingStatusSnapshot | null = await this.readStoredSnapshot()

    if (snapshot && Date.now() - new Date(snapshot.checkedAt).getTime() < STALE_AFTER_MS) {
      return snapshot
    }
    return this.refreshAll()
  }

  /**
   * Returns the status of one provider from the current snapshot.
   * @param {HostingProviderKey} key - The provider.
   * @returns {Promise<HostingProviderStatus>} Its status.
   */
  static async getProvider(key: HostingProviderKey): Promise<HostingProviderStatus> {
    const snapshot: HostingStatusSnapshot = await this.getSnapshot()

    return snapshot.providers[key]
  }

  /**
   * Returns the changes of state recorded for one provider, most recent first.
   * @param {HostingProviderKey} key - The provider.
   * @returns {Promise<HostingStateChange[]>} The changes, at most `MAX_HISTORY_ENTRIES`.
   */
  static async getHistory(key: HostingProviderKey): Promise<HostingStateChange[]> {
    const history: HostingStateChange[] | null = await useStorage('data').getItem<HostingStateChange[]>(
      `${HISTORY_STORAGE_KEY_PREFIX}${key}`,
    )

    return Array.isArray(history) ? history : []
  }

  /**
   * Reads every provider, records the changes of state and stores the new snapshot.
   * @returns {Promise<HostingStatusSnapshot>} The fresh snapshot.
   */
  static refreshAll(): Promise<HostingStatusSnapshot> {
    if (this.refreshPromise) {
      return this.refreshPromise
    }
    this.refreshPromise = this.runRefresh().finally((): void => {
      this.refreshPromise = null
    })
    return this.refreshPromise
  }

  /**
   * Tells whether a string is one of the watched providers.
   * @param {string} value - The value to test.
   * @returns {value is HostingProviderKey} True for a known provider key.
   */
  static isProviderKey(value: string): value is HostingProviderKey {
    return (HOSTING_PROVIDER_KEYS as string[]).includes(value)
  }

  /**
   * One refresh pass: fetches all providers in parallel, compares with the previous snapshot, stores the result.
   * @returns {Promise<HostingStatusSnapshot>} The fresh snapshot.
   */
  private static async runRefresh(): Promise<HostingStatusSnapshot> {
    const previous: HostingStatusSnapshot | null = await this.readStoredSnapshot()
    const checkedAt: string = new Date().toISOString()
    const statuses: HostingProviderStatus[] = await Promise.all(
      HOSTING_PROVIDER_KEYS.map(
        (key: HostingProviderKey): Promise<HostingProviderStatus> =>
          this.readProvider(HOSTING_PROVIDERS[key], previous?.providers[key] ?? null, checkedAt),
      ),
    )
    const providers: Partial<Record<HostingProviderKey, HostingProviderStatus>> = {}

    for (const status of statuses) {
      providers[status.provider] = status
    }
    const snapshot: HostingStatusSnapshot = {
      checkedAt,
      providers: providers as Record<HostingProviderKey, HostingProviderStatus>,
    }

    await useStorage('data').setItem(SNAPSHOT_STORAGE_KEY, snapshot)
    this.memorySnapshot = snapshot
    return snapshot
  }

  /**
   * Reads the stored snapshot, from memory first.
   * @returns {Promise<HostingStatusSnapshot | null>} The snapshot, or null before the first pass.
   */
  private static async readStoredSnapshot(): Promise<HostingStatusSnapshot | null> {
    if (this.memorySnapshot) {
      return this.memorySnapshot
    }
    const stored: HostingStatusSnapshot | null =
      await useStorage('data').getItem<HostingStatusSnapshot>(SNAPSHOT_STORAGE_KEY)

    if (stored && stored.providers && typeof stored.checkedAt === 'string') {
      this.memorySnapshot = stored
      return stored
    }
    return null
  }

  /**
   * Reads one provider with its source, keeps the previous state when the source fails, records a change when there is one.
   * @param {HostingProviderConfig} config - How the provider is watched.
   * @param {HostingProviderStatus | null} previous - Its status at the previous pass.
   * @param {string} checkedAt - Time of this pass.
   * @returns {Promise<HostingProviderStatus>} The new status.
   */
  private static async readProvider(
    config: HostingProviderConfig,
    previous: HostingProviderStatus | null,
    checkedAt: string,
  ): Promise<HostingProviderStatus> {
    let status: HostingProviderStatus

    try {
      const result: HostingSourceReadResult = await this.readSource(config.source)

      status = this.buildStatus(config, checkedAt, result)
    } catch (error: unknown) {
      const message: string = error instanceof Error ? error.message : String(error)

      console.warn('HostingStatusService:readProvider', { provider: config.key, error: message })
      return previous
        ? { ...previous, attemptedAt: checkedAt, error: message, isStale: true }
        : this.buildStatus(
            config,
            checkedAt,
            {
              state: 'unknown',
              activeIncidents: [],
              recentIncidents: [],
              sourceUrl: this.buildSourceUrl(config.source),
            },
            message,
          )
    }
    const previousState: HostingStatusState = previous?.state ?? 'unknown'

    if (previous && previousState === status.state) {
      status.stateSince = previous.stateSince ?? previous.checkedAt
      return status
    }
    status.stateSince = checkedAt
    if (status.state !== 'unknown' || previous) {
      await this.recordStateChange(config.key, status)
    }
    if (previous && previousState !== 'unknown' && status.state === 'incident' && status.isOfficial) {
      await SecurityAlertService.notifyHostingIncident(status, previousState)
    }
    return status
  }

  /**
   * Builds the stored shape of a status from what a source returned.
   * @param {HostingProviderConfig} config - The provider.
   * @param {string} checkedAt - Time of this pass.
   * @param {HostingSourceReadResult} result - What the source returned.
   * @param {string | null} error - Why the source failed, when it did.
   * @returns {HostingProviderStatus} The status.
   */
  private static buildStatus(
    config: HostingProviderConfig,
    checkedAt: string,
    result: HostingSourceReadResult,
    error: string | null = null,
  ): HostingProviderStatus {
    return {
      provider: config.key,
      state: result.state,
      checkedAt,
      attemptedAt: checkedAt,
      sourceKind: config.source.kind,
      sourceUrl: result.sourceUrl,
      statusPageUrl: config.statusPageUrl,
      isOfficial: config.source.kind !== 'none',
      isStale: false,
      activeIncidents: result.activeIncidents,
      recentIncidents: result.recentIncidents,
      stateSince: null,
      error,
    }
  }

  /**
   * Appends a change of state to the provider history.
   * @param {HostingProviderKey} key - The provider.
   * @param {HostingProviderStatus} status - Its new status.
   * @returns {Promise<void>}
   */
  private static async recordStateChange(key: HostingProviderKey, status: HostingProviderStatus): Promise<void> {
    const history: HostingStateChange[] = await this.getHistory(key)
    const change: HostingStateChange = {
      state: status.state,
      at: status.checkedAt,
      incidentTitle: status.activeIncidents[0]?.title ?? null,
    }

    await useStorage('data').setItem(
      `${HISTORY_STORAGE_KEY_PREFIX}${key}`,
      [change, ...history].slice(0, MAX_HISTORY_ENTRIES),
    )
  }

  /**
   * Builds the URL a source is read from.
   * @param {HostingStatusSource} source - The source.
   * @returns {string} Its URL.
   */
  private static buildSourceUrl(source: HostingStatusSource): string {
    if (source.kind === 'statuspage') {
      return `${source.baseUrl.replace(TRAILING_SLASH_REGEX, '')}/api/v2/summary.json`
    }
    if (source.kind === 'none') {
      return ''
    }
    return source.url
  }

  /**
   * Dispatches the read to the adapter of the source; a provider without a readable status page is not read at all.
   * @param {HostingStatusSource} source - The source.
   * @returns {Promise<HostingSourceReadResult>} What the source says.
   */
  private static readSource(source: HostingStatusSource): Promise<HostingSourceReadResult> {
    switch (source.kind) {
      case 'statuspage':
        return this.readStatuspage(source)
      case 'infomaniak':
        return this.readInfomaniak(source)
      case 'lws':
        return this.readLws(source)
      default:
        return Promise.resolve({ state: 'unknown', activeIncidents: [], recentIncidents: [], sourceUrl: '' })
    }
  }

  /**
   * Reads the open incidents and the history of a Statuspage.io site.
   * @param {HostingStatuspageSource} source - The site and its filters.
   * @returns {Promise<HostingSourceReadResult>} The state and the incidents.
   */
  private static async readStatuspage(source: HostingStatuspageSource): Promise<HostingSourceReadResult> {
    const baseUrl: string = source.baseUrl.replace(TRAILING_SLASH_REGEX, '')
    const summaryUrl: string = `${baseUrl}/api/v2/summary.json`
    const incidentsUrl: string = `${baseUrl}/api/v2/incidents.json`
    const summary: StatuspageSummary = JSON.parse(await this.fetchText(summaryUrl, USER_AGENT)) as StatuspageSummary
    const { state, activeIncidents }: HostingStatuspageCurrentState = this.readStatuspageState(summary, source)
    let recentIncidents: HostingIncident[] = []

    try {
      const payload: StatuspageIncidentsPayload = JSON.parse(
        await this.fetchText(incidentsUrl, USER_AGENT),
      ) as StatuspageIncidentsPayload

      recentIncidents = (payload.incidents ?? [])
        .filter((incident: StatuspageIncident): boolean => this.keepsStatuspageIncident(incident, source))
        .slice(0, MAX_RECENT_INCIDENTS)
        .map((incident: StatuspageIncident): HostingIncident => this.mapStatuspageIncident(incident))
    } catch {
      recentIncidents = activeIncidents
    }
    return { state, activeIncidents, recentIncidents, sourceUrl: summaryUrl }
  }

  /**
   * Turns the open incidents and running maintenances of a summary into a state, never above the provider's own indicator.
   * @param {StatuspageSummary} summary - The summary answer.
   * @param {HostingStatuspageSource} source - The filters of the provider.
   * @returns {HostingStatuspageCurrentState} The state and the open incidents.
   */
  private static readStatuspageState(
    summary: StatuspageSummary,
    source: HostingStatuspageSource,
  ): HostingStatuspageCurrentState {
    const openIncidents: HostingIncident[] = (summary.incidents ?? [])
      .filter(
        (incident: StatuspageIncident): boolean =>
          !this.isClosedStatuspageStatus(incident.status) && this.keepsStatuspageIncident(incident, source),
      )
      .map((incident: StatuspageIncident): HostingIncident => this.mapStatuspageIncident(incident))
    const excludeMaintenance: RegExp | null = this.buildPattern(source.excludeMaintenancePattern)
    const include: RegExp | null = this.buildPattern(source.includePattern)
    const runningMaintenances: HostingIncident[] = (summary.scheduled_maintenances ?? [])
      .filter(
        (maintenance: StatuspageMaintenance): boolean =>
          (maintenance.status === 'in_progress' || maintenance.status === 'verifying') &&
          !(excludeMaintenance && excludeMaintenance.test(maintenance.name ?? '')) &&
          (!include || include.test(maintenance.name ?? '')),
      )
      .map((maintenance: StatuspageMaintenance): HostingIncident => this.mapStatuspageMaintenance(maintenance))
    let state: HostingStatusState = 'operational'

    if (openIncidents.length > 0) {
      state = openIncidents.some(
        (incident: HostingIncident): boolean => incident.impact === 'major' || incident.impact === 'critical',
      )
        ? 'incident'
        : 'degraded'
    } else if (runningMaintenances.length > 0) {
      state = 'maintenance'
    }
    const ceiling: HostingStatusState | null = this.readStatuspageCeiling(summary.status?.indicator)

    if (ceiling && STATE_SEVERITY[state] > STATE_SEVERITY[ceiling]) {
      state = ceiling
    }
    if (state === 'operational' || state === 'maintenance') {
      return { state, activeIncidents: runningMaintenances }
    }
    return { state, activeIncidents: [...openIncidents, ...runningMaintenances] }
  }

  /**
   * Reads the indicator a provider sets on its whole page as the highest state it allows: our filters only narrow it.
   * @param {string | undefined} indicator - The Statuspage indicator.
   * @returns {HostingStatusState | null} The highest state, or null when the indicator is missing or unknown.
   */
  private static readStatuspageCeiling(indicator: string | undefined): HostingStatusState | null {
    if (indicator === 'none') {
      return 'operational'
    }
    if (indicator === 'maintenance') {
      return 'maintenance'
    }
    if (indicator === 'minor') {
      return 'degraded'
    }
    if (indicator === 'major' || indicator === 'critical') {
      return 'incident'
    }
    return null
  }

  /**
   * Tells whether a Statuspage incident status means it no longer disrupts anything: resolved, or fixed and watched.
   * @param {string | undefined} status - The incident status.
   * @returns {boolean} True for `resolved`, `postmortem` and `monitoring`.
   */
  private static isClosedStatuspageStatus(status: string | undefined): boolean {
    return status === 'resolved' || status === 'postmortem' || status === 'monitoring'
  }

  /**
   * Applies the include, exclude and impact filters of a provider to one incident.
   * @param {StatuspageIncident} incident - The incident.
   * @param {HostingStatuspageSource} source - The filters.
   * @returns {boolean} True when the incident is about web hosting and is not noise.
   */
  private static keepsStatuspageIncident(incident: StatuspageIncident, source: HostingStatuspageSource): boolean {
    const name: string = incident.name ?? ''
    const include: RegExp | null = this.buildPattern(source.includePattern)
    const exclude: RegExp | null = this.buildPattern(source.excludePattern)

    if (source.ignoreImpactNone && incident.impact === 'none') {
      return false
    }
    if (exclude && exclude.test(name)) {
      return false
    }
    if (!include) {
      return true
    }
    if (include.test(name)) {
      return true
    }
    return (incident.incident_updates ?? []).some((update: StatuspageIncidentUpdate): boolean =>
      (update.affected_components ?? []).some((component: StatuspageAffectedComponent): boolean =>
        include.test(component.name ?? ''),
      ),
    )
  }

  /**
   * Compiles a case-insensitive pattern, or null for an empty one.
   * @param {string} pattern - The regular expression source.
   * @returns {RegExp | null} The pattern.
   */
  private static buildPattern(pattern: string): RegExp | null {
    return pattern ? new RegExp(pattern, 'i') : null
  }

  /**
   * Maps a Statuspage incident to the shared shape.
   * @param {StatuspageIncident} incident - The incident.
   * @returns {HostingIncident} The incident.
   */
  private static mapStatuspageIncident(incident: StatuspageIncident): HostingIncident {
    const startedAt: string = this.toIsoDate(incident.started_at ?? incident.created_at) ?? new Date(0).toISOString()
    const resolvedAt: string | null = this.toIsoDate(incident.resolved_at ?? null)

    return {
      id: incident.id ?? `${startedAt}-${incident.name ?? ''}`,
      title: this.decodeEntities((incident.name ?? '').trim()) || 'Incident',
      startedAt,
      resolvedAt,
      url: incident.shortlink ?? null,
      impact: this.mapImpact(incident.impact),
      isResolved: this.isClosedStatuspageStatus(incident.status) || resolvedAt !== null,
    }
  }

  /**
   * Maps a running Statuspage maintenance to the shared shape.
   * @param {StatuspageMaintenance} maintenance - The maintenance.
   * @returns {HostingIncident} The maintenance as an incident of impact `maintenance`.
   */
  private static mapStatuspageMaintenance(maintenance: StatuspageMaintenance): HostingIncident {
    const startedAt: string = this.toIsoDate(maintenance.scheduled_for) ?? new Date().toISOString()

    return {
      id: maintenance.id ?? `${startedAt}-${maintenance.name ?? ''}`,
      title: this.decodeEntities((maintenance.name ?? '').trim()) || 'Maintenance',
      startedAt,
      resolvedAt: null,
      url: maintenance.shortlink ?? null,
      impact: 'maintenance',
      isResolved: false,
    }
  }

  /**
   * Reads the status page of Infomaniak: the open events already started, then the sixty-day history.
   * @param {HostingInfomaniakSource} source - The page.
   * @returns {Promise<HostingSourceReadResult>} The state and the incidents.
   */
  private static async readInfomaniak(source: HostingInfomaniakSource): Promise<HostingSourceReadResult> {
    const html: string = await this.fetchText(source.url, BROWSER_USER_AGENT)
    const servicesStart: number = html.search(INFOMANIAK_SERVICES_START_REGEX)
    const historyStart: number = html.search(INFOMANIAK_HISTORY_START_REGEX)

    if (servicesStart < 0 || historyStart < 0) {
      throw new Error('Infomaniak status page without the expected blocks')
    }
    const openBlock: string = html.slice(servicesStart, historyStart)
    const historyBlock: string = html.slice(historyStart)
    const activeIncidents: HostingIncident[] = []
    const titleMatches: RegExpMatchArray[] = [...openBlock.matchAll(INFOMANIAK_EVENT_TITLE_REGEX)]

    titleMatches.forEach((match: RegExpMatchArray, index: number): void => {
      const eventStart: number = match.index ?? 0
      const eventEnd: number = titleMatches[index + 1]?.index ?? openBlock.length
      const eventBlock: string = openBlock.slice(eventStart, eventEnd)
      const label: string = this.readInfomaniakLabel(eventBlock, 'unknown')
      const dateMatch: RegExpMatchArray | null = eventBlock.match(INFOMANIAK_EVENT_DATE_REGEX)
      const eventId: string | undefined = eventBlock.match(INFOMANIAK_EVENT_LINK_REGEX)?.[1]
      const title: string = this.stripTags(match[1] ?? '')
      const startedAt: string | null = dateMatch
        ? this.parseParisDate(`${dateMatch[1]} ${dateMatch[2] ?? '00'}:${dateMatch[3] ?? '00'}`, 'dd/MM/yyyy H:mm')
        : null

      if (startedAt && new Date(startedAt).getTime() > Date.now()) {
        return
      }
      activeIncidents.push({
        id: eventId ?? `${title}-${dateMatch?.[1] ?? ''}`,
        title,
        startedAt: startedAt ?? new Date().toISOString(),
        resolvedAt: null,
        url: eventId ? `https://infomaniakstatus.com/fr/${eventId}/` : source.url,
        impact: this.mapInfomaniakLabelToImpact(label),
        isResolved: label === 'terminated',
      })
    })
    const recentIncidents: HostingIncident[] = [...historyBlock.matchAll(INFOMANIAK_HISTORY_ITEM_REGEX)]
      .slice(0, MAX_RECENT_INCIDENTS)
      .flatMap((match: RegExpMatchArray): HostingIncident[] => {
        const block: string = match[1] ?? ''
        const date: string | undefined = block.match(INFOMANIAK_HISTORY_DATE_REGEX)?.[1]
        const title: string = this.stripTags(block.match(INFOMANIAK_HISTORY_TITLE_REGEX)?.[1] ?? '')
        const eventId: string | undefined = block.match(INFOMANIAK_HISTORY_LINK_REGEX)?.[1]
        const label: string = this.readInfomaniakLabel(block, 'terminated')

        if (!title || !date) {
          return []
        }
        return [
          {
            id: eventId ?? `${title}-${date}`,
            title,
            startedAt: this.parseParisDate(date, 'dd/MM/yyyy') ?? new Date().toISOString(),
            resolvedAt: null,
            url: eventId ? `https://infomaniakstatus.com/fr/${eventId}/` : source.url,
            impact: this.mapInfomaniakLabelToImpact(label),
            isResolved: label === 'terminated',
          },
        ]
      })
    const openOutages: HostingIncident[] = activeIncidents.filter(
      (incident: HostingIncident): boolean => !incident.isResolved && incident.impact !== 'maintenance',
    )
    let state: HostingStatusState = 'operational'

    if (openOutages.some((incident: HostingIncident): boolean => incident.impact === 'major')) {
      state = 'incident'
    } else if (openOutages.length > 0) {
      state = 'degraded'
    } else if (activeIncidents.some((incident: HostingIncident): boolean => !incident.isResolved)) {
      state = 'maintenance'
    }
    return {
      state,
      activeIncidents: activeIncidents.filter((incident: HostingIncident): boolean => !incident.isResolved),
      recentIncidents,
      sourceUrl: source.url,
    }
  }

  /**
   * Reads the label of an Infomaniak event as one word: from its class (`label--scheduled_emergency_maintenance`), else its text.
   * @param {string} block - The HTML of the event.
   * @param {string} fallback - The label used when the event has none.
   * @returns {string} `maintenance`, `incident`, `perturbation`, `terminated` or the fallback.
   */
  private static readInfomaniakLabel(block: string, fallback: string): string {
    const match: RegExpMatchArray | null = block.match(INFOMANIAK_EVENT_LABEL_REGEX)

    if (!match) {
      return fallback
    }
    const words: string = `${match[1] ?? ''} ${match[2] ?? ''}`.toLowerCase()

    if (words.includes('terminat') || words.includes('resolved') || words.includes('résolu')) {
      return 'terminated'
    }
    if (words.includes('maintenance')) {
      return 'maintenance'
    }
    if (words.includes('perturbation') || words.includes('disruption') || words.includes('degraded')) {
      return 'perturbation'
    }
    if (words.includes('incident') || words.includes('critical') || words.includes('outage')) {
      return 'incident'
    }
    return fallback
  }

  /**
   * Maps an Infomaniak label to an impact: `incident` stops a service, `perturbation` slows it.
   * @param {string} label - The label read by `readInfomaniakLabel`.
   * @returns {HostingIncidentImpact} The impact.
   */
  private static mapInfomaniakLabelToImpact(label: string): HostingIncidentImpact {
    if (label === 'maintenance') {
      return 'maintenance'
    }
    if (label === 'incident') {
      return 'major'
    }
    if (label === 'perturbation') {
      return 'minor'
    }
    return 'unknown'
  }

  /**
   * Reads the status page of LWS: one global state and the events of the last 72 hours.
   * @param {HostingLwsSource} source - The page.
   * @returns {Promise<HostingSourceReadResult>} The state and the incidents.
   */
  private static async readLws(source: HostingLwsSource): Promise<HostingSourceReadResult> {
    const html: string = await this.fetchText(source.url, BROWSER_USER_AGENT)
    const stateMatch: RegExpMatchArray | null = html.match(LWS_STATE_REGEX)

    if (!stateMatch) {
      throw new Error('LWS status page without the expected state block')
    }
    const states: Record<string, HostingStatusState> = {
      success: 'operational',
      info: 'maintenance',
      warning: 'degraded',
      danger: 'incident',
    }
    const state: HostingStatusState = states[(stateMatch[1] ?? '').toLowerCase()] ?? 'unknown'
    const incidents: HostingIncident[] = [...html.matchAll(LWS_EVENT_REGEX)]
      .slice(0, MAX_RECENT_INCIDENTS)
      .flatMap((match: RegExpMatchArray): HostingIncident[] => {
        const block: string = match[1] ?? ''
        const title: string = this.stripTags(block.match(LWS_EVENT_TITLE_REGEX)?.[1] ?? '')
        const startedRaw: string | undefined = block.match(LWS_EVENT_STARTED_REGEX)?.[1]
        const resolvedRaw: string | undefined = block.match(LWS_EVENT_RESOLVED_REGEX)?.[1]

        if (!title) {
          return []
        }
        const resolvedAt: string | null = resolvedRaw ? this.parseParisDate(resolvedRaw, 'dd-MM-yyyy HH:mm:ss') : null
        const isMaintenance: boolean = LWS_MAINTENANCE_TITLE_REGEX.test(title)

        return [
          {
            id: `${title}-${startedRaw ?? ''}`,
            title,
            startedAt:
              (startedRaw ? this.parseParisDate(startedRaw, 'dd-MM-yyyy HH:mm:ss') : null) ?? new Date().toISOString(),
            resolvedAt,
            url: source.url,
            impact: isMaintenance ? 'maintenance' : 'unknown',
            isResolved: resolvedAt !== null || LWS_CLOSED_TITLE_REGEX.test(title),
          },
        ]
      })

    return {
      state,
      activeIncidents: incidents.filter((incident: HostingIncident): boolean => !incident.isResolved),
      recentIncidents: incidents,
      sourceUrl: source.url,
    }
  }

  /**
   * Removes scripts, styles and tags from an HTML fragment and collapses the whitespace.
   * @param {string} html - The fragment.
   * @returns {string} The visible text.
   */
  private static stripTags(html: string): string {
    return this.decodeEntities(
      html.replace(SCRIPT_STYLE_REGEX, ' ').replace(TAG_REGEX, ' ').replace(WHITESPACE_REGEX, ' '),
    ).trim()
  }

  /**
   * Decodes the few HTML entities the status pages use in titles.
   * @param {string} text - The text.
   * @returns {string} The decoded text.
   */
  private static decodeEntities(text: string): string {
    return text
      .replaceAll('&amp;', '&')
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&quot;', '"')
      .replaceAll('&#39;', "'")
      .replaceAll('&apos;', "'")
      .replaceAll('&nbsp;', ' ')
      .replace(NUMERIC_ENTITY_REGEX, (_match: string, code: string): string => String.fromCodePoint(Number(code)))
  }

  /**
   * Maps a Statuspage impact to the shared impact.
   * @param {string | undefined} impact - The Statuspage impact.
   * @returns {HostingIncidentImpact} The impact.
   */
  private static mapImpact(impact: string | undefined): HostingIncidentImpact {
    if (impact === 'none' || impact === 'minor' || impact === 'major' || impact === 'critical') {
      return impact
    }
    if (impact === 'maintenance') {
      return 'maintenance'
    }
    return 'unknown'
  }

  /**
   * Converts a date written in Paris time without a zone (Infomaniak, LWS) to ISO 8601 UTC.
   * @param {string} value - The raw date.
   * @param {string} format - Its Luxon format.
   * @returns {string | null} The ISO date, or null when it cannot be read.
   */
  private static parseParisDate(value: string, format: string): string | null {
    const parsed: DateTime = DateTime.fromFormat(value.trim(), format, { zone: PARIS_ZONE })

    return parsed.isValid ? (parsed.toUTC().toISO() ?? null) : null
  }

  /**
   * Converts a date from a status page API to ISO 8601, or null when it cannot be read.
   * @param {string | null | undefined} value - The raw date.
   * @returns {string | null} The ISO date.
   */
  private static toIsoDate(value: string | null | undefined): string | null {
    if (!value) {
      return null
    }
    const time: number = new Date(value).getTime()

    return Number.isNaN(time) ? null : new Date(time).toISOString()
  }

  /**
   * Fetches a text document with a timeout and the given user agent.
   * @param {string} url - The URL.
   * @param {string} userAgent - The user agent sent.
   * @returns {Promise<string>} The body.
   * @throws {Error} When the answer is not a success.
   */
  private static async fetchText(url: string, userAgent: string): Promise<string> {
    const controller: AbortController = new AbortController()
    const timer: ReturnType<typeof setTimeout> = setTimeout((): void => controller.abort(), FETCH_TIMEOUT_MS)

    try {
      const response: Response = await fetch(url, {
        headers: {
          'user-agent': userAgent,
          accept: 'application/json, text/html, */*',
          'accept-language': 'fr-FR,fr;q=0.9,en;q=0.8',
        },
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} on ${url}`)
      }
      return await response.text()
    } finally {
      clearTimeout(timer)
    }
  }
}
