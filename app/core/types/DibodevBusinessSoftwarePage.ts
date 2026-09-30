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
 * Display settings of a service the tools connect to.
 * @type {DibodevBusinessSoftwareIntegrationConfig}
 * @property {string} key - Translation key under `businessSoftwarePage.tools.integrations.items`.
 * @property {string} logoSrc - Path of the logo or pictogram in `public/`.
 * @property {string} logoBackground - Soft tint behind the logo, matching its colour.
 */
export type DibodevBusinessSoftwareIntegrationConfig = {
  key: string
  logoSrc: string
  logoBackground: string
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
