/**
 * One level of the breadcrumb trail.
 * @type {DibodevBreadcrumbItem}
 * @property {string} label - Text displayed for the level.
 * @property {string | null} to - Localized route of the level; null for the current page (last item).
 */
export type DibodevBreadcrumbItem = {
  label: string
  to: string | null
}

/**
 * Type definitions for the DibodevBreadcrumb component props.
 * @type {DibodevBreadcrumbProps}
 * @property {DibodevBreadcrumbItem[]} items - The trail, from the home page to the current page.
 * @property {DibodevBreadcrumbAlign} align - Alignment of the trail: left on phones, centred under a centred title above.
 */
export type DibodevBreadcrumbProps = {
  items: DibodevBreadcrumbItem[]
  align: DibodevBreadcrumbAlign
}

export type DibodevBreadcrumbAlign = 'start' | 'centerFromSmallScreens'
