import type { DibodevGoogleUpdateQuizWording } from '~/core/types/DibodevGoogleUpdateImpactQuiz'

export const GOOGLE_UPDATE_QUIZ_WORDING_ES: DibodevGoogleUpdateQuizWording = {
  quizName: 'Actualización de Google: ¿mi web está afectada?',
  questions: [
    {
      id: 'timing',
      title: '¿Cuándo empezaron a bajar tus visitas desde Google?',
      helpText: 'La actualización de Google empezó el {startDate}.',
      leadMessageLabel: 'Inicio de la bajada',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'sinceStart', label: 'El {startDate}, o en los días siguientes', unit: '', icon: null },
        { id: 'beforeStart', label: 'Antes del {startDate}', unit: '', icon: null },
        { id: 'fewDays', label: 'Hace solo dos o tres días', unit: '', icon: null },
        { id: 'unknown', label: 'No lo sé', unit: '', icon: null },
      ],
    },
    {
      id: 'changes',
      title: '¿Qué cambió en tu web durante el mes anterior?',
      helpText: 'Un rediseño o una caída hacen bajar las visitas igual que una actualización.',
      leadMessageLabel: 'Cambio reciente',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'nothing', label: 'Nada, que yo sepa', unit: '', icon: 'Check' },
        { id: 'redesign', label: 'Rediseño, nueva plantilla o nuevo hosting', unit: '', icon: 'Monitor' },
        { id: 'links', label: 'Enlaces de páginas cambiados, o páginas borradas', unit: '', icon: 'Globe' },
        { id: 'outage', label: 'Una caída, una web lenta o inaccesible', unit: '', icon: 'AlertCircle' },
      ],
    },
    {
      id: 'brand',
      title: 'Si escribes el nombre de tu empresa en Google, ¿sale tu web?',
      helpText: 'Haz la prueba ahora, en una ventana de navegación privada.',
      leadMessageLabel: 'Búsqueda por el nombre',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'first', label: 'Sí, la primera', unit: '', icon: null },
        { id: 'lower', label: 'Sí, pero más abajo que antes', unit: '', icon: null },
        { id: 'missing', label: 'No, ya no aparece', unit: '', icon: null },
        { id: 'unchecked', label: 'No lo he comprobado', unit: '', icon: null },
      ],
    },
    {
      id: 'scope',
      title: 'La bajada afecta a…',
      helpText: '',
      leadMessageLabel: 'Alcance',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'allPages', label: 'Toda la web', unit: '', icon: null },
        { id: 'somePages', label: 'Algunas páginas', unit: '', icon: null },
        { id: 'unknown', label: 'No lo sé', unit: '', icon: null },
      ],
    },
    {
      id: 'impact',
      title: '¿Qué baja?',
      helpText: '',
      leadMessageLabel: 'Lo que baja',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'visits', label: 'Las visitas', unit: '', icon: null },
        {
          id: 'requests',
          label: 'Las solicitudes (llamadas, presupuestos, formularios), no las visitas',
          unit: '',
          icon: null,
        },
        { id: 'both', label: 'Las dos', unit: '', icon: null },
        { id: 'unsure', label: 'No lo sé', unit: '', icon: null },
      ],
    },
  ],
  verdicts: {
    updateLikely: {
      title: 'Actualización probable',
      explanation:
        'Según tus respuestas, la bajada empezó con la actualización del {startDate}, sin otro cambio conocido en tu web. Es probable, no seguro: una actualización de Google no es una sanción, reordena las páginas. El buen reflejo: no tocar nada, esperar al final del despliegue, luego una semana, y comparar.',
      headline: 'Actualización probable',
      headlineSuffix: 'no tocar nada durante el despliegue',
      nextStepValue: 'esperar, luego comparar',
      ctaLabel: 'Tener una primera opinión gratis',
      leadBudget: 'Actualización de Google probable',
    },
    otherCauseLikely: {
      title: 'Otra causa probable',
      explanation:
        'Según tus respuestas, la actualización no lo explica todo: un cambio en la web, una caída, una página bloqueada o la temporada son más probables. Compruébalo primero, porque se puede corregir, al contrario que una reclasificación de Google.',
      headline: 'Otra causa probable',
      headlineSuffix: 'a comprobar antes de culpar a Google',
      nextStepValue: 'comprobar la web',
      ctaLabel: 'Buscar la causa conmigo',
      leadBudget: 'Otra causa probable que la actualización',
    },
    tooEarlyToTell: {
      title: 'Demasiado pronto para saberlo',
      explanation:
        'Una bajada de pocos días, o cuyo inicio no conoces, puede ser un simple bache. Durante un despliegue, las posiciones cambian de un día para otro. Apunta las fechas, no toques nada y repite el test dentro de una semana.',
      headline: 'Demasiado pronto',
      headlineSuffix: 'las cifras todavía se mueven',
      nextStepValue: 'apuntar las fechas, esperar',
      ctaLabel: 'Tener una primera opinión gratis',
      leadBudget: 'Demasiado pronto para saberlo',
    },
  },
  cardEyebrow: 'La actualización de Google',
  startLabel: 'Inicio',
  rolloutLabel: 'Despliegue',
  rolloutOngoingValue: 'en curso a {readAt}',
  rolloutFinishedTemplate: 'terminado el {endDate}',
  reliableFromLabel: 'Comparación fiable',
  reliableFromOngoingValue: 'una semana después del final',
  reliableFromTemplate: 'a partir del {waitUntil}',
  nextStepLabel: 'Qué hacer',
  cardFootnote: 'Fechas leídas en el panel oficial de estado de la Búsqueda de Google el {readAt}.',
  cardFootnoteLinkLabel: 'Ver el calendario',
  cardFootnoteLinkHref: '#calendrier',
  adviceTitle: 'Lo que yo haría en tu lugar',
  advice: {
    dontTouch:
      'No reescribas tus páginas durante el despliegue: Google desaconseja los arreglos rápidos, y ya no sabrías qué ha influido.',
    waitWeekAfterEnd:
      'Vigila el panel de Google: cuando el despliegue se anuncie terminado, espera una semana más antes de juzgar.',
    compareWithExport:
      'Si tienes acceso a Search Console, deja su exportación en la pestaña «Tengo Search Console»: el veredicto irá con cifras.',
    checkTechnical:
      'Pasa tu web por la herramienta gratuita «Probar mi web» (menú Herramientas): HTTPS, versión de PHP, WordPress, pantalla del móvil. Una caída o un hackeo hacen bajar las visitas igual que una actualización.',
    checkRecentChanges:
      'Un rediseño o un cambio de hosting puede romper enlaces de páginas sin redirección, o bloquear a Google por error (etiqueta noindex, archivo robots.txt). Mira el informe «Páginas» de Search Console, o haz que lo revisen.',
    checkContactForm:
      'Si las visitas aguantan pero las solicitudes bajan, Google no tiene nada que ver: mándate un mensaje por tu formulario y comprueba que llega, carpeta de spam incluida.',
    brandMissing:
      'Una web que ya no aparece con su propio nombre suele tener un problema técnico (página bloqueada, web caída) o una acción manual. Mira los informes «Acciones manuales» y «Problemas de seguridad» de Search Console.',
    season: 'Compara con el mismo periodo del año pasado: una bajada de temporada no tiene nada que ver con Google.',
    somePagesOnly:
      'Si solo han bajado algunas páginas, apunta cuáles: es en ellas donde habrá que trabajar, una vez terminado el despliegue, no en toda la web.',
    noteDates:
      'Apunta hoy el día en que empezó la bajada y lo que cambió en la web: dentro de un mes, esas fechas marcarán la diferencia.',
  },
  summaryTemplate:
    'Bajada: {timing}; cambio reciente: {change}; nombre de la empresa: {brand}; alcance: {scope}; lo que baja: {impact}.',
  timingWords: {
    sinceStart: 'desde el {startDate}',
    beforeStart: 'antes del {startDate}',
    fewDays: 'desde hace dos o tres días',
    unknown: 'fecha desconocida',
  },
  changeWords: {
    nothing: 'ninguno',
    redesign: 'rediseño o hosting',
    links: 'enlaces de páginas',
    outage: 'caída',
  },
  brandWords: {
    first: 'encontrada la primera',
    lower: 'encontrada, más abajo',
    missing: 'no encontrada',
    unchecked: 'sin comprobar',
  },
  scopeWords: {
    allPages: 'toda la web',
    somePages: 'algunas páginas',
    unknown: 'desconocido',
  },
  impactWords: {
    visits: 'las visitas',
    requests: 'las solicitudes',
    both: 'visitas y solicitudes',
    unsure: 'desconocido',
  },
  disclaimer: 'Tendencia según tus respuestas, sin tus cifras. Este test no sustituye una revisión de la web.',
  leadFormTitle: 'Cuéntame lo que ves',
  leadFormIntro:
    'El enlace de tu web, desde cuándo baja, qué ha cambiado: te respondo en 24 horas con una primera opinión gratis.',
}
