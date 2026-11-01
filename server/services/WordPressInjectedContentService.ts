import type {
  WordPressForeignScript,
  WordPressInjectedContentItem,
  WordPressInjectedContentReason,
  WordPressPublicEntry,
  WordPressPublicEntryKind,
  WordPressPublicEntryList,
  WordPressRestEntryFields,
} from '~~/server/types/tools/wordpressHackCheck'
import {
  WORDPRESS_FOREIGN_SCRIPTS,
  WORDPRESS_SPAM_LANGUAGES,
  WORDPRESS_SPAM_LINK_HOST_REGEX,
  WORDPRESS_SPAM_WORDS_REGEX,
  WORDPRESS_STOPWORDS_BY_LANGUAGE,
} from '~~/server/constants/wordpressInjectedContent'

const DAY_MS: number = 24 * 60 * 60 * 1000
const MIN_BACKDATE_DAYS: number = 365
const BACKDATE_NEIGHBOURS: number = 5
const MIN_BACKDATE_NEIGHBOURS: number = 3
const MIN_FOREIGN_SCRIPT_CHARACTERS: number = 8
const MIN_SPAM_LANGUAGE_WORDS: number = 3
const MAX_SHORT_TITLE_LETTERS: number = 2
const MAX_ITEMS: number = 5
const MAX_SPAM_DOMAINS: number = 2
const MAX_TITLE_LENGTH: number = 90
const MAX_PATH_LENGTH: number = 80
const STRONG_REASONS: WordPressInjectedContentReason[] = ['spamLinks', 'foreignLanguage']
const LINK_WITH_TEXT_REGEX: RegExp = /<a\s[^>]*href=["']https?:\/\/([^/"'\s:?#]+)[^>]*>([\s\S]*?)<\/a>/gi
const TAG_REGEX: RegExp = /<[^>]*>/g
const DECIMAL_ENTITY_REGEX: RegExp = /&#(\d{1,7});/g
const HEX_ENTITY_REGEX: RegExp = /&#x([0-9a-f]{1,6});/gi
const NAMED_ENTITY_REGEX: RegExp = /&([a-z]+);/gi
const WHITESPACE_REGEX: RegExp = /\s+/g
const NON_LETTER_REGEX: RegExp = /[^\p{L}]/gu
const WORD_SEPARATOR_REGEX: RegExp = /[^\p{L}]+/u
const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: '’',
  nbsp: ' ',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  laquo: '«',
  raquo: '»',
  hellip: '…',
  ndash: '–',
  mdash: '—',
}

/** Spots the pages and posts a hack adds to a WordPress site, from what its public REST API shows. */
export class WordPressInjectedContentService {
  /**
   * Reads the answer of `/wp-json/wp/v2/pages` or `/posts`, keeping only well-formed entries.
   * @param {string} body - The JSON answer, possibly cut short when it was too long.
   * @param {WordPressPublicEntryKind} kind - Whether the route lists pages or posts.
   * @param {number} requestedCount - The `per_page` asked: a full list means older entries exist.
   * @returns {WordPressPublicEntryList | null} The entries, or null when the answer is not a readable list.
   */
  static parseEntries(
    body: string,
    kind: WordPressPublicEntryKind,
    requestedCount: number,
  ): WordPressPublicEntryList | null {
    let parsed: unknown

    try {
      parsed = JSON.parse(body)
    } catch {
      return null
    }
    if (!Array.isArray(parsed)) {
      return null
    }
    const entries: WordPressPublicEntry[] = parsed
      .map((raw: unknown): WordPressPublicEntry | null => WordPressInjectedContentService.readEntry(raw, kind))
      .filter((entry: WordPressPublicEntry | null): entry is WordPressPublicEntry => entry !== null)
    const completeFromId: number =
      entries.length >= requestedCount ? Math.min(...entries.map((entry: WordPressPublicEntry): number => entry.id)) : 0

    return { entries, completeFromId }
  }

  /**
   * Reads one entry of the REST answer: id, publication date, address, title, excerpt and content when present.
   * @param {unknown} raw - One element of the JSON list.
   * @param {WordPressPublicEntryKind} kind - Whether it is a page or a post.
   * @returns {WordPressPublicEntry | null} The entry, or null when a required field is missing.
   */
  static readEntry(raw: unknown, kind: WordPressPublicEntryKind): WordPressPublicEntry | null {
    if (typeof raw !== 'object' || raw === null) {
      return null
    }
    const fields: WordPressRestEntryFields = raw
    const publishedAt: number = typeof fields.date_gmt === 'string' ? Date.parse(`${fields.date_gmt}Z`) : Number.NaN

    if (
      typeof fields.id !== 'number' ||
      Number.isNaN(publishedAt) ||
      typeof fields.link !== 'string' ||
      typeof fields.title?.rendered !== 'string'
    ) {
      return null
    }
    return {
      id: fields.id,
      kind,
      publishedAt,
      title: WordPressInjectedContentService.toPlainText(fields.title.rendered),
      path: WordPressInjectedContentService.readPath(fields.link),
      excerptText:
        typeof fields.excerpt?.rendered === 'string'
          ? WordPressInjectedContentService.toPlainText(fields.excerpt.rendered)
          : '',
      contentHtml: typeof fields.content?.rendered === 'string' ? fields.content.rendered : null,
    }
  }

