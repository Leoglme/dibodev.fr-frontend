/** Presentation helpers for the SEO performance dashboard: number formatting, badge colours and country/device labels. */
export class SeoDisplayUtils {
  /** ISO 3166-1 alpha-3 → alpha-2 for the countries that realistically appear in Search Console. */
  private static readonly ALPHA3_TO_ALPHA2: Record<string, string> = {
    fra: 'FR',
    bel: 'BE',
    che: 'CH',
    lux: 'LU',
    mco: 'MC',
    esp: 'ES',
    prt: 'PT',
    ita: 'IT',
    deu: 'DE',
    aut: 'AT',
    nld: 'NL',
    gbr: 'GB',
    irl: 'IE',
    usa: 'US',
    can: 'CA',
    mex: 'MX',
    bra: 'BR',
    arg: 'AR',
    col: 'CO',
    chl: 'CL',
    per: 'PE',
    mar: 'MA',
    dza: 'DZ',
    tun: 'TN',
    sen: 'SN',
    civ: 'CI',
    cmr: 'CM',
    pol: 'PL',
    rou: 'RO',
    cze: 'CZ',
    hun: 'HU',
    grc: 'GR',
    swe: 'SE',
    nor: 'NO',
    dnk: 'DK',
    fin: 'FI',
    rus: 'RU',
    ukr: 'UA',
    tur: 'TR',
    ind: 'IN',
    chn: 'CN',
    jpn: 'JP',
    kor: 'KR',
    aus: 'AU',
    nzl: 'NZ',
    zaf: 'ZA',
    are: 'AE',
    sau: 'SA',
    isr: 'IL',
    egy: 'EG',
    tha: 'TH',
    vnm: 'VN',
    idn: 'ID',
    phl: 'PH',
    sgp: 'SG',
    hkg: 'HK',
    twn: 'TW',
    bfa: 'BF',
    mli: 'ML',
    ner: 'NE',
    gin: 'GN',
    tgo: 'TG',
    ben: 'BJ',
    mdg: 'MG',
    gab: 'GA',
    cog: 'CG',
    cod: 'CD',
    nga: 'NG',
    gha: 'GH',
    ken: 'KE',
    cpv: 'CV',
    mus: 'MU',
    ecu: 'EC',
    ury: 'UY',
    pry: 'PY',
    bol: 'BO',
    ven: 'VE',
    cri: 'CR',
    pan: 'PA',
    gtm: 'GT',
    hnd: 'HN',
    dom: 'DO',
    hti: 'HT',
    pri: 'PR',
    pak: 'PK',
    bgd: 'BD',
    lka: 'LK',
    mys: 'MY',
    khm: 'KH',
    srb: 'RS',
    hrv: 'HR',
    bgr: 'BG',
    svk: 'SK',
    svn: 'SI',
    ltu: 'LT',
    lva: 'LV',
    est: 'EE',
    isl: 'IS',
    qat: 'QA',
    kwt: 'KW',
    jor: 'JO',
    lbn: 'LB',
    mdv: 'MV',
  }

  /** French labels for the Search Console device dimension. */
  private static readonly DEVICE_LABELS: Record<string, string> = {
    DESKTOP: 'Ordinateur',
    MOBILE: 'Mobile',
    TABLET: 'Tablette',
  }

  /**
   * Formats an integer with French thousands separators.
   *
   * @param {number} value - The value to format.
   * @returns {string} The formatted number.
   */
  static formatInteger(value: number): string {
    return Math.round(value).toLocaleString('fr-FR')
  }

  /**
   * Tailwind badge classes colouring an average position: green (top 3), amber (page 1) or muted.
   *
   * @param {number} position - The average position.
   * @returns {string} The badge classes.
   */
  static positionBadgeClass(position: number): string {
    if (position <= 3) return 'bg-emerald-500/20 text-emerald-300'
    if (position <= 10) return 'bg-amber-500/20 text-amber-300'
    return 'bg-gray-600/60 text-gray-200'
  }

  /**
   * Returns a hex colour for a click-through rate: red (low), amber (medium) or emerald (good).
   *
   * @param {number} ctr - The click-through rate (0-1).
   * @returns {string} A hex colour.
   */
  static ctrColor(ctr: number): string {
    if (ctr >= 0.05) return '#34d399'
    if (ctr >= 0.02) return '#fbbf24'
    return '#f87171'
  }

  /**
   * Returns the flag emoji for an ISO 3166-1 alpha-3 country code, or a globe when unknown.
   *
   * @param {string} alpha3 - The alpha-3 country code (e.g. "fra").
   * @returns {string} The flag emoji.
   */
  static countryFlag(alpha3: string): string {
    const alpha2: string | undefined = SeoDisplayUtils.ALPHA3_TO_ALPHA2[alpha3.toLowerCase()]
    if (!alpha2) return '🌐'
    return String.fromCodePoint(...[...alpha2].map((char: string): number => 0x1f1e6 + char.charCodeAt(0) - 65))
  }

  /**
   * Returns the French country name for an ISO 3166-1 alpha-3 code, falling back to the raw code.
   *
   * @param {string} alpha3 - The alpha-3 country code (e.g. "fra").
   * @returns {string} The localized country name.
   */
  static countryName(alpha3: string): string {
    const alpha2: string | undefined = SeoDisplayUtils.ALPHA3_TO_ALPHA2[alpha3.toLowerCase()]
    if (!alpha2) return alpha3.toUpperCase()
    try {
      return new Intl.DisplayNames(['fr'], { type: 'region' }).of(alpha2) ?? alpha3.toUpperCase()
    } catch {
      return alpha3.toUpperCase()
    }
  }

  /**
   * Returns a readable French label for a Search Console device value (DESKTOP/MOBILE/TABLET).
   *
   * @param {string} device - The raw device value.
   * @returns {string} The French label, or the raw value when unknown.
   */
  static deviceLabel(device: string): string {
    return SeoDisplayUtils.DEVICE_LABELS[device.toUpperCase()] ?? device
  }
}
