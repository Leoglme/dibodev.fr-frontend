import type {
  EmailCapture,
  EmailCaptureAlertState,
  EmailCaptureAlertTotals,
  EmailCaptureDigestEntry,
  EmailCaptureDigestRunResult,
  EmailCaptureDigestState,
  EmailCaptureInput,
} from '~~/server/types/mail/emailCaptureDigest'
import type { SecurityAlertSubscriptionOverview } from '~~/server/types/tools/securityAlerts'
import { randomUUID } from 'node:crypto'
import { DateTime } from 'luxon'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { sendEmailCaptureDigestMail } from '~~/server/services/mail/sendEmailCaptureDigestMail'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'

const CAPTURES_STORAGE_KEY: string = 'email-captures:entries'
const DIGEST_STATE_STORAGE_KEY: string = 'email-captures:digest-state'
/** Captures are erased from the journal after this delay, as the privacy page says. */
const CAPTURE_RETENTION_MS: number = 7 * 24 * 60 * 60 * 1000
const CAPTURES_MAX: number = 500
const CAPTURE_TEXT_MAX_LENGTH: number = 200
const DIGEST_HOUR_IN_PARIS: number = 8
const FIRST_DIGEST_PERIOD_HOURS: number = 24
const DIGEST_ENTRIES_MAX: number = 50

let writeChain: Promise<void> = Promise.resolve()

/**
 * Keeps the forms filled on the site for a few days and sends the owner a daily recap of the new ones.
 */
export class EmailCaptureDigestService {
  /**
   * Records a form filled on the site; a storage failure is logged and never reaches the visitor.
   * @param {EmailCaptureInput} input - What the form received, without the address of a contact form.
   * @returns {Promise<void>}
   */
  static async record(input: EmailCaptureInput): Promise<void> {
    const capture: EmailCapture = {
      id: randomUUID(),
      kind: input.kind,
      email: input.email,
      site: input.site,
      alertTopic: input.alertTopic,
      projectType: this.limitLength(input.projectType),
      pagePath: input.pagePath,
      landingPagePath: input.landingPagePath,
      locale: input.locale,
      acquisitionSource: this.limitLength(input.acquisitionSource),
      capturedAt: new Date().toISOString(),
    }

    try {
      await this.updateCaptures((captures: EmailCapture[]): EmailCapture[] => [...captures, capture])
    } catch (error: unknown) {
      console.error('EmailCaptureDigestService:record', { kind: input.kind, error })
    }
  }

  /**
   * Erases the expired captures, then sends the recap of the new ones once a day from 8:00 (Paris time), in production.
   * @param {boolean} isManualRun - When true, sends now whatever the time and the environment (manual test).
   * @returns {Promise<EmailCaptureDigestRunResult>} What the run did.
   */
  static async runDailyDigest(isManualRun: boolean): Promise<EmailCaptureDigestRunResult> {
    const storedCaptures: EmailCapture[] = await this.updateCaptures(
      (captures: EmailCapture[]): EmailCapture[] => captures,
    )
    const storage: ReturnType<typeof useStorage> = useStorage('data')
    const now: DateTime = MailDateUtils.nowInParis()
    const today: string = now.toISODate() ?? ''
    const state: EmailCaptureDigestState | null =
      await storage.getItem<EmailCaptureDigestState>(DIGEST_STATE_STORAGE_KEY)
    const isProduction: boolean = process.env.NODE_ENV === 'production'

    if (!isManualRun && (!isProduction || now.hour < DIGEST_HOUR_IN_PARIS || state?.lastRunDay === today)) {
      return { outcome: 'notDue', captureCount: 0 }
    }

    const periodStart: DateTime = state
      ? DateTime.fromISO(state.coveredUntil)
      : now.minus({ hours: FIRST_DIGEST_PERIOD_HOURS })
    const captures: EmailCapture[] = storedCaptures.filter((capture: EmailCapture): boolean => {
      const capturedAt: number = new Date(capture.capturedAt).getTime()

      return capturedAt > periodStart.toMillis() && capturedAt <= now.toMillis()
    })

    if (captures.length > 0) {
      const subscriptions: SecurityAlertSubscriptionOverview[] = (await SecurityAlertService.summary()).subscriptions
      const shownCaptures: EmailCapture[] = captures.slice(-DIGEST_ENTRIES_MAX)

      await sendEmailCaptureDigestMail({
        entries: shownCaptures.map(
          (capture: EmailCapture): EmailCaptureDigestEntry => ({
            capture,
            alertState: this.alertStateOf(capture, subscriptions),
          }),
        ),
        hiddenCount: captures.length - shownCaptures.length,
        periodStart: periodStart.toISO() ?? '',
        periodEnd: now.toISO() ?? '',
        alertTotals: this.alertTotalsOf(subscriptions),
      })
    }
    await storage.setItem<EmailCaptureDigestState>(DIGEST_STATE_STORAGE_KEY, {
      lastRunDay: today,
      coveredUntil: now.toISO() ?? new Date().toISOString(),
    })
    return { outcome: captures.length > 0 ? 'sent' : 'nothingNew', captureCount: captures.length }
  }