  /**
   * Lists the recent pages and posts that look added by a hack: a spam link or language, or two weaker clues together.
   * @param {WordPressPublicEntryList[]} lists - The recent pages and the recent posts.
   * @param {string | null} siteLanguage - The language declared by the home page (`<html lang>`), when there is one.
   * @param {string} siteDomain - The registrable domain of the site, whose own links are never suspect.
   * @returns {WordPressInjectedContentItem[]} At most a few suspect entries, newest first.
   */
  static findInjectedContent(
    lists: WordPressPublicEntryList[],
    siteLanguage: string | null,
    siteDomain: string,
  ): WordPressInjectedContentItem[] {
    const entries: WordPressPublicEntry[] = lists
      .flatMap((list: WordPressPublicEntryList): WordPressPublicEntry[] => list.entries)
      .sort((left: WordPressPublicEntry, right: WordPressPublicEntry): number => right.id - left.id)
    const completeFromId: number = Math.max(
      0,
      ...lists.map((list: WordPressPublicEntryList): number => list.completeFromId),
    )
    const items: WordPressInjectedContentItem[] = []

    entries.forEach((entry: WordPressPublicEntry, index: number): void => {
      const spamDomains: string[] = WordPressInjectedContentService.readSpamDomains(entry.contentHtml, siteDomain)
      const language: string | null = WordPressInjectedContentService.detectSpamLanguage(
        `${entry.title} ${entry.excerptText}`,
        siteLanguage,
      )
      const reasons: WordPressInjectedContentReason[] = []

      if (spamDomains.length > 0) {
        reasons.push('spamLinks')
      }
      if (language) {
        reasons.push('foreignLanguage')
      }
      if (WordPressInjectedContentService.isBackdated(entry, entries.slice(index + 1), completeFromId)) {
        reasons.push('backdated')
      }
      if (WordPressInjectedContentService.isEmptyShortPost(entry)) {
        reasons.push('emptyShortPost')
      }
      const hasStrongReason: boolean = reasons.some((reason: WordPressInjectedContentReason): boolean =>
        STRONG_REASONS.includes(reason),
      )

      if (hasStrongReason || reasons.length >= 2) {
        items.push({
          kind: entry.kind,
          title: entry.title.slice(0, MAX_TITLE_LENGTH),
          path: entry.path.slice(0, MAX_PATH_LENGTH),
          reasons,
          spamDomains,
          language,
          displayedDate: new Date(entry.publishedAt).toISOString().slice(0, 10),
        })
      }
    })
    return items.slice(0, MAX_ITEMS)
  }

  /**
   * Lists the outside sites a content links to that look like gambling, betting or pharmacy sites, by their name or the link text.
   * @param {string | null} contentHtml - The HTML of the content, null when only the excerpt could be read.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {string[]} At most two host names.
   */
  static readSpamDomains(contentHtml: string | null, siteDomain: string): string[] {
    const hosts: Set<string> = new Set()

    for (const match of (contentHtml ?? '').matchAll(LINK_WITH_TEXT_REGEX)) {
      const host: string = (match[1] ?? '').toLowerCase()
      const linkText: string = WordPressInjectedContentService.toPlainText(match[2] ?? '')

      if (host.endsWith(siteDomain)) {
        continue
      }
      if (WORDPRESS_SPAM_LINK_HOST_REGEX.test(host) || WORDPRESS_SPAM_WORDS_REGEX.test(linkText)) {
        hosts.add(host)
      }
    }
    return Array.from(hosts).slice(0, MAX_SPAM_DOMAINS)
  }

  /**
   * Tells whether a text is written in a script or a spam language other than the language of the site.
   * @param {string} text - The title and the excerpt of an entry.
   * @param {string | null} siteLanguage - The language of the site, when declared.
   * @returns {string | null} The language code found (`tr`, `ja`…), or null when nothing stands out.
   */
  static detectSpamLanguage(text: string, siteLanguage: string | null): string | null {
    if (!siteLanguage) {
      return null
    }
    const script: WordPressForeignScript | undefined = WORDPRESS_FOREIGN_SCRIPTS.find(
      (candidate: WordPressForeignScript): boolean =>
        candidate.language !== siteLanguage &&
        (text.match(candidate.regex) ?? []).length >= MIN_FOREIGN_SCRIPT_CHARACTERS,
    )

    if (script) {
      return script.language
    }
    const words: Set<string> = new Set(text.toLowerCase().split(WORD_SEPARATOR_REGEX).filter(Boolean))
    const siteLanguageWords: number = WordPressInjectedContentService.countStopwords(words, siteLanguage)
    let bestLanguage: string | null = null
    let bestCount: number = 0

    for (const language of WORDPRESS_SPAM_LANGUAGES) {
      const count: number = WordPressInjectedContentService.countStopwords(words, language)

      if (language !== siteLanguage && count > bestCount) {
        bestLanguage = language
        bestCount = count
      }
    }
    return bestCount >= MIN_SPAM_LANGUAGE_WORDS && bestCount > siteLanguageWords * 2 ? bestLanguage : null
  }

