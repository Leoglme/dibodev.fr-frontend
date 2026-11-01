import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BOOKING_SCHEDULE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Planning de reservas: plantilla francesa gratis en Excel',
    description:
      'Planning de reservas de ocio: plantilla francesa gratis en Excel, plazas y saldos calculados, con ficha de inscripción y cuadro de auxilios. Sin registro.',
    inLanguage: 'es',
    schemaAbout:
      'Plantilla francesa de planning de reservas, ficha de inscripción y cuadro de primeros auxilios para actividades de ocio',
  },
  breadcrumbLabel: 'Planning de reservas',
  shareImage: {
    titleLines: ['Planning de reservas', 'plantilla gratis'],
    highlight: 'Planning de reservas',
    subtitle: 'Franjas y anticipos en Excel, ficha de inscripción y cuadro de primeros auxilios en PDF, en francés',
    badge: 'Gratis, sin registro',
    icon: 'tent',
    alt: 'Plantilla francesa de planning de reservas gratis para actividades de ocio: franjas y anticipos en Excel, ficha de inscripción y cuadro de primeros auxilios en PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning de reservas de ocio',
    titleAfter: ': plantilla francesa gratis en Excel (+ ficha de inscripción)',
    reassurances: [
      'Planning + ficha de inscripción + cuadro de auxilios',
      'Excel con plazas y saldos calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un planning de reservas de la temporada, una ficha de inscripción y un cuadro de primeros auxilios listos para rellenar, escritos en francés para las empresas de ocio en Francia: circuito en los árboles, escape room, base náutica, centro ecuestre, karting o alquiler de material de ocio. El Excel sigue las franjas, las reservas y las cantidades pagadas por adelantado, los monitores y las revisiones del material. El PDF se firma en la recepción, con la declaración de saber nadar y la autorización de un padre para un menor, y el cuadro de primeros auxilios se expone en el establecimiento.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En formación dual en Izidoor, de 2023 a 2025, desarrollé la plataforma de reservas de una treintena de estructuras de deporte y ocio, y leí las normas francesas de las arras, los monitores y los primeros auxilios para que las referencias de la plantilla estén al día.',
    updatedAt: BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para circuitos en los árboles, escape rooms, bases náuticas, centros ecuestres, kartings y alquileres de material de ocio que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula las plazas libres, los saldos y los avisos.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 4 hojas, plazas, saldos y avisos calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar con tu federación y tu aseguradora. No sustituye la revisión de tus condiciones de venta por un abogado.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Cuatro hojas de seguimiento en Excel, dos páginas para firmar o exponer en PDF',
    intro:
      'El Excel recoge la temporada en cuatro hojas enlazadas: las franjas, las reservas y los anticipos, los monitores y las revisiones del material. El número de franja y el nombre del monitor hacen el enlace, y las plazas libres, los saldos, las horas y los avisos se calculan en cuanto escribes una línea. El PDF no repite esas hojas: recoge en dos páginas A4 lo que se firma o se expone, la ficha de inscripción y de briefing, y el cuadro de organización de los primeros auxilios.',
    documents: [
      {
        title: 'Planning de las franjas',
        format: 'Hoja «Créneaux» del Excel (1 de 4), sin página en el PDF',
        items: [
          'Temporada o semana, sitio o base, responsable, y una franja por línea en 60 líneas: n.º (C01, C02…), fecha, actividad, inicio y fin en formato hh:mm, duración calculada',
          'Capacidad en plazas, inscritos calculados desde la hoja «Réservations et acomptes» (adultos y niños, sin las reservas anuladas), plazas libres en rojo si bajan de cero, ocupación',
          'Monitor elegido en la lista de la hoja «Moniteurs», material asignado, tiempo de la franja: OK, vigilar o anulada, con su color',
          'Total del periodo (plazas, inscritos, plazas libres, ocupación) y número de franjas anuladas por el tiempo',
        ],
      },
      {
        title: 'Reservas y anticipos',
        format: 'Hoja «Réservations et acomptes» del Excel (2 de 4), sin página en el PDF',
        items: [
          `Tabla de los tres tipos de IVA franceses del ocio al principio de la hoja, 5,5, 10 y 20${NBSP}% con las actividades de cada uno (BOFiP), reutilizada en la lista de la columna IVA`,
          'Una línea por reserva en 150 líneas: reservada el, cliente, teléfono, n.º de franja (la actividad y la fecha se rellenan solas), adultos, niños',
          'Precio con IVA, tipo de IVA, importe sin IVA e IVA calculados, pagado por adelantado, naturaleza (vacío o «Arrhes», si no «Acompte»), saldo por cobrar calculado, forma de pago (tarjeta online, tarjeta in situ, efectivo, cheque, transferencia, bono regalo)',
          `Canal (web, teléfono, in situ, plataforma), comisión en${NBSP}% y en euros calculada, estado (confirmada, anulada por el cliente, anulada por el tiempo, aplazada), cantidad devuelta al cliente y forma de la devolución (reembolso o vale)`,
          'Balance del periodo: facturación con IVA de las reservas no anuladas, arras y anticipos cobrados, saldos por cobrar in situ, comisiones de los canales, reservas anuladas por el tiempo y cantidades devueltas',
        ],
      },
      {
        title: 'Monitores',
        format: 'Hoja «Moniteurs» del Excel (3 de 4), sin página en el PDF',
        items: [
          '15 líneas: monitor (nombre exacto), título o cualificación, n.º de carné profesional, fecha de expedición o de renovación, teléfono',
          'Fin de validez calculado 5 años después de la expedición, y aviso «À jour» (al día), «À renouveler» (renovar) 90 días antes del vencimiento o «Carte expirée» (carné caducado), en naranja o en rojo',
          'Franjas y horas contadas desde la hoja «Créneaux», honorarios por hora escritos, honorarios debidos calculados, totales al final',
          'El nombre escrito aquí alimenta la lista de monitores del planning: una sola grafía, y sus horas se cuentan solas',
        ],
      },
      {
        title: 'Revisiones del material',
        format: 'Hoja «Contrôles du matériel» del Excel (4 de 4), sin página en el PDF',
        items: [
          '40 líneas: equipo o EPI (arnés, cabo, casco, chaleco, kayak, kart…), n.º de serie o de lote, puesta en servicio, organismo o revisor, observaciones',
          'Última revisión, periodicidad en meses (de 1 a 120, la del manual o de tu organismo), próxima revisión calculada',
          'Resultado (conforme, reparar, retirado) y aviso calculado: al día, en menos de 30 días, con retraso; un equipo retirado aparece tachado',
          'Recuento de las revisiones con retraso, y recordatorio del chaleco de 50 newtons como mínimo en piragüismo y kayak',
        ],
      },
      {
        title: 'Ficha de inscripción y de briefing',
        format: 'Página 1 del PDF, una ficha por participante, sin hoja en el Excel',
        items: [
          'Estructura, fecha de la actividad, franja, n.º de reserva, monitor, y el participante: nombre, fecha de nacimiento, teléfono, e-mail, persona a la que avisar en caso de accidente, grupo o acompañante',
          'Actividad que marcar (circuito en los árboles, escape room, piragüismo y kayak, equitación, karting o alquiler, otra), nivel (principiante, ya practicado, experimentado), recorrido o itinerario, puntos que señalar al monitor',
          'Reserva y pago: precio con IVA, pagado por adelantado, naturaleza (arras por defecto o anticipo), saldo por pagar in situ, forma de pago o n.º de bono regalo, reservado por (web, teléfono, plataforma)',
          'Briefing en 6 casillas: consignas de seguridad, equipo entregado y comprobado, recorrido y límites, señal de alerta, condiciones del día, normas del sitio',
          `Declaración «saber nadar 25${NBSP}metros y sumergirse» para el piragüismo, el kayak y la vela, autorización del representante legal para un menor, firmas del participante, del padre y del monitor con su n.º de carné profesional`,
        ],
      },
      {
        title: 'Cuadro de organización de los primeros auxilios',
        format: 'Página 2 del PDF, para exponer en el establecimiento, sin hoja en el Excel',
        items: [
          'Números de emergencia franceses en grande (15, 18, 112), establecimiento (nombre, dirección)',
          'Organización in situ: responsable de los primeros auxilios y sustituto, ubicación del botiquín, del medio de alerta y del desfibrilador, dirección exacta y punto de acceso de los servicios de emergencia, referencia para un sitio exterior, hospital más cercano',
          'Qué hacer en 4 pasos: proteger, alertar, socorrer, avisar (un accidente grave se comunica al prefecto)',
          'Los 6 avisos obligatorios con una casilla «expuesto» y una fecha de actualización: títulos y carnés profesionales, textos de seguridad, certificado del seguro, información sobre la denuncia de la violencia, cuadro de primeros auxilios, precios con IVA de las prestaciones',
          'Documentos que tener a disposición (registro público de accesibilidad, condiciones de venta, mediador de consumo, registro de las revisiones del material), fecha de exposición y firma del responsable',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el planning en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Las plazas libres, los saldos, las horas de los monitores y los avisos se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tu estructura y la temporada',
        description:
          'Rellena la cabecera de cada hoja (nombre, dirección, teléfono), la temporada o la semana, el sitio y el responsable, y guarda el archivo como plantilla. Cada temporada parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'Los monitores primero, luego las franjas',
        description:
          'En «Moniteurs», escribe cada monitor con su carné profesional y su fecha de expedición: el fin de validez y el aviso aparecen. En «Créneaux», una línea por franja con la fecha, la actividad, el inicio, el fin y la capacidad, y el monitor elegido en la lista.',
      },
      {
        label: 'Paso 3',
        title: 'Una línea por reserva',
        description:
          'Cliente, teléfono, n.º de franja (la actividad y la fecha se rellenan solas), adultos y niños, precio con IVA y tipo de IVA. Los inscritos y las plazas libres de la franja se actualizan al momento.',
      },
      {
        label: 'Paso 4',
        title: 'El anticipo, el canal y el estado',
        description: `Anota la cantidad pagada por adelantado y su naturaleza (vacío = arras), la forma de pago, el canal y su comisión en${NBSP}%: el saldo por cobrar y la comisión en euros se calculan. Una reserva puesta en «Annulée météo» sale de los inscritos, su saldo baja a cero, y anotas la cantidad devuelta.`,
      },
      {
        label: 'Paso 5',
        title: 'Las revisiones del material',
        description:
          'Para cada arnés, chaleco, kayak o kart, escribe la última revisión, su periodicidad en meses y su resultado. La próxima revisión se calcula, y el aviso pasa a naranja 30 días antes, a rojo con retraso.',
      },
      {
        label: 'Paso 6',
        title: 'La ficha firmada, el cuadro expuesto',
        description:
          'Imprime una ficha por participante: actividad, nivel, casillas del briefing marcadas sobre la marcha, declaración de saber nadar en piragüismo, kayak y vela, firma del padre para un menor. Rellena el cuadro de primeros auxilios una vez, exponlo y marca los avisos obligatorios.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las referencias que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas de una empresa de ocio pasan por sus reservas, sus fichas y sus avisos. La plantilla les reserva una columna, una casilla o una página.',
    facts: [
      {
        contextLabel: 'Código de consumo, L221-28 y L214-1',
        title: 'Sin desistimiento, y un anticipo que vale como arras',
        text: 'Una actividad de ocio reservada para una fecha concreta no da derecho de desistimiento. Salvo cláusula en contrario, la cantidad pagada por adelantado vale como arras: el cliente que renuncia la pierde, el profesional que se echa atrás la devuelve doblada. La ficha y el Excel anotan la naturaleza de cada cantidad, arras por defecto.',
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, L212-1 y L212-11',
        title: 'Monitores titulados, declarados y con el carné al día',
        text: 'Enseñar o acompañar a cambio de una remuneración exige un título y una declaración ante la administración, que expide el carné profesional, renovable cada 5 años. Una copia del carné y del título de cada monitor se expone en el establecimiento. La hoja «Moniteurs» calcula el fin de validez y avisa 90 días antes.',
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, A322-44 y A322-3-1',
        title: 'Piragüismo: anular cuando el agua o el tiempo lo exigen',
        text: 'El explotador adapta o anula la salida si el tiempo o el estado del agua ponen en peligro a los participantes. En piragüismo, kayak y vela, cada uno declara saber nadar 25 metros y sumergirse (para un menor, firma su representante legal); si no, pasa la prueba Pass-nautique. La ficha lleva la declaración, el planning tiene su columna de tiempo.',
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, R322-4 y R322-5',
        title: 'Un cuadro de primeros auxilios y los avisos obligatorios',
        text: 'El establecimiento tiene un botiquín, un medio de alerta y un cuadro de organización de los primeros auxilios a la vista. También expone las copias de los títulos y carnés, los textos de seguridad, el certificado del seguro y, desde 2025, la información sobre los canales para denunciar la violencia. Todo accidente grave se comunica al prefecto. La página 2 del PDF es ese cuadro, con la lista de avisos que marcar.',
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de planning de reservas: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de planning de reservas es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: 'Anticipo o arras: ¿qué anotar en la ficha y en el Excel?',
        answer:
          'Salvo cláusula en contrario, en Francia una cantidad pagada por adelantado vale como arras: el cliente que renuncia la pierde, el profesional que se echa atrás la devuelve doblada (Código de consumo, L214-1). Una actividad reservada para una fecha concreta no da derecho de desistimiento (L221-28). La plantilla deja por tanto la naturaleza vacía para las arras y te hace marcar «Acompte» solo si tus condiciones de venta lo prevén; el balance del Excel separa las dos. Cuando eres tú quien anula por el tiempo, lo que devuelves depende de tus condiciones de venta: haz que las revise un abogado.',
      },
      {
        question: '¿Qué IVA se aplica a la reserva de una actividad de ocio en Francia?',
        answer: `Depende de la actividad (BOFiP, BOI-TVA-LIQ-30-20-50): 10${NBSP}% para las entradas (circuitos en los árboles, tirolinas, escape room, laser tag, paintball, parques de ocio), 20${NBSP}% para el karting, la escalada, los deportes náuticos, el alquiler de material y una clase vendida sola, 5,5${NBSP}% para algunas actividades ecuestres. Un paquete que mezcla varias actividades sigue un solo tipo, el de la actividad principal. La hoja «Réservations et acomptes» recoge esos tres tipos y calcula el importe sin IVA y el IVA a partir del precio con IVA.`,
      },
      {
        question: '¿Qué debe exponer un establecimiento de ocio en Francia?',
        answer:
          'El cuadro de organización de los primeros auxilios, las copias de los títulos y carnés profesionales de los monitores, los textos de seguridad de tus actividades, el certificado del seguro de responsabilidad civil y, desde el decreto del 16 de mayo de 2025, la información sobre los canales para denunciar la violencia (Código del deporte, R322-4 y R322-5), más los precios con IVA de las prestaciones en un documento único en la recepción. La página 2 del PDF recoge esa lista con una casilla «expuesto» y una fecha de actualización para cada documento.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Creas tus franjas (60 líneas) y tus monitores (15 líneas), y luego una línea por reserva (150 líneas) con su n.º de franja, sus participantes, su precio con IVA, su tipo de IVA y la cantidad pagada por adelantado. Los inscritos y las plazas libres de cada franja, el importe sin IVA, el saldo por cobrar, la comisión del canal, las horas y los honorarios de cada monitor se calculan solos, sin las reservas anuladas. La hoja «Contrôles du matériel» (40 líneas) calcula la próxima revisión y señala los retrasos. Cada hoja se imprime en A4 apaisado.',
      },
      {
        question: '¿Y cuando las reservas se multiplican?',
        answer: `Un archivo Excel basta mientras las reservas llegan por teléfono y en la recepción. En cuanto tus clientes reservan online, los programas de reservas de ocio vendidos en Francia toman el relevo: Bookeo de 29,95 a 89,95${NBSP}€ al mes sin comisión, Activiteez desde 19${NBSP}€ sin IVA al mes más un 2${NBSP}% online, Yoplanning a 0${NBSP}€ más un 5${NBSP}% o de 19 a 59${NBSP}€ más un 2,5${NBSP}%, Booky de 49 a 149${NBSP}€ sin IVA al mes. Si tu organización sale de su marco (monitores, material, tiempo, varios sitios), el test de la página de la herramienta te dice qué elegir, comisiones incluidas.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las reservas llegan de la web, del teléfono y de las plataformas a la vez, y una tormenta obliga a aplazar toda una franja y a avisar a cada inscrito, una herramienta que lleva el planning, los pagos y los mensajes te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de reservas',
  },
}
