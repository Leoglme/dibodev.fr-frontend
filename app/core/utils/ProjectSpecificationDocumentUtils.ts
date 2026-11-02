import type {
  DibodevProjectSpecificationAnswers,
  DibodevProjectSpecificationBlock,
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationDocumentOption,
  DibodevProjectSpecificationFact,
  DibodevProjectSpecificationFeatureLine,
  DibodevProjectSpecificationFeatureOption,
  DibodevProjectSpecificationGoalLine,
  DibodevProjectSpecificationGoalOption,
  DibodevProjectSpecificationKind,
  DibodevProjectSpecificationMetaRow,
  DibodevProjectSpecificationOption,
  DibodevProjectSpecificationPageOption,
  DibodevProjectSpecificationPart,
  DibodevProjectSpecificationPartId,
  DibodevProjectSpecificationPlaceholders,
  DibodevProjectSpecificationProjectType,
  DibodevProjectSpecificationStep,
  DibodevProjectSpecificationTileOption,
  DibodevProjectSpecificationTypeWording,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'

const PART_STEPS_IN_READING_ORDER: [DibodevProjectSpecificationPartId, DibodevProjectSpecificationStep][] = [
  ['company', 2],
  ['project', 1],
  ['goals', 3],
  ['pages', 1],
  ['features', 1],
  ['content', 4],
  ['constraints', 1],
  ['budget', 5],
  ['answers', 1],
]

export const PROJECT_SPECIFICATION_MAX_GOALS: number = 3

const FILE_NAME_FORBIDDEN_CHARACTERS: RegExp = /[\\/:*?"<>|]/g

const FILE_NAME_MAX_LENGTH: number = 120
const FRENCH_ELISION_FIRST_LETTER: RegExp = /^[aeiouyàâäéèêëîïôöùûüÿæœ]/i

/** One document for the same answers: the preview, the Word file, the PDF and the e-mail to Léo all read it. */
export class ProjectSpecificationDocumentUtils {
  /**
   * Answers of a fresh generator: the project type chosen, a creation, its default features and nothing else.
   * @param {DibodevProjectSpecificationProjectType} projectType - The project type to start with.
   * @param {DibodevProjectSpecificationWording} wording - The generator texts of the page language.
   * @returns {DibodevProjectSpecificationAnswers} The starting answers.
   */
  static createDefaultAnswers(
    projectType: DibodevProjectSpecificationProjectType,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationAnswers {
    return {
      projectType,
      kind: 'creation',
      companyName: '',
      activity: '',
      city: '',
      companySize: null,
      goals: [],
      audience: null,
      features: this.defaultFeatureIds(wording.types[projectType]),
      contentSource: null,
      budget: null,
      launchDate: null,
    }
  }

  /**
   * Switches the project type: its goals, audience, features and content start again, the rest is kept.
   * @param {DibodevProjectSpecificationAnswers} answers - The current answers.
   * @param {DibodevProjectSpecificationProjectType} projectType - The new project type.
   * @param {DibodevProjectSpecificationWording} wording - The generator texts of the page language.
   * @returns {DibodevProjectSpecificationAnswers} The answers for the new type.
   */
  static withProjectType(
    answers: DibodevProjectSpecificationAnswers,
    projectType: DibodevProjectSpecificationProjectType,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationAnswers {
    if (answers.projectType === projectType) {
      return answers
    }
    return {
      ...answers,
      projectType,
      goals: [],
      audience: null,
      features: this.defaultFeatureIds(wording.types[projectType]),
      contentSource: null,
    }
  }

  /**
   * Adds or removes an option id, refusing to go past `maxCount`.
   * @param {string[]} selectedIds - The ids already chosen.
   * @param {string} optionId - The id clicked.
   * @param {number | null} maxCount - The most ids allowed, null for no limit.
   * @returns {string[]} The new list (a copy).
   */
  static toggleOption(selectedIds: string[], optionId: string, maxCount: number | null): string[] {
    if (selectedIds.includes(optionId)) {
      return selectedIds.filter((selectedId: string): boolean => selectedId !== optionId)
    }
    if (maxCount !== null && selectedIds.length >= maxCount) {
      return selectedIds
    }
    return [...selectedIds, optionId]
  }

  /**
   * Writes the document from the answers: a part waiting for its step has no blocks and says which step fills it.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @param {string} dateLabel - Today, already formatted ("2 novembre 2026"), empty before the page is mounted.
   * @returns {DibodevProjectSpecificationDocument} The document.
   */
  static build(
    answers: DibodevProjectSpecificationAnswers,
    wording: DibodevProjectSpecificationWording,
    dateLabel: string,
  ): DibodevProjectSpecificationDocument {
    const typeWording: DibodevProjectSpecificationTypeWording = wording.types[answers.projectType]
    const placeholders: DibodevProjectSpecificationPlaceholders = this.placeholdersOf(answers, wording)
    const companyName: string = answers.companyName.trim()
    const city: string = answers.city.trim()
    const blocksByPart: Record<DibodevProjectSpecificationPartId, DibodevProjectSpecificationBlock[]> = {
      company: this.companyBlocks(answers, wording),
      project: this.projectBlocks(answers.kind, typeWording, wording),
      goals: this.goalBlocks(answers, typeWording, wording, placeholders),
      pages: this.pageBlocks(answers.features, typeWording),
      features: this.featureBlocks(answers.features, typeWording, wording),
      content: this.contentBlocks(answers, typeWording, placeholders),
      constraints: [
        {
          type: 'bulletList',
          items: typeWording.constraints.map((line: string): string => this.fill(line, placeholders)),
        },
      ],
      budget: this.budgetBlocks(answers, wording),
      answers: this.answerBlocks(typeWording, wording, placeholders),
    }
    const parts: DibodevProjectSpecificationPart[] = PART_STEPS_IN_READING_ORDER.map(
      (
        [partId, step]: [DibodevProjectSpecificationPartId, DibodevProjectSpecificationStep],
        index: number,
      ): DibodevProjectSpecificationPart => ({
        id: partId,
        number: index + 1,
        title: this.partTitle(partId, typeWording, wording),
        isFilled: blocksByPart[partId].length > 0,
        pendingLabel: wording.document.pendingLabel.replace('{step}', String(step)),
        blocks: blocksByPart[partId],
      }),
    )

    return {
      labelSeparator: wording.document.labelSeparator,
      eyebrow: `${wording.document.eyebrow} · ${typeWording.label}`,
      title: companyName
        ? this.fill(typeWording.titles[answers.kind], placeholders)
        : wording.document.titlePlaceholder.replace('{type}', typeWording.label),
      isTitlePlaceholder: !companyName,
      metaRows: [
        {
          label: wording.document.companyLabel,
          value: companyName ? [companyName, city].filter(Boolean).join(', ') : wording.document.blank,
          isBlank: !companyName,
        },
        {
          label: wording.document.versionLabel,
          value: dateLabel ? wording.document.versionValue.replace('{date}', dateLabel) : '1',
          isBlank: false,
        },
      ],
      tocTitle: wording.document.tocTitle,
      parts,
      footer: wording.document.footer,
      filledPartCount: parts.filter((part: DibodevProjectSpecificationPart): boolean => part.isFilled).length,
      fileBaseName: this.fileNameOf(`${wording.document.fileBaseName} - ${companyName || typeWording.label}`),
    }
  }

  /**
   * Writes the blank template of a project type: each part carries its writing instruction and the usual choices.
   * @param {DibodevProjectSpecificationProjectType} projectType - The project type of the template.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the template language.
   * @param {string} dateLabel - The date written in the version line, or a blank to fill in.
   * @returns {DibodevProjectSpecificationDocument} The template.
   */
  static buildTemplate(
    projectType: DibodevProjectSpecificationProjectType,
    wording: DibodevProjectSpecificationWording,
    dateLabel: string,
  ): DibodevProjectSpecificationDocument {
    const typeWording: DibodevProjectSpecificationTypeWording = wording.types[projectType]
    const placeholderName: string = wording.document.templateCompanyPlaceholder
    const placeholders: DibodevProjectSpecificationPlaceholders = {
      name: placeholderName,
      city: wording.document.defaultCity,
      zone: wording.document.defaultZone,
      elidesBeforeVowel: wording.document.elidesBeforeVowel,
    }
    const instructions: Record<DibodevProjectSpecificationPartId, string> = wording.document.templateInstructions
    const blocksByPart: Record<DibodevProjectSpecificationPartId, DibodevProjectSpecificationBlock[]> = {
      company: [{ type: 'instruction', text: instructions.company }],
      project: [
        { type: 'instruction', text: instructions.project },
        {
          type: 'checklist',
          items: wording.kinds.map(
            (kind: DibodevProjectSpecificationOption<DibodevProjectSpecificationKind>): string => kind.label,
          ),
        },
      ],
      goals: [
        { type: 'instruction', text: instructions.goals },
        {
          type: 'checklist',
          items: typeWording.goals.map((goal: DibodevProjectSpecificationGoalOption): string => goal.label),
        },
      ],
      pages: [
        { type: 'instruction', text: instructions.pages },
        {
          type: 'checklist',
          items: typeWording.pages.map((page: DibodevProjectSpecificationPageOption): string => page.label),
        },
      ],
      features: [
        { type: 'instruction', text: instructions.features },
        {
          type: 'checklist',
          items: typeWording.features.map((feature: DibodevProjectSpecificationFeatureOption): string => feature.label),
        },
      ],
      content: [
        { type: 'instruction', text: instructions.content },
        {
          type: 'checklist',
          items: typeWording.contentSources.map(
            (source: DibodevProjectSpecificationDocumentOption<string>): string => source.label,
          ),
        },
      ],
      constraints: [
        { type: 'instruction', text: instructions.constraints },
        {
          type: 'bulletList',
          items: typeWording.constraints.map((line: string): string => this.fill(line, placeholders)),
        },
      ],
      budget: [
        { type: 'instruction', text: instructions.budget },
        { type: 'blankField', label: wording.document.budgetLabel, placeholder: wording.document.blank },
        { type: 'blankField', label: wording.document.launchDateLabel, placeholder: wording.document.blank },
        {
          type: 'factList',
          items: [{ label: wording.document.maintenanceLabel, value: wording.document.maintenanceText }],
        },
      ],
      answers: [
        { type: 'instruction', text: instructions.answers },
        ...this.answerBlocks(typeWording, wording, placeholders),
      ],
    }
    const parts: DibodevProjectSpecificationPart[] = PART_STEPS_IN_READING_ORDER.map(
      (
        [partId]: [DibodevProjectSpecificationPartId, DibodevProjectSpecificationStep],
        index: number,
      ): DibodevProjectSpecificationPart => ({
        id: partId,
        number: index + 1,
        title: this.partTitle(partId, typeWording, wording),
        isFilled: true,
        pendingLabel: '',
        blocks: blocksByPart[partId],
      }),
    )

    return {
      labelSeparator: wording.document.labelSeparator,
      eyebrow: `${wording.document.eyebrow} · ${typeWording.label}`,
      title: this.fill(typeWording.titles.creation, placeholders),
      isTitlePlaceholder: false,
      metaRows: [
        { label: wording.document.companyLabel, value: placeholderName, isBlank: true },
        {
          label: wording.document.versionLabel,
          value: wording.document.versionValue.replace('{date}', dateLabel),
          isBlank: false,
        },
      ],
      tocTitle: wording.document.tocTitle,
      parts,
      footer: wording.document.footer,
      filledPartCount: parts.length,
      fileBaseName: this.fileNameOf(`${wording.document.fileBaseName} - ${typeWording.label}`),
    }
  }

  /**
   * Plain text of the document, for the e-mail sent to Léo: one line per paragraph or list item.
   * @param {DibodevProjectSpecificationDocument} specification - The document to write out.
   * @returns {string} The text, parts separated by a blank line.
   */
  static toPlainText(specification: DibodevProjectSpecificationDocument): string {
    const header: string[] = [
      specification.eyebrow,
      specification.title,
      ...specification.metaRows.map(
        (row: DibodevProjectSpecificationMetaRow): string => `${row.label}${specification.labelSeparator}${row.value}`,
      ),
    ]
    const parts: string[] = specification.parts.map((part: DibodevProjectSpecificationPart): string => {
      const lines: string[] = part.isFilled
        ? part.blocks.flatMap((block: DibodevProjectSpecificationBlock): string[] =>
            this.blockLines(block, specification.labelSeparator),
          )
        : [`(${part.pendingLabel})`]
      return [`${part.number}. ${part.title}`, ...lines].join('\n')
    })
    return [header.join('\n'), ...parts].join('\n\n')
  }

  /**
   * Lines of one block in the plain text version.
   * @param {DibodevProjectSpecificationBlock} block - The block to write out.
   * @param {string} labelSeparator - What joins a label to its value.
   * @returns {string[]} Its lines.
   */
  static blockLines(block: DibodevProjectSpecificationBlock, labelSeparator: string): string[] {
    switch (block.type) {
      case 'paragraph':
        return [`${block.emphasis}${block.text}`]
      case 'bulletList':
      case 'checklist':
        return block.items.map((item: string): string => `- ${item}`)
      case 'goalList':
        return block.items.map(
          (goal: DibodevProjectSpecificationGoalLine, index: number): string =>
            `${index + 1}. ${goal.text}. ${block.measureLabel}${labelSeparator}${goal.measure}.`,
        )
      case 'pageList':
        return [...block.items.map((page: string): string => `- ${page}`), block.note]
      case 'featureList':
        return block.items.map(
          (feature: DibodevProjectSpecificationFeatureLine): string => `- ${feature.label} (${feature.priorityLabel})`,
        )
      case 'factList':
        return block.items.map(
          (fact: DibodevProjectSpecificationFact): string => `${fact.label}${labelSeparator}${fact.value}`,
        )
      case 'blankField':
        return [`${block.label}${labelSeparator}${block.placeholder}`]
      case 'instruction':
        return [block.text]
    }
  }

  /**
   * Ids of the features ticked when a project type is chosen.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @returns {string[]} The default feature ids.
   */
  private static defaultFeatureIds(typeWording: DibodevProjectSpecificationTypeWording): string[] {
    return typeWording.features
      .filter((feature: DibodevProjectSpecificationFeatureOption): boolean => feature.isDefault)
      .map((feature: DibodevProjectSpecificationFeatureOption): string => feature.id)
  }

  /**
   * Values of `{name}`, `{city}` and `{zone}` for the given answers, generic ones when a field is empty.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {DibodevProjectSpecificationPlaceholders} The values.
   */
  private static placeholdersOf(
    answers: DibodevProjectSpecificationAnswers,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationPlaceholders {
    const city: string = answers.city.trim()
    return {
      name: answers.companyName.trim() || wording.document.defaultCompanyName,
      city: city || wording.document.defaultCity,
      zone: city ? wording.document.zoneWithCity.replace('{city}', city) : wording.document.defaultZone,
      elidesBeforeVowel: wording.document.elidesBeforeVowel,
    }
  }

  /**
   * Replaces `{name}`, `{city}` and `{zone}`, French « de » eliding before a vowel (« vitrine d’Atelier Dupont »).
   * @param {string} text - The sentence with placeholders.
   * @param {DibodevProjectSpecificationPlaceholders} placeholders - The values.
   * @returns {string} The sentence.
   */
  private static fill(text: string, placeholders: DibodevProjectSpecificationPlaceholders): string {
    let elidedText: string = text

    if (placeholders.elidesBeforeVowel) {
      for (const key of ['name', 'city', 'zone'] as const) {
        if (FRENCH_ELISION_FIRST_LETTER.test(placeholders[key])) {
          elidedText = elidedText.replace(new RegExp(`(^|\\s)de \\{${key}\\}`, 'g'), `$1d’{${key}}`)
        }
      }
    }
    return elidedText
      .replace(/\{name\}/g, placeholders.name)
      .replace(/\{city\}/g, placeholders.city)
      .replace(/\{zone\}/g, placeholders.zone)
  }

  /**
   * Turns what the visitor typed into a sentence: capital first letter, final full stop.
   * @param {string} text - The text typed.
   * @returns {string} The sentence, empty when nothing was typed.
   */
  private static toSentence(text: string): string {
    const trimmed: string = text.trim()

    if (!trimmed) {
      return ''
    }
    const capitalized: string = trimmed.charAt(0).toLocaleUpperCase() + trimmed.slice(1)
    return /[.!?…]$/.test(capitalized) ? capitalized : `${capitalized}.`
  }

  /**
   * Title of a part: the pages and the content parts are named by the project type ("Les écrans", "Données à reprendre").
   * @param {DibodevProjectSpecificationPartId} partId - The part.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {string} The title.
   */
  private static partTitle(
    partId: DibodevProjectSpecificationPartId,
    typeWording: DibodevProjectSpecificationTypeWording,
    wording: DibodevProjectSpecificationWording,
  ): string {
    if (partId === 'pages') {
      return typeWording.pagesPartTitle
    }
    if (partId === 'content') {
      return typeWording.contentPartTitle
    }
    return wording.document.partTitles[partId]
  }

  /**
   * Part 1: the company, once its name is typed.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks, empty without a name.
   */
  private static companyBlocks(
    answers: DibodevProjectSpecificationAnswers,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationBlock[] {
    const companyName: string = answers.companyName.trim()

    if (!companyName) {
      return []
    }
    const city: string = answers.city.trim()
    const blocks: DibodevProjectSpecificationBlock[] = [
      {
        type: 'paragraph',
        emphasis: companyName,
        text: city ? wording.document.companyCityText.replace('{city}', city) : '.',
      },
    ]
    const activity: string = this.toSentence(answers.activity)

    if (activity) {
      blocks.push({ type: 'paragraph', emphasis: '', text: activity })
    }
    const size: DibodevProjectSpecificationTileOption<string> | undefined = wording.sizes.find(
      (option: DibodevProjectSpecificationTileOption<string>): boolean => option.id === answers.companySize,
    )

    if (size) {
      blocks.push({
        type: 'paragraph',
        emphasis: '',
        text: `${wording.document.teamLabel}${wording.document.labelSeparator}${size.documentText}.`,
      })
    }
    return blocks
  }

  /**
   * Part 2: creation or redesign, and the kind of project.
   * @param {DibodevProjectSpecificationKind} kind - Creation or redesign.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks.
   */
  private static projectBlocks(
    kind: DibodevProjectSpecificationKind,
    typeWording: DibodevProjectSpecificationTypeWording,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationBlock[] {
    return [
      { type: 'paragraph', emphasis: '', text: typeWording.projectTexts[kind] },
      {
        type: 'paragraph',
        emphasis: '',
        text: `${wording.document.projectTypeLabel}${wording.document.labelSeparator}${typeWording.label.toLocaleLowerCase()}.`,
      },
    ]
  }

  /**
   * Part 3: the goals with their measure, and who the site or the tool is for.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @param {DibodevProjectSpecificationPlaceholders} placeholders - Name, city and zone.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks, empty without a goal.
   */
  private static goalBlocks(
    answers: DibodevProjectSpecificationAnswers,
    typeWording: DibodevProjectSpecificationTypeWording,
    wording: DibodevProjectSpecificationWording,
    placeholders: DibodevProjectSpecificationPlaceholders,
  ): DibodevProjectSpecificationBlock[] {
    const goals: DibodevProjectSpecificationGoalLine[] = typeWording.goals
      .filter((goal: DibodevProjectSpecificationGoalOption): boolean => answers.goals.includes(goal.id))
      .map(
        (goal: DibodevProjectSpecificationGoalOption): DibodevProjectSpecificationGoalLine => ({
          text: this.fill(goal.documentText, placeholders),
          measure: goal.measure,
        }),
      )

    if (!goals.length) {
      return []
    }
    const blocks: DibodevProjectSpecificationBlock[] = [
      { type: 'goalList', measureLabel: wording.document.measureLabel, items: goals },
    ]
    const audience: DibodevProjectSpecificationDocumentOption<string> | undefined = typeWording.audiences.find(
      (option: DibodevProjectSpecificationDocumentOption<string>): boolean => option.id === answers.audience,
    )

    if (audience) {
      blocks.push({
        type: 'paragraph',
        emphasis: '',
        text: `${typeWording.audienceDocumentLabel}${wording.document.labelSeparator}${this.fill(audience.documentText, placeholders)}.`,
      })
    }
    return blocks
  }

  /**
   * Part 4: the pages or screens, those of the chosen features included.
   * @param {string[]} featureIds - The features chosen.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks.
   */
  private static pageBlocks(
    featureIds: string[],
    typeWording: DibodevProjectSpecificationTypeWording,
  ): DibodevProjectSpecificationBlock[] {
    const pages: string[] = typeWording.pages
      .filter(
        (page: DibodevProjectSpecificationPageOption): boolean =>
          page.featureId === null || featureIds.includes(page.featureId),
      )
      .map((page: DibodevProjectSpecificationPageOption): string => page.label)
    return [{ type: 'pageList', items: pages, note: typeWording.pagesNote.replace('{count}', String(pages.length)) }]
  }

  /**
   * Part 5: the features chosen, essential or wanted.
   * @param {string[]} featureIds - The features chosen.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks.
   */
  private static featureBlocks(
    featureIds: string[],
    typeWording: DibodevProjectSpecificationTypeWording,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationBlock[] {
    const features: DibodevProjectSpecificationFeatureLine[] = typeWording.features
      .filter((feature: DibodevProjectSpecificationFeatureOption): boolean => featureIds.includes(feature.id))
      .map(
        (feature: DibodevProjectSpecificationFeatureOption): DibodevProjectSpecificationFeatureLine => ({
          label: feature.label,
          priority: feature.isEssential ? 'essential' : 'wanted',
          priorityLabel: wording.document.priorityLabels[feature.isEssential ? 'essential' : 'wanted'],
        }),
      )

    if (!features.length) {
      return [{ type: 'paragraph', emphasis: '', text: wording.document.noFeature }]
    }
    return [{ type: 'featureList', items: features }]
  }

  /**
   * Part 6: who prepares the texts and pictures (or the data), once answered.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationPlaceholders} placeholders - Name, city and zone.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks, empty before the answer.
   */
  private static contentBlocks(
    answers: DibodevProjectSpecificationAnswers,
    typeWording: DibodevProjectSpecificationTypeWording,
    placeholders: DibodevProjectSpecificationPlaceholders,
  ): DibodevProjectSpecificationBlock[] {
    const source: DibodevProjectSpecificationDocumentOption<string> | undefined = typeWording.contentSources.find(
      (option: DibodevProjectSpecificationDocumentOption<string>): boolean => option.id === answers.contentSource,
    )

    if (!source) {
      return []
    }
    return [
      { type: 'paragraph', emphasis: '', text: this.fill(source.documentText, placeholders) },
      { type: 'paragraph', emphasis: '', text: this.fill(typeWording.contentExtra, placeholders) },
    ]
  }

  /**
   * Part 8: budget, launch date and maintenance, once the budget or the date is answered.
   * @param {DibodevProjectSpecificationAnswers} answers - The generator answers.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks, empty before both answers.
   */
  private static budgetBlocks(
    answers: DibodevProjectSpecificationAnswers,
    wording: DibodevProjectSpecificationWording,
  ): DibodevProjectSpecificationBlock[] {
    const budget: DibodevProjectSpecificationDocumentOption<string> | undefined = wording.budgets.find(
      (option: DibodevProjectSpecificationDocumentOption<string>): boolean => option.id === answers.budget,
    )
    const launchDate: DibodevProjectSpecificationTileOption<string> | undefined = wording.launchDates.find(
      (option: DibodevProjectSpecificationTileOption<string>): boolean => option.id === answers.launchDate,
    )

    if (!budget && !launchDate) {
      return []
    }
    return [
      {
        type: 'factList',
        items: [
          { label: wording.document.budgetLabel, value: budget?.documentText ?? wording.document.toBeSpecified },
          {
            label: wording.document.launchDateLabel,
            value: launchDate?.documentText ?? wording.document.toBeSpecified,
          },
          { label: wording.document.maintenanceLabel, value: wording.document.maintenanceText },
        ],
      },
    ]
  }

  /**
   * Part 9: what every quote must contain to be compared with the others, and the reply date to fill in.
   * @param {DibodevProjectSpecificationTypeWording} typeWording - The texts of the project type.
   * @param {DibodevProjectSpecificationWording} wording - The texts of the page language.
   * @param {DibodevProjectSpecificationPlaceholders} placeholders - Name, city and zone.
   * @returns {DibodevProjectSpecificationBlock[]} The blocks.
   */
  private static answerBlocks(
    typeWording: DibodevProjectSpecificationTypeWording,
    wording: DibodevProjectSpecificationWording,
    placeholders: DibodevProjectSpecificationPlaceholders,
  ): DibodevProjectSpecificationBlock[] {
    return [
      { type: 'bulletList', items: [...wording.document.answerItems, this.fill(typeWording.ownership, placeholders)] },
      { type: 'blankField', label: wording.document.replyByLabel, placeholder: wording.document.blank },
    ]
  }

  /**
   * File name without the characters an operating system refuses.
   * @param {string} name - The wished name.
   * @returns {string} A safe file name, without extension.
   */
  private static fileNameOf(name: string): string {
    return name.replace(FILE_NAME_FORBIDDEN_CHARACTERS, '').replace(/\s+/g, ' ').trim().slice(0, FILE_NAME_MAX_LENGTH)
  }
}
