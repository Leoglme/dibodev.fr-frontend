import type { MailLocale } from '~~/server/types/mail/contact'
import type { SiteCheckReportMailTexts, SiteCheckToolKey } from '~~/server/types/tools/siteCheckReport'
import { NBSP } from '~~/app/core/constants/typography'

const NON_BREAKING_HYPHEN: string = '\u2011'

export const SITE_CHECK_LEAD_FROM_NAME: string = 'Outils dibodev.fr'

/** Short French verdict words for the owner's notification, tool by tool; an unknown verdict shows its key. */
export const SITE_CHECK_VERDICT_LABELS_FR: Record<SiteCheckToolKey, Record<string, string>> = {
  phpVulnerability: {
    unpatched: 'PHP pas corrigé',
    endOfLife: 'PHP sans correctifs',
    patched: 'PHP corrigé',
    phpHidden: 'version PHP masquée',
    notPhp: 'pas en PHP',
    unknown: 'indéterminé',
  },
  wordpressHack: {
    suspiciousSignals: 'signes de piratage',
    vulnerablePlugin: 'extension vulnérable',
    closedPlugin: 'extension fermée',
    outdatedCore: 'WordPress pas à jour',
    cleanSurface: 'rien vu',
    notWordPress: 'pas WordPress',
    unknown: 'indéterminé',
  },
  joomlaVersion: {
    joomla6Latest: 'Joomla 6 à jour',
    joomla6Outdated: 'Joomla 6 pas à jour',
    joomla5: 'Joomla 5',
    joomla4: 'Joomla 4 sans correctifs',
    joomla3OrOlder: 'Joomla 3 ou plus ancien',
    versionHidden: 'version Joomla masquée',
    notJoomla: 'pas Joomla',
    unknown: 'indéterminé',
  },
  emailDeliverability: {
    allGood: 'tout est en place',
    dmarcMissing: 'DMARC absent',
    dmarcNone: 'DMARC en p=none',
    dkimNotFound: 'DKIM introuvable',
    spfMissing: 'SPF absent',
    spfTooPermissive: 'SPF trop permissif',
    spfTooManyLookups: 'SPF trop long',
    multipleSpf: 'SPF en double',
    noMailSetup: 'pas de mail sur le domaine',
    invalidDomain: 'domaine introuvable',
    consumerMailbox: 'boîte mail grand public',
  },
  websiteHealth: {
    healthy: 'en bonne santé',
    needsAttention: 'à surveiller',
    atRisk: 'à risque',
  },
  gdprCookie: {
    compliantLikely: 'rien de risqué vu',
    needsCheck: 'à vérifier',
    atRisk: 'à risque',
    unknown: 'page illisible',
  },
}

