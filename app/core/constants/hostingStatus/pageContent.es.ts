import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type {
  DibodevHostingProviderPageContent,
  DibodevHostingProviderPageSpecifics,
  DibodevHostingStatusCardWording,
  DibodevHostingStatusPageContent,
  DibodevHostingStatusPageSections,
} from '~/core/types/DibodevHostingStatusPage'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import { NBSP } from '~/core/constants/typography'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'

const AUTHOR_INTRO: string = 'Página mantenida por'
const AUTHOR_BIO: string =
  'desarrollador freelance cerca de Rennes (Francia), que vuelve a poner en línea webs y software alojados en estos hostings desde 2019.'

/** What the visitor can do while the host is down, the same on every page. */
const COMMON_CHECKS: DibodevGuarantee[] = [
  {
    title: 'Prueba otra web del mismo hosting',
    description:
      'Si otra web alojada en el mismo sitio responde, la caída no viene del hosting, sino de tu web, de tu nombre de dominio o de tu caché.',
  },
  {
    title: 'Mira el mensaje de error',
    description:
      '«No se puede acceder a este sitio web» o un tiempo de espera agotado apuntan al servidor o al DNS; un error 500 o una página en blanco apuntan a la propia web (PHP, plugin, base de datos).',
  },
  {
    title: 'Comprueba el nombre de dominio',
    description:
      'Un dominio caducado o unos DNS cambiados la víspera dan los mismos síntomas que una caída. El área de cliente del hosting o el registrador muestra la fecha de caducidad.',
  },
]

const COMMON_METHOD_STEPS: DibodevMethodStep[] = [
  {
    label: 'Minuto 1',
    title: 'Confirma que no eres solo tú',
    description:
      'Abre tu web desde otra red (4G en vez del router) y en navegación privada. Si funciona desde otro sitio, el problema es local: caché, DNS del router, cortafuegos.',
  },
  {
    label: 'Minuto 5',
    title: 'Lee el estado del hosting en esta página',
    description:
      'Un incidente anunciado por el hosting se resuelve sin ti: no hace falta tocar la web. Anota la hora de inicio para tu propia comunicación.',
  },
  {
    label: 'Minuto 10',
    title: 'Avisa a tus clientes antes de que te avisen ellos',
    description:
      'Una nota en tu ficha de Google, tus redes o tu contestador evita las llamadas. Da la hora de vuelta anunciada por el hosting en vez de una promesa.',
  },
  {
    label: 'Después',
    title: 'Decide en frío',
    description:
      'Una caída aislada no es motivo para cambiar de hosting. Tres caídas en un trimestre, o un soporte que no contesta, sí: una migración se prepara en una semana.',
  },
]

const CARD_WORDING: DibodevHostingStatusCardWording = {
  resultLabel: 'Estado en directo',
  stateLabels: {
    operational: 'Todo funciona',
    degraded: 'Servicio degradado',
    incident: 'Incidente en curso',
    maintenance: 'Mantenimiento en curso',
    unknown: 'Estado desconocido',
  },
  stateTitles: {
    operational: '{provider}: ningún incidente anunciado',
    degraded: '{provider}: se ha anunciado una perturbación',
    incident: '{provider}: hay un incidente en curso',
    maintenance: '{provider}: hay un mantenimiento en curso',
    unknown: '{provider}: estado imposible de leer',
  },
  stateTexts: {
    operational:
      'No hay nada señalado en la página de estado. Si tu web no responde, la causa es probablemente tu web, tu dominio o tu caché: sigue las comprobaciones de abajo.',
    degraded:
      'El hosting señala una perturbación en parte de sus servicios. Tu web puede ir lenta o estar inaccesible a ratos; espera al final del incidente antes de modificar nada.',
    incident:
      'El hosting reconoce una caída. No toques tu web: volverá con el servicio. El detalle y las actualizaciones están en su página de estado.',
    maintenance: 'Hay una operación planificada en curso. Son posibles cortes breves hasta la hora de fin anunciada.',
    unknown:
      'La página de estado no se ha podido leer ahora mismo. Eso no significa que todo vaya bien: ábrela directamente con el enlace de abajo.',
  },
  loadingTitle: 'Leyendo la página de estado…',
  loadingText: 'Unos segundos: el estado se lee en el momento en que abres esta página.',
  errorTitle: 'Imposible leer el estado por ahora',
  errorText: 'Vuelve a intentarlo en un minuto o abre la página de estado del hosting con el enlace de abajo.',
  checkedAtText: 'Comprobado a las {time} (hora de París), estado sin cambios desde {since}.',
  activeIncidentsTitle: 'En curso',
  recentIncidentsTitle: 'Últimos eventos',
  noRecentIncidentsText: 'Ningún evento reciente en la página de estado.',
  ongoingLabel: 'en curso',
  resolvedLabel: 'resuelto',
  maintenanceLabel: 'mantenimiento',
  incidentLinkLabel: 'Ver el detalle en el hosting',
  sourceTexts: {
    statuspage: `Leído cada 5${NBSP}minutos en la página de estado oficial de {provider}.`,
    infomaniak: `Leído cada 5${NBSP}minutos en la página de estado oficial de {provider}.`,
    lws: `Leído cada 5${NBSP}minutos en la página de estado de los servicios de {provider}.`,
    none: '{provider} no publica ninguna página de estado legible.',
  },
  staleText: 'La última lectura ha fallado: este estado es el de la lectura anterior.',
  statusPageLinkLabel: 'Abrir la página de estado',
  noStatusPageResultLabel: 'Dónde mirar',
  noStatusPageTitle: '{provider}: sin página de estado pública',
  noStatusPageText:
    '{provider} no publica ninguna página de estado que esta página pueda leer: por eso su estado no se muestra, en lugar de adivinarlo. Sus anuncios de mantenimiento e incidencias pasan por su cuenta de X; para una caída de tu propio servidor, su soporte sigue siendo la única fuente fiable.',
  noStatusPageLinkLabel: 'Ver sus anuncios en X',
  refreshLabel: 'Volver a leer ahora',
  refreshingLabel: 'Leyendo…',
  ctaIntros: {
    operational:
      '¿El hosting no señala nada y tu web sigue inaccesible? Envíame su enlace: miro de dónde viene la caída y te respondo en 24 horas, gratis.',
    degraded:
      '¿Tu web está afectada por esta perturbación, o no estás seguro de que sea la causa? Envíame su enlace, lo compruebo en 24 horas.',
    incident:
      '¿Tu web no vuelve una vez cerrado el incidente? Envíame su enlace, miro qué la bloquea y te respondo en 24 horas.',
    maintenance: '¿Tu web no vuelve al terminar el mantenimiento? Envíame su enlace, lo compruebo en 24 horas.',
    unknown:
      '¿Tu web está inaccesible y no sabes de dónde viene? Envíame su enlace, lo miro y te respondo en 24 horas.',
  },
  ctaLabel: 'Enviar el enlace de mi web',
}

