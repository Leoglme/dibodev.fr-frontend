import type {
  DibodevProjectSpecificationBlock,
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationFact,
  DibodevProjectSpecificationFeatureLine,
  DibodevProjectSpecificationGoalLine,
  DibodevProjectSpecificationMetaRow,
  DibodevProjectSpecificationPart,
} from '~/core/types/DibodevProjectSpecification'
import { ZipArchiveUtils } from '~/core/utils/ZipArchiveUtils'

export const DOCX_MIME_TYPE: string = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

type DocxParagraphOptions = {
  style?: string
  isBold?: boolean
  isItalic?: boolean
  color?: string
  halfPointSize?: number
  hangingIndent?: boolean
  spacingAfter?: number
}

/** A run is a piece of text with one formatting inside a Word paragraph. */
type DocxRun = {
  text: string
  isBold: boolean
}

const INK_COLOR: string = '141414'
const MUTED_COLOR: string = '66665F'
const FAINT_COLOR: string = '8A8A82'

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

/** Calibri 11 pt for the text, three heading levels, the spacing of a plain office document. */
const STYLES_XML: string =
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
  '<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
  '<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri" w:eastAsia="Calibri"/>' +
  `<w:color w:val="${INK_COLOR}"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="fr-FR"/></w:rPr></w:rPrDefault>` +
  '<w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
  '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>' +
  '<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
  '<w:pPr><w:spacing w:after="160"/></w:pPr><w:rPr><w:b/><w:sz w:val="40"/><w:szCs w:val="40"/></w:rPr></w:style>' +
  '<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
  '<w:pPr><w:keepNext/><w:spacing w:before="360" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr></w:style>' +
  '<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/>' +
  '<w:pPr><w:keepNext/><w:spacing w:before="240" w:after="80"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:style>' +
  '</w:styles>'

/** A4 page with 2 cm margins. */
const SECTION_XML: string =
  '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/>' +
  '<w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr>'

/** Word file written without a library: WordprocessingML parts in an uncompressed ZIP archive. */
export class ProjectSpecificationDocxUtils {
  /**
   * Builds the Word file of a document.
   * @param {DibodevProjectSpecificationDocument} specification - The document to write.
   * @param {string} language - BCP 47 language of the text ("fr-FR"), used for spell checking.
   * @returns {Uint8Array<ArrayBuffer>} The bytes of the .docx file.
   */
  static create(specification: DibodevProjectSpecificationDocument, language: string): Uint8Array<ArrayBuffer> {
    const encoder: TextEncoder = new TextEncoder()
    return ZipArchiveUtils.create([
      { path: '[Content_Types].xml', data: encoder.encode(CONTENT_TYPES_XML) },
      { path: '_rels/.rels', data: encoder.encode(ROOT_RELATIONSHIPS_XML) },
      { path: 'docProps/core.xml', data: encoder.encode(this.corePropertiesXml(specification.title)) },
      { path: 'word/_rels/document.xml.rels', data: encoder.encode(DOCUMENT_RELATIONSHIPS_XML) },
      { path: 'word/styles.xml', data: encoder.encode(STYLES_XML.replace('fr-FR', this.escape(language))) },
      { path: 'word/document.xml', data: encoder.encode(this.documentXml(specification)) },
    ])
  }

  /**
   * Main part of the file: eyebrow, title, meta lines, then the nine parts and the closing line.
   * @param {DibodevProjectSpecificationDocument} specification - The document to write.
   * @returns {string} The `word/document.xml` content.
   */
  private static documentXml(specification: DibodevProjectSpecificationDocument): string {
    const paragraphs: string[] = [
      this.paragraph([{ text: specification.eyebrow.toLocaleUpperCase(), isBold: false }], {
        color: MUTED_COLOR,
        halfPointSize: 18,
        spacingAfter: 80,
      }),
      this.paragraph([{ text: specification.title, isBold: false }], { style: 'Title' }),
      ...specification.metaRows.map((row: DibodevProjectSpecificationMetaRow): string =>
        this.paragraph(
          [
            { text: `${row.label}${specification.labelSeparator}`, isBold: false },
            { text: row.value, isBold: !row.isBlank },
          ],
          { color: row.isBlank ? FAINT_COLOR : undefined, spacingAfter: 40 },
        ),
      ),
      ...specification.parts.flatMap((part: DibodevProjectSpecificationPart): string[] =>
        this.partParagraphs(part, specification.labelSeparator),
      ),
      this.paragraph([{ text: specification.footer, isBold: false }], {
        color: MUTED_COLOR,
        halfPointSize: 18,
        isItalic: true,
      }),
    ]
    return (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' +
      paragraphs.join('') +
      SECTION_XML +
      '</w:body></w:document>'
    )
  }

  /**
   * Paragraphs of one part: its numbered heading, then its blocks (or the step that fills it).
   * @param {DibodevProjectSpecificationPart} part - The part.
   * @param {string} labelSeparator - What joins a label to its value.
   * @returns {string[]} The paragraphs, as XML.
   */
  private static partParagraphs(part: DibodevProjectSpecificationPart, labelSeparator: string): string[] {
    const heading: string = this.paragraph([{ text: `${part.number}. ${part.title}`, isBold: false }], {
      style: 'Heading1',
    })
    if (!part.isFilled) {
      return [
        heading,
        this.paragraph([{ text: part.pendingLabel, isBold: false }], { color: FAINT_COLOR, isItalic: true }),
      ]
    }
    return [
      heading,
      ...part.blocks.flatMap((block: DibodevProjectSpecificationBlock): string[] =>
        this.blockParagraphs(block, labelSeparator),
      ),
    ]
  }

