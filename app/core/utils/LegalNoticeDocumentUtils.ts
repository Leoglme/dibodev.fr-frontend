import type {
  DibodevLegalNoticeAnswers,
  DibodevLegalNoticeBlock,
  DibodevLegalNoticeCompanyForm,
  DibodevLegalNoticeDocument,
  DibodevLegalNoticeDocuments,
  DibodevLegalNoticeFieldId,
  DibodevLegalNoticeHostingProvider,
  DibodevLegalNoticeHostingProviderKey,
  DibodevLegalNoticeSection,
  DibodevLegalNoticeSegment,
  DibodevLegalNoticeStatus,
  DibodevLegalNoticeTextFieldKey,
  DibodevLegalNoticeThirdPartyContent,
} from '~/core/types/DibodevLegalNotice'
import { LEGAL_NOTICE_HOSTING_PROVIDERS } from '~/core/constants/legalNotice/pageShared'
import { NBSP } from '~/core/constants/typography'

const COLON: string = `${NBSP}:`

/** What each placeholder asks for, in French like the documents. */
const MISSING_HINTS: Record<DibodevLegalNoticeFieldId, string> = {
  name: 'nom ou raison sociale',
  publicationDirector: 'nom du directeur de la publication',
  address: 'adresse',
  email: 'adresse e-mail',
  phone: 'téléphone',
  websiteUrl: 'adresse du site',
  siret: 'numéro SIREN ou SIRET',
  registryCity: 'ville du greffe',
  vatNumber: 'numéro de TVA intracommunautaire',
  shareCapital: 'montant du capital social',
  rnaNumber: 'numéro RNA',
  professionTitle: 'titre professionnel',
  titleCountry: 'État où le titre a été délivré',
  professionalBody: 'ordre ou organisme professionnel',
  professionalRules: 'règles professionnelles et où les consulter',
  hostingName: 'nom ou raison sociale de l’hébergeur',
  hostingAddress: 'adresse de l’hébergeur',
  hostingPhone: 'téléphone de l’hébergeur',
  paymentProviderName: 'prestataire de paiement',
  newsletterToolName: 'outil d’envoi de la lettre d’information',
  analyticsToolName: 'outil de mesure d’audience',
  consentToolName: 'nom de l’outil de consentement',
  consentTool: 'outil de consentement à installer',
  analyticsRetention: 'durée de conservation réglée dans l’outil de mesure',
  dpoContact: 'coordonnées du délégué à la protection des données',
  mediatorName: 'nom du médiateur de la consommation',
  mediatorWebsite: 'site internet du médiateur',
}

const COMPANY_FORM_LABELS: Record<DibodevLegalNoticeCompanyForm, string> = {
  sarl: 'Société à responsabilité limitée (SARL)',
  eurl: 'Entreprise unipersonnelle à responsabilité limitée (EURL)',
  sas: 'Société par actions simplifiée (SAS)',
  sasu: 'Société par actions simplifiée unipersonnelle (SASU)',
  sa: 'Société anonyme (SA)',
}

const THIRD_PARTY_LABELS: Record<DibodevLegalNoticeThirdPartyContent, string> = {
  youtube: 'vidéos YouTube',
  googleMaps: 'carte Google Maps',
  recaptcha: 'protection reCAPTCHA de Google',
  socialNetworks: 'boutons ou publications de réseaux sociaux',
}

const PAYMENT_PROVIDER_NAMES: Record<'stripe' | 'paypal', string> = {
  stripe: 'Stripe',
  paypal: 'PayPal',
}

/** Hosting providers whose company and servers sit in the European Union, as their legal pages say. */
const EUROPEAN_HOSTING_KEYS: DibodevLegalNoticeHostingProviderKey[] = [
  'ovhcloud',
  'o2switch',
  'ionos',
  'hostinger',
  'lws',
  'gandi',
  'scaleway',
]

const FOOTER: string = `Modèle généré gratuitement sur dibodev.fr, à relire et adapter${NBSP}; il ne remplace pas un conseil juridique.`
const FRENCH_ELISION_FIRST_LETTER: RegExp = /^[aeiouyàâäéèêëîïôöùûüÿæœ]/i
const NUMBER_ONLY: RegExp = /^[\d\s  .,]+$/
const PROFESSIONAL_STATUSES: DibodevLegalNoticeStatus[] = ['micro', 'company', 'liberal']

/** Reads the answers and remembers each field left empty while the documents are written. */
class LegalNoticeWriter {
  readonly answers: DibodevLegalNoticeAnswers
  readonly missingFieldIds: Set<DibodevLegalNoticeFieldId> = new Set<DibodevLegalNoticeFieldId>()

