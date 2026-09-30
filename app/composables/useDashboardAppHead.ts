/**
 * Head tags of the installable back-office: manifest, home screen icon, status bar and no indexing.
 *
 * @param {string} themeColor - Color of the browser and status bars behind the current layout.
 * @returns {void}
 */
export function useDashboardAppHead(themeColor: string): void {
  useHead({
    meta: [
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: themeColor },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Dibodev Admin' },
    ],
    link: [
      { rel: 'manifest', href: '/dashboard.webmanifest', key: 'manifest' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/dashboard-icons/apple-touch-icon.png',
        key: 'apple-touch-icon',
      },
    ],
  })
}
