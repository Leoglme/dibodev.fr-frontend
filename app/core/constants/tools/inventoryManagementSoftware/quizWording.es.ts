import type { DibodevTradeQuizWording } from '~/core/types/DibodevTradeSoftwareQuiz'
import { NBSP } from '~/core/constants/typography'

export const INVENTORY_MANAGEMENT_QUIZ_WORDING_ES: DibodevTradeQuizWording = {
  numberLocale: 'es-ES',
  quizName: '¿Qué software para gestionar tu stock?',
  questions: [
    {
      id: 'team',
      title: '¿Cuántas personas tocan el stock?',
      helpText: 'Las que reciben, dan salida, cuentan o piden artículos, tú incluido.',
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
      title: '¿En cuántos almacenes?',
      helpText: 'Reserva, taller, tienda, almacén, furgoneta: cada sitio donde duerme stock.',
      leadMessageLabel: 'Almacenes',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: '1', label: '1', unit: 'almacén', icon: null },
        { id: '2-3', label: '2 o 3', unit: 'almacenes', icon: null },
        { id: '4+', label: '4 y +', unit: 'almacenes', icon: null },
      ],
    },
    {
      id: 'scope',
      title: '¿Qué almacenas?',
      helpText: '',
      leadMessageLabel: 'Lo que se almacena',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'goods', label: 'Mercancías para revender (tienda, distribución)', unit: '', icon: 'Store' },
        { id: 'parts', label: 'Piezas y consumibles (taller, obra)', unit: '', icon: 'Wrench' },
        { id: 'rental', label: 'Material alquilado o prestado, que vuelve', unit: '', icon: 'Truck' },
        { id: 'perishable', label: 'Productos con fecha de caducidad o por lotes', unit: '', icon: 'Snowflake' },
        { id: 'serialized', label: 'Equipos con número de serie', unit: '', icon: 'Laptop' },
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
        { id: 'counting', label: 'Contar y recontar: el inventario nunca cuadra', unit: '', icon: null },
        { id: 'receiving', label: 'Recibir las entregas y conciliar albaranes y facturas', unit: '', icon: null },
        { id: 'alerts', label: 'Detectar las roturas de stock y el exceso a tiempo', unit: '', icon: null },
        { id: 'transfers', label: 'Saber qué hay en cada almacén o en la furgoneta', unit: '', icon: null },
        { id: 'labels', label: 'Localizar un artículo (etiquetas, referencias, ubicación)', unit: '', icon: null },
        { id: 'valuation', label: 'Sacar el stock valorado para el balance', unit: '', icon: null },
        {
          id: 'retyping',
          label: 'Volver a teclear las salidas en presupuestos, facturas o la tienda',
          unit: '',
          icon: null,
        },
        { id: 'traceability', label: 'Saber quién ha sacado qué, y cuándo', unit: '', icon: null },
      ],
    },
    {
      id: 'current',
      title: '¿Ya usas un programa de stock?',
      helpText: '',
      leadMessageLabel: 'Programa actual',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'none', label: 'No, papel, Excel o de memoria', unit: '', icon: 'FileSpreadsheet' },
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
        {
          id: 'simple',
          label: 'Una herramienta sencilla, en el móvil, para todo el equipo',
          unit: '',
          icon: 'Smartphone',
        },
        {
          id: 'rules',
          label: 'Una herramienta que siga nuestros almacenes, lotes y salidas',
          unit: '',
          icon: 'SlidersHorizontal',
        },
        {
          id: 'ownership',
          label: 'Dejar de pagar por usuario y conservar nuestros datos',
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
  recapSitesWords: { '1': 'un solo almacén', '2-3': '2 o 3 almacenes', '4+': '4 almacenes o más' },
  recapScopeWords: {
    goods: 'mercancías para revender',
    parts: 'piezas y consumibles',
    rental: 'material alquilado',
    perishable: 'productos con fecha de caducidad',
    serialized: 'equipos con número de serie',
  },
  recapScopeTemplate: '{items}',
  complementPainWords: {
    counting: 'el inventario',
    receiving: 'las recepciones',
    alerts: 'las alertas de rotura de stock',
    transfers: 'el stock por almacén',
    labels: 'las etiquetas y el escaneo',
    valuation: 'la valoración del stock',
    retyping: 'volver a teclear las salidas',
    traceability: 'la trazabilidad de los movimientos',
  },
  features: {
    counting:
      'Un inventario rotativo por zona o por almacén: una parte del stock contada cada semana en el móvil, la diferencia corregida y registrada, cada referencia contada al menos una vez al año',
    receiving:
      'La recepción de las entregas desde el pedido: cantidades recibidas, diferencias y litigios, lote o número de serie, ubicación de almacenaje, y luego conciliación con la factura',
    alerts:
      'Un stock mínimo de alerta por referencia y por almacén, y una lista de reposición lista para enviar al proveedor',
    transfers:
      'Una vista por almacén y por ubicación: lo que hay en la reserva, en el taller y en la furgoneta, al día tras cada movimiento',
    labels:
      'Etiquetas QR generadas por la herramienta, leídas con el móvil para dar salida, transferir o contar un artículo, incluso sin cobertura',
    valuation: 'El stock valorado a coste medio ponderado o FIFO en cualquier fecha, listo para el cierre',
    retyping:
      'Las salidas enlazadas con tus presupuestos, tus facturas o tu tienda online: una venta o una obra da salida del stock sin volver a teclear nada',
    traceability:
      'Cada entrada, salida, corrección y transferencia con su autor, su fecha, su almacén y su motivo (venta, rotura, uso personal, uso interno)',
    sales:
      'El stock descontado por cada venta, en tienda o en línea, y el valor de la mercancía en stock en todo momento',
    jobs: 'Las salidas asignadas a una obra o a una orden de reparación, para refacturarlas sin olvidar nada',
    returns:
      'Las salidas con devolución: quién tiene qué material y hasta cuándo, el estado a la vuelta con foto, y la fecha de la próxima inspección (VGP) de cada equipo',
    lots: 'El lote y la fecha de caducidad en cada línea de stock, la salida de los más antiguos primero y un bloqueo al superar la fecha',
    serials: 'Cada unidad seguida por su número de serie, desde la recepción hasta el servicio posventa',
    multiSite:
      'Las transferencias de un almacén a otro registradas, y la reposición de la furgoneta preparada desde la reserva',
  },
  checks: {
    primary:
      '¿El precio es por usuario? Calcula el total para todo tu equipo: cada persona que toca el stock necesita su propia cuenta, si no pierdes al autor del movimiento',
    counting:
      '¿Se puede contar una zona cada vez (inventario rotativo) y corregir la diferencia sin bloquear el resto del stock?',
    receiving: '¿La recepción de una entrega se registra desde el pedido, con las diferencias y los litigios?',
    alerts: '¿Los stocks mínimos de alerta se ajustan por referencia y por almacén?',
    transfers: '¿Se pueden seguir varios almacenes, incluida una furgoneta, en el plan elegido?',
    labels:
      '¿La herramienta genera etiquetas QR o códigos de barras y lee un escaneo con el móvil, sin módulo de pago?',
    valuation: '¿Saca el stock valorado (coste medio o FIFO) en la fecha de cierre?',
    retyping:
      '¿Se conecta a tu facturación o a tu tienda online, para que cada venta dé salida del stock sin volver a teclear nada?',
    traceability: '¿Cada movimiento conserva su autor, su fecha y su almacén, sin cuenta compartida?',
    sales: '¿Una venta en el TPV o en línea descuenta el stock por sí sola?',
    jobs: '¿Se puede asignar una salida a una obra o a una orden de reparación, para refacturarla?',
    returns:
      '¿Gestiona las salidas con devolución (alquiler, préstamo), el estado a la vuelta y la fecha de inspección del material?',
    lots: '¿Gestiona los lotes y las fechas de caducidad por línea de stock, dando salida primero a los más antiguos?',
    serials: '¿Sigue cada unidad por su número de serie, desde la recepción hasta el servicio posventa?',
    export:
      '¿Puedes exportar tus datos (artículos, stock por almacén, movimientos) a Excel o CSV si cambias de programa?',
  },
  market: {
    eyebrow: 'Presupuesto a prever',
    priceRange: `0 a 257${NBSP}€`,
    priceSuffix: 'al mes con pago anual, según el número de usuarios y de almacenes',
    priceExamples: [
      { label: 'Odoo Inventario', value: `0${NBSP}€ para una sola aplicación` },
      { label: 'Zoho Inventory', value: `0 a 249${NBSP}€/mes` },
      { label: 'Monstock', value: `desde 14,90${NBSP}€/mes` },
      { label: 'Erplain', value: `59 a 257${NBSP}€/mes` },
    ],
    footnote: `Monstock añade 9,90 a 38,90${NBSP}€ sin IVA por usuario adicional, Stockpit cuesta 19 a 59${NBSP}€ sin IVA por usuario, DoliCloud 14${NBSP}€ sin IVA por usuario (Dolibarr es libre), Erplain 14${NBSP}€ por usuario adicional. Axonaut empieza en 58,20${NBSP}€ al mes pagando 3 años (97${NBSP}€ mes a mes), Sortly se paga en dólares. Sage 100 y Hector van bajo presupuesto o sin precio publicado.`,
    footnoteLink: { label: 'Ver todos los precios', href: '#programas' },
    adviceTitle: 'Comprobar antes de elegir',
    disclaimer: 'Precios públicos consultados el 1 de noviembre de 2026.',
    ctaLabel: 'Pedir una opinión gratuita',
    leadFormTitle: 'Una opinión gratuita para elegir tu programa',
    leadFormIntro:
      'Te respondo en 24 horas para hablarlo, por teléfono o videollamada. Tus respuestas al test se adjuntan a tu mensaje.',
    leadBudget: `Programa del mercado, 0 a 257${NBSP}€ al mes`,
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
      title: 'Una herramienta a medida para gestionar tu stock',
      explanation:
        'Con tu tamaño y tus propias reglas (almacenes y furgoneta, lotes, devoluciones, números de serie), los programas del mercado te cobran por cada usuario y te obligan a adaptarte a ellos. Una herramienta diseñada para ti sigue tus flujos y es tuya. Tu facturación y tu contabilidad se quedan en tus programas, conectados a la herramienta.',
    },
    complement: {
      title: 'Conserva tu programa, añade un complemento a medida',
      explanation:
        'Tu programa hace el trabajo básico, no hace falta cambiarlo. Una pequeña herramienta conectada a él puede resolver lo que todavía te quita tiempo{pains}.',
      painsTemplate: ': {list}',
    },
    solo: {
      title: 'Un programa del mercado te basta',
      explanation: `Si trabajas solo, un programa de stock gratuito o de menos de 30${NBSP}€ al mes cubre lo esencial: fichas de producto, entradas y salidas, alertas de stock mínimo, inventario. Una herramienta a medida no sería rentable.`,
      keepCurrentSentence: ' Si el tuyo te va bien, consérvalo.',
    },
    market: {
      title: 'Un programa del mercado te basta por ahora',
      explanation:
        'Con tu tamaño, los programas de stock del mercado cubren lo esencial: fichas de producto, movimientos, alertas de stock mínimo, inventarios, y varios almacenes en los planes intermedios. Una herramienta a medida te costaría más de lo que te haría ganar hoy.',
      unfitSentence: ' Si el tuyo no te convence, compara dos o tres con los puntos de abajo antes de cambiar.',
    },
  },
}
