import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'
import { NBSP } from '~/core/constants/typography'

export const CARPENTRY_QUIZ_WORDING_ES: DibodevTradeQuizWording = {
  numberLocale: 'es-ES',
  quizName: '¿Qué software para tu carpintería?',
  questions: [
    {
      id: 'team',
      title: '¿Cuántos sois, taller e instaladores incluidos?',
      helpText: 'Carpinteros de taller, instaladores, oficina y tú incluido.',
      leadMessageLabel: 'Equipo',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'persona', icon: null },
        { id: '2-4', label: '2 a 4', unit: 'personas', icon: null },
        { id: '5-10', label: '5 a 10', unit: 'personas', icon: null },
        { id: '10+', label: '+ de 10', unit: 'personas', icon: null },
      ],
    },
    {
      id: 'sites',
      title: '¿Cuántos talleres, almacenes o delegaciones?',
      helpText: 'Cada dirección desde la que salen tus equipos, sin contar tus obras.',
      leadMessageLabel: 'Talleres y delegaciones',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'dirección', icon: null },
        { id: '2-3', label: '2 o 3', unit: 'direcciones', icon: null },
        { id: '4+', label: '4 y +', unit: 'direcciones', icon: null },
      ],
    },
    {
      id: 'scope',
      title: '¿A qué te dedicas?',
      helpText: '',
      leadMessageLabel: 'Oficios',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'windows', label: 'Instalación de ventanas, puertas y persianas', unit: '', icon: 'Truck' },
        { id: 'fittings', label: 'Interiorismo y mobiliario a medida', unit: '', icon: 'Armchair' },
        { id: 'kitchens', label: 'Cocinas, como instalador independiente', unit: '', icon: 'Flame' },
        {
          id: 'joinery',
          label: 'Carpintería de madera, escaleras y ebanistería, fabricadas en el taller',
          unit: '',
          icon: 'Wrench',
        },
      ],
    },
    {
      id: 'pains',
      title: '¿Qué te quita más tiempo?',
      helpText: '',
      leadMessageLabel: 'Lo que quita tiempo',
      display: 'list',
      selection: 'multiple',
      maxSelected: 3,
      options: [
        { id: 'quotes', label: 'Hacer los presupuestos y calcular las variantes', unit: '', icon: null },
        { id: 'measurements', label: 'Tomar las medidas y pasarlas al presupuesto', unit: '', icon: null },
        {
          id: 'suppliers',
          label: 'Buscar las tarifas de los fabricantes y hacer los pedidos',
          unit: '',
          icon: null,
        },
        { id: 'cuttingLists', label: 'Preparar las hojas de despiece y los planes de corte', unit: '', icon: null },
        { id: 'planning', label: 'Organizar el taller y las instalaciones', unit: '', icon: null },
        { id: 'jobCosting', label: 'Saber si una obra ha sido rentable', unit: '', icon: null },
        {
          id: 'invoices',
          label: 'Facturar los anticipos y las certificaciones, reclamar los impagos',
          unit: '',
          icon: null,
        },
        { id: 'snags', label: 'Seguir las reservas después de la instalación', unit: '', icon: null },
      ],
    },
    {
      id: 'current',
      title: '¿Ya usas un programa de gestión?',
      helpText: '',
      leadMessageLabel: 'Programa actual',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No, papel, Excel y la libreta de medidas', unit: '', icon: 'FileSpreadsheet' },
        {
          id: 'unfit',
          label: 'Sí, pero encaja mal con nuestro oficio, o nuestras herramientas no se comunican',
          unit: '',
          icon: 'AlertCircle',
        },
        { id: 'fit', label: 'Sí, y nos va bien', unit: '', icon: 'CheckCircle' },
      ],
    },
    {
      id: 'priority',
      title: '¿Qué es lo que más te importa?',
      helpText: '',
      leadMessageLabel: 'Prioridad',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'budget', label: 'Empezar rápido, con poco presupuesto', unit: '', icon: 'Zap' },
        {
          id: 'simple',
          label: 'Una herramienta sencilla, tanto para el taller como para los instaladores',
          unit: '',
          icon: 'Smile',
        },
        {
          id: 'rules',
          label: 'Una herramienta que una nuestros presupuestos, despieces y horas',
          unit: '',
          icon: 'SlidersHorizontal',
        },
        {
          id: 'ownership',
          label: 'Dejar de depender de una suscripción y conservar nuestros datos',
          unit: '',
          icon: 'KeyRound',
        },
      ],
    },
  ],
  conjunction: 'y',
  priceRangeTemplate: `{min} a {max}${NBSP}€`,
  weeksRangeTemplate: '{min} a {max} semanas',
  recapTeamWords: {
    '1': 'una sola persona',
    '2-4': '2 a 4 personas',
    '5-10': '5 a 10 personas',
    '10+': 'más de 10 personas',
  },
  recapSitesWords: {
    '1': 'un solo taller o almacén',
    '2-3': '2 o 3 talleres o almacenes',
    '4+': 'al menos 4 talleres o almacenes',
  },
  recapScopeWords: {
    windows: 'instalación de ventanas',
    fittings: 'interiorismo',
    kitchens: 'cocinas',
    joinery: 'carpintería de taller',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    quotes: 'los presupuestos',
    measurements: 'las mediciones',
    suppliers: 'las tarifas y los pedidos a proveedores',
    cuttingLists: 'las hojas de despiece',
    planning: 'la planificación del taller y de las instalaciones',
    jobCosting: 'el margen de cada obra',
    invoices: 'las facturas y las reclamaciones de pago',
    snags: 'las reservas tras la instalación',
  },
  features: {
    quotes:
      'Presupuestos en pocos clics a partir de las mediciones, con tus partidas, tus variantes, tus tarifas horarias de taller y de instalación, y la mención del IVA del cliente',
    measurements: 'Las medidas tomadas en la obra, registradas en el móvil, que rellenan directamente el presupuesto',
    suppliers:
      'Las tarifas de tus fabricantes y proveedores usadas en los presupuestos, y cada pedido seguido hasta la entrega',
    cuttingLists:
      'La hoja de despiece y el plan de corte sacados del presupuesto aceptado, con las creces, la merma y los retales reutilizables',
    planning:
      'La planificación del taller y de las instalaciones, visible para cada carpintero e instalador en su móvil',
    jobCosting:
      'El margen de cada obra: el material comprado y las horas de taller y de instalación, comparados con el presupuesto',
    invoices:
      'Las facturas de anticipo, de certificación y final sacadas del presupuesto, con reclamación de impagos y listas para la factura electrónica francesa',
    snags:
      'El acta de recepción firmada en la obra, las reservas seguidas hasta su levantamiento y la fecha de inicio de las garantías',
    withdrawal:
      'Los contratos firmados en casa del cliente seguidos día a día: plazo de desistimiento de 14 días, y ningún anticipo pedido antes de que terminen los 7 primeros días',
    cadLink:
      'La lista de despiece exportada por tu programa de diseño, reutilizada en el presupuesto, la hoja de taller y el pedido de tableros',
    variants:
      'Presupuestos con variantes (frentes, encimera, electrodomésticos), y luego el pedido de cada elemento seguido hasta la instalación',
    machineRates:
      'Una tarifa horaria por máquina y el tiempo de taller de cada pieza, para un precio de coste lo más justo posible',
    multiSite: 'La planificación y los pedidos de cada taller o almacén, y los equipos prestados de uno a otro',
  },
  checks: {
    primary:
      '¿El presupuesto aceptado se convierte en hoja de despiece, pedido, planificación de instalación y luego factura, sin volver a teclear nada?',
    quotes:
      '¿Se puede calcular una variante (madera, PVC, aluminio) en el mismo presupuesto, con la mención del IVA del cliente?',
    measurements: '¿Se pueden registrar las mediciones en la obra, en el móvil o la tableta, incluso sin cobertura?',
    suppliers: '¿Se importan las tarifas de tus fabricantes, y cada cuánto se actualizan?',
    cuttingLists: '¿El programa saca una hoja de despiece, o la exporta a tu optimizador de corte?',
    planning: '¿Se ve en la misma planificación la carga del taller y las instalaciones de cada equipo?',
    jobCosting: '¿Se puede comparar, obra por obra, el presupuesto con las compras y las horas realmente trabajadas?',
    invoices: '¿Gestiona los anticipos, las certificaciones y la factura electrónica francesa (Factur-X)?',
    snags: '¿Se puede firmar el acta de recepción en la obra y seguir el levantamiento de las reservas?',
    withdrawal:
      '¿El presupuesto firmado fuera del establecimiento prevé el desistimiento de 14 días, y el anticipo espera a que terminen los 7 primeros días?',
    cadLink:
      '¿El programa reutiliza la lista de despiece de tu CAD (SketchUp, PolyBoard, Aléker…) sin volver a teclearla?',
    variants: '¿Se pueden presentar varias variantes al cliente y luego pedir a cada proveedor la versión elegida?',
    machineRates: '¿Se puede fijar una tarifa horaria por máquina y seguir el tiempo de taller por pieza?',
    export: '¿Puedes exportar tus datos (clientes, partidas, obras, facturas) si cambias de programa?',
  },
  market: {
    eyebrow: 'Presupuesto a prever',
    priceRange: `14 a 129${NBSP}€`,
    priceSuffix: 'al mes, según el editor y el número de usuarios',
    priceExamples: [
      { label: 'Obat', value: `39 a 129${NBSP}€ sin IVA/mes` },
      { label: 'Batappli', value: `39 o 79${NBSP}€ sin IVA/mes` },
      { label: 'ProDevis START', value: `75${NBSP}€ sin IVA/mes` },
      { label: 'Anodos', value: `14 a 73${NBSP}€/mes` },
    ],
    footnote: `Precios sin IVA, salvo en Anodos (sin precisar si con o sin IVA). Sage Batigest Connect cuesta 36,08 a 122,25${NBSP}€ sin IVA al mes, el CAD Aléker una licencia de 3590${NBSP}€ sin IVA más 79 a 169${NBSP}€ sin IVA al mes. EBP Bâtiment, HerculePro, Cabinet Vision y Codial van bajo presupuesto.`,
    footnoteLink: { label: 'Ver todos los precios', href: '#programas' },
    adviceTitle: 'Comprobar antes de elegir',
    disclaimer: 'Precios públicos consultados el 1 de noviembre de 2026.',
    ctaLabel: 'Pedir una opinión gratuita',
    leadFormTitle: 'Una opinión gratuita para elegir tu programa',
    leadFormIntro:
      'Te respondo en 24 horas para hablarlo, por teléfono o videollamada. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudget: `Programa del mercado, 14 a 129${NBSP}€ al mes`,
  },
  project: {
    eyebrow: 'Orden de precio, a precio cerrado',
    durationLabel: 'Plazo',
    maintenanceLabel: 'Mantenimiento',
    maintenanceValue: `100 a 300${NBSP}€/mes`,
    complementFootnote: 'Pagado una sola vez, además de tu suscripción actual.',
    customFootnote: 'Pagado una sola vez: la herramienta y su código son tuyos.',
    adviceTitle: 'A prever primero',
    disclaimer: 'Resultado orientativo. El precio definitivo se fija en el presupuesto.',
    ctaLabel: 'Recibir mi estimación',
    leadFormTitle: 'Recibir mi estimación detallada',
    leadFormIntro:
      'Te respondo en 24 horas con primeras ideas y un presupuesto más preciso. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudgetTemplate: '{range} ({kind})',
    complementKind: 'complemento a medida',
    customKind: 'herramienta a medida',
  },
  results: {
    custom: {
      title: 'Una herramienta a medida para tu carpintería',
      explanation:
        'Con tu tamaño, tus partidas, tus variantes y tus instalaciones, los programas del mercado te obligan a hacer malabares entre el CAD, el programa de presupuestos y la hoja de horas. Una herramienta diseñada para ti une las mediciones, el presupuesto, la hoja de despiece, las horas de taller y de instalación y el margen de cada obra, y es tuya. Tu CAD, los catálogos de tus fabricantes y tu contabilidad se quedan donde están, conectados a la herramienta.',
    },
    complement: {
      title: 'Conserva tu programa, añade un complemento a medida',
      explanation:
        'Tu programa hace el trabajo básico, no hace falta cambiarlo. Una pequeña herramienta conectada a él puede resolver lo que todavía te quita tiempo{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Un programa del mercado te basta',
      explanation: `Si trabajas solo, un programa de presupuestos de obra por menos de 40${NBSP}€ sin IVA al mes cubre lo esencial: presupuestos, biblioteca de partidas, anticipos y facturas. Si tus presupuestos salen de las tarifas de los fabricantes, mira mejor un programa de presupuestos con tarifas de fabricantes; si dibujas tus muebles, un CAD con despiece. Una herramienta a medida no sería rentable.`,
      keepCurrentSentence: ' Si el tuyo te va bien, consérvalo.',
    },
    market: {
      title: 'Un programa del mercado te basta por ahora',
      explanation:
        'Con tu tamaño, los programas de construcción y de carpintería cubren lo esencial: presupuestos, pedidos, planificación de las instalaciones y facturas. Elígelo según de dónde salen tus presupuestos (tarifas de los fabricantes, mediciones o plano 3D). Una herramienta a medida te costaría más de lo que te haría ganar hoy.',
      unfitSentence: ' Si el tuyo no te convence, compara dos o tres con los puntos de abajo antes de cambiar.',
    },
  },
}
