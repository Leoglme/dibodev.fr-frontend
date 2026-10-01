/** Screen ranges of the home page projects grid, from the narrowest to the widest. */
export type HomeFeaturedProjectsDevice = 'phone' | 'tablet' | 'laptop' | 'desktop'

/**
 * Layout of the home page projects grid on one screen range.
 * @type {HomeFeaturedProjectsGridLayout}
 * @property {number} columnsCount - Columns of the grid.
 * @property {number} visibleCount - Cards shown, counted from the first one (the others are hidden on that range).
 */
export type HomeFeaturedProjectsGridLayout = {
  columnsCount: number
  visibleCount: number
}

export type HomeFeaturedProjectsGridLayouts = Record<HomeFeaturedProjectsDevice, HomeFeaturedProjectsGridLayout>
