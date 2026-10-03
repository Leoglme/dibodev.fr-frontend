import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * Secondary call to action of a landing section: either a route or an in-page target to scroll to.
 * @type {DibodevLandingSecondaryCta}
 * @property {string} text - The button label.
 * @property {string} [target] - CSS selector of the section to scroll to (when no route).
 * @property {string} [to] - Route to navigate to (takes precedence over `target`).
 * @property {string} [trackedToolId] - Free tool opened by the button, sent with `tool_teaser_clicked` (no event when absent).
 */
export type DibodevLandingSecondaryCta = {
  text: string
  target?: string
  to?: string
  trackedToolId?: string
}

/**
 * Horizontal alignment of a landing section without visual: `left` (default, text column on the left)
 * or `center` (title, intro and buttons centred, used when nothing fills the right-hand side).
 * @type {DibodevLandingAlignment}
 */
export type DibodevLandingAlignment = 'left' | 'center'

/**
 * Type definitions for the DibodevLandingSection component props.
 * @type {DibodevLandingSectionProps}
 * @property {DibodevBreadcrumbItem[]} breadcrumbs - Trail displayed above the title on inner pages (empty on the home page).
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string | null} title - Plain title (used when no structured title parts are given).
 * @property {string} titlePart1 - Structured title: text before the first highlighted word.
 * @property {string} titleHighlight1 - Structured title: first highlighted word.
 * @property {string} titlePart2 - Structured title: text between the highlighted words.
 * @property {string} titleHighlight2 - Structured title: second highlighted word.
 * @property {string} titlePart3 - Structured title: text after the second highlighted word.
 * @property {string} description - Intro paragraph under the title.
 * @property {string} ctaText - Primary button label (no primary button when empty).
 * @property {string} ctaTarget - CSS selector scrolled to when the primary button has no route.
 * @property {string | null} ctaPrimaryTo - Route of the primary button.
 * @property {DibodevLandingSecondaryCta | null} secondaryCta - Optional outlined secondary button.
 * @property {DibodevStatItemProps[]} stats - Key figures displayed in a full-width row under the header.
 * @property {boolean} compactTitle - Smaller title, for long SEO titles (projects, categories, sectors).
 * @property {DibodevLandingAlignment} align - Text alignment when the section has no visual.
 * @property {string[]} reassurances - Short reassurance points listed under the buttons (none when empty).
 * @property {boolean} decorated - Whether soft brand halos are drawn behind the header (home and service pages).
 * @property {boolean} singleLineTitleOnPhones - Whether the title shrinks to stay on one line on phones (short titles only).
 */
export type DibodevLandingSectionProps = {
  breadcrumbs: DibodevBreadcrumbItem[]
  eyebrow: string
  title: string | null
  titlePart1: string
  titleHighlight1: string
  titlePart2: string
  titleHighlight2: string
  titlePart3: string
  description: string
  ctaText: string
  ctaTarget: string
  ctaPrimaryTo: string | null
  secondaryCta: DibodevLandingSecondaryCta | null
  stats: DibodevStatItemProps[]
  compactTitle: boolean
  align: DibodevLandingAlignment
  reassurances: string[]
  decorated: boolean
  singleLineTitleOnPhones: boolean
}
