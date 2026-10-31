import { randomBytes, randomUUID } from 'node:crypto'
import { createError } from 'h3'
import type { MailLocale } from '~~/server/types/mail/contact'
import type { HostingProviderKey, HostingProviderStatus, HostingStatusState } from '~~/server/types/tools/hostingStatus'
import type {
  SecurityAlertBroadcastResult,
  SecurityAlertBroadcastTexts,
  SecurityAlertDashboardSummary,
  SecurityAlertRateLimitWindow,
  SecurityAlertSubscribeInput,
  SecurityAlertSubscribeOutcome,
  SecurityAlertSubscribeResult,
  SecurityAlertSubscription,
  SecurityAlertSubscriptionOverview,
  SecurityAlertTopic,
  SecurityAlertTopicSummary,
} from '~~/server/types/tools/securityAlerts'
import { HOSTING_PROVIDER_KEYS, HOSTING_PROVIDERS } from '~~/server/constants/hostingProviders'
import {
  sendHostingIncidentMail,
  sendSecurityAlertConfirmationMail,
  sendSecurityBroadcastMail,
} from '~~/server/services/mail/sendSecurityAlertMails'

const SUBSCRIPTIONS_STORAGE_KEY: string = 'security-alerts:subscriptions'
const LAST_HOSTING_NOTIFICATION_KEY_PREFIX: string = 'security-alerts:last-hosting-notification:'
const CONFIRMATION_VALID_MS: number = 7 * 24 * 60 * 60 * 1000
/** Unconfirmed and unsubscribed addresses are erased after this delay, as the privacy page promises. */
const RETENTION_AFTER_END_MS: number = 30 * 24 * 60 * 60 * 1000
const HOSTING_NOTIFICATION_COOLDOWN_MS: number = 6 * 60 * 60 * 1000
const RATE_LIMIT_WINDOW_MS: number = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS: number = 5
const RATE_ENTRIES_MAX: number = 2000
const EMAIL_MAX_LENGTH: number = 254
const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SOURCE_REGEX: RegExp = /^[a-z0-9_-]{1,80}$/
const TOKEN_BYTE_LENGTH: number = 24

const rateByAddress: Map<string, SecurityAlertRateLimitWindow> = new Map()
let writeChain: Promise<void> = Promise.resolve()

/** Subscriptions to the vulnerability and hosting outage alerts: confirmation link, unsubscribe link and sending. */
export class SecurityAlertService {
  /**
   * Records a request and sends the confirmation mail; an already confirmed address is told so without a new mail.
   * @param {SecurityAlertSubscribeInput} input - The validated request.
   * @returns {Promise<SecurityAlertSubscribeResult>} Whether a confirmation was sent.
   */
  static async subscribe(input: SecurityAlertSubscribeInput): Promise<SecurityAlertSubscribeResult> {
    const now: string = new Date().toISOString()
    let subscription: SecurityAlertSubscription | null = null
    let outcome: SecurityAlertSubscribeOutcome = 'confirmationSent'

    await this.updateSubscriptions(async (subscriptions: SecurityAlertSubscription[]): Promise<void> => {
      const existing: SecurityAlertSubscription | undefined = subscriptions.find(
        (candidate: SecurityAlertSubscription): boolean =>
          candidate.email === input.email && candidate.topic === input.topic && candidate.unsubscribedAt === null,
      )

      if (existing && existing.confirmedAt) {
        outcome = 'alreadyConfirmed'
        return
      }
      if (existing) {
        existing.site = input.site ?? existing.site
        existing.locale = input.locale
        existing.token = this.generateToken()
        existing.createdAt = now
        subscription = existing
        return
      }
      subscription = {
        id: randomUUID(),
        email: input.email,
        site: input.site,
        topic: input.topic,
        locale: input.locale,
        source: input.source,
        token: this.generateToken(),
        createdAt: now,
        confirmedAt: null,
        unsubscribedAt: null,
        lastNotifiedAt: null,
      }
      subscriptions.push(subscription)
    })
    if (subscription) {
      await sendSecurityAlertConfirmationMail(
        subscription,
        this.findHostingProviderName((subscription as SecurityAlertSubscription).topic),
      )
    }
    return { outcome }
  }

