/** Kind of digital project the visitor wants to finance. */
export type DibodevPublicAidProjectType = 'website' | 'onlineSales' | 'software'

/** What a scheme says about a kind of project: listed, not listed (ask), or excluded. */
export type DibodevPublicAidProjectEligibility = 'eligible' | 'unclear' | 'excluded'

/**
 * How a scheme restricts the location of the business:
 * - `under5000OrQpv`: communes under 5 000 inhabitants, or the priority districts of one commune (Rennes Métropole);
 * - `regionalCentrality`: the regional rule (under 2 000 inhabitants ok, 2 000 to 5 000 outside business parks, above 5 000 only in the town centre or a priority district);
 * - `centralityOver2000`: town centre required above 2 000 inhabitants;
 * - `all`: every commune of the territory;
 * - `zonesOnly`: a few named districts only.
 */
export type DibodevPublicAidCommuneRule =
  | 'under5000OrQpv'
  | 'regionalCentrality'
  | 'centralityOver2000'
  | 'all'
  | 'zonesOnly'

/** `verified` when the rules were read on an official page, `partial` when a figure is missing or the source is indirect. */
export type DibodevPublicAidSchemeStatus = 'verified' | 'partial'

/** A rate or ceiling that differs for one commune of the territory. */
export type DibodevPublicAidCommuneOverride = {
  communeCode: string
  ratePercent: number
  maxAid: number
}

export type DibodevPublicAidContact = {
  label: string
  phone: string
  email: string
  url: string
}

/** The Pass Commerce et Artisanat rules of one intercommunalité, as published; amounts in euros excluding VAT. */
export type DibodevPublicAidScheme = {
  code: string
  name: string
  department: string
  ratePercent: number
  floorHt: number | null
  ceilingHt: number
  maxAid: number
  maxEmployees: number
  maxTurnover: number
  communeRule: DibodevPublicAidCommuneRule
  qpvCommuneCode: string | null
  communeOverrides: DibodevPublicAidCommuneOverride[]
  projects: Record<DibodevPublicAidProjectType, DibodevPublicAidProjectEligibility>
  status: DibodevPublicAidSchemeStatus
  noteKeys: string[]
  contact: DibodevPublicAidContact
  sourceUrl: string
  sourceDate: string
}

/** The regional frame applied where no intercommunalité rules were read. */
export type DibodevPublicAidRegionalFrame = {
  code: string
  name: string
  ratePercent: number
  floorHt: number | null
  ceilingHt: number
  maxAid: number
  maxEmployees: number
  maxTurnover: number
  sourceUrl: string
  sourceDate: string
}

export type DibodevPublicAidDataset = {
  checkedAt: string
  license: string
  regionalFrame: DibodevPublicAidRegionalFrame
  epcis: DibodevPublicAidScheme[]
}

/** A commune of Brittany: INSEE code, name, first postcode, intercommunalité code and population. */
export type DibodevCommuneRow = [string, string, string, string, number]

export type DibodevCommunesDataset = {
  epcis: Record<string, string>
  communes: DibodevCommuneRow[]
}

/** A commune as returned by geo.api.gouv.fr (`/communes?nom=` or `?codePostal=`), used outside Brittany. */
export type DibodevGeoApiCommune = {
  nom: string
  code: string
  codesPostaux?: string[]
  population?: number
  codeDepartement?: string
  codeEpci?: string
}

export type DibodevCommune = {
  code: string
  name: string
  postcode: string
  epciCode: string
  epciName: string
  population: number
  department: string
}

/** Where the answer comes from: an intercommunalité whose rules were read, the regional frame, or outside Brittany. */
export type DibodevPublicAidScope = 'detailed' | 'regionalFrame' | 'national'

/**
 * Outcome of a simulation: `incomplete` until a commune is chosen, `eligible`, `check` (eligible if the points
 * listed are confirmed), `notEligible`, `frame` (an estimate on the regional frame), `national` (outside Brittany).
 */
export type DibodevPublicAidStatus = 'incomplete' | 'eligible' | 'check' | 'notEligible' | 'frame' | 'national'

export type DibodevPublicAidSimulationInput = {
  commune: DibodevCommune | null
  projectType: DibodevPublicAidProjectType
  amountHt: number
  employees: number
  isTurnoverUnderLimit: boolean
  isLocalIndependentBusiness: boolean
}

export type DibodevPublicAidSimulationResult = {
  status: DibodevPublicAidStatus
  scope: DibodevPublicAidScope
  scheme: DibodevPublicAidScheme | null
  territoryName: string
  ratePercent: number
  floorHt: number | null
  ceilingHt: number
  maxAid: number
  aidAmount: number
  remainingAmount: number
  reasonKeys: string[]
  checkKeys: string[]
  noteKeys: string[]
  contact: DibodevPublicAidContact | null
  sourceUrl: string
}
