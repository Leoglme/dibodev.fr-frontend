import type { DibodevAiReadabilityCheckPageContent } from '~/core/types/DibodevAiReadabilityCheckPage'
import {
  AI_ANTHROPIC_SOURCE,
  AI_CLOUDFLARE_SOURCE,
  AI_GOOGLE_SOURCE,
  AI_LLMS_TXT_SOURCE,
  AI_MICROSOFT_COPILOT_SOURCE,
  AI_OPENAI_SOURCE,
  AI_PERPLEXITY_SOURCE,
} from '~/core/constants/aiReadabilityCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const AI_READABILITY_CHECK_PAGE_ES: DibodevAiReadabilityCheckPageContent = {
  meta: {
    title: '¿Mi web es visible en ChatGPT? Test gratuito',
    description:
      'Pega el enlace de tu web: el test lee robots.txt y tu página de inicio como un robot de IA, sin JavaScript, y te dice qué bloquea a ChatGPT.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Legibilidad de una web para los robots de las inteligencias artificiales (ChatGPT, Claude, Perplexity, Gemini): robots.txt, cortafuegos, contenido sin JavaScript',
  },
  applicationName: 'Test de legibilidad de una web para ChatGPT y las demás IA',
  breadcrumbLabel: 'Web legible por ChatGPT: el test',
  shareImage: {
    titleLines: ['¿Puede ChatGPT', 'leer mi web?'],
    highlight: 'leer mi web',
    subtitle: 'robots.txt, cortafuegos y texto sin JavaScript, leídos como un robot de IA',
    badge: 'Test gratuito, sin registro',
    alt: '¿Puede ChatGPT leer mi web? Test gratuito de Dibodev',
  },
  hero: {
    titleBefore: '¿Pueden ',
    titleHighlight: 'ChatGPT y las demás IA',
    titleAfter: ' leer mi web?',
    reassurances: [
      'Gratis, sin registro',
      'Nada que instalar',
      'Solo se guardan el enlace y el resultado',
      'Robots revisados el 16 de noviembre de 2026',
    ],
    description:
      'Cada vez más gente pregunta a ChatGPT, Perplexity, Copilot o al modo IA de Google antes de elegir un proveedor. Una IA solo puede citar tu web si sus robots tienen permiso para leerla y si encuentran texto en ella. Este test hace lo que hace un robot: lee tu archivo robots.txt, abre tu página de inicio una vez de forma normal y otra con la firma del robot de búsqueda de ChatGPT, y mira qué queda sin JavaScript. Para cada punto: lo que ha visto, lo que significa, qué hacer.',
    authorIntro: 'Herramienta creada por',
    authorBio: `desarrollador freelance cerca de Rennes (Francia). Creo y rehago webs para pequeñas empresas, a distancia, y respondo en 24${NBSP}h.`,
  },
  checker: {
    siteLabel: 'El enlace de tu web',
    sitePlaceholder: 'miempresa.es',
    siteHint:
      'Basta con un nombre de dominio. El test hace cuatro lecturas: robots.txt, la página de inicio dos veces y /llms.txt. Solo se guardan el enlace de la web y su resultado, para estadísticas.',
    submit: 'Probar mi web',
    checking: 'Leyendo…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Pega el enlace de tu web para empezar',
    idleText:
      'El resultado te dice qué robots de IA pueden leer tu página de inicio, qué recibe de verdad el robot de búsqueda de ChatGPT, si queda texto sin JavaScript y qué ayuda a una IA a entenderte.',
    loadingTitle: 'Leyendo la web…',
    loadingText:
      'Leo robots.txt y luego la página de inicio como un visitante y como un robot de IA. Unos quince segundos como mucho.',
    errorTitles: {
      invalid: 'Enlace que corregir',
      unreachable: 'Web inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid: 'Escribe un nombre de dominio público, como miempresa.es, sin espacios ni direcciones internas.',
      unreachable:
        'No he podido leer la página de inicio de {host}: enlace erróneo, web fuera de línea o servidor que rechaza a los robots. Prueba con www delante, o sin él.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Vuelve a intentarlo en unos minutos.',
      failed: 'Ha habido un error por mi parte. Vuelve a intentarlo en un momento, o escríbeme el enlace de la web.',
    },
    verdictTitles: {
      readable: '{host}: legible para las IA',
      partlyBlocked: '{host}: en parte bloqueada para las IA',
      blocked: '{host}: bloqueada para las IA',
      emptyWithoutJavascript: '{host}: legible, pero vacía para una IA',
      unknown: '{host}: página ilegible desde fuera',
    },
    verdictTexts: {
      readable:
        'Los robots de IA de la lista pueden leer tu página de inicio, el robot de búsqueda de ChatGPT recibe la misma página que un visitante y el texto está ahí sin JavaScript. Es una condición para ser citado, no una garantía.',
      partlyBlocked:
        'Al menos un punto impide a algunos robots leer tu web, o la hace menos legible: un robot bloqueado, un rechazo del cortafuegos, una prohibición en la página. El detalle está abajo.',
      blocked:
        'Los robots de búsqueda de IA no tienen permiso para leer tu página de inicio, o la página pide no ser indexada. Mientras sea así, las respuestas con enlaces no pueden citar tu web.',
      emptyWithoutJavascript:
        'Los robots pueden entrar, pero la página casi no tiene texto sin JavaScript: un robot que no lo ejecuta solo ve una página vacía.',
      unknown:
        'La página de inicio devuelve un error o una página de verificación al test. Las líneas de abajo dicen lo que se ha podido leer; compruébalo en tu navegador, o envíame el enlace.',
    },
    robotsTitle: 'robots.txt, robot por robot',
    robotsFile: {
      label: 'Archivo robots.txt',
      statusLabels: {
        found: 'Encontrado',
        missing: 'Ausente',
        unreadable: 'Error del servidor',
        notChecked: 'No leído',
      },
      seenTexts: {
        found: 'Se ha leído el archivo robots.txt de la web.',
        missing: 'No hay archivo robots.txt (o hay una página web en su lugar).',
        unreadable: 'El servidor responde con un error cuando se pide robots.txt.',
        notChecked: 'robots.txt no ha respondido a tiempo.',
      },
      meaningTexts: {
        found:
          'Es un pequeño archivo de texto en la raíz de la web que dice a los robots qué páginas pueden leer. Las líneas siguientes dicen lo que permite a cada robot en tu página de inicio.',
        missing: 'Sin archivo, no hay nada prohibido: todos los robots pueden leer la web.',
        unreadable:
          'Un robot que no puede leer este archivo puede considerar toda la web como prohibida, mientras tanto.',
        notChecked: 'No puedo decir nada de los robots permitidos.',
      },
      adviceTexts: {
        missing:
          'nada obligatorio. Un archivo que declare tu sitemap ayuda igualmente a los robots a encontrar tus páginas.',
        unreadable: 'preguntar a tu alojamiento o a tu proveedor por qué /robots.txt devuelve un error.',
        notChecked: 'abrir tu web seguida de /robots.txt en el navegador para comprobar que se muestra.',
      },
    },
    crawlersAllowedLabel: 'Robots permitidos',
    crawlersAllowedBadge: '{count} de {total}',
    crawlersAllowedSeenText: '{robots}.',
    crawlersAllowedMeaningText: 'Pueden leer tu página de inicio.',
    crawlerLabel: '{robot} · {operator}',
    crawlerRoleLabels: {
      search: 'Robot de búsqueda',
      training: 'Robot de entrenamiento',
      user: 'Visita pedida por un usuario',
    },
    crawlerBlockedLabel: 'Bloqueado',
    crawlerBlockedSpecificSeenText: '{role}: bloqueado por una regla que lo nombra en robots.txt.',
    crawlerBlockedWildcardSeenText: '{role}: bloqueado por una regla «User-agent: *» dirigida a todos los robots.',
    crawlerBlockedMeaningTexts: {
      search:
        'Un robot de búsqueda bloqueado no puede leer tu web: las respuestas de su IA no pueden citarla con un enlace.',
      training:
        'Rechazas que tus páginas sirvan para entrenar modelos. Es una elección, y no saca tu web de las respuestas con enlaces.',
      user: 'Cuando alguien pide a la IA que abra tu página, puede que no lo consiga.',
    },
    crawlerBlockedAdviceTexts: {
      search: 'quitar la regla «Disallow» que lo afecta, o añadir un grupo con su nombre y «Allow: /».',
      training: 'nada, si es a propósito. Si no, quitar la regla que lo afecta.',
      user: 'quitar la regla que lo afecta si quieres que la IA pueda abrir tus páginas cuando se lo piden.',
    },
    crawlerMayIgnoreRobotsTxtText: 'Su editor indica que robots.txt puede no aplicarse a estas visitas.',
    botFetchTitle: 'Lo que el robot recibe de verdad',
    botFetch: {
      label: 'Lectura con la firma de un robot de IA',
      statusLabels: {
        same: 'Misma página',
        refused: 'Rechazado',
        challenge: 'Página de verificación',
        different: 'Contenido distinto',
        unreachable: 'Sin respuesta',
        notCompared: 'No comparado',
      },
      seenTexts: {
        same: 'Con la firma de OAI-SearchBot, el robot de búsqueda de ChatGPT, la web devuelve la misma página que en una visita normal.',
        refused:
          'Con la firma de OAI-SearchBot, la web responde con un rechazo (código {status}), mientras que al test le responde con normalidad.',
        challenge:
          'Con la firma de OAI-SearchBot, la web devuelve una página de verificación («Just a moment», desafío antirrobot) en lugar de la página de inicio.',
        different:
          'Con la firma de OAI-SearchBot, la página recibida tiene mucho menos texto que en una visita normal.',
        unreachable: 'La lectura con la firma de OAI-SearchBot no ha terminado a tiempo.',
        notCompared: 'La página de inicio no se abre con normalidad para el test: no hay nada que comparar.',
      },
      meaningTexts: {
        same: 'Nada, del lado del servidor o del cortafuegos, parece rechazar a los robots de IA.',
        refused:
          'Es una señal, no una prueba: algunos cortafuegos rechazan una visita que lleva la firma de un robot sin venir de sus direcciones, y dejan pasar al verdadero. Pero si el rechazo también afecta al verdadero robot, tu web está cerrada para él.',
        challenge:
          'Es una señal, no una prueba: la protección antirrobot puede dejar pasar al verdadero robot, que viene de sus propias direcciones. Si también lo detiene, solo lee una página de verificación.',
        different:
          'Puede que la web sirva otra versión a los robots, o una página reducida. Lo que lee el robot no es entonces lo que ven tus clientes.',
        unreachable: 'No puedo concluir nada: lentitud pasajera o bloqueo silencioso.',
        notCompared: 'Sin una lectura normal, no puedo comparar con la de un robot.',
      },
      adviceTexts: {
        refused:
          'revisar el ajuste de robots en tu cortafuegos, en tu alojamiento o en Cloudflare, y permitir allí los robots de búsqueda de IA.',
        challenge:
          'revisar el ajuste de robots en tu cortafuegos, en tu alojamiento o en Cloudflare, y permitir allí los robots de búsqueda de IA.',
        different: 'comparar las dos versiones con tu proveedor o tu alojamiento.',
        unreachable: 'volver a lanzar el test en unos minutos.',
      },
    },
    contentTitle: 'Contenido sin JavaScript',
    content: {
      label: 'Texto legible sin JavaScript',
      statusLabels: {
        enough: 'Legible',
        thin: 'Poco texto',
        emptyAppShell: 'Vacía sin JavaScript',
        notReadable: 'No legible',
      },
      seenTexts: {
        enough: 'Unas {words} palabras de texto en el HTML recibido, sin ejecutar JavaScript.',
        thin: 'Solo {words} palabras de texto en el HTML recibido, sin ejecutar JavaScript.',
        emptyAppShell:
          '{words} palabras de texto en el HTML recibido, y un contenedor de aplicación que espera el JavaScript.',
        notReadable: 'La página de inicio devuelve un error o una página de verificación al test.',
      },
      meaningTexts: {
        enough: 'Un robot que no ejecuta JavaScript tiene con qué entender tu página.',
        thin: 'Un robot entiende mal una página que dice poco. Quién eres, qué haces y dónde: hay que escribirlo con todas las letras.',
        emptyAppShell:
          'Tu web es legible, pero vacía para una IA: el texto solo aparece cuando el JavaScript se ejecuta en el navegador.',
        notReadable: 'No puedo medir el texto.',
      },
      adviceTexts: {
        thin: 'escribir en la página de inicio, como texto y no en una imagen, tu oficio, tu zona y tus servicios.',
        emptyAppShell:
          'hacer que el servidor genere el HTML (renderizado en el servidor o páginas generadas de antemano): Next.js, Nuxt y las demás herramientas de este tipo lo permiten.',
        notReadable: 'abrir la web en una ventana privada para ver lo que recibe un visitante desconocido.',
      },
    },
    contentFrameworkText: 'Contenedor reconocido: {framework}.',
    directivesTitle: 'Prohibiciones en la página',
    directives: {
      label: 'Etiqueta meta robots y cabecera X-Robots-Tag',
      statusLabels: {
        none: 'Ninguna',
        restrictive: 'A revisar',
        noindex: 'noindex',
      },
      seenTexts: {
        none: 'Ni etiqueta meta robots que prohíba, ni cabecera X-Robots-Tag.',
        restrictive: 'Encontrado: {directives} ({sources}).',
        noindex: 'Encontrado: {directives} ({sources}).',
      },
      meaningTexts: {
        none: 'La página no pide a los robots que la ignoren.',
        restrictive:
          '«nosnippet» pide no citar ningún extracto de la página. «noai» y «noimageai» expresan un rechazo al uso por la IA: cada robot decide si los sigue.',
        noindex:
          '«noindex» pide a los buscadores que no guarden la página en sus resultados. Una IA que pasa por un buscador no la encontrará por esa vía.',
      },
      adviceTexts: {
        restrictive: 'quitarlas si quieres ser citado, en el tema, el plugin SEO o la configuración del servidor.',
        noindex:
          'quitar «noindex» de la página de inicio: casilla «Disuadir a los motores de búsqueda de indexar este sitio» de WordPress, plugin SEO o cabecera del servidor.',
      },
    },
    directiveSourceLabels: {
      meta: 'etiqueta meta',
      header: 'cabecera X-Robots-Tag',
    },
    understandingTitle: 'Lo que ayuda a una IA a entenderte',
    titleAndDescription: {
      label: 'Título y descripción',
      statusLabels: {
        complete: 'Presentes',
        titleOnly: 'Falta la descripción',
        descriptionOnly: 'Falta el título',
        missing: 'Ausentes',
        notReadable: 'No leídos',
      },
      seenTexts: {
        complete: 'La página tiene un título y una descripción.',
        titleOnly: 'Un título, pero sin descripción (etiqueta meta description).',
        descriptionOnly: 'Una descripción, pero sin título (etiqueta title).',
        missing: 'Ni título ni descripción en la página.',
        notReadable: 'No se ha podido leer la página de inicio.',
      },
      meaningTexts: {
        complete: 'Son las primeras líneas que lee un robot para saber de qué trata la página.',
        titleOnly: 'Son las primeras líneas que lee un robot para saber de qué trata la página.',
        descriptionOnly: 'Son las primeras líneas que lee un robot para saber de qué trata la página.',
        missing: 'Son las primeras líneas que lee un robot para saber de qué trata la página.',
        notReadable: 'No puedo comprobarlo.',
      },
      adviceTexts: {
        titleOnly: 'escribir una descripción corta y clara: tu oficio, tu ciudad, lo que te distingue.',
        descriptionOnly: 'dar a la página un título con tu oficio y tu ciudad.',
        missing: 'dar a la página un título y una descripción con tu oficio y tu ciudad.',
      },
    },
    structuredData: {
      label: 'Datos estructurados (JSON-LD)',
      statusLabels: {
        knownTypes: 'Encontrados',
        otherTypes: 'Encontrados',
        missing: 'Ausentes',
        notReadable: 'No leídos',
      },
      seenTexts: {
        knownTypes: 'Tipos encontrados: {types}.',
        otherTypes: 'Datos estructurados, de otros tipos que los que listo.',
        missing: 'Ningún bloque JSON-LD en la página de inicio.',
        notReadable: 'No se ha podido leer la página de inicio.',
      },
      meaningTexts: {
        knownTypes:
          'Este código invisible dice negro sobre blanco quién eres: empresa, dirección, horarios, preguntas frecuentes.',
        otherTypes: 'Este código invisible dice negro sobre blanco qué contiene la página.',
        missing: 'Sin él, el robot tiene que adivinar quién eres a partir del texto.',
        notReadable: 'No puedo comprobarlo.',
      },
      adviceTexts: {
        missing:
          'añadir un bloque Organization o LocalBusiness (nombre, dirección, teléfono, zona); los plugins SEO de WordPress saben hacerlo.',
      },
    },
    sitemap: {
      label: 'Mapa del sitio (sitemap)',
      statusLabels: {
        declared: 'Declarado',
        notDeclared: 'No declarado',
      },
      seenTexts: {
        declared: 'Hay un sitemap declarado en robots.txt o en la página.',
        notDeclared: 'Ningún sitemap declarado en robots.txt ni en la página.',
      },
      meaningTexts: {
        declared: 'Es la lista de tus páginas, que los robots siguen para encontrarlas todas.',
        notDeclared: 'Puede que exista, pero los robots tienen que adivinarlo.',
      },
      adviceTexts: {
        notDeclared: 'añadir a robots.txt una línea «Sitemap:» seguida del enlace completo de tu sitemap.',
      },
    },
    llmsTxt: {
      label: 'Archivo llms.txt (opcional)',
      statusLabels: {
        found: 'Presente',
        missing: 'Ausente',
      },
      seenTexts: {
        found: 'La web tiene un archivo /llms.txt.',
        missing: 'No hay archivo /llms.txt.',
      },
      meaningTexts: {
        found:
          'Una propuesta de 2024: un resumen de la web en Markdown para las IA. Su web oficial no dice qué IA lo leen.',
        missing:
          'Una propuesta de 2024: un resumen de la web en Markdown para las IA. Su web oficial no dice qué IA lo leen.',
      },
      adviceTexts: {
        missing: 'nada urgente. No sustituye ni a robots.txt ni a un texto claro en tus páginas.',
      },
    },
    listSeparator: ', ',
    meaningLabel: 'Lo que significa:',
    adviceLabel: 'Qué hacer:',
    disclaimer:
      'Leído desde fuera, solo en la página de inicio, sin ejecutar JavaScript. El test no ve ni tus otras páginas, ni los ajustes de tu cortafuegos, ni lo que ChatGPT responde de verdad. Ser legible es una condición, no una garantía de ser citado.',
    idleCtaIntro: `¿Prefieres que lo mire yo, gratis, en 24${NBSP}h?`,
    idleCtaLabel: 'Recibir mi opinión',
    ctaIntro:
      '¿Necesitas ayuda para abrir tu web a las IA, ajustar el cortafuegos o hacer el texto legible sin JavaScript?',
    ctaLabels: {
      readable: 'Hablar de mi web',
      partlyBlocked: 'Revisar estos puntos',
      blocked: 'Desbloquear mi web',
      emptyWithoutJavascript: 'Hacer legible mi web',
      unknown: 'Revisar mi web',
    },
  },
  summary: {
    eyebrow: 'En resumen',
    dateLabel: 'Actualizado el 16 de noviembre de 2026',
    text: 'Una IA como ChatGPT solo puede citar tu web si sus robots tienen permiso para leerla y encuentran texto en ella. Tres cosas pueden impedirlo: una línea del archivo robots.txt, un cortafuegos que rechaza a los robots, o una web cuyo texto solo aparece con JavaScript. Ser legible es una condición, no una garantía de ser citado.',
  },
  steps: {
    eyebrow: 'El camino de un robot',
    title: 'Cómo lee tu web una IA, en cuatro pasos',
    intro: 'Antes de citar una página, el robot de una IA tiene que poder abrirla y leerla. Cada paso puede bloquear.',
    steps: [
      {
        label: 'Preguntar',
        title: 'Lee robots.txt',
        description:
          'Lo primero, el robot abre el archivo robots.txt de tu web: una lista de instrucciones que dice qué robots pueden leer qué páginas. Si ahí lo tiene prohibido, se detiene.',
      },
      {
        label: 'Entrar',
        title: 'Pide la página',
        description:
          'Pide tu página con su firma, un nombre que dice «soy el robot de tal IA». El servidor, el alojamiento o el cortafuegos pueden responder, o rechazarlo.',
      },
      {
        label: 'Leer',
        title: 'Lee el HTML recibido',
        description:
          'Lee el texto tal como llega. No cuentes con que ejecute el JavaScript: un texto que solo aparece con JavaScript puede quedarle invisible.',
      },
      {
        label: 'Entender',
        title: 'Busca quién eres',
        description:
          'El título, la descripción y los datos estructurados le dicen negro sobre blanco tu oficio, tu ciudad y tus servicios.',
      },
    ],
  },
  crawlers: {
    anchorId: 'robots-ia',
    eyebrow: 'Los robots que conviene conocer',
    title: 'Los robots de las IA, y para qué sirven',
    intro:
      'Cada editor tiene varios robots. Bloquear un robot de entrenamiento no saca tu web de las respuestas; bloquear un robot de búsqueda, sí. Lista sacada de la documentación de cada editor, revisada el 16 de noviembre de 2026.',
    nameColumnLabel: 'Robot',
    detailColumnLabel: 'De quién es, para qué sirve',
    linkColumnLabel: 'Fuente oficial',
    roleLabels: {
      search: 'Búsqueda, respuestas con enlaces',
      training: 'Entrenamiento de modelos',
      user: 'Visita pedida por un usuario',
    },
    descriptions: {
      oaiSearchBot:
        'El robot de búsqueda de ChatGPT. Según OpenAI, una web que lo bloquea no aparece en las respuestas de búsqueda de ChatGPT, salvo como simple enlace de navegación.',
      chatGptUser:
        'Abre una página cuando un usuario de ChatGPT lo pide. Según OpenAI, robots.txt puede no aplicarse a estas visitas, y este robot no decide tu presencia en la búsqueda.',
      gptBot:
        'Recoge páginas que pueden servir para entrenar los modelos de OpenAI. Bloquearlo quiere decir: sin entrenamiento. Según OpenAI, este ajuste es independiente del de OAI-SearchBot.',
      claudeSearchBot:
        'Recorre la web para mejorar los resultados de búsqueda de Claude. Según Anthropic, bloquearlo impide indexar tu contenido para la búsqueda.',
      claudeUser:
        'Recupera una página cuando un usuario de Claude hace una pregunta. Según Anthropic, bloquearlo impide leer tu contenido para responder a esa pregunta.',
      claudeBot:
        'Recoge páginas que pueden servir para entrenar los modelos de Anthropic. Bloquearlo excluye tus futuras páginas del entrenamiento.',
      perplexityBot:
        'Hace aparecer las webs, con un enlace, en los resultados de Perplexity. Según Perplexity, no sirve para entrenar modelos.',
      perplexityUser:
        'Abre una página cuando un usuario de Perplexity hace una pregunta. Según Perplexity, en general ignora robots.txt, ya que la visita la pide una persona.',
      googlebot:
        'El robot de la búsqueda de Google. Lo que le prohíbes afecta a la búsqueda de Google, Discover, Imágenes y Noticias.',
      googleExtended:
        'No es un robot aparte: es un nombre que se usa en robots.txt para decir si tus páginas pueden entrenar los modelos Gemini. Según Google, no influye ni en la presencia en la búsqueda ni en la posición.',
    },
    linkLabel: 'Documentación de {operator}',
    calloutEmphasizedIntro: 'Conviene saberlo:',
    calloutText:
      'Según Microsoft, Copilot busca la información de la web en el buscador Bing. Para Copilot, que Bing lea bien tu web también cuenta.',
  },
  sources: {
    anchorId: 'sources',
    eyebrow: 'Lo que dicen los editores',
    title: 'Siete hechos, con sus fuentes',
    intro:
      'Leídos el 16 de noviembre de 2026 en las páginas oficiales de OpenAI, Anthropic, Perplexity, Google, Microsoft, Cloudflare y llmstxt.org. Cada uno enlaza a su fuente.',
    facts: [
      {
        contextLabel: 'OpenAI',
        title: 'Búsqueda y entrenamiento, dos ajustes',
        text: `Cada ajuste es independiente: una web puede permitir OAI-SearchBot para aparecer en la búsqueda de ChatGPT y prohibir GPTBot para que sus páginas no sirvan para entrenar. OpenAI indica que un cambio en robots.txt puede tardar unas 24${NBSP}horas.`,
        sourceName: AI_OPENAI_SOURCE.name,
        sourceUrl: AI_OPENAI_SOURCE.url,
      },
      {
        contextLabel: 'Anthropic',
        title: 'Tres robots, tres efectos',
        text: 'ClaudeBot recoge para el entrenamiento, Claude-SearchBot para la búsqueda, Claude-User cuando un usuario hace una pregunta. Anthropic dice respetar robots.txt y desaconseja bloquear sus robots por dirección IP.',
        sourceName: AI_ANTHROPIC_SOURCE.name,
        sourceUrl: AI_ANTHROPIC_SOURCE.url,
      },
      {
        contextLabel: 'Perplexity',
        title: 'Una visita pedida se salta robots.txt',
        text: 'PerplexityBot hace aparecer las webs en los resultados y no sirve para entrenar modelos. Perplexity-User, que abre una página a petición de un usuario, en general ignora robots.txt.',
        sourceName: AI_PERPLEXITY_SOURCE.name,
        sourceUrl: AI_PERPLEXITY_SOURCE.url,
      },
      {
        contextLabel: 'Google',
        title: 'Google-Extended no afecta a la búsqueda',
        text: 'Google-Extended sirve para decir si tus páginas pueden entrenar los modelos Gemini. Google precisa que no influye ni en la presencia de una web en la búsqueda de Google ni en su posición.',
        sourceName: AI_GOOGLE_SOURCE.name,
        sourceUrl: AI_GOOGLE_SOURCE.url,
      },
      {
        contextLabel: 'Microsoft, página del 29 de octubre de 2026',
        title: 'Copilot busca en Bing',
        text: 'Cuando la búsqueda web está activada, Copilot envía una consulta corta al servicio de búsqueda de Bing y se apoya en sus resultados para responder.',
        sourceName: AI_MICROSOFT_COPILOT_SOURCE.name,
        sourceUrl: AI_MICROSOFT_COPILOT_SOURCE.url,
      },
      {
        contextLabel: 'Cloudflare, 1 de julio de 2025',
        title: 'Robots de IA bloqueados por defecto',
        text: 'Desde el 1 de julio de 2025, Cloudflare bloquea por defecto los robots de IA que llegan sin permiso, y pregunta a cada dominio nuevo si quiere dejarlos entrar. Una web detrás de Cloudflare puede así cerrar la puerta a las IA sin que su propietario lo sepa.',
        sourceName: AI_CLOUDFLARE_SOURCE.name,
        sourceUrl: AI_CLOUDFLARE_SOURCE.url,
      },
      {
        contextLabel: 'llmstxt.org, propuesta del 3 de septiembre de 2024',
        title: 'llms.txt, una propuesta',
        text: 'Propuesto por Jeremy Howard, el archivo /llms.txt resume una web en Markdown, con enlaces, para las IA. La web oficial no dice qué IA lo leen ni promete ningún efecto: el archivo sigue siendo opcional.',
        sourceName: AI_LLMS_TXT_SOURCE.name,
        sourceUrl: AI_LLMS_TXT_SOURCE.url,
      },
    ],
  },
  reasons: {
    anchorId: 'raisons',
    eyebrow: 'Por qué una IA no te ve',
    title: 'Las 4 razones por las que una IA no ve una web',
    intro: 'Son los cuatro puntos que comprueba el test. Basta con uno para cerrar la puerta.',
    items: [
      {
        title: '1. Una línea en robots.txt',
        description:
          'Una línea «Disallow: /» bajo el nombre de un robot, o bajo «User-agent: *» para todos, y el robot ya no puede leer. A veces la ha añadido un tema, un plugin o un proveedor anterior.',
      },
      {
        title: '2. Un cortafuegos que rechaza a los robots',
        description:
          'Cloudflare, el alojamiento o un plugin de seguridad pueden responder con un rechazo o una página de verificación. El robot se va sin haber leído nada.',
      },
      {
        title: '3. Un texto que solo existe con JavaScript',
        description:
          'Algunas webs envían una página casi vacía que el navegador rellena después. Un robot que no ejecuta JavaScript solo ve la página vacía.',
      },
      {
        title: '4. Una prohibición en la página',
        description:
          'Una etiqueta «noindex» o «nosnippet», o la misma orden en la cabecera X-Robots-Tag, pide a los robots que ignoren la página o que no la citen.',
      },
    ],
  },
  remediation: {
    anchorId: 'que-faire',
    eyebrow: 'Qué hacer',
    title: 'Qué hacer, según lo que haya encontrado el test',
    intro: 'Un caso por línea del resultado.',
    pitfallLabel: 'La trampa',
    items: [
      {
        title: 'Un robot bloqueado en robots.txt',
        text: 'Abre tu web seguida de /robots.txt. Quita la línea «Disallow» que afecta al robot de búsqueda, o añade un grupo con su nombre y «Allow: /». En WordPress, el archivo puede generarlo el plugin SEO: modifícalo desde sus ajustes.',
        pitfall:
          'Bloquear «User-agent: *» para apartar a un robot molesto: la regla también cierra la puerta a los robots de búsqueda.',
      },
      {
        title: 'Un cortafuegos o Cloudflare que rechaza',
        text: 'En Cloudflare, mira los ajustes de los robots de IA y de los robots en general, y permite al menos los robots de búsqueda. Con un plugin de seguridad de WordPress, busca el bloqueo de robots o de «user agents».',
        pitfall:
          'Desbloquearlo todo de golpe: permite los robots de búsqueda y decide aparte para los de entrenamiento.',
      },
      {
        title: 'Una web vacía sin JavaScript',
        text: 'El texto tiene que llegar en el HTML. Con Next.js, Nuxt o una herramienta del mismo tipo, hay que activar el renderizado en el servidor o generar las páginas de antemano. Con un creador de webs, comprueba con el test que el texto aparece.',
        pitfall:
          'Creer que «Google la lee, así que las IA también»: un robot que no ejecuta JavaScript no ve lo que añade el navegador.',
      },
      {
        title: 'Un rechazo que viene del alojamiento',
        text: 'Algunos alojamientos filtran a los robots antes incluso de tu web. Envíales el resultado del test y pregunta si filtran a los robots de búsqueda de IA, y cómo permitirlos.',
        pitfall:
          'Concluir demasiado rápido: un rechazo del test es una señal, no una prueba. El verdadero robot viene de sus propias direcciones y puede pasar.',
      },
      {
        title: 'Una prohibición en la página',
        text: 'En WordPress, desmarca «Disuadir a los motores de búsqueda de indexar este sitio» en Ajustes, Lectura, y luego revisa los ajustes del plugin SEO para la página de inicio.',
        pitfall:
          'Dejar en línea los ajustes de una web en construcción: el «noindex» puesto durante las obras a veces se queda después.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Lo que veo en mi propia web',
    emphasizedIntro: 'En dibodev.fr:',
    text: 'la semana del 8 al 14 de noviembre de 2026, 27 visitas venían de una IA, 22 de ellas de ChatGPT. A finales de octubre de 2026, llegó una primera solicitud de presupuesto por un enlace citado en una respuesta de ChatGPT. ChatGPT no envía web de referencia: sus visitas se reconocen por el parámetro utm_source=chatgpt.com en el enlace de llegada.',
  },
  method: {
    anchorId: 'methode',
    eyebrow: 'Método y límites',
    title: 'Lo que hace el test, y lo que no ve',
    intro: 'El test lee tu web desde fuera, como un robot, sin instalar ni cambiar nada.',
    items: [
      {
        title: 'Cuatro lecturas, nada más',
        description:
          'robots.txt, la página de inicio con la firma del test, la misma página con la firma de OAI-SearchBot tal como la publica OpenAI, y /llms.txt.',
      },
      {
        title: 'Las reglas de robots.txt',
        description:
          'Para cada robot: su propio grupo si existe, si no el grupo «*». Gana la regla más larga que afecta a la página de inicio, «Allow» en caso de empate.',
      },
      {
        title: 'El texto sin JavaScript',
        description:
          'El test cuenta las palabras visibles del HTML recibido, sin scripts ni estilos. Menos de 50 palabras con un contenedor de aplicación (#app, #root, __next…): la página está vacía para una IA.',
      },
      {
        title: 'Una firma no es una dirección',
        description:
          'El test toma prestada la firma de un robot, no sus direcciones. Un rechazo es una señal que revisar en el cortafuegos, no una prueba de que el verdadero robot esté bloqueado.',
      },
      {
        title: 'Lo que no ve',
        description:
          'Las demás páginas de la web, los ajustes de tu cortafuegos y lo que ChatGPT responde de verdad. Ser legible no garantiza ser citado.',
      },
      {
        title: 'Lo que se guarda',
        description:
          'El enlace de la web probada, el resultado y algunos indicadores, doce meses, para estadísticas. Nunca tu dirección IP, nunca enviado a PostHog.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'ChatGPT y tu web: tus preguntas',
    questions: [
      {
        question: '¿Cómo aparecer en ChatGPT?',
        answer:
          'Nadie puede prometerlo. Hay condiciones: que el robot de búsqueda de ChatGPT, OAI-SearchBot, pueda leer tu web, que tu texto esté ahí sin JavaScript, y que tus páginas digan claramente quién eres, qué haces y dónde. Después, ser citado depende de la pregunta y de las demás webs. Según OpenAI, una web que bloquea OAI-SearchBot no aparece en las respuestas de búsqueda de ChatGPT.',
      },
      {
        question: '¿Cómo saber si ChatGPT puede leer mi web?',
        answer:
          'Pega el enlace de tu web en el test de arriba. Lee tu archivo robots.txt para OAI-SearchBot, ChatGPT-User y GPTBot, abre tu página de inicio con la firma de OAI-SearchBot y la compara con una visita normal, y luego mide el texto legible sin JavaScript.',
      },
      {
        question: '¿Hay que bloquear GPTBot?',
        answer:
          'Tú decides. GPTBot recoge páginas que pueden servir para entrenar los modelos de OpenAI. Bloquearlo quiere decir: sin entrenamiento con tus páginas. Según OpenAI, este ajuste es independiente del de OAI-SearchBot: puedes prohibir GPTBot y permitir OAI-SearchBot para seguir en la búsqueda de ChatGPT.',
      },
      {
        question: 'Si bloqueo GPTBot, ¿desaparezco de ChatGPT?',
        answer:
          'No, de la búsqueda no. Según OpenAI, es OAI-SearchBot el que decide tu presencia en las respuestas de búsqueda de ChatGPT. Bloquear GPTBot solo dice que tus páginas no deben servir para entrenar los modelos.',
      },
      {
        question: '¿Qué es el archivo robots.txt?',
        answer:
          'Un pequeño archivo de texto en la raíz de tu web (tuweb.es/robots.txt) que dice a los robots qué páginas pueden leer. Una línea «User-agent» nombra al robot, una línea «Disallow» le prohíbe una ruta, una línea «Allow» le permite una. Sin archivo, no hay nada prohibido.',
      },
      {
        question: '¿Qué es el archivo llms.txt?',
        answer:
          'Una propuesta publicada el 3 de septiembre de 2024 por Jeremy Howard: un archivo /llms.txt en Markdown que resume la web y enlaza a sus páginas útiles, para las IA. Su web oficial no dice qué IA lo leen ni promete ningún efecto. Es opcional, y no sustituye ni a robots.txt ni a un texto claro en tus páginas.',
      },
      {
        question: '¿Cómo saber si ChatGPT me envía visitas?',
        answer:
          'Mira tus estadísticas de visitas. ChatGPT no envía web de referencia: sus visitas se reconocen por el parámetro utm_source=chatgpt.com en el enlace de llegada. En dibodev.fr, la semana del 8 al 14 de noviembre de 2026, 27 visitas venían de una IA, 22 de ellas de ChatGPT.',
      },
      {
        question: '¿Cloudflare bloquea los robots de IA?',
        answer:
          'Puede hacerlo. Desde el 1 de julio de 2025, Cloudflare bloquea por defecto los robots de IA que llegan sin permiso, y pregunta a cada dominio nuevo si quiere dejarlos entrar. Si tu web pasa por Cloudflare, revisa los ajustes de los robots de IA en tu panel.',
      },
      {
        question: '¿Copilot usa Bing?',
        answer:
          'Sí, según Microsoft: cuando la búsqueda web está activada, Copilot envía una consulta al servicio de búsqueda de Bing y se apoya en sus resultados. Para Copilot, que Bing lea bien tu web también cuenta.',
      },
      {
        question: 'Mi web está hecha con React, Vue o Angular: ¿puede leerla una IA?',
        answer:
          'Depende de cómo se sirva. Si el servidor envía una página casi vacía que rellena el navegador, un robot que no ejecuta JavaScript no ve nada. Si las páginas se renderizan en el servidor o se generan de antemano, el texto está en el HTML. El test te lo dice en unos segundos.',
      },
      {
        question: '¿El test guarda el enlace de mi web?',
        answer:
          'Sí, solo para estadísticas: el enlace de la web probada, el resultado y algunos indicadores (robots bloqueados, texto legible, prohibiciones) se guardan doce meses. Nunca sirven para hacer prospección y nunca se publican web por web. Tu dirección IP no se guarda, y el enlace no se envía a PostHog, la herramienta de medición de este sitio.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro: 'Que tus clientes te encuentren, y lo que cambia una web hecha con una herramienta JavaScript.',
  },
  nextTools: {
    eyebrow: 'Otros tests',
    title: 'Comprobar el resto de tu web',
  },
  contactCta: {
    title: '¿Prefieres que me encargue yo?',
    description: `Envíame el enlace de tu web. Te respondo en 24${NBSP}h con lo que veo: los robots que desbloquear, el ajuste del cortafuegos, el texto que hacer legible sin JavaScript, y un precio cerrado si quieres que me ocupe.`,
    button: 'Enviar mi web',
    healthCheckLabel: 'Probar mi web: 8 comprobaciones',
  },
  mobileContactBar: {
    text: '¿Tu web está cerrada a las IA?',
    buttonLabel: 'Enviar el enlace de mi web',
  },
}