  /**
   * Confirms the subscription behind a token, when the link is still valid.
   * @param {string} token - The token of the confirmation link.
   * @returns {Promise<SecurityAlertSubscription | null>} The subscription, or null for an unknown or expired token.
   */
  static async confirm(token: string): Promise<SecurityAlertSubscription | null> {
    let confirmed: SecurityAlertSubscription | null = null

    await this.updateSubscriptions(async (subscriptions: SecurityAlertSubscription[]): Promise<void> => {
      const subscription: SecurityAlertSubscription | undefined = subscriptions.find(
        (candidate: SecurityAlertSubscription): boolean => candidate.token === token,
      )

      if (!subscription || subscription.unsubscribedAt) {
        return
      }
      if (
        !subscription.confirmedAt &&
        Date.now() - new Date(subscription.createdAt).getTime() > CONFIRMATION_VALID_MS
      ) {
        return
      }
      subscription.confirmedAt = subscription.confirmedAt ?? new Date().toISOString()
      confirmed = subscription
    })
    return confirmed
  }

  /**
   * Ends the subscription behind a token.
   * @param {string} token - The token of the unsubscribe link.
   * @returns {Promise<SecurityAlertSubscription | null>} The subscription, or null for an unknown token.
   */
  static async unsubscribe(token: string): Promise<SecurityAlertSubscription | null> {
    let ended: SecurityAlertSubscription | null = null

    await this.updateSubscriptions(async (subscriptions: SecurityAlertSubscription[]): Promise<void> => {
      const subscription: SecurityAlertSubscription | undefined = subscriptions.find(
        (candidate: SecurityAlertSubscription): boolean => candidate.token === token,
      )

      if (!subscription) {
        return
      }
      subscription.unsubscribedAt = subscription.unsubscribedAt ?? new Date().toISOString()
      ended = subscription
    })
    return ended
  }

  /**
   * Lists the confirmed, still active subscriptions of a topic.
   * @param {SecurityAlertTopic} topic - The topic.
   * @returns {Promise<SecurityAlertSubscription[]>} The recipients.
   */
  static async listConfirmed(topic: SecurityAlertTopic): Promise<SecurityAlertSubscription[]> {
    const subscriptions: SecurityAlertSubscription[] = await this.readSubscriptions()

    return subscriptions.filter(
      (subscription: SecurityAlertSubscription): boolean =>
        subscription.topic === topic && subscription.confirmedAt !== null && subscription.unsubscribedAt === null,
    )
  }

  /**
   * Counts the subscriptions per topic for the dashboard, with the full list.
   * @returns {Promise<SecurityAlertDashboardSummary>} The summary.
   */
  static async summary(): Promise<SecurityAlertDashboardSummary> {
    const subscriptions: SecurityAlertSubscription[] = await this.readSubscriptions()
    const byTopic: Map<SecurityAlertTopic, SecurityAlertTopicSummary> = new Map()

    for (const subscription of subscriptions) {
      const entry: SecurityAlertTopicSummary = byTopic.get(subscription.topic) ?? {
        topic: subscription.topic,
        confirmed: 0,
        pending: 0,
        unsubscribed: 0,
      }

      if (subscription.unsubscribedAt) {
        entry.unsubscribed += 1
      } else if (subscription.confirmedAt) {
        entry.confirmed += 1
      } else {
        entry.pending += 1
      }
      byTopic.set(subscription.topic, entry)
    }
    return {
      total: subscriptions.length,
      topics: [...byTopic.values()],
      subscriptions: subscriptions.map(
        (subscription: SecurityAlertSubscription): SecurityAlertSubscriptionOverview => ({
          id: subscription.id,
          email: subscription.email,
          site: subscription.site,
          topic: subscription.topic,
          locale: subscription.locale,
          source: subscription.source,
          createdAt: subscription.createdAt,
          confirmedAt: subscription.confirmedAt,
          unsubscribedAt: subscription.unsubscribedAt,
          lastNotifiedAt: subscription.lastNotifiedAt,
        }),
      ),
    }
  }

