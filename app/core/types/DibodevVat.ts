/** `single` converts one amount, `lines` adds up the lines of a quote. */
export type DibodevVatCalculatorMode = 'single' | 'lines'

/** Which amount the visitor already has: the price without VAT or the price with VAT. */
export type DibodevVatDirection = 'fromExcludingTax' | 'fromIncludingTax'

/** The three amounts of one conversion, each rounded to the cent. */
export type DibodevVatAmounts = {
  ratePercent: number
  amountExcludingTax: number
  vatAmount: number
  amountIncludingTax: number
}

/** A quote line as typed; quantity and unit price are kept as text and read with a comma or a dot. */
export type DibodevVatQuoteLineEntry = {
  lineId: number
  label: string
  quantityText: string
  unitPriceText: string
  ratePercent: number
}

/** `hasAmount` is false while the quantity or the unit price is missing. */
export type DibodevVatQuoteLineResult = {
  lineId: number
  quantity: number
  unitPrice: number
  ratePercent: number
  amountExcludingTax: number
  hasAmount: boolean
}

/** VAT of one rate, computed on the total without VAT of the lines at that rate. */
export type DibodevVatRateBreakdown = {
  ratePercent: number
  baseExcludingTax: number
  vatAmount: number
}

/** `rateBreakdowns` only lists the rates with at least one filled line, highest rate first. */
export type DibodevVatQuoteResult = {
  lines: DibodevVatQuoteLineResult[]
  filledLineCount: number
  totalExcludingTax: number
  rateBreakdowns: DibodevVatRateBreakdown[]
  totalVat: number
  totalIncludingTax: number
}

/** One row of the result panel and of the copied summary. */
export type DibodevVatResultRow = {
  rowKey: string
  label: string
  amount: number
  isTotal: boolean
}

/** Templates of the two formulas; they use `{amountExcludingTax}`, `{amountIncludingTax}` and `{coefficient}`. */
export type DibodevVatFormulaTemplates = Record<DibodevVatDirection, string>

/** Templates of the copied summary; they use `{label}`, `{number}`, `{quantity}`, `{unitPrice}`, `{amount}`, `{rate}` and `{formula}`. */
export type DibodevVatSummaryWording = {
  singleTitle: string
  quoteTitle: string
  quoteLineTemplate: string
  unnamedLineTemplate: string
  resultRowTemplate: string
  formulaTemplate: string
  footer: string
}

/** Everything the copied summary needs that is not computed: templates and the language of the numbers. */
export type DibodevVatSummaryFormat = {
  numberLocale: string
  rateTemplate: string
  wording: DibodevVatSummaryWording
}

export type DibodevVatCopyStatus = 'idle' | 'copied' | 'failed'
