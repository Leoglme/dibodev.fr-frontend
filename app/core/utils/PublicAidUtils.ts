import type {
  DibodevCommune,
  DibodevCommuneRow,
  DibodevCommunesDataset,
  DibodevGeoApiCommune,
  DibodevPublicAidCommuneOverride,
  DibodevPublicAidDataset,
  DibodevPublicAidProjectEligibility,
  DibodevPublicAidScheme,
  DibodevPublicAidSimulationInput,
  DibodevPublicAidSimulationResult,
} from '~/core/types/DibodevPublicAid'

/** Departments of Brittany, where the Pass Commerce et Artisanat exists. */
const BRITTANY_DEPARTMENTS: string[] = ['22', '29', '35', '56']
/** Population thresholds of the regional location rule. */
const SMALL_COMMUNE_POPULATION: number = 2000
const LARGE_COMMUNE_POPULATION: number = 5000
/** Floor assumed when an intercommunalité does not publish its own (the most common one). */
const DEFAULT_FLOOR_HT: number = 6000
/** Combining marks left by the NFD normalisation (the accents). */
const DIACRITICS_REGEX: RegExp = /\p{M}/gu
const SEPARATORS_REGEX: RegExp = /[\s'’-]+/g
/** Legal prefix and leading article of the intercommunalité names of the geo API ("CC du Pays de Dol…"). */
const EPCI_PREFIX_REGEX: RegExp = /^(?:CA|CC|CU) /
const EPCI_ARTICLE_REGEX: RegExp = /^(?:du|de la|de l’|de l'|des|de) /

/** Commune lookup and Pass Commerce et Artisanat simulation, from the data checked on the publishers' pages. */
export class PublicAidUtils {
  /**
   * Lowercases a name and drops accents, apostrophes, spaces and hyphens, so "St-Erblon" finds "Saint-Erblon" too.
   * @param {string} value - A commune name or a search query.
   * @returns {string} The comparable form.
   */
  public static normalizeName(value: string): string {
    return value
      .normalize('NFD')
      .replace(DIACRITICS_REGEX, '')
      .toLowerCase()
      .replace(/^(saint|sainte)(?=[\s'’-])/, (match: string): string => (match === 'sainte' ? 'ste' : 'st'))
      .replace(SEPARATORS_REGEX, '')
  }

  /**
   * Drops the legal prefix and the leading article of a geo API name ("CC du Pays de Dol…" gives "Pays de Dol…").
   * @param {string} name - The name as published by the geo API.
   * @returns {string} The name as people say it.
   */
  public static cleanEpciName(name: string): string {
    const cleaned: string = name.replace(EPCI_PREFIX_REGEX, '').replace(EPCI_ARTICLE_REGEX, '')
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
  }

  /**
   * Turns a compact commune row into a commune.
   * @param {DibodevCommuneRow} row - The row of the dataset.
   * @param {Record<string, string>} epciNames - Intercommunalité names by code.
   * @returns {DibodevCommune} The commune.
   */
  public static toCommune(row: DibodevCommuneRow, epciNames: Record<string, string>): DibodevCommune {
    const [code, name, postcode, epciCode, population] = row
    return {
      code,
      name,
      postcode,
      epciCode,
      epciName: PublicAidUtils.cleanEpciName(epciNames[epciCode] ?? ''),
      population,
      department: code.slice(0, 2),
    }
  }

  /**
   * Turns a geo API row into a commune; the intercommunalité name is only known for Brittany.
   * @param {DibodevGeoApiCommune} row - A row of geo.api.gouv.fr.
   * @param {Record<string, string>} epciNames - Intercommunalité names by code (Brittany).
   * @returns {DibodevCommune} The commune.
   */
  public static fromGeoApi(row: DibodevGeoApiCommune, epciNames: Record<string, string>): DibodevCommune {
    const epciCode: string = row.codeEpci ?? ''
    return {
      code: row.code,
      name: row.nom,
      postcode: row.codesPostaux?.[0] ?? '',
      epciCode,
      epciName: PublicAidUtils.cleanEpciName(epciNames[epciCode] ?? ''),
      population: row.population ?? 0,
      department: row.codeDepartement ?? row.code.slice(0, 2),
    }
  }

  /**
   * Whether a commune is in Brittany, where the Pass Commerce et Artisanat exists.
   * @param {DibodevCommune} commune - The commune.
   * @returns {boolean} True for the four departments of Brittany.
   */
  public static isInBrittany(commune: DibodevCommune): boolean {
    return BRITTANY_DEPARTMENTS.includes(commune.department)
  }

  /**
   * Communes whose name or postcode starts with the query, the most populated first.
   * @param {DibodevCommunesDataset} dataset - The commune table.
   * @param {string} query - What the visitor typed (two characters at least).
   * @param {number} limit - Maximum number of matches.
   * @returns {DibodevCommune[]} The matches.
   */
  public static searchCommunes(dataset: DibodevCommunesDataset, query: string, limit: number): DibodevCommune[] {
    const trimmed: string = query.trim()
    if (trimmed.length < 2) return []
    const isPostcode: boolean = /^\d+$/.test(trimmed)
    const needle: string = isPostcode ? trimmed : PublicAidUtils.normalizeName(trimmed)
    return dataset.communes
      .filter((row: DibodevCommuneRow): boolean =>
        isPostcode ? row[2].startsWith(needle) : PublicAidUtils.normalizeName(row[1]).startsWith(needle),
      )
      .sort((a: DibodevCommuneRow, b: DibodevCommuneRow): number => b[4] - a[4])
      .slice(0, limit)
      .map((row: DibodevCommuneRow): DibodevCommune => PublicAidUtils.toCommune(row, dataset.epcis))
  }

  /**
   * The rules read for the intercommunalité of a commune, if any.
   * @param {DibodevPublicAidDataset} dataset - The schemes.
   * @param {DibodevCommune} commune - The commune.
   * @returns {DibodevPublicAidScheme | null} The scheme, or null when only the regional frame is known.
   */
  public static schemeOf(dataset: DibodevPublicAidDataset, commune: DibodevCommune): DibodevPublicAidScheme | null {
    return dataset.epcis.find((scheme: DibodevPublicAidScheme): boolean => scheme.code === commune.epciCode) ?? null
  }

  /**
   * Aid granted for an amount: the rate applied to the amount within the ceiling, capped by the maximum aid.
   * @param {number} amountHt - The project amount excluding VAT.
   * @param {number} ratePercent - The subsidy rate.
   * @param {number} ceilingHt - The maximum amount taken into account.
   * @param {number} maxAid - The maximum aid.
   * @returns {number} The aid in euros, rounded.
   */
  public static aidFor(amountHt: number, ratePercent: number, ceilingHt: number, maxAid: number): number {
    const base: number = Math.max(0, Math.min(amountHt, ceilingHt))
    return Math.min(Math.round((base * ratePercent) / 100), maxAid)
  }

  /**
   * Runs the simulation: finds the rules of the commune, applies the eligibility conditions and computes the aid.
   * @param {DibodevPublicAidDataset} dataset - The schemes.
   * @param {DibodevPublicAidSimulationInput} input - The visitor's answers.
   * @returns {DibodevPublicAidSimulationResult} The outcome, with the reasons and the points to confirm.
   */
  public static simulate(
    dataset: DibodevPublicAidDataset,
    input: DibodevPublicAidSimulationInput,
  ): DibodevPublicAidSimulationResult {
    const frame = dataset.regionalFrame
    const empty: DibodevPublicAidSimulationResult = {
      status: 'incomplete',
      scope: 'national',
      scheme: null,
      territoryName: '',
      ratePercent: frame.ratePercent,
      floorHt: frame.floorHt,
      ceilingHt: frame.ceilingHt,
      maxAid: frame.maxAid,
      aidAmount: 0,
      remainingAmount: input.amountHt,
      reasonKeys: [],
      checkKeys: [],
      noteKeys: [],
      contact: null,
      sourceUrl: frame.sourceUrl,
    }
    if (!input.commune) return empty
    const commune: DibodevCommune = input.commune
    if (!BRITTANY_DEPARTMENTS.includes(commune.department)) return { ...empty, status: 'national' }

    const scheme: DibodevPublicAidScheme | null = PublicAidUtils.schemeOf(dataset, commune)
    const override: DibodevPublicAidCommuneOverride | undefined = scheme?.communeOverrides.find(
      (candidate: DibodevPublicAidCommuneOverride): boolean => candidate.communeCode === commune.code,
    )
    const ratePercent: number = override?.ratePercent ?? scheme?.ratePercent ?? frame.ratePercent
    const maxAid: number = override?.maxAid ?? scheme?.maxAid ?? frame.maxAid
    const ceilingHt: number = scheme?.ceilingHt ?? frame.ceilingHt
    const floorHt: number | null = scheme?.floorHt ?? frame.floorHt
    const maxEmployees: number = scheme?.maxEmployees ?? frame.maxEmployees
    const reasonKeys: string[] = []
    const checkKeys: string[] = []

    if (!input.isLocalIndependentBusiness) reasonKeys.push('businessType')
    if (input.employees > maxEmployees) reasonKeys.push('employees')
    if (!input.isTurnoverUnderLimit) reasonKeys.push('turnover')

    const effectiveFloor: number = floorHt ?? DEFAULT_FLOOR_HT
    if (input.amountHt < effectiveFloor) {
      if (floorHt === null) checkKeys.push('belowAssumedFloor')
      else reasonKeys.push('belowFloor')
    } else if (floorHt === null) {
      checkKeys.push('floorUnknown')
    }

    if (scheme) {
      PublicAidUtils.applyCommuneRule(scheme, commune, reasonKeys, checkKeys)
      const projectEligibility: DibodevPublicAidProjectEligibility = scheme.projects[input.projectType]
      if (projectEligibility === 'excluded') reasonKeys.push('projectExcluded')
      if (projectEligibility === 'unclear') checkKeys.push('projectUnclear')
    } else {
      PublicAidUtils.applyRegionalCentrality(commune, checkKeys)
      checkKeys.push('projectUnclear')
    }

    const aidAmount: number =
      reasonKeys.length > 0 ? 0 : PublicAidUtils.aidFor(input.amountHt, ratePercent, ceilingHt, maxAid)
    const status: DibodevPublicAidSimulationResult['status'] =
      reasonKeys.length > 0 ? 'notEligible' : !scheme ? 'frame' : checkKeys.length > 0 ? 'check' : 'eligible'

    return {
      status,
      scope: scheme ? 'detailed' : 'regionalFrame',
      scheme,
      territoryName: scheme?.name ?? commune.epciName,
      ratePercent,
      floorHt,
      ceilingHt,
      maxAid,
      aidAmount,
      remainingAmount: Math.max(0, input.amountHt - aidAmount),
      reasonKeys,
      checkKeys: Array.from(new Set(checkKeys)),
      noteKeys: scheme?.noteKeys ?? [],
      contact: scheme?.contact ?? null,
      sourceUrl: scheme?.sourceUrl ?? frame.sourceUrl,
    }
  }

  /**
   * Applies the location rule of a scheme to a commune.
   * @param {DibodevPublicAidScheme} scheme - The rules.
   * @param {DibodevCommune} commune - The commune.
   * @param {string[]} reasonKeys - Reasons of refusal, completed in place.
   * @param {string[]} checkKeys - Points to confirm, completed in place.
   * @returns {void}
   */
  private static applyCommuneRule(
    scheme: DibodevPublicAidScheme,
    commune: DibodevCommune,
    reasonKeys: string[],
    checkKeys: string[],
  ): void {
    switch (scheme.communeRule) {
      case 'under5000OrQpv':
        if (commune.population >= LARGE_COMMUNE_POPULATION) {
          if (commune.code === scheme.qpvCommuneCode) checkKeys.push('qpvOnly')
          else reasonKeys.push('communeTooLarge')
        } else {
          checkKeys.push('centralityForShops')
        }
        return
      case 'centralityOver2000':
        if (commune.population > SMALL_COMMUNE_POPULATION) checkKeys.push('centrality')
        return
      case 'zonesOnly':
        checkKeys.push('zonesOnly')
        return
      case 'all':
        return
      case 'regionalCentrality':
      default:
        PublicAidUtils.applyRegionalCentrality(commune, checkKeys)
    }
  }

  /**
   * The regional location rule: business parks excluded between 2 000 and 5 000 inhabitants, town centre above.
   * @param {DibodevCommune} commune - The commune.
   * @param {string[]} checkKeys - Points to confirm, completed in place.
   * @returns {void}
   */
  private static applyRegionalCentrality(commune: DibodevCommune, checkKeys: string[]): void {
    if (commune.population > LARGE_COMMUNE_POPULATION) checkKeys.push('centrality')
    else if (commune.population >= SMALL_COMMUNE_POPULATION) checkKeys.push('outsideBusinessPark')
  }

  /**
   * Formats an amount in euros without decimals for a locale ("7 500 €").
   * @param {number} amount - The amount.
   * @param {string} numberLocale - The locale of the page.
   * @returns {string} The formatted amount.
   */
  public static formatAmount(amount: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(
      amount,
    )
  }

  /**
   * Formats a population with the locale's thousands separator.
   * @param {number} population - The population.
   * @param {string} numberLocale - The locale of the page.
   * @returns {string} The formatted number.
   */
  public static formatPopulation(population: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale).format(population)
  }

  /**
   * The host of a source URL, shown as the source name ("les-aides.fr").
   * @param {string} url - The URL.
   * @returns {string} The host without "www.".
   */
  public static hostOf(url: string): string {
    try {
      return new URL(url).host.replace(/^www\./, '')
    } catch {
      return url
    }
  }
}
