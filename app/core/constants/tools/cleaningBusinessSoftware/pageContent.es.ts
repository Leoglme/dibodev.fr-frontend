import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
  CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
  CLEANING_BUSINESS_PAGE_UPDATED_AT,
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  HOME_SERVICES_VAT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const CLEANING_BUSINESS_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para empresas de limpieza en Francia: precios 2026',
    description:
      'Programas para empresas de limpieza en Francia: precios 2026 (PROPRET, PROGESTI, CleanPlus, MyClic…), test gratuito en 6 preguntas y plantilla de planificación.',
    inLanguage: 'es',
    schemaAbout: 'Programa de gestión para empresas de limpieza en Francia',
  },
  breadcrumbLabel: 'Software para empresas de limpieza',
  shareImage: {
    titleLines: ['¿Qué software', 'para la limpieza?'],
    highlight: 'limpieza',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de limpieza en Francia y una plantilla de planificación gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'sparkles',
    alt: '¿Qué software para tu empresa de limpieza? Test gratuito en 6 preguntas, precios 2026 de los programas de limpieza en Francia y plantilla de planificación de visitas, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'empresa de limpieza',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tus equipos, tus delegaciones y tus clientes. Oficinas, comunidades de propietarios, casas de particulares o entornos sensibles, a partir del mercado francés el test te dice qué tipo de programa elegir para la planificación, el fichaje de tu personal y el control de calidad, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En Kodeva creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: CLEANING_BUSINESS_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para empresas de limpieza en Francia y de sus precios',
    intro:
      'Las tarifas que muestran en su web los editores especializados en limpieza profesional, y un programa de intervenciones generalista. El precio depende sobre todo del número de usuarios, del personal que ficha y de las opciones.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'PROPRET',
        coverage:
          'Planificación, fichaje de inicio y fin de servicio, geolocalización, partes de intervención, contratos, facturación, RR. HH. y prenómina, stock; factura electrónica a través de Pennylane (Factur-X)',
        price: `29,99 a 99,99${NBSP}€ sin IVA al mes`,
        priceCondition:
          'Starter, Pro (5 usuarios) o Premium (20 usuarios), todos los módulos, puesta en marcha incluida; acceso sin tarjeta bancaria, sin compromiso',
      },
      {
        name: 'PROGESTI',
        coverage:
          'Planificación multisitio, fichaje de entrada y salida geolocalizado, presupuestos y facturas alimentados por el fichaje, RR. HH., CRM',
        price: `59 a 399${NBSP}€ sin IVA al mes`,
        priceCondition: `Solo (1 usuario), Équipe (5), Business (15), Enterprise (30), 10${NBSP}€ por usuario adicional; prueba de 14 días sin tarjeta`,
      },
      {
        name: 'CleanPlus',
        coverage:
          'Fichaje por GPS, portal de cliente, plantillas de control de calidad con fotos y puntuaciones, informes, alertas sobre permisos de residencia; conexión con Pennylane',
        price: `29${NBSP}€ al mes sin IVA`,
        priceCondition: `Más 3,40 a 4,40${NBSP}€ por operario según el tramo; un administrador incluido (289${NBSP}€ sin IVA al año); opciones Factur-X 14${NBSP}€ al mes, asistente IA 9${NBSP}€, firma 7${NBSP}€; prueba de 7 días`,
      },
      {
        name: 'MyClic Propreté',
        coverage:
          'CRM, presupuestos, facturas y recordatorios de pago, planificación, fichaje de llegadas, salidas y pausas',
        price: `169${NBSP}€ al mes sin IVA`,
        priceCondition: `Para 3 colaboradores, 49${NBSP}€ por colaborador adicional; fichaje en campo 4${NBSP}€ sin IVA por operario; con demostración`,
      },
      {
        name: 'Experhygia (SASHA)',
        coverage:
          'App sin conexión, fichaje de llegadas, salidas y pausas (código QR posible), control de calidad ponderado con fotos y firmas',
        price: `Desde 30${NBSP}€ sin IVA al mes`,
        priceCondition: 'Según el número de usuarios y las necesidades',
      },
      {
        name: 'Organilog',
        coverage:
          'Programa de intervenciones generalista con una oferta de limpieza: planificación, fichaje por NFC, código QR o geolocalización, formularios de control de calidad, modo sin conexión',
        price: `19 a 64${NBSP}€ por usuario al mes`,
        priceCondition: `Pro 19${NBSP}€ pagando el año o 24${NBSP}€ al mes, Business 35 o 45${NBSP}€, Premium 59${NBSP}€, Premium + Carte 64${NBSP}€`,
      },
      {
        name: 'Penbase MOZAIK Clean, Teleric, Progiclean, 2BePragma',
        coverage:
          'Suites del sector de la limpieza: fichaje por NFC, código QR o GPS, control de calidad en el móvil, fotos de antes y después, extranet de cliente o conexión con la nómina, según el editor',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar una semana real por el programa. Una limpiadora de baja sustituida esa misma mañana en tres sitios, el fichaje de su sustituta con código QR en un sótano sin cobertura, el control de calidad de un sitio con fotos enviado al cliente, y luego las horas del mes enviadas a nóminas y la factura del contrato emitida, sin volver a teclear nada.',
    calloutFootnote:
      'Tarifas consultadas el 26 de octubre de 2026 en las páginas de precios de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Tiempo parcial, fichaje, cambio de contrata: lo que tu programa debe seguir en Francia en 2026',
    intro:
      'En Francia, el tiempo parcial y los turnos, el fichaje en el sitio, la subrogación del personal cuando un contrato cambia de empresa, el plan de prevención en casa del cliente, el IVA y la factura electrónica: las normas de una empresa de limpieza pasan todas por su planificación y sus documentos. En el sector, uno de cada dos empleados trabaja para varios empleadores, de ahí unas planificaciones ajustadas.',
    facts: [
      {
        contextLabel: 'Convenio de la limpieza, art. 6.2.4.1',
        title: `Un tiempo parcial de 16${NBSP}horas semanales como mínimo`,
        text: `Salvo petición escrita del empleado, un contrato a tiempo parcial suma al menos 16${NBSP}horas semanales, con un máximo de 2 turnos al día por debajo de 24${NBSP}horas semanales, y 3 por encima.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Reglas de la CNIL',
        title: 'El fichaje en el sitio, anunciado antes de ponerlo en marcha',
        text: 'Etiqueta NFC, código QR o geolocalización del móvil: cualquier sistema de control horario se comunica a los empleados antes de ponerlo en marcha, y se consulta al comité social y económico (CSE) a partir de 50 empleados.',
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'Convenio de la limpieza, artículo 7',
        title: 'Cambio de contrata: el personal pasa a la nueva empresa',
        text: `La nueva empresa se subroga en el 100${NBSP}% del personal asignado al contrato que cumple las condiciones (entre ellas, un contrato indefinido, al menos 6 meses en ese contrato y el 30${NBSP}% de su tiempo en él). La empresa saliente transmite la información en un plazo de 8 días laborables.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Desde 400 horas en 12 meses',
        title: 'Un plan de prevención por escrito en casa del cliente',
        text: `Tu empresa y el cliente analizan juntos los riesgos tras una inspección conjunta de las instalaciones. El plan de prevención se hace por escrito a partir de 400${NBSP}horas de trabajo en 12 meses, o para los trabajos peligrosos que enumera la orden del 19 de marzo de 1993.`,
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
      {
        contextLabel: 'IVA',
        title: `20${NBSP}% para empresas, 10${NBSP}% para particulares con una condición`,
        text: `La limpieza de locales profesionales se factura con un IVA del 20${NBSP}%. La limpieza en casas de particulares, como servicio a domicilio (services à la personne), baja al 10${NBSP}% si la empresa solo trabaja en el domicilio de sus clientes; si no, 20${NBSP}%.`,
        sourceName: HOME_SERVICES_VAT_SOURCE.name,
        sourceUrl: HOME_SERVICES_VAT_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes deberán emitirlas a partir del 1 de septiembre de 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de nóminas ni tu contabilidad. Las horas fichadas van a tu nómina, las facturas a tu contabilidad (exportación o Factur-X), y la herramienta se conecta a tus herramientas actuales.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Una planificación de visitas y una hoja de control de calidad listas para rellenar',
    description:
      'La planificación semanal por sitio y por operario, con el horario de cada visita; la hoja de control de calidad de un sitio, zona por zona, con nota, fotos y firma del cliente. En francés, en PDF para imprimir o en Excel con las horas, el total por operario y la tasa de conformidad calculados.',
    items: [
      'Planificación de visitas: sitio, operario, horario de cada día, horas de la semana y total por operario',
      'Hoja de control de calidad: zonas del sitio, puntos controlados, nota de cada zona, fotos, acciones correctoras, firma del cliente',
      `Referencias útiles: 16${NBSP}horas semanales como mínimo para un tiempo parcial, salvo petición escrita del empleado (convenio francés de la limpieza); una foto de cada defecto en el control`,
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, horas y conformidad calculadas, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar a tu empresa y a tus contratos.',
  },
  comparison: {
    eyebrow: 'Las tres opciones',
    title: '¿Programa del mercado, complemento o a medida?',
    intro:
      'Cada una tiene su lugar. El test te orienta; esta tabla muestra lo que ganas y lo que aceptas con cada una.',
    criterionLabel: 'Criterio',
    columns: ['Programa del mercado', 'Programa del mercado + complemento', 'Herramienta a medida'],
    rows: [
      {
        label: 'Precio',
        cells: [
          { state: 'yes', text: `29 a 399${NBSP}€ sin IVA al mes, según los usuarios o los operarios` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Planificación, fichaje, facturas',
        cells: [
          { state: 'yes', text: 'Incluidos en los editores de limpieza (el fichaje a veces se cobra por operario)' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus sitios, tus turnos y tus contratos' },
        ],
      },
      {
        label: 'Tus reglas: turnos, cambios de contrata, planes de prevención',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Informes de visita y de control para tus clientes (portal de cliente)',
        cells: [
          { state: 'partial', text: 'A menudo un portal del editor, con sus colores' },
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
    rowsShownOnSmallScreens: CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
    screenshotUrl: CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. El mismo principio sirve para contar las horas de tu personal en cada sitio de cliente, y luego preparar la nómina y la factura.',
    highlights: [
      'Horas registradas por obra, pensadas para la tableta',
      'Validación semanal, alertas por horas que faltan',
      'Informes por proyecto y exportaciones a Excel y PDF',
    ],
    linkLabel: 'Ver el proyecto Gest-Time',
    imageAlt:
      'Informe Gest-Time: horas, ausencias y desplazamientos por empleado y por semana, con exportación a Excel',
    browserBarCaption: 'Gest-Time · informe de horas por empleado',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para empresas de limpieza: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para empresas de limpieza en Francia?',
        answer: `PROPRET cuesta 29,99 a 99,99${NBSP}€ sin IVA al mes (todos los módulos), PROGESTI 59 a 399${NBSP}€ sin IVA al mes según el número de usuarios, CleanPlus 29${NBSP}€ sin IVA al mes más 3,40 a 4,40${NBSP}€ por operario, MyClic Propreté 169${NBSP}€ sin IVA al mes para 3 colaboradores, Experhygia desde 30${NBSP}€ sin IVA al mes y Organilog 19 a 64${NBSP}€ por usuario al mes. Penbase MOZAIK Clean, Teleric, Progiclean y 2BePragma van bajo presupuesto (tarifas consultadas el 26 de octubre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué fichaje para el personal de limpieza: GPS, código QR o NFC?',
        answer:
          'Los tres existen. El GPS del móvil fecha y sitúa la llegada y la salida (PROPRET, PROGESTI, CleanPlus); el código QR o la etiqueta NFC colocada en el sitio prueba que el operario estuvo allí, incluso donde el GPS es impreciso (Experhygia, Organilog, Penbase MOZAIK Clean). Experhygia y Organilog también funcionan sin conexión. En todos los casos, en Francia el sistema se presenta a los empleados antes de ponerlo en marcha, y se consulta al CSE a partir de 50 empleados (CNIL).',
      },
      {
        question: '¿Sabe un programa de planificación gestionar el tiempo parcial y los turnos?',
        answer: `Compruébalo en una demostración, porque el convenio francés de la limpieza tiene sus propias reglas: un tiempo parcial suma al menos 16${NBSP}horas semanales (salvo petición escrita del empleado), con un máximo de 2 turnos al día por debajo de 24${NBSP}horas semanales, 3 por encima. Cuando la jornada se calcula como media del semestre natural, se entrega una planificación provisional cada mes y cualquier cambio se avisa con 3 días hábiles de antelación. Uno de cada dos operarios trabaja también para otros empleadores: la planificación tiene que encajar con sus otros horarios.`,
      },
      {
        question: '¿Qué pasa cuando ganas un contrato que ya limpiaba otra empresa?',
        answer: `En Francia se aplica el artículo 7 del convenio colectivo: te subrogas en el 100${NBSP}% del personal asignado al contrato que cumple sus condiciones (entre ellas, un contrato indefinido, al menos 6 meses en ese contrato y el 30${NBSP}% de su tiempo en él). La empresa saliente te transmite la información sobre esos empleados en un plazo de 8 días laborables. Un buen programa importa esa lista (contratos, antigüedad, horarios) y la coloca en la planificación del sitio desde el primer día.`,
      },
      {
        question: '¿Cuándo hace falta un plan de prevención por escrito en casa del cliente?',
        answer: `A partir de 400${NBSP}horas de trabajo en 12 meses en casa del cliente, o sea cual sea la duración para los trabajos peligrosos que enumera la orden del 19 de marzo de 1993. Antes de empezar, tu empresa y el cliente analizan juntos los riesgos tras una inspección conjunta de las instalaciones (artículos R4512-6 a R4512-12 del Código del Trabajo francés). Un programa que cuenta las horas por sitio puede avisarte antes de llegar al umbral.`,
      },
      {
        question: 'Productos de limpieza: ¿qué documentos hay que tener?',
        answer:
          'Los productos van etiquetados y guardados en un local o un armario reservado (convenio de la limpieza, art. 3.4.1.3), y sus fichas de datos de seguridad están al alcance del personal (artículos R4411-73 y R4412-38 del Código del Trabajo francés). En el sector de la limpieza, el documento único de evaluación de riesgos es obligatorio sea cual sea la plantilla, y el convenio prohíbe dejar a un empleado solo en un trabajo peligroso.',
      },
      {
        question: '¿Cómo demostrar al cliente la calidad de la limpieza?',
        answer:
          'Con un control zona por zona: cada zona recibe una nota, los defectos se fotografían, y luego el cliente firma el informe y se le envía. CleanPlus y Experhygia ofrecen plantillas puntuadas con fotos, 2BePragma una tasa de calidad y fotos de antes y después. No he encontrado ningún texto que imponga este informe ni un certificado de paso: es una costumbre, que conviene prever en tu contrato. La plantilla gratuita de esta página trae una versión para imprimir.',
      },
      {
        question: `¿Qué IVA aplica una empresa de limpieza en Francia: 10${NBSP}% o 20${NBSP}%?`,
        answer: `20${NBSP}% para la limpieza de locales profesionales (oficinas, comercios). La limpieza en casas de particulares, como servicio a domicilio, baja al 10${NBSP}% si la empresa solo trabaja en el domicilio de sus clientes; si no, 20${NBSP}%. Para esos clientes particulares, el presupuesto es obligatorio a partir de 100${NBSP}€ con IVA al mes. Un programa que gestiona los dos tipos de clientes aplica el tipo correcto en cada factura.`,
      },
      {
        question: '¿Existe un programa gratuito para empresas de limpieza?',
        answer:
          'Los programas de limpieza consultados son de pago, pero varios se pueden probar gratis: PROPRET abre un acceso completo sin tarjeta bancaria ni compromiso, PROGESTI ofrece 14 días de prueba sin tarjeta, CleanPlus 7 días (tarjeta solicitada, sin cargo). Para empezar, la plantilla gratuita de esta página (planificación de visitas y hoja de control de calidad, en PDF y en Excel) saca de un apuro a un equipo pequeño, sin fichaje ni fotos.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, sitios, operarios, contratos y planificaciones a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu empresa de limpieza?',
    description:
      'Cuéntame tus sitios y tus equipos en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
