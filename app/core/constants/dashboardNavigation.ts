import type { DashboardNavGroup, DashboardNavItem } from '~/core/types/Dashboard'

/** Overview entry, alone in the "Pilotage" group. */
export const DASHBOARD_OVERVIEW_ITEM: DashboardNavItem = {
  key: 'overview',
  label: 'Vue d’ensemble',
  path: '/dashboard',
  icon: 'layout-dashboard',
  tone: 'ink',
  matches: [],
}

/** Articles entry: the list, the editor and the legacy publication page. */
export const DASHBOARD_ARTICLES_ITEM: DashboardNavItem = {
  key: 'articles',
  label: 'Articles',
  path: '/dashboard/articles',
  icon: 'file-text',
  tone: 'violet',
  matches: ['/dashboard/generate-article', '/dashboard/publish-article'],
}

/** Site editor entry: the content of the public site edited without Storyblok. */
export const DASHBOARD_SITE_EDITOR_ITEM: DashboardNavItem = {
  key: 'siteEditor',
  label: 'Éditeur du site',
  path: '/dashboard/site-editor',
  icon: 'panels-top-left',
  tone: 'cyan',
  matches: [],
}

/** Translations entry. */
export const DASHBOARD_TRANSLATIONS_ITEM: DashboardNavItem = {
  key: 'translations',
  label: 'Traductions',
  path: '/dashboard/translations',
  icon: 'languages',
  tone: 'pink',
  matches: [],
}

/** Search Console queries entry. */
export const DASHBOARD_SEARCH_ITEM: DashboardNavItem = {
  key: 'search',
  label: 'Requêtes Google',
  path: '/dashboard/search-performance',
  icon: 'trending-up',
  tone: 'green',
  matches: [],
}

/** Google indexing entry. */
export const DASHBOARD_INDEXING_ITEM: DashboardNavItem = {
  key: 'indexing',
  label: 'Indexation',
  path: '/dashboard/indexing',
  icon: 'scan-search',
  tone: 'cyan',
  matches: [],
}

/** Lighthouse audit entry. */
export const DASHBOARD_AUDIT_ITEM: DashboardNavItem = {
  key: 'audit',
  label: 'Audit SEO',
  path: '/dashboard/audit',
  icon: 'gauge',
  tone: 'amber',
  matches: [],
}

/** Sidebar groups, in display order (same order as the weekly review: measure, content, Google). */
export const DASHBOARD_NAV_GROUPS: DashboardNavGroup[] = [
  { label: 'Pilotage', items: [DASHBOARD_OVERVIEW_ITEM] },
  { label: 'Contenu', items: [DASHBOARD_ARTICLES_ITEM, DASHBOARD_SITE_EDITOR_ITEM, DASHBOARD_TRANSLATIONS_ITEM] },
  { label: 'Google', items: [DASHBOARD_SEARCH_ITEM, DASHBOARD_INDEXING_ITEM, DASHBOARD_AUDIT_ITEM] },
]

/** Every navigation entry, flattened (command palette, route matching). */
export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = DASHBOARD_NAV_GROUPS.flatMap(
  (group: DashboardNavGroup): DashboardNavItem[] => group.items,
)

/** Path of the article editor, opened by every « Nouvel article » action. */
export const DASHBOARD_EDITOR_PATH: string = '/dashboard/generate-article'
