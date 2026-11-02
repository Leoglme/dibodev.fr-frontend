import type { DibodevWebsitePriceBarometerPageContent } from '~/core/types/DibodevWebsitePriceBarometerPage'

/** The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition. */
export const WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_ES: DibodevWebsitePriceBarometerPageContent = {
  meta: {
    title: 'Precio de una página web en 2026: barómetro de 20 fuentes',
    description:
      'Precios publicados por 20 freelances, agencias, creadores de webs y guías franceses (1 de noviembre de 2026): medianas por tamaño de web y coste a 3 años.',
    datasetName: 'Barómetro 2026 de los precios de una página web en Francia',
    datasetDescription:
      'Precios públicos de creación de páginas web recogidos el 1 de noviembre de 2026 en 20 fuentes francesas (freelances, agencias, creadores de webs, guías de precios): web de una página, web corporativa, web completa o tienda, mantenimiento y alojamiento al mes, con o sin IVA.',
  },
  breadcrumbLabel: 'Precio de una página web',
  numberLocale: 'es-ES',
  rangeTemplate: '{min} a {max} €',
  monthlyRangeTemplate: '{min} a {max} € al mes',
  hero: {
    titlePart1: 'Precio de una página web en Francia en 2026: lo que ',
    titleHighlight: '20 fuentes',
    titlePart2: ' publican de verdad',
    description:
      'En lugar de una horquilla más, aquí están los precios que los freelances, las agencias, los creadores de webs y las guías de precios franceses publican en sus propias páginas, recogidos el mismo día, con las medianas por tamaño de web, el mantenimiento y el coste a tres años. Los míos están en la tabla.',
    cta: 'Pedir un presupuesto',
    ctaSecondary: 'Ver las 20 fuentes',
    reassurances: [
      'Precios públicos, enlazados a su fuente',
      'Recogida del 1 de noviembre de 2026',
      'Datos descargables (CSV, CC BY)',
    ],
    statLabels: {
      showcaseRange: 'web corporativa, medianas',
      sources: 'fuentes recogidas',
      checkedAt: 'fecha de la recogida',
    },
  },
  categories: {
    eyebrow: 'Las cifras clave',
    title: 'Tres tamaños de web, y después el mantenimiento',
    intro:
      'Para cada tamaño, la mediana de los precios suelo y la mediana de los precios techo publicados por las fuentes que lo cifran. Una mediana no la tiran hacia arriba las dos o tres agencias más caras, ni hacia abajo un precio de reclamo.',
    categoryColumnLabel: 'Tamaño de web',
    coverageColumnLabel: 'Qué cubre',
    priceColumnLabel: 'Medianas publicadas',
    items: {
      onePage: {
        name: 'Web de una página',
        coverage:
          'Una sola página que presenta la actividad, los datos de contacto y un formulario. Para una actividad que empieza o una presencia mínima.',
      },
      showcase: {
        name: 'Web corporativa de 3 a 6 páginas',
        coverage:
          'Inicio, servicios, sobre nosotros, contacto, a veces una página por servicio. La web de la mayoría de los artesanos, comercios y autónomos en Francia.',
      },
      fullShowcase: {
        name: 'Web completa o tienda',
        coverage:
          'Diez páginas o más, un blog, o una tienda online sencilla. Cada fuente precisa en su ficha cuál de las dos cifra.',
      },
      maintenance: {
        name: 'Mantenimiento y alojamiento',
        coverage:
          'Alojamiento, nombre de dominio, actualizaciones y pequeños cambios, al mes, en los freelances y agencias que lo publican. Las suscripciones de los creadores de webs están en sus fichas.',
      },
    },
    conditionTemplate: '{count} fuentes: del suelo más bajo, {lowestFloor} €, al techo más alto, {highestCeiling} €',
    maintenanceConditionTemplate: '{count} fuentes: de {lowestFloor} a {highestCeiling} € al mes',
    calloutEmphasizedIntro: 'Con IVA, sin IVA o precios netos:',
    calloutText:
      'cada ficha repite lo que dice la fuente. Los freelances franceses exentos de IVA publican precios netos (IVA no aplicable, artículo 293 B del código fiscal francés), las agencias precios sin IVA a los que se añade un 20 %, los creadores de webs unas veces lo uno y otras lo otro. Las medianas mezclan los tres, como los presupuestos que recibirás.',
    calloutFootnote: 'Medianas calculadas sobre las fuentes que cifran el tamaño de web, Dibodev incluido.',
  },
  sources: {
    eyebrow: 'La tabla',
    title: 'Las 20 fuentes, con el enlace a cada una',
    intro:
      'Cada ficha repite lo que la propia fuente publica, sin redondear, con la fecha de su página. No se pidió ningún presupuesto, ningún juicio sobre los proveedores.',
    wording: {
      kindLabels: {
        freelance: 'Freelance',
        agency: 'Agencia',
        builder: 'Creador de webs',
        guide: 'Guía de precios',
      },
      rangeLabels: {
        onePage: 'Web de una página',
        showcase: 'Web corporativa',
        fullShowcase: 'Web completa o tienda',
      },
      maintenanceLabel: 'Al mes',
      taxLabels: {
        excludingTax: 'precios sin IVA',
        includingTax: 'precios con IVA',
        net: 'precios netos, IVA no aplicable',
        unspecified: 'IVA no precisado',
      },
      rangeTemplate: '{label} {min} a {max} €',
      openRangeTemplate: '{label} desde {min} €',
      fixedPriceTemplate: '{label} {value} €',
      publishedTemplate: 'Recogido el {checkedAt}, página fechada {publishedAt}.',
      notes: {
        'la-fabrique-du-net':
          'Barómetro de 3226 presupuestos reales: mediana general 5000 €, web corporativa 3500 € de mediana; «web corporativa de pequeña empresa en Wix o WordPress 2500 a 4000 €», «web corporativa de pyme cuidada 5000 a 8000 €», tienda 10 000 a 15 000 €.',
        codeur:
          'Guía titulada 2025 (página modificada el 18 de marzo de 2025): web de una página 300 a 1500 €, corporativa sencilla 500 a 2000 €, tienda básica 1000 a 5000 €, mantenimiento 200 a 500 € al año pasados al mes.',
        kolonell:
          'Tabla «Francia (EUR)» de un editor instalado en Dakar: web de una página 400 a 950 €, corporativa de 5 a 8 páginas 950 a 2300 €, corporativa completa de 10 a 20 páginas 1850 a 4600 €, tienda 2300 a 6900 €.',
        'independant-io':
          'Web hecha por un profesional «de 1000 a más de 10 000 €»; mantenimiento 50 a 500 € al mes según la carga; alojamiento 50 a 200 € al año.',
        'sk-web':
          'Link-in-bio desde 440 €, Essentiel (1 a 3 páginas) desde 690 €, Business (4 a 6 páginas) desde 1590 €, tienda con presupuesto, «pagado una vez»; acompañamiento opcional tras dos meses, 9, 22 o 32 € al mes según la oferta.',
        'lucas-fonseque':
          'Una página 800 € sin IVA, Corporativa 1500 €, Corporativa completa 2500 €, A medida (tienda o web grande) desde 5000 € sin IVA; mantenimiento 60 € sin IVA al mes con doce meses de permanencia, alojamiento y dominio incluidos.',
        'vorlyx-studio':
          'Essentiel 350 a 500 € (1 página), Professionnel 700 a 2000 € (hasta 5 páginas), Premium con presupuesto; alojamiento 150 a 180 € al año, dominio incluido, pasado al mes.',
        adekoite:
          'Web corporativa estándar 1500 a 2500 € sin IVA (5 a 10 páginas), personalizada 2500 a 4500 € (10 a 20 páginas), premium 5000 a 8000 €; mantenimiento desde 70 € sin IVA al mes, alojamiento y dominio aparte.',
        fsweb:
          'Web corporativa Essentiel desde 990 € sin IVA (5 páginas), Pro 1990 €; tienda Starter 1990 €, Business 3990 €, sin IVA; mantenimiento 39 € sin IVA al mes para una web corporativa, 89 € para una tienda.',
        'marine-et-mots':
          'Ofertas Projecteur y Performance de 2000 a 3500 € sin IVA según las opciones; web sobre plantilla «llave en mano» 549 €; oferta de una página sin precio publicado.',
        dibodev:
          'Soy yo: web sobre plantilla 290 € una sola vez, generada con DevLeadHunter (mi producto), dominio y alojamiento incluidos; web corporativa a medida desde 1500 €; mantenimiento de las webs a medida 100 a 300 € al mes.',
        fenxi: 'Webs corporativas desde 2000 € sin IVA; diagnóstico UX/UI 1300 € sin IVA, descontado de un rediseño.',
        'la-taniere-numerique':
          'Essentiel desde 2500 € sin IVA (5 páginas, un año de alojamiento incluido), Business desde 4500 € (hasta 10 páginas, blog), Premium desde 7500 €.',
        'e-cybercom':
          'Landing page WordPress desde 1000 € sin IVA, web corporativa WordPress de 2 a 5 páginas desde 2000 €, tienda WooCommerce desde 3500 €, rediseño desde 2000 €, todo sin IVA.',
        simplebo:
          'Web hecha por Simplébo por suscripción: 400 € de puesta en marcha y luego 60 € al mes (Site Web), 500 € y luego 120 € (Pack Croissance), 800 € y luego 150 € (Pack Complet), doce meses de permanencia en pago mensual, dominio incluido.',
        solocal:
          'Suscripción todo incluido, sin precio de creación: Initiale desde 64 € al mes (web en autonomía), Confort desde 114 € (web hecha por sus expertos), Performance desde 209 €.',
        wix: 'Planes Light 16,80 €, Essentiel 30 €, Business 40,80 €, Business Plus 178,80 € al mes, precios de los planes anuales pagados por adelantado, dominio gratis un año; sin precio público para una web hecha por un experto.',
        jimdo:
          'Packs Start 12,10 €, Grow 20,17 €, Grow Legal 29,25 €, Unlimited 50,42 € al mes durante doce meses, dominio incluido; sin precio público para una web hecha para ti.',
        webnode:
          'Planes Limited 3,90 €, Mini 6,90 €, Standard 9,90 €, Pro 17,90 € al mes en pago anual, dominio gratis un año salvo Limited.',
        ionos:
          'Packs MyWebsite 10, 16 y 30 € sin IVA al mes fuera de promoción (1 o 6 € los primeros meses en oferta), dominio incluido el primer año; el servicio de diseño de IONOS no publica precio en 2026.',
      },
    },
    csvEmphasizedIntro: 'Los datos también son tuyos:',
    csvText:
      'la recogida completa se puede descargar bajo licencia CC BY 4.0. Cita «Dibodev, barómetro 2026 de los precios de una página web en Francia» con un enlace a esta página.',
    csvLinkLabel: 'Descargar la recogida (CSV)',
    csvFootnote: '¿Falta una fuente o ha cambiado de precio? Escríbeme, lo corrijo y fecho la corrección.',
  },
  threeYears: {
    eyebrow: 'A tres años',
    title: 'Suscripción, web sobre plantilla o a medida: lo que cuesta a tres años',
    intro:
      'Una suscripción siempre parece más barata el primer mes. Este es el cálculo a tres años para una web corporativa, alojamiento y mantenimiento incluidos.',
    criterionLabel: 'Criterio',
    columns: ['Creador de webs por suscripción', 'Web sobre plantilla Dibodev', 'Web corporativa a medida (medianas)'],
    rows: [
      {
        label: 'Precio de partida',
        cells: [
          { state: 'yes', text: '{builderMonthly}, del plan más barato al más caro de los seis creadores recogidos' },
          { state: 'yes', text: '{templatePrice} una sola vez, dominio y alojamiento incluidos' },
          {
            state: 'partial',
            text: '{showcaseRange} a precio cerrado (medianas de las fuentes que cifran la web corporativa)',
          },
        ],
      },
      {
        label: 'Coste a tres años',
        cells: [
          { state: 'partial', text: '{builderThreeYears}' },
          { state: 'yes', text: '{templatePrice}' },
          { state: 'partial', text: '{customThreeYears}, mantenimiento de {maintenanceMonthly} incluido' },
        ],
      },
      {
        label: 'Dominio y alojamiento',
        cells: [
          { state: 'yes', text: 'Incluidos en la suscripción, dominio a menudo gratis el primer año' },
          { state: 'yes', text: 'Incluidos' },
          { state: 'partial', text: 'Aparte (10 a 100 € al año) o dentro del mantenimiento' },
        ],
      },
      {
        label: 'Lo que es tuyo',
        cells: [
          { state: 'partial', text: 'Tus textos y fotos; la web se queda en la plataforma' },
          { state: 'partial', text: 'Tus textos y fotos; la web la aloja Dibodev' },
          { state: 'yes', text: 'La web, su código y sus contenidos' },
        ],
      },
      {
        label: 'Puesta en línea',
        cells: [
          { state: 'yes', text: 'Unos días, haciéndolo tú mismo' },
          { state: 'yes', text: 'En menos de una semana' },
          { state: 'partial', text: '3 a 6 semanas' },
        ],
      },
      {
        label: 'Cuándo tiene sentido',
        cells: [
          { state: 'yes', text: 'Una necesidad sencilla, y tiempo para hacerlo tú mismo' },
          { state: 'yes', text: 'Que te encuentren rápido, sin dedicarle tiempo ni volver a ello' },
          { state: 'yes', text: 'Una página por servicio, un SEO local trabajado, una imagen propia' },
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
        title: 'El número de páginas',
        description:
          'Una página, cinco o veinte: casi todas las tablas publicadas se cortan así. En SK Web, una página más cuesta 100 €; en Adekoite, pasar de 10 a 20 páginas mueve la horquilla de 1500-2500 a 2500-4500 € sin IVA.',
      },
      {
        title: 'Plantilla o a medida',
        description:
          'Una web sobre plantilla reutiliza una estructura y un diseño probados: 290 € conmigo, 549 € en Marine & Mots. Un diseño dibujado para ti se paga aparte: 600 a 1200 € sin IVA en Adekoite, 1500 € sin IVA en Simplébo.',
      },
      {
        title: 'Los textos y las fotos',
        description:
          '¿Quién escribe? Si aportas textos y fotos, el precio baja. La redacción se factura a 70 € por página en SK Web; un redactor cuesta 200 a 400 € al día según independant.io.',
      },
      {
        title: 'El posicionamiento',
        description:
          'Una web corporativa «optimizada» y una web pensada para salir en «fontanero Rennes» no piden el mismo trabajo. El SEO suele ser una opción: 400 € y luego 50 € al mes en Simplébo, 250 a 700 € al día como servicio según independant.io.',
      },
      {
        title: 'Las funciones extra',
        description:
          'Reserva online, pago, área de cliente, tienda: cada función añade días. Adekoite publica 400 € sin IVA por una reserva, 500 € por un área de miembros; una tienda parte de 1990 € sin IVA en FSWeb.',
      },
      {
        title: 'Quién te responde',
        description:
          'Un freelance no tiene ni comercial ni jefe de proyecto que financiar: las tarifas diarias publicadas van de 280 a 450 € en freelance según Codeur.com, y las agencias recogidas empiezan sus webs corporativas en 2000 o 2500 € sin IVA.',
      },
    ],
  },
  method: {
    eyebrow: 'Método',
    title: 'Cómo está hecho este barómetro',
    intro: 'No mide presupuestos, sino lo que cada proveedor asume escribir públicamente. Es su límite y su interés.',
    steps: [
      {
        label: 'Recogida',
        title: 'Las páginas públicas, el mismo día',
        description:
          'Los precios vienen de las páginas de tarifas o de las guías de precios de las fuentes, todas leídas el 1 de noviembre de 2026, con un enlace a cada una. Ningún presupuesto pedido, ningún precio negociado.',
      },
      {
        label: 'Clasificación',
        title: 'Tres tamaños de web y el mantenimiento',
        description:
          'Cada precio se coloca en un tamaño (web de una página, web corporativa de 3 a 6 páginas, web completa o tienda) según la descripción de la fuente, y el mantenimiento o la suscripción en una columna al mes. Los precios anuales se pasan al mes.',
      },
      {
        label: 'Cálculo',
        title: 'Medianas, no medias',
        description:
          'Para cada tamaño, la mediana de los suelos y la mediana de los techos publicados. Un precio «desde» cuenta solo para el suelo. El mantenimiento de freelances y agencias se calcula aparte de las suscripciones de los creadores de webs.',
      },
      {
        label: 'Actualización',
        title: 'Una edición al año',
        description:
          'Precios revisados dos veces al año, edición rehecha cada año. Un proveedor que publica sus precios puede pedir entrar en la recogida.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Precio de una página web: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web en Francia en 2026?',
        answer:
          'En las 20 fuentes recogidas el 1 de noviembre de 2026, las medianas publicadas van de 420 a 950 € para una web de una página, de 1000 a 2000 € para una web corporativa de 3 a 6 páginas y de 2500 a 4600 € para una web completa o una tienda sencilla. Los creadores de webs por suscripción van de 3,90 a 209 € al mes. La Fabrique du Net, que mide presupuestos realmente comprometidos, encuentra una mediana de 3500 € para una web corporativa.',
      },
      {
        question: '¿Cuánto cuesta una página web para un artesano?',
        answer:
          'Un artesano necesita una web corporativa de 3 a 6 páginas: inicio, servicios, zona de intervención, contacto. Las medianas publicadas van de 1000 a 2000 €, del suelo de 290 € al techo de 10 000 €. Conmigo, son 290 € una sola vez por una web sobre plantilla, dominio y alojamiento incluidos, o desde 1500 € por una web a medida, pensada para salir en las búsquedas de tu oficio en tu ciudad.',
      },
      {
        question: '¿Web a 290 € o web a 1500 €: cuál es la diferencia?',
        answer:
          'La web a 290 € se genera con DevLeadHunter, mi producto, a partir de una plantilla hecha para artesanos: tus textos, tus fotos, tus datos de contacto, tu dominio y el alojamiento, en línea en menos de una semana, pagada una sola vez. La web a 1500 € se diseña y se escribe para ti: una página por servicio, un SEO local trabajado, funciones propias (presupuesto online, reserva), y el código es tuyo. La primera sirve para existir y que te encuentren; la segunda para diferenciarte.',
      },
      {
        question: '¿Qué incluye el mantenimiento de una página web?',
        answer:
          'El alojamiento, el dominio, las actualizaciones del CMS y de sus extensiones, las copias de seguridad y algo de tiempo de cambios cada mes. Los freelances y agencias recogidos publican de 9 a 300 € al mes, con medianas de 50 a 60 € al mes. Yo facturo el mío de 100 a 300 € al mes para una web a medida, alojamiento, copias y pequeñas evoluciones incluidos; la web sobre plantilla a 290 € no lo tiene.',
      },
      {
        question: '¿Una web en Wix o Jimdo es más barata?',
        answer:
          'El primer mes, sí. A tres años, un plan Wix de 16,80 a 178,80 € al mes suma 605 a 6437 €, y los seis creadores recogidos van de 140 a 7524 € en el periodo, frente a 290 € por una web sobre plantilla pagada una vez o 2782 a 4160 € por una web corporativa a medida con mantenimiento incluido. La suscripción tiene otro coste: la web se queda en la plataforma, y empiezas de cero si la dejas.',
      },
      {
        question: '¿Cuánto cuestan un dominio y el alojamiento?',
        answer:
          'Un .fr cuesta 4,99 € sin IVA el primer año y luego 7,79 € sin IVA al año en OVHcloud (recogida del 1 de noviembre de 2026). Un alojamiento compartido cuesta 1,59 € sin IVA al mes el primer año y luego 2,59 € en OVHcloud, desde 1,86 € sin IVA al mes el primer año en o2switch. Es decir, 50 a 100 € al año por los dos, a menudo incluidos en el mantenimiento o en la suscripción.',
      },
      {
        question: '¿Los precios son con o sin IVA?',
        answer:
          'Cada ficha lo dice. Los freelances franceses exentos de IVA publican precios netos, sin IVA que añadir: es mi caso (IVA no aplicable, artículo 293 B del código fiscal francés). Las agencias publican precios sin IVA, a los que se añade un 20 % que recuperas si estás sujeto a IVA. Los creadores de webs publican unas veces sin IVA (Webnode, IONOS, Simplébo) y otras con IVA (Wix, Jimdo).',
      },
      {
        question: '¿Pagar una vez o suscribirse?',
        answer:
          'Pagar una vez conviene a una web que cambia poco: la web es tuya, y después solo te cuesta su alojamiento, o un mantenimiento si lo quieres. La suscripción conviene si actualizas tu web a menudo tú mismo y aceptas quedarte en la plataforma. La tabla a tres años de esta página hace el cálculo para los dos casos.',
      },
      {
        question: '¿Qué no está en este barómetro?',
        answer:
          'Los presupuestos, los descuentos y los precios negociados, que nadie publica. Las tiendas complejas y las plataformas, que son software a medida. Los proveedores que no publican ningún precio, leídos pero dejados fuera. Y los precios fuera de Francia.',
      },
      {
        question: '¿Puedo reutilizar estas cifras?',
        answer:
          'Sí. La recogida se puede descargar en CSV bajo licencia CC BY 4.0: cita «Dibodev, barómetro 2026 de los precios de una página web en Francia» con un enlace a esta página. Si ves un error o un precio que ha cambiado, escríbeme, lo corrijo y fecho la corrección.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'Los artículos que ayudan a elegir entre una web corporativa y una herramienta de gestión, y a financiar el proyecto.',
  },
  contactCta: {
    title: '¿Quieres un precio para tu web, no una horquilla?',
    description:
      'Dime tu oficio, tu ciudad y lo que la web tiene que hacer. Te respondo en 24 horas con un precio firme: 290 € por una web sobre plantilla, un presupuesto cerrado por una web a medida. Y si un creador de webs te basta, te lo digo.',
    button: 'Pedir mi precio',
  },
}
