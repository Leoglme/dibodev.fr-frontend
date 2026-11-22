import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the rules were last checked: move it when the files or the facts change. */
export const STAFF_REGISTER_TEMPLATE_UPDATED_AT: string = '2026-11-22'

export const STAFF_REGISTER_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-staff-register'

/** Free staff register (employees, trainees, civic service volunteers) with its notice, in French only. */
export const STAFF_REGISTER_TEMPLATE_PDF_PATH: string = '/modeles/registre-unique-du-personnel.pdf'

/** Excel version: register with drop-down lists and headcount at a date, trainees and volunteers, yearly summary. */
export const STAFF_REGISTER_TEMPLATE_XLSX_PATH: string = '/modeles/registre-unique-du-personnel.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const STAFF_REGISTER_TEMPLATE_DOCX_PATH: string = '/modeles/registre-unique-du-personnel.docx'

/** Service-Public Entreprendre, mandatory registers: the staff register from the first hire, its entries, digital after CSE consultation, fine up to 750 euros per employee. */
export const MANDATORY_REGISTERS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public Entreprendre',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F1784',
}

/** Labour Code, art. L1221-13: a register in every establishment with employees, names in hiring order, indelibly; trainees and volunteers in a separate part. */
export const STAFF_REGISTER_KEEPING_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033971569',
}

/** Labour Code, art. D1221-23: the thirteen entries for each employee (nationality, birth date, sex, job, qualification, dates, contract mentions). */
export const STAFF_REGISTER_ENTRIES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018537878',
}

/** Labour Code, art. D1221-23-1: for each trainee, names, start and end dates, tutor and place of presence. */
export const STAFF_REGISTER_TRAINEES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029814209',
}

/** Labour Code, art. D1221-24: a copy of the work permits of foreign workers is attached to the register. */
export const FOREIGN_WORKER_PERMITS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036483477',
}

/** Labour Code, art. D1221-25: events after hiring or arrival are written when they happen. */
export const STAFF_REGISTER_LATER_EVENTS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029825324',
}

/** Labour Code, art. R1221-26: entries kept five years from the day the employee or trainee left. */
export const STAFF_REGISTER_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031392972',
}

/** Labour Code, art. D1221-27: a substitute medium follows D8113-2, and the CSE opinion goes to the labour inspectorate. */
export const STAFF_REGISTER_DIGITAL_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036483458',
}

/** Labour Code, art. D8113-2: a substitute medium holds every entry, without alteration, kept as long as the paper register. */
export const SUBSTITUTE_MEDIUM_CONDITIONS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018520854',
}

/** Labour Code, art. L2315-5: the CSE is consulted before a substitute medium replaces a register it may access. */
export const CSE_SUBSTITUTE_MEDIUM_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035651250',
}

/** Labour Code, art. L1221-15: the register is available to the CSE and to the labour and social security inspectors. */
export const STAFF_REGISTER_ACCESS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035653242',
}

/** Labour Code, art. R1227-7: a fourth-class fine, applied as many times as there are employees concerned. */
export const STAFF_REGISTER_PENALTY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030422217',
}

/** Criminal Code, art. 131-13: a fourth-class fine is 750 euros at most. */
export const FOURTH_CLASS_FINE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417259',
}

/** CNIL, HR retention reference: staff register entries kept five years from departure (R1221-26, an obligation). */
export const HR_DATA_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/referentiel-durees-conservation-donnees-rh',
}

/** CNIL: purpose, strictly necessary data, limited retention, security of the file. */
export const STAFF_DATA_PRINCIPLES_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/quels-sont-les-grands-principes-des-regles-de-protection-des-donnees',
}
