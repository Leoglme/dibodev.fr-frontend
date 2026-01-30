/**
 * Déclaration des clés de traduction pour un typage strict de $t().
 * Les clés doivent correspondre aux fichiers locales/*.json.
 */
declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    meta: {
      title: string
      description: string
    }
    nav: {
      home: string
      myProjects: string
      contactMe: string
    }
    footer: {
      contactMe: string
      home: string
      myProjects: string
      contactPage: string
      legal: string
      privacy: string
      allRightsReserved: string
      tags: {
        webDeveloper: string
        mobile: string
        software: string
        ai: string
        rennesFrance: string
        freelance: string
      }
    }
    home: {
      hero: {
        titleBefore: string
        titleHighlight: string
        titleAfter: string
        subtitleBefore: string
        subtitleHighlight: string
        subtitleAfter: string
        description: string
        cta: string
      }
      services: {
        title: string
        intro: string
        items: {
          projectLaunch: { title: string; description: string }
          website: { title: string; description: string }
          mobileApps: { title: string; description: string }
          businessInterfaces: { title: string; description: string }
          apiConnectors: { title: string; description: string }
          seo: { title: string; description: string }
          cloudDevOps: { title: string; description: string }
          ai: { title: string; description: string }
        }
      }
      stats: {
        yearsExperience: string
        yearsInCompany: string
        projectsDone: string
        passion: string
      }
      favoriteProjects: {
        title: string
        seeAllProjects: string
      }
      pricing: {
        title: string
        intro: string
        hours: string
        requestQuote: string
        pricePerDay: string
        priceTTC: string
        priceHT: string
      }
    }
  }
}

export {}
