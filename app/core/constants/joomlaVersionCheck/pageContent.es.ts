import type { DibodevJoomlaVersionCheckPageContent } from '~/core/types/DibodevJoomlaVersionCheckPage'
import { JOOMLA_VERSION_SOURCES } from '~/core/constants/joomlaVersionCheck/pageShared'

export const JOOMLA_VERSION_CHECK_PAGE_ES: DibodevJoomlaVersionCheckPageContent = {
  meta: {
    title: 'Versión de Joomla de mi web: ¿lista para Joomla 6? Test gratis',
    description:
      'Introduce la dirección de tu web Joomla: la herramienta lee su versión de Joomla, la de PHP, su plantilla y sus extensiones, y te da el camino a Joomla 6.',
    inLanguage: 'es',
    schemaAbout: 'Versión de Joomla de una web y paso a Joomla 6',
  },
  breadcrumbLabel: 'Versión de Joomla: comprobar mi web',
  shareImage: {
    titleLines: ['¿Mi web Joomla está', 'lista para Joomla 6?'],
    highlight: 'Joomla 6',
    subtitle: 'Versión de Joomla, PHP, plantilla y extensiones leídas desde fuera',
    badge: 'Comprobación gratuita',
    alt: '¿Mi web Joomla está lista para Joomla 6? Comprobación gratuita de Dibodev',
  },
  hero: {
    titleBefore: '¿Mi web Joomla está lista para ',
    titleHighlight: 'Joomla 6',
    titleAfter: '?',
    reassurances: ['Gratis, sin registro', 'Resultado en segundos', 'Versiones revisadas el 9 de noviembre de 2026'],
    description:
      'Joomla 3 no recibe correcciones desde 2023, Joomla 4 desde el 14 de octubre de 2025, y Joomla 5 termina el 12 de octubre de 2027. Joomla 6 exige PHP 8.3, y PHP 8.2 termina el 31 de diciembre de 2026. Introduce la dirección de tu web: la herramienta lee la versión de Joomla en los archivos públicos del núcleo, la versión de PHP cuando el servidor la muestra, la plantilla y las extensiones visibles en la página de inicio, y te dice dónde estás y en qué orden avanzar.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes, Francia. Actualizo webs Joomla y WordPress y software de gestión para pequeñas empresas, autónomos y asociaciones, a distancia, y respondo en 24 horas.',
  },
  checker: {
    siteLabel: 'Dirección de tu web Joomla',
    sitePlaceholder: 'miempresa.es',
    siteHint:
      'Basta con un nombre de dominio. Se leen la página de inicio y como mucho cinco pequeños archivos públicos, como lo haría un navegador: no se escanea nada. Solo se guardan la dirección de la web y su resultado, para estadísticas.',
    submit: 'Comprobar',
    checking: 'Comprobando…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Introduce la dirección de tu web para empezar',
    idleText:
      'El resultado dice si la web funciona con Joomla, qué versión usa, si su versión de PHP basta para Joomla 6, qué piden la plantilla y las extensiones, y por dónde empezar.',
    loadingTitle: 'Leyendo la web…',
    loadingText:
      'Leo la página de inicio, luego los archivos públicos que llevan la versión de Joomla, y la versión de PHP cuando el servidor la muestra. Unos segundos.',
    errorTitles: {
      invalid: 'Dirección por corregir',
      unreachable: 'Web inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid: 'Introduce un nombre de dominio público, como miempresa.es, sin espacios ni direcciones internas.',
      unreachable:
        'No he podido leer la página de inicio de {host}: dirección errónea, web caída, o un servidor que rechaza a los robots. Prueba con www delante, o sin él.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Vuelve a intentarlo en unos minutos.',
      failed: 'Algo ha fallado por mi parte. Vuelve a intentarlo en un momento, o escríbeme la dirección de la web.',
    },
    verdictTitles: {
      joomla6Latest: 'Joomla {version}: tu web está al día',
      joomla6Outdated: 'Joomla {version}: una actualización pendiente',
      joomla5: 'Joomla {version}: un paso antes de Joomla 6',
      joomla4: 'Joomla {version}: sin correcciones desde octubre de 2025',
      joomla3OrOlder: 'Joomla {version}: ya sin correcciones de seguridad',
      versionHidden: 'Joomla, versión oculta',
      notJoomla: 'Esta web no funciona con Joomla',
      unknown: 'Ninguna señal legible desde fuera',
    },
    verdictTexts: {
      joomla6Latest:
        '{host} funciona con Joomla {version}, la última versión publicada. Joomla 6 recibe correcciones de seguridad hasta el 16 de octubre de 2029: queda hacer cada actualización cuando salga, y guardar una copia de seguridad fuera del servidor.',
      joomla6Outdated:
        '{host} ya está en Joomla 6, pero en la {version}, cuando la última versión es la {latestVersion}. Las versiones intermedias también corrigen fallos: la actualización se hace desde la administración, tras una copia de seguridad.',
      joomla5:
        '{host} funciona con Joomla {version}. Joomla 5 recibe correcciones de seguridad hasta el 12 de octubre de 2027: no hay prisa, pero el paso a Joomla 6 se prepara. Desde la 5.4, es una actualización, no una migración; el tiempo que lleva depende sobre todo de la plantilla y de las extensiones.',
      joomla4:
        '{host} funciona con Joomla {version}. Joomla 4 no recibe ninguna corrección desde el 14 de octubre de 2025: un fallo descubierto hoy quedaría abierto. El camino pasa por la 4.4, luego Joomla 5.4, luego Joomla 6, una versión mayor cada vez.',
      joomla3OrOlder:
        '{host} funciona con Joomla {version}. Joomla 3 no recibe correcciones desde el 17 de agosto de 2023 (el 17 de febrero de 2025 con el soporte extendido de pago), y suele funcionar con una versión de PHP también sin correcciones. Pasar a Joomla 6 lleva tres pasos, y a veces reconstruir la web en Joomla 6 da menos trabajo.',
      versionHidden:
        '{host} funciona con Joomla, pero la web bloquea los archivos públicos que llevan el número de versión, lo que es una buena práctica. La versión se lee en dos clics en la administración de la web (ver abajo).',
      notJoomla: '{host} funciona con {platform}, no con Joomla. Nada que hacer por ese lado para Joomla 6.',
      unknown:
        'Nada en la página de inicio de {host} indica Joomla ni una plataforma conocida. Una web bien protegida puede ocultarlo todo: no demuestra que no haya Joomla.',
    },
    detailsTitle: 'Lo que he leído',
    signalTexts: {
      versionFromCoreFile: 'Versión leída en un archivo público del núcleo de Joomla: {version}.',
      joomla3Files:
        'La página carga archivos de la época de Joomla 3 (Bootstrap 2, MooTools): o la web sigue en Joomla 3, o su plantilla es de esa época.',
      joomla4PlusFiles:
        'La página carga archivos de Joomla 4 o posterior: desde fuera, imposible saber si es Joomla 4, 5 o 6.',
      behindLatestOfBranch:
        'La última versión de Joomla {major} es la {latestVersionOfBranch}: a tu web le faltan correcciones.',
      extendedSupportBuild:
        'La mención «elts» indica una versión del soporte extendido de pago de Joomla 3, que terminó el 17 de febrero de 2025.',
      phpTooOldForJoomla6:
        'PHP {phpVersion}: Joomla 6 exige PHP 8.3 como mínimo. El cambio se hace en tu hosting, en el momento adecuado del camino (ver «Qué hacer»).',
      phpReadyForJoomla6:
        'PHP {phpVersion}: suficiente para Joomla 6, que exige PHP 8.3 como mínimo (8.4 recomendado).',
      phpHidden:
        'El servidor no muestra su versión de PHP: se lee en la administración de Joomla (Sistema, Información del sistema) o en el área de cliente de tu hosting. Joomla 6 exige PHP 8.3 como mínimo.',
      cassiopeiaTemplate:
        'Plantilla Cassiopeia, incluida con Joomla: sigue las actualizaciones, nada que rehacer por ese lado.',
      cassiopeiaChildTemplate:
        'Plantilla {template}, una plantilla hija de Cassiopeia, la incluida con Joomla: Cassiopeia sigue las actualizaciones, solo hay que revisar tus retoques.',
      joomla3CoreTemplate:
        'Plantilla {template}, incluida con Joomla 3: ya no existe en Joomla 4, la web tendrá que cambiar de plantilla por el camino.',
      frameworkTemplate:
        'Plantilla {template}, construida sobre {framework}: su editor la actualiza, y ya hay webs que la usan con Joomla 6. Instala su última versión antes del paso, y luego compruébalo en una copia.',
      customTemplate:
        'Plantilla {template}, hecha a medida o comprada aparte: es la primera pieza que hay que probar en una copia de la web con Joomla 6, antes de cualquier actualización.',
      joomla3CustomTemplate:
        'Plantilla {template}, usada con Joomla 3: una plantilla hecha para Joomla 3 suele tener que adaptarse o sustituirse para Joomla 4 y siguientes.',
      extensionsSeen:
        'Extensiones visibles en la página de inicio: {extensions}. Cada una necesita una versión para Joomla 6, que hay que comprobar con su editor; las que ya no se usan se desinstalan antes.',
    },
    stepsTitle: 'Qué hacer, en orden',
    steps: {
      joomla6Latest: [
        'Haz cada actualización de Joomla y de las extensiones cuando salga, tras una copia de seguridad: el panel de la administración las anuncia.',
        'Guarda una copia de seguridad completa fuera del servidor, y comprueba de vez en cuando que se restaura.',
        'Vigila la versión de PHP: PHP 8.3 recibe correcciones hasta el 31 de diciembre de 2027, PHP 8.4 hasta el 31 de diciembre de 2028.',
      ],
      joomla6Outdated: [
        'Haz una copia de seguridad completa, archivos y base de datos, fuera del servidor.',
        'En la administración, abre Sistema, Actualizar, Joomla, e instala la {latestVersion}.',
        'Actualiza también las extensiones, y luego revisa los formularios y las páginas principales.',
      ],
      joomla5: [
        'Haz una copia de seguridad completa fuera del servidor, y luego una copia de prueba de la web, en otra dirección.',
        'En la copia, comprueba que Joomla está en la {latestVersionOfBranch}, la última Joomla 5, o instálala: el paso a Joomla 6 parte de una 5.4 al día.',
        'Pasa PHP a 8.3 en tu hosting: Joomla 6 lo exige, y Joomla 5.4 ya funciona con él.',
        'Lanza la comprobación previa a la actualización (Sistema, Actualizar, Joomla), activa el plugin «Behaviour - Backward Compatibility 6», y pasa la copia a Joomla 6.',
        'Pruébalo todo en la copia (formularios, páginas, envío de correos), y luego repite los mismos pasos en la web en línea, con una copia de seguridad recién hecha.',
      ],
      joomla4: [
        'Haz una copia de seguridad completa fuera del servidor, y luego una copia de prueba de la web, en otra dirección.',
        'En la copia, comprueba que Joomla está en la {latestVersionOfBranch}, la última Joomla 4, o instálala.',
        'Lanza la comprobación previa a la actualización (Sistema, Actualizar, Joomla, canal «Joomla Next»), sustituye las extensiones que no tienen versión para Joomla 5, y pasa a Joomla 5.4.',
        'Pasa PHP a 8.3 en tu hosting, y luego la copia a Joomla 6, con el plugin «Behaviour - Backward Compatibility 6» activado.',
        'Pruébalo todo en la copia, y luego repite los mismos pasos en la web en línea, con una copia de seguridad recién hecha.',
      ],
      joomla3OrOlder: [
        'Haz una copia de seguridad completa fuera del servidor, y luego una copia de prueba de la web, en otra dirección.',
        'En la copia, comprueba que Joomla está en la 3.10 (la 3.10.12 es la última Joomla 3), o instálala, y luego haz el inventario de la plantilla y las extensiones: Protostar y las plantillas hechas para Joomla 3 hay que sustituirlas o adaptarlas para Joomla 4.',
        'Elige entre actualizar (3.10, luego 4.4, luego 5.4, luego 6) y reconstruir la web en Joomla 6 conservando tus textos y tus direcciones: la propia documentación oficial dice que reconstruir a veces da menos trabajo.',
        'Cambia PHP a lo largo de los pasos, no antes: Joomla 3 no está pensado para PHP 8.3, que Joomla 6 exige.',
        'Pruébalo todo en la copia, y luego pasa la web en línea, con una copia de seguridad recién hecha.',
      ],
      versionHidden: [
        'Entra en la administración de la web (su dirección termina en /administrator) y abre Sistema, y luego Información del sistema: ahí están las versiones de Joomla, de PHP y de la base de datos.',
        'Joomla 6: la web ya está en la versión correcta. Joomla 5.4 al día y PHP 8.3: está lista para el paso a Joomla 6, primero en una copia. Joomla 4 o anterior: ya no recibe correcciones, y el paso se hace en varias etapas.',
        'Si no tienes los accesos, envíame la dirección: en 24 horas te digo en qué punto está la web y por dónde empezar.',
      ],
      notJoomla: [
        'Joomla 6 no afecta a {platform}. Si tienes otra web con Joomla, compruébala aquí.',
        'Para cualquier web, «Probar mi web» comprueba también la versión de PHP, HTTPS y los correos (enlace abajo).',
      ],
      unknown: [
        'Desde fuera, nada dice si esta web usa Joomla: pregunta a quien la hizo, o mira si la dirección de su administración termina en /administrator.',
        'Si es un Joomla, la versión está en la administración, Sistema, y luego Información del sistema.',
        'Si nadie responde, envíame la dirección: la miro en 24 horas.',
      ],
    },
    disclaimer:
      'Lectura orientativa desde fuera, a partir de la página de inicio y de algunos archivos públicos. Una extensión que no carga nada en la página de inicio, los retoques de una plantilla o una base de datos demasiado antigua no se ven desde aquí: solo una comprobación desde dentro, en una copia, hace fe.',
    guidesTitle: 'Las guías, para ir más lejos',
    guideLabels: {
      joomla6Upgrade: 'Pasar una web Joomla 3, 4 o 5 a Joomla 6: el orden, lo que se rompe, el precio',
      php82EndOfLife: 'PHP 8.2 termina el 31 de diciembre de 2026: qué hacer',
    },
    idleCtaIntro:
      '¿Tienes dudas? Envíame la dirección de tu web, y en 24 horas te digo qué versión usa, qué la bloquea y por dónde empezar. Gratis, sin compromiso.',
    idleCtaLabel: 'Enviar la dirección de mi web',
    ctaIntro:
      '¿Prefieres delegarlo? Hago la copia de seguridad, la copia de prueba y cada paso hasta Joomla 6 y PHP 8.3, sin cambiar el aspecto de la web, y te envío un informe por escrito. Diagnóstico gratuito, precio anunciado antes de cualquier intervención.',
    ctaLabels: {
      joomla6Latest: 'Revisar mi web desde dentro',
      joomla6Outdated: 'Actualizar mi web',
      joomla5: 'Pasar mi web a Joomla 6',
      joomla4: 'Pasar mi web a Joomla 6',
      joomla3OrOlder: 'Pedir precio para Joomla 6',
      versionHidden: 'Comprobar mi versión de Joomla',
      notJoomla: 'Revisar mi web',
      unknown: 'Revisar mi web',
    },
    serviceLinkLabel: 'Cómo es la actualización de Joomla, y sus precios',
    healthCheckLinkLabel: 'Comprobar también HTTPS, móvil, correos y aviso legal: probar mi web',
  },
  mobileContactBar: {
    text: '¿Tu Joomla está listo?',
    buttonLabel: 'Enviar la dirección de mi web',
  },
  facts: {
    anchorId: 'hechos',
    eyebrow: 'Las fechas que hay que conocer',
    title: 'Joomla y PHP en noviembre de 2026: las fechas, en seis hechos',
    intro:
      'Las fechas vienen del proyecto Joomla y de php.net, revisadas el 9 de noviembre de 2026. Una versión «sin correcciones» se sigue viendo con normalidad: simplemente ya no se repara cuando se descubre un fallo.',
    facts: [
      {
        contextLabel: '13 de octubre de 2026',
        title: 'Joomla 6.2.0, la versión al día',
        text: 'Joomla 6 salió el 14 de octubre de 2025. La 6.2.0, publicada el 13 de octubre de 2026, es su última versión: el objetivo de cualquier actualización.',
        sourceName: 'Joomla, anuncio de Joomla 6.2',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla62Release,
      },
      {
        contextLabel: 'Hasta el 16 de octubre de 2029',
        title: 'El calendario oficial de versiones con soporte',
        text: 'Joomla 6 recibe correcciones hasta el 17 de octubre de 2028 y correcciones de seguridad hasta el 16 de octubre de 2029. Joomla 5.4 recibe correcciones de seguridad hasta el 12 de octubre de 2027, y luego nada.',
        sourceName: 'Joomla, calendario de versiones',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomlaRoadmap,
      },
      {
        contextLabel: '14 de octubre de 2025',
        title: 'Joomla 4 ya no tiene soporte',
        text: 'La 4.4.14, del 30 de septiembre de 2025, es la última versión de Joomla 4; su soporte terminó el 14 de octubre de 2025. Un fallo descubierto desde entonces queda abierto en una web Joomla 4.',
        sourceName: 'Joomla, versiones 5.3.4 y 4.4.14',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla4EndOfSupport,
      },
      {
        contextLabel: '17 de agosto de 2023',
        title: 'Joomla 3, parado desde hace más de tres años',
        text: 'Joomla 3 recibió su última versión, la 3.10.12, en julio de 2023, y su soporte terminó el 17 de agosto de 2023. El proyecto vendió después dieciocho meses de correcciones de seguridad, hasta el 17 de febrero de 2025. Desde entonces, nada.',
        sourceName: 'Joomla Magazine, julio de 2023',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla3ExtendedSupport,
      },
      {
        contextLabel: 'PHP 8.3 como mínimo',
        title: 'Lo que Joomla 6 pide al servidor',
        text: 'Joomla 6 exige como mínimo PHP 8.3 (8.4 recomendado) y una base de datos MySQL 8.0.13 o MariaDB 10.4. Joomla 5 exige como mínimo PHP 8.1. En un hosting antiguo, la base de datos puede bloquear la actualización: consúltalo con tu hosting.',
        sourceName: 'Joomla, requisitos técnicos',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla6Requirements,
      },
      {
        contextLabel: '31 de diciembre de 2026',
        title: 'PHP 8.2 termina a final de año',
        text: 'PHP 8.2 ya no recibe correcciones después del 31 de diciembre de 2026, PHP 8.3 después del 31 de diciembre de 2027 y PHP 8.4 después del 31 de diciembre de 2028. PHP 8.1 y las versiones anteriores ya no reciben ninguna.',
        sourceName: 'php.net, versiones con soporte',
        sourceUrl: JOOMLA_VERSION_SOURCES.phpSupportedVersions,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago por ti:',
    calloutText:
      'hago una copia de seguridad de la web fuera del servidor, la copio en otra dirección, hago cada paso hasta Joomla 6 y PHP 8.3 en la copia y corrijo lo que se rompe sin tocar el aspecto. Luego repito lo mismo en la web en línea y te escribo lo que se ha hecho. A distancia, diagnóstico gratuito, precio anunciado antes de actuar.',
  },
  versions: {
    anchorId: 'versiones',
    eyebrow: 'El calendario',
    title: 'Las versiones de Joomla, y hasta cuándo tienen soporte',
    intro:
      'Cada versión mayor tiene soporte unos años, y luego termina. Así está cada una el 9 de noviembre de 2026, con su última versión publicada.',
    versionColumnLabel: 'Versión',
    supportColumnLabel: 'Soporte el 9 de noviembre de 2026',
    latestReleaseColumnLabel: 'Última versión',
    rows: [
      {
        name: 'Joomla 6',
        coverage:
          'Correcciones hasta el 17 de octubre de 2028, correcciones de seguridad hasta el 16 de octubre de 2029',
        price: '6.2.0',
        priceCondition: 'Publicada el 13 de octubre de 2026',
      },
      {
        name: 'Joomla 5',
        coverage: 'Correcciones de seguridad hasta el 12 de octubre de 2027',
        price: '5.4.10',
        priceCondition: 'Publicada el 13 de octubre de 2026',
      },
      {
        name: 'Joomla 4',
        coverage: 'Ninguna corrección desde el 14 de octubre de 2025',
        price: '4.4.14',
        priceCondition: 'Publicada el 30 de septiembre de 2025',
      },
      {
        name: 'Joomla 3',
        coverage:
          'Ninguna corrección desde el 17 de agosto de 2023 (el 17 de febrero de 2025 con el soporte extendido de pago)',
        price: '3.10.12',
        priceCondition: 'Publicada en julio de 2023',
      },
    ],
    calloutEmphasizedIntro: '¿Y PHP?',
    calloutText:
      'Joomla 6 exige PHP 8.3 como mínimo, y PHP 8.2 ya no recibe correcciones después del 31 de diciembre de 2026. Una web Joomla 5 con PHP 8.2 tiene, por tanto, dos actualizaciones por delante: hacerlas juntas evita repetir el trabajo.',
  },
  blockers: {
    anchorId: 'lo-que-bloquea',
    eyebrow: 'Antes de actualizar',
    title: 'Lo que da trabajo en una web Joomla',
    intro:
      'Actualizar el núcleo lleva unos minutos. El tiempo se va en otra parte: esto es lo que miro primero, en una copia de la web.',
    items: [
      {
        title: 'La plantilla',
        description:
          'Una plantilla hecha a medida hace años ya no tiene a nadie que la actualice: se adapta a mano, o se sustituye conservando el aspecto. Cassiopeia, la plantilla incluida con Joomla 4 y siguientes, sigue las actualizaciones.',
      },
      {
        title: 'Las extensiones abandonadas',
        description:
          'Un formulario, una galería o un módulo instalado hace diez años por un editor que ya no existe bloquea o rompe la actualización. Las que ya no se usan se desinstalan, las demás se sustituyen.',
      },
      {
        title: 'La versión de PHP',
        description:
          'Joomla 6 exige PHP 8.3. Una plantilla o una extensión escritas hace diez años producen avisos, y luego errores, con las versiones recientes de PHP: se corrigen una a una, sin que los visitantes noten la diferencia.',
      },
      {
        title: 'La base de datos',
        description:
          'Joomla 6 exige como mínimo MySQL 8.0.13 o MariaDB 10.4. En un hosting antiguo, es el hosting quien la actualiza, o hay que cambiar de plan.',
      },
      {
        title: 'Las copias de seguridad',
        description:
          'Copias programadas hace años, guardadas en el mismo servidor y nunca probadas, no protegen de nada. Antes de tocar la web: una copia completa, restaurada una vez, guardada en otro sitio.',
      },
      {
        title: 'Los formularios y los correos',
        description:
          'Son los que traen las solicitudes, y los que se olvida probar. Después de cada paso, envío un mensaje real por cada formulario y compruebo que llega.',
      },
    ],
  },
  method: {
    eyebrow: 'En orden',
    title: 'Pasar a Joomla 6 en cuatro pasos',
    intro:
      'El mismo orden sea cual sea el punto de partida, según las guías oficiales de Joomla: una versión mayor cada vez, nunca dos de golpe.',
    steps: [
      {
        label: 'Copia de seguridad',
        title: 'Una copia completa, fuera del servidor',
        description:
          'Archivos y base de datos, descargados en un ordenador o enviados a un almacenamiento externo, y restaurados una vez para comprobar que funcionan.',
      },
      {
        label: 'Copiar',
        title: 'Una copia de prueba, en otra dirección',
        description:
          'La misma web, en una dirección aparte, donde se puede romper todo sin que ningún visitante lo vea. Todos los pasos siguientes se hacen primero en ella.',
      },
      {
        label: 'Subir',
        title: 'Una versión mayor cada vez',
        description:
          'Primero la última versión de la rama (3.10, 4.4 o 5.4), luego la comprobación previa en la administración, luego la versión siguiente. PHP acompaña los pasos, en 8.3 antes de Joomla 6. De la 5.4 a la 6, las guías oficiales hablan de una actualización, no de una migración.',
      },
      {
        label: 'Pasar a producción',
        title: 'Probar, y luego repetir en la web en línea',
        description:
          'Formularios, páginas, direcciones, envío de correos: todo se comprueba en la copia. Solo después, los mismos pasos en la web en línea, con una copia de seguridad recién hecha, y un informe por escrito.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tus preguntas sobre la versión de Joomla',
    questions: [
      {
        question: '¿Cómo sé qué versión de Joomla tiene mi web?',
        answer:
          'En la administración de la web, cuya dirección termina en /administrator. En Joomla 3, la versión aparece al pie de la página; en Joomla 4, 5 y 6, abre Sistema, y luego Información del sistema, que también da las versiones de PHP y de la base de datos. Sin acceso, esta herramienta la lee en los archivos públicos de la web, cuando no están bloqueados.',
      },
      {
        question: '¿Por qué la herramienta dice «versión oculta»?',
        answer:
          'Porque la web bloquea los archivos públicos que llevan el número de versión, con una extensión de seguridad o una regla del servidor. Es una buena práctica: la versión se lee entonces en la administración, Sistema, y luego Información del sistema.',
      },
      {
        question: '¿Se puede pasar directamente de Joomla 3 a Joomla 6?',
        answer:
          'No. El camino oficial pasa por la 3.10, luego la 4.4, luego la 5.4, luego Joomla 6, con la comprobación previa cada vez. En una copia de prueba, los pasos pueden encadenarse el mismo día. Cuando la plantilla y las extensiones son demasiado antiguas, reconstruir la web en Joomla 6 conservando sus textos y sus direcciones a veces da menos trabajo.',
      },
      {
        question: '¿Joomla 5 sigue siendo seguro?',
        answer:
          'Sí, hasta el 12 de octubre de 2027, siempre que estés en la última 5.4 y en una versión de PHP que reciba correcciones. Como Joomla 6 exige PHP 8.3 y PHP 8.2 termina el 31 de diciembre de 2026, tiene sentido hacer las dos actualizaciones juntas.',
      },
      {
        question: 'Mi web Joomla 3 funciona, ¿por qué tocarla?',
        answer:
          'Porque no recibe ninguna corrección de seguridad desde el 17 de agosto de 2023, o desde el 17 de febrero de 2025 con el soporte extendido de pago, y suele funcionar con una versión de PHP también sin correcciones. Una web que se ve no es una web protegida: un fallo descubierto hoy nunca se corregirá.',
      },
      {
        question: '¿Mi plantilla sobrevivirá al paso a Joomla 6?',
        answer:
          'Cassiopeia, la plantilla incluida con Joomla, sigue las actualizaciones. Una plantilla comprada (Helix Ultimate, YOOtheme Pro…) pasa si su editor ha publicado una versión para Joomla 6: instálala antes. Una plantilla hecha a medida se prueba en una copia: puede necesitar retoques, a veces una revisión completa, sin cambiar el aspecto de la web.',
      },
      {
        question: '¿Puede encargarse mi hosting?',
        answer:
          'De PHP y de la base de datos, sí: el cambio se hace en su área de cliente. De Joomla, la plantilla y las extensiones, no: te toca a ti, a la agencia que hizo la web, o a un desarrollador que conozca Joomla.',
      },
      {
        question: '¿Cuánto cuesta el paso a Joomla 6?',
        answer:
          'Depende sobre todo de la plantilla y de las extensiones. Conmigo, una subida de versión sencilla cuesta 190 € (copia de seguridad, prueba en una copia, Joomla 6 y PHP 8.3, informe por escrito), y 390 € cuando además hay que adaptar una plantilla hecha a medida o sustituir extensiones. Para un Joomla 3, el precio se anuncia tras un diagnóstico gratuito.',
      },
      {
        question: '¿Qué hace exactamente esta herramienta, y qué no ve?',
        answer:
          'Lee la página de inicio una vez, como un navegador, y luego como mucho cinco pequeños archivos públicos: el archivo de versión del núcleo de Joomla, tres archivos de idioma cuando ese está bloqueado, y la página de acceso de la administración para la versión de PHP, cuando el servidor la muestra. Reconoce Joomla, su versión, la plantilla y las extensiones que carga la página de inicio. No se conecta a nada, no prueba ninguna contraseña y guarda el resultado diez minutos en caché. No ve las extensiones que no cargan nada en la página de inicio, ni la versión de la base de datos, ni los retoques de la plantilla: solo una comprobación desde dentro lo decide.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'La guía completa del paso a Joomla 6, el fin de PHP 8.2 el 31 de diciembre de 2026, y lo que hacen los hostings con las versiones antiguas de PHP.',
  },
  contactCta: {
    title: '¿Necesitas que alguien se encargue?',
    description:
      'Envíame la dirección de la web. En 24 horas te digo qué versión usa, qué la bloquea y cuánto cuesta el paso a Joomla 6. Diagnóstico gratuito, precio anunciado antes de cualquier intervención.',
    button: 'Revisar mi web',
  },
}
