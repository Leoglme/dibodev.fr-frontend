import type { DibodevGdprCookieCheckPageContent } from '~/core/types/DibodevGdprCookieCheckPage'
import {
  GDPR_ARTICLE_82_SOURCE,
  GDPR_CNIL_AUDIENCE_SOURCE,
  GDPR_CNIL_FAQ_SOURCE,
  GDPR_CNIL_GUIDELINES_SOURCE,
  GDPR_CNIL_RECOMMENDATION_SOURCE,
  GDPR_CNIL_SANCTIONS_SOURCE,
  GDPR_CNIL_SESSION_REPLAY_SOURCE,
  GDPR_LEGAL_NOTICE_SOURCE,
} from '~/core/constants/gdprCookieCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GDPR_COOKIE_CHECK_PAGE_FR: DibodevGdprCookieCheckPageContent = {
  meta: {
    title: `Site conforme RGPD${NBSP}? Test gratuit des cookies et traceurs`,
    description: `Entrez l’adresse de votre site${NBSP}: traceurs chargés sans accord (Google Analytics, Meta, Hotjar…), bandeau cookies et liens obligatoires vérifiés.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Conformité d’un site internet aux règles sur les cookies et autres traceurs (RGPD, article 82 de la loi Informatique et Libertés)',
  },
  applicationName: 'Test RGPD des cookies et traceurs d’un site',
  breadcrumbLabel: `Site conforme RGPD${NBSP}: tester les cookies`,
  shareImage: {
    titleLines: ['Mon site est-il', `conforme au RGPD${NBSP}?`],
    highlight: 'conforme au RGPD',
    subtitle: 'Traceurs, bandeau cookies et liens obligatoires lus dans le HTML',
    badge: 'Test gratuit, sans inscription',
    alt: `Mon site est-il conforme au RGPD${NBSP}? Test gratuit des cookies et traceurs par Dibodev`,
  },
  hero: {
    titleBefore: 'Mon site est-il ',
    titleHighlight: 'conforme au RGPD',
    titleAfter: `${NBSP}? Test gratuit des cookies et traceurs`,
    reassurances: ['Gratuit, sans inscription', 'Aucune donnée enregistrée', `Règles relues le 8${NBSP}novembre 2026`],
    description: `Un bandeau cookies ne prouve rien${NBSP}: ce qui compte, c’est ce que la page charge avant que le visiteur ait choisi. Un site peut afficher un joli bandeau pendant que Google Analytics, le pixel Facebook ou une vidéo YouTube sont déjà partis. Cet outil lit le HTML de votre page d’accueil, comme un robot, sans exécuter le JavaScript${NBSP}: il repère les traceurs connus et dit s’ils attendent le consentement, reconnaît l’outil de consentement (Axeptio, tarteaucitron, Cookiebot, Didomi…) et cherche les trois liens obligatoires. Pour chaque point${NBSP}: ce qu’il a vu, ce que ça veut dire, quoi faire.`,
    authorIntro: 'Outil réalisé par',
    authorBio: `développeur freelance près de Rennes. Je crée, je refais et je mets en règle des sites vitrines pour des TPE et des PME, à distance, et je réponds sous 24${NBSP}h.`,
  },
  checker: {
    siteLabel: 'Adresse de votre site',
    sitePlaceholder: 'monentreprise.fr',
    siteHint: `Un nom de domaine suffit. Seule la page d’accueil est lue, comme le ferait un robot, sans exécuter le JavaScript${NBSP}: rien n’est scanné, rien n’est enregistré.`,
    submit: 'Tester mon site',
    checking: 'Lecture…',
    resultLabel: 'Votre résultat',
    idleTitle: 'Entrez l’adresse de votre site pour commencer',
    idleText: `Le résultat liste les traceurs vus dans le HTML (Google Analytics, Meta, Hotjar, YouTube…), dit s’ils attendent le consentement, nomme l’outil de consentement et vérifie les liens obligatoires.`,
    loadingTitle: 'Lecture de la page d’accueil…',
    loadingText: `Je lis le HTML de la page, je repère les traceurs, l’outil de consentement et les liens du pied de page. Quelques secondes.`,
    errorTitles: {
      invalid: 'Adresse à corriger',
      unreachable: 'Site injoignable',
      rateLimited: 'Trop de vérifications',
      failed: 'Vérification impossible',
    },
    errorTexts: {
      invalid: `Entrez un nom de domaine public, comme monentreprise.fr, sans espace ni adresse interne.`,
      unreachable: `Je n’ai pas pu lire la page d’accueil de {host}${NBSP}: adresse fausse, site hors ligne, ou serveur qui refuse les robots. Essayez avec www devant, ou sans.`,
      rateLimited: `Vous avez lancé beaucoup de vérifications en peu de temps. Réessayez dans quelques minutes.`,
      failed: `Une erreur est survenue de mon côté. Réessayez dans un instant, ou écrivez-moi l’adresse du site.`,
    },
    verdictTitles: {
      compliantLikely: `{host}${NBSP}: rien de risqué vu dans le HTML`,
      needsCheck: `{host}${NBSP}: des points à vérifier`,
      atRisk: `{host}${NBSP}: des traceurs partent sans consentement`,
      unknown: `{host}${NBSP}: page illisible depuis l’extérieur`,
    },
    verdictTexts: {
      compliantLikely: `Aucun traceur connu ne part avant le choix du visiteur, et les liens obligatoires sont là. Ce n’est pas un certificat de conformité${NBSP}: le test lit la page d’accueil sans exécuter le JavaScript.`,
      needsCheck: `Rien de flagrant, mais au moins un point demande un coup d’œil${NBSP}: un traceur chargé malgré l’outil de consentement (qui peut le bloquer lui-même au chargement, à vérifier dans le navigateur), un traceur à configurer, ou un lien qui manque.`,
      atRisk: `La page charge des traceurs qui demandent l’accord du visiteur, et aucun outil de consentement n’apparaît dans le HTML. C’est ce que la CNIL sanctionne, petites entreprises comprises.`,
      unknown: `La page reçue est protégée contre les robots, construite par JavaScript ou trop longue pour être lue jusqu’au pied de page${NBSP}: je ne peux pas juger les liens. Vérifiez dans votre navigateur, ou envoyez-moi l’adresse.`,
    },
    trackersTitle: 'Traceurs vus dans le HTML',
    noTracker: {
      label: 'Aucun traceur connu',
      badge: 'Rien vu',
      seenText: `Ni Google Analytics, ni Google Tag Manager, ni pixel publicitaire, ni Hotjar, Clarity, Matomo, vidéo YouTube, carte Google Maps ou reCAPTCHA dans le HTML de la page d’accueil.`,
      meaningText: `Rien ne part avant le choix du visiteur, pour ce que le HTML montre. Un traceur ajouté plus tard par un script, ou présent sur une autre page, ne se voit pas d’ici.`,
    },
    trackerLabels: {
      googleAnalytics: 'Google Analytics',
      googleAds: 'Google Ads ou AdSense',
      googleTagManager: 'Google Tag Manager',
      metaPixel: 'Pixel Meta (Facebook, Instagram)',
      hotjar: 'Hotjar',
      microsoftClarity: 'Microsoft Clarity',
      linkedInInsight: 'LinkedIn Insight Tag',
      tiktokPixel: 'Pixel TikTok',
      pinterestTag: 'Balise Pinterest',
      matomo: 'Matomo',
      youtube: 'Vidéo YouTube',
      youtubeNoCookie: 'Vidéo YouTube (mode de confidentialité avancé)',
      googleMaps: 'Carte Google Maps',
      recaptcha: 'Google reCAPTCHA',
    },
    trackerMeaningTexts: {
      googleAnalytics: `Mesure d’audience de Google. Elle n’échappe au consentement que si elle se limite à vos statistiques anonymes, pour votre seul compte${NBSP}; la CNIL écarte de l’exemption les offres dont le fournisseur indique réutiliser les données pour son propre compte.`,
      googleAds: `Publicité de Google (suivi des conversions, reciblage ou annonces AdSense)${NBSP}: les traceurs publicitaires demandent l’accord préalable du visiteur.`,
      googleTagManager: `Gestionnaire de balises de Google${NBSP}: il charge d’autres scripts (statistiques, pixels, parfois l’outil de consentement lui-même) que le HTML de la page ne montre pas.`,
      metaPixel: `Pixel publicitaire de Meta${NBSP}: il suit les visiteurs pour la publicité ciblée, ce qui demande leur accord préalable.`,
      hotjar: `Hotjar enregistre le parcours des visiteurs. La CNIL soumet ces outils de rejeu de session au consentement préalable (recommandation du 8${NBSP}octobre 2026).`,
      microsoftClarity: `Clarity enregistre les sessions des visiteurs pour les rejouer. La CNIL soumet ces outils de rejeu de session au consentement préalable (recommandation du 8${NBSP}octobre 2026).`,
      linkedInInsight: `Balise publicitaire de LinkedIn (conversions, reciblage)${NBSP}: elle demande l’accord préalable du visiteur.`,
      tiktokPixel: `Pixel publicitaire de TikTok${NBSP}: il demande l’accord préalable du visiteur.`,
      pinterestTag: `Balise publicitaire de Pinterest${NBSP}: elle demande l’accord préalable du visiteur.`,
      matomo: `Mesure d’audience Matomo. Elle peut se passer de consentement si elle est configurée comme la CNIL le décrit (statistiques anonymes pour votre seul compte, traceurs de 13${NBSP}mois au plus, données gardées 25${NBSP}mois au plus)${NBSP}: le HTML ne montre pas ces réglages.`,
      youtube: `Le lecteur YouTube se charge avec la page. La CNIL demande qu’un contenu intégré ne dépose aucun traceur soumis au consentement avant l’accord du visiteur.`,
      youtubeNoCookie: `D’après Google, ce mode empêche que les vidéos vues personnalisent YouTube et les publicités, mais Google ne dit pas que rien n’est stocké sur l’appareil du visiteur.`,
      googleMaps: `Un contenu de Google chargé dans votre page. La CNIL demande qu’un contenu intégré ne dépose aucun traceur soumis au consentement avant l’accord du visiteur.`,
      recaptcha: `Un CAPTCHA est exempté s’il sert seulement à sécuriser le site, mais la CNIL cite reCAPTCHA parmi les solutions dont le fournisseur indique réutiliser les données pour son propre compte${NBSP}: l’accord est alors nécessaire.`,
    },
    trackerAdviceTexts: {
      googleAnalytics: `le charger seulement après l’accord du visiteur (bloqué par l’outil de consentement, ou mode «${NBSP}de base${NBSP}» de Google), ou passer à une mesure d’audience configurée pour l’exemption.`,
      googleAds: 'le bloquer jusqu’au choix du visiteur dans l’outil de consentement, ou le retirer s’il ne sert plus.',
      googleTagManager:
        'vérifier dans Google Tag Manager que chaque balise attend le consentement (mode Consentement pour les balises Google, déclencheur après accord pour les autres).',
      metaPixel:
        'le bloquer jusqu’au choix du visiteur, ou le retirer si vous ne faites plus de publicité sur Facebook ou Instagram.',
      hotjar:
        'le charger après accord, masquer les champs de formulaire, ou le retirer si personne ne regarde les enregistrements.',
      microsoftClarity:
        'le charger après accord, masquer les champs de formulaire, ou le retirer si personne ne regarde les enregistrements.',
      linkedInInsight:
        'la bloquer jusqu’au choix du visiteur, ou la retirer si vous ne faites plus de publicité sur LinkedIn.',
      tiktokPixel:
        'le bloquer jusqu’au choix du visiteur, ou le retirer si vous ne faites plus de publicité sur TikTok.',
      pinterestTag:
        'la bloquer jusqu’au choix du visiteur, ou la retirer si vous ne faites plus de publicité sur Pinterest.',
      matomo:
        'vérifier ses réglages avec le guide d’exemption publié sur le site de la CNIL et le citer dans votre politique de confidentialité, ou le placer derrière l’outil de consentement.',
      youtube: `afficher une image avec un bouton «${NBSP}Lire la vidéo${NBSP}» qui demande l’accord avant de charger le lecteur (la plupart des outils de consentement le font), ou un simple lien vers YouTube.`,
      youtubeNoCookie: 'le plus sûr reste de charger la vidéo seulement après l’accord du visiteur.',
      googleMaps: 'afficher une image de la carte avec un lien vers Google Maps, ou charger la carte après accord.',
      recaptcha:
        'vérifier les conditions de Google, le charger seulement sur la page du formulaire et après accord, ou passer à une protection qui n’a pas besoin de consentement.',
    },
    loadingLabels: {
      loadedDirectly: 'Chargé sans accord',
      loadedOnClick: 'Chargé au clic',
      waitingForConsent: 'Attend l’accord',
      googleConsentModeDenied: 'Mode Consentement',
    },
    loadingSeenTexts: {
      loadedDirectly:
        'Chargé dès l’ouverture de la page (ou au premier geste du visiteur), avant tout choix sur les cookies.',
      loadedOnClick: `Une image tient sa place${NBSP}: le contenu se charge quand le visiteur clique dessus, sans lui demander son accord.`,
      waitingForConsent: `Présent dans le HTML mais désactivé${NBSP}: il attend le choix du visiteur dans l’outil de consentement.`,
      googleConsentModeDenied: `Chargé avec la page, mode Consentement de Google réglé sur «${NBSP}refusé${NBSP}» par défaut${NBSP}: d’après Google, aucun cookie n’est lu ni écrit avant l’accord, mais des mesures sans cookie partent quand même.`,
    },
    loadingAdviceTexts: {
      waitingForConsent: `rien, si le bandeau propose «${NBSP}Tout refuser${NBSP}» au même niveau que «${NBSP}Tout accepter${NBSP}».`,
      googleConsentModeDenied: `pour ne rien envoyer avant le choix, Google décrit le mode «${NBSP}de base${NBSP}», qui bloque ses balises jusqu’au clic sur le bandeau.`,
    },
    consentToolTitle: 'Outil de consentement',
    consentToolLabel: 'Bandeau cookies',
    consentToolStatusLabels: {
      found: 'Trouvé',
      notFound: 'Absent',
      notNeeded: 'Pas nécessaire',
    },
    consentToolSeenTexts: {
      found: '{tools} se charge sur la page.',
      notFound: `Aucun outil de consentement connu dans le HTML (Axeptio, tarteaucitron, Cookiebot, Didomi, CookieYes, Complianz…).`,
      notNeeded: 'Aucun outil de consentement, et aucun traceur connu non plus.',
    },
    consentToolAutoBlockingText: `Il est réglé en blocage automatique${NBSP}: il peut bloquer au chargement des scripts que le HTML montre comme chargés.`,
    consentToolMeaningTexts: {
      found: `C’est lui qui affiche le bandeau, garde le choix du visiteur et doit bloquer les traceurs tant qu’il n’a pas accepté.`,
      notFound: `Sans lui, le visiteur ne peut ni accepter ni refuser${NBSP}: les traceurs qui demandent un accord partent quand même.`,
      notNeeded: `Un bandeau n’est nécessaire que si le site dépose des traceurs qui demandent l’accord du visiteur.`,
    },
    consentToolAdviceTexts: {
      found: `vérifier que «${NBSP}Tout refuser${NBSP}» est au même niveau que «${NBSP}Tout accepter${NBSP}», et que chaque traceur de la liste attend bien le choix.`,
      notFound: `installer un outil de consentement qui bloque les traceurs jusqu’au choix, avec «${NBSP}Tout accepter${NBSP}» et «${NBSP}Tout refuser${NBSP}» au même niveau${NBSP}; s’il est chargé par Google Tag Manager, vérifier qu’il passe avant les autres balises.`,
      notNeeded: 'rien, tant qu’aucun traceur n’est ajouté (statistiques Google, pixel publicitaire, vidéo YouTube).',
    },
    linksTitle: 'Liens obligatoires',
    linkLabels: {
      legalNotice: 'Mentions légales',
      privacyPolicy: 'Politique de confidentialité',
      cookieSettings: 'Gestion des cookies',
    },
    linkStatusLabels: {
      found: 'Trouvé',
      missing: 'Absent',
      providedByConsentTool: 'Bouton de l’outil',
      notNeeded: 'Pas nécessaire',
      notReadable: 'Non lisible',
    },
    linkDetailTexts: {
      legalNoticeFound: 'La page d’accueil a un lien vers les mentions légales.',
      legalNoticeMissing: 'Aucun lien vers des mentions légales sur la page d’accueil.',
      privacyPolicyFound:
        'La page d’accueil a un lien vers une politique de confidentialité ou de protection des données.',
      privacyPolicyMissing: 'Aucun lien vers une politique de confidentialité sur la page d’accueil.',
      cookieSettingsFound: 'Un lien ou un bouton permet de revenir sur ses choix de cookies.',
      cookieSettingsMissing: `Aucun lien «${NBSP}Gérer mes cookies${NBSP}» sur la page d’accueil.`,
      cookieSettingsByConsentTool: `Pas de lien dans le HTML${NBSP}: l’outil de consentement affiche en général son propre bouton pour revenir sur son choix.`,
      cookieSettingsNotNeeded: `Pas de lien, mais aucun traceur ne demande d’accord${NBSP}: il n’y a rien à gérer.`,
      linkNotReadable: `Non lisible${NBSP}: la page est construite par JavaScript, ou trop longue pour être lue jusqu’au pied de page.`,
    },
    linkMeaningTexts: {
      legalNotice: `Identité de l’entreprise, adresse, immatriculation et hébergeur sont obligatoires sur un site d’entreprise${NBSP}: jusqu’à 75${NBSP}000${NBSP}€ d’amende pour une entreprise individuelle, 375${NBSP}000${NBSP}€ pour une société.`,
      privacyPolicy: `Dès que le site recueille des données (formulaire, cookies), il doit dire lesquelles, pourquoi, combien de temps et quels sont les droits des personnes, dans une politique accessible depuis chaque page.`,
      cookieSettings: `Retirer son accord doit être aussi simple que le donner, à tout moment${NBSP}: un lien «${NBSP}Gérer mes cookies${NBSP}» ou une icône sur toutes les pages.`,
    },
    linkAdviceTexts: {
      legalNoticeMissing:
        'publier une page de mentions légales (identité, adresse, SIRET, hébergeur) et la lier depuis le pied de page de chaque page.',
      privacyPolicyMissing: `publier la politique et la lier en pied de page avec un intitulé clair, comme «${NBSP}Données personnelles${NBSP}» ou «${NBSP}Confidentialité${NBSP}»${NBSP}; si elle est dans vos mentions légales, dites-le dans le lien.`,
      cookieSettingsMissing: `ajouter un lien «${NBSP}Gérer mes cookies${NBSP}» en pied de page, relié à l’outil de consentement.`,
      cookieSettingsByConsentTool:
        'fermer le bandeau et vérifier qu’un bouton ou un lien pour changer d’avis reste visible sur toutes les pages.',
      linkNotReadable: 'vérifier à l’œil le pied de page de votre site.',
    },
    meaningLabel: `Ce que ça veut dire${NBSP}:`,
    adviceLabel: `Quoi faire${NBSP}:`,
    disclaimer: `Lu dans le HTML de la page d’accueil, sans exécuter le JavaScript${NBSP}: un traceur ajouté par un script, par Google Tag Manager ou sur une autre page ne se voit pas d’ici. Ce test ne remplace pas un audit ni un avis juridique.`,
    idleCtaIntro: `Vous préférez que je regarde moi-même, gratuitement, sous 24${NBSP}h${NBSP}?`,
    idleCtaLabel: 'Me faire envoyer un avis',
    ctaIntro: `Besoin d’aide pour installer le bandeau, régler les traceurs ou écrire les pages légales${NBSP}?`,
    ctaLabels: {
      compliantLikely: 'Parler de mon site',
      needsCheck: 'Faire vérifier ces points',
      atRisk: 'Faire mettre mon site en règle',
      unknown: 'Faire vérifier mon site',
    },
  },
  checks: {
    anchorId: 'ce-que-regarde-le-test',
    eyebrow: 'Ce que le test regarde',
    title: 'Six points, lus dans le HTML de la page d’accueil',
    intro: `Le test lit le HTML comme un robot, sans exécuter le JavaScript. C’est sa limite${NBSP}: un traceur ajouté après coup par un script ou par Google Tag Manager ne se voit pas d’ici. Ce qu’il voit, il le dit franchement.`,
    items: [
      {
        title: '1. Les traceurs chargés d’office',
        description: `Google Analytics, Google Tag Manager, Google Ads, pixel Meta, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, vidéos YouTube, cartes Google Maps, reCAPTCHA${NBSP}: pour chacun, le test dit s’il part dès l’ouverture de la page.`,
      },
      {
        title: '2. Les traceurs mis en attente',
        description: `Un script désactivé jusqu’au choix (type «${NBSP}text/plain${NBSP}» avec une catégorie, réglage de l’outil de consentement) ou le mode Consentement de Google réglé sur «${NBSP}refusé${NBSP}»${NBSP}: ceux-là attendent le visiteur.`,
      },
      {
        title: '3. L’outil de consentement',
        description:
          'Axeptio, Didomi, tarteaucitron, Cookiebot, CookieYes, Complianz, OneTrust, Iubenda, Usercentrics, Sirdata, AppConsent et une douzaine d’autres, reconnus à leur code.',
      },
      {
        title: '4. Les mentions légales',
        description:
          'Un lien vers la page qui dit qui édite le site, son adresse, son immatriculation et son hébergeur.',
      },
      {
        title: '5. La politique de confidentialité',
        description:
          'Un lien vers la page qui dit quelles données le site recueille, pourquoi, combien de temps, et comment exercer ses droits.',
      },
      {
        title: `6. Le lien «${NBSP}Gérer mes cookies${NBSP}»`,
        description:
          'Un lien ou un bouton pour revenir sur son choix, quand le site dépose des traceurs soumis au consentement.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que disent les textes',
    title: `Cookies, bandeau et pages légales${NBSP}: les règles, sources à l’appui`,
    intro: `Neuf règles, lues le 8${NBSP}novembre 2026 sur Légifrance, le site de la CNIL et service-public.fr. Chacune renvoie au texte.`,
    facts: [
      {
        contextLabel: 'Article 82, loi Informatique et Libertés',
        title: 'Le consentement d’abord, sauf pour l’indispensable',
        text: `Lire ou déposer une information sur l’appareil d’un visiteur demande son consentement, après l’avoir informé de la finalité et des moyens de s’y opposer. Seules y échappent les opérations qui servent uniquement à la communication, ou qui sont strictement nécessaires au service qu’il a demandé.`,
        sourceName: GDPR_ARTICLE_82_SOURCE.name,
        sourceUrl: GDPR_ARTICLE_82_SOURCE.url,
      },
      {
        contextLabel: 'Lignes directrices CNIL, 17 septembre 2020',
        title: 'Continuer à naviguer n’est pas accepter',
        text: `Continuer à naviguer, utiliser l’application ou faire défiler la page ne vaut pas consentement. Refuser doit être possible sans aucune démarche, ou d’un geste aussi simple qu’accepter, et retirer son accord aussi simple que le donner.`,
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'Lignes directrices CNIL, article 3',
        title: 'Les traceurs des autres sont aussi votre affaire',
        text: `Le site qui laisse des tiers (Google, Meta, une régie publicitaire) déposer des traceurs depuis ses pages doit s’assurer qu’un mécanisme recueille bien le consentement de ses visiteurs.`,
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'Recommandation CNIL, 17 septembre 2020',
        title: `«${NBSP}Tout accepter${NBSP}» et «${NBSP}Tout refuser${NBSP}» au même niveau`,
        text: `La CNIL recommande deux boutons de même niveau et de même format, de garder le choix du visiteur (accord comme refus) six mois, et de lui permettre de le retirer à tout moment par un lien «${NBSP}Gérer mes cookies${NBSP}» ou une icône présente sur toutes les pages.`,
        sourceName: GDPR_CNIL_RECOMMENDATION_SOURCE.name,
        sourceUrl: GDPR_CNIL_RECOMMENDATION_SOURCE.url,
      },
      {
        contextLabel: 'Mesure d’audience, page CNIL du 4 juillet 2025',
        title: 'Des statistiques sans bandeau, sous conditions',
        text: `Un outil de mesure d’audience peut se passer de consentement s’il sert seulement à mesurer l’audience pour le compte exclusif du site, produit des statistiques anonymes, sans recoupement ni transmission à des tiers. La CNIL recommande des traceurs de 13${NBSP}mois au plus et une conservation de 25${NBSP}mois au plus, et écarte les offres dont le fournisseur indique réutiliser les données pour son propre compte.`,
        sourceName: GDPR_CNIL_AUDIENCE_SOURCE.name,
        sourceUrl: GDPR_CNIL_AUDIENCE_SOURCE.url,
      },
      {
        contextLabel: 'Questions-réponses CNIL, 29 avril 2026',
        title: 'Vidéos, boutons de partage, reCAPTCHA',
        text: `Une vidéo ou un bouton de partage qui dépose des traceurs ne doit rien déposer avant l’accord du visiteur${NBSP}; le clic sur la vidéo peut servir à le demander. Un CAPTCHA est exempté s’il sert seulement à sécuriser le site, mais la CNIL cite reCAPTCHA parmi les solutions dont le fournisseur indique réutiliser les données.`,
        sourceName: GDPR_CNIL_FAQ_SOURCE.name,
        sourceUrl: GDPR_CNIL_FAQ_SOURCE.url,
      },
      {
        contextLabel: 'Délibération CNIL du 8 octobre 2026',
        title: 'Le rejeu de session demande un accord',
        text: `Les outils qui enregistrent le parcours complet d’un visiteur pour le rejouer, comme le proposent Hotjar et Microsoft Clarity, sont soumis à son consentement préalable. La CNIL recommande aussi de masquer les formulaires et de bloquer la collecte des mots de passe et des données bancaires. Publiée au Journal officiel du 5${NBSP}novembre 2026.`,
        sourceName: GDPR_CNIL_SESSION_REPLAY_SOURCE.name,
        sourceUrl: GDPR_CNIL_SESSION_REPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Sanctions publiées par la CNIL',
        title: 'Des amendes aussi pour les petites entreprises',
        text: `Le 4${NBSP}novembre 2025, 4${NBSP}000${NBSP}€ pour une société de conseil aux clubs de sports subaquatiques${NBSP}; le 18${NBSP}décembre 2025, 2${NBSP}000${NBSP}€ et une injonction pour une agence de voyage${NBSP}: deux procédures simplifiées pour des cookies, information et consentement. Le 1er${NBSP}septembre 2025, 325${NBSP}millions d’euros pour une société de services en ligne.`,
        sourceName: GDPR_CNIL_SANCTIONS_SOURCE.name,
        sourceUrl: GDPR_CNIL_SANCTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Vérifié le 13 octobre 2026',
        title: 'Mentions légales et politique de confidentialité',
        text: `Le site d’une entreprise, micro-entreprise comprise, doit dire qui l’édite, son adresse, son immatriculation et son hébergeur, sous peine de 75${NBSP}000${NBSP}€ d’amende pour une entreprise individuelle et 375${NBSP}000${NBSP}€ pour une société. La politique de confidentialité doit être accessible depuis chaque page par un lien bien visible.`,
        sourceName: GDPR_LEGAL_NOTICE_SOURCE.name,
        sourceUrl: GDPR_LEGAL_NOTICE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce test ne remplace pas un audit ni un avis juridique${NBSP}:`,
    calloutText: `il dit ce que le HTML de la page d’accueil montre, sans exécuter le JavaScript. Pour un site qui vend en ligne, enregistre des comptes clients ou fait de la publicité, une vérification complète dans le navigateur, page par page, reste nécessaire.`,
  },
  remediation: {
    anchorId: 'quoi-faire',
    eyebrow: 'Votre site est à risque',
    title: 'Quoi faire, dans l’ordre',
    intro: `Le même parcours pour un site vitrine, un WordPress ou une boutique, du plus urgent au plus simple.`,
    pitfallLabel: 'Le piège',
    items: [
      {
        title: 'Installer un outil de consentement qui bloque vraiment',
        text: `Axeptio, tarteaucitron, Cookiebot, Didomi, ou une extension WordPress comme Complianz ou CookieYes${NBSP}: l’outil doit bloquer chaque traceur jusqu’au choix, et proposer «${NBSP}Tout accepter${NBSP}» et «${NBSP}Tout refuser${NBSP}» au même niveau.`,
        pitfall: `Un bandeau qui informe sans rien bloquer${NBSP}: les traceurs partent avant le clic, et le bandeau ne sert à rien.`,
      },
      {
        title: 'Ranger chaque traceur dans une catégorie',
        text: `Statistiques, publicité, vidéos, cartes${NBSP}: chaque script passe sous le contrôle de l’outil, y compris ceux qu’ajoutent le thème et les extensions (Site Kit, MonsterInsights, le reCAPTCHA du formulaire de contact).`,
        pitfall: `Les optimiseurs comme WP Rocket ou LiteSpeed Cache retardent les scripts jusqu’au premier geste du visiteur${NBSP}: la page va plus vite, mais personne n’a donné son accord.`,
      },
      {
        title: 'Régler Google Analytics',
        text: `Soit il attend l’accord (blocage par l’outil de consentement, ou mode «${NBSP}de base${NBSP}» de Google), soit vous passez à une mesure d’audience configurée pour l’exemption, comme Matomo réglé selon le guide publié sur le site de la CNIL.`,
        pitfall: `Le mode Consentement «${NBSP}avancé${NBSP}» charge les balises Google dès l’arrivée${NBSP}: d’après Google, elles envoient des mesures sans cookie avant le choix.`,
      },
      {
        title: 'Remplacer les vidéos YouTube et les cartes',
        text: `Une image avec un bouton «${NBSP}Lire la vidéo${NBSP}» qui demande l’accord avant de charger le lecteur${NBSP}; pour la carte, une capture avec un lien vers Google Maps. La plupart des outils de consentement savent le faire.`,
        pitfall: `Passer à youtube-nocookie.com${NBSP}: d’après Google, les vidéos vues ne personnalisent plus YouTube, mais Google ne dit pas que rien n’est stocké.`,
      },
      {
        title: 'Ajouter les trois liens du pied de page',
        text: `Mentions légales, politique de confidentialité et «${NBSP}Gérer mes cookies${NBSP}», sur toutes les pages. La politique dit quelles données vous recueillez, pourquoi, combien de temps, et comment exercer ses droits.`,
        pitfall: `Une seule page «${NBSP}Mentions légales${NBSP}» qui cache la politique de confidentialité sans le dire dans le lien.`,
      },
      {
        title: 'Faire le ménage, puis vérifier dans le navigateur',
        text: `Retirez les pixels des campagnes terminées et les essais oubliés, puis ouvrez le site en navigation privée${NBSP}: avant tout clic sur le bandeau, les outils de développement (F12, onglet «${NBSP}Application${NBSP}», «${NBSP}Cookies${NBSP}») ne doivent montrer aucun cookie de mesure ni de publicité.`,
        pitfall: `Tester dans un navigateur où vous avez déjà accepté${NBSP}: votre ancien choix masque le problème.`,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Cookies et RGPD sur votre site${NBSP}: vos questions`,
    questions: [
      {
        question: `Le bandeau cookies est-il obligatoire${NBSP}?`,
        answer: `Pas toujours. Il en faut un dès que le site dépose ou lit des traceurs qui demandent le consentement${NBSP}: publicité, boutons et vidéos de réseaux sociaux, enregistrement des sessions, statistiques qui ne remplissent pas les conditions de l’exemption. Un site qui n’utilise que des traceurs indispensables (panier, connexion, choix de la langue, mémorisation du choix sur les cookies) ou une mesure d’audience exemptée n’en a pas besoin; pour la mesure d’audience, la CNIL recommande tout de même d’en informer les visiteurs, par exemple dans la politique de confidentialité.`,
      },
      {
        question: `Peut-on utiliser Google Analytics sans bandeau${NBSP}?`,
        answer: `Seulement s’il remplit toutes les conditions de l’exemption${NBSP}: mesure d’audience pour votre seul compte, statistiques anonymes, aucun recoupement ni transmission à des tiers. La CNIL précise que les offres dont le fournisseur indique réutiliser les données pour son propre compte n’en bénéficient pas, sauf si cette réutilisation peut être désactivée. Tant que vous ne l’avez pas vérifié dans les conditions de Google, le plus sûr est de charger Google Analytics après l’accord du visiteur, ou de passer à un outil configuré pour l’exemption.`,
      },
      {
        question: `Matomo peut-il se passer de consentement${NBSP}?`,
        answer: `Oui, s’il est réglé pour. La CNIL publie sur son site un guide de configuration de Matomo Analytics pour l’exemption${NBSP}: exports de données désactivés, possibilité pour le visiteur de refuser d’être suivi, adresses IP anonymisées, ni cookies tiers ni suivi entre domaines, pas de User ID, cartes de chaleur et enregistrements de session désactivés, aucune donnée personnelle collectée. Le test voit Matomo, pas ses réglages${NBSP}: il le classe donc «${NBSP}à vérifier${NBSP}».`,
      },
      {
        question: `Quelles amendes pour des cookies déposés sans consentement${NBSP}?`,
        answer: `La CNIL publie ses sanctions. Les plus connues visent de grands groupes (325${NBSP}millions d’euros le 1er${NBSP}septembre 2025 pour une société de services en ligne, 150${NBSP}millions le même jour pour un site de vente de vêtements), mais elle sanctionne aussi de petites structures par une procédure simplifiée${NBSP}: 4${NBSP}000${NBSP}€ le 4${NBSP}novembre 2025 pour une société de conseil aux clubs de sports subaquatiques, 2${NBSP}000${NBSP}€ et une injonction le 18${NBSP}décembre 2025 pour une agence de voyage, 15${NBSP}000${NBSP}€ et une injonction le 26${NBSP}mars 2026 pour une société de billetterie (avec d’autres manquements).`,
      },
      {
        question: `Les mentions légales et la politique de confidentialité sont-elles obligatoires${NBSP}?`,
        answer: `Oui. Le site d’une entreprise, micro-entreprise comprise, doit afficher son identité, son adresse, son immatriculation et son hébergeur${NBSP}: jusqu’à 75${NBSP}000${NBSP}€ d’amende pour une entreprise individuelle et 375${NBSP}000${NBSP}€ pour une société. Dès qu’il recueille des données, il doit aussi dire lesquelles, pourquoi, combien de temps et comment exercer ses droits, dans une politique de confidentialité accessible depuis chaque page par un lien bien visible.`,
      },
      {
        question: `Mon site WordPress a une extension de cookies${NBSP}: suis-je en règle${NBSP}?`,
        answer: `Pas forcément. L’extension (Complianz, CookieYes, Cookiebot, tarteaucitron…) doit bloquer les scripts jusqu’au choix, y compris ceux posés par le thème ou d’autres extensions${NBSP}: Site Kit ou MonsterInsights pour Google Analytics, le reCAPTCHA d’un formulaire de contact, une vidéo YouTube dans un constructeur de pages. Les optimiseurs comme WP Rocket ou LiteSpeed Cache retardent certains scripts jusqu’au premier geste du visiteur, ce qui ne vaut pas accord. Le test montre ce qui part avant le choix.`,
      },
      {
        question: `Une vidéo YouTube ou une carte Google Maps pose-t-elle problème${NBSP}?`,
        answer: `Oui, si elle se charge avec la page. La CNIL demande qu’un contenu intégré ne dépose aucun traceur soumis au consentement avant l’accord du visiteur${NBSP}; le clic sur la vidéo peut servir à demander cet accord. Le mode de confidentialité avancé de YouTube (youtube-nocookie.com) empêche, d’après Google, que les vidéos vues personnalisent YouTube et les publicités, mais Google ne dit pas que rien n’est stocké${NBSP}: le test le classe «${NBSP}à vérifier${NBSP}».`,
      },
      {
        question: `Un bouton «${NBSP}Tout refuser${NBSP}» est-il obligatoire${NBSP}?`,
        answer: `La règle, c’est que refuser soit aussi simple qu’accepter. Pour y arriver, la CNIL recommande un bouton «${NBSP}Tout refuser${NBSP}» au même niveau et avec le même aspect que «${NBSP}Tout accepter${NBSP}». Continuer à naviguer ou faire défiler la page ne vaut jamais accord. Le 31${NBSP}décembre 2021, la CNIL a sanctionné deux grandes plateformes (150 et 60${NBSP}millions d’euros) pour leurs modalités de refus des cookies.`,
      },
      {
        question: `Que vérifie exactement ce test, et que ne voit-il pas${NBSP}?`,
        answer: `Il lit une fois le HTML de la page d’accueil, comme un robot, sans exécuter le JavaScript. Il reconnaît les traceurs les plus courants (Google Analytics, Google Tag Manager, Google Ads, pixel Meta, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, YouTube, Google Maps, reCAPTCHA), les outils de consentement les plus répandus, et cherche trois liens${NBSP}: mentions légales, confidentialité, gestion des cookies. Il ne voit pas ce que Google Tag Manager ou un script charge après coup, ni les autres pages du site, ni le contenu de vos pages légales. Il ne remplace pas un audit ni un avis juridique.`,
      },
      {
        question: `Le test enregistre-t-il l’adresse de mon site${NBSP}?`,
        answer: `Non. L’adresse n’est ni enregistrée ni envoyée à PostHog, l’outil de mesure de ce site${NBSP}: seuls le verdict, les traceurs reconnus et l’outil de consentement trouvé le sont, pour savoir ce qui revient le plus. Le résultat reste dix minutes en mémoire du serveur pour ne pas relire le même site deux fois, puis disparaît.`,
      },
    ],
  },
  contactCta: {
    title: `Vous préférez que je mette votre site en règle${NBSP}?`,
    description: `Envoyez-moi l’adresse. Je vous réponds sous 24${NBSP}h avec ce que je vois${NBSP}: les traceurs à bloquer, l’outil de consentement à installer ou à régler, les pages légales à compléter, et un prix ferme si vous voulez que je m’en occupe.`,
    button: 'Envoyer mon site',
    healthCheckLabel: `Tester mon site${NBSP}: 8 vérifications`,
  },
}
