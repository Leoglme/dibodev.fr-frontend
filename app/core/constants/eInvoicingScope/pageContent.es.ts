import type { DibodevEInvoicingScopePageContent } from '~/core/types/DibodevEInvoicingScopePage'
import { E_INVOICING_SCOPE_SOURCES } from '~/core/constants/eInvoicingScope/pageShared'

export const E_INVOICING_SCOPE_PAGE_ES: DibodevEInvoicingScopePageContent = {
  meta: {
    title: 'Factura electrónica en Francia: ¿me afecta, y cuándo?',
    description:
      'Microempresa, franquicia de IVA, alquiler amueblado, asociación: 5 preguntas para saber si la factura electrónica francesa te afecta, y desde qué fecha. Gratis.',
    inLanguage: 'es-ES',
    schemaAbout: 'Ámbito de la reforma de la factura electrónica en Francia: a quién afecta y desde qué fecha',
  },
  breadcrumbLabel: 'Factura electrónica: ¿me afecta?',
  shareImage: {
    titleLines: ['Factura electrónica:', '¿me afecta,', 'y cuándo?'],
    highlight: 'afecta',
    subtitle: 'Microempresa, franquicia de IVA, alquiler amueblado, asociación',
    badge: 'Gratis · 5 preguntas · 1 minuto',
    alt: 'Factura electrónica en Francia: ¿me afecta, y cuándo? Test gratuito en dibodev.fr',
  },
  hero: {
    titleBefore: 'Factura electrónica en Francia: ¿te ',
    titleHighlight: 'afecta',
    titleAfter: ', y desde cuándo?',
    reassurances: [
      'Gratis, 5 preguntas, 1 minuto',
      'Resultado sin e-mail',
      'Textos oficiales releídos el 25 de octubre de 2026',
    ],
    description:
      'Desde el 1 de septiembre de 2026, toda empresa sujeta al IVA en Francia debe poder recibir facturas electrónicas; las pequeñas empresas tendrán que emitirlas a partir del 1 de septiembre de 2027. Pero microempresario en franquicia, arrendador de vivienda amueblada, asociación, profesión exenta: cada uno se pregunta si está en el ámbito. Este test cruza tu estatus, tu régimen de IVA, tu tamaño y tus clientes, y te da tus fechas.',
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador freelance cerca de Rennes. Conecto software de gestión y herramientas propias a las plataformas homologadas, y automatizo presupuestos y facturas de pequeñas empresas, a distancia.',
  },
  mobileContactBar: {
    text: '¿Dudas sobre tu caso?',
    buttonLabel: 'Describir mi caso',
  },
  facts: {
    anchorId: 'normas',
    eyebrow: 'Lo que dicen los textos',
    title: 'A quién afecta: seis puntos comprobados',
    intro:
      'Las normas releídas el 25 de octubre de 2026 en las fuentes oficiales. impots.gouv.fr estaba en mantenimiento ese día: las fichas de la DGFiP se leyeron en sus relevos.',
    facts: [
      {
        contextLabel: 'Entre sujetos pasivos en Francia',
        title: 'La reforma se dirige a las ventas entre empresas establecidas en Francia y sujetas al IVA',
        text: 'La factura electrónica se aplica a las compras y ventas de bienes o servicios entre empresas establecidas en Francia y sujetas al IVA. Toda empresa afectada debe poder recibir facturas electrónicas desde el 1 de septiembre de 2026; la emisión es obligatoria desde esa fecha para las grandes empresas y las de tamaño intermedio, y a partir del 1 de septiembre de 2027 para las microempresas y las pymes.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, noticia del 2 de septiembre de 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Franquicia de IVA',
        title: 'La franquicia de IVA no te saca del ámbito',
        text: 'La franquicia exime de cobrar el IVA, no de ser sujeto pasivo: un microempresario o una pequeña sociedad en franquicia debe poder recibir facturas electrónicas desde el 1 de septiembre de 2026, y emitir las de sus clientes profesionales a través de una plataforma homologada a partir del 1 de septiembre de 2027.',
        sourceName: 'Guía práctica de inicio de la factura electrónica, DGFiP, julio de 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.officialStarterGuide,
      },
      {
        contextLabel: 'Exentos: solo recepción',
        title: 'Una actividad exenta recibe, pero no emite',
        text: 'Un sujeto pasivo cuyas operaciones están todas exentas de IVA (salud, enseñanza, alquiler amueblado sin servicios…) sigue siendo sujeto pasivo como destinatario: debe poder recibir las facturas electrónicas de sus proveedores desde el 1 de septiembre de 2026, pero no tiene facturas electrónicas que emitir ni e-reporting que enviar por esas operaciones.',
        sourceName: 'Légifiscal, «Facturation électronique et loueur en meublé», según la ficha de la DGFiP',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.legifiscalLandlord,
      },
      {
        contextLabel: 'Particulares y extranjero',
        title: 'Sin factura electrónica, pero con e-reporting',
        text: 'Las ventas a particulares y las operaciones con clientes establecidos en el extranjero no dan lugar a una factura electrónica: sus datos de transacción se envían a la administración por e-reporting, con el mismo calendario que la emisión. Una empresa puede por tanto estar sujeta a las dos obligaciones según sus clientes.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, noticia del 2 de septiembre de 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Directorio',
        title: 'Sin plataforma designada, no hay dirección de recepción',
        text: 'El directorio de la factura electrónica recoge cada empresa sujeta al IVA, su plataforma homologada y sus direcciones de facturación. Mientras no hayas designado una plataforma, tus proveedores no pueden enviarte una factura electrónica: es lo primero que hay que hacer, sea cual sea tu fecha de emisión.',
        sourceName: 'economie.gouv.fr, «Qu’est-ce que l’annuaire de la facturation électronique ?»',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: 'Tolerancia 2026',
        title: 'Ninguna sanción en 2026, pero ni aplazamiento ni suspensión',
        text: 'El gobierno anunció que no se aplicaría ninguna sanción en 2026 a las empresas con dificultades reales, documentadas y seguidas de acciones correctoras. La guía de inicio de la DGFiP precisa que esta tolerancia «no es ni un aplazamiento ni una suspensión de la obligación».',
        sourceName: 'Compta Online, 5 de octubre de 2026, según el comunicado y la guía de la DGFiP',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.comptaOnlineTolerance,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago por ti:',
    calloutText:
      'compruebo tu situación, conecto tu software de gestión o tu herramienta propia a una plataforma homologada, y automatizo la salida de presupuestos y facturas. A distancia, primer contacto gratuito.',
  },
  cases: {
    anchorId: 'casos',
    eyebrow: 'Caso por caso',
    title: 'Microempresario, arrendador, asociación, profesión liberal: lo que debe hacer cada uno',
    intro: 'Las seis situaciones que más se repiten en las preguntas que recibo, con la norma que se aplica.',
    items: [
      {
        title: 'Microempresario en franquicia de IVA',
        description:
          'Recibir a través de una plataforma homologada desde el 1 de septiembre de 2026; emitir las facturas de tus clientes profesionales por una plataforma a partir del 1 de septiembre de 2027; e-reporting de las ventas a particulares en la misma fecha.',
      },
      {
        title: 'Sociedad o empresario individual en régimen real',
        description:
          'Mismas fechas que la microempresa mientras te mantengas por debajo de 250 empleados y 50 M€ de facturación. Por encima, todo es obligatorio desde el 1 de septiembre de 2026.',
      },
      {
        title: 'Profesión liberal',
        description:
          'Si tus actos están exentos (médico, enfermero, docente…), solo recepción desde 2026. Si cobras el IVA o estás en franquicia (abogado, consultor, arquitecto…), recepción desde 2026 y emisión en 2027.',
      },
      {
        title: 'Arrendador de vivienda amueblada sin servicios (LMNP, LMP)',
        description:
          'Alquiler exento: sigues siendo sujeto pasivo como destinatario. Recepción de las facturas de tus proveedores desde el 1 de septiembre de 2026, si tienes un número SIREN; ninguna emisión, ningún e-reporting.',
      },
      {
        title: 'Arrendador de vivienda amueblada con servicios hoteleros',
        description:
          'Al menos tres servicios entre desayuno, limpieza regular, ropa de cama y recepción: el alquiler está gravado. Recepción desde 2026, emisión para los clientes profesionales y e-reporting para los particulares a partir del 1 de septiembre de 2027.',
      },
      {
        title: 'Asociación',
        description:
          'Fuera del ámbito por sus actividades no lucrativas: nada que hacer. Afectada por una actividad lucrativa sujeta al IVA (bar, tienda, servicios facturados a empresas), en las mismas fechas que una pequeña empresa.',
      },
    ],
  },
  timeline: {
    anchorId: 'calendario',
    eyebrow: 'El calendario',
    title: 'Tres fechas que recordar',
    intro: 'Fijadas por la ley de presupuestos francesa para 2024, confirmadas sin aplazamiento.',
    items: [
      {
        title: '1 de septiembre de 2026: recepción para todos, emisión para las grandes empresas y las intermedias',
        description:
          'Toda empresa sujeta al IVA debe poder recibir a través de una plataforma homologada; las grandes empresas y las intermedias emiten y envían su e-reporting.',
      },
      {
        title: 'Hasta finales de 2026: tolerancia en las sanciones',
        description:
          'Ninguna sanción para una empresa con dificultades reales que haya iniciado su puesta en conformidad. No es ni un aplazamiento ni una suspensión.',
      },
      {
        title: '1 de septiembre de 2027: emisión y e-reporting para las microempresas y las pymes',
        description:
          'Las facturas a clientes profesionales pasan por una plataforma; las ventas a particulares y al extranjero se declaran.',
      },
    ],
  },
  method: {
    eyebrow: 'Y después',
    title: 'Cuatro pasos, en orden',
    intro: 'Lo que hago con mis clientes una vez conocida la fecha.',
    steps: [
      {
        label: 'Saber',
        title: 'Tu fecha, con el test',
        description:
          'Estatus, IVA, tamaño, clientes: el test de arriba te dice si solo recibes, o si también emites, y cuándo.',
      },
      {
        label: 'Designar',
        title: 'Una plataforma homologada para recibir',
        description:
          'En tu programa si está homologado o conectado; si no, en una plataforma gratuita. Con la cuenta del representante legal, y luego control del directorio.',
      },
      {
        label: 'Comprobar',
        title: 'Tu programa de facturación',
        description:
          'El verificador de software dice si es una plataforma homologada, si está conectado, o si falta algo antes de tu fecha de emisión.',
      },
      {
        label: 'Conectar',
        title: 'Tus presupuestos y facturas propios',
        description:
          'Si tus facturas salen de un software de gestión o de una herramienta a medida, lo conecto a una plataforma homologada y automatizo el envío.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '¿Me afecta? Las preguntas que me hacen',
    questions: [
      {
        question: 'Soy microempresario en franquicia de IVA: ¿me afecta?',
        answer:
          'Sí. La franquicia exime de cobrar el IVA, no de ser sujeto pasivo. Debes poder recibir facturas electrónicas desde el 1 de septiembre de 2026 y, a partir del 1 de septiembre de 2027, emitir las de tus clientes profesionales a través de una plataforma homologada. Tus ventas a particulares no dan lugar a una factura electrónica, sino a un e-reporting en la misma fecha.',
      },
      {
        question: 'Solo vendo a particulares: ¿tengo que hacer algo de todos modos?',
        answer:
          'Sí, dos cosas. Recibir: tus proveedores franceses te enviarán facturas electrónicas, necesitas una plataforma homologada designada en el directorio, desde el 1 de septiembre de 2026. Declarar: tus ventas a particulares se enviarán a la administración por e-reporting, a partir del 1 de septiembre de 2027 para una pequeña empresa. En cambio, no tienes ninguna factura electrónica que emitir.',
      },
      {
        question: 'Soy arrendador de vivienda amueblada no profesional (LMNP): ¿me afecta?',
        answer:
          'Para la recepción, sí, si tienes un número SIREN: el alquiler amueblado sin servicios está exento de IVA, pero sigues siendo sujeto pasivo como destinatario y debes poder recibir las facturas de tus proveedores a través de una plataforma homologada desde el 1 de septiembre de 2026. No tienes nada que emitir ni que declarar. Si ofreces al menos tres servicios hoteleros (desayuno, limpieza regular, ropa de cama, recepción), el alquiler pasa a estar gravado y sigues el calendario de una empresa.',
      },
      {
        question: '¿Nuestra asociación está afectada?',
        answer:
          'No por sus actividades no lucrativas, que están fuera del ámbito del IVA: ninguna factura electrónica que recibir ni que emitir, sin e-reporting. Sí lo está por una actividad lucrativa sujeta al IVA, incluso en franquicia: bar, tienda, servicios facturados a empresas. En ese caso, recepción desde el 1 de septiembre de 2026 y emisión a partir del 1 de septiembre de 2027 para esa actividad.',
      },
      {
        question: 'Soy médico, enfermero o formador exento de IVA: ¿qué tengo que hacer?',
        answer:
          'Poder recibir, solamente. Tus actos exentos no dan lugar ni a una factura electrónica ni a un e-reporting, pero sigues siendo sujeto pasivo como destinatario: designa una plataforma homologada (varias tienen oferta gratuita) para recibir las facturas de tus proveedores, desde el 1 de septiembre de 2026. Si una parte de tu actividad está gravada (venta de productos, servicios accesorios), sigue el calendario de emisión.',
      },
      {
        question: 'No tengo ningún proveedor en Francia: ¿tengo que designar una plataforma igualmente?',
        answer:
          'La obligación es poder recibir, no haber recibido: todo sujeto pasivo establecido en Francia debe figurar en el directorio con una plataforma designada. Sin ella, el primer proveedor francés que te facture (suscripción, material, alquiler profesional) no podrá enviarte su factura. Elige una plataforma con oferta gratuita: el trámite lleva media hora.',
      },
      {
        question: '¿Cómo sé si mi empresa es una pyme o una empresa de tamaño intermedio?',
        answer:
          'Una pyme tiene menos de 250 empleados y como máximo 50 millones de euros de facturación o 43 millones de balance total; las microempresas forman parte de ella. Por encima, eres una empresa de tamaño intermedio (hasta 4999 empleados) o una gran empresa, y todo es obligatorio desde el 1 de septiembre de 2026. Los umbrales se valoran sobre el último ejercicio cerrado, a nivel de la propia empresa, no del grupo.',
      },
      {
        question: 'Empiezo mi actividad en 2027: ¿qué fecha se aplica?',
        answer:
          'La de tu categoría. Desde tu alta, debes poder recibir; si creas una microempresa o una pyme después del 1 de septiembre de 2027, la emisión electrónica se aplica desde tus primeras facturas a profesionales. Mejor elegir desde el principio un programa homologado o conectado.',
      },
      {
        question: 'Mis facturas salen de un software de gestión o de una herramienta propia: ¿qué pasa?',
        answer:
          'No se convertirá en plataforma homologada, y no necesita serlo: se conecta a una plataforma que recibe y emite por él, por API o depositando ficheros en formato Factur-X, UBL o CII. Es el trabajo que hago para mis clientes: conexión, formato de las facturas, directorio y automatización del envío, a distancia.',
      },
      {
        question: '¿Qué se arriesga una empresa que no ha hecho nada?',
        answer:
          'Por la emisión: 50 € por factura no electrónica, con un tope de 15 000 € al año. Por la recepción fuera de una plataforma homologada: requerimiento, y luego 500 € y 1000 € por cada nuevo periodo de tres meses. Por el e-reporting no enviado: 500 € por transmisión, con un tope de 15 000 € al año. Ninguna de estas sanciones se aplica en 2026 a una empresa con dificultades reales que haya iniciado el proceso.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    intro: 'Tres artículos sobre la facturación de las pequeñas empresas en Francia.',
  },
  contactCta: {
    title: '¿Dudas sobre tu caso, o una herramienta que conectar?',
    description:
      'Descríbeme tu situación: te respondo en 24 h con los pasos a seguir, y un presupuesto solo si hay que conectar un programa.',
    button: 'Describir mi caso',
  },
}
