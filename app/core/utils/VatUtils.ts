import type {
  DibodevVatAmounts,
  DibodevVatDirection,
  DibodevVatFormulaTemplates,
  DibodevVatQuoteLineEntry,
  DibodevVatQuoteLineResult,
  DibodevVatQuoteResult,
  DibodevVatRateBreakdown,
  DibodevVatResultRow,
  DibodevVatSummaryFormat,
} from '~/core/types/DibodevVat'
import { MAXIMUM_VAT_RATE_PERCENT } from '~/core/constants/vatCalculator/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const CENTS_PER_EURO: number = 100
const PERCENT_DIVISOR: number = 100
const FLOAT_NOISE_DIGITS: number = 6
const IGNORED_CHARACTERS_REGEX: RegExp = /[\s€]/g
const COMMA_REGEX: RegExp = /,/g
const DOT_REGEX: RegExp = /\./g

/** French VAT amounts: price without VAT, VAT and price with VAT for one amount or for the lines of a quote, rounded to the cent. */
export class VatUtils {
  /**
   * Reads an amount typed with a comma or a dot, with or without spaces between thousands ("1 200,50" gives 1200.5).
   * @param {string} text - The field text.
   * @returns {number} The number, 0 when empty, negative or invalid.
   */
  public static parseAmount(text: string): number {
    const compactText: string = text.replace(IGNORED_CHARACTERS_REGEX, '')
    const lastCommaIndex: number = compactText.lastIndexOf(',')
    const lastDotIndex: number = compactText.lastIndexOf('.')
    let normalizedText: string = compactText.replace(COMMA_REGEX, '.')

    if (lastCommaIndex !== -1 && lastDotIndex !== -1) {
      normalizedText =
        lastCommaIndex > lastDotIndex
          ? compactText.replace(DOT_REGEX, '').replace(COMMA_REGEX, '.')
          : compactText.replace(COMMA_REGEX, '')
    }
    const value: number = Number(normalizedText)

    return Number.isFinite(value) && value > 0 ? value : 0
  }

  /**
   * Reads a VAT rate typed with a comma or a dot ("5,5" gives 5.5).
   * @param {string} text - The field text.
   * @returns {number} The rate in percent, 0 when empty, invalid or above 100.
   */
  public static parseRatePercent(text: string): number {
    const ratePercent: number = VatUtils.parseAmount(text.replace('%', ''))

    return ratePercent <= MAXIMUM_VAT_RATE_PERCENT ? ratePercent : 0
  }

  /**
   * Rounds an amount to the cent, up when the third decimal is 5 or more.
   * @param {number} amount - The amount in euros.
   * @returns {number} The rounded amount.
   */
  public static roundToCents(amount: number): number {
    return Math.round(Number((amount * CENTS_PER_EURO).toFixed(FLOAT_NOISE_DIGITS))) / CENTS_PER_EURO
  }

  /**
   * Gives the number an amount without VAT is multiplied by to include VAT (20 % gives 1.2).
   * @param {number} ratePercent - The VAT rate in percent.
   * @returns {number} The coefficient.
   */
  public static rateCoefficient(ratePercent: number): number {
    return Number((1 + ratePercent / PERCENT_DIVISOR).toFixed(FLOAT_NOISE_DIGITS))
  }

  /**
   * Computes the VAT and the price with VAT from a price without VAT: price × rate, then price + VAT.
   * @param {number} amountExcludingTax - The price without VAT.
   * @param {number} ratePercent - The VAT rate in percent.
   * @returns {DibodevVatAmounts} The three amounts, rounded to the cent.
   */
  public static computeFromExcludingTax(amountExcludingTax: number, ratePercent: number): DibodevVatAmounts {
    const roundedAmountExcludingTax: number = VatUtils.roundToCents(amountExcludingTax)
    const vatAmount: number = VatUtils.roundToCents((roundedAmountExcludingTax * ratePercent) / PERCENT_DIVISOR)

    return {
      ratePercent,
      amountExcludingTax: roundedAmountExcludingTax,
      vatAmount,
      amountIncludingTax: VatUtils.roundToCents(roundedAmountExcludingTax + vatAmount),
    }
  }

  /**
   * Computes the price without VAT and the VAT from a price with VAT: price ÷ (1 + rate), the VAT being the difference.
   * @param {number} amountIncludingTax - The price with VAT.
   * @param {number} ratePercent - The VAT rate in percent.
   * @returns {DibodevVatAmounts} The three amounts, rounded to the cent.
   */
  public static computeFromIncludingTax(amountIncludingTax: number, ratePercent: number): DibodevVatAmounts {
    const roundedAmountIncludingTax: number = VatUtils.roundToCents(amountIncludingTax)
    const amountExcludingTax: number = VatUtils.roundToCents(
      roundedAmountIncludingTax / VatUtils.rateCoefficient(ratePercent),
    )

    return {
      ratePercent,
      amountExcludingTax,
      vatAmount: VatUtils.roundToCents(roundedAmountIncludingTax - amountExcludingTax),
      amountIncludingTax: roundedAmountIncludingTax,
    }
  }

