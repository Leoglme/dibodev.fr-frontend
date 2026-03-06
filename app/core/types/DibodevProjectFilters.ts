import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'

/**
 * Props du composant DibodevProjectFilters.
 * Utilisé sur les pages projets, projets/categorie et projets/secteur.
 */
export type DibodevProjectFiltersProps = {
  /** Liste des projets (pour dériver les options du filtre langage). */
  allProjects: DibodevProject[]
  /** Titre accessible de la barre de recherche. */
  searchTitle: string
  /** Placeholder de la barre de recherche. */
  searchPlaceholder: string
  /** Label option « tous les langages » (pour reset au changement de locale). */
  allLanguagesLabel: string
}

/**
 * Modèles v-model exposés par DibodevProjectFilters.
 */
export type DibodevProjectFiltersModel = {
  /** Terme de recherche texte. */
  searchTerm: string
  /** Option de langage sélectionnée (stack/techno). */
  selectedLanguage: DibodevSelectOption
}
