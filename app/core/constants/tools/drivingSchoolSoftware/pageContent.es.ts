import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
  DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
  DRIVING_SCHOOL_PAGE_UPDATED_AT,
  DRIVING_SCHOOL_RULE_SOURCES,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, ANTS, RdvPermis, CPF): the Spanish text says so instead of adapting it.

export const DRIVING_SCHOOL_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para autoescuelas en Francia: precios 2026 y test gratis',
    description:
      'Comparativa de los programas de gestión para autoescuelas en Francia y de sus precios 2026 (Drivea, Ma Gestion Zen, Drivup, Kréno 2…) y test gratis de 6 preguntas para elegir el tuyo.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para autoescuelas en Francia',
  },
  breadcrumbLabel: 'Software para autoescuelas',
  shareImage: {
    titleLines: ['¿Qué software para', 'tu autoescuela?'],
    highlight: 'autoescuela',
    subtitle: 'Seis preguntas, los precios 2026 de los programas del mercado francés y cuánto prever',
    badge: 'Test gratis, en 2 minutos',
    icon: 'car',
    alt: '¿Qué software para tu autoescuela? Test gratis de 6 preguntas y precios 2026 de los programas en Francia, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'autoescuela',
    titleAfter: '?',
    description:
      'Responde a seis preguntas sobre tus profesores, tus centros y tus alumnos. Según el mercado francés, el test te dice qué tipo de programa elegir y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni correo', 'Resultado inmediato'],
    authorIntro: 'Test creado por',
    authorBio:
      ', desarrollador de software de gestión cerca de Rennes (Francia). Ya he desarrollado una aplicación de gestión para autoescuelas.',
    updatedAt: DRIVING_SCHOOL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para autoescuelas en Francia y de sus precios',
    intro:
      'Las tarifas que los editores franceses muestran en su web, sin IVA. El precio depende sobre todo del número de centros o de inscripciones.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público, sin IVA',
    products: [
      {
        name: 'Drivea',
        coverage: 'Agenda, alumnos, pagos, progresión de los alumnos, apps iOS y Android',
        price: 'Gratis',
        priceCondition: `Opción de 10${NBSP}€ al mes para recibir alumnos`,
      },
      {
        name: 'rdv360',
        coverage: `Agenda en línea, reserva 24${NBSP}h/24, recordatorios; caja y pago en línea en los planes de pago`,
        price: `Gratis, y luego de 29,90 a 59,90${NBSP}€ al mes`,
        priceCondition: 'Según la caja y el pago en línea',
      },
      {
        name: 'Ma Gestion Zen',
        coverage: 'Agenda, alumnos, flota, contabilidad, portal del alumno, conexión con la ANTS, varios centros',
        price: `39${NBSP}€ al mes`,
        priceCondition: '3 usuarios incluidos',
      },
      {
        name: 'Drivup',
        coverage: 'Agenda, reserva y pago en línea, libro de aprendizaje, firma electrónica, ANTS, app del alumno',
        price: `45${NBSP}€ o 69${NBSP}€ al mes`,
        priceCondition: `Para un centro, según el plan; libro desde 3,50${NBSP}€ por alumno`,
      },
      {
        name: 'Kréno 2',
        coverage:
          'Agenda, contratos, facturas, cobros certificados, libro conectado con el Estado, apps del alumno y del profesor',
        price: `49${NBSP}€ al mes`,
        priceCondition: `Hasta 200 inscripciones al año, y luego 2,70${NBSP}€ por inscripción`,
      },
      {
        name: 'GestAuto-École',
        coverage: 'Agenda, libro de aprendizaje, portal del alumno, bonos de clases, varios centros, basado en Odoo',
        price: `79${NBSP}€ al mes`,
        priceCondition: 'Profesores y alumnos ilimitados',
      },
      {
        name: 'Klaxo',
        coverage: 'Agenda, reserva en línea, recordatorios por SMS, tienda, contratos, libro, ANTS y RdvPermis',
        price: `99 a 249${NBSP}€ al mes`,
        priceCondition: `De 10 a 50 inscripciones al mes según el plan, y luego 9,90${NBSP}€ por inscripción`,
      },
      {
        name: 'Rapido, Elgéaweb, AGX',
        coverage: 'Suites de los editores históricos: libro de aprendizaje, ANTS, RdvPermis, apps del alumno',
        price: 'Con presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'en Francia, el libro de aprendizaje digital es obligatorio desde 2024. Pregunta al editor si transmite tus horas al Estado por la interfaz oficial, y si puedes exportar tus datos el día que cambies de programa.',
    calloutFootnote:
      'Tarifas consultadas el 28 y el 29 de septiembre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Lo que un software para autoescuelas debe gestionar en Francia en 2026',
    intro:
      'Estas obligaciones francesas deciden en parte lo que debe hacer un programa, y lo que no conviene rehacer por cuenta propia.',
    facts: [
      {
        contextLabel: 'Desde el 1 de enero de 2024',
        title: 'El libro de aprendizaje digital',
        text: 'Obligatorio. Las horas que transmite sirven para calcular tus plazas de examen: un número NEPH erróneo o un horario incoherente, y esas horas no cuentan.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.logbook.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.logbook.url,
      },
      {
        contextLabel: '1,57 millones de plazas en 2024',
        title: 'Las plazas de examen en RdvPermis',
        text: 'Tú reservas las plazas de tus alumnos, y faltan: la profesión estimaba la necesidad en 2,19 millones para 2025.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.testSlots.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.testSlots.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2025',
        title: 'El contrato tipo',
        text: 'Evaluación inicial, precios por clase y por bono, y una clase que no se anula con al menos 48 horas hábiles de antelación no se reembolsa.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Desde el 20 de febrero de 2026',
        title: 'El CPF, mucho más limitado',
        text: `El CPF (la cuenta de formación francesa) ya solo financia el permiso B para demandantes de empleo y asalariados cofinanciados, hasta 900${NBSP}€. La certificación Qualiopi sigue siendo obligatoria.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.url,
      },
      {
        contextLabel: 'Artículo 286 del código fiscal francés',
        title: 'Los cobros y la factura',
        text: 'Tus cobros pasan por un programa de caja seguro. Factura electrónica: la recepción es obligatoria desde el 1 de septiembre de 2026 y la emisión lo será para las pymes el 1 de septiembre de 2027.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.payments.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.payments.url,
      },
      {
        contextLabel: `3000${NBSP}km como mínimo`,
        title: 'La conducción acompañada',
        text: 'Cita previa, citas pedagógicas, kilómetros recorridos: alumnos y padres quieren seguirlo todo sin llamar a la oficina.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que nunca rehago a medida:',
    calloutText:
      'el libro de aprendizaje digital, la ANTS y RdvPermis. Estos intercambios con el Estado francés pasan por editores especializados, y un error cuesta plazas de examen. Una herramienta a medida se conecta junto a un programa homologado.',
  },
  comparison: {
    eyebrow: 'Las tres opciones',
    title: '¿Programa del mercado, complemento o herramienta a medida?',
    intro:
      'Cada una tiene su lugar. El test te orienta; esta tabla muestra lo que ganas y lo que aceptas con cada una.',
    criterionLabel: 'Criterio',
    columns: ['Programa del mercado', 'Programa + complemento', 'Herramienta a medida'],
    rows: [
      {
        label: 'Precio',
        cells: [
          {
            state: 'yes',
            text: `Gratis a 249${NBSP}€ sin IVA al mes para un centro, o con presupuesto según el editor`,
          },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Libro digital, ANTS, RdvPermis',
        cells: [
          { state: 'yes', text: 'Incluidos y actualizados por el editor, según el programa' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'partial', text: 'Se quedan en un programa homologado, conectado a la herramienta' },
        ],
      },
      {
        label: 'Tus reglas: bonos, tarifas, centros',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Reserva y pago en tu web',
        cells: [
          { state: 'partial', text: 'A menudo en el portal o la tienda del editor' },
          { state: 'yes', text: 'En tu web, con tus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
        ],
      },
      {
        label: 'Puesta en marcha',
        cells: [
          { state: 'yes', text: 'Unos días' },
          { state: 'partial', text: '2 a 6 semanas' },
          { state: 'partial', text: '5 a 20 semanas, por etapas' },
        ],
      },
      {
        label: 'Tus datos',
        cells: [
          { state: 'partial', text: 'En el editor, exportación según el programa' },
          { state: 'partial', text: 'Repartidos entre las dos herramientas' },
          { state: 'yes', text: 'Tuyos, código incluido' },
        ],
      },
    ],
    rowsShownOnSmallScreens: DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
    screenshotUrl: DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un software de gestión para autoescuelas, ya desarrollado',
    description:
      'Driving School es una aplicación web de gestión para autoescuelas que diseñé durante mi formación en Epitech. Sustituye el planning de pared por una agenda compartida y muestra a cada alumno en qué punto está.',
    highlights: [
      'Agenda de las clases de conducir, por día, semana o mes',
      'Fichas de alumnos y profesores, con los permisos de cada uno',
      'Horas hechas y horas restantes de cada alumno',
    ],
    linkLabel: 'Ver el proyecto Driving School',
    imageAlt: 'Agenda mensual de Driving School: clases de conducir repartidas por día con el nombre del alumno',
    browserBarCaption: 'Driving School · agenda del mes',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para autoescuelas en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de gestión para autoescuelas en Francia?',
        answer: `Entre 0 y 249${NBSP}€ sin IVA al mes para un centro con los programas que publican sus precios. Drivea y el plan básico de rdv360 son gratuitos, Ma Gestion Zen cuesta 39${NBSP}€ al mes, Drivup 45 o 69${NBSP}€ para un centro, Kréno 2 49${NBSP}€ hasta 200 inscripciones al año y GestAuto-École 79${NBSP}€ y Klaxo de 99 a 249${NBSP}€ según las inscripciones (precios públicos consultados a finales de septiembre de 2026). Rapido, Elgéaweb y AGX funcionan con presupuesto. Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego de 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Existe un software gratuito para autoescuelas?',
        answer: `Sí. Drivea es gratuito, con una opción de 10${NBSP}€ al mes para recibir nuevos alumnos. El plan gratuito de rdv360 ofrece una agenda en línea, reservas 24${NBSP}h/24 y recordatorios, sin caja ni pago en línea. En cualquier caso, comprueba el libro de aprendizaje digital: es obligatorio en Francia desde 2024 y tus horas deben transmitirse al Estado.`,
      },
      {
        question: '¿Cuál es el mejor software para una autoescuela?',
        answer: `Depende sobre todo de tu tamaño. Solo o con pocos profesores, suele bastar un programa sencillo de menos de 50${NBSP}€ al mes. Con varios centros, fíjate en la gestión multicentro, el libro conectado con el Estado, la reserva y el pago en línea. El test de arriba te orienta en 2 minutos.`,
      },
      {
        question: '¿Puede una herramienta a medida sustituir a mi programa para el libro digital?',
        answer:
          'No lo aconsejo. El libro transmite tus horas de formación al Estado francés por una interfaz prevista para los editores de software, y esas horas sirven para calcular tus plazas de examen. Conserva un programa homologado para esa parte; la herramienta a medida se conecta al lado para la agenda, las reservas, las tarifas o el seguimiento de tus centros.',
      },
      {
        question: '¿Pueden mis alumnos reservar y pagar en mi propia web?',
        answer:
          'Sí, suele ser la primera petición: reservar clases, pagar en línea o a plazos y ver las horas restantes en la web de la autoescuela, en lugar del portal de un editor.',
      },
      {
        question: '¿Y los cobros, la caja?',
        answer:
          'En Francia, los pagos de tus alumnos deben registrarse en un programa de caja seguro (artículo 286 del código fiscal francés). Si la herramienta a medida cobra pagos, el presupuesto fija dónde se registran: en tu programa homologado, o en la herramienta con las garantías exigidas.',
      },
      {
        question: '¿Cuánto tiempo hace falta para poner en marcha una herramienta a medida?',
        answer:
          'Cuenta de 2 a 6 semanas para un complemento, y de 5 a 20 semanas para una herramienta completa según el número de centros. Pruebas cada parte a medida que avanza, sin parar la actividad.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus datos (alumnos, clases, pagos) a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esa posibilidad de exportación antes de firmar con un editor, elijas lo que elijas.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para leer también',
    slugs: DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la mejor opción para tu autoescuela?',
    description: `Háblame de tu autoescuela en pocas líneas. Te respondo en 24${NBSP}h, y si te basta un programa del mercado, te lo digo.`,
    button: 'Hablar de mi proyecto',
  },
}
