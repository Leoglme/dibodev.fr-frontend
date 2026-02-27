import type { IndexingStatusRow, IndexingRefreshState } from '~~/server/types/indexing'

const PREFIX = 'indexing'
const ROWS_KEY = `${PREFIX}:rows`
const REFRESH_KEY = `${PREFIX}:refresh`

function getStorage() {
  return useStorage('data')
}

/**
 * Récupère toutes les lignes de statut en cache.
 */
export async function getIndexingRows(): Promise<Record<string, IndexingStatusRow>> {
  const storage = getStorage()
  const raw = await storage.getItem<Record<string, IndexingStatusRow>>(ROWS_KEY)
  return raw ?? {}
}

/**
 * Enregistre une ligne (par URL).
 */
export async function setIndexingRow(row: IndexingStatusRow): Promise<void> {
  const storage = getStorage()
  const rows = await getIndexingRows()
  rows[row.url] = row
  await storage.setItem(ROWS_KEY, rows)
}

/**
 * Met à jour plusieurs lignes en une fois.
 */
export async function setIndexingRows(rows: Record<string, IndexingStatusRow>): Promise<void> {
  const storage = getStorage()
  await storage.setItem(ROWS_KEY, rows)
}

/**
 * État du job de refresh (idle | running).
 */
export async function getRefreshState(): Promise<IndexingRefreshState> {
  const storage = getStorage()
  const raw = await storage.getItem<IndexingRefreshState>(REFRESH_KEY)
  return raw ?? { status: 'idle' }
}

export async function setRefreshState(state: IndexingRefreshState): Promise<void> {
  const storage = getStorage()
  await storage.setItem(REFRESH_KEY, state)
}