const HUB_FAQ: DibodevFaqQuestion[] = [
  {
    question: 'Mi hosting dice que todo funciona, pero mi web está inaccesible. ¿Por qué?',
    answer:
      'Nueve de cada diez veces, la caída está en la propia web y no en el servidor: un plugin de WordPress roto tras una actualización, un archivo PHP con error, una base de datos saturada, un certificado HTTPS caducado o un nombre de dominio vencido. El hosting solo ve sus máquinas; tu web, en cambio, depende también de tu código y de tu dominio. Las tres comprobaciones de esta página permiten distinguirlo en cinco minutos.',
  },
  {
    question: '¿Cómo sabe esta página el estado de los hostings?',
    answer:
      'Un programa lee cada cinco minutos las páginas de estado oficiales de OVHcloud, IONOS, Hostinger, Gandi, Infomaniak y LWS, y guarda la hora de cada cambio de estado. o2switch y PlanetHoster no tienen ninguna página de estado legible: su tarjeta lo indica y remite a sus anuncios en X y a su soporte, sin adivinar nada. No se adivina nada a partir del código de respuesta de una página: una página de estado responde «200 OK» incluso en plena caída.',
  },
  {
    question: '¿Cuánto dura una caída de hosting?',
    answer:
      'La mayoría de los incidentes publicados en las páginas de estado duran de veinte minutos a tres horas. Las caídas largas, de varias horas a varios días, son raras y suelen deberse a un hardware averiado (un servidor de archivos, un clúster) o a un centro de datos entero. Los hostings rara vez dan una hora de vuelta antes de haber identificado la causa: fíate de las actualizaciones de su página más que de una estimación.',
  },
  {
    question: '¿Pueden devolverme el dinero por una caída?',
    answer:
      'Depende de las condiciones particulares de tu plan. Los planes de hosting compartido de los grandes hostings suelen prever un compromiso de disponibilidad y un gesto comercial bajo petición, rara vez una devolución automática. Guarda la hora de inicio y de fin del incidente tal como aparece en la página de estado: es la prueba que te pedirán.',
  },
  {
    question: '¿Hay que cambiar de hosting después de una caída?',
    answer:
      'No por una caída aislada: todos los hostings de esta página han tenido incidentes en 2026. Cambia si las caídas se repiten, si el soporte no responde durante el incidente, o si tu web se ha vuelto demasiado importante para un hosting compartido de unos pocos euros al mes. Una migración bien preparada se hace en una semana, sin corte visible, cambiando los DNS al final.',
  },
  {
    question: '¿Eres el hosting?',
    answer:
      'No. Dibodev es un desarrollador independiente que pone en línea y mantiene webs y software en estos hostings para pequeñas y medianas empresas. Esta página existe porque la primera pregunta de un cliente cuya web deja de responder es siempre la misma: «¿soy yo o es el hosting?». Para un incidente en tu cuenta, el soporte de tu hosting sigue siendo el único interlocutor.',
  },
]

const HUB_FACTS: DibodevSourcedFact[] = [
  {
    contextLabel: '6 hostings de 8',
    title: 'Seis hostings publican una página de estado oficial',
    text: 'OVHcloud, IONOS, Hostinger y Gandi usan el servicio Statuspage; Infomaniak y LWS mantienen su propia página. Ahí es donde el incidente se reconoce, se fecha y se cierra, y eso es lo que lee esta página.',
    sourceName: 'OVHcloud, página de estado Web Cloud',
    sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
  },
  {
    contextLabel: 'o2switch y PlanetHoster',
    title: 'Dos hostings no tienen página de estado pública',
    text: 'o2switch publica sus anuncios de mantenimiento e incidentes en su cuenta de X; PlanetHoster cerró el foro que hacía de página de estado, cuyos enlaces llevan a un formulario de contacto. Para estos dos, esta página no muestra ningún estado: remite a sus anuncios públicos y a su soporte en lugar de adivinar.',
    sourceName: 'o2switch en X',
    sourceUrl: 'https://x.com/o2switch',
  },
  {
    contextLabel: '21 al 23 de octubre de 2026',
    title: 'El fallo de PHP mostró el valor de estas páginas',
    text: 'Durante tres días, los hostings desplegaron los parches PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35 servidor a servidor, con breves cortes anunciados en sus páginas de estado y sus cuentas de X. Las webs que mostraban una página en blanco esa mañana no estaban hackeadas: esperaban a su servidor.',
    sourceName: 'IONOS, página de estado',
    sourceUrl: 'https://www.ionos-status.fr/',
  },
  {
    contextLabel: 'Código 200',
    title: 'Una página de estado responde «OK» incluso en plena caída',
    text: 'El código de respuesta de una página de estado no dice nada del hosting: solo cuenta su contenido. Por eso esta página lee los incidentes declarados y los componentes afectados, nunca el simple hecho de que la página cargue. Y cuando la lectura falla, lo dice en vez de mostrar «todo va bien».',
    sourceName: 'Statuspage, API pública',
    sourceUrl: 'https://statuspage.hostinger.com/api/v2/summary.json',
  },
]

const HUB: DibodevHostingStatusPageSections = {
  meta: {
    title: '¿Hosting caído? Estado de OVH, IONOS, Hostinger… en directo',
    description:
      '¿Web caída? Estado en directo de OVHcloud, IONOS, Hostinger, Infomaniak, Gandi y LWS, dónde mirar para o2switch y PlanetHoster, y qué hacer mientras tanto.',
    inLanguage: 'es-ES',
    schemaAbout: 'Estado de los hostings web franceses',
  },
  breadcrumbLabel: '¿Hosting caído?',
  shareImage: {
    titleLines: ['¿Tu hosting', 'está caído?'],
    highlight: 'caído',
    subtitle: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, Gandi, LWS',
    badge: 'En directo',
    alt: '¿Tu hosting está caído? El estado de los hostings en directo en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Tu hosting ',
    titleHighlight: 'está caído',
    titleAfter: '?',
    description:
      '¿Tu web no responde? Antes de buscar un fallo de seguridad o de llamar a tu desarrollador, mira si la caída viene del hosting. El estado de seis hostings del mercado francés se lee cada cinco minutos en sus páginas de estado oficiales; para o2switch y PlanetHoster, que no tienen, la página dice dónde mirar.',
    reassurances: [`Leído cada 5${NBSP}minutos`, 'Fuentes oficiales', 'Qué hacer durante la caída'],
    authorIntro: AUTHOR_INTRO,
    authorBio: AUTHOR_BIO,
  },
  mobileContactBar: {
    text: '¿Tu web está inaccesible y no es el hosting?',
    buttonLabel: 'Enviar el enlace de mi web',
  },
  checks: {
    anchorId: 'verifications',
    eyebrow: '¿Tú o el hosting?',
    title: 'Tres comprobaciones antes de llamar a nadie',
    intro:
      'Cuando el hosting no señala nada, la caída está casi siempre en la web, el dominio o la caché. Cinco minutos bastan para saberlo.',
    items: COMMON_CHECKS,
  },
  facts: {
    anchorId: 'faits',
    eyebrow: 'Lo que hay que saber',
    title: 'Cómo anuncian sus caídas los hostings',
    intro: 'Datos revisados el 27 de octubre de 2026 en las páginas de cada hosting.',
    facts: HUB_FACTS,
    calloutEmphasizedIntro: 'Una lectura, no un diagnóstico:',
    calloutText:
      'esta página dice lo que anuncia el hosting. No prueba tu web. Para saber por qué tu web no responde, envíame su enlace: lo miro y te respondo en 24 horas.',
  },
  method: {
    eyebrow: 'Durante la caída',
    title: 'Qué hacer en los diez primeros minutos',
    intro: 'En orden, sin romper nada.',
    steps: COMMON_METHOD_STEPS,
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Caídas de hosting: las respuestas',
    questions: HUB_FAQ,
  },
  relatedArticles: {
    title: 'Para leer también',
    intro: 'Cuando la caída viene de la web y no del hosting.',
  },
  contactCta: {
    title: '¿Tu web está inaccesible y el hosting no señala nada?',
    description:
      'Envíame el enlace de tu web: miro de dónde viene la caída (dominio, certificado, PHP, plugin, base de datos) y te digo qué hacer en 24 horas. Gratis, sin compromiso.',
    button: 'Enviar el enlace de mi web',
  },
}