  /**
   * Reads where an alert request stands now: confirmed, still waiting for the click, ended, or already erased.
   * @param {EmailCapture} capture - The capture.
   * @param {SecurityAlertSubscriptionOverview[]} subscriptions - Every stored alert subscription.
   * @returns {EmailCaptureAlertState | null} The state, or null when the capture is not an alert request.
   */
  private static alertStateOf(
    capture: EmailCapture,
    subscriptions: SecurityAlertSubscriptionOverview[],
  ): EmailCaptureAlertState | null {
    if (capture.kind !== 'alert') {
      return null
    }
    const subscription: SecurityAlertSubscriptionOverview | undefined = subscriptions
      .filter(
        (candidate: SecurityAlertSubscriptionOverview): boolean =>
          candidate.email === capture.email && candidate.topic === capture.alertTopic,
      )
      .sort((first: SecurityAlertSubscriptionOverview, second: SecurityAlertSubscriptionOverview): number =>
        second.createdAt.localeCompare(first.createdAt),
      )[0]

    if (!subscription) {
      return 'erased'
    }
    if (subscription.unsubscribedAt) {
      return 'unsubscribed'
    }
    return subscription.confirmedAt ? 'confirmed' : 'pending'
  }

  /**
   * Counts the active alert subscriptions, all topics together.
   * @param {SecurityAlertSubscriptionOverview[]} subscriptions - Every stored alert subscription.
   * @returns {EmailCaptureAlertTotals} The counts.
   */
  private static alertTotalsOf(subscriptions: SecurityAlertSubscriptionOverview[]): EmailCaptureAlertTotals {
    const active: SecurityAlertSubscriptionOverview[] = subscriptions.filter(
      (subscription: SecurityAlertSubscriptionOverview): boolean => subscription.unsubscribedAt === null,
    )
    const confirmed: SecurityAlertSubscriptionOverview[] = active.filter(
      (subscription: SecurityAlertSubscriptionOverview): boolean => subscription.confirmedAt !== null,
    )

    return {
      confirmedSecurity: confirmed.filter(
        (subscription: SecurityAlertSubscriptionOverview): boolean => subscription.topic === 'security',
      ).length,
      confirmedHosting: confirmed.filter((subscription: SecurityAlertSubscriptionOverview): boolean =>
        subscription.topic.startsWith('hosting:'),
      ).length,
      pending: active.length - confirmed.length,
    }
  }

  /**
   * Cuts a text sent by a form to a length the journal can keep.
   * @param {string | null} text - The text.
   * @returns {string | null} The text, at most 200 characters long.
   */
  private static limitLength(text: string | null): string | null {
    return text === null ? null : text.slice(0, CAPTURE_TEXT_MAX_LENGTH)
  }

  /**
   * Reads the journal, oldest first.
   * @returns {Promise<EmailCapture[]>} The captures.
   */
  private static async readCaptures(): Promise<EmailCapture[]> {
    const stored: EmailCapture[] | null = await useStorage('data').getItem<EmailCapture[]>(CAPTURES_STORAGE_KEY)

    return Array.isArray(stored) ? stored : []
  }

  /**
   * Applies a change to the journal and stores it without the expired captures, one change at a time.
   * @param {(captures: EmailCapture[]) => EmailCapture[]} change - Returns the captures to keep.
   * @returns {Promise<EmailCapture[]>} The captures stored, oldest first.
   */
  private static updateCaptures(change: (captures: EmailCapture[]) => EmailCapture[]): Promise<EmailCapture[]> {
    const run: Promise<EmailCapture[]> = writeChain.then(async (): Promise<EmailCapture[]> => {
      const oldestKept: number = Date.now() - CAPTURE_RETENTION_MS
      const captures: EmailCapture[] = change(await this.readCaptures())
        .filter((capture: EmailCapture): boolean => new Date(capture.capturedAt).getTime() > oldestKept)
        .slice(-CAPTURES_MAX)

      await useStorage('data').setItem(CAPTURES_STORAGE_KEY, captures)
      return captures
    })

    writeChain = run.then(
      (): void => undefined,
      (): void => undefined,
    )
    return run
  }
}