  /**
   * Sends one alert to every confirmed subscriber of a topic, in their language (French when missing).
   * @param {SecurityAlertTopic} topic - The topic.
   * @param {Partial<Record<MailLocale, SecurityAlertBroadcastTexts>>} texts - The texts per language.
   * @param {boolean} dryRun - When true, counts the recipients without sending.
   * @returns {Promise<SecurityAlertBroadcastResult>} How many mails went out.
   */
  static async broadcast(
    topic: SecurityAlertTopic,
    texts: Partial<Record<MailLocale, SecurityAlertBroadcastTexts>>,
    dryRun: boolean,
  ): Promise<SecurityAlertBroadcastResult> {
    const recipients: SecurityAlertSubscription[] = await this.listConfirmed(topic)
    const fallback: SecurityAlertBroadcastTexts | undefined = texts.fr
    let sent: number = 0
    let failed: number = 0

    if (!fallback) {
      throw createError({ statusCode: 400, statusMessage: 'French texts are required.' })
    }
    if (dryRun) {
      return { topic, recipients: recipients.length, sent: 0, failed: 0, dryRun }
    }
    for (const subscription of recipients) {
      try {
        await sendSecurityBroadcastMail(subscription, texts[subscription.locale] ?? fallback)
        sent += 1
        await this.markNotified(subscription.id)
      } catch (error: unknown) {
        failed += 1
        console.error('SecurityAlertService:broadcast', { id: subscription.id, error })
      }
    }
    return { topic, recipients: recipients.length, sent, failed, dryRun }
  }

  /**
   * Warns the subscribers of a provider whose official status page has just turned to incident.
   * @param {HostingProviderStatus} status - The new status of the provider.
   * @param {HostingStatusState} previousState - Its state at the previous pass.
   * @returns {Promise<void>}
   */
  static async notifyHostingIncident(status: HostingProviderStatus, previousState: HostingStatusState): Promise<void> {
    const sent: number = await this.sendHostingIncidentMails(status)

    console.info('SecurityAlertService:notifyHostingIncident', {
      provider: status.provider,
      from: previousState,
      to: status.state,
      incident: status.activeIncidents[0]?.title ?? null,
      sent,
    })
  }

  /**
   * Lowercases and trims an address, and tells whether it looks like an e-mail.
   * @param {unknown} value - The raw value.
   * @returns {string | null} The address, or null when it is not usable.
   */
  static normalizeEmail(value: unknown): string | null {
    const email: string = String(value ?? '')
      .trim()
      .toLowerCase()

    return email.length <= EMAIL_MAX_LENGTH && EMAIL_REGEX.test(email) ? email : null
  }

  /**
   * Reads a topic, which is `security` or `hosting:<provider>` for a watched provider.
   * @param {unknown} value - The raw value.
   * @returns {SecurityAlertTopic | null} The topic, or null.
   */
  static parseTopic(value: unknown): SecurityAlertTopic | null {
    const topic: string = String(value ?? '').trim()

    if (topic === 'security') {
      return 'security'
    }
    if (topic.startsWith('hosting:')) {
      const provider: string = topic.slice('hosting:'.length)

      if ((HOSTING_PROVIDER_KEYS as string[]).includes(provider)) {
        return `hosting:${provider as HostingProviderKey}`
      }
    }
    return null
  }

  /**
   * Keeps a tracking source when it is a plain identifier.
   * @param {unknown} value - The raw value.
   * @returns {string} The source, or `unknown`.
   */
  static parseSource(value: unknown): string {
    const source: string = String(value ?? '').trim()

    return SOURCE_REGEX.test(source) ? source : 'unknown'
  }

