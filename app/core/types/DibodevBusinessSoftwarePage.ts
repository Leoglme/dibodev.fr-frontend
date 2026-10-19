import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

/**
 * Delivered project illustrating a tool.
 * @type {DibodevBusinessSoftwareToolExample}
 * @property {string} name - Short project name.
 * @property {string} route - Route of the project page.
 */
export type DibodevBusinessSoftwareToolExample = {
  name: string
  route: string
}

/**
 * Static configuration of an example tool of the business software page.
 * @type {DibodevBusinessSoftwareToolConfig}
 * @property {string} key - Translation key under `businessSoftwarePage.tools`.
 * @property {DibodevServiceIconName} icon - The service icon displayed on the card.
 * @property {string | null} exampleSlug - Slug of a delivered project doing this job, or null when none.
 */
export type DibodevBusinessSoftwareToolConfig = {
  key: string
  icon: DibodevServiceIconName
  exampleSlug: string | null
}

/**
 * Example tool displayed on the business software page.
 * @type {DibodevBusinessSoftwareTool}
 * @property {string} title - The tool name (e.g. "Scheduling and interventions").
 * @property {string} description - What the tool does for the business.
 * @property {DibodevServiceIconName} icon - The service icon displayed on the card.
 * @property {DibodevBusinessSoftwareToolExample | null} exampleProject - Delivered project shown under the card.
 */
export type DibodevBusinessSoftwareTool = {
  title: string
  description: string
  icon: DibodevServiceIconName
  exampleProject: DibodevBusinessSoftwareToolExample | null
}

/**
 * Static configuration of a way the request is phrased (web app, custom tool, redesign) on the business software page.
 * @type {DibodevBusinessSoftwareVariantConfig}
 * @property {string} key - Translation key under `businessSoftwarePage.variants.items`.
 * @property {DibodevServiceIconName} icon - The service icon displayed on the card.
 * @property {string} link - Next step of the card: an anchor of the page, a route name or a path.
 */
export type DibodevBusinessSoftwareVariantConfig = {
  key: string
  icon: DibodevServiceIconName
  link: string
}

/**
 * Way the request is phrased, as displayed on the business software page.
 * @type {DibodevBusinessSoftwareVariant}
 * @property {string} key - Translation key of the variant.
 * @property {DibodevServiceIconName} icon - The service icon displayed on the card.
 * @property {string} title - The phrasing (e.g. "Business web app").
 * @property {string} description - What it means in practice.
 * @property {string} linkLabel - Label of the next step.
 * @property {string} to - Destination of the next step, localized.
 */
export type DibodevBusinessSoftwareVariant = {
  key: string
  icon: DibodevServiceIconName
  title: string
  description: string
  linkLabel: string
  to: string
}

/**
 * Display settings of a service the tools connect to.
 * @type {DibodevBusinessSoftwareIntegrationConfig}
 * @property {string} key - Translation key under `businessSoftwarePage.tools.integrations.items`.
 * @property {string} logoSrc - Path of the logo or pictogram in `public/`.
 * @property {string} logoBackground - Soft tint behind the logo, matching its colour.
 * @property {boolean} [hasRoundLogo] - True for a circular logo, drawn slightly larger because a circle reads smaller than a square of the same size.
 */
export type DibodevBusinessSoftwareIntegrationConfig = {
  key: string
  logoSrc: string
  logoBackground: string
  hasRoundLogo?: boolean
}

/**
 * Service the tools connect to, as displayed on the business software page.
 * @type {DibodevBusinessSoftwareIntegration}
 * @property {string} name - Service or file format (e.g. "Stripe", "Excel and CSV").
 * @property {string} label - What it brings to the tool (e.g. "Online payments").
 */
export type DibodevBusinessSoftwareIntegration = DibodevBusinessSoftwareIntegrationConfig & {
  name: string
  label: string
}
