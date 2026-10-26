import type { WordPressPluginCheck } from '~~/server/types/tools/wordpressHackCheck'

export const WORDPRESS_LATEST_CORE_VERSION: string = '7.1.3'

export const WORDPRESS_PLUGIN_CHECKS: WordPressPluginCheck[] = [
  {
    slug: 'updraftplus',
    name: 'UpdraftPlus',
    fixedVersionPerMajorLine: ['1.26.13', '2.26.13'],
    advisoryUrl: 'https://teamupdraft.com/blog/security-incident-october-2026/',
    advisoryDate: '2026-10-19',
    isCheckedOnEverySite: true,
  },
  {
    slug: 'ninja-forms',
    name: 'Ninja Forms',
    fixedVersionPerMajorLine: ['3.15.4'],
    advisoryUrl:
      'https://patchstack.com/articles/four-ways-back-in-the-wordpress-xss-campaign-that-hides-its-own-admin-account/',
    advisoryDate: '2026-10-06',
    isCheckedOnEverySite: true,
  },
  {
    slug: 'woo-product-bundle',
    name: 'WPC Product Bundles for WooCommerce',
    fixedVersionPerMajorLine: ['8.6.7'],
    advisoryUrl:
      'https://patchstack.com/articles/four-ways-back-in-the-wordpress-xss-campaign-that-hides-its-own-admin-account/',
    advisoryDate: '2026-10-06',
    isCheckedOnEverySite: false,
  },
  {
    slug: 'bricksforge',
    name: 'Bricksforge',
    fixedVersionPerMajorLine: ['3.1.8.10'],
    advisoryUrl:
      'https://patchstack.com/articles/critical-unauthenticated-arbitrary-file-upload-vulnerability-exploited-in-bricksforge-plugin/',
    advisoryDate: '2026-10-08',
    isCheckedOnEverySite: false,
  },
  {
    slug: 'elementor-pro',
    name: 'Elementor Pro',
    fixedVersionPerMajorLine: ['4.2.2'],
    advisoryUrl:
      'https://www.bleepingcomputer.com/news/security/critical-elementor-pro-flaw-exploited-to-take-over-wordpress-sites/',
    advisoryDate: '2026-09-03',
    isCheckedOnEverySite: false,
  },
  {
    slug: 'super-forms',
    name: 'Super Forms',
    fixedVersionPerMajorLine: ['6.3.314'],
    advisoryUrl: 'https://www.hexnode.com/threat-watch/cve-2026-14894-super-forms-elementor-pro-rce-under-attack/',
    advisoryDate: '2026-09-07',
    isCheckedOnEverySite: false,
  },
  {
    slug: 'all-in-one-wp-migration',
    name: 'All-in-One WP Migration',
    fixedVersionPerMajorLine: ['7.110'],
    advisoryUrl:
      'https://www.bleepingcomputer.com/news/security/wordpress-backup-plugin-flaw-exposes-millions-of-sites-to-takeover-attacks',
    advisoryDate: '2026-09-02',
    isCheckedOnEverySite: false,
  },
]

export const WORDPRESS_KNOWN_BACKDOOR_PLUGIN_SLUGS: string[] = [
  'load-stack-35c',
  'text-gantry-eb0',
  'hero-frame-2c5',
  'card-binder-104',
  'style-bridge-8f5',
  'media-kit-183',
  'render-helper-232b',
  'js-fix-757a',
  'lazy-tool-3055',
  'minify-tool-bf90',
  'site-health-364f',
  'site-health-cache',
  'type-stack-285',
]