  /**
   * Keeps the answers to read.
   * @param {DibodevLegalNoticeAnswers} answers - The generator answers.
   */
  constructor(answers: DibodevLegalNoticeAnswers) {
    this.answers = answers
  }

  /**
   * A label and its value on one line (« Téléphone : … »).
   * @param {string} label - The label.
   * @param {DibodevLegalNoticeSegment[]} segments - The value.
   * @returns {DibodevLegalNoticeBlock} The block.
   */
  fact(label: string, segments: DibodevLegalNoticeSegment[]): DibodevLegalNoticeBlock {
    return { type: 'fact', label, segments }
  }

  /**
   * A fixed piece of text.
   * @param {string} text - The text.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  text(text: string): DibodevLegalNoticeSegment {
    return { text, isMissing: false }
  }

  /**
   * The answer of a field, or its « [À COMPLÉTER …] » placeholder when empty.
   * @param {DibodevLegalNoticeTextFieldKey} key - The field.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  field(key: DibodevLegalNoticeTextFieldKey): DibodevLegalNoticeSegment {
    const value: string = this.answers[key].trim()
    return value ? this.text(value) : this.missing(key)
  }

  /**
   * The placeholder of a piece of information to add by hand.
   * @param {DibodevLegalNoticeFieldId} fieldId - What is missing.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  missing(fieldId: DibodevLegalNoticeFieldId): DibodevLegalNoticeSegment {
    this.missingFieldIds.add(fieldId)
    return { text: `[À COMPLÉTER${COLON} ${MISSING_HINTS[fieldId]}]`, isMissing: true }
  }

  /**
   * Whether a field has an answer.
   * @param {DibodevLegalNoticeTextFieldKey} key - The field.
   * @returns {boolean} True when it is filled.
   */
  has(key: DibodevLegalNoticeTextFieldKey): boolean {
    return this.answers[key].trim().length > 0
  }
}

/** Two documents for the same answers: the preview, the copied text, the Word file and the print all read them. */
export class LegalNoticeDocumentUtils {
  /**
   * Answers of a fresh generator: a micro-business with a contact form, nothing else.
   * @returns {DibodevLegalNoticeAnswers} The starting answers.
   */
  static createDefaultAnswers(): DibodevLegalNoticeAnswers {
    return {
      status: 'micro',
      companyForm: 'sarl',
      name: '',
      publicationDirector: '',
      address: '',
      hideAddress: false,
      email: '',
      phone: '',
      websiteUrl: '',
      siret: '',
      registry: 'rcs',
      registryCity: '',
      vatRegime: 'franchise',
      vatNumber: '',
      shareCapital: '',
      rnaNumber: '',
      professionTitle: '',
      titleCountry: 'France',
      professionalBody: '',
      professionalRules: '',
      hostingProvider: 'other',
      hostingName: '',
      hostingAddress: '',
      hostingPhone: '',
      dataFeatures: ['contactForm'],
      paymentProvider: 'stripe',
      paymentProviderName: '',
      newsletterToolName: '',
      analytics: 'none',
      analyticsToolName: '',
      thirdPartyContents: [],
      hasConsentTool: false,
      consentToolName: '',
      hasDpo: false,
      dpoContact: '',
      sellsToConsumers: false,
      mediatorName: '',
      mediatorWebsite: '',
    }
  }

  /**
   * Switches the status and resets the answers that only fit the previous one (register, VAT).
   * @param {DibodevLegalNoticeAnswers} answers - The current answers.
   * @param {DibodevLegalNoticeStatus} status - The new status.
   * @returns {DibodevLegalNoticeAnswers} The answers for the new status.
   */
  static withStatus(answers: DibodevLegalNoticeAnswers, status: DibodevLegalNoticeStatus): DibodevLegalNoticeAnswers {
    if (answers.status === status) {
      return answers
    }
    const registries: Record<DibodevLegalNoticeStatus, DibodevLegalNoticeAnswers['registry']> = {
      micro: 'rcs',
      company: 'rcs',
      association: 'none',
      liberal: 'rne',
      individual: 'none',
    }
    const vatRegimes: Record<DibodevLegalNoticeStatus, DibodevLegalNoticeAnswers['vatRegime']> = {
      micro: 'franchise',
      company: 'number',
      association: 'none',
      liberal: 'franchise',
      individual: 'none',
    }
    return {
      ...answers,
      status,
      hideAddress: status === 'individual' ? answers.hideAddress : false,
      registry: registries[status],
      vatRegime: vatRegimes[status],
      sellsToConsumers: status === 'individual' ? false : answers.sellsToConsumers,
    }
  }

