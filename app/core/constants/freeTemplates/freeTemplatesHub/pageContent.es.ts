import type { DibodevFreeTemplateHubPageContent } from '~/core/types/DibodevFreeTemplateHubPage'
import { NBSP } from '~/core/constants/typography'

export const FREE_TEMPLATES_HUB_CONTENT_ES: DibodevFreeTemplateHubPageContent = {
  meta: {
    title: 'Plantillas francesas gratis por oficio: presupuestos y más',
    description:
      '17 plantillas francesas gratis sin registro: presupuestos, contrato de alquiler, certificado de caldera, acta de recepción, plannings. PDF + Excel.',
    inLanguage: 'es',
  },
  breadcrumbLabel: 'Plantillas gratuitas',
  shareImage: {
    titleLines: ['17 plantillas francesas', 'gratis por oficio'],
    highlight: 'gratis',
    subtitle:
      'Presupuestos, partes de intervención, plannings, hojas de firmas: PDF para imprimir y Excel para adaptar',
    badge: 'Sin registro ni e-mail',
    icon: 'download',
    alt: '17 plantillas francesas gratis por oficio: presupuestos, contratos, certificados, partes de intervención y plannings en PDF y Excel, sin registro, en dibodev.fr',
  },
  hero: {
    titlePart1: 'Plantillas ',
    titleHighlight1: 'francesas gratis',
    titlePart2: ' para tu oficio, en PDF y en Excel',
    description:
      'Presupuesto, contrato de alquiler, certificado de mantenimiento de caldera, acta de recepción de obra, parte de intervención, planning: diecisiete plantillas escritas en francés para los oficios de los tests de este sitio, con las menciones que exige la norma francesa. El PDF se imprime, el Excel calcula los totales. Sin formulario, sin dejar tu e-mail.',
    cta: 'Elegir una plantilla',
    templatesCountLabel: 'plantillas por oficio',
    formatsValue: '2',
    formatsLabel: 'formatos, PDF y Excel',
    reassurances: [
      'Gratis, sin registro ni e-mail',
      'Menciones legales francesas leídas y fechadas',
      'Hechas para artesanos y pequeñas empresas',
    ],
  },
  catalog: {
    anchorId: 'plantillas',
    eyebrow: 'Por oficio',
    title: 'Elige tu plantilla',
    intro:
      'Cada plantilla tiene su página, que detalla lo que contiene, cómo rellenarla y lo que exige la norma francesa del oficio. El test del oficio te dice después qué programa elegir cuando Excel ya no basta.',
    templateLinkLabel: 'Ver la plantilla',
    testLinkLabel: 'Hacer el test del oficio',
    cards: [
      {
        key: 'plumber-quote',
        tradeLabel: 'Fontanero y calefactor',
        title: 'Presupuesto + parte de intervención',
        description: `Presupuesto con IVA al 5,5, 10 o 20${NBSP}% y certificación del cliente, parte de intervención con la lista de control de la caldera.`,
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'intervention-slip',
        tradeLabel: 'Gestión de intervenciones',
        title: 'Parte de intervención + hoja de ruta',
        description:
          'Parte de intervención firmado en el sitio por el cliente, hoja de ruta del técnico con las duraciones y los totales calculados.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'garage-repair-order',
        tradeLabel: 'Taller mecánico',
        title: 'Orden de reparación + presupuesto',
        description:
          'Orden de reparación con el estado del vehículo, el kilometraje y los acuerdos del cliente, presupuesto con piezas, mano de obra y totales.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'electrician-commissioning-report',
        tradeLabel: 'Electricista',
        title: 'Acta de puesta en servicio + presupuesto',
        description:
          'Presupuesto de electricidad con el IVA por línea, acta de puesta en servicio con las pruebas y el certificado Consuel.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'personal-trainer-client-review',
        tradeLabel: 'Entrenador personal',
        title: 'Evaluación de cliente + cuaderno de sesiones',
        description:
          'Evaluación inicial con medidas y tests, cuaderno de sesiones con el tonelaje calculado sesión tras sesión.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'landscaping-maintenance-contract',
        tradeLabel: 'Paisajista',
        title: 'Contrato de mantenimiento + presupuesto de paisajismo',
        description: `Presupuesto de paisajismo con IVA al 10 o 20${NBSP}%, contrato de mantenimiento de jardín con las visitas y los servicios a domicilio.`,
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'cleaning-schedule',
        tradeLabel: 'Empresa de limpieza',
        title: 'Planning de visitas + control de calidad',
        description:
          'Planning de la semana por sitio y por empleado con las horas calculadas, hoja de control de calidad zona por zona con la tasa de conformidad.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'inventory-sheet',
        tradeLabel: 'Gestión de stock',
        title: 'Hoja de inventario + parte de recepción',
        description:
          'Hoja de inventario rotativo con las diferencias calculadas, parte de recepción de proveedor con las cantidades pedidas, entregadas y aceptadas.',
        formats: 'PDF 2 páginas · Excel 2 hojas',
      },
      {
        key: 'body-shop-claim-tracking',
        tradeLabel: 'Carrocería',
        title: 'Seguimiento de siniestro + presupuesto de carrocería',
        description:
          'Presupuesto con reportaje fotográfico, piezas de reutilización y parte de la aseguradora, hoja de seguimiento de siniestro, planificación de la cabina y vehículos de cortesía.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'carpentry-cutting-list',
        tradeLabel: 'Carpintero',
        title: 'Lista de corte + presupuesto con mediciones',
        description:
          'Presupuesto con mediciones, lista de corte y plan de corte con el coste del material calculado, acta de recepción que abre las garantías.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'training-attendance-sheet',
        tradeLabel: 'Centro de formación',
        title: 'Hoja de firmas + seguimiento de horas',
        description:
          'Firmas por media jornada, asistencia de la semana y seguimiento de las horas por participante con los saldos calculados.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'booking-schedule',
        tradeLabel: 'Actividades de ocio',
        title: 'Planning de reservas + ficha de inscripción',
        description:
          'Planning de las franjas con las plazas y los anticipos calculados, ficha de inscripción y de briefing, cuadro de organización de los primeros auxilios.',
        formats: 'PDF 2 páginas · Excel 4 hojas',
      },
      {
        key: 'equipment-rental-agreement',
        tradeLabel: 'Alquiler de material',
        title: 'Contrato de alquiler de material + estado de entrega',
        description:
          'Contrato con valor de reposición, fianza, transporte y roturas, estado de salida y de devolución, importes sin IVA, IVA y con IVA calculados.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'driving-school-contract',
        tradeLabel: 'Autoescuela',
        title: 'Contrato de formación + ficha de seguimiento',
        description:
          'Contrato con evaluación inicial, horas previstas y calendario de pagos, ficha de las clases y de las 4 competencias del libro de aprendizaje, horas y exámenes calculados.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'bike-repair-ticket',
        tradeLabel: 'Taller de bicicletas',
        title: 'Ficha de depósito y reparación de bicicleta',
        description:
          'Ficha de depósito con el marcado de la bicicleta y su estado, presupuesto aceptado, piezas y mano de obra, seguimiento de las bicicletas en el taller y de los pedidos.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'boiler-service-certificate',
        tradeLabel: 'Calefacción',
        title: 'Certificado de mantenimiento de caldera + registro',
        description:
          'Certificado con las menciones de la orden francesa del 15 de septiembre de 2009, registro de visitas a diez años, clientes a recordar antes de la fecha de aniversario.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
      {
        key: 'works-acceptance-report',
        tradeLabel: 'Construcción',
        title: 'Acta de recepción de obra + levantamiento de reservas',
        description:
          'Acta con o sin reservas, plazos de levantamiento, retención de garantía, acta de levantamiento de reservas y calendario de garantías calculado.',
        formats: 'PDF 2 páginas · Excel 3 hojas',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantillas gratuitas: tus preguntas',
    questions: [
      {
        question: '¿Las plantillas son realmente gratis?',
        answer:
          'Sí. Cada plantilla se descarga en un clic, sin registro ni dirección de e-mail, y puedes modificarla, imprimirla y reutilizarla tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué diferencia hay entre el PDF y el Excel?',
        answer:
          'El PDF está hecho para imprimirse y rellenarse a mano, en la obra o en casa del cliente. El Excel recoge los mismos documentos con fórmulas: los totales sin y con IVA, el IVA por tipo, las horas, las diferencias de inventario o los saldos de horas se calculan en cuanto escribes las cifras. Los dos se imprimen en páginas A4.',
      },
      {
        question: '¿Las menciones legales están al día?',
        answer:
          'Cada plantilla recoge las normas francesas con fuente de la página de la herramienta de su oficio (presupuesto antes de la intervención, IVA reducido, mantenimiento de calderas, seguro decenal, hojas de firmas, carteles obligatorios…), con la fecha de revisión en lo alto de su página. No sustituyen el consejo de tu contable o de tu aseguradora.',
      },
      {
        question: '¿Puedo adaptar una plantilla a mi empresa?',
        answer:
          'Está previsto. Rellena la cabecera con tus datos, tu SIRET y tus seguros, añade o quita líneas, cambia los tipos por defecto y guarda el archivo como tu propia plantilla. Las fórmulas del Excel siguen las líneas que añades dentro de las tablas.',
      },
      {
        question: 'Mi oficio no tiene plantilla, ¿qué hago?',
        answer:
          'Las plantillas siguen los oficios de los tests de este sitio. Un presupuesto de un oficio vecino se adapta a menudo en unos minutos (el presupuesto de fontanero sirve a cualquier artesano de la construcción). Si no, descríbeme tu documento: te digo gratis si una plantilla basta o si vale más una herramienta.',
      },
      {
        question: '¿Y cuando los documentos se multiplican?',
        answer:
          'Una plantilla basta para unos cuantos documentos por semana. Cuando se copian de un archivo a otro, un programa del mercado o una herramienta a medida toma el relevo: el test de cada oficio te dice cuál elegir y cuánto prever, con los precios 2026 de los programas del mercado francés.',
      },
    ],
  },
  contactCta: {
    title: '¿Una plantilla ya no basta?',
    description: `Descríbeme tu actividad y los documentos que rellenas cada semana. Te respondo en 24${NBSP}h, y si un programa del mercado te basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
  },
}
