import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageShared'
import {
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Seguimiento de siniestro de carrocería: plantilla gratis',
    description:
      'Seguimiento de siniestro de carrocería: plantilla francesa gratis en Excel y PDF, con presupuesto. Piezas de reutilización, parte del seguro. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de hoja de seguimiento de siniestro y de presupuesto para carrocerías',
  },
  breadcrumbLabel: 'Seguimiento de siniestro',
  shareImage: {
    titleLines: ['Seguimiento de siniestro', 'de carrocería gratis'],
    highlight: 'Seguimiento de siniestro',
    subtitle:
      'Hoja de seguimiento de siniestro y presupuesto en Excel y PDF, fotos, piezas de reutilización, parte del seguro',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Seguimiento de siniestro de carrocería gratis, plantilla francesa: hoja de seguimiento y presupuesto con reportaje fotográfico en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Seguimiento de siniestro de carrocería',
    titleAfter: ': plantilla francesa gratis (+ presupuesto)',
    reassurances: [
      'Hoja de seguimiento de siniestro + presupuesto',
      'Excel con totales y plazos calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un presupuesto de carrocería y una hoja de seguimiento de siniestro listos para rellenar, escritos en francés para el mercado francés, para un carrocero autónomo o un pequeño taller independiente de chapa y pintura. El presupuesto lleva las tarifas de chapa y pintura, el inventario de daños foto a foto, la naturaleza de cada pieza, la parte de la aseguradora y la del cliente. La hoja sigue el expediente desde la entrada del vehículo hasta el pago de la aseguradora: perito, piezas, cabina, vehículo de cortesía, factura, recordatorios.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del taller, de las piezas reutilizadas, de la libre elección del reparador y de la peritación para que las menciones estén al día.',
    updatedAt: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para carroceros y talleres independientes de chapa y pintura que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y plazos calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu taller. No sustituye ni la valoración normalizada que pide el perito ni el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un presupuesto y una hoja de seguimiento de siniestro, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con los totales, las partes de la aseguradora y del cliente, la diferencia presupuesto / conformidad y los días de inmovilización calculados, y añade una tercera hoja: la planificación de la cabina y el registro de vehículos de cortesía.',
    documents: [
      {
        title: 'Presupuesto de carrocería',
        format: 'Página 1 del PDF, hoja «Devis carrosserie» del Excel',
        items: [
          `Cabecera del taller (nombre, dirección, SIREN, n.º de IVA o «IVA no aplicable»), n.º de presupuesto, fecha, fecha de validez, y las tarifas horarias de chapa, pintura y mecánica expuestas con IVA con el método de cálculo; el Excel toma las tarifas sin IVA, el IVA al 20${NBSP}% por defecto, y calcula las tarifas con IVA`,
          'Cliente y vehículo (nombre, teléfono, e-mail, matrícula, VIN, marca y modelo, kilometraje, primera matriculación, código de pintura) y siniestro: fecha, aseguradora, n.º de póliza, n.º de siniestro, franquicia anunciada, perito o gabinete, peritación en el taller o a distancia, libre elección del reparador recordada al cliente',
          'Inventario de daños en seis líneas: n.º de foto, zona, daño, reparar o sustituir, pieza reutilizada propuesta (sí, no o excepción con su motivo)',
          'Líneas de valoración: descripción, zona, naturaleza de la pieza (nueva, reutilizada, calidad equivalente, intercambio estándar), cantidad, precio unitario sin IVA, horas de chapa, horas de pintura, materiales de pintura, total sin IVA',
          `Totales: piezas, mano de obra de chapa y pintura (horas × tarifa), materiales de pintura y pequeños suministros, total sin IVA, IVA al 20${NBSP}%, total con IVA, parte de la aseguradora, parte del cliente (franquicia, depreciación), cesión de crédito sí / no`,
          'Seis conformidades del cliente para marcar (elección sobre las piezas reutilizadas recogida el, plazo de inmovilización estimado, vehículo de cortesía y sus garantías, cesión de crédito, umbral de aviso para trabajos adicionales, «Bon pour accord»), firmas y menciones legales',
        ],
      },
      {
        title: 'Hoja de seguimiento de siniestro',
        format: 'Página 2 del PDF, hoja «Suivi des sinistres» del Excel (una fila por expediente)',
        items: [
          'N.º de expediente, fecha de entrada del vehículo, cliente, matrícula, aseguradora, n.º de siniestro, perito o gabinete, peritación a distancia o en el taller',
          'Fechas clave: fotos enviadas, presupuesto enviado y su importe, conformidad del perito e importe aprobado, diferencia presupuesto / conformidad (importe aprobado − importe del presupuesto, en rojo en el Excel cuando el perito aprueba menos)',
          'Piezas: referencia, proveedor, pedida el, recibida el, pieza pendiente con la fecha anunciada',
          'Taller: chapa, cabina de pintura, montaje y control, entrega prevista y real, días de inmovilización (entrega real − fecha de entrada, contados hasta hoy en el Excel mientras el vehículo no se devuelve)',
          'Vehículo de cortesía (matrícula, fechas, inventarios de estado a la entrega y a la devolución), factura, parte de la aseguradora, parte del cliente, pago de la aseguradora, recordatorios 1 y 2',
          'Estado del expediente en seis fases, de «a la espera de conformidad» a «pagado, expediente cerrado»; en el Excel, un cuadro de mando cuenta los expedientes abiertos, los que esperan conformidad o piezas, el saldo pendiente de las aseguradoras, la inmovilización media y la ocupación de la cabina',
        ],
      },
      {
        title: 'Planificación de la cabina y registro de vehículos de cortesía',
        format: 'Hoja «Cabine et véhicules de prêt» del Excel solamente, ausente del PDF',
        items: [
          'Planificación de la cabina de pintura en una semana, de lunes a sábado, mañana y tarde: vehículo, n.º de expediente, pintor, fase (aparejo, base, barniz, secado, completo), observación',
          'Tasa de ocupación de la cabina calculada (franjas usadas ÷ 12 franjas disponibles), recogida en el cuadro de mando de la hoja «Suivi des sinistres»',
          'Registro de vehículos de cortesía: matrícula, marca y modelo, seguro (póliza, garantías), cliente, n.º de expediente, fechas, kilometraje a la entrega y a la devolución',
          'Días prestados calculados hasta hoy mientras la fecha de devolución está vacía, inventarios de estado a la entrega y a la devolución (hecho sin reservas, hecho con reservas, por hacer)',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el presupuesto y abrir el expediente en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales, las partes de la aseguradora y del cliente, las diferencias y los plazos se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y tus tarifas horarias',
        description:
          'Rellena la cabecera (nombre, dirección, SIREN, n.º de IVA) y tus tarifas horarias de chapa, pintura y mecánica, tal como están expuestas en la recepción, y guarda el archivo como plantilla. En el Excel, las tarifas se escriben sin IVA y las tarifas con IVA aparecen al lado.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente, el vehículo y el siniestro',
        description:
          'Matrícula, VIN, kilometraje y código de pintura, luego la aseguradora, el n.º de siniestro, la franquicia anunciada, el perito y el tipo de peritación. Anota la fecha en que se recordó al cliente la libre elección del reparador.',
      },
      {
        label: 'Paso 3',
        title: 'El inventario de daños, foto a foto',
        description:
          'Una línea por foto: la zona, el daño, reparar o sustituir, y si se propone una pieza reutilizada. Cuando no se propone para una pieza afectada, anota el motivo de la excepción.',
      },
      {
        label: 'Paso 4',
        title: 'La valoración: piezas, horas, materiales',
        description:
          'Una línea por pieza o por operación, con la naturaleza de la pieza, la cantidad, el precio unitario sin IVA, las horas de chapa y pintura y los materiales de pintura. El Excel multiplica las horas por tus tarifas y calcula el total sin IVA de cada línea.',
      },
      {
        label: 'Paso 5',
        title: 'Las partes, las conformidades del cliente y la firma',
        description:
          'Escribe la franquicia y la depreciación: la parte del cliente y la de la aseguradora siguen. Marca las conformidades (piezas reutilizadas, plazo de inmovilización, vehículo de cortesía, cesión de crédito, umbral de aviso para trabajos adicionales), y el cliente firma con la mención «Bon pour accord».',
      },
      {
        label: 'Paso 6',
        title: 'La hoja de seguimiento, desde la entrada del vehículo',
        description:
          'Abre el expediente con su número y la fecha de entrada, y fecha cada etapa a medida que avanza: fotos y presupuesto enviados, conformidad del perito, piezas, cabina, entrega, factura y pago. En el Excel, una fila por expediente y el estado elegido en la lista.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del carrocero pasan por el presupuesto y la hoja de seguimiento. La plantilla les reserva una casilla, una columna o una mención.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Una tarifa de chapa y una de pintura, cada una expuesta con IVA',
        text: 'Cuando tus tarifas horarias difieren (mecánica, carrocería, pintura), cada una se expone con IVA en el exterior y en la recepción, con el método de cálculo (tiempo empleado o baremo consultable). El presupuesto recoge las tres tarifas y el método de cálculo en la cabecera.',
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de octubre de 2024',
        title: 'La elección del cliente sobre las piezas reutilizadas, registrada y conservada 2 años',
        text: 'Piezas de carrocería desmontables, cristales no pegados, ópticas, tapizados: el cliente elige entre pieza nueva y pieza de economía circular, en un soporte duradero, antes de aceptar el presupuesto. La copia se conserva 2 años. El inventario de daños anota la pieza reutilizada propuesta, y las conformidades del cliente fechan su elección.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Código de seguros, art. L211-5-1',
        title: 'La libre elección del reparador y la cesión de crédito',
        text: 'El asegurado elige a su reparador, y la aseguradora se lo recuerda desde el primer contacto para declarar el siniestro (orden del 17 de junio de 2016). Desde diciembre de 2020, una cláusula que le prohíba cederte su derecho a la indemnización es nula (art. L211-5-2). El presupuesto tiene su casilla «libre elección del reparador recordada al cliente» y su línea «cesión de crédito».',
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'Sin plazo legal para el informe',
        title: 'La aseguradora elige al perito «de media en los 15 días»',
        text: 'La aseguradora elige al perito, de media en los 15 días siguientes a la declaración, y el perito interviene en el taller o sobre fotos para los siniestros leves; ningún texto fija el plazo del informe. No repares antes de su visita, salvo urgencia. La hoja de seguimiento fecha el envío de las fotos y del presupuesto, la conformidad del perito y su recordatorio en fecha fija.',
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de presupuesto de carrocería: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de presupuesto de carrocería es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Cómo repartir la parte de la aseguradora y la parte del cliente?',
        answer:
          'El cliente solo paga su franquicia y la posible depreciación, la aseguradora paga el resto. En el Excel, escribes la franquicia y la depreciación: la parte del cliente las suma, y la parte de la aseguradora es el total con IVA menos esa parte. Si el cliente te cede su derecho a la indemnización (una cláusula de la póliza que lo prohíba es nula desde diciembre de 2020, art. L211-5-2 del código francés de seguros), pon «cesión de crédito» en sí y factura directamente a la aseguradora su parte.',
      },
      {
        question: '¿Hay que proponer una pieza reutilizada en cada línea?',
        answer:
          'No, solo para las categorías que marca el código de consumo francés: piezas de carrocería desmontables, cristales no pegados, ópticas, tapizados. Puedes no proponerla si la pieza no está disponible en un plazo compatible con la inmovilización, si la prestación es gratuita o está en garantía, o si hay riesgo para la seguridad, anotando el motivo. El inventario de daños prevé la columna «sí / no / excepción», y las conformidades del cliente fechan su elección, cuya copia se conserva 2 años.',
      },
      {
        question: '¿Este presupuesto sustituye la valoración que pide el perito?',
        answer:
          'No. Cuando el expediente pasa por una aseguradora, el perito espera una valoración normalizada hecha con un valorador (Sidexa, GT Estimate, DAT…) a partir de los tiempos y las piezas del fabricante. Esta plantilla sirve para el presupuesto entregado al cliente, el inventario foto a foto y el seguimiento del expediente, y lo recuerda en sus menciones. Para un cliente que paga él mismo la reparación, basta.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Escribes tus tarifas horarias sin IVA, luego la cantidad, el precio unitario sin IVA, las horas de chapa y pintura y los materiales de cada línea: el total sin IVA de la línea, los totales, el IVA, el total con IVA y las partes de la aseguradora y del cliente se calculan solos. La hoja «Suivi des sinistres» recoge todos los expedientes, una fila cada uno, y calcula la diferencia presupuesto / conformidad, los días de inmovilización (en rojo más allá de 15 días en un expediente abierto) y el saldo pendiente de las aseguradoras. La hoja «Cabine et véhicules de prêt» calcula la tasa de ocupación de la cabina y los días prestados.',
      },
      {
        question: '¿Y cuando los expedientes se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos expedientes por semana, hasta una treintena de expedientes abiertos a la vez. Más allá, los programas de taller franceses (Gest’Garage, TDV Agent, AutoProGestion) encadenan presupuestos, órdenes de reparación y facturas desde 19${NBSP}€ con IVA al mes, y los DMS con módulo de carrocería (EBP MéCa PRO, Fiducial, Repair Soft), bajo presupuesto, añaden los intercambios Darva y el reparto aseguradora / cliente. Si tu organización sale de su marco, el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando el presupuesto, la hoja de seguimiento, la planificación de la cabina y el registro de préstamos se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu taller: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para talleres de carrocería',
  },
}
