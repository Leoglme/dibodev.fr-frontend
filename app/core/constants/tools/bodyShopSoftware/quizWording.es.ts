import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'
import { NBSP } from '~/core/constants/typography'

export const BODY_SHOP_QUIZ_WORDING_ES: DibodevTradeQuizWording = {
  numberLocale: 'es-ES',
  quizName: '¿Qué software para tu taller de carrocería?',
  questions: [
    {
      id: 'team',
      title: '¿Cuántas personas trabajan en el taller?',
      helpText: 'Chapistas, pintores, recepcionista, oficina y tú incluido.',
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
      title: '¿En cuántos talleres?',
      helpText: 'Cada centro con su recepción, su nave o su cabina de pintura.',
      leadMessageLabel: 'Talleres',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'taller', icon: null },
        { id: '2-3', label: '2 o 3', unit: 'talleres', icon: null },
        { id: '4+', label: '4 y +', unit: 'talleres', icon: null },
      ],
    },
    {
      id: 'scope',
      title: '¿De dónde vienen tus expedientes?',
      helpText: '',
      leadMessageLabel: 'Expedientes',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        {
          id: 'insurance',
          label: 'Siniestros cubiertos por una aseguradora, con perito',
          unit: '',
          icon: 'ShieldCheck',
        },
        { id: 'direct', label: 'Clientes que pagan ellos mismos, sin seguro', unit: '', icon: 'Car' },
        { id: 'fleet', label: 'Flotas, empresas de alquiler, concesionarios y profesionales', unit: '', icon: 'Truck' },
        { id: 'glass', label: 'Rotura de lunas y cristales', unit: '', icon: 'Star' },
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
        {
          id: 'estimates',
          label: 'Valorar y volver a teclear la valoración en el presupuesto y la orden',
          unit: '',
          icon: null,
        },
        {
          id: 'experts',
          label: 'Reclamar a los peritos y esperar la conformidad de la aseguradora',
          unit: '',
          icon: null,
        },
        {
          id: 'photos',
          label: 'Fotos en recepción, inventario de daños y peritación a distancia',
          unit: '',
          icon: null,
        },
        { id: 'parts', label: 'Piezas pendientes y vehículos parados', unit: '', icon: null },
        { id: 'booth', label: 'Planificación del taller y de la cabina de pintura', unit: '', icon: null },
        {
          id: 'loanCars',
          label: 'Vehículos de cortesía: contratos, inventarios de estado, disponibilidad',
          unit: '',
          icon: null,
        },
        {
          id: 'invoicing',
          label: 'Facturar a la aseguradora y al cliente (franquicia, cesión de crédito) y reclamar',
          unit: '',
          icon: null,
        },
        {
          id: 'history',
          label: 'Registrar la elección de piezas reutilizadas y recuperar el historial de un expediente',
          unit: '',
          icon: null,
        },
      ],
    },
    {
      id: 'current',
      title: '¿Ya usas un programa de taller?',
      helpText: '',
      leadMessageLabel: 'Programa actual',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No: papel, Excel o solo el valorador', unit: '', icon: 'FileSpreadsheet' },
        { id: 'unfit', label: 'Sí, pero no encaja con nuestra forma de trabajar', unit: '', icon: 'AlertCircle' },
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
        { id: 'simple', label: 'Una herramienta sencilla para el taller y la recepción', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'Una herramienta que siga nuestros expedientes, aseguradoras y cabina',
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
  recapSitesWords: { '1': 'un solo taller', '2-3': '2 o 3 talleres', '4+': '4 talleres o más' },
  recapScopeWords: {
    insurance: 'siniestros de seguro',
    direct: 'clientes sin seguro',
    fleet: 'flotas y profesionales',
    glass: 'rotura de lunas',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    estimates: 'la valoración',
    experts: 'el seguimiento de los peritos',
    photos: 'las fotos y la peritación a distancia',
    parts: 'las piezas pendientes',
    booth: 'la planificación de la cabina',
    loanCars: 'los vehículos de cortesía',
    invoicing: 'la facturación aseguradora / cliente',
    history: 'el historial de los expedientes',
  },
  features: {
    estimates:
      'La valoración importada del valorador (Sidexa, GT Estimate, DAT) al presupuesto y a la orden de reparación, sin volver a teclear, con las tarifas de chapa y pintura del taller',
    experts:
      'El cuadro de mando de los expedientes: valoración enviada, conformidad del perito, importe aprobado y diferencia, con un recordatorio programado cuando la conformidad se retrasa',
    photos:
      'Las fotos del vehículo con fecha y hora en recepción, vinculadas al expediente y listas para enviar al perito para una peritación a distancia',
    parts:
      'Las piezas pedidas, recibidas o pendientes por expediente, y un aviso por cada vehículo parado más allá del plazo que fijes',
    booth:
      'La planificación del taller y de la cabina por franja (aparejo, base, barniz), que agrupa los pases y muestra la carga de la semana',
    loanCars:
      'El registro de vehículos de cortesía: contrato, inventarios de estado a la entrega y a la devolución, kilometraje, disponibilidad e información al cliente sobre el seguro',
    invoicing:
      'La factura dividida entre la parte de la aseguradora y la del cliente (franquicia, depreciación), la cesión de crédito adjunta, el saldo pendiente por aseguradora y los recordatorios',
    history:
      'La elección del cliente sobre las piezas reutilizadas conservada con cada presupuesto (2 años en Francia), y todo el historial de un expediente localizado por matrícula',
    claimFlow:
      'El circuito del siniestro por etapas (declaración, fotos, valoración, conformidad, trabajos, entrega, pago) y la libre elección del reparador recordada en el presupuesto',
    directQuotes:
      'El presupuesto sin seguro con anticipo, firma en línea y plazo de inmovilización, para los clientes que pagan ellos mismos',
    fleetBilling:
      'Las cuentas de flotas y alquiler: varios vehículos por cliente, órdenes de compra, facturación mensual e interlocutor por empresa',
    glassClaims:
      'Los expedientes de rotura de lunas aparte: cristal libre de derechos de diseño, cobertura con o sin franquicia, factura a la aseguradora',
    multiSite:
      'El seguimiento de cada taller, y los vehículos o expedientes trasladados de un taller a otro según la carga de la cabina',
  },
  checks: {
    primary:
      '¿La valoración pasa del valorador al presupuesto, a la orden y a la factura sin volver a teclear, y la conformidad del perito vuelve al expediente?',
    estimates: '¿El programa se conecta con tu valorador (Sidexa, GT Estimate, DAT), y a qué precio?',
    experts: '¿Se ven de un vistazo los expedientes a la espera de conformidad, y desde hace cuántos días?',
    photos: '¿Las fotos tomadas en recepción llevan fecha y hora y van vinculadas al expediente?',
    parts: '¿Se pueden seguir las piezas pedidas y pendientes por expediente, con la fecha anunciada?',
    booth: '¿La planificación muestra la cabina por franja, con los vehículos a la espera de piezas?',
    loanCars: '¿El programa gestiona los vehículos de cortesía (contrato, inventario de estado, disponibilidad)?',
    invoicing:
      '¿Se puede facturar por separado la parte de la aseguradora y la del cliente, y seguir el saldo pendiente de cada aseguradora?',
    history: '¿La elección del cliente sobre las piezas reutilizadas se conserva con el presupuesto?',
    claimFlow: '¿El programa es socio de Darva, y la suscripción a Darva está incluida en el precio?',
    directQuotes: '¿El presupuesto se puede firmar en línea con un anticipo, sin seguro?',
    fleetBilling: '¿Se pueden gestionar varios vehículos y una facturación mensual para un mismo cliente de flota?',
    glassClaims: '¿Los expedientes de rotura de lunas tienen su propio circuito de facturación a la aseguradora?',
    export: '¿Puedes exportar tus datos (clientes, vehículos, expedientes, facturas) si cambias de programa?',
  },
  market: {
    eyebrow: 'Presupuesto a prever',
    priceRange: `18 a 499${NBSP}€`,
    priceSuffix:
      'al mes por el programa de taller, según la oferta y los usuarios; valorador y Darva aparte, bajo presupuesto',
    priceExamples: [
      { label: 'Gest’Garage', value: `19${NBSP}€ con IVA/mes` },
      { label: 'TDV Agent', value: `19,90 a 79${NBSP}€ con IVA/mes` },
      { label: 'AutoProGestion', value: `29 o 59${NBSP}€ sin IVA/mes` },
      { label: 'WinMotor Next', value: `desde 68${NBSP}€ sin IVA/mes` },
    ],
    footnote: `Kwixéo cuesta 22 a 89${NBSP}€ sin IVA al mes (18,33 a 74,17${NBSP}€ el primer año pagando el año), ProGarage 99 a 499${NBSP}€ sin IVA al mes. EBP MéCa PRO con su módulo de carrocería, Fiducial, Repair Soft, Cilea y 3Dsoft van bajo presupuesto, igual que los valoradores Sidexa, GT Estimate y DAT; el acceso a Darva se contrata aparte.`,
    footnoteLink: { label: 'Ver todos los precios', href: '#programas' },
    adviceTitle: 'Comprobar antes de elegir',
    disclaimer: 'Precios públicos consultados el 1 de noviembre de 2026.',
    ctaLabel: 'Pedir una opinión gratuita',
    leadFormTitle: 'Una opinión gratuita para elegir tu programa',
    leadFormIntro:
      'Te respondo en 24 horas para hablarlo, por teléfono o videollamada. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudget: `Programa del mercado, 18 a 499${NBSP}€ al mes`,
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
      title: 'Una herramienta a medida para tu taller de carrocería',
      explanation:
        'Con tu tamaño y tu propio circuito (aseguradoras, peritos, cabina, vehículos de cortesía, varios talleres), los programas del mercado te obligan a adaptarte a ellos. Una herramienta diseñada para ti sigue cada expediente desde la recepción hasta el pago de la aseguradora, y es tuya. Tu valorador, Darva y tu contabilidad se quedan donde están, conectados a la herramienta.',
    },
    complement: {
      title: 'Conserva tu programa, añade un complemento a medida',
      explanation:
        'Tu programa de taller y tu valorador hacen el trabajo básico, no hace falta cambiarlos. Una pequeña herramienta conectada a ellos puede resolver lo que todavía te quita tiempo{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Un programa del mercado te basta',
      explanation: `Si trabajas solo, un programa de taller de unos 20 a 60${NBSP}€ al mes cubre lo esencial: presupuestos, órdenes de reparación, fotos y facturas. Si tus expedientes pasan por las aseguradoras, añade un valorador. Una herramienta a medida no sería rentable.`,
      keepCurrentSentence: ' Si el tuyo te va bien, consérvalo.',
    },
    market: {
      title: 'Un programa del mercado te basta por ahora',
      explanation:
        'Con tu tamaño, un programa de taller y, si tus expedientes pasan por las aseguradoras, un DMS con módulo de carrocería conectado a Darva cubren lo esencial: valoración, fotos, conformidad del perito, facturas a la aseguradora y al cliente. Una herramienta a medida te costaría más de lo que te haría ganar hoy.',
      unfitSentence: ' Si el tuyo no te convence, compara dos o tres con los puntos de abajo antes de cambiar.',
    },
  },
}
