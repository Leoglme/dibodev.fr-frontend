import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'

export const JOOMLA_UPDATE_SERVICE_PAGE_ES: DibodevUpdateServicePageContent = {
  meta: {
    title: 'Actualización a Joomla 6 y PHP 8.3 de tu web: desde 190 €',
    description:
      'Paso tu web Joomla 3, 4 o 5 a Joomla 6 y PHP 8.3, a distancia, con el mismo diseño y los mismos formularios. Diagnóstico gratuito en 24 h, desde 190 €.',
    serviceName: 'Actualización de webs Joomla a Joomla 6 y PHP 8.3',
  },
  breadcrumbLabel: 'Actualización de Joomla',
  shareImage: {
    titleLines: ['Actualización a Joomla 6', 'y PHP 8.3 de tu web'],
    highlight: 'Desde 190 €, diagnóstico gratuito',
    subtitle: 'Copia de seguridad, prueba en una copia, mismo diseño',
    badge: 'Intervención a distancia',
    alt: 'Actualización de tu web Joomla a Joomla 6 y PHP 8.3: intervención a distancia desde 190 €, diagnóstico gratuito',
  },
  hero: {
    titlePart1: 'Actualización de Joomla: tu web pasa a Joomla 6 y PHP 8.3, ',
    titleHighlight1: 'sin cambiar de aspecto',
    titlePart2: '',
    description:
      'Joomla 3 y 4 ya no reciben correcciones, Joomla 5 termina en octubre de 2027 y PHP 8.2 el 31 de diciembre de 2026. Actualizo tu web a distancia: copia de seguridad, prueba en una copia, Joomla 6 y PHP 8.3, y después un informe escrito. Tu web conserva su diseño, sus contenidos y sus formularios.',
    ctaText: 'Enviar el enlace de mi web',
    secondaryCtaText: 'Ver los precios',
    reassurances: ['Diagnóstico gratuito en 24 h', 'Mismo diseño', 'Precio anunciado antes de empezar'],
  },
  offers: {
    anchorId: 'precios',
    eyebrow: 'Ofertas y precios',
    title: 'Un precio anunciado antes de empezar',
    intro:
      'El diagnóstico es gratuito y sin compromiso. Una subida de versión sencilla se factura al paquete básico; el precio solo sube si hay que adaptar la plantilla, sustituir extensiones o resolver un problema de seguridad, y lo conoces antes de que toque la web.',
    cards: [
      {
        title: 'Diagnóstico',
        price: 'Gratis',
        description:
          'Me envías el enlace de la web. En 24 h te digo por escrito qué versiones de Joomla y de PHP usa, qué puede bloquear el paso a Joomla 6 y el paquete que corresponde. Sin compromiso.',
        isHighlighted: false,
      },
      {
        title: 'Subida de versión sencilla',
        price: '190 €',
        description:
          'Una web Joomla 4 o 5 cuya plantilla y extensiones son compatibles con Joomla 6: copia de seguridad fuera del servidor, prueba en una copia, última versión de Joomla 5, PHP 8.3 y luego Joomla 6, extensiones actualizadas, páginas y formularios comprobados, informe escrito.',
        isHighlighted: true,
      },
      {
        title: 'Plantilla, extensiones o seguridad que rehacer',
        price: '390 €',
        description:
          'Todo el paquete básico, más la adaptación de una plantilla hecha a medida, la sustitución de las extensiones que bloquean (formulario, galería, editor) o la puesta en orden tras un fallo conocido: cuentas sospechosas eliminadas, versión corregida.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Joomla 3 o web que reconstruir: el paso requiere varias etapas (3.10, 4.4, 5.4 y luego 6) o trasladar los contenidos a un Joomla 6 nuevo. El precio se anuncia tras el diagnóstico gratuito, antes de cualquier intervención.',
      'Seguimiento: actualizaciones mensuales y vigilancia por 100 € al mes, sin permanencia.',
      'Precios netos, IVA no aplicable (art. 293 B del CGI francés). Intervención a distancia, en toda Francia y Europa.',
    ],
    ctaLabel: 'Enviar el enlace de mi web',
    highlightLabel: 'Paquete básico',
    toolLinkText: 'Comprobar primero la versión de Joomla de mi web',
  },
  included: {
    anchorId: 'incluido',
    eyebrow: 'En cada intervención',
    title: 'Lo que está incluido, sea cual sea el paquete',
    intro:
      'Las precauciones que evitan que una actualización de Joomla salga mal, tanto en una web de diez páginas como en una de mil.',
    items: [
      {
        title: 'Copia de seguridad completa primero',
        description: 'Archivos y base de datos, en una copia que se puede restaurar, guardada fuera del servidor.',
      },
      {
        title: 'Prueba en una copia',
        description:
          'Joomla 6 y PHP 8.3 se instalan primero en una copia de la web, nunca directamente en la web en producción.',
      },
      {
        title: 'Mismo diseño',
        description: 'Misma plantilla, mismos menús, mismos contenidos, mismas direcciones de página.',
      },
      {
        title: 'Formularios comprobados',
        description:
          'Contacto, reserva de citas, registro: cada formulario se muestra y se envía tras la actualización.',
      },
      {
        title: 'Vuelta atrás posible',
        description: 'Si una extensión bloquea y no se puede sustituir el mismo día, la web vuelve al estado anterior.',
      },
      {
        title: 'Informe escrito',
        description: 'Versiones antes y después, lo que se ha modificado, dónde están las copias, en lenguaje claro.',
      },
    ],
  },
  audiences: {
    anchorId: 'webs-afectadas',
    eyebrow: 'Webs afectadas',
    title: 'Joomla 3, 4 o 5, en cualquier hosting',
    intro: 'Del más sencillo al más largo, según la versión de partida.',
    items: [
      {
        title: 'Joomla 5',
        description:
          'Correcciones de seguridad hasta el 12 de octubre de 2027. El paso a Joomla 6 se hace con PHP 8.3, en la misma intervención.',
      },
      {
        title: 'Joomla 4',
        description:
          'Ninguna corrección desde el 14 de octubre de 2025. Paso por Joomla 5.4 y luego Joomla 6, en la misma copia de prueba.',
      },
      {
        title: 'Joomla 3',
        description:
          'Ninguna corrección desde el 17 de agosto de 2023. Actualización en varias etapas, o traslado de los contenidos a un Joomla 6 nuevo cuando es más corto.',
      },
      {
        title: 'Plantilla hecha a medida',
        description:
          'Una plantilla diseñada para Joomla 2.5 o 3 se comprueba en la copia y luego se adapta sin tocar el aspecto de la web.',
      },
      {
        title: 'Formularios y extensiones',
        description:
          'ChronoForms, JCE, Akeeba Backup, AcyMailing, 4SEF: actualizados uno a uno, o sustituidos cuando su editor ha desaparecido.',
      },
      {
        title: 'Hosting compartido o servidor',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, servidores Plesk o cPanel.',
      },
    ],
  },
  method: {
    eyebrow: 'Desarrollo',
    title: 'Cinco pasos, de tu mensaje al informe',
    intro:
      'Nada que instalar por tu parte. Basta con una cuenta de administrador de Joomla y un acceso al hosting, que retiras al final.',
    steps: [
      {
        label: 'Enlace',
        title: 'Me envías el enlace de la web',
        description:
          'Por el formulario, con tu versión de Joomla y tu hosting si los conoces. Si no, los encuentro yo.',
      },
      {
        label: 'Diagnóstico',
        title: 'Respuesta escrita en 24 h',
        description:
          'Versiones de Joomla y de PHP, plantilla, extensiones que pueden bloquear y el paquete que corresponde. Gratis, sin compromiso.',
      },
      {
        label: 'Preparación',
        title: 'Copia de seguridad y copia de prueba',
        description: 'Todo se guarda, y después la actualización se hace y se comprueba en una copia de la web.',
      },
      {
        label: 'Actualización',
        title: 'Joomla 6 y PHP 8.3 en producción',
        description:
          'La misma secuencia de operaciones en la web en producción, a la hora acordada, con una nueva copia de seguridad justo antes.',
      },
      {
        label: 'Informe',
        title: 'Lo que se ha hecho, por escrito',
        description: 'Versiones antes y después, lo que se ha modificado y lo que habrá que vigilar.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de escribirme',
    questions: [
      {
        question: '¿Cuánto cuesta actualizar una web Joomla a Joomla 6?',
        answer:
          '190 € por una subida de versión sencilla: una web Joomla 4 o 5 cuya plantilla y extensiones son compatibles con Joomla 6, con copia de seguridad, prueba en una copia e informe. 390 € cuando además hay que adaptar una plantilla hecha a medida, sustituir extensiones o poner la web en orden tras un fallo conocido. Para una web Joomla 3, el precio depende del camino más corto, y lo tienes tras el diagnóstico gratuito, antes de cualquier intervención.',
      },
      {
        question: '¿Se puede pasar directamente de Joomla 3 o 4 a Joomla 6?',
        answer:
          'No. El camino oficial pasa por la última versión de cada rama: 3.10, luego 4.4, luego 5.4 y después 6, cada una con su comprobación previa. En una copia de prueba, estas etapas se encadenan en la misma intervención, y la web en producción solo cambia cuando todo está validado.',
      },
      {
        question: '¿Joomla 5 sigue siendo seguro?',
        answer:
          'Sí, hasta el 12 de octubre de 2027, siempre que esté en la última versión 5.4 y con un PHP corregido. Pero PHP 8.2 termina el 31 de diciembre de 2026 y Joomla 6 exige PHP 8.3: hacer los dos cambios en la misma intervención evita pagar dos veces.',
      },
      {
        question: '¿Mi web mantendrá el mismo aspecto?',
        answer:
          'Sí. La plantilla se conserva y, si se diseñó para una versión antigua de Joomla, se adapta sin cambiar el aspecto: mismos colores, mismos menús, mismos contenidos, mismas direcciones de página. Las páginas principales y los formularios se comprueban antes y después.',
      },
      {
        question: '¿Seguirá funcionando mi formulario de contacto o de reserva de citas?',
        answer:
          'Es lo primero que compruebo. ChronoForms 7, por ejemplo, solo está anunciado por su editor hasta Joomla 5, pero funciona con Joomla 6 con una corrección de una línea, probada en noviembre de 2026. Cuando una extensión de formulario de verdad no es compatible, la sustituyo conservando los mismos campos y los mismos destinatarios.',
      },
      {
        question: '¿Hay que actualizar la web o rehacerla?',
        answer:
          'Actualizo cuando la plantilla se puede adaptar y las extensiones importantes existen para Joomla 6. Para una web Joomla 3 antigua con extensiones abandonadas, trasladar los contenidos a un Joomla 6 nuevo puede costar menos. El diagnóstico te dice cuál de los dos, antes de cualquier compromiso.',
      },
      {
        question: '¿Qué accesos necesitas?',
        answer:
          'Una cuenta de administrador de Joomla (grupo Super Users) y un acceso al hosting, para la versión de PHP y la copia de seguridad. Si los tiene tu webmaster o tu agencia, puede creármelos. Los retiras al final.',
      },
      {
        question: '¿Se cortará mi web?',
        answer:
          'No durante la preparación, que se hace en una copia. En la web en producción, el cambio tarda unos minutos, a la hora acordada contigo.',
      },
      {
        question: '¿Cuánto tiempo hace falta?',
        answer:
          'Unas horas para una web Joomla 5 sin sorpresas, uno o dos días cuando la plantilla o las extensiones requieren trabajo. El diagnóstico llega en 24 h.',
      },
      {
        question: '¿Trabajas con webmasters y agencias?',
        answer:
          'Sí. Si uno de tus clientes necesita una actualización de versión, una revisión de seguridad o una limpieza tras un hackeo, puedes enviármelo y, si quieres, lo trato directamente con él, solo para la parte técnica. El diseño, los contenidos y la comunicación, por supuesto, siguen en tus manos.',
      },
      {
        question: '¿Cómo es el pago?',
        answer:
          'El diagnóstico es gratuito, el precio se anuncia por escrito antes de la intervención y la factura se paga por transferencia. Precios netos, IVA no aplicable. Sin suscripción obligatoria: el seguimiento mensual es una opción que puedes cancelar cuando quieras.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para entender antes de decidir',
    intro: 'Las versiones de Joomla y de PHP que siguen con soporte, y el relato de una actualización a Joomla 6.',
  },
  contactCta: {
    title: 'Envíame el enlace de tu web Joomla',
    description: 'Diagnóstico gratuito en 24 h, y después un precio anunciado antes de cualquier intervención.',
    button: 'Enviar el enlace de mi web',
  },
  mobileContactBar: {
    text: '¿Tu web Joomla necesita una actualización?',
    buttonLabel: 'Enviar el enlace de mi web',
  },
}
