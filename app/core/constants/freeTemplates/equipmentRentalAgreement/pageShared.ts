import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT: string = '2026-11-08'

export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-equipment-rental-agreement'

/** Civil code, art. 1720 (with art. 1719): the lessor delivers the thing in good repair, keeps it fit for use and ensures peaceful enjoyment. */
export const EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442784',
}

/** Civil code, art. 1728: the renter uses the thing reasonably, for the use set by the contract, and pays the price on the agreed dates. */
export const EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000029336832',
}

/** Civil code, art. 1730 (with art. 1731): with a condition report, the thing goes back as received, wear and force majeure aside. */
export const EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442873',
}

/** Civil code, art. 1732: the renter answers for damage and losses during the rental, unless proven to be without fault. */
export const EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006442892',
}

/** VAT on deposits asked by lessors of movable goods: taxed only when kept for its contractual cause, excess over the real risk taxed at once. */
export const EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE: DibodevSourceReference = {
  name: 'BOFiP-Impôts',
  url: 'https://bofip.impots.gouv.fr/bofip/375-PGP.html/identifiant=BOI-TVA-BASE-10-10-10-20220511',
}
