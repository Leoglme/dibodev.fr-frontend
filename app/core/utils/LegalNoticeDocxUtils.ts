import type {
  DibodevLegalNoticeBlock,
  DibodevLegalNoticeDocument,
  DibodevLegalNoticeSection,
  DibodevLegalNoticeSegment,
} from '~/core/types/DibodevLegalNotice'
import { LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG } from '~/core/constants/legalNotice/pageShared'
import { NBSP } from '~/core/constants/typography'
import { ZipArchiveUtils } from '~/core/utils/ZipArchiveUtils'

type DocxParagraphOptions = {
  style?: string
  color?: string
  halfPointSize?: number
  isItalic?: boolean
  hangingIndent?: boolean
  spacingAfter?: number
  pageBreakBefore?: boolean
}

/** A piece of text with one formatting; placeholders to fill are highlighted in yellow. */
type DocxRun = {
  text: string
  isBold: boolean
  isHighlighted: boolean
}

const INK_COLOR: string = '141414'
const MUTED_COLOR: string = '66665F'

const CONTENT_TYPES_XML: string =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
  '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
  '<Default Extension="xml" ContentType="application/xml"/>' +
  '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
  '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
  '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>' +
  '</Types>'

const ROOT_RELATIONSHIPS_XML: string =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
  '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
  '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>' +
  '</Relationships>'

const DOCUMENT_RELATIONSHIPS_XML: string =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
  '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
  '</Relationships>'

/** Calibri 11 pt, a title and one heading level, French spell checking. */
const STYLES_XML: string =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
  '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri" w:eastAsia="Calibri"/>' +
  `<w:color w:val="${INK_COLOR}"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="${LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG}"/></w:rPr></w:rPrDefault>` +
  '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
  '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>' +
  '<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
  '<w:pPr><w:spacing w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="40"/><w:szCs w:val="40"/></w:rPr></w:style>' +
  '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
  '<w:pPr><w:keepNext/><w:spacing w:before="320" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="26"/><w:szCs w:val="26"/></w:rPr></w:style>' +
  '</w:styles>'

/** A4 page with 2 cm margins. */
const SECTION_XML: string =
  '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>' +
  '<w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr>'

/** Word file of the two documents, written without a library: WordprocessingML parts in an uncompressed ZIP archive. */
export class LegalNoticeDocxUtils {
  /**
   * Builds one Word file with the documents one after the other, each starting on a new page.
   * @param {DibodevLegalNoticeDocument[]} documents - The documents, in order.
   * @returns {Uint8Array<ArrayBuffer>} The bytes of the .docx file.
   */
  static create(documents: DibodevLegalNoticeDocument[]): Uint8Array<ArrayBuffer> {
    const encoder: TextEncoder = new TextEncoder()
    const title: string = documents.map((document: DibodevLegalNoticeDocument): string => document.title).join(' et ')
    return ZipArchiveUtils.create([
      { path: '[Content_Types].xml', data: encoder.encode(CONTENT_TYPES_XML) },
      { path: '_rels/.rels', data: encoder.encode(ROOT_RELATIONSHIPS_XML) },
      { path: 'docProps/core.xml', data: encoder.encode(this.corePropertiesXml(title)) },
      { path: 'word/_rels/document.xml.rels', data: encoder.encode(DOCUMENT_RELATIONSHIPS_XML) },
      { path: 'word/styles.xml', data: encoder.encode(STYLES_XML) },
      { path: 'word/document.xml', data: encoder.encode(this.documentXml(documents)) },
    ])
  }

  /**
   * Main part of the file.
   * @param {DibodevLegalNoticeDocument[]} documents - The documents.
   * @returns {string} The `word/document.xml` content.
   */
  private static documentXml(documents: DibodevLegalNoticeDocument[]): string {
    const paragraphs: string[] = documents.flatMap((document: DibodevLegalNoticeDocument, index: number): string[] => [
      this.paragraph([this.plainRun(document.title)], { style: 'Title', pageBreakBefore: index > 0 }),
      ...(document.updatedLabel
        ? [this.paragraph([this.plainRun(document.updatedLabel)], { color: MUTED_COLOR, spacingAfter: 240 })]
        : []),
      ...document.sections.flatMap((section: DibodevLegalNoticeSection): string[] => [
        this.paragraph([this.plainRun(section.title)], { style: 'Heading1' }),
        ...section.blocks.flatMap((block: DibodevLegalNoticeBlock): string[] => this.blockParagraphs(block)),
      ]),
      this.paragraph([this.plainRun(document.footer)], { color: MUTED_COLOR, halfPointSize: 18, isItalic: true }),
    ])
    return (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
      paragraphs.join('') +
      SECTION_XML +
      '</w:body></w:document>'
    )
  }

