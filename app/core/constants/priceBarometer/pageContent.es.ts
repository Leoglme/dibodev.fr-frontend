import type { DibodevPriceBarometerPageContent } from '~/core/types/DibodevPriceBarometerPage'

// The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition.

export const PRICE_BAROMETER_PAGE_CONTENT_ES: DibodevPriceBarometerPageContent = {
  meta: {
    title: 'Precio de un software a medida en Francia, barómetro 2026 | Dibodev',
    description:
      'Precios publicados por 14 agencias, freelances y plataformas francesas: medianas por tamaño de proyecto, tarifas diarias y coste a cinco años.',
    datasetName: 'Barómetro 2026 de los precios del software a medida en Francia',
    datasetDescription:
      'Horquillas de precios publicadas por 14 agencias, freelances y plataformas francesas para un software a medida, recogidas el 11 de octubre de 2026: herramienta sencilla, aplicación de gestión, plataforma, tarifas diarias y mantenimiento.',
  },
  breadcrumbLabel: 'Precio de un software a medida',
  numberLocale: 'es-ES',
  rangeTemplate: '{min} a {max} €',
  hero: {
    titlePart1: 'Precio de un software a medida en Francia en 2026: lo que ',
    titleHighlight: '14 proveedores',
    titlePart2: ' publican de verdad',
    description:
      'En lugar de una horquilla más, aquí están las que las agencias, los freelances y las plataformas francesas publican en sus propias páginas, recogidas el mismo día, con las medianas por tamaño de proyecto y el coste a cinco años. La mía está en la tabla.',
    cta: 'Estimar mi proyecto',
    ctaSecondary: 'Ver las 14 fuentes',
    reassurances: [
      'Precios públicos, enlazados a su fuente',
      'Recogida del 11 de octubre de 2026',
      'Datos descargables (CSV, CC BY)',
    ],
    statLabels: {
      businessAppRange: 'aplicación de gestión, medianas',
      sources: 'fuentes recogidas',
      checkedAt: 'fecha de la recogida',
    },
  },
  tiers: {
    eyebrow: 'Las cifras clave',
    title: 'Tres tamaños de proyecto, tres horquillas',
    intro:
      'Para cada tamaño, la mediana de los precios suelo y la mediana de los precios techo publicados por las fuentes que lo cifran. Una mediana no la tiran hacia arriba las dos o tres agencias más caras.',
    tierColumnLabel: 'Tamaño de proyecto',
    coverageColumnLabel: 'Qué cubre',
    priceColumnLabel: 'Medianas publicadas',
    items: {
      simpleTool: {
        name: 'Herramienta sencilla o MVP',
        coverage:
          'Una necesidad precisa: una planificación, un seguimiento de expedientes, una automatización, un portal de clientes. Un solo tipo de usuario, pocas integraciones.',
      },
      businessApp: {
        name: 'Aplicación de gestión completa',
        coverage:
          'Varios roles, un panel de control, presupuestos o facturas, una o dos integraciones (contabilidad, pago, correo). La mayoría de las herramientas de pymes.',
      },
      platform: {
        name: 'Plataforma o SaaS',
        coverage:
          'Área de clientes, pagos, escalado, integraciones múltiples, a veces una aplicación móvil. Se entrega por lotes.',
      },
    },
    conditionTemplate: '{count} fuentes: del suelo más bajo, {lowestFloor} €, al techo más alto, {highestCeiling} €',
    calloutEmphasizedIntro: 'Por qué tanta diferencia:',
    calloutText:
      'una agencia parisina de veinte personas y un independiente no venden el mismo alcance ni la misma estructura. La Fabrique du Net, que mide presupuestos realmente comprometidos, encuentra una mediana de 50.000 € en la región de París frente a 15.000 € en el resto de Francia.',
    calloutFootnote: 'Medianas calculadas sobre las fuentes que cifran el tamaño de proyecto, Dibodev incluido.',
  },
  sources: {
    eyebrow: 'La tabla',
    title: 'Las 14 fuentes, cada una con su enlace',
    intro:
      'Cada ficha recoge lo que la propia fuente publica, sin redondeos, con la fecha de su página. No se pidió ningún presupuesto.',
    wording: {
      kindLabels: {
        agency: 'Agencia',
        freelance: 'Freelance',
        platform: 'Plataforma',
        media: 'Medio',
        directory: 'Directorio',
      },
      rangeLabels: {
        simpleTool: 'Herramienta sencilla',
        businessApp: 'Aplicación de gestión',
        platform: 'Plataforma',
        overall: 'Horquilla global',
      },
      rangeTemplate: '{label} {min} a {max} €',
      openRangeTemplate: '{label} desde {min} €',
      fixedPriceTemplate: '{label} {value} €',
      dayRateTemplate: 'tarifa diaria {min} a {max} €',
      singleDayRateTemplate: 'tarifa diaria {value} €',
      maintenanceTemplate: 'mantenimiento {min} a {max} % al año',
      publishedTemplate: 'Recogido el {checkedAt}, página fechada {publishedAt}.',
      notes: {
        'la-fabrique-du-net':
          'Medianas de 184 presupuestos reales (mediana general 30.000 €, aplicación de gestión 20.000 €).',
        velyria:
          'Suscripción: 890 € y luego 119 € al mes durante 24 meses para la herramienta, 2.990 € y luego 199 € al mes para el software completo, convertidos al total a 24 meses.',
        codeur: 'Tarifas horarias medias de 27 a 39 € convertidas a jornadas de 7 horas.',
        malt: 'Desarrolladores experimentados activos en Malt, de 317 € (0 a 2 años) a 672 € (15 años o más); 576 € de media.',
        dibodev: 'Soy yo: precios cerrados publicados en este sitio, mantenimiento de 100 a 300 € al mes.',
        sokeo: 'Tramos dados para aplicaciones, incluidas las móviles.',
        digitiz: 'Estudio de un medio con los precios de una agencia, casos reales de 3.100 a 36.000 € sin IVA.',
        appminds: 'Por módulo entregado, alojamiento de 30 a 150 € al mes aparte.',
        'nocode-factory': 'Herramientas no-code y low-code, mantenimiento de 500 a 5.000 € al mes según el tamaño.',
      },
    },
    csvEmphasizedIntro: 'Los datos también son tuyos:',
    csvText:
      'la recogida completa se puede descargar bajo licencia CC BY 4.0. Cita «Dibodev, barómetro 2026 de los precios del software a medida» con un enlace a esta página.',
    csvLinkLabel: 'Descargar la recogida (CSV)',
    csvFootnote: '¿Falta una fuente o ha cambiado de precio? Escríbeme, lo corrijo y fecho la corrección.',
  },
  fiveYears: {
    eyebrow: 'A cinco años',
    title: 'Suscripción sectorial, freelance o agencia: lo que cuesta a cinco años',
    intro:
      'Una suscripción siempre parece más barata el primer año. Este es el cálculo a cinco años para una aplicación de gestión, mantenimiento incluido.',
    criterionLabel: 'Criterio',
    columns: ['Suscripción a un software del mercado', 'A medida por Dibodev', 'A medida por una agencia (medianas)'],
    rows: [
      {
        label: 'Precio de partida',
        cells: [
          { state: 'yes', text: '9 a 249 € al mes (precios 2026 de los programas de los cuatro tests sectoriales)' },
          { state: 'partial', text: '5.000 a 15.000 € a precio cerrado' },
          { state: 'partial', text: '{agencyRange} (medianas de las fuentes que cifran este tramo)' },
        ],
      },
      {
        label: 'Coste a cinco años',
        cells: [
          { state: 'yes', text: '{subscriptionFiveYears}' },
          { state: 'partial', text: '{dibodevFiveYears}, mantenimiento de 100 a 300 € al mes incluido' },
          { state: 'no', text: '{agencyFiveYears}, con un mantenimiento del 15 al 25 % al año' },
        ],
      },
      {
        label: 'Tus reglas de gestión',
        cells: [
          { state: 'partial', text: 'Las previstas por el editor' },
          { state: 'yes', text: 'Diseñadas alrededor de tu organización' },
          { state: 'yes', text: 'Diseñadas alrededor de tu organización' },
        ],
      },
      {
        label: 'Tus datos y el código',
        cells: [
          { state: 'partial', text: 'En el editor, exportación según el programa' },
          { state: 'yes', text: 'Tuyos, código incluido' },
          { state: 'yes', text: 'Tuyos en la mayoría de los contratos, a comprobar' },
        ],
      },
      {
        label: 'Puesta en marcha',
        cells: [
          { state: 'yes', text: 'Unos días' },
          { state: 'partial', text: '5 a 20 semanas, por etapas' },
          { state: 'partial', text: '3 a 12 meses según La Fabrique du Net' },
        ],
      },
      {
        label: 'Cuándo tiene sentido',
        cells: [
          { state: 'yes', text: 'Una necesidad estándar, un equipo pequeño' },
          { state: 'yes', text: 'Un oficio preciso, reglas propias, de 1 a 50 usuarios' },
          { state: 'partial', text: 'Varios equipos, un sistema de información que conectar' },
        ],
      },
    ],
    rowsShownOnSmallScreens: 2,
  },
  factors: {
    eyebrow: 'Lo que hace variar el precio',
    title: 'Seis factores que explican la diferencia entre dos presupuestos',
    intro: 'Las fuentes coinciden en estos factores. Lo que cambia es su peso en cada presupuesto.',
    items: [
      {
        title: 'El alcance funcional',
        description:
          'Una herramienta que gestiona una sola cosa cuesta mucho menos que una plataforma que conecta presupuestos, facturación, stock y clientes. Cada «y también» añade días.',
      },
      {
        title: 'Los usuarios y los roles',
        description:
          'Una herramienta para tres personas es sencilla. En cuanto hay roles, permisos y mucha gente a la vez, la arquitectura pesa: Nocode Factory cuenta un 10 a 50 % más a partir de cien usuarios.',
      },
      {
        title: 'Las integraciones',
        description:
          'Contabilidad, pago, API externa: cada conexión es una obra en sí, sobre todo cuando el otro sistema es caprichoso. Una integración sencilla se cifra en 2.000 a 5.000 € en las agencias que la detallan.',
      },
      {
        title: 'El nivel de acabado y las pruebas',
        description:
          'La Fabrique du Net mide la diferencia: 25.000 € de mediana para desarrollo puro, 50.000 € cuando las pruebas están previstas de forma explícita.',
      },
      {
        title: 'Quién te responde',
        description:
          'Un independiente no tiene comercial ni jefe de proyecto que financiar: las tarifas diarias publicadas van de 400 € como freelance a 800 o 1.000 € en agencia.',
      },
      {
        title: 'La región',
        description:
          '50.000 € de mediana en la región de París frente a 15.000 € en el resto, según La Fabrique du Net. El desarrollo se hace a distancia: nada obliga a pagar la prima parisina.',
      },
    ],
  },
  method: {
    eyebrow: 'Método',
    title: 'Cómo está hecho este barómetro',
    intro:
      'No mide presupuestos, sino lo que cada proveedor se atreve a escribir públicamente. Es su límite y su interés.',
    steps: [
      {
        label: 'Recogida',
        title: 'Las páginas públicas, el mismo día',
        description:
          'Las horquillas vienen de las páginas de tarifas o de las guías de precios de los proveedores, todas leídas el 11 de octubre de 2026, con un enlace a cada una. Ningún presupuesto pedido, ningún precio negociado.',
      },
      {
        label: 'Clasificación',
        title: 'Tres tamaños de proyecto',
        description:
          'Cada horquilla se clasifica en un tamaño (herramienta sencilla, aplicación de gestión, plataforma) según la descripción de la fuente. Una fuente que solo da una cifra global se queda en horquilla global y no entra en las medianas.',
      },
      {
        label: 'Cálculo',
        title: 'Medianas, no medias',
        description:
          'Para cada tamaño, la mediana de los suelos y la mediana de los techos publicados. Las suscripciones se convierten al total durante el periodo de compromiso, las tarifas horarias a jornadas.',
      },
      {
        label: 'Actualización',
        title: 'Una edición al año',
        description:
          'Precios comprobados dos veces al año, edición rehecha cada año. Un proveedor que publica sus precios puede pedir entrar en la recogida.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Precio de un software a medida: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un software a medida en 2026?',
        answer:
          'Depende del tamaño del proyecto y de quién te responde. En las 14 fuentes recogidas, las medianas publicadas van de 5.000 a 12.500 € para una herramienta sencilla, de 13.500 a 50.000 € para una aplicación de gestión completa y de 50.000 a 150.000 € para una plataforma. La Fabrique du Net, que mide presupuestos realmente comprometidos, encuentra una mediana de 30.000 € para todos los proyectos y de 20.000 € para una aplicación de gestión.',
      },
      {
        question: '¿Por qué los precios van de 2.500 a 300.000 €?',
        answer:
          'Porque «software a medida» abarca tanto una planificación para tres personas como una plataforma para diez mil usuarios, y porque un independiente y una agencia de veinte personas no venden la misma estructura. Las horquillas más amplias vienen de las agencias que también atienden a grandes cuentas.',
      },
      {
        question: '¿Un freelance es más barato que una agencia?',
        answer:
          'A igual alcance, sí, en general. Las tarifas diarias publicadas van de 400 € como freelance a 500 a 700 € para una agencia según Lonestone, y hasta 800 a 1.000 € en Sokeo. Un freelance no tiene comercial ni jefe de proyecto que financiar. A cambio, comprueba que ya ha entregado proyectos comparables y que el código te será entregado.',
      },
      {
        question: '¿Cuánto cuesta el mantenimiento de un software a medida?',
        answer:
          'Las agencias de la recogida anuncian del 10 al 25 % del precio inicial al año, es decir, de 5.000 a 12.500 € al año para una herramienta de 50.000 €. Yo facturo el mío a precio cerrado, de 100 a 300 € al mes, alojamiento, copias de seguridad y pequeñas evoluciones incluidos.',
      },
      {
        question: '¿No es más barata una suscripción a un software del mercado?',
        answer:
          'A un año, casi siempre. A cinco años, una suscripción de 9 a 249 € al mes representa de 540 a 14.940 €, frente a 11.000 a 33.000 € para una aplicación de gestión a medida conmigo, mantenimiento incluido. La verdadera pregunta está en otra parte: si el software del mercado encaja con tu forma de trabajar, cógelo. Mis tests por sector te lo dicen en seis preguntas.',
      },
      {
        question: '¿Qué no está en este barómetro?',
        answer:
          'Los presupuestos, los descuentos y los precios negociados, que nadie publica. Los proveedores que no dan ninguna cifra pública (KC Web o Scale-me, por ejemplo) se han leído pero no entran en las medianas. Y los precios fuera de Francia.',
      },
      {
        question: '¿Cómo estimo mi propio proyecto?',
        answer:
          'Con el estimador en tres preguntas de la página de software de gestión, que da una horquilla para tu tamaño de proyecto. Luego, con una conversación gratuita de treinta minutos para convertir la horquilla en un presupuesto cerrado.',
      },
      {
        question: '¿Puedo reutilizar estas cifras?',
        answer:
          'Sí. La recogida se puede descargar en CSV bajo licencia CC BY 4.0: cita «Dibodev, barómetro 2026 de los precios del software a medida» con un enlace a esta página. Si detectas un error, escríbeme, lo corrijo y fecho la corrección.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    intro:
      'Los artículos que detallan el precio de una herramienta a medida y la elección entre software del mercado y a medida.',
  },
  contactCta: {
    title: '¿Quieres una cifra para tu proyecto, no una horquilla?',
    description:
      'Descríbeme tu actividad y lo que la herramienta debe hacer. Te respondo en 24 h con un orden de magnitud, y luego un presupuesto cerrado si quieres ir más lejos. Y si basta con un software del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
