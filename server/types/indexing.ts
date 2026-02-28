/**
 * Type d’entrée (blog, page statique, projet Storyblok).
 */
export type IndexingUrlType = 'blog' | 'page' | 'project'

/**
 * Une ligne de statut d’indexation (cache en DB/storage).
 */
export type IndexingStatusRow = {
  url: string
  title: string
  type: IndexingUrlType
  /** PASS | NEUTRAL | FAIL */
  verdict?: string
  /** Chaîne exacte de l’API (ex. "Envoyée et indexée", "Page avec redirection"). */
  coverageState?: string
  /** Dernière exploration Google (ISO). */
  lastCrawlTime?: string
  /** Lien vers l’outil d’inspection Search Console. */
  inspectionResultLink?: string
  /** URL canonique Google (utile pour redirections). */
  googleCanonical?: string
  /** Dernière mise à jour du cache (ISO). */
  checkedAt?: string
}

/**
 * État du job de refresh (pour polling côté client).
 */
export type IndexingRefreshState = {
  status: 'idle' | 'running'
  startedAt?: string
  finishedAt?: string
  /** URL en cours d’actualisation par le job (pour afficher le loader sur la ligne). */
  currentUrl?: string
}