  /**
   * Picks a hosting provider and copies its verified details into the editable fields.
   * @param {DibodevLegalNoticeAnswers} answers - The current answers.
   * @param {DibodevLegalNoticeHostingProviderKey} key - The provider chosen, `other` to type them.
   * @returns {DibodevLegalNoticeAnswers} The answers with the provider details.
   */
  static withHostingProvider(
    answers: DibodevLegalNoticeAnswers,
    key: DibodevLegalNoticeHostingProviderKey,
  ): DibodevLegalNoticeAnswers {
    const provider: DibodevLegalNoticeHostingProvider | undefined = LEGAL_NOTICE_HOSTING_PROVIDERS.find(
      (candidate: DibodevLegalNoticeHostingProvider): boolean => candidate.key === key,
    )
    return {
      ...answers,
      hostingProvider: key,
      hostingName: provider?.legalName ?? '',
      hostingAddress: provider?.address ?? '',
      hostingPhone: provider?.phone ?? '',
    }
  }

  /**
   * Adds or removes a value of a list of choices.
   * @param {T[]} selected - The values already chosen.
   * @param {T} value - The value clicked.
   * @returns {T[]} The new list (a copy).
   */
  static toggle<T extends string>(selected: T[], value: T): T[] {
    return selected.includes(value)
      ? selected.filter((candidate: T): boolean => candidate !== value)
      : [...selected, value]
  }

  /**
   * Whether the publisher is a private individual who keeps their identity off the site, as the law allows.
   * @param {DibodevLegalNoticeAnswers} answers - The generator answers.
   * @returns {boolean} True for an anonymous non-professional publisher.
   */
  static isAnonymous(answers: DibodevLegalNoticeAnswers): boolean {
    return answers.status === 'individual' && answers.hideAddress
  }

  /**
   * Writes both documents from the answers, in French, and lists the fields to fill before publishing.
   * @param {DibodevLegalNoticeAnswers} answers - The generator answers.
   * @param {string} dateLabel - Today in French ("8 novembre 2026"), empty before the page is mounted.
   * @returns {DibodevLegalNoticeDocuments} The two documents.
   */
  static build(answers: DibodevLegalNoticeAnswers, dateLabel: string): DibodevLegalNoticeDocuments {
    const writer: LegalNoticeWriter = new LegalNoticeWriter(answers)
    const updatedLabel: string = dateLabel ? `Dernière mise à jour${COLON} ${dateLabel}` : ''
    const legalNotice: DibodevLegalNoticeDocument = {
      kind: 'legalNotice',
      title: 'Mentions légales',
      updatedLabel,
      sections: this.legalNoticeSections(writer),
      footer: FOOTER,
    }
    const privacyPolicy: DibodevLegalNoticeDocument = {
      kind: 'privacyPolicy',
      title: 'Politique de confidentialité',
      updatedLabel,
      sections: this.privacyPolicySections(writer),
      footer: FOOTER,
    }
    return { legalNotice, privacyPolicy, missingFieldIds: [...writer.missingFieldIds] }
  }

  /**
   * The document as plain text, to paste in a page of a CMS.
   * @param {DibodevLegalNoticeDocument} document - The document.
   * @returns {string} Title, sections and footer separated by blank lines.
   */
  static toPlainText(document: DibodevLegalNoticeDocument): string {
    const parts: string[] = [document.title]

    if (document.updatedLabel) {
      parts.push(document.updatedLabel)
    }
    for (const section of document.sections) {
      parts.push(
        [
          section.title,
          ...section.blocks.map((block: DibodevLegalNoticeBlock): string => this.blockToPlainText(block)),
        ].join('\n'),
      )
    }
    parts.push(document.footer)
    return parts.join('\n\n')
  }

  /**
   * Joins the text of segments.
   * @param {DibodevLegalNoticeSegment[]} segments - The segments.
   * @returns {string} Their text.
   */
  static segmentsToText(segments: DibodevLegalNoticeSegment[]): string {
    return segments.map((segment: DibodevLegalNoticeSegment): string => segment.text).join('')
  }

  /**
   * One block as plain text: a fact on one line, a list with dashes.
   * @param {DibodevLegalNoticeBlock} block - The block.
   * @returns {string} Its text.
   */
  private static blockToPlainText(block: DibodevLegalNoticeBlock): string {
    switch (block.type) {
      case 'paragraph':
        return this.segmentsToText(block.segments)
      case 'fact':
        return `${block.label}${COLON} ${this.segmentsToText(block.segments)}`
      case 'list':
        return block.items
          .map((item: DibodevLegalNoticeSegment[]): string => `- ${this.segmentsToText(item)}`)
          .join('\n')
    }
  }

