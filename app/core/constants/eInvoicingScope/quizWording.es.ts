import type { DibodevEInvoicingScopeQuizWording } from '~/core/types/DibodevEInvoicingScopeQuiz'

export const E_INVOICING_SCOPE_QUIZ_WORDING_ES: DibodevEInvoicingScopeQuizWording = {
  quizName: 'Factura electrónica en Francia: ¿me afecta, y desde cuándo?',
  questions: [
    {
      id: 'status',
      title: '¿Quién eres?',
      helpText: 'El caso que más se parece al tuyo, en Francia.',
      leadMessageLabel: 'Estatus',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'micro', label: 'Microempresario (auto-entrepreneur)', unit: '', icon: 'Laptop' },
        { id: 'company', label: 'Sociedad o empresario individual en régimen real', unit: '', icon: 'Store' },
        { id: 'liberal', label: 'Profesión liberal (salud, derecho, consultoría…)', unit: '', icon: 'ClipboardCheck' },
        {
          id: 'landlord',
          label: 'Arrendador de vivienda amueblada sin servicios (LMNP, LMP)',
          unit: '',
          icon: 'KeyRound',
        },
        {
          id: 'landlordHotel',
          label: 'Arrendador de vivienda amueblada con servicios hoteleros',
          unit: '',
          icon: 'Armchair',
        },
        { id: 'association', label: 'Asociación', unit: '', icon: 'Flag' },
      ],
    },
    {
      id: 'vat',
      title: '¿Y el IVA?',
      helpText: 'Mira una de tus facturas o recibos de alquiler si dudas.',
      leadMessageLabel: 'IVA',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'collects', label: 'Cobro el IVA a mis clientes', unit: '', icon: null },
        {
          id: 'franchise',
          label: 'Estoy en franquicia de IVA (mención «TVA non applicable, art. 293 B» en mis facturas)',
          unit: '',
          icon: null,
        },
        {
          id: 'exempt',
          label: 'Todas mis operaciones están exentas de IVA (salud, enseñanza, alquiler sin servicios…)',
          unit: '',
          icon: null,
        },
        {
          id: 'outOfScope',
          label: 'No tengo ninguna actividad sujeta al IVA (actividad no lucrativa, fuera del ámbito)',
          unit: '',
          icon: null,
        },
        { id: 'unsure', label: 'No lo sé', unit: '', icon: null },
      ],
    },
    {
      id: 'size',
      title: 'El tamaño de tu estructura',
      helpText: 'Una pyme tiene menos de 250 empleados y como máximo 50 M€ de facturación o 43 M€ de balance.',
      leadMessageLabel: 'Tamaño',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'small', label: 'Menos de 250', unit: 'empleados, facturación inferior a 50 M€', icon: null },
        { id: 'large', label: '250 o más', unit: 'empleados, o facturación de 50 M€ o más', icon: null },
      ],
    },
    {
      id: 'customers',
      title: '¿A quién vendes?',
      helpText: 'Varias respuestas posibles.',
      leadMessageLabel: 'Clientes',
      display: 'list',
      selection: 'multiple',
      maxSelected: null,
      options: [
        {
          id: 'businesses',
          label: 'A profesionales establecidos en Francia (empresas, autónomos, asociaciones)',
          unit: '',
          icon: null,
        },
        { id: 'consumers', label: 'A particulares', unit: '', icon: null },
        { id: 'abroad', label: 'A clientes establecidos en el extranjero', unit: '', icon: null },
        { id: 'public', label: 'Al Estado, a entidades locales o a hospitales', unit: '', icon: null },
        { id: 'none', label: 'A nadie por ahora, o no emito facturas', unit: '', icon: null },
      ],
    },
    {
      id: 'tool',
      title: '¿Cómo haces tus facturas hoy?',
      helpText: '',
      leadMessageLabel: 'Herramienta de facturación',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'software', label: 'Un programa de facturación o de contabilidad', unit: '', icon: 'Monitor' },
        { id: 'trade', label: 'Un software de gestión o una herramienta propia', unit: '', icon: 'SlidersHorizontal' },
        { id: 'office', label: 'Excel, Word, una plantilla PDF o papel', unit: '', icon: 'FileSpreadsheet' },
        { id: 'none', label: 'No hago facturas', unit: '', icon: 'XCircle' },
      ],
    },
  ],
  verdicts: {
    outOfScope: {
      title: 'En principio, no te afecta',
      explanation:
        'La reforma se dirige a las empresas establecidas en Francia y sujetas al IVA. Una actividad totalmente fuera del ámbito del IVA (una asociación sin actividad lucrativa, por ejemplo) no tiene facturas electrónicas que recibir, ni que emitir, ni e-reporting. Comprueba de todos modos que sea tu caso: un número SIREN no te convierte en sujeto pasivo, pero la más mínima actividad económica regular puede hacerlo.',
      headline: 'No te afecta',
      headlineSuffix: 'mientras toda tu actividad quede fuera del ámbito del IVA',
      receptionValue: 'no',
      issuingValue: 'no',
      reportingValue: 'no',
      platformValue: 'ninguna que designar',
      issuingDateWords: '',
      ctaLabel: 'Hacer mi pregunta',
      leadBudget: 'Pregunta sobre el ámbito',
    },
    receiveOnly: {
      title: 'Recibir, sí; emitir, no',
      explanation:
        'Tus operaciones están exentas de IVA, pero sigues siendo sujeto pasivo como destinatario: desde el 1 de septiembre de 2026 debes poder recibir las facturas electrónicas de tus proveedores franceses a través de una plataforma homologada. No tienes facturas electrónicas que emitir ni e-reporting que enviar, mientras tu actividad siga totalmente exenta.',
      headline: '1 sept. 2026',
      headlineSuffix: 'recepción ya obligatoria; nada que emitir',
      receptionValue: 'desde sept. 2026',
      issuingValue: 'no',
      reportingValue: 'no',
      platformValue: 'por designar',
      issuingDateWords: '',
      ctaLabel: 'Que me acompañen',
      leadBudget: 'Solo recepción',
    },
    smallBusiness: {
      title: 'Te afecta: recepción desde 2026, emisión en 2027',
      explanation:
        'Estás sujeto al IVA y entras en la categoría de microempresas y pymes. Desde el 1 de septiembre de 2026 debes poder recibir las facturas electrónicas de tus proveedores a través de una plataforma homologada. A partir del 1 de septiembre de 2027, tus facturas a profesionales establecidos en Francia también tendrán que salir por una, y tus ventas a particulares o al extranjero se declararán por e-reporting.',
      headline: '1 sept. 2027',
      headlineSuffix: 'emisión y e-reporting; recepción obligatoria desde el 1 de septiembre de 2026',
      receptionValue: 'desde sept. 2026',
      issuingValue: 'sept. 2027',
      reportingValue: 'sept. 2027',
      platformValue: 'por designar',
      issuingDateWords: '1 de septiembre de 2027',
      ctaLabel: 'Que me acompañen',
      leadBudget: 'Pyme, emisión en 2027',
    },
    largeBusiness: {
      title: 'Te afecta: todo está ya en vigor',
      explanation:
        'Con 250 empleados o más, o 50 M€ de facturación o más, eres una empresa de tamaño intermedio o una gran empresa: recepción, emisión y e-reporting son obligatorios desde el 1 de septiembre de 2026. En 2026 no se aplica ninguna sanción a una empresa con dificultades reales que haya iniciado el proceso, pero no es ni un aplazamiento ni una suspensión.',
      headline: 'Ya en vigor',
      headlineSuffix: 'recepción, emisión y e-reporting desde el 1 de septiembre de 2026',
      receptionValue: 'desde sept. 2026',
      issuingValue: 'desde sept. 2026',
      reportingValue: 'desde sept. 2026',
      platformValue: 'obligatoria',
      issuingDateWords: '1 de septiembre de 2026',
      ctaLabel: 'Que me acompañen',
      leadBudget: 'Empresa intermedia o grande, ya en vigor',
    },
  },
  cardEyebrow: 'Tus plazos',
  receptionLabel: 'Recibir',
  issuingLabel: 'Emitir',
  reportingLabel: 'E-reporting',
  platformLabel: 'Plataforma homologada',
  cardFootnote:
    'Fechas fijadas por la ley de presupuestos francesa para 2024 y confirmadas sin aplazamiento. En 2026 no se aplica ninguna sanción a una empresa que haya iniciado el proceso.',
  cardFootnoteLinkLabel: 'Ver el calendario',
  cardFootnoteLinkHref: '#calendario',
  adviceTitle: 'Lo que haría en tu lugar',
  advice: {
    vatUnsure:
      'Comprueba tu régimen de IVA en una factura reciente: una línea de IVA significa que lo cobras; la mención «TVA non applicable, art. 293 B» significa franquicia; ninguna de las dos, probablemente exento. Este resultado supone el caso más habitual para tu estatus.',
    outOfScopeDoubt:
      'Una empresa o un autónomo casi siempre es sujeto pasivo del IVA, aunque no lo cobre. Si vendes algo con regularidad, repite el test con tu régimen real, o pregunta a tu contable.',
    associationActivity:
      'A una asociación solo le afectan sus actividades lucrativas sujetas al IVA (bar, tienda, servicios facturados a empresas). Si las tienes, repite el test indicando ese régimen.',
    landlordServices:
      'Si ofreces al menos tres servicios hoteleros (desayuno, limpieza regular, ropa de cama, recepción), tu alquiler pasa a estar gravado: las facturas a profesionales pasarán por una plataforma homologada, desde el 1 de septiembre de 2027 para una estructura pequeña.',
    exemptMixed:
      'Si una parte de tu actividad está gravada (venta de productos, formaciones no exentas, servicios accesorios), las facturas de esa parte siguen el calendario de emisión: 1 de septiembre de 2027 para una estructura pequeña, ya en vigor para una empresa intermedia.',
    businessCustomers:
      'Tus facturas a profesionales establecidos en Francia tendrán que salir por una plataforma homologada a partir del {issuingDate}: tu programa debe estar homologado o conectado a una plataforma.',
    consumerCustomers:
      'Sin factura electrónica para un particular: esas ventas se declararán a la administración por e-reporting a partir del {issuingDate}, a través de la misma plataforma.',
    abroadCustomers:
      'Las ventas a clientes establecidos en el extranjero no dan lugar a una factura electrónica, sino a un e-reporting a partir del {issuingDate}.',
    publicCustomers:
      'Para el Estado, las entidades locales y los hospitales, Chorus Pro sigue siendo el canal; la plataforma homologada sirve para tus clientes privados.',
    noInvoices:
      'Mientras no emitas ninguna factura, solo cuenta la recepción: designa una plataforma homologada y comprueba tu dirección en el directorio.',
    softwareTool:
      'Comprueba que tu programa es una plataforma homologada o está conectado a una (verificador bajo el test), y activa la recepción con la cuenta del representante legal.',
    tradeTool:
      'Un software de gestión o una herramienta propia no se convierte en plataforma: se conecta a una plataforma homologada que recibe y emite por él. Es lo que hago para mis clientes, a distancia.',
    officeTool:
      'Excel, Word o el papel ni hacen ni reciben facturas electrónicas: designa una plataforma homologada con oferta gratuita para la recepción, y luego una herramienta que emita antes del {issuingDate}.',
    officeToolReceive:
      'Excel, Word o el papel no reciben facturas electrónicas: designa una plataforma homologada con oferta gratuita, con eso basta para la recepción.',
    noTool:
      'Aunque no tengas facturas que hacer, designa una plataforma homologada para recibir las de tus proveedores, y comprueba tu dirección en el directorio.',
    directory:
      'Comprueba en el directorio que tu SIREN tiene una dirección de recepción activa, y luego pide a un proveedor que te envíe una factura por ese canal.',
  },
  summaryTemplate: '{status}, {vat}, {size}, clientes: {customers}; facturas: {tool}.',
  statusWords: {
    micro: 'Microempresario',
    company: 'Sociedad o empresario individual',
    liberal: 'Profesión liberal',
    landlord: 'Arrendador de vivienda amueblada sin servicios',
    landlordHotel: 'Arrendador de vivienda amueblada con servicios hoteleros',
    association: 'Asociación',
  },
  vatWords: {
    collects: 'que cobra el IVA',
    franchise: 'en franquicia de IVA',
    exempt: 'totalmente exento de IVA',
    outOfScope: 'fuera del ámbito del IVA',
    unsure: 'régimen de IVA por confirmar',
  },
  sizeWords: {
    small: 'menos de 250 empleados',
    large: '250 empleados o más (o 50 M€ de facturación)',
  },
  customerWords: {
    businesses: 'profesionales en Francia',
    consumers: 'particulares',
    abroad: 'clientes en el extranjero',
    public: 'el sector público',
    none: 'nadie por ahora',
  },
  customersNoneWord: 'ningún cliente indicado',
  toolWords: {
    software: 'un programa de facturación',
    trade: 'un software de gestión o una herramienta propia',
    office: 'Excel, Word o papel',
    none: 'ninguna factura',
  },
  conjunction: 'y',
  disclaimer:
    'Resultado basado en tus respuestas y en las normas francesas vigentes a 25 de octubre de 2026. No sustituye la opinión de tu contable sobre tu régimen de IVA.',
  leadFormTitle: 'Cuéntame en qué punto estás',
  leadFormIntro:
    'Tu programa, tu actividad, lo que te bloquea: te respondo en 24 h con los pasos a seguir, y un presupuesto solo si hay que conectar una herramienta.',
}
