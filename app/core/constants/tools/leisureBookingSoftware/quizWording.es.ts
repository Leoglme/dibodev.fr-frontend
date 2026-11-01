import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'
import { NBSP } from '~/core/constants/typography'

export const LEISURE_BOOKING_QUIZ_WORDING_ES: DibodevTradeQuizWording = {
  numberLocale: 'es-ES',
  quizName: '¿Qué software de reservas para tus actividades de ocio?',
  questions: [
    {
      id: 'team',
      title: '¿Cuántos monitores en temporada alta?',
      helpText: 'Monitores, guías y game masters, tú incluido.',
      leadMessageLabel: 'Monitores',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'monitor', icon: null },
        { id: '2-4', label: '2 a 4', unit: 'monitores', icon: null },
        { id: '5-10', label: '5 a 10', unit: 'monitores', icon: null },
        { id: '10+', label: '+ de 10', unit: 'monitores', icon: null },
      ],
    },
    {
      id: 'sites',
      title: '¿En cuántos sitios o bases?',
      helpText: 'Cada parque, base náutica, sala o centro donde recibes al público.',
      leadMessageLabel: 'Sitios',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'sitio', icon: null },
        { id: '2-3', label: '2 o 3', unit: 'sitios', icon: null },
        { id: '4+', label: '4 y +', unit: 'sitios', icon: null },
      ],
    },
    {
      id: 'scope',
      title: '¿Qué actividades ofreces?',
      helpText: '',
      leadMessageLabel: 'Actividades',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'aerial', label: 'Circuitos en los árboles, tirolinas, parque de aventura', unit: '', icon: 'Sprout' },
        { id: 'games', label: 'Escape room, laser tag, paintball', unit: '', icon: 'KeyRound' },
        { id: 'water', label: 'Piragüismo, kayak, paddle surf, vela, base náutica', unit: '', icon: 'Droplets' },
        { id: 'equestrian', label: 'Centro ecuestre, rutas a caballo', unit: '', icon: 'MapPin' },
        { id: 'rental', label: 'Karting, alquiler de bicicletas o barcos por días', unit: '', icon: 'Bike' },
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
        { id: 'weather', label: 'Anular, aplazar y reembolsar cuando el tiempo se complica', unit: '', icon: null },
        { id: 'overbooking', label: 'Evitar reservas dobles entre teléfono, web y plataformas', unit: '', icon: null },
        { id: 'staffing', label: 'Planificar a los monitores y el material', unit: '', icon: null },
        { id: 'payments', label: 'Seguir los anticipos, los saldos y la caja in situ', unit: '', icon: null },
        {
          id: 'paperwork',
          label: 'Hacer firmar declaraciones, autorizaciones de los padres y briefings',
          unit: '',
          icon: null,
        },
        { id: 'commissions', label: 'Pagar las comisiones de plataformas y programas', unit: '', icon: null },
        { id: 'vouchers', label: 'Vender y seguir los bonos regalo', unit: '', icon: null },
        { id: 'equipment', label: 'Seguir las revisiones del material y de los EPI', unit: '', icon: null },
      ],
    },
    {
      id: 'current',
      title: '¿Cómo tomas las reservas hoy?',
      helpText: '',
      leadMessageLabel: 'Herramienta actual',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'Por teléfono, en un cuaderno o en Excel', unit: '', icon: 'FileSpreadsheet' },
        {
          id: 'unfit',
          label: 'Con un programa que no encaja (comisiones, temporada, monitores)',
          unit: '',
          icon: 'AlertCircle',
        },
        { id: 'fit', label: 'Con un programa que nos va bien', unit: '', icon: 'CheckCircle' },
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
        { id: 'simple', label: 'Una herramienta sencilla para la recepción y los monitores', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'Una herramienta que siga nuestras reglas (cursillos, material, tiempo, IVA)',
          unit: '',
          icon: 'SlidersHorizontal',
        },
        {
          id: 'ownership',
          label: 'Dejar de pagar comisiones y conservar nuestros datos',
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
    '1': 'un solo monitor',
    '2-4': '2 a 4 monitores',
    '5-10': '5 a 10 monitores',
    '10+': 'más de 10 monitores',
  },
  recapSitesWords: { '1': 'un solo sitio', '2-3': '2 o 3 sitios', '4+': '4 sitios o más' },
  recapScopeWords: {
    aerial: 'circuitos en los árboles',
    games: 'escape room',
    water: 'actividades náuticas',
    equestrian: 'equitación',
    rental: 'alquiler (karting, bicicletas, barcos)',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    weather: 'las anulaciones por el tiempo',
    overbooking: 'las reservas dobles',
    staffing: 'la planificación de monitores y material',
    payments: 'los anticipos y los saldos',
    paperwork: 'las declaraciones y los briefings',
    commissions: 'las comisiones',
    vouchers: 'los bonos regalo',
    equipment: 'las revisiones del material',
  },
  features: {
    weather:
      'El aplazamiento, el vale o el reembolso de toda una franja en pocos clics, con un mensaje enviado a cada inscrito',
    overbooking:
      'Disponibilidad en tiempo real, compartida entre tu web, el teléfono y las plataformas, sin reservas dobles',
    staffing:
      'La planificación de los monitores y del material, franja por franja, con las horas y los honorarios de cada uno',
    payments: 'Las arras cobradas online, el saldo pagado in situ y la caja del día cuadrada con las reservas',
    paperwork:
      'Declaraciones, autorizaciones de los padres y consignas firmadas online antes de la actividad, adjuntas a cada reserva',
    commissions:
      'La reserva en tu propia web, sin comisión, y las plataformas conectadas solo donde te aportan clientes',
    vouchers: 'Los bonos regalo vendidos online, con su código, su fecha de validez y su uso en la recepción',
    equipment:
      'La ficha de cada equipo (número de serie, última y próxima revisión) y un aviso antes de cada vencimiento',
    ppeChecks:
      'Los EPI (arneses, cabos de anclaje, poleas) con su fecha de caducidad, y cada revisión periódica del circuito registrada',
    roomSlots:
      'Franjas por sala o por terreno, con el tiempo de preparación entre dos grupos y la planificación de los game masters',
    swimmingCertificate: `La declaración «saber nadar 25${NBSP}m» de cada participante, firmada por un padre para un menor, y el cierre de una franja cuando el tiempo o el agua lo exigen`,
    vatPerService: `Un tipo de IVA por prestación (5,5${NBSP}% para algunas actividades ecuestres) y paquetes facturados al tipo correcto`,
    deposits: 'La fianza de cada alquiler, cobrada a la salida y devuelta a la vuelta, con el estado del material',
    multiSite:
      'La planificación, las franjas y el material de cada sitio, y los monitores prestados de una base a otra',
  },
  checks: {
    primary: '¿Una reserva tomada por teléfono bloquea al instante la plaza en tu web y en las plataformas?',
    weather: '¿Se puede aplazar o reembolsar toda una franja de una vez, con un mensaje a cada inscrito?',
    overbooking: '¿La disponibilidad se sincroniza en tiempo real con las plataformas (GetYourGuide, Viator…)?',
    staffing: '¿La planificación asigna un monitor y material a cada franja, con sus horas?',
    payments: '¿Se pueden cobrar arras online y el saldo in situ, con una caja segura?',
    paperwork: '¿Las declaraciones y las autorizaciones de los padres se firman online, antes de la actividad?',
    commissions: '¿Cuánto te costará una temporada completa, comisiones y gastos de pago incluidos?',
    vouchers: '¿Los bonos regalo se venden online y se validan en la recepción?',
    equipment: '¿El programa registra las revisiones del material y avisa antes del vencimiento?',
    ppeChecks: '¿Se pueden registrar las revisiones periódicas del circuito y la caducidad de los EPI?',
    roomSlots: '¿Una sala puede bloquearse por franja, sea cual sea el canal de reserva?',
    swimmingCertificate:
      '¿Se puede adjuntar a la reserva la declaración de saber nadar, firmada por un padre para un menor?',
    vatPerService: `¿El programa aplica un tipo de IVA por prestación, 5,5, 10 o 20${NBSP}%?`,
    deposits: '¿El programa gestiona las fianzas de los alquileres, cobradas a la salida y devueltas a la vuelta?',
    export: '¿Puedes exportar tus datos (clientes, reservas, pagos, bonos regalo) si cambias de programa?',
  },
  market: {
    eyebrow: 'Presupuesto a prever',
    priceRange: `0 a 249${NBSP}€`,
    priceSuffix: 'al mes, a menudo más una comisión sobre las reservas online',
    priceExamples: [
      { label: 'Bookeo', value: `desde 29,95${NBSP}€/mes` },
      { label: 'Activiteez', value: `desde 19${NBSP}€ sin IVA/mes + 2${NBSP}%` },
      { label: 'Booky', value: `49 a 149${NBSP}€ sin IVA/mes` },
      { label: 'Yoplanning', value: `19 a 59${NBSP}€/mes + 2,5${NBSP}%` },
    ],
    footnote: `Bookeo y Booky no cobran comisión. Tourbiz va de 0 a 249${NBSP}€ sin IVA al mes más un 0,8 a 0,99${NBSP}%, Regiondo cuesta 59 o 99${NBSP}€ al mes más una comisión que no publica, MyEscapeBoard 30${NBSP}€ sin IVA por sala. Guidap, Qweekle, OuiRésa y FareHarbor van bajo presupuesto.`,
    footnoteLink: { label: 'Ver todos los precios', href: '#programas' },
    adviceTitle: 'Comprobar antes de elegir',
    disclaimer: 'Precios públicos consultados el 1 de noviembre de 2026.',
    ctaLabel: 'Pedir una opinión gratuita',
    leadFormTitle: 'Una opinión gratuita para elegir tu programa',
    leadFormIntro:
      'Te respondo en 24 horas para hablarlo, por teléfono o videollamada. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudget: `Programa del mercado, 0 a 249${NBSP}€ al mes, comisiones aparte`,
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
      title: 'Una herramienta de reservas a medida para tus actividades',
      explanation:
        'Con tu tamaño y tus propias reglas (franjas, monitores, material, tiempo, IVA por actividad), los programas del mercado te obligan a adaptarte a ellos, y a menudo se quedan una parte de cada reserva. Una herramienta diseñada para ti sigue tu organización, no cobra comisión sobre tus ventas y es tuya. Los pagos pasan por Stripe, tu contabilidad se queda en tu programa.',
    },
    complement: {
      title: 'Conserva tu programa, añade un complemento a medida',
      explanation:
        'Tu programa hace el trabajo básico, no hace falta cambiarlo. Una pequeña herramienta conectada a él puede resolver lo que todavía te quita tiempo{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Un programa del mercado te basta',
      explanation: `Si eres el único monitor, un programa de reservas de unos 30${NBSP}€ al mes, o un plan gratuito con comisión, cubre lo esencial: franjas, pago online y bonos regalo. Una herramienta a medida no sería rentable.`,
      keepCurrentSentence: ' Si el tuyo te va bien, consérvalo.',
    },
    market: {
      title: 'Un programa del mercado te basta por ahora',
      explanation:
        'Con tu tamaño, los programas de reservas del mercado cubren lo esencial: franjas, pago online, planificación de los monitores, bonos regalo y venta en las plataformas. Una herramienta a medida te costaría más de lo que te haría ganar hoy; mira sobre todo lo que cuesta cada uno en una temporada, comisiones incluidas.',
      unfitSentence: ' Si el tuyo no te convence, compara dos o tres con los puntos de abajo antes de cambiar.',
    },
  },
}
