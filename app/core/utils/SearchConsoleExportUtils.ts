import type {
  DibodevSearchConsoleDailyRow,
  DibodevSearchConsoleExport,
  DibodevSearchConsoleInputFile,
  DibodevSearchConsolePageFile,
  DibodevSearchConsolePageRow,
  DibodevSearchConsoleReadResult,
} from '~/core/types/DibodevGoogleUpdateImpact'
import type { ZipArchiveEntry } from '~/core/utils/ZipArchiveUtils'
import { ZipArchiveUtils, ZipUnsupportedError } from '~/core/utils/ZipArchiveUtils'

/** What a column of an export holds, read from its header in French, English or Spanish. */
type SearchConsoleColumnMeasure = 'date' | 'clicks' | 'impressions' | 'ignored' | 'label'

/** `previous` for the second period of an export in comparison mode. */
type SearchConsoleColumnPeriod = 'current' | 'previous'

type SearchConsoleColumn = {
  index: number
  measure: SearchConsoleColumnMeasure
  period: SearchConsoleColumnPeriod
}

const CSV_FILE_EXTENSION: string = '.csv'
/** Words of a header that mark the second period of a comparison ("Clics (28 jours précédents)", "Previous 3 months Clicks"). */
const PREVIOUS_PERIOD_WORDS: string[] = ['previous', 'precedent', 'anterior', 'prior', 'avant', 'before']
const DIFFERENCE_WORDS: string[] = ['diff', 'diferencia', 'ecart', 'change', 'variation', 'variacion']
const DATE_WORDS: string[] = ['date', 'fecha']
const CLICK_WORDS: string[] = ['click', 'clic']
const IMPRESSION_WORDS: string[] = ['impression', 'impresion']
const OTHER_MEASURE_WORDS: string[] = ['ctr', 'position', 'posicion']
const ISO_DATE_REGEX: RegExp = /^(\d{4})-(\d{2})-(\d{2})$/
const DAY_FIRST_DATE_REGEX: RegExp = /^(\d{1,2})[/.](\d{1,2})[/.](\d{4})$/
const PAGE_VALUE_REGEX: RegExp = /^(https?:\/\/|\/)/i
const SPACES_REGEX: RegExp = /[\s  ]/g

/** Reads the files exported from the Performance report of Google Search Console, entirely in the browser. */
export class SearchConsoleExportUtils {
  /**
   * Reads the zip exported by Search Console, or its CSV files, and merges what they hold.
   * @param {DibodevSearchConsoleInputFile[]} files - The files given by the visitor.
   * @returns {Promise<DibodevSearchConsoleReadResult>} The dates and pages read, or why nothing could be read.
   */
  static async read(files: DibodevSearchConsoleInputFile[]): Promise<DibodevSearchConsoleReadResult> {
    const csvTexts: string[] = []

    for (const file of files) {
      if (ZipArchiveUtils.isZip(file.bytes)) {
        try {
          const csvFiles: ZipArchiveEntry[] = await ZipArchiveUtils.readFiles(file.bytes, CSV_FILE_EXTENSION)
          csvTexts.push(...csvFiles.map((csvFile: ZipArchiveEntry): string => this.decodeText(csvFile.data)))
        } catch (error: unknown) {
          return { isRead: false, errorKind: error instanceof ZipUnsupportedError ? 'zipUnsupported' : 'zipUnreadable' }
        }
      } else {
        csvTexts.push(this.decodeText(file.bytes))
      }
    }
    return this.readCsvTexts(csvTexts)
  }

