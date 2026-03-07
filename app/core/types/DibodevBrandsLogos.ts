/**
 * Type definitions for the dibodev brands logos component props
 * @type {DibodevBrandsLogosProps}
 * @property {string[]} names - Slugs Simple Icons — ex: ["typescript", "vue.js", "adonisjs", "Figma"]
 * @property {boolean} [showLabels] - Afficher le nom de la techno sous l'icône (SEO / UX)
 */
export type DibodevBrandsLogosProps = {
  names: string[]
  showLabels?: boolean
}
