import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevEInvoicingCheckResult,
  DibodevEInvoicingDataset,
  DibodevEInvoicingPlatform,
  DibodevEInvoicingSoftware,
  DibodevEInvoicingSuggestion,
  DibodevEInvoicingVerdict,
} from '~/core/types/DibodevEInvoicingCheck'

const DATE_LOCALE_TAGS: Record<SupportedLocale, string> = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES' }
const MIN_QUERY_LENGTH: number = 2
const DEFAULT_MAX_SUGGESTIONS: number = 6
/** Score of a name that starts with the query, higher than a name that merely contains it. */
const STARTS_WITH_SCORE: number = 2
const CONTAINS_SCORE: number = 1

/** Finds a tool or a platform in the e-invoicing dataset and turns the match into a verdict. */
export class EInvoicingSoftwareUtils {
  /**
   * Lowercases a name and strips accents, punctuation and extra spaces, so "Kwixéo" and "kwixeo" match.
   * @param {string} text - The text to normalize.
   * @returns {string} The normalized text.
   */
  public static normalize(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[’‘']/g, ' ')
      .replace(/[^a-z0-9.]+/g, ' ')
      .trim()
  }

  /**
   * Finds the official platform named by a tool, by exact name.
   * @param {DibodevEInvoicingDataset} dataset - The dataset.
   * @param {string | null} platformName - The name as written in the official list.
   * @returns {DibodevEInvoicingPlatform | null} The platform, or null.
   */
  public static findPlatformByName(
    dataset: DibodevEInvoicingDataset,
    platformName: string | null,
  ): DibodevEInvoicingPlatform | null {
    if (!platformName) {
      return null
    }
    return (
      dataset.platforms.find((platform: DibodevEInvoicingPlatform): boolean => platform.name === platformName) ?? null
    )
  }

  /**
   * Scores how well a name matches a query: 2 when the name (or an alias) starts with it, 1 when it contains it, 0 otherwise.
   * @param {string} query - The normalized query.
   * @param {string[]} names - The normalized names and aliases of the candidate.
   * @returns {number} The score.
   */
  private static scoreNames(query: string, names: string[]): number {
    let best: number = 0

    for (const name of names) {
      if (name === query || name.startsWith(query)) {
        return STARTS_WITH_SCORE
      }
      if (name.includes(query) || query.includes(name)) {
        best = Math.max(best, CONTAINS_SCORE)
      }
    }
    return best
  }

  /**
   * Lists the tools and platforms whose name matches what the visitor is typing, best matches first.
   * @param {DibodevEInvoicingDataset} dataset - The dataset.
   * @param {string} query - What the visitor typed.
   * @param {number} max - Maximum number of suggestions.
   * @returns {DibodevEInvoicingSuggestion[]} The suggestions, empty when the query is too short.
   */
  public static suggest(
    dataset: DibodevEInvoicingDataset,
    query: string,
    max: number = DEFAULT_MAX_SUGGESTIONS,
  ): DibodevEInvoicingSuggestion[] {
    const normalizedQuery: string = EInvoicingSoftwareUtils.normalize(query)

    if (normalizedQuery.length < MIN_QUERY_LENGTH) {
      return []
    }
    const scored: { score: number; suggestion: DibodevEInvoicingSuggestion }[] = []
    const coveredPlatformNames: Set<string> = new Set()

    for (const software of dataset.software) {
      const names: string[] = [software.name, ...software.aliases].map(EInvoicingSoftwareUtils.normalize)
      const score: number = EInvoicingSoftwareUtils.scoreNames(normalizedQuery, names)

      if (software.platformName && software.status === 'accredited') {
        coveredPlatformNames.add(software.platformName)
      }
      if (score > 0) {
        scored.push({
          score,
          suggestion: { key: `software-${software.id}`, label: software.name, software, platform: null },
        })
      }
    }
    for (const platform of dataset.platforms) {
      if (coveredPlatformNames.has(platform.name)) {
        continue
      }
      const score: number = EInvoicingSoftwareUtils.scoreNames(normalizedQuery, [
        EInvoicingSoftwareUtils.normalize(platform.name),
      ])

      if (score > 0) {
        scored.push({
          score,
          suggestion: { key: `platform-${platform.name}`, label: platform.name, software: null, platform },
        })
      }
    }
    return scored
      .sort((a, b): number => b.score - a.score || a.suggestion.label.localeCompare(b.suggestion.label))
      .slice(0, max)
      .map((entry): DibodevEInvoicingSuggestion => entry.suggestion)
  }

  /**
   * Turns a tool into a check result, attaching the official platform it is or uses.
   * @param {DibodevEInvoicingDataset} dataset - The dataset.
   * @param {DibodevEInvoicingSoftware} software - The tool matched.
   * @param {string} query - What the visitor typed or picked.
   * @returns {DibodevEInvoicingCheckResult} The result.
   */
  public static resultForSoftware(
    dataset: DibodevEInvoicingDataset,
    software: DibodevEInvoicingSoftware,
    query: string,
  ): DibodevEInvoicingCheckResult {
    const platform: DibodevEInvoicingPlatform | null = EInvoicingSoftwareUtils.findPlatformByName(
      dataset,
      software.platformName,
    )
    const verdict: DibodevEInvoicingVerdict =
      software.status === 'accredited' && platform?.status === 'pendingInterop' ? 'pending' : software.status

    return { verdict, query, software, platform }
  }

  /**
   * Turns an official platform into a check result.
   * @param {DibodevEInvoicingPlatform} platform - The platform matched.
   * @param {string} query - What the visitor typed or picked.
   * @returns {DibodevEInvoicingCheckResult} The result.
   */
  public static resultForPlatform(platform: DibodevEInvoicingPlatform, query: string): DibodevEInvoicingCheckResult {
    return {
      verdict: platform.status === 'registered' ? 'accredited' : 'pending',
      query,
      software: null,
      platform,
    }
  }

  /**
   * Resolves what the visitor typed: the best suggestion when there is one, otherwise an unknown name.
   * @param {DibodevEInvoicingDataset} dataset - The dataset.
   * @param {string} query - What the visitor typed.
   * @returns {DibodevEInvoicingCheckResult} The result.
   */
  public static resolve(dataset: DibodevEInvoicingDataset, query: string): DibodevEInvoicingCheckResult {
    const trimmed: string = query.trim()
    const best: DibodevEInvoicingSuggestion | undefined = EInvoicingSoftwareUtils.suggest(dataset, trimmed, 1)[0]

    if (best?.software) {
      return EInvoicingSoftwareUtils.resultForSoftware(dataset, best.software, trimmed)
    }
    if (best?.platform) {
      return EInvoicingSoftwareUtils.resultForPlatform(best.platform, trimmed)
    }
    return { verdict: 'unknown', query: trimmed, software: null, platform: null }
  }

  /**
   * Writes a date in words for the page language ("13 octobre 2026", "13 October 2026", "13 de octubre de 2026").
   * @param {string} isoDate - The date (YYYY-MM-DD).
   * @param {SupportedLocale} locale - The page language.
   * @returns {string} The date in words.
   */
  public static formatDate(isoDate: string, locale: SupportedLocale): string {
    return new Intl.DateTimeFormat(DATE_LOCALE_TAGS[locale], {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${isoDate}T00:00:00Z`))
  }
}
