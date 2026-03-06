/**
 * Composable pour le select secteur (options avec href selon la locale).
 * Utilisé dans la section projets et sur la page secteur pour un typage strict
 * et des liens fr/en/es crawlables.
 */

import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { DibodevSelectOptionWithHref } from '~/core/types/DibodevSelect'
import type { SectorKey } from '~/core/constants/projectEnums'
import { allSectorKeys, parseSectorFromSlug, sectorToSlug } from '~/core/constants/sectorSlugs'
import type { SupportedLocale } from '~/core/constants/sectorSlugs'

export type UseSectorSelectReturn = {
  sectorOptionsWithHref: ComputedRef<DibodevSelectOptionWithHref[]>
  selectedSectorFromRoute: ComputedRef<DibodevSelectOptionWithHref>
}

/**
 * Options secteur avec href (locale courante) et option sélectionnée selon la route.
 */
export function useSectorSelect(): UseSectorSelectReturn {
  const { t, locale } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  const sectorOptionsWithHref: ComputedRef<DibodevSelectOptionWithHref[]> = computed(
    (): DibodevSelectOptionWithHref[] => {
      const loc: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
      const allOption: DibodevSelectOptionWithHref = {
        label: t('projects.section.allSectors'),
        value: 'all',
        href: localePath('projects'),
      }
      const keys: SectorKey[] = allSectorKeys()
      const sectorOpts: DibodevSelectOptionWithHref[] = keys.map(
        (key: SectorKey): DibodevSelectOptionWithHref => ({
          label: t(`projects.sectors.${key}`),
          value: key,
          href: localePath({ name: 'projects-sector-slug', params: { slug: sectorToSlug(loc, key) } }),
        }),
      )
      return [allOption, ...sectorOpts]
    },
  )

  const selectedSectorFromRoute: ComputedRef<DibodevSelectOptionWithHref> = computed(
    (): DibodevSelectOptionWithHref => {
      const opts: DibodevSelectOptionWithHref[] = sectorOptionsWithHref.value
      const first: DibodevSelectOptionWithHref = opts[0]!
      const path: string = String(route.path ?? '')
      const isProjectsIndex: boolean =
        path === '/projects' || path === '/projets' || path.endsWith('/projects') || path.endsWith('/projets')
      if (isProjectsIndex) return first
      const slug: string | undefined = route.params.slug as string | undefined
      if (slug == null || slug === '') return first
      const loc: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
      const sectorKey: SectorKey | null = parseSectorFromSlug(loc, slug)
      if (sectorKey == null) return first
      const found: DibodevSelectOptionWithHref | undefined = opts.find(
        (o: DibodevSelectOptionWithHref) => o.value === sectorKey,
      )
      return found ?? first
    },
  )

  return { sectorOptionsWithHref, selectedSectorFromRoute }
}