  /**
   * Counts how many frequent words of a language appear among the words of a text.
   * @param {Set<string>} words - The distinct words of the text, lowercase.
   * @param {string} language - A language code with a word list.
   * @returns {number} The number of distinct frequent words found, 0 for a language without a list.
   */
  static countStopwords(words: Set<string>, language: string): number {
    return (WORDPRESS_STOPWORDS_BY_LANGUAGE[language] ?? []).filter((stopword: string): boolean => words.has(stopword))
      .length
  }

  /**
   * Whether an entry is dated far earlier than the entries created just before it (ids only grow): an old date on a new page.
   * @param {WordPressPublicEntry} entry - The entry checked.
   * @param {WordPressPublicEntry[]} olderEntries - The entries with a lower id, highest first.
   * @param {number} completeFromId - Below this id, some entries were not returned, so they cannot serve as reference.
   * @returns {boolean} True when the date is at least a year before nearly all of its reference entries.
   */
  static isBackdated(
    entry: WordPressPublicEntry,
    olderEntries: WordPressPublicEntry[],
    completeFromId: number,
  ): boolean {
    const referenceDates: number[] = olderEntries
      .filter((olderEntry: WordPressPublicEntry): boolean => olderEntry.id >= completeFromId)
      .slice(0, BACKDATE_NEIGHBOURS)
      .map((olderEntry: WordPressPublicEntry): number => olderEntry.publishedAt)
      .sort((left: number, right: number): number => left - right)
    const secondOldestReference: number | undefined = referenceDates[1]

    if (referenceDates.length < MIN_BACKDATE_NEIGHBOURS || secondOldestReference === undefined) {
      return false
    }
    return secondOldestReference - entry.publishedAt > MIN_BACKDATE_DAYS * DAY_MS
  }

  /**
   * Whether an entry is a post with no text at all and a title of one or two letters, like the « tr » left by a hack.
   * @param {WordPressPublicEntry} entry - The entry checked.
   * @returns {boolean} True for such a post.
   */
  static isEmptyShortPost(entry: WordPressPublicEntry): boolean {
    const titleLetters: number = entry.title.replace(NON_LETTER_REGEX, '').length
    const bodyText: string =
      entry.contentHtml === null ? entry.excerptText : WordPressInjectedContentService.toPlainText(entry.contentHtml)

    return entry.kind === 'post' && titleLetters >= 1 && titleLetters <= MAX_SHORT_TITLE_LETTERS && bodyText === ''
  }

  /**
   * Turns rendered HTML into plain text: tags removed, entities decoded, spaces collapsed.
   * @param {string} html - Rendered HTML of a title, an excerpt or a content.
   * @returns {string} The plain text.
   */
  static toPlainText(html: string): string {
    return WordPressInjectedContentService.decodeEntities(html.replace(TAG_REGEX, ' '))
      .replace(WHITESPACE_REGEX, ' ')
      .trim()
  }

  /**
   * Decodes the HTML entities WordPress writes in titles and names (numeric ones and the common named ones).
   * @param {string} text - Text with entities.
   * @returns {string} The text with the characters, unknown named entities replaced by a space.
   */
  static decodeEntities(text: string): string {
    return text
      .replace(DECIMAL_ENTITY_REGEX, (_entity: string, code: string): string =>
        String.fromCodePoint(Number.parseInt(code, 10)),
      )
      .replace(HEX_ENTITY_REGEX, (_entity: string, code: string): string =>
        String.fromCodePoint(Number.parseInt(code, 16)),
      )
      .replace(NAMED_ENTITY_REGEX, (_entity: string, name: string): string => NAMED_ENTITIES[name.toLowerCase()] ?? ' ')
  }

  /**
   * Reads the path of an entry address, decoded for display.
   * @param {string} link - The absolute address of the entry.
   * @returns {string} The path, or the address as it is when it cannot be parsed.
   */
  static readPath(link: string): string {
    try {
      const path: string = new URL(link).pathname

      try {
        return decodeURIComponent(path)
      } catch {
        return path
      }
    } catch {
      return link
    }
  }
}
