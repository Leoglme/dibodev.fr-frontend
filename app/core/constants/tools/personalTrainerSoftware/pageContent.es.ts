import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
  PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
  PERSONAL_TRAINER_PAGE_UPDATED_AT,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const PERSONAL_TRAINER_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para entrenadores personales en Francia: reservas, programas, precios 2026',
    description:
      'Programas para entrenadores personales y gimnasios en Francia: precios 2026 (Harbiz, Hexfit, Eversports, Trafft…), un test gratuito en 6 preguntas y una plantilla de valoración inicial y cuaderno de sesiones para descargar.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para entrenadores personales y gimnasios en Francia',
  },
  breadcrumbLabel: 'Software para entrenadores personales',
  shareImage: {
    titleLines: ['¿Qué software para un', 'entrenador personal?'],
    highlight: 'entrenador personal',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas del mercado francés y una plantilla de cuaderno de sesiones gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'dumbbell',
    alt: '¿Qué software para un entrenador personal? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y plantilla de cuaderno de sesiones, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para un ',
    titleHighlight: 'entrenador personal',
    titleAfter: ' o un gimnasio?',
    description:
      'Seis preguntas sobre tu equipo, tus lugares y tu actividad. Entrenamiento individual, clases colectivas, seguimiento en línea o gimnasio, a partir del mercado francés el test te dice qué tipo de programa elegir para tus reservas, tus programas y tus cobros, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia, y apasionado de la musculación. En Izidoor desarrollé la plataforma de reservas de una treintena de estructuras de deporte y ocio.',
    updatedAt: PERSONAL_TRAINER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para entrenadores y gimnasios en Francia y de sus precios',
    intro:
      'Las tarifas que los editores de programas de coaching y de reservas muestran en su web. El precio depende sobre todo del número de clientes activos o de reservas al mes.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Harbiz',
        coverage:
          'Programas de entrenamiento, seguimiento de clientes, app con tu marca (iOS y Android), pagos, comunidad, asistente IA',
        price: `19 a 199${NBSP}€ al mes`,
        priceCondition: `14 a 149${NBSP}€ sin IVA al mes pagando el año; Basic hasta 5 clientes, Pro y My APP hasta 50; 14 días de prueba`,
      },
      {
        name: 'Hexfit',
        coverage:
          'Programas, biblioteca de ejercicios, tests físicos, citas, app móvil, PDF para los clientes, nutrición opcional',
        price: `19 a 250${NBSP}$ al mes`,
        priceCondition:
          'Precios en dólares; Starter 5 clientes activos, Solo 15 a 30, Growth 40 a 150, Studio 500; 14 días de prueba',
      },
      {
        name: 'Eversports Manager',
        coverage:
          'Planificación de clases, reserva y pago en línea (Stripe), abonos y bonos, venta de productos, clases en directo',
        price: `36 a 169${NBSP}€ al mes sin IVA`,
        priceCondition:
          'Pagando el año, según el número de reservas (49 a más de 1.500 al mes); app con tu marca bajo presupuesto',
      },
      {
        name: 'Trafft',
        coverage:
          'Reserva de citas en línea, web de reservas, recordatorios, señales, tarjetas regalo, reservas de grupo',
        price: 'Gratis hasta 100 citas al mes',
        priceCondition:
          '1 usuario en la oferta gratuita; ofertas de pago de 3 a 30 usuarios, precios no mostrados en la página; 14 días de prueba',
      },
      {
        name: 'Virtuagym',
        coverage: 'Gestión de socios, abonos y pagos, control de acceso, programas y nutrición, app',
        price: 'Bajo petición',
        priceCondition: 'Precios comunicados tras una demostración',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar una semana real por el programa. Una sesión reservada y pagada desde tu web, el recordatorio la víspera, el programa enviado al móvil del cliente, la cancelación tardía cobrada según tus reglas, y luego la factura del abono, sin volver a teclear nada.',
    calloutFootnote: 'Tarifas consultadas el 19 de octubre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Carné profesional, abonos, datos de salud: lo que tu programa debe respetar en Francia en 2026',
    intro:
      'En Francia, la declaración de educador deportivo, los diplomas expuestos, la información antes de un abono, el certificado médico y los datos de salud: las normas del entrenador y del gimnasio pasan por sus fichas de cliente y sus contratos. Un buen programa las mantiene al día por ti.',
    facts: [
      {
        contextLabel: 'Antes de la primera sesión pagada',
        title: 'La declaración de educador deportivo',
        text: 'Enseñar, animar o supervisar una actividad física a cambio de remuneración obliga a declararse ante la administración, que comprueba la cualificación y la ausencia de prohibición de ejercer, y luego expide el carné profesional.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'En el gimnasio',
        title: 'Diplomas y carnés expuestos',
        text: 'Las copias de los diplomas, títulos y carnés profesionales de cada monitor están expuestas, visibles para el público, en el establecimiento.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Abonos',
        title: 'Información antes de firmar',
        text: 'Duración del contrato, condiciones de baja, precios con IVA y gastos (inscripción, opciones) se entregan antes de la adhesión; el cliente puede leer el contrato fuera del lugar de venta, y dispone de 14 días de desistimiento para un contrato celebrado a distancia.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Certificado médico',
        title: 'No es una obligación legal, a menudo se pide',
        text: 'Aportar un certificado médico no es una obligación legal para inscribirse; el gimnasio puede pedirlo, porque está ligado a su seguro. Un programa guarda su fecha y avisa antes del vencimiento.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Datos sensibles',
        title: 'Lesiones, incapacidades y medidas cruzadas',
        text: 'La incapacidad para una actividad deportiva es un dato de salud, como el peso cruzado con otras medidas: se aplica un régimen particular (confidencialidad, seguridad, prohibición de comercialización). A prever desde la ficha de cliente.',
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Para tus clientes profesionales (empresas, clubes): todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes deberán emitirlas a partir del 1 de septiembre de 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de contabilidad, ni las apps de entrenamiento que tus clientes ya usan. Los cobros pasan por Stripe o tu banco, y la herramienta se conecta a tu web, tu agenda y tus e-mails.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Una valoración inicial y un cuaderno de sesiones listos para rellenar',
    description:
      'La valoración inicial de un cliente (objetivos, antecedentes, medidas, tests de partida) y el cuaderno de sesiones de musculación con series, repeticiones, cargas y sensación. En francés, en PDF para rellenar a mano o en Excel con el tonelaje y la progresión calculados.',
    items: [
      'Valoración inicial: objetivos, práctica actual, antecedentes y dolores, medidas y tests de partida, consentimiento para los datos de salud',
      'Cuaderno de sesiones: ejercicios, series, repeticiones, carga, RPE, tonelaje por sesión, notas del entrenador',
      'Versión Excel: tonelaje calculado automáticamente, progresión de una sesión a otra',
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, tonelaje calculado, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar a tu práctica. No sustituye un consejo médico.',
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
          { state: 'yes', text: `14 a 199${NBSP}€ al mes, según el número de clientes o de reservas` },
          { state: 'partial', text: `Tu suscripción, más 2.500 a 7.000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5.000 a 25.000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Reservas, programas, pagos',
        cells: [
          { state: 'yes', text: 'Incluidos, en la app y con los colores del editor' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tu método, tus fórmulas y tus lugares' },
        ],
      },
      {
        label: 'Tus reglas: fórmulas, cancelaciones, lugares',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Reserva y pago en tu web, con tus colores',
        cells: [
          { state: 'partial', text: 'A menudo una página o una app del editor' },
          { state: 'yes', text: 'En tu web, con tus colores' },
          { state: 'yes', text: 'En tu web y en una app con tu marca' },
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
    rowsShownOnSmallScreens: PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
    screenshotUrl: PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Ya realizado',
    title: 'Una plataforma de reservas para el deporte y el ocio, ya en producción',
    description:
      'En Izidoor desarrollé la plataforma de reservas de una treintena de estructuras de deporte y ocio. Sus clientes reservan y pagan en la web de cada estructura, y el equipo lo sigue todo en una planificación por monitor. Varios miles de reservas pasan por ella cada temporada.',
    highlights: [
      'Reserva en línea en la web de cada estructura',
      'Pago con Stripe, señales y reembolsos',
      'Planificación por monitor, disponibilidades y caja para cobrar en el sitio',
    ],
    linkLabel: 'Ver el proyecto Izidoor',
    imageAlt: 'Planificación Izidoor en ordenador y en móvil: franjas reservadas por monitor y por día',
    browserBarCaption: 'Izidoor · planificación de las reservas',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para entrenadores personales: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para entrenadores personales en Francia?',
        answer: `Harbiz cuesta 19 a 199${NBSP}€ al mes (14 a 149${NBSP}€ sin IVA pagando el año) según el número de clientes, Hexfit 19 a 250${NBSP}$ al mes, Eversports Manager 36 a 169${NBSP}€ sin IVA al mes según las reservas, Trafft es gratis hasta 100 citas al mes y Virtuagym va bajo petición (tarifas consultadas el 19 de octubre de 2026). Un complemento a medida cuesta de 2.500 a 7.000${NBSP}€ una sola vez, una herramienta completa de 5.000 a 25.000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa para un entrenador personal autónomo?',
        answer: `Con menos de 15 clientes activos, una app de coaching de menos de 30${NBSP}€ al mes (Harbiz Basic, Hexfit Starter o Solo) cubre los programas, el seguimiento y las citas; solo para la reserva en línea, Trafft es gratis hasta 100 citas al mes. Lo a medida compensa cuando tus fórmulas, tu método o tu app con tu marca ya no caben en esas herramientas.`,
      },
      {
        question: '¿Existe un programa gratuito para entrenadores personales?',
        answer:
          'Trafft ofrece una oferta gratuita limitada a un usuario y 100 citas al mes, suficiente para recibir reservas. Harbiz y Hexfit ofrecen 14 días de prueba con todas las funciones. Una agenda y una hoja de cálculo sirven al principio, pero sin recordatorios automáticos, sin programas en el móvil del cliente ni pago en línea.',
      },
      {
        question: '¿Hace falta un carné profesional para entrenar en Francia?',
        answer:
          'Sí. Enseñar, animar o supervisar una actividad física a cambio de remuneración obliga a declararse ante la administración, que comprueba tu cualificación y la ausencia de prohibición de ejercer, y luego expide el carné profesional. En un gimnasio, las copias de los diplomas y carnés de cada monitor están expuestas, visibles para el público.',
      },
      {
        question: '¿Puedo guardar las lesiones y las medidas de mis clientes?',
        answer:
          'Sí, con cuidado: la incapacidad para una actividad deportiva es un dato de salud según la CNIL, y el peso cruzado con otras medidas puede convertirse en dato de salud. Se aplica un régimen particular (confidencialidad, seguridad, sin comercialización). Recoge el consentimiento en la valoración inicial, limita el acceso a esos campos y evita las mensajerías de consumo para intercambiarlos.',
      },
      {
        question: '¿Qué debe contener un contrato de abono de gimnasio en Francia?',
        answer:
          'La duración, las condiciones de baja, el precio con IVA y los gastos (inscripción, opciones), entregados antes de la adhesión, y un contrato que el cliente pueda leer fuera del lugar de venta. A distancia, el cliente dispone de 14 días de desistimiento. Los contratos de seis meses o más se consideran de larga duración: ofrece también fórmulas cortas.',
      },
      {
        question: '¿Cómo limitar las cancelaciones de última hora?',
        answer:
          'Con una política de cancelación escrita en la reserva (plazo, sesión descontada o señal retenida), un recordatorio automático la víspera y una lista de espera que da la plaza a otro cliente. Los programas del mercado gestionan el recordatorio; la lista de espera y el cobro de las ausencias según tus reglas suelen ser el punto donde un complemento a medida resulta útil.',
      },
      {
        question: '¿Qué programa para un gimnasio con control de acceso?',
        answer:
          'Los programas de gimnasio (Virtuagym, Eversports Manager) vinculan los abonos a las tarjetas o códigos QR y a los pagos recurrentes. Si tu gimnasio tiene sus propias reglas (franjas reservadas, acceso por fórmula, varios centros), una herramienta a medida conecta el control de acceso de tu material a tus abonos y a tu planificación.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, sesiones, abonos y pagos a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu coaching?',
    description:
      'Cuéntame tu actividad en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