  /**
   * Recognizes each CSV text by its headers and merges the dates and the pages found.
   * @param {string[]} csvTexts - The contents of the CSV files.
   * @returns {DibodevSearchConsoleReadResult} The dates and pages read, or `noRecognizedFile`.
   */
  static readCsvTexts(csvTexts: string[]): DibodevSearchConsoleReadResult {
    const dailyByDate: Map<string, DibodevSearchConsoleDailyRow> = new Map()
    const pageRows: DibodevSearchConsolePageRow[] = []
    let hasPageComparison: boolean = false
    let recognizedFileCount: number = 0

    for (const text of csvTexts) {
      const table: string[][] = this.parseCsv(text)
      const header: string[] | undefined = table[0]

      if (!header || table.length < 2) {
        continue
      }
      const columns: SearchConsoleColumn[] = header.map(
        (cell: string, index: number): SearchConsoleColumn => this.classifyColumn(cell, index),
      )
      const bodyRows: string[][] = table.slice(1)

      if (columns.some((column: SearchConsoleColumn): boolean => column.measure === 'date')) {
        const dailyRows: DibodevSearchConsoleDailyRow[] = this.readDailyRows(columns, bodyRows)

        if (dailyRows.length > 0) {
          recognizedFileCount++
          for (const row of dailyRows) {
            dailyByDate.set(row.date, row)
          }
        }
        continue
      }
      const pageFile: DibodevSearchConsolePageFile | null = this.readPageRows(columns, bodyRows)

      if (pageFile) {
        recognizedFileCount++
        pageRows.push(...pageFile.rows)
        hasPageComparison = hasPageComparison || pageFile.isComparison
      }
    }

    if (recognizedFileCount === 0) {
      return { isRead: false, errorKind: 'noRecognizedFile' }
    }
    const searchConsoleExport: DibodevSearchConsoleExport = {
      dailyRows: [...dailyByDate.values()].sort(
        (first: DibodevSearchConsoleDailyRow, second: DibodevSearchConsoleDailyRow): number =>
          first.date.localeCompare(second.date),
      ),
      pageRows,
      hasPageComparison,
      recognizedFileCount,
    }
    return { isRead: true, searchConsoleExport }
  }

  /**
   * Turns a number written by Search Console in any language into a number: « 1 234 », « 12,3 », « 3,47 % », "1,234".
   * @param {string} text - The cell.
   * @param {boolean} isWholeNumber - True for clicks and impressions, where a group of three digits after a separator is a thousands group.
   * @returns {number | null} The number, or null when the cell holds none.
   */
  static parseLocalizedNumber(text: string, isWholeNumber: boolean): number | null {
    const compact: string = text.replace(SPACES_REGEX, '').replace('%', '')

    if (compact === '' || compact === '-') {
      return null
    }
    let normalized: string = compact
    const lastComma: number = compact.lastIndexOf(',')
    const lastDot: number = compact.lastIndexOf('.')

    if (lastComma !== -1 && lastDot !== -1) {
      const decimalSeparator: string = lastComma > lastDot ? ',' : '.'
      const thousandsSeparator: string = decimalSeparator === ',' ? '.' : ','
      normalized = compact.split(thousandsSeparator).join('').replace(decimalSeparator, '.')
    } else if (lastComma !== -1 || lastDot !== -1) {
      const separator: string = lastComma !== -1 ? ',' : '.'
      const isThousandsGroup: boolean = isWholeNumber && new RegExp(`^-?\\d{1,3}(\\${separator}\\d{3})+$`).test(compact)
      normalized = isThousandsGroup ? compact.split(separator).join('') : compact.replace(separator, '.')
    }
    const value: number = Number(normalized)

    return Number.isFinite(value) ? value : null
  }