  /**
   * Converts one amount in the direction chosen by the visitor.
   * @param {number} amount - The amount typed.
   * @param {number} ratePercent - The VAT rate in percent.
   * @param {DibodevVatDirection} direction - Whether the amount typed is without or with VAT.
   * @returns {DibodevVatAmounts} The three amounts, rounded to the cent.
   */
  public static computeAmounts(amount: number, ratePercent: number, direction: DibodevVatDirection): DibodevVatAmounts {
    return direction === 'fromExcludingTax'
      ? VatUtils.computeFromExcludingTax(amount, ratePercent)
      : VatUtils.computeFromIncludingTax(amount, ratePercent)
  }

  /**
   * Computes one quote line: quantity × unit price without VAT, rounded to the cent.
   * @param {DibodevVatQuoteLineEntry} lineEntry - The line as typed.
   * @returns {DibodevVatQuoteLineResult} The amount of the line.
   */
  public static computeQuoteLine(lineEntry: DibodevVatQuoteLineEntry): DibodevVatQuoteLineResult {
    const quantity: number = VatUtils.parseAmount(lineEntry.quantityText)
    const unitPrice: number = VatUtils.parseAmount(lineEntry.unitPriceText)

    return {
      lineId: lineEntry.lineId,
      quantity,
      unitPrice,
      ratePercent: lineEntry.ratePercent,
      amountExcludingTax: VatUtils.roundToCents(quantity * unitPrice),
      hasAmount: quantity > 0 && unitPrice > 0,
    }
  }

  /**
   * Computes a quote: total without VAT, VAT of each rate on the total without VAT of that rate, total with VAT.
   * @param {DibodevVatQuoteLineEntry[]} lineEntries - The lines as typed.
   * @returns {DibodevVatQuoteResult} The totals of the quote.
   */
  public static computeQuote(lineEntries: DibodevVatQuoteLineEntry[]): DibodevVatQuoteResult {
    const lines: DibodevVatQuoteLineResult[] = lineEntries.map(
      (lineEntry: DibodevVatQuoteLineEntry): DibodevVatQuoteLineResult => VatUtils.computeQuoteLine(lineEntry),
    )
    const filledLines: DibodevVatQuoteLineResult[] = lines.filter(
      (line: DibodevVatQuoteLineResult): boolean => line.hasAmount,
    )
    const baseExcludingTaxByRate: Map<number, number> = new Map()

    for (const line of filledLines) {
      baseExcludingTaxByRate.set(
        line.ratePercent,
        VatUtils.roundToCents((baseExcludingTaxByRate.get(line.ratePercent) ?? 0) + line.amountExcludingTax),
      )
    }
    const rateBreakdowns: DibodevVatRateBreakdown[] = [...baseExcludingTaxByRate.entries()]
      .sort(
        ([firstRatePercent]: [number, number], [secondRatePercent]: [number, number]): number =>
          secondRatePercent - firstRatePercent,
      )
      .map(
        ([ratePercent, baseExcludingTax]: [number, number]): DibodevVatRateBreakdown => ({
          ratePercent,
          baseExcludingTax,
          vatAmount: VatUtils.roundToCents((baseExcludingTax * ratePercent) / PERCENT_DIVISOR),
        }),
      )
    const totalExcludingTax: number = VatUtils.roundToCents(
      rateBreakdowns.reduce(
        (sum: number, rateBreakdown: DibodevVatRateBreakdown): number => sum + rateBreakdown.baseExcludingTax,
        0,
      ),
    )
    const totalVat: number = VatUtils.roundToCents(
      rateBreakdowns.reduce(
        (sum: number, rateBreakdown: DibodevVatRateBreakdown): number => sum + rateBreakdown.vatAmount,
        0,
      ),
    )

    return {
      lines,
      filledLineCount: filledLines.length,
      totalExcludingTax,
      rateBreakdowns,
      totalVat,
      totalIncludingTax: VatUtils.roundToCents(totalExcludingTax + totalVat),
    }
  }

