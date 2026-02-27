import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        ...(process.env.NODE_ENV === 'production'
          ? [
              {
                src: 'https://umami.dibodev.fr/script.js',
                defer: true,
                'data-website-id': 'c1e02f13-f416-4059-b69c-e29da1acbcff',
              },
            ]
          : []),
      ],
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || '',
    mailjetApiKey: process.env.MAILJET_API_KEY || '',
    mailjetApiSecret: process.env.MAILJET_API_SECRET || '',
    storyblokDeliveryApiToken: process.env.NUXT_STORYBLOK_DELIVERY_API_TOKEN || '',
    storyblokSpaceId: process.env.NUXT_STORYBLOK_SPACE_ID || '',
    storyblokManagementToken: process.env.NUXT_STORYBLOK_MANAGEMENT_TOKEN || '',
    mistralApiKey: process.env.MISTRAL_API_KEY || '',
    unsplashAccessKey: process.env.NUXT_UNSPLASH_ACCESS_KEY || '',
    dashboardPassword: process.env.DASHBOARD_PASSWORD || '',
    dashboardSessionToken: process.env.DASHBOARD_SESSION_TOKEN || '',
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    gscRefreshToken: process.env.GSC_REFRESH_TOKEN || '',
    /** Optionnel : projet GCP pour quota (header x-goog-user-project). Ex: gen-lang-client-0567535137 */
    gscQuotaProjectId: process.env.GSC_QUOTA_PROJECT_ID || '',
    /** Optionnel : JSON du Service Account (string) pour auth server-to-server. Sinon on utilise GSC_REFRESH_TOKEN. */
    gscServiceAccountJson: process.env.GSC_SERVICE_ACCOUNT_JSON || '',
    public: {
      storyblok: {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
      },
    },
  },
  // Cast needed: 'robots' is provided by @nuxtjs/robots and not in core Nuxt routeRules typings
  routeRules: {
    '/dashboard': { robots: false },
    '/dashboard/**': { robots: false },
    '/en/dashboard': { robots: false },
    '/en/dashboard/**': { robots: false },
    '/es/dashboard': { robots: false },
    '/es/dashboard/**': { robots: false },
  } as Record<string, object>,
  robots: {
    disallow: ['/dashboard', '/en/dashboard', '/es/dashboard'],
  },
  sitemap: {
    exclude: ['/dashboard', '/dashboard/**', '/en/dashboard', '/en/dashboard/**', '/es/dashboard', '/es/dashboard/**'],
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  devServer: {
    https: true,
  },
  vite: {
    plugins: [mkcert(), tailwindcss()],
  },
  nitro: {
    preset: process.env.NITRO_PRESET || 'node-server',
    output: {
      publicDir: '.output/public',
      serverDir: '.output/server',
    },
    storage: {
      data: {
        driver: 'fs',
        base: './.data/kv',
      },
    },
    prerender: {
      crawlLinks: true,
    },
    serverAssets: [
      {
        baseName: 'mjml-templates',
        dir: './server/services/mail/mjml/templates',
      },
    ],
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: 'eu',
        },
        usePlugin: true,
      },
    ],
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts',
  ],
  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', file: 'fr.json', iso: 'fr-FR' },
      { code: 'en', language: 'en-US', file: 'en.json', iso: 'en-US' },
      { code: 'es', language: 'es-ES', file: 'es.json', iso: 'es-ES' },
    ],
    defaultLocale: 'fr',
    langDir: 'locales',
    strategy: 'prefix_except_default',
  },
  /** Utilisé par @nuxtjs/sitemap. Avec i18n strategy !== no_prefix, le sitemap inclut automatiquement les URLs par locale (fr, en, es) et les balises hreflang. */
  site: {
    url: 'https://dibodev.fr',
    name: 'Dibodev',
  },
  googleFonts: {
    families: {
      Rubik: {
        wght: [400, 500, 600, 700], // Use only the weights you need (e.g., Regular, Medium, Bold)
      },
    },
    display: 'swap', // Ensures text is visible during font loading
    subsets: ['latin'], // Use 'latin-ext' if you need extended Latin characters
    download: true, // Download fonts locally
    base64: true, // Encode fonts in Base64 to avoid external requests
    inject: true, // Inject the generated CSS into the project
    overwriting: true, // Overwrite existing font files to avoid duplicates
    outputDir: 'assets/fonts', // Store downloaded fonts in assets/fonts
    stylePath: 'assets/css/google-fonts.css', // Path for the generated CSS
    fontsDir: 'fonts', // Relative to outputDir
    fontsPath: '../fonts', // Path used in the CSS file
    prefetch: false, // Disable prefetch for SSG (not needed with local fonts)
    preconnect: false, // Disable preconnect for SSG (not needed with local fonts)
    preload: true, // Preload the font CSS for faster rendering
    useStylesheet: false, // Use inline CSS (via base64) instead of external stylesheet
  },
  plugins: ['~/plugins/VeeValidate'],
})