  /**
   * Reads a date written by Search Console (2026-11-10, or 10/11/2026 day first).
   * @param {string} text - The cell.
   * @returns {string | null} The date as YYYY-MM-DD, or null.
   */
  static parseDate(text: string): string | null {
    const value: string = text.trim()

    if (ISO_DATE_REGEX.test(value)) {
      return value
    }
    const dayFirst: RegExpExecArray | null = DAY_FIRST_DATE_REGEX.exec(value)

    if (!dayFirst) {
      return null
    }
    const [, day, month, year] = dayFirst

    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  /**
   * Splits a CSV text into rows of cells: comma, semicolon or tab, quoted cells, doubled quotes, line breaks inside quotes.
   * @param {string} text - The CSV text.
   * @returns {string[][]} The rows, empty lines left out.
   */
  static parseCsv(text: string): string[][] {
    const content: string = text.replace(/^﻿/, '')
    const delimiter: string = this.detectDelimiter(content.split(/\r?\n/, 1)[0] ?? '')
    const rows: string[][] = []
    let row: string[] = []
    let cell: string = ''
    let isQuoted: boolean = false

    for (let index: number = 0; index < content.length; index++) {
      const character: string = content.charAt(index)

      if (isQuoted) {
        if (character === '"' && content.charAt(index + 1) === '"') {
          cell += '"'
          index++
        } else if (character === '"') {
          isQuoted = false
        } else {
          cell += character
        }
      } else if (character === '"') {
        isQuoted = true
      } else if (character === delimiter) {
        row.push(cell)
        cell = ''
      } else if (character === '\n' || character === '\r') {
        if (character === '\r' && content.charAt(index + 1) === '\n') {
          index++
        }
        row.push(cell)
        rows.push(row)
        row = []
        cell = ''
      } else {
        cell += character
      }
    }
    row.push(cell)
    rows.push(row)
    return rows.filter((cells: string[]): boolean => cells.some((value: string): boolean => value.trim() !== ''))
  }

  /**
   * Picks the separator of a CSV file from its header line, quoted parts left aside.
   * @param {string} headerLine - The first line.
   * @returns {string} A comma, a semicolon or a tab.
   */
  private static detectDelimiter(headerLine: string): string {
    const unquoted: string = headerLine.replace(/"[^"]*"/g, '')
    const counts: [string, number][] = [',', ';', '\t'].map((delimiter: string): [string, number] => [
      delimiter,
      unquoted.split(delimiter).length - 1,
    ])
    counts.sort((first: [string, number], second: [string, number]): number => second[1] - first[1])
    return counts[0]?.[1] ? counts[0][0] : ','
  }

  /**
   * Lowercases a header and removes its accents, so the three languages compare the same way.
   * @param {string} header - The header cell.
   * @returns {string} The normalized header.
   */
  private static normalizeHeader(header: string): string {
    return header.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
  }

  /**
   * Tells what a column holds and for which period, from its header.
   * @param {string} header - The header cell.
   * @param {number} index - The column position.
   * @returns {SearchConsoleColumn} The column.
   */
  private static classifyColumn(header: string, index: number): SearchConsoleColumn {
    const normalized: string = this.normalizeHeader(header)
    const hasWord: (words: string[]) => boolean = (words: string[]): boolean =>
      words.some((word: string): boolean => normalized.includes(word))
    const period: SearchConsoleColumnPeriod = hasWord(PREVIOUS_PERIOD_WORDS) ? 'previous' : 'current'
    let measure: SearchConsoleColumnMeasure = 'label'

    if (hasWord(DIFFERENCE_WORDS) || hasWord(OTHER_MEASURE_WORDS)) {
      measure = 'ignored'
    } else if (hasWord(CLICK_WORDS)) {
      measure = 'clicks'
    } else if (hasWord(IMPRESSION_WORDS)) {
      measure = 'impressions'
    } else if (hasWord(DATE_WORDS)) {
      measure = 'date'
    }
    return { index, measure, period }
  }

  /**
   * Finds the column of a measure for a period.
   * @param {SearchConsoleColumn[]} columns - The columns of the file.
   * @param {SearchConsoleColumnMeasure} measure - The measure wanted.
   * @param {SearchConsoleColumnPeriod} period - The period wanted.
   * @returns {SearchConsoleColumn | null} The column, or null.
   */
  private static findColumn(
    columns: SearchConsoleColumn[],
    measure: SearchConsoleColumnMeasure,
    period: SearchConsoleColumnPeriod,
  ): SearchConsoleColumn | null {
    return (
      columns.find((column: SearchConsoleColumn): boolean => column.measure === measure && column.period === period) ??
      null
    )
  }

  /**
   * Reads a whole number in a cell of a row, zero when the cell is empty.
   * @param {string[]} cells - The row.
   * @param {SearchConsoleColumn | null} column - The column, or null when the file has none.
   * @returns {number} The number.
   */
  private static wholeNumberAt(cells: string[], column: SearchConsoleColumn | null): number {
    return column ? (this.parseLocalizedNumber(cells[column.index] ?? '', true) ?? 0) : 0
  }

  /**
   * Reads the days of a « Dates » file, both periods when it compares two.
   * @param {SearchConsoleColumn[]} columns - The columns of the file.
   * @param {string[][]} bodyRows - The rows under the header.
   * @returns {DibodevSearchConsoleDailyRow[]} The days read.
   */
  private static readDailyRows(columns: SearchConsoleColumn[], bodyRows: string[][]): DibodevSearchConsoleDailyRow[] {
    const dailyRows: DibodevSearchConsoleDailyRow[] = []
    const periods: SearchConsoleColumnPeriod[] = ['previous', 'current']

    for (const period of periods) {
      const dateColumn: SearchConsoleColumn | null = this.findColumn(columns, 'date', period)
      const clicksColumn: SearchConsoleColumn | null = this.findColumn(columns, 'clicks', period)
      const impressionsColumn: SearchConsoleColumn | null = this.findColumn(columns, 'impressions', period)

      if (!dateColumn || (!clicksColumn && !impressionsColumn)) {
        continue
      }
      for (const cells of bodyRows) {
        const date: string | null = this.parseDate(cells[dateColumn.index] ?? '')

        if (date) {
          dailyRows.push({
            date,
            clicks: this.wholeNumberAt(cells, clicksColumn),
            impressions: this.wholeNumberAt(cells, impressionsColumn),
          })
        }
      }
    }
    return dailyRows
  }

  /**
   * Reads a « Pages » file: the first column holds links, and two columns per measure when two periods are compared.
   * @param {SearchConsoleColumn[]} columns - The columns of the file.
   * @param {string[][]} bodyRows - The rows under the header.
   * @returns {DibodevSearchConsolePageFile | null} The pages, or null when the file is not a « Pages » file.
   */
  private static readPageRows(
    columns: SearchConsoleColumn[],
    bodyRows: string[][],
  ): DibodevSearchConsolePageFile | null {
    const labelColumn: SearchConsoleColumn | undefined = columns[0]
    const hasPageLinks: boolean = bodyRows.some((cells: string[]): boolean =>
      PAGE_VALUE_REGEX.test((cells[0] ?? '').trim()),
    )
    const clicksColumn: SearchConsoleColumn | null = this.findColumn(columns, 'clicks', 'current')
    const impressionsColumn: SearchConsoleColumn | null = this.findColumn(columns, 'impressions', 'current')

    if (labelColumn?.measure !== 'label' || !hasPageLinks || (!clicksColumn && !impressionsColumn)) {
      return null
    }
    const previousClicksColumn: SearchConsoleColumn | null = this.findColumn(columns, 'clicks', 'previous')
    const previousImpressionsColumn: SearchConsoleColumn | null = this.findColumn(columns, 'impressions', 'previous')
    const isComparison: boolean = previousClicksColumn !== null || previousImpressionsColumn !== null
    const rows: DibodevSearchConsolePageRow[] = bodyRows
      .filter((cells: string[]): boolean => PAGE_VALUE_REGEX.test((cells[0] ?? '').trim()))
      .map(
        (cells: string[]): DibodevSearchConsolePageRow => ({
          page: (cells[0] ?? '').trim(),
          clicksCurrent: this.wholeNumberAt(cells, clicksColumn),
          clicksPrevious: isComparison ? this.wholeNumberAt(cells, previousClicksColumn) : null,
          impressionsCurrent: this.wholeNumberAt(cells, impressionsColumn),
          impressionsPrevious: isComparison ? this.wholeNumberAt(cells, previousImpressionsColumn) : null,
        }),
      )
    return { rows, isComparison }
  }

  /**
   * Decodes a CSV file: UTF-8 first, Windows-1252 when the bytes are not valid UTF-8.
   * @param {Uint8Array} bytes - The file bytes.
   * @returns {string} The text.
   */
  private static decodeText(bytes: Uint8Array): string {
    try {
      return new TextDecoder('utf-8', { fatal: true }).decode(bytes)
    } catch {
      return new TextDecoder('windows-1252').decode(bytes)
    }
  }
}
