import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PLUMBER_QUOTE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PLUMBER_QUOTE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Presupuesto de fontanero: plantilla francesa gratis (Excel)',
    description: `Presupuesto de fontanero: plantilla francesa gratis en Excel y PDF, con parte de intervención. IVA 5,5, 10 o 20${NBSP}%, anticipo, menciones al día. Sin registro.`,
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de presupuesto y parte de intervención para fontaneros y calefactores',
  },
  breadcrumbLabel: 'Presupuesto de fontanero',
  shareImage: {
    titleLines: ['Presupuesto de fontanero', 'plantilla gratis'],
    highlight: 'Presupuesto de fontanero',
    subtitle: 'Presupuesto y parte de intervención en Excel y PDF, IVA al 5,5, 10 o 20 %, menciones francesas al día',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de presupuesto de fontanero gratis: presupuesto y parte de intervención en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Presupuesto de fontanero',
    titleAfter: ': plantilla francesa gratis, Excel y PDF (+ parte de intervención)',
    reassurances: ['Presupuesto + parte de intervención', 'Excel con totales calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un presupuesto de fontanería y calefacción y un parte de intervención listos para rellenar, escritos en francés para el mercado francés, para un autónomo o un equipo pequeño. El presupuesto separa materiales y mano de obra, aplica el IVA línea a línea y lleva la certificación del cliente para el tipo reducido. El parte de intervención se firma en el sitio, con la lista de control del mantenimiento anual de la caldera.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del presupuesto, la factura y el mantenimiento de calderas para que las menciones estén al día.',
    updatedAt: PLUMBER_QUOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para fontaneros, calefactores e instaladores sanitarios que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un presupuesto y un parte de intervención, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con los totales, el IVA por tipo y el anticipo calculados en cuanto escribes una cantidad y un precio.',
    documents: [
      {
        title: 'Presupuesto',
        format: 'Página 1 del PDF, hoja «Devis» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIRET, n.º de IVA) y seguro decenal (aseguradora, n.º de póliza, zona cubierta)',
          'N.º de presupuesto, fecha, fecha de validez, presupuesto gratuito o de pago',
          'Cliente, dirección de la obra, naturaleza de los trabajos, vivienda terminada hace más de 2 años',
          'Líneas de prestaciones: descripción, unidad, cantidad, precio unitario sin IVA, tipo de IVA, total sin IVA, más una línea de mano de obra a la tarifa horaria y una línea de desplazamiento',
          `Totales: total sin IVA, IVA al 5,5${NBSP}%, 10${NBSP}% y 20${NBSP}%, total con IVA, anticipo al pedido (30${NBSP}% por defecto en el Excel)`,
          'Condiciones, certificación del cliente para el IVA reducido, firma «Bon pour accord» y sello, menciones legales de la reparación en casa de un particular',
        ],
      },
      {
        title: 'Parte de intervención',
        format: 'Página 2 del PDF, hoja «Bon d’intervention» del Excel',
        items: [
          'N.º de intervención, fecha, técnico, n.º de contrato de mantenimiento, horas de llegada y de salida',
          'Cliente y aparato (caldera, calentador, bomba de calor), marca, modelo, n.º de serie, energía, potencia, fecha de instalación',
          'Motivo (avería, mantenimiento, puesta en servicio), diagnóstico y trabajos realizados',
          'Piezas suministradas y mano de obra: descripción, cantidad, precio unitario sin IVA, IVA, total sin IVA (el Excel añade el total con IVA por línea)',
          'Lista de control del mantenimiento anual de la caldera en 6 casillas: limpieza, seguridad y regulación, monóxido de carbono en ppm, rendimiento, consejos entregados, próxima visita',
          'Firmas del cliente y del técnico, recordatorio del certificado de mantenimiento en 15 días',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el presupuesto en cinco pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales, el IVA por tipo y el anticipo se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos, de una vez por todas',
        description:
          'Rellena la cabecera (nombre, dirección, SIRET, n.º de IVA) y tu seguro decenal, y guarda el archivo como plantilla. Cada nuevo presupuesto parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente y la vivienda',
        description:
          'Nombre, dirección de la obra y naturaleza de los trabajos. Marca si la vivienda está terminada hace más de 2 años: es lo que abre el IVA al 10 % o al 5,5 %.',
      },
      {
        label: 'Paso 3',
        title: 'Las líneas, materiales y mano de obra por separado',
        description:
          'Una línea por material con su cantidad y su precio unitario sin IVA, luego la mano de obra a la tarifa horaria y el desplazamiento. El Excel calcula el total sin IVA de cada línea.',
      },
      {
        label: 'Paso 4',
        title: 'El tipo de IVA correcto en cada línea',
        description:
          'La columna IVA está al 10 % por defecto. Pásala al 5,5 % para una renovación energética, al 20 % para una vivienda nueva o un local profesional. Los totales por tipo siguen.',
      },
      {
        label: 'Paso 5',
        title: 'Validez, anticipo, firma',
        description:
          'Indica la fecha de validez, si el presupuesto es gratuito o de pago y el porcentaje de anticipo. El cliente firma con la mención «Bon pour accord», y marca la certificación si se beneficia del tipo reducido.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del fontanero-calefactor pasan por el presupuesto y el parte de intervención. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier intervención en casa de un particular',
        text: 'Avería, reparación o mantenimiento de fontanería, sanitarios o climatización: se entrega un presupuesto detallado antes de los trabajos, sea cual sea el importe, con la tarifa horaria, los gastos de desplazamiento y su plazo de validez.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `IVA al 10${NBSP}% o al 5,5${NBSP}%`,
        title: 'La certificación del cliente en el presupuesto o la factura',
        text: 'Para obras en una vivienda terminada hace más de 2 años, el cliente certifica en el presupuesto o la factura que se cumplen las condiciones del tipo reducido. Cada documento se hace por duplicado, y el suyo se conserva 5 años.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'Cada año natural',
        title: 'El mantenimiento de las calderas de 4 a 400 kW',
        text: 'Calderas, bombas de calor y aparatos de calefacción con ventilación: una visita por año natural, y un certificado de mantenimiento entregado al cliente en 15 días, que se conserva 2 años. El parte de intervención guarda el registro de la visita.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'Con cada presupuesto y factura',
        title: 'El certificado del seguro decenal',
        text: 'Como artesano o autónomo de la construcción en Francia, contratas un seguro de responsabilidad civil decenal, y su certificado acompaña tus presupuestos y tus facturas. La cabecera del presupuesto recoge sus referencias.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de presupuesto de fontanero: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de presupuesto de fontanero es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué IVA se aplica en un presupuesto de fontanería en Francia?',
        answer: `20${NBSP}% por defecto. En una vivienda terminada hace más de 2 años, las obras de mejora y mantenimiento pasan al 10${NBSP}%, y las obras de renovación energética al 5,5${NBSP}%, siempre que el cliente certifique esas condiciones en el presupuesto o la factura. La plantilla prevé los tres tipos por línea y la casilla de certificación.`,
      },
      {
        question: '¿Es obligatorio un presupuesto para una simple reparación?',
        answer:
          'En casa de un particular en Francia, sí, desde el 1 de abril de 2017: avería, reparación o mantenimiento de fontanería, sanitarios o calefacción, sea cual sea el importe. El presupuesto indica la tarifa horaria, los gastos de desplazamiento y su plazo de validez. Firmado fuera de tu establecimiento, el cliente dispone de 14 días para desistir, salvo trabajos urgentes que haya pedido.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `Escribes la cantidad, el precio unitario sin IVA y el tipo de IVA de cada línea. El total sin IVA de la línea, el total sin IVA del presupuesto, el IVA por tipo (5,5, 10 y 20${NBSP}%), el total con IVA y el anticipo se calculan solos. La hoja «Bon d’intervention» calcula también el total con IVA de cada línea. Las dos hojas se imprimen en una página A4.`,
      },
      {
        question: '¿El parte de intervención sustituye el certificado de mantenimiento de la caldera?',
        answer:
          'No. El parte de intervención guarda el registro de la visita (puntos controlados, medida del monóxido de carbono, consejos entregados), pero el certificado de mantenimiento sigue siendo un documento aparte, entregado al cliente en los 15 días siguientes a la visita y conservado 2 años. La plantilla te recuerda ese plazo.',
      },
      {
        question: '¿Y cuando los presupuestos se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos presupuestos por semana. Más allá, los programas franceses de presupuestos de construcción (Tolteck, Obat, Batappli) recogen tus partidas y tus tarifas de proveedores desde 19${NBSP}€ sin IVA al mes. Si tu organización sale de su marco (contratos de mantenimiento, rutas, piezas), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los presupuestos, los partes de intervención y los contratos de mantenimiento se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para fontaneros',
  },
}
