import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices were last read (written on 28 October 2026, prices read again on 1 November): check them twice a year and move this date. */
export const INVENTORY_MANAGEMENT_PAGE_UPDATED_AT: string = '2026-11-01'

export const INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG: string = 'stockpme'

/** Product sheet of StockPME, "Mouvement(s)" tab: movement history with serial number, date, warehouse, quantity and user. */
export const INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL: string = '/images/tools/stockpme-inventory.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-de-stock-sur-mesure-pme-inventaire',
  'alternative-erplain-logiciel-gestion-de-stock',
  'alternative-zoho-inventory-logiciel-gestion-de-stock',
  'logiciel-metier-saas-etagere-ou-sur-mesure',
  'alternative-rentman-logiciel-location-materiel',
  'logiciel-metier-b2b-quitter-excel-signes',
  'facture-electronique-artisan-ce-qui-change',
]

export const INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free cycle count sheet and supplier goods receipt note, in French only (French accounting and consumer rules). */
export const INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH: string = '/modeles/fiche-inventaire-bon-de-reception-stock.pdf'

/** Excel version of the free template: differences, accuracy rate and totals calculated. */
export const INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH: string = '/modeles/fiche-inventaire-bon-de-reception-stock.xlsx'

/** Physical inventory at least once every twelve months (French Commercial Code, art. L123-12). */
export const ANNUAL_INVENTORY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219304',
}

/** Purchase orders, delivery notes, invoices and inventory book kept 10 years from the end of the financial year (art. L123-22). */
export const DOCUMENT_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F10029',
}

/** Stocks valued at cost price, or at the market price when lower, with no exemption whatever the number of items (CGI art. 38-3). */
export const STOCK_VALUATION_SOURCE: DibodevSourceReference = {
  name: 'BOFiP (impots.gouv.fr)',
  url: 'https://bofip.impots.gouv.fr/bofip/1966-PGP.html/identifiant=BOI-BIC-PDSTK-20-20-10-20120912',
}

/** VAT due on goods taken out of stock for purposes other than the business when VAT was deducted on purchase (self-supply, § 90). */
export const STOCK_WITHDRAWAL_VAT_SOURCE: DibodevSourceReference = {
  name: 'BOFiP (impots.gouv.fr)',
  url: 'https://bofip.impots.gouv.fr/bofip/134-PGP.html/identifiant%3DBOI-TVA-CHAMP-10-20-20-20200826',
}

/** Use-by date (DLC): no sale the day after, 1 500 € fine per expired product; best-before date (DDM) products may still be sold. */
export const USE_BY_DATE_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10990',
}