  /**
   * Writes an amount in euros with cents.
   * @param {number} amount - The amount.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The amount.
   */
  public static formatAmount(amount: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { style: 'currency', currency: 'EUR' }).format(amount)
  }

  /**
   * Writes a number without useless decimals: none for a whole number, a fixed count otherwise ("1 200", "45,45").
   * @param {number} value - The number.
   * @param {string} numberLocale - Locale of the numbers.
   * @param {number} fractionDigits - Decimals shown when the number is not whole.
   * @returns {string} The number.
   */
  public static formatPlainNumber(value: number, numberLocale: string, fractionDigits: number): string {
    const shownFractionDigits: number = Number.isInteger(value) ? 0 : fractionDigits

    return new Intl.NumberFormat(numberLocale, {
      minimumFractionDigits: shownFractionDigits,
      maximumFractionDigits: shownFractionDigits,
    }).format(value)
  }

  /**
   * Writes a rate with its percent sign in the page language (5.5 gives "5,5 %" in French).
   * @param {number} ratePercent - The VAT rate in percent.
   * @param {string} rateTemplate - Template with `{rate}`.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The rate.
   */
  public static formatRate(ratePercent: number, rateTemplate: string, numberLocale: string): string {
    return QuizTextUtils.fillTemplate(rateTemplate, {
      rate: new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 3 }).format(ratePercent),
    })
  }

  /**
   * Writes the coefficient of a rate with at least two decimals (20 % gives "1,20", 5.5 % gives "1,055").
   * @param {number} ratePercent - The VAT rate in percent.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The coefficient.
   */
  public static formatCoefficient(ratePercent: number, numberLocale: string): string {
    return new Intl.NumberFormat(numberLocale, { minimumFractionDigits: 2, maximumFractionDigits: 5 }).format(
      VatUtils.rateCoefficient(ratePercent),
    )
  }

  /**
   * Writes the formula applied to one conversion ("1 200 ÷ 1,20 = 1 000 € HT").
   * @param {DibodevVatAmounts} amounts - The computed amounts.
   * @param {DibodevVatDirection} direction - Whether the amount typed is without or with VAT.
   * @param {DibodevVatFormulaTemplates} formulaTemplates - One template per direction.
   * @param {string} numberLocale - Locale of the numbers.
   * @returns {string} The formula.
   */
  public static buildFormulaText(
    amounts: DibodevVatAmounts,
    direction: DibodevVatDirection,
    formulaTemplates: DibodevVatFormulaTemplates,
    numberLocale: string,
  ): string {
    return QuizTextUtils.fillTemplate(formulaTemplates[direction], {
      amountExcludingTax: VatUtils.formatPlainNumber(amounts.amountExcludingTax, numberLocale, 2),
      amountIncludingTax: VatUtils.formatPlainNumber(amounts.amountIncludingTax, numberLocale, 2),
      coefficient: VatUtils.formatCoefficient(amounts.ratePercent, numberLocale),
    })
  }

  /**
   * Writes the filled lines of a quote for the copied summary, one text line each.
   * @param {DibodevVatQuoteLineEntry[]} lineEntries - The lines as typed.
   * @param {DibodevVatQuoteResult} quote - The computed quote.
   * @param {DibodevVatSummaryFormat} format - Templates and locale.
   * @returns {string[]} The text lines, empty quote lines left out.
   */
  public static buildQuoteLineTexts(
    lineEntries: DibodevVatQuoteLineEntry[],
    quote: DibodevVatQuoteResult,
    format: DibodevVatSummaryFormat,
  ): string[] {
    const lineTexts: string[] = []

    quote.lines.forEach((line: DibodevVatQuoteLineResult, lineIndex: number): void => {
      if (!line.hasAmount) {
        return
      }
      const typedLabel: string = lineEntries[lineIndex]?.label.trim() ?? ''

      lineTexts.push(
        QuizTextUtils.fillTemplate(format.wording.quoteLineTemplate, {
          label:
            typedLabel ||
            QuizTextUtils.fillTemplate(format.wording.unnamedLineTemplate, { number: String(lineIndex + 1) }),
          quantity: VatUtils.formatPlainNumber(line.quantity, format.numberLocale, 2),
          unitPrice: VatUtils.formatAmount(line.unitPrice, format.numberLocale),
          amount: VatUtils.formatAmount(line.amountExcludingTax, format.numberLocale),
          rate: VatUtils.formatRate(line.ratePercent, format.rateTemplate, format.numberLocale),
        }),
      )
    })
    return lineTexts
  }

  /**
   * Writes the plain-text summary copied by the visitor: title, quote lines if any, result rows, formula if any.
   * @param {string} title - First line of the summary.
   * @param {string[]} quoteLineTexts - The quote lines, empty for a single amount.
   * @param {DibodevVatResultRow[]} resultRows - The rows of the result panel.
   * @param {string | null} formulaText - The formula, or null for a quote.
   * @param {DibodevVatSummaryFormat} format - Templates and locale.
   * @returns {string} The summary, lines separated by line breaks.
   */
  public static buildSummaryText(
    title: string,
    quoteLineTexts: string[],
    resultRows: DibodevVatResultRow[],
    formulaText: string | null,
    format: DibodevVatSummaryFormat,
  ): string {
    const summaryLines: string[] = [title, '']

    if (quoteLineTexts.length > 0) {
      summaryLines.push(...quoteLineTexts, '')
    }
    summaryLines.push(
      ...resultRows.map((resultRow: DibodevVatResultRow): string =>
        QuizTextUtils.fillTemplate(format.wording.resultRowTemplate, {
          label: resultRow.label,
          amount: VatUtils.formatAmount(resultRow.amount, format.numberLocale),
        }),
      ),
    )
    if (formulaText) {
      summaryLines.push(QuizTextUtils.fillTemplate(format.wording.formulaTemplate, { formula: formulaText }))
    }
    summaryLines.push('', format.wording.footer)
    return summaryLines.join('\n')
  }
}