/**
 * Builds the page of one provider from what differs between them; the checks, the method and the CTA are shared.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @param {DibodevHostingProviderPageSpecifics} specifics - Its own texts and facts.
 * @returns {DibodevHostingProviderPageContent} The page content.
 */
function buildProviderPage(
  key: DibodevHostingProviderKey,
  specifics: DibodevHostingProviderPageSpecifics,
): DibodevHostingProviderPageContent {
  const hasReadableStatusPage: boolean = HostingStatusUtils.hasReadableStatusPage(key)

  return {
    key,
    name: specifics.name,
    supportUrl: specifics.supportUrl,
    supportLabel: specifics.supportLabel,
    meta: {
      title: specifics.metaTitle,
      description: specifics.metaDescription,
      inLanguage: 'es-ES',
      schemaAbout: `Estado de los servicios de ${specifics.name}`,
    },
    breadcrumbLabel: specifics.name,
    shareImage: {
      titleLines: [`¿${specifics.name}`, 'está caído?'],
      highlight: 'caído',
      subtitle: specifics.shareSubtitle,
      badge: hasReadableStatusPage ? 'En directo' : 'Qué hacer',
      alt: hasReadableStatusPage
        ? `¿${specifics.name} está caído? El estado en directo en dibodev.fr`
        : `¿${specifics.name} está caído? Dónde mirar y qué hacer, en dibodev.fr`,
    },
    hero: {
      titleBefore: `¿${specifics.name} `,
      titleHighlight: 'está caído',
      titleAfter: '?',
      description: specifics.heroDescription,
      reassurances: hasReadableStatusPage
        ? [`Leído cada 5${NBSP}minutos`, 'Incidentes recientes', 'Qué hacer durante la caída']
        : ['Canales oficiales', 'Tres comprobaciones', 'Qué hacer durante la caída'],
      authorIntro: AUTHOR_INTRO,
      authorBio: AUTHOR_BIO,
    },
    mobileContactBar: {
      text: `¿Tu web en ${specifics.name} está inaccesible?`,
      buttonLabel: 'Enviar el enlace de mi web',
    },
    checks: {
      anchorId: 'verifications',
      eyebrow: '¿Tú o el hosting?',
      title: `Tres comprobaciones cuando ${specifics.name} no señala nada`,
      intro: 'Cuando la página de estado está en verde, la caída está casi siempre en la web, el dominio o la caché.',
      items: COMMON_CHECKS,
    },
    facts: {
      anchorId: 'faits',
      eyebrow: 'Lo que hay que saber',
      title: `${specifics.name} y las caídas: los datos`,
      intro: 'Revisados el 27 de octubre de 2026 en las páginas oficiales del hosting.',
      facts: specifics.facts,
      calloutEmphasizedIntro: 'Soporte oficial:',
      calloutText: specifics.factsCalloutText,
    },
    method: {
      eyebrow: 'Durante la caída',
      title: 'Qué hacer en los diez primeros minutos',
      intro: 'En orden, sin romper nada.',
      steps: COMMON_METHOD_STEPS,
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: `Caídas de ${specifics.name}: las respuestas`,
      questions: specifics.faq,
    },
    relatedArticles: {
      title: 'Para leer también',
      intro: `Las guías escritas para las webs alojadas en ${specifics.name} y lo que rompe una web sin que el hosting tenga nada que ver.`,
    },
    contactCta: {
      title: `¿Tu web en ${specifics.name} está inaccesible y el hosting no señala nada?`,
      description:
        'Envíame el enlace de tu web: miro de dónde viene la caída (dominio, certificado, PHP, plugin, base de datos) y te digo qué hacer en 24 horas. Gratis, sin compromiso.',
      button: 'Enviar el enlace de mi web',
    },
  }
}

