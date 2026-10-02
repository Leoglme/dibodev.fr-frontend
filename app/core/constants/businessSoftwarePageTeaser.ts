import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'
import { NBSP } from '~/core/constants/typography'

/** Callout pointing to the business software page, shown on the articles and on the related project, listing and tool pages. */
export const BUSINESS_SOFTWARE_PAGE_TEASER: DibodevToolTeaserContent = {
  toolId: 'business-software-page',
  routeName: 'custom-business-software',
  icon: 'Monitor',
  wording: {
    fr: {
      emphasizedIntro: `Un logiciel pensé pour votre activité${NBSP}?`,
      text: `Planning, stock, devis, suivi du temps${NBSP}: je développe des applications métier sur mesure pour les TPE et PME, au forfait.`,
      linkLabel: `Application métier sur mesure à Rennes${NBSP}: outils, prix et méthode`,
      listLabel: 'Application métier sur mesure à Rennes',
    },
    en: {
      emphasizedIntro: 'Software built around your business?',
      text: 'Scheduling, stock, quotes, time tracking: I build custom business software for small and mid-sized companies, at a fixed price.',
      linkLabel: 'Custom business software in Rennes: tools, prices and method',
      listLabel: 'Custom business software in Rennes',
    },
    es: {
      emphasizedIntro: '¿Un software pensado para tu actividad?',
      text: 'Planificación, stock, presupuestos, control de horas: desarrollo software de gestión a medida para pymes, a precio cerrado.',
      linkLabel: 'Software de gestión a medida en Rennes: herramientas, precios y método',
      listLabel: 'Software de gestión a medida en Rennes',
    },
  },
}

/** Project type presented by the business software page: its project pages show the callout. */
export const BUSINESS_SOFTWARE_CATEGORY_KEY: CategoryKey = 'application-metier'

export const BUSINESS_SOFTWARE_RELATED_CATEGORY_KEYS: CategoryKey[] = ['application-metier', 'saas', 'logiciel']
export const BUSINESS_SOFTWARE_RELATED_SECTOR_KEYS: SectorKey[] = ['b2b', 'logistique', 'productivite', 'sport-loisirs']
