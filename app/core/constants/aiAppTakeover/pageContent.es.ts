import type { DibodevAiAppTakeoverPageContent } from '~/core/types/DibodevAiAppTakeoverPage'
import {
  LOVABLE_CREDITS_SOURCE,
  LOVABLE_CVE_SOURCE,
  SUPABASE_RLS_SOURCE,
  VERACODE_REPORT_SOURCE,
} from '~/core/constants/aiAppTakeover/pageShared'

export const AI_APP_TAKEOVER_PAGE_CONTENT_ES: DibodevAiAppTakeoverPageContent = {
  meta: {
    title: 'Recuperar una aplicación Lovable o Bolt bloqueada | Dibodev',
    description:
      '¿Aplicación hecha con Lovable, Bolt, v0 o Cursor que falla o no llega a producción? Auditoría gratuita, puesta en seguridad y recuperación a precio cerrado, por un freelance.',
    serviceName:
      'Recuperación, puesta en seguridad y puesta en producción de aplicaciones generadas por IA (Lovable, Bolt, v0, Cursor)',
  },
  breadcrumbLabel: 'Recuperación de aplicación IA',
  hero: {
    titlePart1: 'Recuperar una aplicación hecha con ',
    titleHighlight: 'Lovable, Bolt o Cursor',
    titlePart2: '',
    description:
      'Tu herramienta la generó una IA, y falla, se rompe con cada corrección o no llega a producción. La audito gratis, la aseguro y la termino, a precio cerrado, sin tirarlo todo.',
    cta: 'Pedir mi auditoría gratuita',
    ctaSecondary: 'Hacer el test de 8 preguntas',
    reassurances: [
      'Auditoría gratuita, primera opinión en 48 h',
      'El código y los datos siguen siendo tuyos',
      'A distancia, desde Francia',
    ],
    portraitAlt: 'Retrato de Léo Guillaume, desarrollador freelance que recupera aplicaciones generadas por IA',
    portraitCaption: 'Desarrollador freelance, cerca de Rennes (Francia)',
  },
  symptoms: {
    eyebrow: '¿Te suena?',
    title: 'Seis situaciones que encuentro en casi todas las aplicaciones generadas por IA',
    intro:
      'Si te reconoces en dos o tres de ellas, no es un fracaso. Es el momento en que un prototipo tiene que convertirse en una aplicación de verdad.',
    items: [
      {
        title: 'Cada corrección rompe otra cosa',
        description:
          'Pides un retoque, la IA repara una pantalla y desajusta otra. Tras diez idas y venidas, nadie sabe qué sigue funcionando.',
      },
      {
        title: 'La base de datos está abierta a todos',
        description:
          'Las reglas de acceso generadas suelen ser demasiado permisivas: cualquiera que conozca la dirección puede leer las fichas de clientes. Es un problema legal, no solo técnico.',
      },
      {
        title: 'Imposible añadir una función',
        description:
          'El pago, los recordatorios o la exportación que querías desde el principio ya no pasan: la IA da vueltas sobre una lógica que ya no entiende.',
      },
      {
        title: 'Los créditos se disparan',
        description:
          'Cada intento de corrección consume créditos, incluso cuando falla. La factura sube y el proyecto no avanza.',
      },
      {
        title: 'Funciona para ti, no para veinte usuarios',
        description: 'Lentitud, datos que se mezclan, reservas duplicadas en cuanto varias personas trabajan a la vez.',
      },
      {
        title: 'Nadie quiere retomar el código',
        description:
          'El proveedor o la herramienta ya no están, o un desarrollador lo miró y te aconsejó rehacerlo todo. Te quedas bloqueado con una herramienta que usas cada día.',
      },
    ],
  },
  risks: {
    eyebrow: 'Lo que la auditoría mira primero',
    title: 'Lo que tu aplicación expone sin que lo sepas',
    intro: 'Cuatro puntos que reviso antes que nada, con las cifras públicas que muestran que no es teoría.',
    facts: [
      {
        contextLabel: '45 % de las pruebas',
        title: 'Código generado con fallos de seguridad',
        text: 'En el estudio 2025 de Veracode sobre más de cien modelos de IA, el código generado introducía un fallo de seguridad en el 45 % de las pruebas. Los modelos más recientes o más grandes no lo hacen mejor.',
        sourceName: VERACODE_REPORT_SOURCE.name,
        sourceUrl: VERACODE_REPORT_SOURCE.url,
      },
      {
        contextLabel: 'CVE-2025-48757, puntuación 9,3 sobre 10',
        title: 'Bases de datos Lovable legibles por cualquiera',
        text: 'Una vulnerabilidad publicada en mayo de 2025 describe reglas de acceso insuficientes en las bases de datos de los sitios generados con Lovable: lectura y escritura posibles sin cuenta. Lovable responde que la protección de los datos sigue siendo responsabilidad de cada cliente. Así que hay que comprobarlo en la tuya.',
        sourceName: LOVABLE_CVE_SOURCE.name,
        sourceUrl: LOVABLE_CVE_SOURCE.url,
      },
      {
        contextLabel: 'Regla de Supabase',
        title: 'Sin reglas de acceso, una tabla es pública',
        text: 'La documentación de Supabase, la base de datos que usan Lovable y Bolt, lo dice sin rodeos: una tabla expuesta sin Row Level Security puede leerla y modificarla cualquier rol con acceso, incluido el rol público que usa tu aplicación.',
        sourceName: 'Documentación de Supabase',
        sourceUrl: SUPABASE_RLS_SOURCE.url,
      },
      {
        contextLabel: '0,50 a 2 créditos por petición',
        title: 'Correcciones cobradas aunque fallen',
        text: 'En Lovable, cada mensaje en modo construcción cuesta créditos: poner un botón en gris 0,50, añadir autenticación 1,20. Una petición detenida a medias se cobra por el trabajo ya hecho, y los créditos mensuales caducan a los dos meses.',
        sourceName: 'Documentación de Lovable',
        sourceUrl: LOVABLE_CREDITS_SOURCE.url,
      },
    ],
  },
  test: {
    eyebrow: 'Test gratuito',
    title: '¿Tu aplicación hecha con IA se sostiene?',
    intro:
      'Ocho preguntas sobre tu herramienta, sus usuarios y sus datos. El test te da un nivel de riesgo, los puntos que revisaría primero y la fórmula adecuada. Sin registro.',
  },
  method: {
    eyebrow: 'Cómo trabajo',
    title: 'De la auditoría gratuita a la aplicación fiable',
    intro: 'Puedes parar después de cada etapa, y tu aplicación sigue en línea durante todo el trabajo.',
    steps: [
      {
        label: 'Auditoría',
        title: 'Una auditoría gratuita, sin compromiso',
        description:
          'Treinta minutos por videollamada o teléfono, y luego leo tu código y tus reglas de acceso (repositorio GitHub en solo lectura, o exportación de la herramienta). En menos de 48 h sabes si tu aplicación se puede salvar y por dónde empezar.',
      },
      {
        label: 'Diagnóstico',
        title: 'Un diagnóstico escrito, ordenado por urgencia',
        description:
          'Si quieres ir más lejos, redacto la lista completa: fallos, errores, deuda técnica, lo que se conserva y lo que se rehace, con un precio cerrado por etapa. Se descuenta de lo que sigue si continúas.',
      },
      {
        label: 'Recuperación',
        title: 'Asegurar, estabilizar, terminar',
        description:
          'Primero los datos y los accesos, luego los errores que bloquean, luego las funciones que faltan. Trabajo sobre una copia y cambiamos cuando está listo.',
      },
      {
        label: 'Después',
        title: 'El código a tu nombre, y un apoyo si lo quieres',
        description:
          'Repositorio GitHub tuyo, documentación, copias de seguridad en marcha. Sigues con la IA sobre una base sana, o me confías el mantenimiento.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Tarifas',
    title: 'Precios fijados antes de empezar',
    intro: 'Cada etapa tiene su precio, anunciado de antemano, y puedes parar después de cada una.',
    offers: [
      {
        title: 'Auditoría',
        price: 'Gratis',
        description:
          'Treinta minutos de conversación, lectura del código y de las reglas de acceso, primera opinión escrita en 48 h.',
        isHighlighted: false,
      },
      {
        title: 'Diagnóstico escrito',
        price: '400 €',
        description:
          'Lista completa de fallos, errores y correcciones, ordenada por urgencia, con un precio cerrado por etapa. Se descuenta si continúas.',
        isHighlighted: false,
      },
      {
        title: 'Puesta en seguridad',
        price: 'De 900 a 1.500 €',
        description:
          'Reglas de acceso de la base, claves fuera del navegador, copias de seguridad, cuentas y permisos. De tres a siete días.',
        isHighlighted: false,
      },
      {
        title: 'Recuperación y puesta en producción',
        price: 'De 2.500 a 6.000 €',
        description:
          'Errores bloqueantes corregidos, duplicados eliminados, pruebas en los recorridos sensibles, despliegue limpio. De dos a cuatro semanas.',
        isHighlighted: true,
      },
    ],
    notes: [
      'Una reconstrucción completa se presupuesta tras el diagnóstico: la mayoría de las herramientas de pymes están entre 5.000 y 15.000 €.',
      'Mantenimiento después, si lo quieres: de 100 a 300 € al mes.',
      'Precios netos: IVA no aplicable (artículo 293 B del código fiscal francés).',
    ],
    highlightLabel: 'El más habitual',
    cta: 'Pedir mi auditoría gratuita',
    secondaryLink: 'Hacer el test de 8 preguntas',
  },
  deliverables: {
    eyebrow: 'Lo que recuperas',
    title: 'Al final, todo es tuyo',
    intro: '',
    items: [
      {
        title: 'El código en un repositorio a tu nombre',
        description:
          'Un repositorio GitHub que posees, legible por cualquier desarrollador. Ya no dependes de una herramienta.',
      },
      {
        title: 'Datos protegidos',
        description:
          'Cada usuario solo ve sus datos, las claves sensibles están en el servidor, y una prueba lo verifica.',
      },
      {
        title: 'Pruebas y un despliegue repetible',
        description:
          'Los recorridos que importan (acceso, pago, reserva) se prueban automáticamente, y la puesta en línea se hace con un solo comando.',
      },
      {
        title: 'Documentación y alguien a quien llamar',
        description: 'Cómo lanzar, guardar y restaurar la aplicación, por escrito. Y alguien a quien llamar.',
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Caso real',
    title: 'Una herramienta de automatización con IA, hecha con Base44 y luego Lovable, rehecha para durar',
    intro:
      'Un cliente llegó con una herramienta que había construido él mismo, y que usaba cada día a pesar de los fallos.',
    columns: [
      {
        stage: 'before',
        title: 'Antes',
        items: [
          'Una herramienta de automatización con IA construida por el propio cliente, con Base44 y luego Lovable',
          'Errores en cada uso y resultados inestables',
          'Una arquitectura que impedía cualquier evolución, y una interfaz que hacía perder tiempo',
        ],
      },
      {
        stage: 'built',
        title: 'Lo que hice',
        items: [
          'Lectura de lo existente para conservar exactamente lo que la herramienta debía hacer',
          'Aplicación rehecha con tecnologías extendidas, elegidas para la necesidad y no para la demostración',
          'Interfaz repensada alrededor del día a día del cliente',
        ],
      },
      {
        stage: 'after',
        title: 'Después',
        items: [
          'Una herramienta estable, usada cada día',
          'Código legible, que cualquier desarrollador puede retomar',
          'Una base lista para las próximas funciones, pensada para durar años',
        ],
      },
    ],
  },
  sampleReport: {
    eyebrow: 'Ejemplo de diagnóstico',
    title: 'Cómo es el informe que recibes',
    intro:
      'Extracto de un diagnóstico redactado sobre un proyecto de demostración (una aplicación de reservas generada con Lovable), para mostrarte el nivel de detalle. Cada punto da la observación, la gravedad y la corrección prevista.',
    items: [
      {
        title: 'Crítico · La tabla de clientes se puede leer sin cuenta',
        description:
          'Ninguna regla de acceso en la tabla de clientes: con la clave pública de la aplicación, cualquiera puede listar nombres, correos y teléfonos. Corrección: reglas por usuario, verificadas por una prueba automática.',
      },
      {
        title: 'Alto · La clave de pago está en el código enviado al navegador',
        description:
          'La clave secreta de Stripe se llama desde la página. Corrección: mover la llamada al servidor y renovar la clave.',
      },
      {
        title: 'Medio · Dos reservas pueden ocupar la misma franja',
        description:
          'Nada impide que dos clientes reserven la misma plaza al mismo tiempo. Corrección: restricción en la base de datos y mensaje claro al usuario.',
      },
      {
        title: 'A vigilar · Ninguna copia de seguridad restaurable',
        description:
          'El proveedor de alojamiento guarda la base, pero nadie ha probado nunca una restauración. Corrección: copia diaria y ensayo de restauración documentado.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Recuperar una aplicación hecha con IA: tus preguntas',
    questions: [
      {
        question: '¿Se puede salvar mi aplicación?',
        answer:
          'En la mayoría de los casos, sí. Si la estructura aguanta, se asegura, se limpia y se continúa a partir de tu código. Si cada pantalla se parcheó por separado, empezar sobre una base limpia a veces cuesta menos que tapar agujeros durante meses. La auditoría gratuita te lo dice antes de gastar un euro.',
      },
      {
        question: '¿Hay que reescribirlo todo?',
        answer:
          'Rara vez. Reescribir borra lo que ya funciona. Conservo la interfaz y los recorridos que tus usuarios conocen, y rehago solo los cimientos que ceden: accesos, datos, pago, despliegue.',
      },
      {
        question: '¿Cómo te paso mi código de Lovable o Bolt?',
        answer:
          'Lovable y Bolt sincronizan el proyecto con un repositorio GitHub que te pertenece; me das acceso de solo lectura. Sin repositorio, la exportación del código basta para la auditoría. No modifico nada sin tu acuerdo.',
      },
      {
        question: '¿Debo mantener mi suscripción durante la recuperación?',
        answer:
          'Durante la auditoría, sí, para que nada se mueva. Después, tú decides: muchos conservan la herramienta para maquetar nuevas pantallas y confían a un desarrollador todo lo que va a producción.',
      },
      {
        question: '¿Mis datos han podido filtrarse?',
        answer:
          'Es lo primero que compruebo. Si la base estaba abierta, te lo digo por escrito, con lo que el RGPD te exige (informar a las personas afectadas y notificar a la autoridad de control en 72 horas cuando el riesgo es real), y cierro la puerta el mismo día.',
      },
      {
        question: '¿Cuánto tiempo lleva?',
        answer:
          'Primera opinión en 48 horas. Puesta en seguridad en tres a siete días. Recuperación y puesta en producción en dos a cuatro semanas. Una reconstrucción completa sigue el ritmo de un proyecto clásico, entregado por etapas.',
      },
      {
        question: '¿Trabajas también con v0, Cursor, Claude Code, Replit o Base44?',
        answer:
          'Sí. Las herramientas cambian, los defectos se parecen: accesos demasiado amplios, claves en el navegador, sin pruebas, sin copia de seguridad. Recuperé una herramienta construida con Base44 y luego Lovable, y trabajo con React, Nuxt, Vue, Node.js y Python.',
      },
      {
        question: '¿Podré seguir usando la IA después?',
        answer:
          'Sí, y hasta es recomendable para los retoques pequeños. La diferencia es que, una vez en producción, cada cambio pasa por una revisión y pruebas antes de publicarse.',
      },
      {
        question: '¿Trabajas a distancia?',
        answer:
          'Sí, con empresas de Rennes, de Bretaña y de otros lugares de Francia. Videollamada, teléfono, acceso al repositorio: todo se hace a distancia, con puntos regulares.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    intro: 'Lo que he escrito sobre aplicaciones generadas por IA, no-code y herramientas a medida.',
  },
  contactCta: {
    title: '¿Una aplicación hecha con IA que te preocupa?',
    description:
      'Envíame su dirección y unas palabras sobre lo que falla. Leo el código y te vas con una primera opinión escrita en 48 h, gratis, incluso si la conclusión es que todo está bien.',
    button: 'Pedir mi auditoría gratuita',
  },
}