  /**
   * Paragraphs of one block: a fact with its label in bold, list items with a bullet and a hanging indent.
   * @param {DibodevLegalNoticeBlock} block - The block.
   * @returns {string[]} The paragraphs, as XML.
   */
  private static blockParagraphs(block: DibodevLegalNoticeBlock): string[] {
    switch (block.type) {
      case 'paragraph':
        return [this.paragraph(this.segmentRuns(block.segments))]
      case 'fact':
        return [
          this.paragraph(
            [
              { text: `${block.label}${NBSP}: `, isBold: true, isHighlighted: false },
              ...this.segmentRuns(block.segments),
            ],
            { spacingAfter: 60 },
          ),
        ]
      case 'list':
        return block.items.map((item: DibodevLegalNoticeSegment[]): string =>
          this.paragraph([this.plainRun('•\t'), ...this.segmentRuns(item)], { hangingIndent: true, spacingAfter: 80 }),
        )
    }
  }

  /**
   * Runs of document segments, the placeholders highlighted.
   * @param {DibodevLegalNoticeSegment[]} segments - The segments.
   * @returns {DocxRun[]} The runs.
   */
  private static segmentRuns(segments: DibodevLegalNoticeSegment[]): DocxRun[] {
    return segments.map(
      (segment: DibodevLegalNoticeSegment): DocxRun => ({
        text: segment.text,
        isBold: false,
        isHighlighted: segment.isMissing,
      }),
    )
  }

  /**
   * A run of plain text.
   * @param {string} text - The text.
   * @returns {DocxRun} The run.
   */
  private static plainRun(text: string): DocxRun {
    return { text, isBold: false, isHighlighted: false }
  }

  /**
   * One paragraph with its runs.
   * @param {DocxRun[]} runs - The pieces of text, empty ones skipped.
   * @param {DocxParagraphOptions} options - Style, colour, size, spacing and page break.
   * @returns {string} The paragraph, as XML.
   */
  private static paragraph(runs: DocxRun[], options: DocxParagraphOptions = {}): string {
    const properties: string[] = []

    if (options.style) {
      properties.push(`<w:pStyle w:val="${options.style}"/>`)
    }
    if (options.pageBreakBefore) {
      properties.push('<w:pageBreakBefore/>')
    }
    if (options.spacingAfter !== undefined) {
      properties.push(`<w:spacing w:after="${options.spacingAfter}"/>`)
    }
    if (options.hangingIndent) {
      properties.push('<w:ind w:left="425" w:hanging="425"/>')
    }
    const runXml: string = runs
      .filter((run: DocxRun): boolean => run.text.length > 0)
      .map((run: DocxRun): string => this.run(run, options))
      .join('')
    return `<w:p>${properties.length ? `<w:pPr>${properties.join('')}</w:pPr>` : ''}${runXml}</w:p>`
  }

  /**
   * One run: the text with its formatting, tabs written as Word tabs.
   * @param {DocxRun} run - The text and its formatting.
   * @param {DocxParagraphOptions} options - Colour, size and italic of the paragraph.
   * @returns {string} The run, as XML.
   */
  private static run(run: DocxRun, options: DocxParagraphOptions): string {
    const properties: string[] = []

    if (run.isBold) {
      properties.push('<w:b/>')
    }
    if (options.isItalic) {
      properties.push('<w:i/>')
    }
    if (options.color) {
      properties.push(`<w:color w:val="${options.color}"/>`)
    }
    if (options.halfPointSize) {
      properties.push(`<w:sz w:val="${options.halfPointSize}"/><w:szCs w:val="${options.halfPointSize}"/>`)
    }
    if (run.isHighlighted) {
      properties.push('<w:highlight w:val="yellow"/>')
    }
    const content: string = run.text
      .split('\t')
      .map((piece: string): string => (piece ? `<w:t xml:space="preserve">${this.escape(piece)}</w:t>` : ''))
      .join('<w:tab/>')
    return `<w:r>${properties.length ? `<w:rPr>${properties.join('')}</w:rPr>` : ''}${content}</w:r>`
  }

  /**
   * Document properties shown by Word (title, author).
   * @param {string} title - The file title.
   * @returns {string} The `docProps/core.xml` content.
   */
  private static corePropertiesXml(title: string): string {
    return (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" ' +
      'xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' +
      `<dc:title>${this.escape(title)}</dc:title><dc:creator>dibodev.fr</dc:creator>` +
      '</cp:coreProperties>'
    )
  }

  /**
   * Escapes the characters XML reserves, and drops the control characters it refuses.
   * @param {string} text - Raw text.
   * @returns {string} Text safe inside an XML element or attribute.
   */
  private static escape(text: string): string {
    return text
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }
}
