import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageShared'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { REDUCED_VAT_WORKS_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Acta de puesta en servicio electricista: plantilla gratis',
    description: `Acta de puesta en servicio de electricista: plantilla francesa gratis en Excel y PDF, con presupuesto. IVA 5,5, 10 o 20${NBSP}%, pruebas, Consuel. Sin registro.`,
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de acta de puesta en servicio y de presupuesto para electricistas',
  },
  breadcrumbLabel: 'Acta de puesta en servicio',
  shareImage: {
    titleLines: ['Acta de puesta en servicio', 'de electricista gratis'],
    highlight: 'Acta de puesta en servicio',
    subtitle: `Acta de puesta en servicio y presupuesto en Excel y PDF, Consuel, IVA al 5,5, 10 o 20${NBSP}%, menciones al día`,
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Acta de puesta en servicio de electricista gratis, plantilla francesa: acta y presupuesto en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Acta de puesta en servicio de electricista',
    titleAfter: ': plantilla francesa gratis (+ presupuesto)',
    reassurances: [
      'Acta de puesta en servicio + presupuesto',
      'Excel con totales calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un presupuesto de electricista y un acta de puesta en servicio listos para rellenar, escritos en francés para el mercado francés, para un autónomo o un equipo pequeño. El presupuesto separa materiales y mano de obra, aplica el IVA línea a línea y lleva la certificación del cliente para el tipo reducido. El acta se firma en el sitio al terminar la obra: controles del cuadro, toma de tierra, mediciones por circuito, certificado Consuel.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del presupuesto, del IVA reducido, del Consuel y de los puntos de recarga para que las menciones estén al día.',
    updatedAt: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para electricistas, instaladores y autónomos de la construcción que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: ELECTRICIAN_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable ni los formularios oficiales del Consuel.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un presupuesto y un acta de puesta en servicio, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas; la hoja «Devis» calcula los totales, el IVA por tipo y el anticipo en cuanto escribes una cantidad y un precio.',
    documents: [
      {
        title: 'Presupuesto',
        format: 'Página 1 del PDF, hoja «Devis» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIRET, n.º de IVA), seguro decenal (aseguradora, n.º de póliza, zona cubierta) y cualificaciones (Qualifelec, IRVE…)',
          'N.º de presupuesto, fecha, fecha de validez, presupuesto gratuito o de pago',
          'Cliente, dirección de la obra, naturaleza de los trabajos (cuadro, reforma, punto de recarga, avería), vivienda terminada hace más de 2 años',
          'Líneas de prestaciones: descripción, unidad, cantidad, precio unitario sin IVA, tipo de IVA, total sin IVA, más una línea de mano de obra a la tarifa horaria y una línea de desplazamiento',
          `Totales: total sin IVA, IVA al 5,5${NBSP}%, 10${NBSP}% y 20${NBSP}%, total con IVA, anticipo al pedido (30${NBSP}% por defecto en el Excel)`,
          'Condiciones (corte de corriente, pago, garantía, certificado Consuel incluido o aparte), certificación del cliente para el IVA reducido, firma «Bon pour accord» y sello, menciones legales de la reparación a domicilio y de los puntos de recarga',
        ],
      },
      {
        title: 'Acta de puesta en servicio',
        format: 'Página 2 del PDF, hoja «PV de mise en service» del Excel',
        items: [
          'N.º de obra o de presupuesto, fecha, electricista, horas de llegada y de salida',
          'Cliente e instalación: naturaleza (nueva, reforma, cuadro, punto de recarga, ampliación), acometida monofásica o trifásica, potencia contratada, interruptor general, n.º de contador',
          `Controles del cuadro en 6 casillas: diferenciales de 30 mA (número, tipo A, AC o F), botón de test de cada diferencial, calibre de los automáticos, marcado de los circuitos, apriete, protector contra sobretensiones y reserva del 20${NBSP}%`,
          'Toma de tierra y conexiones: resistencia de la tierra en Ω, conexión equipotencial principal, conexión del cuarto de baño',
          'Mediciones por circuito: sección, protección, aislamiento en MΩ, continuidad del PE en Ω, ensayo (6 líneas en el PDF, 8 en el Excel)',
          'Ensayos y punto de recarga (potencia, circuito dedicado, diferencial tipo A o F, carga de prueba), certificado Consuel (tipo, n.º y fecha de envío, visado recibido), observaciones y firmas',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el presupuesto y el acta en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales, el IVA por tipo y el anticipo del presupuesto se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y tus cualificaciones, de una vez por todas',
        description:
          'Rellena la cabecera (nombre, dirección, SIRET, n.º de IVA), tu seguro decenal y tus cualificaciones (Qualifelec, IRVE), y guarda el archivo como plantilla. Cada nuevo presupuesto parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente, el lugar y la naturaleza de los trabajos',
        description: `Nombre, dirección de la obra y naturaleza de los trabajos: cuadro, reforma, punto de recarga o avería. Indica si la vivienda está terminada hace más de 2 años: es lo que abre el IVA al 10${NBSP}% o al 5,5${NBSP}%.`,
      },
      {
        label: 'Paso 3',
        title: 'Las líneas, materiales y mano de obra por separado',
        description:
          'Una línea por material con su unidad, su cantidad y su precio unitario sin IVA, luego la mano de obra a la tarifa horaria y el desplazamiento a tanto alzado. El Excel calcula el total sin IVA de cada línea.',
      },
      {
        label: 'Paso 4',
        title: 'El tipo de IVA correcto en cada línea',
        description: `La columna IVA está al 10${NBSP}% por defecto. Pásala al 5,5${NBSP}% para una renovación energética, al 20${NBSP}% para una vivienda nueva o un local profesional. Los totales por tipo siguen.`,
      },
      {
        label: 'Paso 5',
        title: 'Condiciones, anticipo, firma',
        description:
          'Anota la fecha de inicio, el corte de corriente previsto, si el certificado Consuel va incluido o aparte, la validez y el porcentaje de anticipo. El cliente firma «Bon pour accord» y marca la certificación si se beneficia del tipo reducido.',
      },
      {
        label: 'Paso 6',
        title: 'El acta, firmada en la puesta en servicio',
        description:
          'En el sitio, marca los controles del cuadro, anota la tierra y las mediciones de cada circuito, el n.º y la fecha de envío del certificado Consuel. El cliente firma la recepción de la instalación.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del electricista pasan por el presupuesto y el acta de puesta en servicio. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier avería en casa de un particular',
        text: `Avería, reparación o mantenimiento en casa de un particular: presupuesto detallado entregado antes de los trabajos, sea cual sea el importe, con la tarifa horaria, los gastos de desplazamiento y su plazo de validez; factura desde 25${NBSP}€ con IVA. La plantilla prevé esas tres menciones.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Antes de la puesta en tensión',
        title: 'El certificado de conformidad Consuel',
        text: 'Toda instalación nueva conectada a la red pública recibe un certificado de conformidad, enviado al Consuel al terminar los trabajos y al menos 20 días antes de la puesta en servicio; desde el 1 de enero de 2025, el Consuel lo transmite él mismo al gestor de la red. El acta guarda su tipo, su n.º y su fecha de envío.',
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Decreto del 12 de enero de 2017',
        title: 'Una cualificación IRVE para los puntos de recarga',
        text: `Salvo puntos de recarga de 3,7${NBSP}kW como máximo en una vivienda privada, los puntos de recarga los instalan profesionales cualificados por un organismo autorizado; la multa administrativa puede llegar a 300${NBSP}€ por punto de recarga. La cabecera del presupuesto lleva tus cualificaciones.`,
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: `IVA al 10${NBSP}% o al 5,5${NBSP}%`,
        title: 'La certificación del cliente en el presupuesto o la factura',
        text: 'Para obras en una vivienda terminada hace más de 2 años, el cliente certifica en el presupuesto o la factura que se cumplen las condiciones del tipo reducido. Cada documento se hace por duplicado, y el suyo se conserva 5 años. El presupuesto prevé la casilla.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de presupuesto de electricista: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de presupuesto de electricista es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué IVA se aplica en un presupuesto de electricidad en Francia?',
        answer: `20${NBSP}% por defecto. En una vivienda terminada hace más de 2 años, las obras de mejora y mantenimiento pasan al 10${NBSP}%, y la renovación energética al 5,5${NBSP}%, siempre que el cliente certifique esas condiciones en el presupuesto o la factura. La plantilla prevé los tres tipos por línea y la casilla de certificación; el Excel está al 10${NBSP}% por defecto.`,
      },
      {
        question: '¿Es obligatorio un presupuesto para una avería eléctrica?',
        answer:
          'En casa de un particular en Francia, sí, desde el 1 de abril de 2017: avería, reparación o mantenimiento, sea cual sea el importe, incluso en una urgencia. El presupuesto indica la tarifa horaria, los gastos de desplazamiento, su plazo de validez y si es gratuito o de pago. Firmado en casa del cliente, abre un derecho de desistimiento de 14 días, salvo trabajos urgentes que haya pedido. La plantilla recuerda estas menciones a pie de página.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Devis», escribes la cantidad, el precio unitario sin IVA y el tipo de IVA de cada línea (12 líneas, incluidas la mano de obra y el desplazamiento). El total sin IVA de la línea, el total sin IVA del presupuesto, el IVA por tipo (5,5, 10 y 20${NBSP}%), el total con IVA y el anticipo se calculan solos. La hoja «PV de mise en service» no calcula nada: recoge las casillas y la tabla de mediciones de 8 circuitos. Las dos hojas se imprimen en una página A4.`,
      },
      {
        question: '¿El acta de puesta en servicio sustituye el certificado Consuel?',
        answer:
          'No. El certificado de conformidad sigue siendo el formulario oficial del Consuel, enviado al terminar los trabajos y al menos 20 días antes de la puesta en servicio. El acta guarda el registro de tus controles (diferenciales, tierra, aislamiento, continuidad, ensayos), el tipo, el n.º y la fecha de envío del certificado, y luego la recepción del visado. Es el documento que el cliente firma cuando recibe la instalación.',
      },
      {
        question: '¿Y cuando los presupuestos se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos presupuestos por semana. Más allá, los programas franceses de presupuestos de construcción (Tolteck, Obat, Batappli) recogen tus partidas y tus tarifas de proveedores desde 19${NBSP}€ sin IVA al mes, y Organilog o Kizeo Forms hacen rellenar el acta en el móvil, de 15 a 59${NBSP}€ por usuario al mes. Si tu organización sale de su marco (varios electricistas, certificados Consuel que seguir), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los presupuestos, las actas de puesta en servicio y los certificados Consuel se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para electricistas',
  },
}
