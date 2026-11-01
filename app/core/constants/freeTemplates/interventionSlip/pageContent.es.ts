import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INTERVENTION_SLIP_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/interventionSlip/pageShared'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const INTERVENTION_SLIP_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Parte de intervención: plantilla francesa gratis PDF y Excel',
    description:
      'Parte de intervención: plantilla francesa gratis en PDF y Excel, con hoja de ruta. Piezas, mano de obra, horas y kilómetros calculados. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de parte de intervención y hoja de ruta para técnicos de campo',
  },
  breadcrumbLabel: 'Parte de intervención',
  shareImage: {
    titleLines: ['Parte de intervención', 'plantilla gratis'],
    highlight: 'Parte de intervención',
    subtitle: 'Parte de intervención y hoja de ruta en PDF y Excel, totales y duraciones calculados, menciones al día',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de parte de intervención gratis: parte de intervención y hoja de ruta en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Parte de intervención',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ hoja de ruta)',
    reassurances: ['Parte + hoja de ruta', 'Excel con totales y duraciones calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un parte de intervención y una hoja de ruta listos para rellenar, escritos en francés para el mercado francés, para un técnico de averías autónomo, un servicio posventa o un equipo pequeño de técnicos de campo. El parte se firma en casa del cliente, con el tipo de intervención, el diagnóstico, las piezas, la mano de obra y los pasos siguientes. La hoja de ruta sigue la jornada de un técnico: intervenciones previstas, horas, estados y kilómetros.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas sobre la conservación de los partes, el presupuesto antes de una avería, el tiempo de desplazamiento y la geolocalización para que las menciones estén al día.',
    updatedAt: INTERVENTION_SLIP_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para técnicos de campo, reparadores, servicios posventa y toda empresa que interviene en casa de sus clientes en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: FIELD_SERVICE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, duraciones y totales calculados, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un parte de intervención y una hoja de ruta, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con los totales del parte, la duración de cada intervención y los kilómetros del día calculados en cuanto escribes.',
    documents: [
      {
        title: 'Parte de intervención',
        format: 'Página 1 del PDF, hoja «Bon d’intervention» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIRET), n.º de intervención, fecha, técnico, n.º de contrato o de solicitud',
          'Cliente y sitio: empresa o nombre, contacto en el sitio, dirección, equipo (marca, modelo, n.º de serie), ubicación, fecha de instalación o última intervención',
          'Tipo de intervención en 4 casillas (avería, mantenimiento preventivo, instalación y puesta en marcha, inspección), horas de llegada y de salida, tiempo de desplazamiento de ida en el PDF',
          'Zona libre para la solicitud del cliente, el diagnóstico, los trabajos realizados, las lecturas tomadas y las referencias de las fotos',
          `Piezas y mano de obra: descripción, cantidad, precio unitario sin IVA, IVA, total sin IVA, con una línea de mano de obra a la tarifa horaria y una línea de desplazamiento, y luego total sin IVA y total con IVA (el Excel añade el total con IVA por línea y el IVA al 20${NBSP}% por defecto)`,
          'Pasos siguientes en 4 casillas (terminada, nueva intervención por planificar, presupuesto por elaborar, pieza por pedir), observaciones del cliente, firmas del cliente y del técnico',
        ],
      },
      {
        title: 'Hoja de ruta',
        format: 'Página 2 del PDF, hoja «Feuille de tournée» del Excel',
        items: [
          'Técnico, fecha, vehículo, kilometraje a la salida y a la llegada, horas de salida y de regreso (el Excel calcula los km del día)',
          'Intervenciones del día: hora prevista, cliente y dirección, motivo, llegada, salida, estado, km, en 8 líneas (10 en el Excel, que calcula la duración de cada una)',
          'Estado en una letra: T terminada, R por volver (pieza, presupuesto, ausente), A anulada',
          'Total del día: horas de intervención y de desplazamiento por anotar en el PDF, horas y kilómetros sumados en el Excel',
          'Piezas sacadas de la furgoneta o por reponer, consignas para la oficina (presupuestos por elaborar, intervenciones por replanificar, incidencias)',
          'Firma del técnico, visto bueno del responsable, menciones francesas sobre el tiempo de desplazamiento de los itinerantes y la geolocalización de los vehículos',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el parte de intervención en cinco pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales del parte, las duraciones y los kilómetros de la ruta se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos, de una vez por todas',
        description:
          'Rellena la cabecera (nombre, dirección, teléfono, SIRET) en las dos hojas y guarda el archivo como plantilla. Cada parte sale de esa copia, con un número de intervención correlativo.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente, el sitio y el equipo',
        description:
          'Empresa o nombre, contacto en el sitio, dirección, y luego el equipo con marca, modelo, n.º de serie y fecha de instalación: es lo que permite recuperar el historial de un aparato en la siguiente visita.',
      },
      {
        label: 'Paso 3',
        title: 'El tipo de intervención y el diagnóstico',
        description:
          'Marca avería, mantenimiento, instalación o inspección, anota las horas de llegada y de salida, y describe la solicitud del cliente, el diagnóstico, los trabajos realizados y las lecturas tomadas.',
      },
      {
        label: 'Paso 4',
        title: 'Piezas, mano de obra y pasos siguientes',
        description:
          'Una línea por pieza con su cantidad y su precio unitario sin IVA, luego la mano de obra a la tarifa horaria y el desplazamiento. El Excel calcula los totales sin y con IVA. Marca los pasos siguientes y haz firmar al cliente: trabajos recibidos.',
      },
      {
        label: 'Paso 5',
        title: 'La hoja de ruta, a lo largo del día',
        description:
          'Técnico, vehículo, kilometraje a la salida, y luego una línea por intervención con la hora prevista, la llegada, la salida, el estado y los km. Por la tarde, las piezas por reponer, las consignas para la oficina y el visto bueno del responsable.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas de la empresa de intervenciones pasan por el parte de intervención y la hoja de ruta. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: '10 años',
        title: 'El parte de intervención firmado, conservado diez años',
        text: 'Pedidos, albaranes y partes de intervención, facturas de clientes y proveedores: justificantes que se conservan 10 años desde el cierre del ejercicio. El parte firmado por el cliente es la prueba del trabajo realizado, y la plantilla lo recuerda a pie de página.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier avería en casa de un particular',
        text: `Avería, reparación o mantenimiento en casa de un particular (fontanería, electricidad, cerrajería, climatización…): presupuesto detallado entregado antes de los trabajos, sea cual sea el importe, y luego factura desde 25${NBSP}€ con IVA. El parte de intervención viene después del presupuesto, no lo sustituye.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Tribunal de Casación, 23 de noviembre de 2022',
        title: 'El trayecto hasta el primer cliente es tiempo de trabajo',
        text: 'Para un empleado itinerante que sigue a disposición del empleador durante el trayecto, los desplazamientos entre su domicilio y el primer o el último cliente cuentan como tiempo de trabajo efectivo. La hoja de ruta anota la hora de salida, la llegada a cada cliente y la hora de regreso.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'Reglas de la CNIL',
        title: 'La geolocalización de los vehículos, con límites',
        text: 'Finalidades limitadas (justificar una intervención, enviar al técnico más cercano, seguridad), empleados informados, nunca fuera del horario de trabajo ni para controlar la velocidad, datos conservados 2 meses (1 año para probar una intervención). Los kilómetros de la hoja de ruta, en cambio, los anota el técnico.',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de parte de intervención: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de parte de intervención es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿El parte de intervención sustituye el presupuesto o la factura en Francia?',
        answer: `No. En casa de un particular, se entrega un presupuesto detallado antes de cualquier avería, reparación o mantenimiento, sea cual sea el importe. El parte firmado prueba después que los trabajos se hicieron y se recibieron, y la factura viene a continuación, con, entre empresas, la fecha de vencimiento, el tipo de las penalizaciones por demora y la indemnización fija de 40${NBSP}€ por gastos de cobro. La plantilla recuerda estos tres documentos a pie de página.`,
      },
      {
        question: '¿Qué debe contener un parte de intervención?',
        answer:
          'Todo lo que permite, un año después, probar qué se hizo, dónde, cuándo y quién lo hizo: la empresa, el cliente y el sitio, la fecha y las horas, el equipo, el tipo de intervención, el diagnóstico y los trabajos, las piezas y la mano de obra, los pasos siguientes, el nombre y la firma del cliente. La plantilla recoge estos apartados en ese orden.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Bon d’intervention», escribes la cantidad y el precio unitario sin IVA de cada línea; el total sin IVA y el total con IVA de la línea (IVA al 20${NBSP}% por defecto, modificable), y luego el total sin IVA, el IVA y el total con IVA del parte se calculan solos. En la hoja «Feuille de tournée», las horas de llegada y de salida en formato hh:mm dan la duración de cada intervención, el pie de la tabla suma las horas y los kilómetros, y los km del día salen del cuentakilómetros. Las dos hojas se imprimen en una página A4.`,
      },
      {
        question: '¿El tiempo de desplazamiento de los técnicos cuenta como horas de trabajo en Francia?',
        answer:
          'Para un empleado itinerante que sigue a disposición del empleador durante el trayecto, los desplazamientos entre su domicilio y el primer o el último cliente son tiempo de trabajo efectivo (Tribunal de Casación, 23 de noviembre de 2022). La hoja de ruta prevé la hora de salida, la llegada y la salida en cada cliente y la hora de regreso, con una casilla para el total de horas de desplazamiento en el PDF.',
      },
      {
        question: '¿Y cuando los partes de intervención se multiplican?',
        answer: `Una plantilla Excel basta para unas cuantas intervenciones por semana y uno o dos técnicos. Más allá, los programas franceses de gestión de intervenciones (Organilog, Synchroteam, Kizeo Forms) planifican las rutas y hacen firmar el parte en el móvil del técnico, desde 15${NBSP}€ sin IVA por usuario al mes en Kizeo Forms (sin planificación) y 19${NBSP}€ en Organilog. Si tu organización sale de su marco (contratos de mantenimiento, stock de la furgoneta, varias delegaciones), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los partes de intervención, las hojas de ruta y las facturas se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de intervenciones',
  },
}
