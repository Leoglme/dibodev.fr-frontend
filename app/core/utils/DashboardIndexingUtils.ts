import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardIndexingState, DashboardTone } from '~/core/types/Dashboard'
import type { IndexingStatusRow, IndexingUrlType } from '~~/server/types/indexing'

export type IndexingStateDisplay = {
  label: string
  tone: DashboardTone
  icon: DashboardIconName
}

export type IndexingTypeDisplay = {
  label: string
  tone: DashboardTone
  icon: DashboardIconName
}

export type IndexingLocale = 'fr' | 'en' | 'es'

/** Turns the raw Search Console URL inspection (verdict + coverage state) into a state a human can act on. */
export class DashboardIndexingUtils {
  /** Label and tone of each state. */
  public static readonly STATES: Record<DashboardIndexingState, IndexingStateDisplay> = {
    indexed: { label: 'Indexée', tone: 'green', icon: 'circle-check' },
    'not-indexed': { label: 'Non indexée', tone: 'amber', icon: 'triangle-alert' },
    duplicate: { label: 'En double', tone: 'red', icon: 'copy' },
    unknown: { label: 'Inconnue', tone: 'cyan', icon: 'circle-help' },
    excluded: { label: 'Exclue', tone: 'neutral', icon: 'circle-x' },
    error: { label: 'Erreur', tone: 'red', icon: 'circle-x' },
  }

  /** French label, colour and icon of each URL type. */
  public static readonly TYPES: Record<IndexingUrlType, IndexingTypeDisplay> = {
    blog: { label: 'Article', tone: 'violet', icon: 'file-text' },
    page: { label: 'Page', tone: 'pink', icon: 'globe' },
    project: { label: 'Projet', tone: 'cyan', icon: 'folder' },
    category: { label: 'Catégorie', tone: 'amber', icon: 'tag' },
    sector: { label: 'Secteur', tone: 'green', icon: 'building-2' },
  }

  /**
   * Derives the state of a page in Google.
   *
   * @param {IndexingStatusRow} row - The cached inspection row.
   * @returns {DashboardIndexingState} The state.
   */
  public static state(row: IndexingStatusRow): DashboardIndexingState {
    const coverage: string = (row.coverageState ?? '').toLowerCase()
    if (row.verdict === 'PASS') return 'indexed'
    if (!row.verdict && !row.checkedAt) return 'unknown'
    if (coverage.includes('double')) return 'duplicate'
    if (coverage.includes('ne reconnaît pas') || coverage.includes('inconnue')) return 'unknown'
    if (coverage.includes('redirection') || coverage.includes('autre page avec balise canonique')) return 'excluded'
    if (row.verdict === 'FAIL') return 'error'
    return 'not-indexed'
  }

  /**
   * One sentence explaining the state, from the exact Search Console wording.
   *
   * @param {IndexingStatusRow} row - The cached inspection row.
   * @returns {string} The explanation shown under the status.
   */
  public static reason(row: IndexingStatusRow): string {
    const state: DashboardIndexingState = DashboardIndexingUtils.state(row)
    if (state === 'unknown' && !row.checkedAt) return 'Pas encore vérifiée. Actualise pour interroger Search Console.'
    if (row.coverageState?.trim()) return row.coverageState.trim()
    return state === 'indexed' ? 'Envoyée et indexée.' : 'À vérifier dans Search Console.'
  }

  /**
   * Canonical URL chosen by Google when it differs from the page (duplicates, redirects).
   *
   * @param {IndexingStatusRow} row - The cached inspection row.
   * @returns {string | null} The path of the canonical chosen by Google, or null.
   */
  public static chosenCanonical(row: IndexingStatusRow): string | null {
    if (!row.googleCanonical || row.googleCanonical === row.url) return null
    return DashboardIndexingUtils.path(row.googleCanonical)
  }

  /**
   * Path of an absolute URL (keeps the input when it cannot be parsed).
   *
   * @param {string} url - An absolute URL.
   * @returns {string} The pathname, "/" for the home page.
   */
  public static path(url: string): string {
    try {
      return new URL(url).pathname || '/'
    } catch {
      return url
    }
  }

  /**
   * Site language of a page from its URL prefix (/en/ or /es/, French otherwise).
   *
   * @param {string} url - An absolute URL.
   * @returns {IndexingLocale} The language.
   */
  public static locale(url: string): IndexingLocale {
    const pathname: string = DashboardIndexingUtils.path(url)
    if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
    if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
    return 'fr'
  }

  /**
   * Sort rank: problems first (duplicates, errors, unknown, not indexed), indexed pages last.
   *
   * @param {IndexingStatusRow} row - The cached inspection row.
   * @returns {number} Lower values are listed first.
   */
  public static priority(row: IndexingStatusRow): number {
    const order: Record<DashboardIndexingState, number> = {
      duplicate: 0,
      error: 1,
      'not-indexed': 2,
      unknown: 3,
      excluded: 4,
      indexed: 5,
    }
    return order[DashboardIndexingUtils.state(row)]
  }

  /**
   * Search Console link, forced on the account that owns the property (u/1).
   *
   * @param {string | undefined} link - Inspection link returned by the API.
   * @returns {string} The link to open.
   */
  public static searchConsoleUrl(link: string | undefined): string {
    if (!link) return 'https://search.google.com/u/1/search-console'
    if (link.includes('search.google.com/u/1/')) return link
    return link.replace(/search\.google\.com\/(?!u\/1)/, 'search.google.com/u/1/')
  }
}
