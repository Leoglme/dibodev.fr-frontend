import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/cleaningSchedule/pageShared'
import {
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const CLEANING_SCHEDULE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Planning de limpieza: plantilla francesa gratis en Excel',
    description:
      'Planning de limpieza: plantilla francesa gratis en Excel y PDF, con hoja de control de calidad. Horas y conformidad calculadas. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de planning de visitas y hoja de control de calidad para empresas de limpieza',
  },
  breadcrumbLabel: 'Planning de limpieza',
  shareImage: {
    titleLines: ['Planning de limpieza', 'plantilla gratis'],
    highlight: 'Planning de limpieza',
    subtitle: 'Planning de visitas y hoja de control de calidad en Excel y PDF, horas y conformidad calculadas',
    badge: 'Gratis, sin registro',
    icon: 'sparkles',
    alt: 'Plantilla francesa de planning de limpieza gratis: planning de visitas y hoja de control de calidad en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning de limpieza',
    titleAfter: ': plantilla francesa gratis en Excel (+ hoja de control de calidad)',
    reassurances: [
      'Planning + hoja de control de calidad',
      'Excel con horas y conformidad calculadas',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un planning semanal de visitas y una hoja de control de calidad listos para rellenar, escritos en francés para el mercado francés, para una empresa de limpieza, un responsable de equipo o un autónomo de la limpieza. El planning da, sitio por sitio, el operario y su horario de cada día, y luego las horas semanales de cada operario frente a su contrato. La hoja puntúa un sitio zona por zona, con las fotos de los defectos y la firma del cliente.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el convenio colectivo francés de la limpieza y las reglas del fichaje para que las referencias de la plantilla estén al día.',
    updatedAt: CLEANING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para empresas de limpieza, responsables de equipo y autónomos de la limpieza que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula las horas y la tasa de conformidad.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, horas y conformidad calculadas, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa y a tus contratos. No sustituye la lectura de tu convenio colectivo.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un planning de visitas y una hoja de control de calidad, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con las horas de la semana, los totales por operario y por sitio, y la tasa de conformidad calculados en cuanto escribes un horario o una nota.',
    documents: [
      {
        title: 'Planning de visitas',
        format: 'Página 1 del PDF, hoja «Planning des passages» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono), semana del, sector o equipo, responsable (el PDF añade la fecha de actualización)',
          'Tabla de visitas: sitio del cliente y dirección, operario, hora de inicio y de fin de cada día de lunes a domingo, horas de la semana (12 filas en el PDF, 16 en el Excel), total de horas planificadas',
          'Total de horas por operario: horas planificadas frente a las horas del contrato en el PDF; en el Excel, suma automática por operario y aviso cuando un total baja de 16 horas',
          'El Excel añade un total de horas por sitio del cliente y cuenta bien una visita nocturna (22:00 → 06:00)',
          'Consignas por sitio: llaves y tarjetas, código de alarma, accesos, horario de apertura, productos y material en el sitio, contacto del cliente',
          'Visto bueno del responsable (planning validado), fecha de entrega a los operarios, recordatorio del convenio francés de la limpieza sobre el tiempo parcial',
        ],
      },
      {
        title: 'Hoja de control de calidad',
        format: 'Página 2 del PDF, hoja «Contrôle qualité» del Excel',
        items: [
          'Sitio del cliente y dirección, fecha y hora, controlador, operario(s) del sitio, contacto del cliente y cargo, contrato y frecuencia de visita, tipo de control (programado, sin aviso o con el cliente)',
          'Baremo de 1 a 4 (muy insuficiente, insuficiente, satisfactorio, muy satisfactorio), zona conforme a partir de 3; el umbral se cambia en el Excel',
          '9 zonas ya rellenadas con sus puntos controlados (recepción, oficinas, salas de reuniones, aseos, cocina, pasillos, ascensor, cristales y espejos, papeleras y reciclaje) y 3 filas libres',
          'Por zona: nota, conforme sí o no (calculado en el Excel, en verde o en rojo), n.º de la foto del defecto, acción correctora',
          'Resultado: zonas controladas, zonas conformes, tasa de conformidad (el Excel añade la nota media sobre 4)',
          'Acciones correctoras y plazo, observaciones del cliente, firmas del controlador y del cliente, recordatorio de prever la hoja y su frecuencia en el contrato',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el planning y la hoja de control en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Las horas de la semana, los totales por operario y por sitio, la conformidad y la tasa se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tu empresa y la semana',
        description:
          'Rellena la cabecera (nombre, dirección, teléfono), la semana, el sector o el equipo y el responsable, y guarda el archivo como plantilla. Cada semana parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'Un operario por fila, su horario de cada día',
        description:
          'Para cada sitio, escribe el operario y luego la hora de inicio y de fin de cada día (en formato hh:mm en el Excel). Dos visitas el mismo día en el mismo sitio: una fila más. El Excel cuenta las horas de la semana, visita nocturna incluida.',
      },
      {
        label: 'Paso 3',
        title: 'Las horas de cada operario frente a su contrato',
        description:
          'En el PDF, copia las horas planificadas de cada operario junto a las horas de su contrato. En el Excel, escribe su nombre como en el planning: la suma se hace sola y un total por debajo de 16 horas queda señalado.',
      },
      {
        label: 'Paso 4',
        title: 'Consignas, visto bueno y entrega',
        description:
          'Anota para cada sitio las llaves, el código de alarma, los accesos y los productos en el sitio. El responsable da el visto bueno al planning validado, y tú fechas su entrega a los operarios.',
      },
      {
        label: 'Paso 5',
        title: 'El control de calidad, zona por zona',
        description:
          'En el sitio, puntúa cada zona de 1 a 4, fotografía cada defecto y anota su número en la columna «Photo n°», y escribe la acción correctora. En el Excel, «Conforme» y la tasa siguen.',
      },
      {
        label: 'Paso 6',
        title: 'Resultado, acciones y firma del cliente',
        description:
          'Cuenta las zonas controladas y conformes, calcula la tasa, fija un plazo para las acciones correctoras y recoge las observaciones del cliente. La hoja se firma entre los dos y se le entrega una copia.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las referencias que la plantilla ya prevé',
    intro:
      'Tres normas francesas de la empresa de limpieza pasan por el planning y el recuento de horas. La plantilla les reserva una columna o una mención.',
    facts: [
      {
        contextLabel: 'Convenio de la limpieza, art. 6.2.4.1',
        title: `Un tiempo parcial de 16${NBSP}horas semanales como mínimo`,
        text: `Salvo petición escrita del empleado, un contrato a tiempo parcial suma al menos 16${NBSP}horas semanales, con un máximo de 2 turnos al día por debajo de 24${NBSP}horas semanales, y 3 por encima. La plantilla pone las horas planificadas de cada operario frente a su contrato, y el Excel señala un total por debajo de 16${NBSP}horas.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Reglas de la CNIL',
        title: 'El fichaje en el sitio, anunciado antes de ponerlo en marcha',
        text: 'Etiqueta NFC, código QR o geolocalización del móvil: cualquier sistema de control horario se comunica a los empleados antes de ponerlo en marcha, y se consulta al comité social y económico (CSE) a partir de 50 empleados. El planning entregado a los operarios no lo es; el día que pases al fichaje, avísales primero.',
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'Desde 400 horas en 12 meses',
        title: 'Un plan de prevención por escrito en casa del cliente',
        text: `Tu empresa y el cliente analizan juntos los riesgos tras una inspección conjunta de las instalaciones. El plan de prevención se hace por escrito a partir de 400${NBSP}horas de trabajo en 12 meses, o para los trabajos peligrosos que enumera la orden del 19 de marzo de 1993. El total de horas por sitio del Excel te ayuda a ver venir ese umbral.`,
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de planning de limpieza: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de planning de limpieza es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Cuántas horas semanales como mínimo para un operario a tiempo parcial en Francia?',
        answer: `16${NBSP}horas, salvo petición escrita del empleado (convenio francés de la limpieza, art. 6.2.4.1), con un máximo de 2 turnos al día por debajo de 24${NBSP}horas semanales y 3 por encima. Cuando la jornada se calcula como media del semestre natural, se entrega una planificación provisional cada mes y cualquier cambio se avisa con 3 días hábiles de antelación. La tabla «Total d’heures par agent» sirve para esa comprobación.`,
      },
      {
        question: '¿La hoja de control de calidad es obligatoria?',
        answer:
          'No he encontrado ningún texto que imponga este informe ni un certificado de paso: es una costumbre del oficio, que los clientes esperan y que conviene prever, con su frecuencia, en tu contrato. La plantilla te da el esquema: una nota por zona, una foto de cada defecto, la hoja firmada con el cliente y entregada en copia.',
      },
      {
        question: '¿El planning puede servir de fichaje?',
        answer:
          'No. Da los horarios previstos, no las horas realmente trabajadas. Si pasas al fichaje (etiqueta NFC, código QR o geolocalización del móvil), en Francia el sistema se comunica a los empleados antes de ponerlo en marcha, y se consulta al CSE a partir de 50 empleados (CNIL).',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Planning des passages», escribes la hora de inicio y de fin de cada día en formato hh:mm: las horas de la semana de cada fila, el total planificado, el total por operario (con el aviso de 16${NBSP}horas) y el total por sitio se calculan solos, visita nocturna incluida. En la hoja «Contrôle qualité», puntúas cada zona de 1 a 4: la columna «Conforme», la tasa de conformidad y la nota media siguen, a partir de una nota mínima de 3 que puedes cambiar. Cada hoja se imprime en una página A4.`,
      },
      {
        question: '¿Y cuando los sitios se multiplican?',
        answer: `Una plantilla Excel basta para un equipo y unos cuantos sitios. Más allá, los programas franceses de limpieza (PROPRET, PROGESTI, CleanPlus) añaden el fichaje, las fotos y el portal de cliente desde 29${NBSP}€ sin IVA al mes, a menudo más un precio por operario. Si tu organización sale de su marco (turnos, cambios de contrata, planes de prevención), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando el planning se copia cada semana, las horas van a la nómina a mano y las hojas de control duermen en una carpeta, una herramienta que los encadena te devuelve horas. Descríbeme tus sitios y tus equipos: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de limpieza',
  },
}
