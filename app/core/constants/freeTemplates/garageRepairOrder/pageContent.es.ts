import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/garageRepairOrder/pageShared'
import {
  AUTO_REPAIR_RULES_SOURCE,
  AUTO_REPAIR_TEMPLATE_PDF_PATH,
  AUTO_REPAIR_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Orden de reparación de taller: plantilla francesa gratis',
    description:
      'Orden de reparación de taller: plantilla francesa gratis en PDF y Excel, con presupuesto. Kilometraje, piezas de reutilización, totales. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de orden de reparación y presupuesto para talleres mecánicos',
  },
  breadcrumbLabel: 'Orden de reparación de taller',
  shareImage: {
    titleLines: ['Orden de reparación', 'de taller gratis'],
    highlight: 'Orden de reparación',
    subtitle:
      'Orden de reparación y presupuesto en PDF y Excel, kilometraje, piezas de reutilización, totales calculados',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de orden de reparación de taller gratis: orden de reparación y presupuesto en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Orden de reparación de taller',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ presupuesto)',
    reassurances: ['Orden de reparación + presupuesto', 'Excel con totales calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una orden de reparación y un presupuesto de taller listos para rellenar, escritos en francés para el mercado francés, para un mecánico autónomo, un taller o un centro de automóvil. La orden de reparación se firma a la entrada del vehículo, por duplicado, con el kilometraje, el estado del vehículo, la estimación con IVA y los acuerdos del cliente sobre las piezas de reutilización y los trabajos adicionales. El presupuesto detalla piezas y mano de obra, aplica el IVA y lleva la aceptación «Bon pour accord».',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del presupuesto, la orden de reparación y la factura del taller para que las menciones estén al día.',
    updatedAt: GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para talleres, mecánicos autónomos y centros de automóvil que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: AUTO_REPAIR_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: AUTO_REPAIR_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu taller. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una orden de reparación y un presupuesto, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4, para rellenar a mano delante del cliente. El Excel los recoge en dos hojas, con la estimación de cada línea, el coste probable de la intervención y los totales del presupuesto calculados en cuanto escribes una cantidad y un precio.',
    documents: [
      {
        title: 'Orden de reparación',
        format: 'Página 1 del PDF, hoja «Ordre de réparation» del Excel',
        items: [
          'Cabecera del taller (nombre, dirección, teléfono, SIRET), n.º de orden, fecha de entrada, devolución prevista, recepcionista',
          'Cliente (nombre, teléfono, dirección, e-mail) y vehículo: matrícula, kilometraje a la entrada, marca, modelo, motorización, n.º de bastidor (VIN), fecha de primera matriculación, nivel de combustible',
          'Trabajos solicitados y estimación: descripción (síntoma observado, trabajos a realizar), cantidad, horas de mano de obra, estimación con IVA, coste probable de la intervención y tarifa horaria con IVA aplicada (el Excel añade las columnas tarifa horaria con IVA y piezas con IVA)',
          'Estado del vehículo a la entrada: carrocería, interior, objetos dejados en el vehículo, testigos encendidos',
          'Acuerdos del cliente en 3 casillas: piezas de reutilización aceptadas, llamada antes de superar un importe con IVA, piezas sustituidas que quiere recuperar',
          `Firma «Bon pour accord» y sello del taller, menciones legales: kilometraje en todos los documentos, piezas de la economía circular, nota desde 25${NBSP}€ con IVA, precios y tarifas horarias expuestos`,
        ],
      },
      {
        title: 'Presupuesto',
        format: 'Página 2 del PDF, hoja «Devis» del Excel',
        items: [
          'Cabecera del taller con n.º de IVA, n.º de presupuesto, fecha, válido hasta, presupuesto de pago sí / no',
          'Cliente (nombre, dirección), teléfono / e-mail, vehículo (matrícula, modelo), kilometraje',
          'Líneas de prestaciones: descripción (pieza o mano de obra), cantidad, precio unitario sin IVA, IVA, total sin IVA (el Excel añade el total con IVA por línea y pasa de 8 a 12 líneas)',
          `Totales: total sin IVA, IVA al 20${NBSP}% por defecto, total con IVA (calculados en el Excel, tipo de IVA modificable línea a línea)`,
          'Condiciones: plazo de inmovilización previsto, anticipo eventual, forma de pago, piezas de reutilización ofrecidas, garantía de las piezas y de la mano de obra',
          'Aceptación en 2 casillas (bon pour accord, importe del presupuesto descontado de la factura final si es de pago), firmas, menciones legales: presupuesto no obligatorio pero que no se puede negar, precios libres, acuerdo del cliente para cualquier trabajo no previsto, kilometraje en la factura',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la orden de reparación en cinco pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. La estimación de cada línea, el coste probable de la intervención y los totales del presupuesto se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos, de una vez por todas',
        description:
          'Rellena la cabecera del taller (nombre, dirección, teléfono, SIRET, n.º de IVA) en los dos documentos y guarda el archivo como plantilla. Cada nueva orden de reparación parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente y el vehículo a la entrada',
        description:
          'Delante del cliente, anota la matrícula, el kilometraje a la entrada, el VIN y el nivel de combustible, y luego el estado del vehículo: arañazos, golpes, objetos dejados, testigos encendidos. Es lo que evita litigios en la devolución.',
      },
      {
        label: 'Paso 3',
        title: 'Los trabajos solicitados y la estimación',
        description:
          'Una línea por síntoma o por trabajo a realizar, con las horas de mano de obra, tu tarifa horaria con IVA y el precio de las piezas. El Excel calcula la estimación con IVA de cada línea y el coste probable de la intervención. Indica la fecha de devolución prevista.',
      },
      {
        label: 'Paso 4',
        title: 'Los acuerdos del cliente y la firma',
        description:
          'El cliente marca si acepta las piezas de reutilización, el importe a partir del cual le llamas antes de cualquier trabajo adicional, y si quiere recuperar las piezas sustituidas. Firma «Bon pour accord», tú firmas y sellas: un ejemplar para él, otro para ti.',
      },
      {
        label: 'Paso 5',
        title: 'El presupuesto cuando el cliente lo pide',
        description:
          'En la hoja «Devis», una línea por pieza o por partida de mano de obra con su cantidad y su precio unitario sin IVA. El IVA está al 20 % por defecto, los totales siguen. Indica la fecha de validez, si el presupuesto es de pago y las condiciones: plazo de inmovilización, anticipo, garantía.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del taller pasan por la orden de reparación y el presupuesto. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'Muy recomendada',
        title: 'La orden de reparación, en dos ejemplares',
        text: 'Firmada por ti y por el cliente: fecha, identidad, vehículo y kilometraje, reparaciones, coste probable y plazo de inmovilización. La página 1 de la plantilla recoge cada una de estas menciones, con la fecha de devolución prevista.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Si el cliente lo pide',
        title: 'Un presupuesto, gratis o de pago',
        text: 'El presupuesto no es obligatorio, pero no puedes negarlo al cliente que lo pide. Puede cobrarse si el cliente lo sabe antes; firmado, te compromete. La plantilla prevé la casilla «presupuesto de pago: sí / no» y el descuento de su importe en la factura final.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2017',
        title: 'Piezas de reutilización que ofrecer',
        text: 'Para algunas reparaciones (carrocería desmontable, guarnecidos, ópticas, lunas no pegadas, algunas piezas mecánicas), salvo suspensión y frenos. La orden de reparación lleva la casilla de acuerdo del cliente, y el presupuesto la línea «piezas de reutilización ofrecidas».',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: `Desde 25${NBSP}€ con IVA`,
        title: 'Una factura detallada, el kilometraje en todas partes',
        text: 'Fecha, nombre y dirección del taller, cliente, fecha y lugar de la intervención, desglose detallado, totales sin IVA y con IVA; el kilometraje figura en todos tus documentos. La plantilla lo pide a la entrada del vehículo y lo repite en el presupuesto.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de orden de reparación: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de orden de reparación es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿La orden de reparación es obligatoria en Francia?',
        answer:
          'Es muy recomendable, pero no obligatoria. En dos ejemplares firmados, protege al taller y al cliente: fecha, identidad, vehículo y kilometraje, reparaciones previstas, coste probable y plazo de inmovilización. La plantilla añade el estado del vehículo a la entrada y el nivel de combustible, dos fuentes frecuentes de litigio en la devolución.',
      },
      {
        question: '¿Un taller puede cobrar el presupuesto?',
        answer:
          'Sí, si avisa antes al cliente. El presupuesto no es obligatorio, pero el taller no puede negarlo si el cliente lo pide. Una vez firmado, compromete a las dos partes. La plantilla prevé la mención «presupuesto de pago: sí / no» y la casilla que descuenta su importe de la factura final.',
      },
      {
        question: '¿Qué hacer si aparecen trabajos adicionales durante la reparación?',
        answer:
          'Cualquier trabajo no previsto necesita el acuerdo del cliente. La orden de reparación de la plantilla fija por adelantado el importe con IVA a partir del cual le llamas antes de continuar: el cliente lo marca y lo rellena a la entrada del vehículo, y tú guardas la prueba escrita de su acuerdo.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Ordre de réparation», escribes las horas de mano de obra, tu tarifa horaria con IVA y el precio de las piezas: la estimación con IVA de cada línea y el coste probable de la intervención se calculan solos. En la hoja «Devis», escribes la cantidad y el precio unitario sin IVA, el IVA está al 20${NBSP}% por defecto y se puede modificar línea a línea, y el total sin IVA, el IVA y el total con IVA siguen. Las dos hojas se imprimen en una página A4.`,
      },
      {
        question: '¿Y cuando las órdenes de reparación se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos vehículos por semana. Más allá, los programas franceses para talleres (Gest’Garage, TDV, AutoProGestion, Kwixéo) encadenan presupuesto, orden de reparación y factura con el historial de cada vehículo, desde 19${NBSP}€ al mes. Si tu organización sale de su marco (tarifas cerradas, varios talleres, citas en tu web), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las órdenes de reparación, los presupuestos y las facturas se copian de un archivo a otro y el historial de cada vehículo se pierde, una herramienta que los encadena te devuelve horas. Descríbeme tu taller: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para talleres',
  },
}
