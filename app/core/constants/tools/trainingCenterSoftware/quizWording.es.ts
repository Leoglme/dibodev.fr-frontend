import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'
import { NBSP } from '~/core/constants/typography'

export const TRAINING_CENTER_QUIZ_WORDING_ES: DibodevTradeQuizWording = {
  numberLocale: 'es-ES',
  quizName: '¿Qué software para tus formaciones y tus clases?',
  questions: [
    {
      id: 'team',
      title: '¿Cuántas personas dan las clases o las formaciones?',
      helpText: 'Formadores, profesores e intervinientes habituales, tú incluido.',
      leadMessageLabel: 'Equipo docente',
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
      title: '¿En cuántos lugares das tus clases?',
      helpText:
        'Centros, aulas o locales donde recibes a tus alumnos. La formación a distancia cuenta como un lugar, las clases a domicilio también.',
      leadMessageLabel: 'Lugares de clase',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'lugar', icon: null },
        { id: '2-3', label: '2 o 3', unit: 'lugares', icon: null },
        { id: '4+', label: '4 y +', unit: 'lugares', icon: null },
      ],
    },
    {
      id: 'scope',
      title: '¿Quién paga tus clases?',
      helpText: 'Es lo que decide qué normas francesas se te aplican.',
      leadMessageLabel: 'Quién paga',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        {
          id: 'cpf',
          label: 'El CPF (la cuenta personal de formación francesa), vía Mon Compte Formation',
          unit: '',
          icon: 'Laptop',
        },
        {
          id: 'funders',
          label: 'Un OPCO (operador que financia la formación de los empleados), France Travail o empresas',
          unit: '',
          icon: 'ClipboardCheck',
        },
        {
          id: 'families',
          label: 'Familias, con el crédito fiscal francés de los servicios a domicilio',
          unit: '',
          icon: 'Armchair',
        },
        { id: 'members', label: 'Alumnos o socios sin ayuda: música, danza, idiomas', unit: '', icon: 'Speaker' },
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
        { id: 'planning', label: 'Hacer el horario de las clases, los profesores y las aulas', unit: '', icon: null },
        { id: 'attendance', label: 'Recoger las firmas de asistencia y seguir las presencias', unit: '', icon: null },
        {
          id: 'quality',
          label: 'Reunir las pruebas de Qualiopi (la certificación de calidad) y preparar el BPF anual',
          unit: '',
          icon: null,
        },
        { id: 'agreements', label: 'Redactar los convenios y contratos de formación', unit: '', icon: null },
        {
          id: 'invoicing',
          label: 'Facturar, gestionar el anticipo inmediato y los certificados fiscales',
          unit: '',
          icon: null,
        },
        { id: 'hours', label: 'Seguir las horas y los bonos de cada alumno', unit: '', icon: null },
        { id: 'enrolment', label: 'Gestionar las inscripciones y las reinscripciones', unit: '', icon: null },
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
        { id: 'none', label: 'No, papel, Excel o una agenda compartida', unit: '', icon: 'FileSpreadsheet' },
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
        { id: 'simple', label: 'Una herramienta sencilla para los profesores y la recepción', unit: '', icon: 'Smile' },
        {
          id: 'rules',
          label: 'Una herramienta que siga nuestros bonos, financiadores y actividades',
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
    '1': 'una sola persona que enseña',
    '2-4': '2 a 4 formadores o profesores',
    '5-10': '5 a 10 formadores o profesores',
    '10+': 'más de 10 formadores o profesores',
  },
  recapSitesWords: { '1': 'un solo lugar de clase', '2-3': '2 o 3 lugares de clase', '4+': '4 lugares de clase o más' },
  recapScopeWords: {
    cpf: 'el CPF',
    funders: 'financiadores (OPCO, France Travail, empresas)',
    families: 'familias',
    members: 'alumnos o socios',
  },
  recapScopeTemplate: 'clases pagadas por {items}',
  complementPainWords: {
    planning: 'el horario',
    attendance: 'las firmas de asistencia',
    quality: 'las pruebas de Qualiopi y el BPF',
    agreements: 'los convenios y contratos',
    invoicing: 'la facturación',
    hours: 'el seguimiento de las horas',
    enrolment: 'las inscripciones',
  },
  features: {
    planning:
      'El horario de las clases por profesor y por aula, sin reservas dobles, con un sustituto propuesto cuando falta un profesor',
    attendance:
      'La asistencia de cada clase o de cada media jornada firmada en línea por el alumno, con las ausencias y los retrasos anotados',
    quality:
      'Las pruebas de Qualiopi ordenadas por indicador, y el BPF prerrellenado a partir de las horas realmente impartidas',
    agreements:
      'Los convenios y contratos preparados a partir de la inscripción, con sus menciones obligatorias y el plazo de desistimiento de 10 días de los particulares',
    invoicing:
      'Las facturas preparadas a partir de las horas impartidas, sin volver a teclear nada, con la reclamación de impagos',
    hours: `El bono de cada alumno (horas compradas, impartidas y restantes), con un aviso cuando quedan menos de 2${NBSP}horas`,
    enrolment:
      'Las inscripciones y reinscripciones en línea, la lista de espera y los documentos que hay que aportar, como el certificado médico en danza',
    edof: 'Tus expedientes CPF seguidos paso a paso, desde la inscripción en EDOF (la plataforma del CPF para los centros) hasta la factura, junto a tus demás financiaciones',
    fundingProofs:
      'Para cada OPCO o empresa, el expediente de la sesión listo para enviar: convenio, hojas de firmas, certificado de realización y factura',
    immediateAdvance:
      'El anticipo inmediato del crédito fiscal mediante la API de la Urssaf, y el certificado fiscal anual de cada familia',
    familyBilling:
      'Las tarifas familiares, las facturas trimestrales o por temporada y las domiciliaciones, de una temporada a otra',
    multiSite: 'El horario de cada lugar de clase, y los profesores o formadores que pasan de un centro a otro',
  },
  checks: {
    primary:
      '¿La asistencia anotada en cada clase alimenta las horas, la factura y, para la formación, el BPF, sin volver a teclear nada?',
    planning: '¿Se puede sustituir a un profesor ausente viendo qué compañeros y qué aulas están libres?',
    attendance: '¿La asistencia se firma en línea, por clase o por media jornada, con la firma del formador?',
    quality:
      '¿El programa sigue el nuevo referencial Qualiopi de 33 indicadores, vigente desde el 1 de noviembre de 2026?',
    agreements:
      '¿Los convenios y contratos recogen las menciones obligatorias, incluido el plazo de desistimiento de 10 días?',
    invoicing: `¿Cada factura lleva el IVA correcto según la actividad (formación exenta, refuerzo escolar al 10${NBSP}%)?`,
    hours: '¿Se ve el saldo de horas de cada alumno, con un aviso antes de que se acabe su bono?',
    enrolment: '¿Los alumnos o las familias pueden inscribirse y reinscribirse en línea?',
    edof: `¿El programa exporta a EDOF, o hace falta otra suscripción, como Wedof (desde 49${NBSP}€ sin IVA al mes)?`,
    fundingProofs:
      '¿Se puede sacar, para cada financiador, el convenio, las hojas de firmas y el certificado de realización de una sesión?',
    immediateAdvance:
      '¿El programa es compatible con la API Tiers de prestation de la Urssaf, para el anticipo inmediato del crédito fiscal?',
    familyBilling: '¿Gestiona las tarifas familiares, las domiciliaciones y la reinscripción de una temporada a otra?',
    export: '¿Puedes exportar tus datos (alumnos, sesiones, asistencias, horas) si cambias de programa?',
  },
  market: {
    eyebrow: 'Presupuesto a prever',
    priceRange: `39 a 225${NBSP}€`,
    priceSuffix: 'sin IVA al mes para una oferta de entrada, según el editor',
    priceExamples: [
      { label: 'Digiforma', value: `desde 49${NBSP}€/mes` },
      { label: 'Dendreo', value: `desde 225${NBSP}€/mes` },
      { label: 'Platformeasy', value: `desde 39${NBSP}€/mes` },
      { label: 'MyScol', value: `desde 84${NBSP}€/mes` },
    ],
    footnote: `Digiforma: 49${NBSP}€ sin IVA con compromiso anual, 59${NBSP}€ sin él. Dendreo añade una puesta en marcha desde 1490${NBSP}€ sin IVA. hop3team empieza en 39${NBSP}€ sin IVA al mes pagando el año, Edusign (solo firmas de asistencia) en 29${NBSP}€ al mes pagando el año, y Kadrella tiene una oferta gratuita. Alcuin, Belami y Ogust (Standard y Entreprise) van bajo presupuesto.`,
    footnoteLink: { label: 'Ver todos los precios', href: '#programas' },
    adviceTitle: 'Comprobar antes de elegir',
    disclaimer: 'Precios públicos consultados el 1 de noviembre de 2026.',
    ctaLabel: 'Pedir una opinión gratuita',
    leadFormTitle: 'Una opinión gratuita para elegir tu programa',
    leadFormIntro:
      'Te respondo en 24 horas para hablarlo, por teléfono o videollamada. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudget: `Programa del mercado, 39 a 225${NBSP}€ sin IVA al mes`,
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
      title: 'Una herramienta a medida para tus formaciones y tus clases',
      explanation:
        'Con tu tamaño, y sobre todo si estás a caballo entre dos mundos (formación financiada y refuerzo escolar, por ejemplo), los programas del mercado te obligan a adaptarte a ellos, a veces a pagar dos. Una herramienta diseñada para ti sigue tus bonos, tus financiadores y tus lugares, y es tuya. Tu contabilidad se queda en tu programa, conectado a la herramienta.',
    },
    complement: {
      title: 'Conserva tu programa, añade un complemento a medida',
      explanation:
        'Tu programa hace el trabajo básico, no hace falta cambiarlo. Una pequeña herramienta conectada a él puede resolver lo que todavía te quita tiempo{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Un programa del mercado te basta',
      explanation: `Si trabajas solo, una oferta desde 39${NBSP}€ sin IVA al mes cubre lo esencial: hop3team para la formación (BPF, presupuestos, facturas), Platformeasy para el refuerzo escolar (anticipo inmediato, certificados fiscales). Una herramienta a medida no sería rentable.`,
      keepCurrentSentence: ' Si el tuyo te va bien, consérvalo.',
    },
    market: {
      title: 'Un programa del mercado te basta por ahora',
      explanation:
        'Con tu tamaño, los programas del mercado cubren lo esencial: horario, firmas de asistencia, facturas, BPF para la formación, anticipo inmediato para el refuerzo escolar. Elígelo en el mundo correcto: ningún programa de formación consultado menciona el anticipo inmediato, y ningún programa de refuerzo escolar consultado menciona el BPF.',
      unfitSentence: ' Si el tuyo no te convence, compara dos o tres con los puntos de abajo antes de cambiar.',
    },
  },
}
