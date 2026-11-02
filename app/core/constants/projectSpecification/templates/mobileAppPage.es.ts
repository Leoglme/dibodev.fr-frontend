import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_MOBILE_APP_PAGE_ES: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'mobileApp',
  meta: {
    title: 'Pliego de condiciones de app móvil: plantilla y ejemplo',
    description:
      'Plantilla Word de pliego de condiciones de app móvil para iPhone y Android, con ejemplo en PDF: pantallas, funciones, presupuesto. Gratis, sin e-mail.',
    inLanguage: 'es-ES',
    schemaAbout: 'Pliego de condiciones de una app móvil',
  },
  breadcrumbLabel: 'App móvil',
  shareImage: {
    titleLines: ['Pliego de condiciones', 'de app móvil'],
    highlight: 'app móvil',
    subtitle: 'Plantilla Word y ejemplo rellenado en PDF',
    badge: 'Gratis · sin e-mail',
    alt: 'Plantilla gratis de pliego de condiciones para una app móvil iPhone y Android, en Word, con un ejemplo rellenado en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Pliego de condiciones de app móvil',
    titleAfter: ': plantilla gratis en Word y PDF, con un ejemplo rellenado',
    reassurances: ['Plantilla + ejemplo rellenado', 'Word editable', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un pliego de condiciones de app móvil en nueve partes, listo para rellenar, y el mismo documento rellenado para un gimnasio de Rennes, en Francia. Sirve si tu empresa quiere una app para iPhone y Android, para tus clientes o tus equipos, y vas a pedir presupuestos. Las pantallas, las funcionalidades ordenadas por prioridad, el presupuesto y el plazo ya están previstos, igual que la publicación en las tiendas de aplicaciones y la eliminación de la cuenta desde la app.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Son las preguntas que hago antes de presupuestar una app móvil.',
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para tu empresa, si preparas una app para tus clientes o tus equipos. El Word se rellena y se modifica, el PDF muestra el mismo documento rellenado de principio a fin.',
    templateLabel: 'Descargar la plantilla Word',
    templateMeta: 'Word, 9 partes para rellenar',
    exampleLabel: 'Descargar el ejemplo rellenado',
    exampleMeta: 'PDF, un gimnasio en Rennes',
    generatorText: 'Más rápido: responde a cinco preguntas y el documento se redacta solo, a tu nombre.',
    generatorLinkLabel: 'Rellenarlo en 5 minutos con el generador',
    footnote: 'Plantilla de uso libre, para adaptar a tu proyecto y enviar a cualquier proveedor.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una plantilla para rellenar y un ejemplo completo',
    intro:
      'El Word recoge las nueve partes con, bajo cada título, una indicación en gris que sustituyes por tu texto. El PDF es el mismo documento rellenado, para ver el nivel de detalle esperado.',
    documents: [
      {
        title: 'La plantilla para rellenar',
        format: 'Word, editable en Word, LibreOffice, Google Docs o Pages',
        items: [
          'Presentación de la empresa y del proyecto, creación o rediseño',
          'Objetivos, cada uno con su medida, y usuarios previstos',
          'Las pantallas típicas de una app móvil, para tachar o completar',
          'Diez funcionalidades para clasificar en imprescindible o deseable',
          'Contenidos e identidad visual, requisitos de App Store, Google Play y RGPD',
          'Presupuesto, plazo, mantenimiento y lo que debe incluir cada presupuesto que recibas',
        ],
      },
      {
        title: 'El ejemplo rellenado',
        format: 'PDF, Fitness Moreau en Rennes (empresa ficticia)',
        items: [
          'Un gimnasio de Rennes, con un equipo de 2 a 10 personas, que crea su app para sus clientes',
          'Tres objetivos, cada uno con su medida: que los clientes vuelvan, recibir reservas desde el móvil, avisar a los clientes con notificaciones',
          'Seis pantallas: inicio, inicio de sesión y registro, lista y ficha de detalle, reserva, perfil, administración desde el ordenador',
          'Seis funcionalidades clasificadas en imprescindible y deseable, entre ellas la reserva de franjas horarias y el pago dentro de la app',
          'Un presupuesto por definir con el proveedor, que propone una versión esencial y sus opciones, una puesta en línea en un plazo de seis meses y el mantenimiento presupuestado aparte',
          'La lista de lo que debe incluir cada presupuesto, hasta la propiedad del código y de las cuentas de las tiendas',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Ejemplo de pliego de condiciones',
    title: 'El ejemplo rellenado, para leer aquí',
    intro:
      'La app de un gimnasio en Rennes, en Francia, tal como la describe el generador a partir de cinco respuestas.',
    expandLabel: 'Leer todo el ejemplo',
    collapseLabel: 'Contraer el ejemplo',
    generatorLinkLabel: 'Hacer lo mismo a mi nombre',
    answers: {
      projectType: 'mobileApp',
      kind: 'creation',
      companyName: 'Fitness Moreau',
      activity: 'gimnasio: clases colectivas, entrenamiento personal y abonos',
      city: 'Rennes',
      companySize: 'small',
      goals: ['booking', 'loyalty', 'notify'],
      audience: 'customers',
      features: ['iosAndroid', 'accounts', 'notifications', 'admin', 'booking', 'inAppPayment'],
      contentSource: 'together',
      budget: 'unknown',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Mapa de pantallas',
    title: 'Las pantallas de una app móvil',
    intro:
      'Es la parte que fija el precio. Estas son las pantallas de una app de gimnasio: parte de este plano, tacha lo que no te afecte y añade lo que falte.',
    ariaLabel:
      'Plano de una app móvil de gimnasio: el inicio, luego el horario de clases con la reserva de una clase y mis reservas, el abono y su pago, las notificaciones, el perfil con la eliminación de la cuenta, y la administración desde el ordenador; desde el perfil, la privacidad y las condiciones de uso.',
    rootLabel: 'Inicio',
    branches: [
      { label: 'Horario de clases', children: ['Reservar una clase', 'Mis reservas'] },
      { label: 'Abono', children: ['Pago'] },
      { label: 'Notificaciones', children: [] },
      { label: 'Perfil', children: ['Eliminar mi cuenta'] },
      { label: 'Administración desde el ordenador', children: [] },
    ],
    footerNote: 'Desde el perfil: política de privacidad y condiciones de uso',
    notes: [
      {
        title: 'La cuenta, de la creación a la eliminación',
        text: 'Creación, inicio de sesión y eliminación: prevé las tres pantallas. App Store y Google Play exigen poder eliminar la cuenta desde la app.',
      },
      {
        title: 'La administración, desde el ordenador',
        text: '¿Quién añade las clases y envía las notificaciones? A menudo el equipo, desde un navegador. Esa herramienta forma parte del proyecto: descríbela como el resto.',
      },
      {
        title: 'Empieza por lo esencial',
        text: 'Cada pantalla se diseña y se prueba en iPhone y en Android. Deja para una actualización lo que no sea imprescindible el día de la publicación.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la plantilla en cuatro pasos',
    intro:
      'Sustituye cada indicación gris por tu texto y borra lo que no te afecte. Mantén el orden de las partes: es el orden en que lo lee un proveedor.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Empieza por la empresa y los objetivos',
        description:
          'Cinco líneas sobre ti, tres objetivos con su medida y quién usará la app: tus clientes, tus equipos o los dos.',
      },
      {
        label: 'Paso 2',
        title: 'Enumera las pantallas y ordena las funcionalidades',
        description:
          'Mantén las pantallas típicas y di en una línea qué muestra cada una. Luego ordena cada funcionalidad: imprescindible el día de la publicación, o deseable para una actualización.',
      },
      {
        label: 'Paso 3',
        title: 'Di quién aporta qué',
        description: 'Textos, imágenes, logo, icono de la app: quién se encarga y para cuándo.',
      },
      {
        label: 'Paso 4',
        title: 'Da un presupuesto y una fecha',
        description:
          'Una horquilla y una fecha de lanzamiento. Sin horquilla, pide una versión esencial y sus opciones. Luego envía el mismo documento a dos o tres proveedores.',
      },
    ],
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Lo que piden las tiendas y la ley francesa',
    title: 'Cuatro puntos para escribir en el pliego de condiciones',
    intro:
      'Afectan a toda app que crea cuentas. La plantilla ya incluye la eliminación de la cuenta y el RGPD entre sus requisitos, para que entren en el precio desde el primer presupuesto.',
    facts: [
      {
        contextLabel: 'App Store, norma 5.1.1 (v)',
        title: 'Eliminar la cuenta desde la app',
        text: 'Una app que permite crear una cuenta también debe permitir eliminarla, desde la propia app. Preverlo en el pliego evita descubrirlo en el momento de la publicación.',
        sourceName: 'Apple, App Review Guidelines',
        sourceUrl: 'https://developer.apple.com/app-store/review/guidelines/',
      },
      {
        contextLabel: 'Google Play',
        title: 'La misma exigencia en Android',
        text: 'Google Play tiene sus propios requisitos de eliminación de cuentas: una app que permite crear una cuenta también debe permitir solicitar su eliminación.',
        sourceName: 'Google Play, requisitos de eliminación de cuentas',
        sourceUrl: 'https://support.google.com/googleplay/android-developer/answer/13327111',
      },
      {
        contextLabel: 'Antes del diseño',
        title: 'Las recomendaciones de la CNIL',
        text: 'La CNIL, la autoridad francesa de protección de datos, publica recomendaciones propias de las apps móviles, sobre los datos personales de sus usuarios. Adjúntalas al pliego de condiciones para que el proveedor las tenga en cuenta desde el diseño.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/recommandations-applications-mobiles',
      },
      {
        contextLabel: 'Desde la primera cuenta',
        title: 'Las obligaciones del RGPD en Francia',
        text: 'Nombre, e-mail, reservas: una app con cuentas recoge datos personales, y la empresa que la publica debe cumplir las obligaciones del RGPD.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Pliego de condiciones de app móvil: tus preguntas',
    questions: [
      {
        question: '¿Qué poner en el pliego de condiciones de una app móvil?',
        answer:
          'Nueve partes: la empresa, el proyecto, los objetivos y los usuarios, las pantallas, las funcionalidades, los contenidos, los requisitos técnicos y legales, el presupuesto y el plazo, y lo que debe incluir cada presupuesto que recibas. La plantilla las recoge en ese orden. Para una app, los requisitos añaden la publicación en App Store y Google Play a nombre de tu empresa, la eliminación de la cuenta desde la app y la propiedad del código fuente.',
      },
      {
        question: 'Una app para iPhone y Android: ¿hacen falta dos aplicaciones?',
        answer:
          'No necesariamente. Una sola base de código puede servir para las dos: la app se escribe una vez y luego se publica en App Store y en Google Play. Siguen siendo dos publicaciones, una por tienda, pero un solo código que mantener. La plantilla lo recoge en sus requisitos: una sola aplicación para iPhone y Android.',
      },
      {
        question: '¿App móvil o web adaptada al móvil?',
        answer:
          'Una web adaptada al móvil basta para presentar tu actividad, aparecer en Google y recibir solicitudes. Una app tiene sentido cuando tus clientes o tus equipos la abren a menudo: reservar una clase, recibir una notificación, trabajar sin conexión, pagar un abono. Si el uso es ocasional, empieza por la web.',
      },
      {
        question: '¿Cuánto cuesta una app móvil?',
        answer:
          'En Dibodev, una app móvil se presupuesta caso por caso, a partir de tu pliego de condiciones. El precio depende sobre todo del número de pantallas, de las funcionalidades (cuentas, reservas, pago, modo sin conexión) y de la administración que haga falta. Sin presupuesto definido, el generador pide al proveedor una versión esencial y sus opciones.',
      },
      {
        question: '¿Quién publica la app en las tiendas, y a nombre de quién?',
        answer:
          'La app se publica a nombre de tu empresa, en sus propias cuentas de App Store y Google Play. El proveedor puede encargarse de la publicación, pero las cuentas y el código fuente siguen siendo tuyos: la plantilla pide que cada presupuesto lo confirme.',
      },
      {
        question: '¿La plantilla es realmente gratis?',
        answer: 'Sí, sin registro ni e-mail. Puedes enviarla a cualquier proveedor, no solo a mí.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Las otras plantillas',
    title: '¿Otro proyecto que no sea una app móvil?',
    generatorCard: {
      projectType: 'mobileApp',
      eyebrow: 'Generador gratis',
      title: 'El tuyo en 5 minutos',
      text: 'Cinco preguntas, y el documento se redacta a tu nombre mientras respondes. Word o PDF, sin e-mail.',
      note: 'Web corporativa, tienda online, software de gestión o app móvil',
    },
    generatorLinkLabel: 'Abrir el generador',
  },
  contactCta: {
    title: '¿Ya has rellenado tu pliego de condiciones?',
    description: `Envíamelo: te respondo en 24${NBSP}h, con un precio o con mis preguntas. Si una web adaptada al móvil basta para lo que necesitas, te lo digo.`,
    button: 'Pedir un presupuesto',
    generatorLinkLabel: 'Rellenarlo con el generador',
  },
  mobileBar: {
    text: 'Plantilla gratis, sin e-mail',
    button: 'Descargar la plantilla Word',
  },
}