  /**
   * Paragraphs of one block: lists become indented lines with a bullet, a number or a box to tick.
   * @param {DibodevProjectSpecificationBlock} block - The block.
   * @param {string} labelSeparator - What joins a label to its value.
   * @returns {string[]} The paragraphs, as XML.
   */
  private static blockParagraphs(block: DibodevProjectSpecificationBlock, labelSeparator: string): string[] {
    switch (block.type) {
      case 'paragraph':
        return [
          this.paragraph([
            { text: block.emphasis, isBold: true },
            { text: block.text, isBold: false },
          ]),
        ]
      case 'bulletList':
        return block.items.map((item: string): string => this.listParagraph('•', [{ text: item, isBold: false }]))
      case 'checklist':
        return block.items.map((item: string): string => this.listParagraph('☐', [{ text: item, isBold: false }]))
      case 'goalList':
        return block.items.map((goal: DibodevProjectSpecificationGoalLine, index: number): string =>
          this.listParagraph(`${index + 1}.`, [
            { text: `${goal.text}. `, isBold: false },
            { text: `${block.measureLabel}${labelSeparator}${goal.measure}.`, isBold: false },
          ]),
        )
      case 'pageList':
        return [
          ...block.items.map((page: string): string => this.listParagraph('•', [{ text: page, isBold: false }])),
          this.paragraph([{ text: block.note, isBold: false }], { color: MUTED_COLOR, isItalic: true }),
        ]
      case 'featureList':
        return block.items.map((feature: DibodevProjectSpecificationFeatureLine): string =>
          this.listParagraph('•', [
            { text: feature.label, isBold: false },
            { text: ` (${feature.priorityLabel})`, isBold: feature.priority === 'essential' },
          ]),
        )
      case 'factList':
        return block.items.map((fact: DibodevProjectSpecificationFact): string =>
          this.paragraph([
            { text: `${fact.label}${labelSeparator}`, isBold: true },
            { text: fact.value, isBold: false },
          ]),
        )
      case 'blankField':
        return [
          this.paragraph([
            { text: `${block.label}${labelSeparator}`, isBold: true },
            { text: '______________________', isBold: false },
          ]),
        ]
      case 'instruction':
        return [this.paragraph([{ text: block.text, isBold: false }], { color: MUTED_COLOR, isItalic: true })]
    }
  }

  /**
   * A list line: the marker, a tab, then the text, with a hanging indent so wrapped lines stay aligned.
   * @param {string} marker - Bullet, number or box.
   * @param {DocxRun[]} runs - The text of the line.
   * @returns {string} The paragraph, as XML.
   */
  private static listParagraph(marker: string, runs: DocxRun[]): string {
    return this.paragraph([{ text: `${marker}\t`, isBold: false }, ...runs], { hangingIndent: true, spacingAfter: 60 })
  }

  /**
   * One paragraph with its runs.
   * @param {DocxRun[]} runs - The pieces of text, empty ones skipped.
   * @param {DocxParagraphOptions} options - Style, colour, size and spacing.
   * @returns {string} The paragraph, as XML.
   */
  private static paragraph(runs: DocxRun[], options: DocxParagraphOptions = {}): string {
    const paragraphProperties: string[] = []

    if (options.style) {
      paragraphProperties.push(`<w:pStyle w:val="${options.style}"/>`)
    }
    if (options.spacingAfter !== undefined) {
      paragraphProperties.push(`<w:spacing w:after="${options.spacingAfter}"/>`)
    }
    if (options.hangingIndent) {
      paragraphProperties.push('<w:ind w:left="425" w:hanging="425"/>')
    }
    const runXml: string = runs
      .filter((run: DocxRun): boolean => run.text.length > 0)
      .map((run: DocxRun): string => this.run(run, options))
      .join('')
    return `<w:p>${paragraphProperties.length ? `<w:pPr>${paragraphProperties.join('')}</w:pPr>` : ''}${runXml}</w:p>`
  }

  /**
   * One run: the text with its formatting, tabs written as Word tabs.
   * @param {DocxRun} run - The text and whether it is bold.
   * @param {DocxParagraphOptions} options - Colour, size and italic of the paragraph.
   * @returns {string} The run, as XML.
   */
  private static run(run: DocxRun, options: DocxParagraphOptions): string {
    const properties: string[] = []

    if (run.isBold || options.isBold) {
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
    const content: string = run.text
      .split('\t')
      .map((piece: string): string => (piece ? `<w:t xml:space="preserve">${this.escape(piece)}</w:t>` : ''))
      .join('<w:tab/>')
    return `<w:r>${properties.length ? `<w:rPr>${properties.join('')}</w:rPr>` : ''}${content}</w:r>`
  }

  /**
   * Document properties shown by Word (title, author).
   * @param {string} title - The document title.
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
