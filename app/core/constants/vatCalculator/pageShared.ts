import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { DibodevVatCalculatorMode, DibodevVatDirection } from '~/core/types/DibodevVat'
import { NBSP } from '~/core/constants/typography'

/** Day the Service-Public and impots.gouv.fr pages were last re-read: move it at each re-read. */
export const VAT_CALCULATOR_PAGE_UPDATED_AT: string = '2026-11-22'

export const VAT_CALCULATOR_ROUTE_NAME: string = 'tools-vat-calculator'

export const VAT_CALCULATOR_ANCHOR_ID: string = 'calculateur'

export const VAT_CALCULATOR_MODES: DibodevVatCalculatorMode[] = ['single', 'lines']

export const VAT_DIRECTIONS: DibodevVatDirection[] = ['fromExcludingTax', 'fromIncludingTax']

/** Rates of mainland France, read on impots.gouv.fr on 22 November 2026. */
export const STANDARD_VAT_RATE_PERCENTS: number[] = [20, 10, 5.5, 2.1]
export const DEFAULT_VAT_RATE_PERCENT: number = 20
export const MAXIMUM_VAT_RATE_PERCENT: number = 100

export const INITIAL_QUOTE_LINE_COUNT: number = 3
export const MAXIMUM_QUOTE_LINE_COUNT: number = 30

/** impots.gouv.fr, page modified on 29 October 2026, read on 22 November 2026: 20 % for most goods and services, 10 %, 5.5 % and 2.1 % with their examples. */
export const VAT_RATES_SOURCE: DibodevSourceReference = {
  name: 'impots.gouv.fr',
  url: 'https://www.impots.gouv.fr/international-professionnel/fiscalite-des-entreprises',
}

/** Service-Public, page checked by the administration on 21 February 2026, read on 22 November 2026: 10 % and 5.5 % for works in a home finished for more than 2 years, 20 % otherwise. */
export const RENOVATION_WORKS_VAT_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23568',
}

/** impots.gouv.fr, page modified on 14 October 2026, read on 22 November 2026: since 1 March 2025 the client certifies the reduced rate by a mention on the quote or the invoice. */
export const RENOVATION_WORKS_CLIENT_MENTION_SOURCE: DibodevSourceReference = {
  name: 'impots.gouv.fr',
  url: 'https://www.impots.gouv.fr/professionnel/questions/quel-taux-de-tva-appliquer-pour-les-travaux-realises-dans-les-logements',
}

/** Service-Public, page checked by the administration on 1 January 2026, read on 22 November 2026: thresholds unchanged for 2026 (85,000 and 93,500 €, 37,500 and 41,250 €), mention on invoices, no deduction. */
export const VAT_FRANCHISE_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F21746',
}

/** Service-Public, page checked by the administration on 4 May 2026, read on 22 November 2026: price without VAT = price with VAT ÷ (1 + rate), rounded to the cent on the third decimal. */
export const PRICE_EXCLUDING_TAX_FORMULA_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24271',
}

/** Service-Public, page checked by the administration on 11 August 2026, read on 22 November 2026: quantity, unit price without VAT and VAT rate on each line, totals without and with VAT. */
export const INVOICE_MENTIONS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31808',
}

/** The calculator, teased from the tools hub and the business software page. */
export const VAT_CALCULATOR_TEASER: DibodevToolTeaserContent = {
  toolId: 'vat-calculator',
  routeName: VAT_CALCULATOR_ROUTE_NAME,
  icon: 'Euro',
  wording: {
    fr: {
      emphasizedIntro: `Un prix HT à passer en TTC, ou l’inverse${NBSP}?`,
      text: `Un montant, un taux${NBSP}: le calculateur donne le HT, la TVA et le TTC avec la formule. Il additionne aussi les lignes d’un devis à plusieurs taux et ventile la TVA par taux.`,
      linkLabel: 'Calculer la TVA',
      listLabel: 'Calcul de TVA, HT et TTC',
      hubDescription: `Le HT, la TVA et le TTC à 20, 10, 5,5 ou 2,1${NBSP}%, la formule écrite en clair, et le total d’un devis à plusieurs taux avec la TVA ventilée.`,
      hubMeta: '4 taux · résultat immédiat',
    },
    en: {
      emphasizedIntro: 'A price to convert between excluding and including French VAT?',
      text: 'One amount, one rate: the calculator gives the price excluding VAT, the VAT and the price including VAT, with the formula. It also adds up the lines of a quote at several French VAT rates.',
      linkLabel: 'Calculate French VAT',
      listLabel: 'French VAT calculator',
      hubDescription:
        'Price excluding VAT, VAT and price including VAT at the French rates of 20%, 10%, 5.5% or 2.1%, the formula spelled out, and the total of a quote at several rates.',
      hubMeta: '4 rates · instant result',
    },
    es: {
      emphasizedIntro: '¿Un precio sin IVA que pasar a precio con IVA francés, o al revés?',
      text: 'Un importe, un tipo: la calculadora te da el precio sin IVA, el IVA y el precio con IVA, con la fórmula. También suma las líneas de un presupuesto con varios tipos de IVA franceses.',
      linkLabel: 'Calcular el IVA francés',
      listLabel: 'Calculadora de IVA de Francia',
      hubDescription:
        'El precio sin IVA, el IVA y el precio con IVA a los tipos franceses del 20 %, 10 %, 5,5 % o 2,1 %, la fórmula escrita y el total de un presupuesto con varios tipos.',
      hubMeta: '4 tipos · resultado inmediato',
    },
  },
}
