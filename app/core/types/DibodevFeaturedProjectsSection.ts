/**
 * Type definitions for the DibodevFeaturedProjectsSection component props.
 * @type {DibodevFeaturedProjectsSectionProps}
 * @property {string[]} projectSlugs - Slugs of the projects to show, in display order (the selection saved from the dashboard by default).
 * @property {string} eyebrow - Small uppercase line above the title (the home page text when empty).
 * @property {string} title - The section title (the home page text when empty).
 * @property {string} intro - Paragraph under the title (the home page text when empty).
 */
export type DibodevFeaturedProjectsSectionProps = {
  projectSlugs: string[]
  eyebrow: string
  title: string
  intro: string
}
