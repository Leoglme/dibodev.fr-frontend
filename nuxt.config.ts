import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dibodev - Développeur Web Freelance à Rennes',
      script: [
        {
          src: 'https://umami.dibodev.fr/script.js',
          defer: true,
          'data-website-id': 'c1e02f13-f416-4059-b69c-e29da1acbcff',
        },
      ],
    },
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || '',
    mailjetApiKey: process.env.MAILJET_API_KEY || '',
    mailjetApiSecret: process.env.MAILJET_API_SECRET || '',
    storyblokDeliveryApiToken: process.env.NUXT_STORYBLOK_DELIVERY_API_TOKEN || '',
    public: {
      storyblok: {
        accessToken: process.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN || '',
      },
    },
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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts',
  ],
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
