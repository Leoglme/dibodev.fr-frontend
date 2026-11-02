/**
 * Writes public/data/prix-site-internet-<edition>.csv from content/data/website-price-barometer-<edition>.json.
 * Usage: node content/data/generate-website-price-barometer-csv.mjs [edition]
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const edition = process.argv[2] ?? '2026'
const dataset = JSON.parse(
  readFileSync(join(REPO, 'content', 'data', `website-price-barometer-${edition}.json`), 'utf8'),
)

const KIND_LABELS = {
  freelance: 'freelance',
  agency: 'agence',
  builder: 'créateur de sites',
  guide: 'guide de prix',
}
const TAX_LABELS = {
  excludingTax: 'HT',
  includingTax: 'TTC',
  net: 'net (TVA non applicable)',
  unspecified: 'non précisé',
}
const RANGE_KEYS = ['onePage', 'showcase', 'fullShowcase']
const header = [
  'source',
  'type',
  'ville',
  'site_une_page_min_eur',
  'site_une_page_max_eur',
  'site_vitrine_min_eur',
  'site_vitrine_max_eur',
  'site_complet_ou_boutique_min_eur',
  'site_complet_ou_boutique_max_eur',
  'maintenance_hebergement_min_eur_mois',
  'maintenance_hebergement_max_eur_mois',
  'ht_ou_ttc',
  'page_source',
  'date_page',
  'releve_le',
  'licence',
]
const cell = (value) => (value === null || value === undefined ? '' : String(value))
const quote = (value) => `"${cell(value).replace(/"/g, '""')}"`
const rows = dataset.sources.map((source) => [
  quote(source.name),
  quote(KIND_LABELS[source.kind] ?? source.kind),
  quote(source.city),
  ...RANGE_KEYS.flatMap((key) => [cell(source.ranges[key]?.min), cell(source.ranges[key]?.max)]),
  cell(source.maintenanceMonthly?.min),
  cell(source.maintenanceMonthly?.max),
  quote(TAX_LABELS[source.taxLabel] ?? source.taxLabel),
  quote(source.sourceUrl),
  quote(source.publishedAt),
  quote(dataset.checkedAt),
  quote(dataset.license),
])
const csv = [header.join(';'), ...rows.map((row) => row.join(';'))].join('\n') + '\n'
const target = join(REPO, 'public', 'data', `prix-site-internet-${edition}.csv`)
writeFileSync(target, csv)
console.log(`${rows.length} sources -> ${target}`)