  /**
   * Sections of the legal notice: publisher, publication director, regulated profession, host, mediator, data, rights.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeSection[]} The sections.
   */
  private static legalNoticeSections(writer: LegalNoticeWriter): DibodevLegalNoticeSection[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const isAnonymous: boolean = this.isAnonymous(answers)
    const sections: DibodevLegalNoticeSection[] = [
      { id: 'publisher', title: 'Éditeur du site', blocks: this.publisherBlocks(writer) },
    ]

    if (!isAnonymous) {
      const usesPublisherName: boolean =
        !writer.has('publicationDirector') && ['micro', 'liberal', 'individual'].includes(answers.status)
      sections.push({
        id: 'publicationDirector',
        title: 'Directeur de la publication',
        blocks: [
          {
            type: 'paragraph',
            segments: [usesPublisherName ? writer.field('name') : writer.field('publicationDirector')],
          },
        ],
      })
    }
    if (answers.status === 'liberal') {
      sections.push({
        id: 'regulatedProfession',
        title: 'Profession réglementée',
        blocks: [
          { type: 'fact', label: 'Titre professionnel', segments: [writer.field('professionTitle')] },
          { type: 'fact', label: 'État où le titre a été délivré', segments: [writer.field('titleCountry')] },
          { type: 'fact', label: 'Ordre ou organisme professionnel', segments: [writer.field('professionalBody')] },
          { type: 'fact', label: 'Règles professionnelles', segments: [writer.field('professionalRules')] },
        ],
      })
    }
    sections.push({
      id: 'hosting',
      title: 'Hébergement',
      blocks: [
        { type: 'paragraph', segments: [writer.text(`Le site est hébergé par${COLON}`)] },
        { type: 'fact', label: 'Hébergeur', segments: [writer.field('hostingName')] },
        { type: 'fact', label: 'Adresse', segments: [writer.field('hostingAddress')] },
        ...(isAnonymous && !writer.has('hostingPhone')
          ? []
          : [writer.fact('Téléphone', [writer.field('hostingPhone')])]),
      ],
    })
    if (answers.sellsToConsumers && answers.status !== 'individual') {
      sections.push({
        id: 'mediation',
        title: 'Médiation de la consommation',
        blocks: [
          {
            type: 'paragraph',
            segments: [
              writer.text('En cas de litige, le client consommateur adresse d’abord une réclamation écrite à '),
              this.publisherSegment(writer),
              writer.text(
                `. Si aucune solution n’est trouvée, il peut recourir au médiateur de la consommation suivant, comme le prévoient les articles L612-1 et suivants du Code de la consommation${COLON}`,
              ),
            ],
          },
          { type: 'fact', label: 'Médiateur', segments: [writer.field('mediatorName')] },
          { type: 'fact', label: 'Site internet', segments: [writer.field('mediatorWebsite')] },
        ],
      })
    }
    sections.push(
      {
        id: 'personalData',
        title: 'Données personnelles et cookies',
        blocks: [
          {
            type: 'paragraph',
            segments: [
              writer.text(
                'La façon dont ce site recueille et utilise vos données personnelles, et les cookies qu’il dépose, sont expliqués dans sa politique de confidentialité.',
              ),
            ],
          },
        ],
      },
      {
        id: 'intellectualProperty',
        title: 'Propriété intellectuelle',
        blocks: [
          {
            type: 'paragraph',
            segments: [
              writer.text('Les textes, photos et éléments graphiques de ce site sont la propriété '),
              ...this.withDe(writer, this.publisherSegment(writer)),
              writer.text(
                ' ou sont utilisés avec l’accord de leurs auteurs. Leur reproduction sans autorisation est interdite.',
              ),
            ],
          },
        ],
      },
    )
    return sections
  }

  /**
   * Blocks of the publisher: who it is, how to reach it and its registration, by status.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} The blocks.
   */
  private static publisherBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const intro: DibodevLegalNoticeBlock = {
      type: 'paragraph',
      segments: [writer.text('Le site '), writer.field('websiteUrl'), writer.text(` est édité par${COLON}`)],
    }
    const contactFacts: DibodevLegalNoticeBlock[] = [
      { type: 'fact', label: 'Téléphone', segments: [writer.field('phone')] },
      { type: 'fact', label: 'E-mail', segments: [writer.field('email')] },
    ]

    if (this.isAnonymous(answers)) {
      const blocks: DibodevLegalNoticeBlock[] = [
        {
          type: 'paragraph',
          segments: [
            writer.text('Le site '),
            writer.field('websiteUrl'),
            writer.text(
              ` est édité par un particulier, à titre non professionnel. Comme le permet l’article 1-1, II de la loi n° 2004-575 du 21${NBSP}juin 2004 pour la confiance dans l’économie numérique, l’éditeur ne publie pas son identité${NBSP}: il l’a communiquée à l’hébergeur indiqué plus bas.`,
            ),
          ],
        },
      ]
      if (writer.has('email')) {
        blocks.push({ type: 'fact', label: 'Pour le contacter', segments: [writer.field('email')] })
      }
      return blocks
    }