/** Texts of the e-mail that carries the result of a check to the visitor. */
export const SITE_CHECK_REPORT_MAIL_TEXTS: Record<MailLocale, SiteCheckReportMailTexts> = {
  fr: {
    fromName: 'Léo Guillaume · Dibodev',
    toolNames: {
      phpVulnerability: 'Faille PHP',
      wordpressHack: 'Site WordPress piraté',
      joomlaVersion: 'Version Joomla',
      emailDeliverability: 'Mails en spam',
      websiteHealth: 'Tester mon site',
      gdprCookie: 'Site conforme RGPD',
    },
    subject: (toolName: string, host: string): string => `Votre résultat «${NBSP}${toolName}${NBSP}» pour ${host}`,
    preheader: (toolName: string, host: string): string =>
      `Le test «${NBSP}${toolName}${NBSP}» de ${host}, avec ce qu’il faut faire.`,
    eyebrow: (toolName: string): string => `Test gratuit · ${toolName}`,
    replySubject: (host: string): string => `Votre site ${host}`,
    recordStatusLabels: {
      ok: 'En place',
      warning: 'À renforcer',
      missing: 'Absent ou à corriger',
    },
    adviceLabel: `Quoi faire${NBSP}:`,
    labelSeparator: `${NBSP}: `,
    detailedToolsTitle: 'Les tests détaillés à faire ensuite',
    testAgainIntro: `Vous avez corrigé quelque chose${NBSP}? Relancez le test pour vérifier.`,
    testAgainLabel: 'Refaire le test',
    helpIntro: `Besoin d’un coup de main pour corriger${NBSP}? Répondez simplement à cet e${NON_BREAKING_HYPHEN}mail${NBSP}: je regarde votre site avec vous, sans engagement.`,
    signOff: 'Bonne journée,',
    footerText: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce que vous avez demandé ce résultat sur dibodev.fr. Votre adresse a servi uniquement à vous l’envoyer${NBSP}: elle n’est pas conservée.`,
    footerTextWithContactConsent: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce que vous avez demandé ce résultat sur dibodev.fr et accepté d’être recontacté au sujet de ce site. Votre adresse est gardée un an au plus, pour cela seulement.`,
    privacyLabel: 'Confidentialité',
    privacyUrl: 'https://dibodev.fr/privacy#outils-de-verification',
    hiddenValue: '(détail sur la page du test)',
    injectedContentSummary: (count: number): string =>
      count === 1
        ? 'Une page ou un article suspect a été trouvé sur le site. Le détail est sur la page du test.'
        : `${count} pages ou articles suspects ont été trouvés sur le site. Le détail est sur la page du test.`,
    externalScriptsSummary: (count: number): string =>
      count === 1
        ? `La page charge des scripts depuis un domaine que je ne connais pas. À vérifier${NBSP}: un service que vous avez choisi, ou pas. Son nom est sur la page du test.`
        : `La page charge des scripts depuis ${count} domaines que je ne connais pas. À vérifier${NBSP}: des services que vous avez choisis, ou pas. Leurs noms sont sur la page du test.`,
  },
  en: {
    fromName: 'Léo Guillaume · Dibodev',
    toolNames: {
      phpVulnerability: 'PHP vulnerability',
      wordpressHack: 'Hacked WordPress site',
      joomlaVersion: 'Joomla version',
      emailDeliverability: 'Emails in spam',
      websiteHealth: 'Test my website',
      gdprCookie: 'GDPR-compliant website',
    },
    subject: (toolName: string, host: string): string => `Your “${toolName}” result for ${host}`,
    preheader: (toolName: string, host: string): string => `The “${toolName}” test of ${host}, with what to do.`,
    eyebrow: (toolName: string): string => `Free test · ${toolName}`,
    replySubject: (host: string): string => `Your website ${host}`,
    recordStatusLabels: {
      ok: 'In place',
      warning: 'To strengthen',
      missing: 'Missing or to fix',
    },
    adviceLabel: 'What to do:',
    labelSeparator: ': ',
    detailedToolsTitle: 'The detailed tests to run next',
    testAgainIntro: 'Fixed something? Run the test again to check.',
    testAgainLabel: 'Run the test again',
    helpIntro: `Need a hand to fix it? Simply reply to this e${NON_BREAKING_HYPHEN}mail: I will look at your website with you, with no commitment.`,
    signOff: 'Have a good day,',
    footerText: `You receive this e${NON_BREAKING_HYPHEN}mail because you asked for this result on dibodev.fr. Your address was only used to send it to you: it is not kept.`,
    footerTextWithContactConsent: `You receive this e${NON_BREAKING_HYPHEN}mail because you asked for this result on dibodev.fr and agreed to be contacted about this website. Your address is kept for a year at most, for that purpose only.`,
    privacyLabel: 'Privacy',
    privacyUrl: 'https://dibodev.fr/en/privacy#outils-de-verification',
    hiddenValue: '(details on the test page)',
    injectedContentSummary: (count: number): string =>
      count === 1
        ? 'One suspicious page or post was found on the website. The details are on the test page.'
        : `${count} suspicious pages or posts were found on the website. The details are on the test page.`,
    externalScriptsSummary: (count: number): string =>
      count === 1
        ? 'The page loads scripts from a domain I do not know. To check: a service you chose, or not. Its name is on the test page.'
        : `The page loads scripts from ${count} domains I do not know. To check: services you chose, or not. Their names are on the test page.`,
  },
  es: {
    fromName: 'Léo Guillaume · Dibodev',
    toolNames: {
      phpVulnerability: 'Vulnerabilidad PHP',
      wordpressHack: 'WordPress hackeado',
      joomlaVersion: 'Versión de Joomla',
      emailDeliverability: 'Correos en spam',
      websiteHealth: 'Probar mi web',
      gdprCookie: 'Web conforme al RGPD',
    },
    subject: (toolName: string, host: string): string => `Tu resultado «${toolName}» para ${host}`,
    preheader: (toolName: string, host: string): string =>
      `La prueba «${toolName}» de ${host}, con lo que hay que hacer.`,
    eyebrow: (toolName: string): string => `Prueba gratuita · ${toolName}`,
    replySubject: (host: string): string => `Tu web ${host}`,
    recordStatusLabels: {
      ok: 'Configurado',
      warning: 'A reforzar',
      missing: 'Ausente o a corregir',
    },
    adviceLabel: 'Qué hacer:',
    labelSeparator: ': ',
    detailedToolsTitle: 'Las pruebas detalladas que hacer después',
    testAgainIntro: '¿Has corregido algo? Vuelve a lanzar la prueba para comprobarlo.',
    testAgainLabel: 'Repetir la prueba',
    helpIntro:
      '¿Necesitas ayuda para corregirlo? Responde simplemente a este correo: miro tu web contigo, sin compromiso.',
    signOff: '¡Que tengas un buen día!',
    footerText:
      'Recibes este correo porque pediste este resultado en dibodev.fr. Tu dirección solo ha servido para enviártelo: no se guarda.',
    footerTextWithContactConsent:
      'Recibes este correo porque pediste este resultado en dibodev.fr y aceptaste que te contacten sobre esta web. Tu dirección se guarda un año como máximo, solo para eso.',
    privacyLabel: 'Privacidad',
    privacyUrl: 'https://dibodev.fr/es/privacy#outils-de-verification',
    hiddenValue: '(detalle en la página de la prueba)',
    injectedContentSummary: (count: number): string =>
      count === 1
        ? 'Se ha encontrado una página o entrada sospechosa en la web. El detalle está en la página de la prueba.'
        : `Se han encontrado ${count} páginas o entradas sospechosas en la web. El detalle está en la página de la prueba.`,
    externalScriptsSummary: (count: number): string =>
      count === 1
        ? 'La página carga scripts desde un dominio que no conozco. Hay que comprobarlo: un servicio que elegiste, o no. Su nombre está en la página de la prueba.'
        : `La página carga scripts desde ${count} dominios que no conozco. Hay que comprobarlo: servicios que elegiste, o no. Sus nombres están en la página de la prueba.`,
  },
}