const PROVIDERS: Record<DibodevHostingProviderKey, DibodevHostingProviderPageContent> = {
  ovh: buildProviderPage('ovh', {
    name: 'OVHcloud',
    supportUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
    supportLabel: '¿Qué hacer si mi web está inaccesible? (guía de OVHcloud)',
    metaTitle: '¿OVH está caído? Estado del hosting web en directo',
    metaDescription:
      '¿OVHcloud está caído hoy? El estado del hosting web, dominios y DNS leído cada 5 minutos en la página de estado oficial, los incidentes recientes y qué hacer.',
    heroDescription:
      '¿Tu web alojada en OVHcloud no responde? Esto es lo que dice la página de estado Web Cloud del hosting (hosting compartido, dominios, DNS, bases de datos), leída cada cinco minutos, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting web, dominios, DNS: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'OVHcloud publica seis páginas de estado, una de ellas para el hosting web',
        text: 'El portal status-ovhcloud.com agrupa seis páginas; la que cuenta para una web corporativa o una tienda es «Web Cloud»: hosting compartido de los centros de datos de Gravelines (GRA) y Beauharnois (BHS), dominios, DNS, bases de datos, CDN. Es la que se lee aquí.',
        sourceName: 'OVHcloud, estado Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
      {
        contextLabel: '27 de octubre de 2026',
        title: 'Un incidente en un servidor de archivos dejó sin acceso a webs del clúster 129',
        text: 'El incidente «Filerz 956 Cluster129» se abrió a las 9:36 UTC con un impacto mayor: «los clientes no podían acceder temporalmente a sus webs alojadas en el filerz afectado». El mismo día, un incidente en el clúster 121 (de 10:28 a 13:59 UTC) no afectó al acceso a las webs.',
        sourceName: 'OVHcloud, historial de incidentes Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/history',
      },
      {
        contextLabel: 'Clúster',
        title: 'Tu hosting compartido tiene un número de clúster',
        text: 'Cada hosting web de OVHcloud está vinculado a un clúster (cluster021, cluster121…) visible en el área de cliente, sección Alojamientos. Los incidentes se anuncian por clúster: si el tuyo no aparece, la caída probablemente no es esa.',
        sourceName: 'OVHcloud, diagnóstico de una web inaccesible',
        sourceUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
      },
      {
        contextLabel: 'Mantenimiento permanente',
        title: 'Varios clústeres están en mantenimiento sin que las webs se corten',
        text: 'En la página Web Cloud, una decena de clústeres aparecen «en mantenimiento» de forma continua: son operaciones de fondo, no caídas. Esta página no las cuenta como incidentes; solo cuentan los incidentes declarados por OVHcloud.',
        sourceName: 'OVHcloud, estado Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
    ],
    factsCalloutText:
      'la guía «¿Qué hacer si mi web está inaccesible?» de OVHcloud detalla las comprobaciones del lado del cliente (DNS, .htaccess, PHP, cuotas) y cómo abrir un ticket desde el área de cliente. El soporte telefónico atiende en el 1007 desde Francia.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de OVHcloud o de mi web?',
        answer:
          'Mira primero el estado de arriba: un incidente Web Cloud en curso en tu clúster lo explica todo, y solo te queda esperar. Si no hay nada anunciado, abre tu área de cliente, sección Alojamientos: ahí aparecen un hosting caducado, un dominio sin renovar o una alerta de cuota. Después, un error 500 o una página en blanco señalan a tu web (PHP, plugin, base de datos); un tiempo de espera agotado apunta más bien al DNS o al servidor.',
      },
      {
        question: 'Mi web en OVH muestra una página en blanco desde la actualización de PHP de octubre de 2026',
        answer:
          'Del 21 al 23 de octubre de 2026, OVHcloud desplegó los parches de PHP en todos los clústeres compartidos. Una web que se quedó en una versión antigua de PHP, o con un plugin que ya no es compatible, puede mostrar una página en blanco o un error 500 tras ese cambio. La guía del blog «cambiar la versión de PHP en OVH» explica dónde leer y modificar la versión en el área de cliente.',
      },
      {
        question: '¿Cuánto duran los incidentes de OVHcloud en el hosting web?',
        answer:
          'Los incidentes de clúster publicados en octubre de 2026 duraron de unos minutos a unas horas: 3 h 30 min para el clúster 121 el 27 de octubre, algo más de 5 horas para los clústeres 120, 126 y 131 el 26 de octubre. Los incidentes de servidor de archivos (filerz) pueden durar más, porque a veces requieren una restauración.',
      },
      {
        question: '¿OVHcloud devuelve el dinero por una caída?',
        answer:
          'Las condiciones particulares del hosting web de OVHcloud prevén un compromiso de disponibilidad y penalizaciones en forma de abono, que hay que pedir al soporte con las referencias del incidente. Nada es automático: guarda la hora de inicio y de fin que aparece en la página de estado.',
      },
    ],
  }),
  o2switch: buildProviderPage('o2switch', {
    name: 'o2switch',
    supportUrl: 'https://faq.o2switch.fr/guides/webmastering/debuguer-page-blanche-erreur-500/',
    supportLabel: 'Corregir una página en blanco o un error 500 (FAQ de o2switch)',
    metaTitle: '¿o2switch está caído? Dónde mirar y qué hacer',
    metaDescription:
      '¿o2switch está caído hoy? No tiene página de estado: dónde leer sus anuncios, cómo saber si la caída viene de él y qué hacer.',
    heroDescription:
      '¿Tu web alojada en o2switch no responde? o2switch no tiene página de estado pública: sus anuncios de mantenimiento e incidentes pasan por su cuenta de X. Aquí tienes dónde mirar, y cómo saber en cinco minutos si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting compartido: lo que anuncia el hosting',
    facts: [
      {
        contextLabel: 'Sin página de estado',
        title: 'o2switch no tiene página de estado oficial',
        text: 'No existe ninguna dirección «status» o «estado de los servicios» en o2switch. La web remite al soporte y a la cuenta de X, donde se publican los anuncios de mantenimiento y los incidentes. Existe una página de o2switch en Statuspage, pero es un borrador nunca puesto en servicio, congelado en enero de 2024: siempre muestra «todo funciona».',
        sourceName: 'o2switch, página de soporte',
        sourceUrl: 'https://www.o2switch.fr/support-hebergeur/',
      },
      {
        contextLabel: '21 al 23 de octubre de 2026',
        title: 'Los parches de PHP se anunciaron en X, servidor a servidor',
        text: 'El 21 de octubre a las 22:44 UTC, o2switch anunció el despliegue de los parches de PHP «en todos nuestros servidores»; el 22 a las 7:21, el fin del despliegue; el 23, una aclaración sobre el número de versión mostrado. Durante ese periodo, algunas webs mostraron una página en blanco mientras el servidor se reiniciaba.',
        sourceName: 'o2switch en X',
        sourceUrl: 'https://x.com/o2switch',
      },
      {
        contextLabel: 'Oferta única',
        title: 'Un solo servidor por cliente, en Clermont-Ferrand',
        text: 'o2switch ofrece un único plan compartido, alojado en su propio centro de datos en Clermont-Ferrand, con cPanel. Una caída afecta por tanto a un servidor y a todas sus webs, rara vez a todo el hosting: mira si otra web alojada en el mismo servidor que la tuya responde.',
        sourceName: 'o2switch, la oferta única',
        sourceUrl: 'https://www.o2switch.fr/',
      },
      {
        contextLabel: 'Error 500',
        title: 'La FAQ explica cómo leer los errores de Apache desde cPanel',
        text: 'Cuando el servidor responde pero la web muestra una página en blanco o un error 500, la causa está en la web: o2switch documenta la lectura del registro de errores de Apache desde cPanel y las correcciones más habituales (plugin, .htaccess, versión de PHP).',
        sourceName: 'o2switch, FAQ errores de Apache',
        sourceUrl: 'https://faq.o2switch.fr/cpanel/mesures/erreurs-apache/',
      },
    ],
    factsCalloutText:
      'el soporte de o2switch responde por ticket desde el área de cliente y por teléfono, 7 días a la semana. En caso de caída de un servidor, es él quien da la hora de vuelta.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de o2switch o de mi web?',
        answer:
          'Sin página de estado, lo más seguro es probar otra web alojada en o2switch, idealmente en el mismo servidor que la tuya (el nombre del servidor está en tu área de cliente). Si responde, la caída está en tu web: un error 500 o una página en blanco se leen en el registro de errores de cPanel. Si tampoco responde, abre un ticket: el soporte de o2switch confirma o no el incidente.',
      },
      {
        question: '¿o2switch ha anunciado una caída hoy?',
        answer:
          'Esta página no puede decirlo: o2switch no tiene ninguna página de estado legible, y adivinar un estado a partir de sus mensajes sería engañoso. Sus anuncios de mantenimiento e incidencias pasan por su cuenta de X (x.com/o2switch); la caída de un servidor aislado no siempre se anuncia ahí. Para salir de dudas, abre un ticket desde el área de cliente: el soporte confirma o no el incidente.',
      },
      {
        question: 'Mi web en o2switch muestra una página en blanco desde la actualización de PHP',
        answer:
          'Los parches de PHP del 21 al 23 de octubre de 2026 se instalaron en todos los servidores. Una web que usaba una versión de PHP muy antigua, o un plugin incompatible con la versión elegida en cPanel, puede mostrar una página en blanco desde entonces. La guía «cambiar la versión de PHP en o2switch» explica dónde ajustar la versión en cPanel, extensión por extensión.',
      },
      {
        question: '¿o2switch devuelve el dinero por una caída?',
        answer:
          'Las condiciones generales de o2switch prevén una garantía de disponibilidad y un gesto comercial bajo petición, no una devolución automática. Anota la hora de inicio y de fin de la indisponibilidad tal como la hayas constatado, y adjúntala a tu ticket.',
      },
    ],
  }),
  infomaniak: buildProviderPage('infomaniak', {
    name: 'Infomaniak',
    supportUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
    supportLabel: 'Resolver un problema de web inaccesible (FAQ de Infomaniak)',
    metaTitle: '¿Infomaniak está caído? Estado de los servicios en directo',
    metaDescription:
      '¿Infomaniak está caído? Estado del hosting, dominios y correo leído cada 5 minutos en infomaniakstatus.com, eventos en curso y qué hacer si tu web no responde.',
    heroDescription:
      '¿Tu web alojada en Infomaniak no responde? Esto es lo que dice la página de estado de los servicios del hosting suizo, leída cada cinco minutos, con los eventos en curso y el historial de los últimos días, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting, dominios, correo: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'Infomaniak mantiene su propia página de estado, en cinco idiomas',
        text: 'infomaniakstatus.com lista los eventos en curso (mantenimientos, incidentes, perturbaciones) con su hora de inicio y de fin estimada, y luego el historial de los últimos sesenta días con la duración de cada evento. Cada evento tiene su página con las actualizaciones fechadas.',
        sourceName: 'Infomaniak, estado de los servicios',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '27 de octubre de 2026',
        title: 'Un incidente de nueve horas en los VPS Cloud',
        text: 'El evento «VPS Cloud: evento en curso» duró de 1:00 a 10:40 el 27 de octubre de 2026. El 23 de octubre, la autenticación S3 del Public Cloud estuvo perturbada durante siete horas; el 22, las migraciones a la nueva infraestructura se suspendieron ocho horas.',
        sourceName: 'Infomaniak, historial de los últimos 60 días',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '21 de octubre de 2026',
        title: 'Los parches de PHP fueron objeto de un evento de dos días',
        text: 'El evento «Vulnerabilidades críticas de PHP: medidas de seguridad y recomendaciones» se abrió el 21 de octubre y se mantuvo al día durante dos días, el tiempo de desplegar los parches en los hostings y de recomendar a los clientes comprobar su versión de PHP.',
        sourceName: 'Infomaniak, historial de los últimos 60 días',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: 'Suiza',
        title: 'Centros de datos en Suiza, la misma hora que París',
        text: 'Los servidores de Infomaniak están en Suiza (región de Ginebra) y la página de estado va en hora suiza, la misma que París. Las fechas mostradas aquí son por tanto las de la página, sin conversión.',
        sourceName: 'Infomaniak, FAQ web inaccesible',
        sourceUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
      },
    ],
    factsCalloutText:
      'la FAQ «Resolver un problema de web inaccesible» de Infomaniak repasa las causas del lado del cliente (dominio, DNS, certificado, PHP, cuotas). El soporte atiende por ticket desde el Manager y por teléfono, 7 días a la semana.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de Infomaniak o de mi web?',
        answer:
          'El estado de arriba distingue los mantenimientos (anunciados con antelación, con una hora de fin) de los incidentes y perturbaciones. Si nada afecta al hosting web, abre el Manager de Infomaniak: ahí aparecen un dominio caducado, un hosting suspendido o una alerta. La FAQ 978 del hosting repasa después las causas del lado de la web, de la más frecuente a la más rara.',
      },
      {
        question: '¿Los mantenimientos de Infomaniak cortan las webs?',
        answer:
          'La mayoría de las veces no: los mantenimientos del Public Cloud, del Servidor Cloud o de Node.js anunciados en la página de estado afectan a productos concretos y prevén, como mucho, cortes breves. El título del evento y la etiqueta (hosting, correo, cloud) dicen qué producto está afectado.',
      },
      {
        question: '¿Cuánto duran los incidentes de Infomaniak?',
        answer:
          'Los eventos del historial de los últimos sesenta días van de unas decenas de minutos a unas horas: nueve horas para los VPS Cloud el 27 de octubre de 2026, siete horas para la autenticación S3 el 23 de octubre. La página de cada evento da las actualizaciones al minuto.',
      },
      {
        question: '¿Infomaniak devuelve el dinero por una caída?',
        answer:
          'Las condiciones particulares de Infomaniak prevén un compromiso de disponibilidad según el producto; la solicitud se hace desde el Manager con las referencias del evento. Nada es automático: guarda la hora de inicio y de fin que aparece en la página del evento.',
      },
    ],
  }),
  ionos: buildProviderPage('ionos', {
    name: 'IONOS',
    supportUrl: 'https://www.ionos.fr/digitalguide/hebergement/aspects-techniques/err-connection-refused/',
    supportLabel: 'No se puede acceder a este sitio web: las soluciones (guía de IONOS)',
    metaTitle: '¿IONOS está caído? Estado del hosting web en directo',
    metaDescription:
      '¿IONOS está caído hoy? Estado del hosting, dominios y correo leído cada 5 minutos en ionos-status.fr, incidentes recientes y qué hacer si tu web no responde.',
    heroDescription:
      '¿Tu web alojada en IONOS no responde? Esto es lo que dice la página de estado francesa del hosting (hosting web, WordPress, dominios, correo, área de cliente), leída cada cinco minutos, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting, dominios, correo: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'IONOS tiene una página de estado francesa, distinta de la estadounidense',
        text: 'ionos-status.fr cubre la oferta francesa: hosting web, hosting WordPress, dominios, correo, servidores, creador de webs, área de cliente. Los incidentes están redactados en francés con la hora de París. La página ionos-status.com, en cambio, cubre la oferta estadounidense.',
        sourceName: 'IONOS, página de estado',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
      {
        contextLabel: '22 de octubre de 2026',
        title: 'Dos incidentes en el panel de control el mismo día',
        text: 'El 22 de octubre de 2026, «algunas funciones del panel de control» no estuvieron disponibles de 12:30 a 13:08, y luego de 16:06 a 18:14. Las webs en sí seguían en línea: solo la administración estaba afectada.',
        sourceName: 'IONOS, historial de incidentes',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: '21 y 22 de octubre de 2026',
        title: 'El mantenimiento de seguridad de PHP duró una noche',
        text: 'El incidente «Mantenimiento de seguridad: posibles cortes breves en los servicios basados en PHP» se abrió el 21 de octubre a las 18:11 y se cerró el 22 a las 13:07, el tiempo de desplegar los parches de PHP en los hostings. Las webs pudieron estar brevemente indisponibles durante los reinicios.',
        sourceName: 'IONOS, historial de incidentes',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: 'Área de cliente',
        title: 'Una caída del área de cliente no es una caída de tu web',
        text: 'IONOS declara por separado los incidentes del área de cliente, del inicio de sesión y de las herramientas de IA. Cuando solo el grupo «IONOS» (área de cliente) está afectado, tu web sigue accesible para los visitantes; simplemente no puedes administrarla durante el incidente.',
        sourceName: 'IONOS, componentes supervisados',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
    ],
    factsCalloutText:
      'la guía «No se puede acceder a este sitio web» de IONOS explica las causas del lado del navegador y del lado de la web. El soporte de IONOS atiende por teléfono y por chat desde el área de cliente, las 24 horas.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de IONOS o de mi web?',
        answer:
          'Lee primero el estado de arriba: un incidente del grupo «Hosting» o «Domains» te afecta, un incidente del grupo «IONOS» (área de cliente) no. Si no hay nada anunciado, prueba otra web alojada en IONOS. Si responde, la caída está en tu web: contrato caducado, dominio sin renovar, error de PHP, plugin. La guía «ERR_CONNECTION_REFUSED» de IONOS lista las comprobaciones del lado del navegador.',
      },
      {
        question: 'Mi web en IONOS muestra un error 503 o una página en blanco',
        answer:
          'Un error 503 en IONOS viene casi siempre de un límite de recursos del hosting o de un script PHP que ya no responde; una página en blanco viene de un error de PHP, a menudo tras un cambio de versión o una actualización de plugin. La guía «HTTP 503» de IONOS y la guía del blog «cambiar la versión de PHP en IONOS» detallan los dos casos.',
      },
      {
        question: '¿Cuánto duran los incidentes de IONOS?',
        answer:
          'Los incidentes de octubre de 2026 duraron de cuarenta minutos (panel de control, el 22 de octubre a mediodía) a dos horas (el mismo día a última hora de la tarde); el mantenimiento de seguridad de PHP estuvo abierto diecinueve horas. Los incidentes se actualizan en francés en la página de estado hasta su cierre.',
      },
      {
        question: '¿IONOS devuelve el dinero por una caída?',
        answer:
          'Las condiciones particulares de IONOS prevén un compromiso de disponibilidad para el hosting web; la solicitud se hace al soporte con las referencias del incidente. Nada es automático: guarda las horas de inicio y de fin que aparecen en la página de estado.',
      },
    ],
  }),
  hostinger: buildProviderPage('hostinger', {
    name: 'Hostinger',
    supportUrl:
      'https://www.hostinger.com/fr/support/1583286-que-faire-si-vous-ne-pouvez-pas-acceder-a-votre-site-web-chez-hostinger/',
    supportLabel: 'Qué hacer si no puedes acceder a tu web (ayuda de Hostinger)',
    metaTitle: '¿Hostinger está caído? Estado del hosting en directo',
    metaDescription:
      '¿Hostinger está caído hoy? Estado del hosting compartido, cloud y correo leído cada 5 minutos, incidentes recientes y qué hacer si tu web no responde.',
    heroDescription:
      '¿Tu web alojada en Hostinger no responde? Esto es lo que dice la página de estado del hosting (hosting compartido, cloud, cPanel, correo, centros de datos), leída cada cinco minutos, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting compartido, cloud, correo: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'Hostinger publica el estado de 85 componentes, en inglés',
        text: 'statuspage.hostinger.com sigue el hosting compartido, el cloud, cPanel, el correo y trece centros de datos, entre ellos los de Europa. Los incidentes están redactados en inglés y fechados en tiempo universal; esta página los muestra en hora de París.',
        sourceName: 'Hostinger, página de estado',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'Varias veces al día',
        title: 'Los «Emergency Server Maintenance» no son caídas generales',
        text: 'Hostinger declara cada intervención de urgencia en un servidor aislado («Emergency Server fr-1231 Maintenance», unos minutos) como un incidente sin impacto. Esta página los descarta para quedarse solo con los incidentes que afectan a un servicio entero; si tu servidor aparece, es en la página oficial donde lo verás.',
        sourceName: 'Hostinger, historial de incidentes',
        sourceUrl: 'https://statuspage.hostinger.com/history',
      },
      {
        contextLabel: '27 de octubre de 2026',
        title: 'Dos incidentes abiertos en herramientas, no en las webs',
        text: 'El 27 de octubre de 2026, Hostinger seguía un incidente en sus estadísticas («Analytics Temporarily Unavailable») y otro en sus herramientas de recuperación de páginas web; el hosting en sí no estaba declarado caído.',
        sourceName: 'Hostinger, incidentes en curso',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'hPanel',
        title: 'El panel hPanel puede ir lento sin que las webs lo vayan',
        text: 'El componente «Hostinger hPanel Backend» aparece con regularidad en rendimiento degradado. Eso ralentiza la administración del hosting, no las webs de los visitantes.',
        sourceName: 'Hostinger, componentes supervisados',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
    ],
    factsCalloutText:
      'el artículo «Qué hacer si no puedes acceder a tu web en Hostinger» lista las comprobaciones del lado del cliente. El soporte de Hostinger es por chat desde hPanel, las 24 horas; no hay soporte telefónico.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de Hostinger o de mi web?',
        answer:
          'Lee el estado de arriba: un incidente en «Hostinger Shared Hosting», «Cloud Hosting» o un centro de datos te afecta; un incidente en hPanel, las estadísticas o la IA, no. Si no hay nada anunciado, prueba otra web alojada en Hostinger; si responde, la causa está en tu web o en tu dominio. El artículo de ayuda de Hostinger repasa las comprobaciones en orden.',
      },
      {
        question: 'Mi servidor de Hostinger está en «Emergency Maintenance», ¿qué hago?',
        answer:
          'Nada: estas intervenciones duran unos minutos y las hace Hostinger. Si tu servidor (su nombre está en hPanel) aparece, espera al final anunciado en la página oficial. Estas intervenciones no se cuentan aquí como caídas generales, para no mostrar un incidente de forma permanente.',
      },
      {
        question: 'Mi web en Hostinger muestra una página en blanco desde la actualización de PHP',
        answer:
          'Hostinger desplegó los parches PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35 el 21 de octubre de 2026. Una web que se quedó en una versión más antigua, o con un plugin incompatible, puede mostrar una página en blanco desde entonces. La guía del blog «cambiar la versión de PHP en Hostinger» explica el ajuste en hPanel.',
      },
      {
        question: '¿Hostinger devuelve el dinero por una caída?',
        answer: `Hostinger anuncia una garantía de disponibilidad del 99,9${NBSP}% en sus condiciones; la compensación se pide al soporte por chat con las referencias del incidente. Nada es automático: guarda la hora de inicio y de fin que aparece en la página de estado.`,
      },
    ],
  }),
  planethoster: buildProviderPage('planethoster', {
    name: 'PlanetHoster',
    supportUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
    supportLabel: 'Interpretar los códigos de error HTTP (base de conocimientos de PlanetHoster)',
    metaTitle: '¿PlanetHoster está caído? Dónde mirar y qué hacer',
    metaDescription:
      '¿PlanetHoster está caído hoy? Ya no tiene página de estado: dónde leer sus anuncios, cómo saber si la caída viene de él y qué hacer.',
    heroDescription:
      '¿Tu web alojada en PlanetHoster no responde? PlanetHoster ya no tiene página de estado pública: sus anuncios pasan por su cuenta de X y su blog. Aquí tienes dónde mirar, y cómo saber en cinco minutos si la caída viene de él o de tu web.',
    shareSubtitle: 'World, HybridCloud, N0C: lo que anuncia el hosting',
    facts: [
      {
        contextLabel: 'Sin página de estado',
        title: 'El foro que hacía de página de estado ha cerrado',
        text: 'Los enlaces «Estado de los servicios» y «Trabajos en curso» de la web de PlanetHoster apuntan a un foro cerrado, que redirige a un formulario de contacto. La categoría «Trabajos y mantenimientos» del blog no se actualiza desde enero de 2019. No existe ninguna dirección status.planethoster.',
        sourceName: 'PlanetHoster, web oficial',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: '21 al 23 de octubre de 2026',
        title: 'Los parches de PHP se anunciaron en X y luego en el blog',
        text: 'El 21 de octubre a las 23:39 UTC, PlanetHoster anunció el despliegue de los parches de PHP «en todos nuestros servidores», con actualizaciones el 22 y el 23 de octubre, y luego un balance «PHP2Shell: repaso de nuestra intervención» publicado en el blog el 23 de octubre.',
        sourceName: 'PlanetHoster, blog',
        sourceUrl: 'https://blog.planethoster.com/',
      },
      {
        contextLabel: 'Francia y Canadá',
        title: 'Centros de datos en dos países',
        text: 'Los hostings World e HybridCloud de PlanetHoster se reparten entre Francia y Canadá (Montreal). Los anuncios públicos suelen dar la hora de Montreal y la hora de París; esta página muestra los horarios en hora de París.',
        sourceName: 'PlanetHoster, web oficial',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: 'Códigos HTTP',
        title: 'La base de conocimientos explica los códigos de error',
        text: 'Cuando el servidor responde pero la web muestra un error, PlanetHoster documenta la lectura de los códigos HTTP (403, 404, 500, 503) y las correcciones habituales desde su panel N0C.',
        sourceName: 'PlanetHoster, base de conocimientos',
        sourceUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
      },
    ],
    factsCalloutText:
      'el soporte de PlanetHoster responde por ticket desde el área de cliente y por teléfono. En caso de caída, es él quien confirma el incidente y da la hora de vuelta.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de PlanetHoster o de mi web?',
        answer:
          'Sin página de estado, prueba otra web alojada en PlanetHoster, en la misma plataforma que la tuya (World o HybridCloud, visible en el área de cliente). Si responde, la caída está en tu web: los códigos de error HTTP se leen desde N0C. Si tampoco responde, abre un ticket: el soporte confirma o no el incidente.',
      },
      {
        question: '¿PlanetHoster ha anunciado una caída hoy?',
        answer:
          'Esta página no puede decirlo: PlanetHoster ya no tiene ninguna página de estado legible, y adivinar un estado a partir de sus mensajes sería engañoso. Sus anuncios pasan por su cuenta de X (x.com/planethoster) y su blog. Para salir de dudas, abre un ticket desde el área de cliente: el soporte confirma o no el incidente.',
      },
      {
        question: 'Mi web en PlanetHoster muestra una página en blanco desde la actualización de PHP',
        answer:
          'Los parches de PHP se desplegaron en todos los servidores del 21 al 23 de octubre de 2026. Una web que usaba una versión de PHP muy antigua, o un plugin incompatible, puede mostrar una página en blanco desde entonces. La guía del blog «cambiar la versión de PHP en PlanetHoster» explica el ajuste en N0C.',
      },
      {
        question: '¿PlanetHoster devuelve el dinero por una caída?',
        answer:
          'Las condiciones generales de PlanetHoster prevén una garantía de disponibilidad y un gesto comercial bajo petición, no una devolución automática. Anota la hora de inicio y de fin de la indisponibilidad tal como la hayas constatado, y adjúntala a tu ticket.',
      },
    ],
  }),
  gandi: buildProviderPage('gandi', {
    name: 'Gandi',
    supportUrl: 'https://docs.gandi.net/fr/hebergement_web/erreurs_courantes/index.html',
    supportLabel: 'Errores habituales en un hosting web (documentación de Gandi)',
    metaTitle: '¿Gandi está caído? Estado del hosting y DNS en directo',
    metaDescription:
      '¿Gandi está caído? Estado del hosting, DNS, correo y dominios leído cada 5 minutos en status.gandi.net, incidentes recientes y qué hacer si tu web no responde.',
    heroDescription:
      '¿Tu web o tu nombre de dominio en Gandi no responde? Esto es lo que dice la página de estado de Gandi (hosting web, DNS, correo, portal), leída cada cinco minutos, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Hosting, DNS, dominios, correo: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'Gandi sigue 30 componentes: hosting, DNS, correo, portal, API',
        text: 'status.gandi.net distingue el hosting (Simple Hosting, PaaS, cloud), los DNS, el correo, el portal de cliente y las API. Para una web, los grupos que cuentan son «Hosting» y «DNS»; un incidente en el portal no corta las webs.',
        sourceName: 'Gandi, página de estado',
        sourceUrl: 'https://status.gandi.net/',
      },
      {
        contextLabel: '23 de octubre de 2026',
        title: 'Un incidente de tres horas en el webmail',
        text: 'El incidente «Webmail incident» duró de 9:03 a 12:12 UTC el 23 de octubre de 2026, con un impacto mayor en la consulta del correo en línea; las webs no estaban afectadas.',
        sourceName: 'Gandi, historial de incidentes',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: '9 de septiembre de 2026',
        title: 'Errores 503 en parte de los hostings web',
        text: 'El incidente «503 error on some webhosting instances» duró de 16:59 a 20:44 UTC el 9 de septiembre de 2026, con un impacto mayor: algunas webs alojadas devolvían un error 503 durante casi cuatro horas.',
        sourceName: 'Gandi, historial de incidentes',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: 'Registros',
        title: 'Los mantenimientos de registros no afectan a las webs',
        text: 'Una decena de mantenimientos de registros de nombres de dominio están planificados de forma permanente en la página de estado. Pueden retrasar un registro o una transferencia de dominio, nunca la visualización de una web: esta página no los cuenta como incidentes.',
        sourceName: 'Gandi, mantenimientos planificados',
        sourceUrl: 'https://status.gandi.net/',
      },
    ],
    factsCalloutText:
      'la documentación «Errores habituales» de Gandi explica los errores HTTP y las causas del lado de la web. El soporte de Gandi responde por ticket desde el portal de cliente.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de Gandi o de mi web?',
        answer:
          'Mira el estado de arriba: un incidente «Hosting» o «DNS» te afecta, un incidente «Portal» o «Email» no. Si no hay nada anunciado, comprueba en el portal de Gandi que el dominio y el hosting están renovados, y luego lee el error mostrado: un error 503 o una página en blanco señalan a la web, un tiempo de espera agotado apunta más bien al DNS.',
      },
      {
        question: 'Mi dominio está en Gandi pero mi web está alojada en otro sitio',
        answer:
          'En ese caso, solo los grupos «DNS» y «Domains» de la página de estado te afectan. Un incidente DNS en Gandi deja tu web inaccesible aunque el hosting de la web funcione, porque los visitantes ya no encuentran la dirección del servidor. Comprueba también el estado del hosting de la web en su propia página.',
      },
      {
        question: '¿Cuánto duran los incidentes de Gandi?',
        answer:
          'Los incidentes publicados en 2026 duraron de veinte minutos (operaciones PaaS el 6 de octubre) a casi cuatro horas (errores 503 en hostings el 9 de septiembre). Los mantenimientos anunciados con antelación pueden durar un día entero, sin corte visible en la mayoría de los casos.',
      },
      {
        question: '¿Gandi devuelve el dinero por una caída?',
        answer:
          'Las condiciones particulares del hosting web de Gandi prevén un compromiso de disponibilidad y una compensación bajo petición, con las referencias del incidente. Nada es automático: guarda la hora de inicio y de fin que aparece en la página de estado.',
      },
    ],
  }),
  lws: buildProviderPage('lws', {
    name: 'LWS',
    supportUrl: 'https://aide.lws.fr/base/Hebergement-web-mutualise/Depannage-des-erreurs-HTTP/Codes-derreurs-HTTP',
    supportLabel: 'Solución de errores HTTP (ayuda de LWS)',
    metaTitle: '¿LWS está caído? Estado de los servicios en directo',
    metaDescription:
      '¿LWS está caído hoy? Estado web, mail, SQL, DNS y cPanel leído cada 5 minutos, eventos de las últimas 72 horas y qué hacer si tu web no responde.',
    heroDescription:
      '¿Tu web alojada en LWS no responde? Esto es lo que dice la página de estado de los servicios del hosting (web, mail, SQL, DNS, cPanel, Plesk, VPS), leída cada cinco minutos, con los eventos de las últimas setenta y dos horas, y cómo saber si la caída viene de él o de tu web.',
    shareSubtitle: 'Web, mail, SQL, DNS, cPanel: el estado en directo',
    facts: [
      {
        contextLabel: 'Página de estado',
        title: 'LWS mantiene una página de estado por servicio, con cuatro niveles',
        text: 'La página «Estado de los servicios» de la ayuda de LWS muestra un estado global y un estado por servicio (red, web, mail, SQL, VPS, DNS, centro de datos, cPanel, Plesk, copias de seguridad) con cuatro niveles: todo va bien, mantenimiento programado, perturbación en curso, incidente en curso. Solo conserva los eventos de las últimas 72 horas: esta página conserva los que ha visto.',
        sourceName: 'LWS, estado de los servicios',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: '27 de octubre de 2026',
        title: 'Un mantenimiento de Plesk y una mejora del servicio de mail por la mañana',
        text: 'El 27 de octubre de 2026, LWS realizó un mantenimiento en el servicio Plesk de 8:00 a 11:35 y una mejora del servicio de mail de 8:00 a 8:32, ambos anunciados y luego cerrados en la página de estado.',
        sourceName: 'LWS, estado de los servicios',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'Desde el 23 de octubre de 2026',
        title: 'Un parche de seguridad de Node.js en los servidores cPanel',
        text: 'El 23 de octubre de 2026 a las 18:09, LWS aplicó un parche de seguridad de Node.js en sus servidores cPanel, cerrado el 27 de octubre a las 17:10. La misma semana, la página señalaba retrasos en la respuesta del soporte, clasificados como «perturbación».',
        sourceName: 'LWS, estado de los servicios',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'Errores HTTP',
        title: 'La ayuda de LWS documenta los errores 500 en cPanel',
        text: 'Cuando el servidor responde pero la web muestra un error, LWS documenta la solución de los códigos HTTP y el diagnóstico de un error 500 en un hosting cPanel: registro de errores, .htaccess, versión de PHP, extensiones.',
        sourceName: 'LWS, diagnóstico de un error 500',
        sourceUrl: 'https://aide.lws.fr/base/cPanel/Hebergement-web-mutualise-cPanel/diagnostic-erreur-500-cpanel',
      },
    ],
    factsCalloutText:
      'la ayuda de LWS detalla la solución de los errores HTTP y de los errores 500 en cPanel. El soporte de LWS responde por ticket desde el área de cliente y por teléfono en horario laboral.',
    faq: [
      {
        question: '¿Cómo saber si la caída viene de LWS o de mi web?',
        answer:
          'Lee el estado de arriba: «incidente en curso» o «perturbación en curso» en el servicio web, SQL o DNS te afecta; un mantenimiento programado se anuncia con antelación con su hora de fin. Si todo va bien por parte de LWS, la caída está en tu web: la ayuda de LWS explica cómo leer el registro de errores desde cPanel.',
      },
      {
        question: 'La página de estado de LWS solo muestra 72 horas, ¿dónde está el historial?',
        answer:
          'LWS solo muestra los eventos de los últimos tres días. Esta página guarda en memoria los eventos que ha leído y los cambios de estado que ha constatado, para que puedas encontrar la fecha y la duración de una caída pasada.',
      },
      {
        question: 'Mi web en LWS muestra una página en blanco desde la actualización de PHP',
        answer:
          'Los parches de PHP de octubre de 2026 se desplegaron en los servidores compartidos. Una web que se quedó en una versión antigua de PHP, o con un plugin incompatible con la versión elegida en cPanel, puede mostrar una página en blanco desde entonces. La versión se ajusta desde la herramienta «Seleccionar versión de PHP» de cPanel.',
      },
      {
        question: '¿LWS devuelve el dinero por una caída?',
        answer:
          'Las condiciones generales de LWS prevén una garantía de disponibilidad y un gesto comercial bajo petición, no una devolución automática. Anota la hora de inicio y de fin de la indisponibilidad tal como aparece en la página de estado, y adjúntala a tu ticket.',
      },
    ],
  }),
}

export const HOSTING_STATUS_PAGE_ES: DibodevHostingStatusPageContent = {
  cardWording: CARD_WORDING,
  boardWording: {
    stateLabels: CARD_WORDING.stateLabels,
    checkedAtText: 'Comprobado a las {time}, hora de París. Los hostings con un incidente pasan arriba.',
    loadingText: 'Leyendo las páginas de estado…',
    errorText: 'Imposible leer los estados por ahora. Vuelve a intentarlo en un minuto.',
    lastIncidentText: '{title} · {date}',
    noIncidentText: 'Ningún evento reciente',
    noStatusPageLabel: 'Sin página de estado',
    noStatusPageText: 'Anuncios en X y soporte',
    cardLinkLabel: 'Ver el detalle',
  },
  hub: HUB,
  providers: PROVIDERS,
}