    switch (answers.status) {
      case 'company':
        return [
          intro,
          { type: 'fact', label: 'Raison sociale', segments: [writer.field('name')] },
          {
            type: 'fact',
            label: 'Forme',
            segments: [
              writer.text(`${COMPANY_FORM_LABELS[answers.companyForm]} au capital de `),
              this.capitalSegment(writer),
            ],
          },
          { type: 'fact', label: 'Siège social', segments: [writer.field('address')] },
          ...contactFacts,
          {
            type: 'fact',
            label: 'Immatriculation',
            segments: [writer.text('RCS '), writer.field('registryCity'), writer.text(' '), writer.field('siret')],
          },
          ...this.vatBlocks(writer),
        ]
      case 'association':
        return [
          intro,
          {
            type: 'fact',
            label: 'Association',
            segments: [
              writer.field('name'),
              writer.text(`, association déclarée régie par la loi du 1er${NBSP}juillet 1901`),
            ],
          },
          { type: 'fact', label: 'Siège', segments: [writer.field('address')] },
          ...contactFacts,
          ...(writer.has('rnaNumber') ? [writer.fact('Numéro RNA', [writer.field('rnaNumber')])] : []),
          ...(writer.has('siret') ? [writer.fact('SIRET', [writer.field('siret')])] : []),
        ]
      case 'individual':
        return [
          intro,
          { type: 'fact', label: 'Nom', segments: [writer.field('name')] },
          { type: 'fact', label: 'Adresse', segments: [writer.field('address')] },
          { type: 'fact', label: 'Téléphone', segments: [writer.field('phone')] },
          ...(writer.has('email') ? [writer.fact('E-mail', [writer.field('email')])] : []),
        ]
      case 'micro':
      case 'liberal':
        return [
          intro,
          {
            type: 'fact',
            label: 'Nom',
            segments: [writer.field('name'), writer.text(', entrepreneur individuel (EI)')],
          },
          ...(answers.status === 'liberal' ? [writer.fact('Profession', [writer.field('professionTitle')])] : []),
          { type: 'fact', label: 'Adresse', segments: [writer.field('address')] },
          ...contactFacts,
          { type: 'fact', label: 'SIREN ou SIRET', segments: [writer.field('siret')] },
          ...this.registryBlocks(writer),
          ...this.vatBlocks(writer),
        ]
    }
  }

  /**
   * The register line of a sole trader: trade and companies register (with its city) or national register.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} One fact, or none when not registered.
   */
  private static registryBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    switch (writer.answers.registry) {
      case 'rcs':
        return [
          {
            type: 'fact',
            label: 'Immatriculation',
            segments: [writer.text('Registre du commerce et des sociétés (RCS) de '), writer.field('registryCity')],
          },
        ]
      case 'rne':
        return [
          {
            type: 'fact',
            label: 'Immatriculation',
            segments: [writer.text('Registre national des entreprises (RNE)')],
          },
        ]
      case 'none':
        return []
    }
  }

  /**
   * The VAT line: intra-community number, or the exemption of article 293 B of the French tax code.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} One fact, or none when not concerned.
   */
  private static vatBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    switch (writer.answers.vatRegime) {
      case 'number':
        return [{ type: 'fact', label: 'TVA intracommunautaire', segments: [writer.field('vatNumber')] }]
      case 'franchise':
        return [{ type: 'fact', label: 'TVA', segments: [writer.text('TVA non applicable, article 293 B du CGI')] }]
      case 'none':
        return []
    }
  }

  /**
   * The share capital, with « € » added when only a number was typed.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  private static capitalSegment(writer: LegalNoticeWriter): DibodevLegalNoticeSegment {
    const capital: string = writer.answers.shareCapital.trim()

    if (!capital) {
      return writer.missing('shareCapital')
    }
    return writer.text(NUMBER_ONLY.test(capital) ? `${capital}${NBSP}€` : capital)
  }

  /**
   * How the documents name the publisher: its name, or « l’éditeur du site » when anonymous.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  private static publisherSegment(writer: LegalNoticeWriter): DibodevLegalNoticeSegment {
    return this.isAnonymous(writer.answers) ? writer.text('l’éditeur du site') : writer.field('name')
  }

  /**
   * Puts « de » or « d’ » before a name, as French writes it (« d’Atelier Lune », « de Martin »).
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @param {DibodevLegalNoticeSegment} segment - The name.
   * @returns {DibodevLegalNoticeSegment[]} The preposition then the name.
   */
  private static withDe(writer: LegalNoticeWriter, segment: DibodevLegalNoticeSegment): DibodevLegalNoticeSegment[] {
    const elides: boolean = !segment.isMissing && FRENCH_ELISION_FIRST_LETTER.test(segment.text)
    return [writer.text(elides ? 'd’' : 'de '), segment]
  }

  /**
   * Sections of the privacy policy, in the order of article 13 of the GDPR.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeSection[]} The sections.
   */
  private static privacyPolicySections(writer: LegalNoticeWriter): DibodevLegalNoticeSection[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const hasConsentBasedProcessing: boolean =
      answers.dataFeatures.includes('newsletter') ||
      answers.analytics === 'withConsent' ||
      answers.thirdPartyContents.length > 0

    return [
      { id: 'controller', title: 'Qui est responsable de vos données', blocks: this.controllerBlocks(writer) },
      {
        id: 'purposes',
        title: 'Les données recueillies, pourquoi, et sur quelle base légale',
        blocks: this.purposeBlocks(writer),
      },
      { id: 'recipients', title: 'Qui reçoit vos données', blocks: this.recipientBlocks(writer) },
      { id: 'transfers', title: 'Transferts hors de l’Union européenne', blocks: this.transferBlocks(writer) },
      { id: 'retention', title: 'Combien de temps nous les gardons', blocks: this.retentionBlocks(writer) },
      { id: 'cookies', title: 'Cookies et autres traceurs', blocks: this.cookieBlocks(writer) },
      {
        id: 'rights',
        title: 'Vos droits',
        blocks: [
          {
            type: 'paragraph',
            segments: [
              writer.text(
                `Vous pouvez demander à accéder à vos données, à les faire rectifier ou effacer, à en limiter l’utilisation, vous opposer à leur traitement et les recevoir dans un format réutilisable (portabilité).${
                  hasConsentBasedProcessing
                    ? ' Quand un traitement repose sur votre consentement, vous pouvez le retirer à tout moment.'
                    : ''
                }`,
              ),
            ],
          },
          {
            type: 'paragraph',
            segments: [writer.text('Pour exercer ces droits, écrivez à '), writer.field('email'), writer.text('.')],
          },
          {
            type: 'paragraph',
            segments: [
              writer.text(
                `Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL${NBSP}: en ligne sur www.cnil.fr/fr/plaintes, ou par courrier à la CNIL, Service des plaintes, 3 place de Fontenoy, 75007 Paris.`,
              ),
            ],
          },
        ],
      },
    ]
  }

  /**
   * Who controls the data and how to reach them, with the data protection officer when there is one.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} The blocks.
   */
  private static controllerBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const blocks: DibodevLegalNoticeBlock[] = [
      {
        type: 'paragraph',
        segments: [
          writer.text('Le responsable du traitement des données recueillies sur '),
          writer.field('websiteUrl'),
          writer.text(' est '),
          this.publisherSegment(writer),
          ...(this.isAnonymous(writer.answers) ? [] : [writer.text(', '), writer.field('address')]),
          writer.text(`. Pour toute question sur vos données${COLON} `),
          writer.field('email'),
          writer.text('.'),
        ],
      },
    ]

    if (writer.answers.hasDpo) {
      blocks.push({
        type: 'fact',
        label: 'Délégué à la protection des données',
        segments: [writer.field('dpoContact')],
      })
    }
    return blocks
  }

  /**
   * One line per use of the data: what is collected, why, and the legal basis of article 6 of the GDPR.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} A list, or one paragraph when nothing is collected.
   */
  private static purposeBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const items: DibodevLegalNoticeSegment[][] = []

    if (answers.dataFeatures.includes('contactForm')) {
      items.push([
        writer.text(
          `Formulaire de contact${COLON} nom, adresse e-mail, téléphone le cas échéant et message, pour répondre à votre demande. Base légale${COLON} notre intérêt légitime à répondre aux messages reçus (article 6.1.f du RGPD), ou des mesures précontractuelles quand vous demandez un devis (article 6.1.b).`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('booking')) {
      items.push([
        writer.text(
          `Prise de rendez-vous${COLON} nom, coordonnées, date et objet du rendez-vous, pour l’organiser et vous le rappeler. Base légale${COLON} mesures précontractuelles ou exécution du contrat (article 6.1.b du RGPD).`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('newsletter')) {
      items.push([
        writer.text(
          `Lettre d’information${COLON} adresse e-mail, pour vous envoyer nos actualités. Base légale${COLON} votre consentement (article 6.1.a du RGPD), que vous pouvez retirer à tout moment par le lien de désinscription présent dans chaque envoi.`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('customerAccount')) {
      items.push([
        writer.text(
          `Compte client${COLON} identité, coordonnées, identifiants de connexion et historique des commandes, pour gérer votre compte et vos commandes. Base légale${COLON} exécution du contrat (article 6.1.b du RGPD).`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('onlinePayment')) {
      items.push([
        writer.text(`Paiement en ligne${COLON} le paiement est traité par `),
        this.paymentProviderSegment(writer),
        writer.text(`, prestataire de paiement. Base légale${COLON} exécution du contrat (article 6.1.b du RGPD).`),
      ])
    }
    if (this.keepsInvoices(answers)) {
      items.push([
        writer.text(
          `Facturation et comptabilité${COLON} les informations portées sur vos factures, pour respecter nos obligations comptables. Base légale${COLON} obligation légale (article 6.1.c du RGPD).`,
        ),
      ])
    }
    if (answers.analytics === 'exempted') {
      items.push([
        writer.text(`Mesure d’audience${COLON} `),
        writer.field('analyticsToolName'),
        writer.text(
          ` est réglé pour produire des statistiques anonymes, pour notre seul compte, sans recoupement ni transmission à des tiers. Ces traceurs sont dispensés de consentement (article 82 de la loi Informatique et Libertés). Base légale${COLON} notre intérêt légitime à mesurer l’audience du site (article 6.1.f du RGPD).`,
        ),
      ])
    }
    if (answers.analytics === 'withConsent') {
      items.push([
        writer.text(`Mesure d’audience${COLON} `),
        writer.field('analyticsToolName'),
        writer.text(`, seulement si vous l’acceptez. Base légale${COLON} votre consentement (article 6.1.a du RGPD).`),
      ])
    }
    if (answers.thirdPartyContents.length) {
      items.push([
        writer.text(
          `Contenus de tiers${COLON} ${answers.thirdPartyContents
            .map((content: DibodevLegalNoticeThirdPartyContent): string => THIRD_PARTY_LABELS[content])
            .join(
              ', ',
            )}. Ces services peuvent déposer leurs propres traceurs et recueillir des données de navigation${NBSP}: ils ne se chargent qu’avec votre accord. Base légale${COLON} votre consentement (article 6.1.a du RGPD).`,
        ),
      ])
    }

    if (!items.length) {
      return [
        {
          type: 'paragraph',
          segments: [
            writer.text(
              'Ce site ne recueille aucune donnée personnelle par formulaire et ne dépose aucun traceur soumis à votre consentement.',
            ),
          ],
        },
      ]
    }
    return [{ type: 'list', items }]
  }

  /**
   * The publisher and the technical providers that handle the data on its behalf.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} The blocks.
   */
  private static recipientBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const items: DibodevLegalNoticeSegment[][] = [[writer.text('l’hébergeur du site, '), writer.field('hostingName')]]

    if (answers.dataFeatures.includes('onlinePayment')) {
      items.push([writer.text('le prestataire de paiement, '), this.paymentProviderSegment(writer)])
    }
    if (answers.dataFeatures.includes('newsletter')) {
      items.push([writer.text('l’outil d’envoi de la lettre d’information, '), writer.field('newsletterToolName')])
    }
    if (answers.analytics !== 'none') {
      items.push([writer.text('l’outil de mesure d’audience, '), writer.field('analyticsToolName')])
    }
    if (answers.hasConsentTool) {
      items.push([writer.text('l’outil de gestion du consentement, '), writer.field('consentToolName')])
    }
    return [
      {
        type: 'paragraph',
        segments: [
          writer.text('Vos données sont destinées à '),
          this.publisherSegment(writer),
          writer.text(
            ` et ne sont ni vendues ni louées. Elles peuvent être traitées, pour notre compte, par nos prestataires techniques${COLON}`,
          ),
        ],
      },
      { type: 'list', items },
    ]
  }

  /**
   * Transfers outside the European Union, when a provider may make some (Google, Meta, payment, host outside the EU).
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} The blocks.
   */
  private static transferBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const mayTransfer: boolean =
      answers.analytics === 'withConsent' ||
      answers.thirdPartyContents.length > 0 ||
      answers.dataFeatures.includes('onlinePayment') ||
      !EUROPEAN_HOSTING_KEYS.includes(answers.hostingProvider)

    return [
      {
        type: 'paragraph',
        segments: [
          writer.text(
            mayTransfer
              ? `Certains de nos prestataires (par exemple Google, Meta ou un prestataire de paiement) peuvent transférer des données hors de l’Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les garanties prévues par le RGPD${NBSP}: une décision d’adéquation de la Commission européenne ou des clauses contractuelles types.`
              : 'Nous ne prévoyons pas de transférer vos données hors de l’Union européenne. Si l’un de nos prestataires venait à le faire, ce transfert serait encadré par les garanties prévues par le RGPD.',
          ),
        ],
      },
    ]
  }

  /**
   * Retention periods, only those set by a law or a CNIL text.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} A list.
   */
  private static retentionBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers
    const items: DibodevLegalNoticeSegment[][] = []

    if (answers.dataFeatures.includes('contactForm')) {
      items.push([
        writer.text(
          `Demandes de contact, si vous n’êtes pas devenu client${COLON} 3${NBSP}ans à compter de la demande ou de votre dernier contact (référentiel de la CNIL sur la gestion commerciale).`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('booking') || answers.dataFeatures.includes('customerAccount')) {
      items.push([
        writer.text(
          `Données des clients (rendez-vous, compte, commandes)${COLON} pendant toute la relation commerciale, puis en archive le temps de la prescription légale de 5${NBSP}ans (article L110-4 du Code de commerce).`,
        ),
      ])
    }
    if (answers.dataFeatures.includes('newsletter')) {
      items.push([writer.text(`Lettre d’information${COLON} jusqu’à votre désinscription.`)])
    }
    if (this.keepsInvoices(answers)) {
      items.push([writer.text(`Factures${COLON} 10${NBSP}ans, comme l’impose le Code de commerce.`)])
    }
    if (answers.analytics === 'exempted') {
      items.push([
        writer.text(
          `Mesure d’audience${COLON} traceurs de 13${NBSP}mois au plus, statistiques gardées 25${NBSP}mois au plus, comme le recommande la CNIL.`,
        ),
      ])
    }
    if (answers.analytics === 'withConsent') {
      items.push([writer.text(`Mesure d’audience${COLON} `), writer.missing('analyticsRetention')])
    }
    if (this.needsConsent(answers)) {
      items.push([
        writer.text(
          `Votre choix sur les cookies, accord ou refus${COLON} 6${NBSP}mois, comme le recommande la CNIL, puis la question vous est reposée.`,
        ),
      ])
    }
    if (!items.length) {
      return [
        {
          type: 'paragraph',
          segments: [writer.text('Ce site ne conserve aucune donnée personnelle de ses visiteurs.')],
        },
      ]
    }
    return [{ type: 'list', items }]
  }

  /**
   * What the site drops on the visitor's device, and how the visitor accepts, refuses or changes their mind.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeBlock[]} The blocks.
   */
  private static cookieBlocks(writer: LegalNoticeWriter): DibodevLegalNoticeBlock[] {
    const answers: DibodevLegalNoticeAnswers = writer.answers

    if (this.needsConsent(answers)) {
      return [
        {
          type: 'paragraph',
          segments: [
            writer.text(
              'Les traceurs soumis à votre accord, cités plus haut, ne sont déposés qu’après votre accord, recueilli par ',
            ),
            answers.hasConsentTool ? writer.field('consentToolName') : writer.missing('consentTool'),
            writer.text(
              `. Refuser est aussi simple qu’accepter, et vous pouvez changer d’avis à tout moment avec le lien «${NBSP}Gérer mes cookies${NBSP}» présent en bas de chaque page.`,
            ),
          ],
        },
      ]
    }
    return [
      {
        type: 'paragraph',
        segments: [
          writer.text(
            answers.analytics === 'exempted'
              ? 'Ce site ne dépose que les traceurs nécessaires à son fonctionnement et ceux de la mesure d’audience décrite plus haut, dispensés de consentement.'
              : 'Ce site ne dépose que les traceurs nécessaires à son fonctionnement, qui ne demandent pas votre accord.',
          ),
        ],
      },
    ]
  }

  /**
   * The payment provider by name.
   * @param {LegalNoticeWriter} writer - The answers and the missing fields.
   * @returns {DibodevLegalNoticeSegment} The segment.
   */
  private static paymentProviderSegment(writer: LegalNoticeWriter): DibodevLegalNoticeSegment {
    const provider: DibodevLegalNoticeAnswers['paymentProvider'] = writer.answers.paymentProvider
    return provider === 'other' ? writer.field('paymentProviderName') : writer.text(PAYMENT_PROVIDER_NAMES[provider])
  }

  /**
   * Whether the site drops trackers that wait for the visitor's consent.
   * @param {DibodevLegalNoticeAnswers} answers - The generator answers.
   * @returns {boolean} True with an analytics tool that needs consent or third-party content.
   */
  private static needsConsent(answers: DibodevLegalNoticeAnswers): boolean {
    return answers.analytics === 'withConsent' || answers.thirdPartyContents.length > 0
  }

  /**
   * Whether the publisher keeps invoices of the visitors (a professional with accounts or payments).
   * @param {DibodevLegalNoticeAnswers} answers - The generator answers.
   * @returns {boolean} True when invoices are issued through the site.
   */
  private static keepsInvoices(answers: DibodevLegalNoticeAnswers): boolean {
    return (
      PROFESSIONAL_STATUSES.includes(answers.status) &&
      (answers.dataFeatures.includes('customerAccount') || answers.dataFeatures.includes('onlinePayment'))
    )
  }
}
