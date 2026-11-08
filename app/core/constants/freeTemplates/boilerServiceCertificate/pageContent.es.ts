import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BOILER_MAINTENANCE_DECREE_SOURCE,
  BOILER_MAINTENANCE_ORDER_SOURCE,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/boilerServiceCertificate/pageShared'
import { BOILER_MAINTENANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Certificado de mantenimiento de caldera: plantilla gratis',
    description:
      'Certificado de mantenimiento de caldera en Francia: plantilla gratis en PDF y Excel con las menciones de la orden de 2009, frase de CO y libro de visitas.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de certificado de mantenimiento de caldera y libro de visitas',
  },
  breadcrumbLabel: 'Certificado de mantenimiento de caldera',
  shareImage: {
    titleLines: ['Certificado de mantenimiento', 'de caldera gratis'],
    highlight: 'Certificado de mantenimiento',
    subtitle: 'Certificado y libro de visitas en PDF y Excel, medición de CO, rendimiento, consejos, recordatorios',
    badge: 'Gratis, sin registro',
    icon: 'flame',
    alt: 'Plantilla francesa de certificado de mantenimiento de caldera gratis: certificado y libro de visitas en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Certificado de mantenimiento de caldera',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ libro de visitas)',
    reassurances: ['Certificado + libro de visitas', 'Excel con frase de CO y recordatorios', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un certificado de mantenimiento anual de caldera listo para rellenar, escrito en francés para el mercado francés, para un técnico de calefacción, una empresa de fontanería y calefacción o de mantenimiento. Recoge una a una las menciones de la orden francesa del 15 de septiembre de 2009: caldera, puntos revisados, medición del monóxido de carbono, rendimiento, emisiones, clase energética y consejos. El libro guarda cada visita, año tras año, y el Excel lista los clientes a los que avisar en la fecha de aniversario.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el decreto y la orden franceses sobre el mantenimiento de calderas, anexo por anexo, para que el certificado lleve todas las menciones exigidas.',
    updatedAt: BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para técnicos de calefacción, empresas de fontanería y calefacción y empresas de mantenimiento que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula y lleva tus recordatorios.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, frase de CO y recordatorios calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa. No sustituye las instrucciones del fabricante ni las normas de mantenimiento que cita la orden.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un certificado, un libro de visitas y una lista de recordatorios',
    intro:
      'El PDF recoge el certificado en una página A4 y el libro de visitas en la segunda. El Excel recoge los dos y añade la lista de clientes a los que avisar. Escribe por ti la frase sobre el monóxido de carbono, la fecha límite de entrega y la fecha del próximo mantenimiento.',
    documents: [
      {
        title: 'Certificado de mantenimiento',
        format: 'Página 1 del PDF, hoja «Attestation» del Excel',
        items: [
          'Cabecera de la empresa, n.º de certificado, fecha de la visita, técnico, fecha de emisión',
          'Cliente que encarga el mantenimiento, dirección de la instalación, local de la caldera, n.º de contrato de mantenimiento',
          'Caldera: energía (gas, gasóleo, leña, carbón, multicombustible), marca, modelo, tipo, n.º de serie, puesta en servicio, potencia, evacuación, quemador, último mantenimiento y último deshollinado',
          'Puntos revisados según el anexo 1 de la orden, en casillas (caldera, circuito de agua, regulación), aparatos de medición utilizados',
          'Medición de CO con las tres frases de la orden, rendimiento y emisiones frente a los valores de referencia, clase energética y tabla de las soluciones de sustitución',
          'Consejos en tres apartados, firma del técnico, sello, recordatorio de la entrega en 15 días y de la conservación durante 2 años',
        ],
      },
      {
        title: 'Libro de visitas',
        format: 'Página 2 del PDF, hoja «Carnet des visites» del Excel',
        items: [
          'El cliente y la caldera en la cabecera, de una vez por todas (tomados del certificado en el Excel)',
          'Una línea por año natural: fecha de la visita, técnico, CO en ppm, situación, rendimiento, clase, deshollinado, certificado entregado el, trabajos a prever',
          'Reparaciones y trabajos entre dos visitas, con el n.º de parte o de factura',
          'Recordatorios: plazos, método de medición del CO, tabla 12 de la orden para la clase energética',
          'En el Excel: plazo de entrega calculado y señalado a partir de 15 días, próximo mantenimiento a más tardar el 31 de diciembre del año siguiente',
        ],
      },
      {
        title: 'Clientes a los que avisar',
        format: 'Hoja «Clients à relancer» del Excel',
        items: [
          'Una línea por cliente, 60 líneas: nombre, teléfono, e-mail, dirección, caldera, último mantenimiento',
          'Fecha de aniversario y fecha de aviso calculadas, 30 días antes por defecto, plazo modificable',
          'Mantenimiento a hacer antes del 31 de diciembre del año natural siguiente, contado desde la puesta en servicio para una caldera nueva',
          'Estado calculado: por avisar, con retraso, plazo vencido, avisado, cita fijada; contadores arriba de la hoja y filtro por estado',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el certificado en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Las casillas grises se calculan solas, y unas listas desplegables evitan errores en la energía, el tipo y la evacuación.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y la caldera, una vez por cliente',
        description:
          'Rellena la cabecera de la empresa, el cliente y la ficha de la caldera (energía, tipo, año de fabricación, potencia), y guarda una copia del archivo por cliente. Al año siguiente, solo cambian la visita y las mediciones.',
      },
      {
        label: 'Paso 2',
        title: 'Los puntos revisados y la medición de CO',
        description:
          'Marca las operaciones hechas según la energía de la caldera y anota la marca y la referencia de tus aparatos de medición. Escribe la medición de monóxido de carbono en ppm: el Excel escribe la frase que la orden obliga a poner en el certificado.',
      },
      {
        label: 'Paso 3',
        title: 'Rendimiento, emisiones y consejos',
        description:
          'Copia el rendimiento y las emisiones leídos en las tablas de la orden. Las referencias de las emisiones se rellenan según la energía, y la clase energética se propone según la tabla 12, para comprobar. Escribe tus consejos en los tres apartados.',
      },
      {
        label: 'Paso 4',
        title: 'Firmar, entregar en 15 días, anotar en el libro',
        description:
          'Firma, sella y entrega el certificado al cliente en un plazo de 15 días, en papel o por e-mail. Añade la visita al libro y actualiza la fecha del último mantenimiento en la lista de clientes a los que avisar.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Seis normas francesas del mantenimiento de calderas pasan por el certificado. La plantilla les reserva una casilla, una línea o una fórmula. Este resumen no es un consejo jurídico: los textos enlazados son los que valen.',
    facts: [
      {
        contextLabel: `De 4 a 400${NBSP}kW`,
        title: 'Un mantenimiento cada año natural',
        text: `Calderas de gas, de gasóleo o de combustible sólido de 4 a 400${NBSP}kW: un mantenimiento por año natural, hecho por un profesional cualificado. Tras una instalación o una sustitución, el primero se hace a más tardar en el año natural siguiente. El libro y la lista de avisos siguen ese plazo.`,
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'En 15 días',
        title: 'El certificado entregado, guardado 2 años',
        text: 'Quien hizo el mantenimiento emite el certificado en los 15 días siguientes a su visita y lo entrega a quien encargó el mantenimiento, que lo conserva al menos 2 años. El Excel calcula la fecha límite de entrega y el libro guarda la fecha de entrega.',
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Inquilino o propietario',
        title: 'Quién encarga el mantenimiento',
        text: 'Vivienda alquilada con caldera propia: el inquilino llama al técnico cualificado que elija, salvo si el contrato de alquiler se lo encarga al arrendador. Caldera colectiva: el propietario o la comunidad de propietarios. Es el «commanditaire» del certificado.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'Anexo 5 de la orden',
        title: 'El contenido mínimo del certificado',
        text: 'Cliente, dirección de la instalación, caldera (marca, modelo, energía, evacuación, n.º de serie, puesta en servicio, potencia), último mantenimiento y deshollinado, puntos revisados, aparatos de medición, resultados, consejos. Un certificado por caldera, y el original puede ser digital.',
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: `Umbrales de 10 y 50${NBSP}ppm`,
        title: 'La medición del monóxido de carbono',
        text: `Se mide en el local de la caldera, después de los ajustes. Menos de 10${NBSP}ppm: «La situation est normale». De 10 a menos de 50${NBSP}ppm: anomalía, hay que revisar el tiro del conducto y la ventilación del local. 50${NBSP}ppm o más: peligro grave, caldera parada. El Excel escribe la frase exacta.`,
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: 'Rendimiento, emisiones, consejos',
        title: 'Una comparación con la referencia',
        text: `El rendimiento y las emisiones se leen en las tablas de la orden y se comparan con una referencia: en gas y gasóleo, una caldera de condensación de la misma potencia y 35 o 90${NBSP}mg/kWh de óxidos de nitrógeno. Por debajo de 70${NBSP}kW, la clase energética también figura. Los consejos son orientativos.`,
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Certificado de mantenimiento de caldera: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de certificado de mantenimiento es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Quién debe entregar el certificado de mantenimiento de caldera en Francia?',
        answer:
          'El profesional que hizo el mantenimiento. Lo emite en los 15 días siguientes a su visita y lo entrega a quien encargó el mantenimiento: el ocupante para una caldera individual, salvo si el contrato de alquiler se lo encarga al arrendador, y el propietario o la comunidad de propietarios para una caldera colectiva. Puede enviarse por e-mail.',
      },
      {
        question: '¿Cuánto tiempo hay que conservar el certificado?',
        answer:
          'Al menos 2 años para quien lo recibió, que lo tiene a disposición de los agentes de control. Por tu parte, la orden te permite guardar una copia durante dos años, en papel o en archivo. El libro de visitas de la plantilla guarda todos los años.',
      },
      {
        question: `¿Qué hacer si la medición de CO supera 10${NBSP}ppm?`,
        answer: `De 10 a menos de 50${NBSP}ppm, la situación es anormal: avisas al usuario de que hay que revisar el tiro del conducto de humos y la ventilación del local, durante la visita o en una intervención aparte. A partir de 50${NBSP}ppm, es un peligro grave e inmediato: le ordenas mantener la caldera parada hasta su nueva puesta en servicio. La frase correspondiente figura en el certificado.`,
      },
      {
        question: '¿Cómo rellenar el rendimiento y las emisiones?',
        answer:
          'La orden prevé una evaluación con sus tablas: el rendimiento según la energía, la antigüedad y la potencia o el tipo de caldera (anexo 2), las emisiones en el anexo 3. Luego los comparas con las referencias, por ejemplo una caldera de condensación de la misma potencia para el rendimiento en gas o gasóleo. En el Excel, las referencias de las emisiones se rellenan según la energía elegida.',
      },
      {
        question: '¿Hace falta un certificado por caldera?',
        answer:
          'Sí. En una vivienda o un local con varias calderas, la orden exige un certificado por cada caldera mantenida. Lleva también un libro de visitas por caldera, para encontrar sus mediciones de un año a otro.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'En la hoja «Attestation», eliges la energía, el tipo y la evacuación en listas y escribes la medición de CO: la frase de la orden se escribe sola, igual que la fecha límite de entrega, la fecha del próximo mantenimiento, las referencias de las emisiones y la clase energética propuesta. El libro calcula el plazo de entrega de cada certificado. La hoja «Clients à relancer» calcula la fecha de aniversario, la fecha de aviso y el estado de cada cliente.',
      },
      {
        question: '¿Y cuando los contratos de mantenimiento se multiplican?',
        answer:
          'Un archivo por cliente y una lista de avisos bastan mientras los contratos sean pocos. Más allá, los programas franceses para empresas de fontanería y calefacción reúnen contratos de mantenimiento, visitas, certificados y avisos, con el historial de cada aparato. El test de la página de la herramienta te dice cuál elegir, con los precios 2026 de los programas del mercado.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los certificados, los libros y los avisos de tus contratos de mantenimiento se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para calefacción',
  },
}
