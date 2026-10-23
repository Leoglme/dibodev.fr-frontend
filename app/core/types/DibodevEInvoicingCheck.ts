import type { SupportedLocale } from '~/core/constants/categorySlugs'

/** Status of a platform in the official DGFiP list: registered, or file complete and waiting for the interoperability tests. */
export type DibodevEInvoicingPlatformStatus = 'registered' | 'pendingInterop'

/**
 * Status of an invoicing tool as read on its publisher's page: an accredited platform itself, a compatible solution
 * connected to a named accredited platform, a compatible solution that does not name its platform, an announcement
 * without registration, not an e-invoicing tool at all (spreadsheets, paper), the public-sector portal, or the public
 * invoicing portal that no longer exchanges invoices.
 */
export type DibodevEInvoicingSoftwareStatus =
  | 'accredited'
  | 'connected'
  | 'compatibleUnnamed'
  | 'announced'
  | 'none'
  | 'publicSector'
  | 'ppf'

/** Verdict shown by the checker: a software status, a platform still waiting for its tests, or a name found nowhere. */
export type DibodevEInvoicingVerdict = DibodevEInvoicingSoftwareStatus | 'pending' | 'unknown'

/**
 * One line of the official DGFiP list.
 * @type {DibodevEInvoicingPlatform}
 * @property {string} name - Commercial name, exactly as written in the list.
 * @property {DibodevEInvoicingPlatformStatus} status - Registered, or waiting for the interoperability tests.
 * @property {string | null} registrationDate - Day the registration number was issued (YYYY-MM-DD), null when the list gives none.
 * @property {string | null} city - City of the main establishment.
 * @property {string | null} website - Website given in the list.
 * @property {boolean} smallBusiness - True when the platform targets micro and small businesses.
 * @property {boolean} freeOffer - True when the platform announces a free plan.
 */
export type DibodevEInvoicingPlatform = {
  name: string
  status: DibodevEInvoicingPlatformStatus
  registrationDate: string | null
  city: string | null
  website: string | null
  smallBusiness: boolean
  freeOffer: boolean
}

/**
 * One invoicing tool small businesses use, with what its publisher says about e-invoicing.
 * @type {DibodevEInvoicingSoftware}
 * @property {string} id - Stable key, used in the PostHog events and the contact prefill.
 * @property {string} name - Display name.
 * @property {string | null} editor - Publisher, null for the generic entries (spreadsheets).
 * @property {string[]} aliases - Other spellings visitors type.
 * @property {DibodevEInvoicingSoftwareStatus} status - What the publisher's page says.
 * @property {string | null} platformName - The accredited platform used, as named in the official list.
 * @property {boolean | null} includedInPrice - True when e-invoicing is included in the subscription, null when unsaid.
 * @property {Partial<Record<SupportedLocale, string>>} note - What the publisher says, in each language.
 * @property {string} sourceUrl - The publisher's page read.
 * @property {string | null} sourceDate - Date shown on that page, null when it shows none.
 */
export type DibodevEInvoicingSoftware = {
  id: string
  name: string
  editor: string | null
  aliases: string[]
  status: DibodevEInvoicingSoftwareStatus
  platformName: string | null
  includedInPrice?: boolean | null
  note?: Partial<Record<SupportedLocale, string>>
  sourceUrl?: string
  sourceDate?: string | null
}

/** The official list as read, with its date and the way it was reached. */
export type DibodevEInvoicingOfficialList = {
  name: string
  url: string
  updatedAt: string
  readAt: string
  readThrough: string
  registeredCount: number
  pendingCount: number
}

/** The whole dataset of `content/data/e-invoicing-software-2026.json`. */
export type DibodevEInvoicingDataset = {
  officialList: DibodevEInvoicingOfficialList
  publishersReadAt: string
  platforms: DibodevEInvoicingPlatform[]
  software: DibodevEInvoicingSoftware[]
}

/**
 * A name proposed while the visitor types.
 * @type {DibodevEInvoicingSuggestion}
 * @property {string} key - Unique key of the suggestion.
 * @property {string} label - Name shown.
 * @property {DibodevEInvoicingSoftware | null} software - The tool, when the suggestion is one.
 * @property {DibodevEInvoicingPlatform | null} platform - The official platform, when the suggestion is one.
 */
export type DibodevEInvoicingSuggestion = {
  key: string
  label: string
  software: DibodevEInvoicingSoftware | null
  platform: DibodevEInvoicingPlatform | null
}

/**
 * Result of a check.
 * @type {DibodevEInvoicingCheckResult}
 * @property {DibodevEInvoicingVerdict} verdict - The verdict.
 * @property {string} query - What the visitor typed or picked, trimmed.
 * @property {DibodevEInvoicingSoftware | null} software - The tool matched, when one was.
 * @property {DibodevEInvoicingPlatform | null} platform - The official platform involved: the tool itself, its partner, or a direct match.
 */
export type DibodevEInvoicingCheckResult = {
  verdict: DibodevEInvoicingVerdict
  query: string
  software: DibodevEInvoicingSoftware | null
  platform: DibodevEInvoicingPlatform | null
}