  /**
   * Refuses an address that has already sent its share of requests in the current window.
   * @param {string} address - The visitor's IP address, or an empty string when unknown.
   * @returns {void}
   * @throws {H3Error} 429 when the window is exhausted.
   */
  static assertRateLimit(address: string): void {
    const key: string = address || 'unknown'
    const now: number = Date.now()
    const entry: SecurityAlertRateLimitWindow | undefined = rateByAddress.get(key)

    if (!entry || entry.resetAt <= now) {
      rateByAddress.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
      if (rateByAddress.size > RATE_ENTRIES_MAX) {
        for (const [candidate, candidateEntry] of rateByAddress) {
          if (candidateEntry.resetAt <= now) {
            rateByAddress.delete(candidate)
          }
        }
      }
      return
    }
    entry.count += 1
    if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
      throw createError({ statusCode: 429, statusMessage: 'Too many requests from this address. Try again later.' })
    }
  }

  /**
   * Finds the display name of the provider of a hosting topic, or null for the security topic.
   * @param {SecurityAlertTopic} topic - The topic.
   * @returns {string | null} The provider name.
   */
  static findHostingProviderName(topic: SecurityAlertTopic): string | null {
    if (!topic.startsWith('hosting:')) {
      return null
    }
    const provider: HostingProviderKey = topic.slice('hosting:'.length) as HostingProviderKey

    return HOSTING_PROVIDERS[provider]?.name ?? null
  }

  /**
   * Sends the incident mail to the confirmed subscribers of a provider, unless one went out less than six hours ago.
   * @param {HostingProviderStatus} status - The new status of the provider.
   * @returns {Promise<number>} How many mails went out.
   */
  private static async sendHostingIncidentMails(status: HostingProviderStatus): Promise<number> {
    const topic: SecurityAlertTopic = `hosting:${status.provider}`
    const storage: ReturnType<typeof useStorage> = useStorage('data')
    const lastSentAt: string | null = await storage.getItem<string>(
      `${LAST_HOSTING_NOTIFICATION_KEY_PREFIX}${status.provider}`,
    )

    if (lastSentAt && Date.now() - new Date(lastSentAt).getTime() < HOSTING_NOTIFICATION_COOLDOWN_MS) {
      return 0
    }
    const recipients: SecurityAlertSubscription[] = await this.listConfirmed(topic)
    const providerName: string = HOSTING_PROVIDERS[status.provider].name
    let sent: number = 0

    for (const subscription of recipients) {
      try {
        await sendHostingIncidentMail(subscription, status, providerName)
        sent += 1
        await this.markNotified(subscription.id)
      } catch (error: unknown) {
        console.error('SecurityAlertService:sendHostingIncidentMails', { id: subscription.id, error })
      }
    }
    if (recipients.length > 0) {
      await storage.setItem(`${LAST_HOSTING_NOTIFICATION_KEY_PREFIX}${status.provider}`, new Date().toISOString())
    }
    return sent
  }

  /**
   * Records the time of the last alert sent to a subscription.
   * @param {string} id - The subscription.
   * @returns {Promise<void>}
   */
  private static async markNotified(id: string): Promise<void> {
    await this.updateSubscriptions(async (subscriptions: SecurityAlertSubscription[]): Promise<void> => {
      const subscription: SecurityAlertSubscription | undefined = subscriptions.find(
        (candidate: SecurityAlertSubscription): boolean => candidate.id === id,
      )

      if (subscription) {
        subscription.lastNotifiedAt = new Date().toISOString()
      }
    })
  }

  /**
   * Drops the addresses never confirmed and the ones unsubscribed for more than thirty days, as the privacy page says.
   * @param {SecurityAlertSubscription[]} subscriptions - The subscriptions.
   * @returns {SecurityAlertSubscription[]} The subscriptions kept.
   */
  private static purgeExpired(subscriptions: SecurityAlertSubscription[]): SecurityAlertSubscription[] {
    const now: number = Date.now()

    return subscriptions.filter((subscription: SecurityAlertSubscription): boolean => {
      if (subscription.unsubscribedAt) {
        return now - new Date(subscription.unsubscribedAt).getTime() < RETENTION_AFTER_END_MS
      }
      if (!subscription.confirmedAt) {
        return now - new Date(subscription.createdAt).getTime() < RETENTION_AFTER_END_MS
      }
      return true
    })
  }

  /**
   * Erases the addresses past their retention delay even when nobody subscribes, as the privacy page promises.
   * @returns {Promise<void>}
   */
  static eraseExpiredSubscriptions(): Promise<void> {
    return this.updateSubscriptions(async (): Promise<void> => undefined)
  }

  /**
   * Generates the secret of a confirmation and unsubscribe link.
   * @returns {string} A URL-safe random string.
   */
  private static generateToken(): string {
    return randomBytes(TOKEN_BYTE_LENGTH).toString('base64url')
  }

  /**
   * Reads every subscription from the storage.
   * @returns {Promise<SecurityAlertSubscription[]>} The subscriptions.
   */
  private static async readSubscriptions(): Promise<SecurityAlertSubscription[]> {
    const stored: SecurityAlertSubscription[] | null =
      await useStorage('data').getItem<SecurityAlertSubscription[]>(SUBSCRIPTIONS_STORAGE_KEY)

    return Array.isArray(stored) ? stored : []
  }

  /**
   * Applies a change to the subscriptions and stores them, one change at a time.
   * @param {(subscriptions: SecurityAlertSubscription[]) => Promise<void>} change - The change to apply in place.
   * @returns {Promise<void>}
   */
  private static updateSubscriptions(
    change: (subscriptions: SecurityAlertSubscription[]) => Promise<void>,
  ): Promise<void> {
    const run: Promise<void> = writeChain.then(async (): Promise<void> => {
      const subscriptions: SecurityAlertSubscription[] = await this.readSubscriptions()

      await change(subscriptions)
      await useStorage('data').setItem(SUBSCRIPTIONS_STORAGE_KEY, this.purgeExpired(subscriptions))
    })

    writeChain = run.catch((): void => undefined)
    return run
  }
}
