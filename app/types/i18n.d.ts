/**
 * Déclaration des clés de traduction pour un typage strict de $t().
 * Les clés doivent correspondre aux fichiers locales/*.json.
 */
declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    meta: {
      title: string
      description: string
      contact: { title: string; description: string }
      projects: { title: string; description: string }
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
        ctaSecondary: string
      }
      services: {
        title: string
        intro: string
        items: {
          websites: { title: string; description: string }
          apps: { title: string; description: string }
          saas: { title: string; description: string }
          aiAutomation: { title: string; description: string }
          seo: { title: string; description: string }
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
      latestArticles: {
        title: string
        seeAllArticles: string
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
    contact: {
      landing: { description: string; cta: string }
      form: {
        projectTypeLabel: string
        pagesRangeLabel: string
        budgetLabel: string
        budgetPlaceholder: string
        nameLabel: string
        namePlaceholder: string
        emailLabel: string
        emailPlaceholder: string
        messageLabel: string
        messagePlaceholder: string
        submit: string
        submitting: string
        projectType: { website: string; mobile: string; other: string }
        pagesRange: { '1_3': string; '3_6': string; '6_10': string; '10_plus': string }
        successMessage: string
        errorInvalid: string
        errorServer: string
        errorUnexpected: string
      }
      sidebar: { phone: string; location: string }
    }
    projects: {
      landing: { title: string; description: string; cta: string }
      section: {
        searchTitle: string
        searchPlaceholder: string
        allLanguages: string
        allCategories: string
        noResultsTitle: string
        noResultsDescription: string
      }
    }
    project: {
      landing: { discover: string; viewSite: string }
      gallery: { title: string; subtitle: string; preview: string; close: string }
      about: { descriptionTitle: string; devEnvironmentTitle: string }
      recommended: { title: string; seeAllProjects: string }
    }
    legal: {
      meta: { title: string; description: string }
      title: string
      publisher: {
        title: string
        introBefore: string
        introBold: string
        introAfter: string
        name: string
        legalForm: string
        addressLine1: string
        addressLine2: string
        addressLine3: string
        contact: string
        siret: string
      }
      host: {
        title: string
        intro: string
        name: string
        addressLine1: string
        addressLine2: string
        addressLine3: string
      }
      activity: { title: string; description: string }
    }
    privacy: {
      meta: { title: string; description: string }
      title: string
      intro: string
      dataController: { title: string; content: string }
      contactFormData: { title: string; paragraph1: string; paragraph2: string }
      subcontractor: { title: string; contentBefore: string; contentBold: string; contentAfter: string }
      umami: { title: string; contentBefore: string; contentBold: string; contentAfter: string }
      rights: { title: string; content: string; complaint: string; cnil: string }
      applicableLaw: { title: string; content: string }
    }
    cms: { loading: string }
  }
}

export {}
