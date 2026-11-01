import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageShared'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Contrato de mantenimiento de jardín: plantilla gratis',
    description: `Contrato de mantenimiento de jardín: plantilla francesa gratis en Excel y PDF, con presupuesto de paisajismo. IVA al 10 o 20${NBSP}%, anticipo. Sin registro.`,
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de contrato de mantenimiento de jardín y de presupuesto de paisajismo',
  },
  breadcrumbLabel: 'Contrato de mantenimiento de jardín',
  shareImage: {
    titleLines: ['Contrato de mantenimiento', 'de jardín gratis'],
    highlight: 'Contrato de mantenimiento',
    subtitle: `Contrato de mantenimiento de jardín y presupuesto en Excel y PDF, IVA al 10 o 20${NBSP}%, servicios a domicilio`,
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Contrato de mantenimiento de jardín gratis, plantilla francesa: contrato y presupuesto de paisajismo en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrato de mantenimiento de jardín',
    titleAfter: ': plantilla francesa gratis (+ presupuesto de paisajista)',
    reassurances: ['Contrato de mantenimiento + presupuesto', 'Excel con totales calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description: `Un presupuesto de paisajismo y un contrato de mantenimiento de jardín listos para rellenar, escritos en francés para el mercado francés, para un paisajista autónomo o un pequeño equipo de zonas verdes. El presupuesto detalla obras, plantas y mano de obra, aplica el IVA al 10${NBSP}% o al 20${NBSP}% línea a línea y lleva la certificación del cliente para el tipo reducido. El contrato fija las prestaciones, las visitas del año, el precio y su revisión, con una columna para las prestaciones en servicios a domicilio.`,
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del IVA de los trabajos de jardín, de los servicios a domicilio y de los residuos verdes para que las menciones estén al día.',
    updatedAt: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para paisajistas, jardineros y empresas de zonas verdes que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: LANDSCAPING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable ni la comprobación de que puedes acogerte a los servicios a domicilio.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un presupuesto y un contrato de mantenimiento, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con el total de cada línea, el IVA por tipo, el anticipo, el importe anual del contrato y su mensualidad calculados en cuanto escribes una cantidad y un precio.',
    documents: [
      {
        title: 'Presupuesto de paisajismo',
        format: 'Página 1 del PDF, hoja «Devis» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIRET, n.º de IVA) y seguros (responsabilidad civil profesional, decenal si procede, aseguradora, n.º de póliza)',
          'N.º de presupuesto, fecha, «válido hasta», inicio previsto de los trabajos',
          'Cliente, dirección de la obra si es distinta, naturaleza de los trabajos (creación, plantaciones, valla…), vivienda terminada hace más de 2 años: sí / no',
          'Líneas de obras y plantas: descripción, unidad, cantidad, precio unitario sin IVA, tipo de IVA, total sin IVA, más tres líneas prerrellenadas para la mano de obra a la tarifa horaria, la retirada de residuos verdes por m³ y los gastos de desplazamiento',
          `Totales: total sin IVA, IVA al 10${NBSP}% (obras elegibles anexas a una vivienda de más de 2 años) y al 20${NBSP}% (plantaciones, mantenimiento y otras obras), total con IVA, anticipo al pedido (30${NBSP}% por defecto en el Excel)`,
          `Condiciones (acceso, agua y electricidad, pago, garantía de arraigo de las plantas), casilla de certificación del cliente para el IVA al 10${NBSP}% (art. 279-0 bis del código fiscal francés), firma «Bon pour accord» y sello, recordatorio de los tipos de IVA a pie de página`,
        ],
      },
      {
        title: 'Contrato de mantenimiento de jardín',
        format: 'Página 2 del PDF, hoja «Contrat d’entretien» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIRET) y n.º de declaración de servicios a domicilio, si la empresa está declarada',
          'N.º de contrato, fecha, inicio y fin del contrato, cliente particular o profesional, dirección del jardín, superficies (césped en m², setos en metros), acceso (portal, llave, agua, electricidad)',
          'Siete prestaciones prerrellenadas (siega y recogida de la hierba, poda de setos, poda de arbustos y rosales, desherbado manual, recogida de hojas, desbroce, retirada de residuos verdes) con periodo y frecuencia, visitas al año, precio sin IVA por visita, servicio a domicilio sí / no, total sin IVA al año',
          `Importe anual sin IVA, IVA al 20${NBSP}%, importe anual con IVA, pago a marcar: en 12 mensualidades, tras cada visita o de una vez (el Excel calcula la mensualidad y la parte en servicios a domicilio)`,
          'Duración de un año, revisión del precio en la fecha de aniversario, rescisión por escrito con preaviso, visita aplazada por mal tiempo, no incluido (creación, poda en altura, tala, suministros) con presupuesto aparte',
          `Recuadro de servicios a domicilio (crédito fiscal del 50${NBSP}%, tope de 5000${NBSP}€, certificado fiscal antes del 31 de marzo), cláusulas de fitosanitarios y residuos verdes (incluidos o facturados aparte), firma «Lu et approuvé» y sello`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el presupuesto y el contrato en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales, el IVA por tipo, el anticipo y la mensualidad del contrato se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos, de una vez por todas',
        description:
          'Rellena la cabecera (nombre, dirección, SIRET, n.º de IVA), tus seguros y, si estás declarado en servicios a domicilio, tu n.º de declaración en el contrato. Guarda el archivo como plantilla: cada nuevo presupuesto parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente y la obra',
        description: `Nombre, dirección de la obra si es distinta de la del cliente, naturaleza de los trabajos (creación, plantaciones, valla…). Indica si la vivienda está terminada hace más de 2 años: es la condición del IVA al 10${NBSP}% en las obras elegibles.`,
      },
      {
        label: 'Paso 3',
        title: 'Las líneas, obras y plantas por separado',
        description:
          'Una línea por obra o por planta con su unidad, su cantidad y su precio unitario sin IVA, luego la mano de obra a la tarifa horaria, la retirada de residuos verdes por m³ y el desplazamiento. El Excel calcula el total sin IVA de cada línea.',
      },
      {
        label: 'Paso 4',
        title: 'El tipo de IVA correcto en cada línea',
        description: `La columna IVA está al 20${NBSP}% por defecto. Pásala al 10${NBSP}% solo para una obra elegible anexa a una vivienda de más de 2 años (muro de cerramiento, portal, terraza de obra…); el Excel rechaza cualquier otro tipo y el cliente marca la certificación.`,
      },
      {
        label: 'Paso 5',
        title: 'Validez, anticipo, firma del presupuesto',
        description: `Indica la fecha de validez, el inicio previsto de los trabajos y el porcentaje de anticipo (30${NBSP}% por defecto). Anota tus condiciones (acceso, agua y electricidad, garantía de arraigo), y el cliente firma con la mención «Bon pour accord».`,
      },
      {
        label: 'Paso 6',
        title: 'El contrato de mantenimiento y sus visitas',
        description:
          'Para cada prestación, el periodo, el número de visitas al año, el precio sin IVA por visita y sí / no en servicios a domicilio. El Excel calcula el importe anual, el IVA, la mensualidad y la parte en servicios a domicilio; completa duración, revisión y rescisión, y marca la forma de pago.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del paisajista pasan por el presupuesto y el contrato de mantenimiento. La plantilla les reserva una columna, una casilla o una mención.',
    facts: [
      {
        contextLabel: `IVA al 10${NBSP}% o al 20${NBSP}%`,
        title: 'El tipo de IVA correcto, obra por obra',
        text: `Crear o mantener un jardín se factura al 20${NBSP}%. Algunas obras anexas a una vivienda terminada hace más de 2 años bajan al 10${NBSP}%: muro de cerramiento (salvo setos vivos), portal, reforma de una terraza de obra, murete de protección, camino de acceso principal. El presupuesto prevé el tipo por línea, el total por tipo y la certificación del cliente.`,
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Servicios a domicilio',
        title: 'Pequeña jardinería: una declaración y un certificado fiscal',
        text: 'El mantenimiento habitual de jardines, la poda de setos y árboles y el desbroce en casa de un particular pueden entrar en los servicios a domicilio franceses (services à la personne), con una simple declaración (NOVA), sin autorización. Cada cliente recibe entonces un certificado fiscal antes del 31 de marzo del año siguiente. El contrato lleva tu n.º de declaración y marca cada prestación sí / no.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: `Hasta 5000${NBSP}€ de gastos al año`,
        title: `Un crédito fiscal del 50${NBSP}% para tus clientes`,
        text: `La pequeña jardinería pagada a una empresa declarada en servicios a domicilio da derecho al cliente a un crédito fiscal del 50${NBSP}% de sus gastos, con un límite de 5000${NBSP}€ al año por hogar. El recuadro del contrato lo recuerda, sin garantizar que cada prestación sea elegible.`,
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2024',
        title: 'Los residuos verdes, separados en origen',
        text: `Todos los profesionales separan sus biorresiduos en origen, residuos verdes incluidos, y quemar residuos verdes está prohibido (multa de 750${NBSP}€). El presupuesto y el contrato prevén una línea de retirada hacia un circuito de separación, incluida o facturada aparte.`,
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de presupuesto de paisajista: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de presupuesto de paisajista es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué IVA se aplica en un presupuesto de paisajista en Francia?',
        answer: `20${NBSP}% para la creación y el mantenimiento de jardines, las plantaciones y la pequeña jardinería. 10${NBSP}% para algunas obras anexas a una vivienda terminada hace más de 2 años (muro de cerramiento salvo setos vivos, portal, reforma de una terraza de obra, murete, camino de acceso principal), siempre que el cliente certifique esas condiciones en el presupuesto. Caseta, invernadero, pérgola, estanque, iluminación y piscina se quedan al 20${NBSP}%. La plantilla prevé los dos tipos por línea, el total por tipo y la casilla de certificación.`,
      },
      {
        question: `¿El contrato de mantenimiento da derecho al crédito fiscal del 50${NBSP}%?`,
        answer: `Solo si tu empresa está declarada en servicios a domicilio en Francia y para las prestaciones elegibles: mantenimiento habitual, poda de setos y árboles, desbroce. La creación de jardines, la poda en altura y los movimientos de tierra no entran. El contrato lleva tu n.º de declaración, marca cada prestación sí / no y recuerda el certificado fiscal que debes entregar antes del 31 de marzo; en servicios a domicilio, el presupuesto es además obligatorio y gratuito desde 100${NBSP}€ con IVA al mes.`,
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Devis», escribes la cantidad, el precio unitario sin IVA y el tipo de IVA de cada línea (10 o 20${NBSP}%, el Excel rechaza los demás). El total sin IVA de la línea, el total sin IVA, el IVA por tipo, el total con IVA y el anticipo se calculan solos. En la hoja «Contrat d’entretien», el número de visitas y el precio por visita dan el total anual de cada prestación, el importe anual sin y con IVA, la mensualidad en 12 meses y la parte de las prestaciones marcadas «oui» en servicios a domicilio. Las dos hojas se imprimen en una página A4.`,
      },
      {
        question: '¿Se pueden prever fitosanitarios en el contrato?',
        answer:
          'En casa de un particular en Francia, no: desde el 1 de julio de 2022, los productos fitosanitarios están prohibidos en las propiedades privadas de uso residencial y sus espacios exteriores, salvo los productos de biocontrol, de bajo riesgo o autorizados en agricultura ecológica. Donde siguen permitidos, su uso profesional exige el Certiphyto. El contrato contiene esta cláusula, y el desherbado está previsto manual.',
      },
      {
        question: '¿Y cuando los presupuestos y los contratos se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos presupuestos y contratos al mes. Más allá, los programas franceses para paisajistas (Robbin, Extrabat Paysage, Paysagio) recogen tus obras, tus plantas y las visitas de tus contratos desde 19${NBSP}€ sin IVA al mes. Si tu organización sale de su marco (varios equipos, horas por obra, certificados fiscales), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los presupuestos, los contratos de mantenimiento y las visitas del año se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para paisajistas',
  },
}
