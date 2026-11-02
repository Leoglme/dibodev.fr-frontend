import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevSitemapTreeBranch = {
  label: string
  children: string[]
}

export type DibodevSitemapTreeNote = {
  title: string
  text: string
}

/**
 * Props of the section that draws the plan of a site or of an application.
 * @type {DibodevSitemapTreeSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph under the title.
 * @property {string} ariaLabel - The whole plan in one sentence, for screen readers.
 * @property {string} rootLabel - The first page or screen (home, dashboard).
 * @property {DibodevSitemapTreeBranch[]} branches - The pages under it, in menu order.
 * @property {string} footerNote - What goes in the footer (legal pages), empty for none.
 * @property {DibodevSitemapTreeNote[]} notes - Explanations under the plan.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevSitemapTreeSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  ariaLabel: string
  rootLabel: string
  branches: DibodevSitemapTreeBranch[]
  footerNote: string
  notes: DibodevSitemapTreeNote[]
  tone: DibodevSectionTone
}
