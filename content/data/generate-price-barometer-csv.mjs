// Writes public/data/prix-logiciel-sur-mesure-<edition>.csv from content/data/price-barometer-<edition>.json.
// Usage: node content/data/generate-price-barometer-csv.mjs [edition]
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const edition = process.argv[2] ?? '2026'
const dataset = JSON.parse(readFileSync(join(REPO, 'content', 'data', `price-barometer-${edition}.json`), 'utf8'))

const KIND_LABELS = {
  agency: 'agence',
  freelance: 'freelance',
  platform: 'plateforme',
  media: 'média',
  directory: 'annuaire',
}
const RANGE_KEYS = ['simpleTool', 'businessApp', 'platform', 'overall']
const header = [
  'source',
  'type',
  'ville',
  'outil_simple_min_eur',
  'outil_simple_max_eur',
  'application_metier_min_eur',
  'application_metier_max_eur',
  'plateforme_min_eur',
  'plateforme_max_eur',
  'fourchette_globale_min_eur',
  'fourchette_globale_max_eur',
  'tjm_min_eur',
  'tjm_max_eur',
  'maintenance_min_pct_an',
  'maintenance_max_pct_an',
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
  cell(source.dayRate?.min),
  cell(source.dayRate?.max),
  cell(source.maintenancePercentPerYear?.min),
  cell(source.maintenancePercentPerYear?.max),
  quote(source.sourceUrl),
  quote(source.publishedAt),
  quote(dataset.checkedAt),
  quote(dataset.license),
])
const csv = [header.join(';'), ...rows.map((row) => row.join(';'))].join('\n') + '\n'
const target = join(REPO, 'public', 'data', `prix-logiciel-sur-mesure-${edition}.csv`)
writeFileSync(target, csv)
console.log(`${rows.length} sources -> ${target}`)
