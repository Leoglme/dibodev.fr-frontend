import type { DibodevPhpUpdateServicePageContent } from '~/core/types/DibodevPhpUpdateServicePage'

export const PHP_UPDATE_SERVICE_PAGE_ES: DibodevPhpUpdateServicePageContent = {
  meta: {
    title: 'Actualización de PHP de tu web o software: intervención en 24 h',
    description:
      'Actualizo PHP y tu web WordPress, PrestaShop o software de gestión a distancia, tras una copia de seguridad. Diagnóstico gratuito, desde 190 €, respuesta en 24 h.',
    serviceName: 'Actualización de PHP de webs, tiendas y software de gestión',
  },
  breadcrumbLabel: 'Actualización de PHP',
  shareImage: {
    titleLines: ['Actualización de PHP', 'de tu web o software'],
    highlight: 'Desde 190 €, respuesta en 24 h',
    subtitle: 'Copia de seguridad, prueba en una copia, informe escrito',
    badge: 'Intervención a distancia',
    alt: 'Actualización de PHP de tu web o software: intervención a distancia desde 190 €, respuesta en 24 h',
  },
  hero: {
    titlePart1: 'Actualización de PHP de tu web, tienda o software: ',
    titleHighlight1: 'intervención a distancia',
    titlePart2: ' en 24 h',
    description:
      'Tu hosting dice «no se requiere ninguna acción», tu proveedor no responde, o tu web sigue en PHP 8.1 o anterior y no tiene ningún parche que recibir. Me ocupo a distancia: diagnóstico gratuito en 24 h, copia de seguridad, prueba en una copia, actualización, informe escrito. Los precios se anuncian de antemano.',
    ctaText: 'Enviar mi dirección',
    secondaryCtaText: 'Ver los precios',
    reassurances: ['Respuesta en 24 h', 'Copia de seguridad primero', 'Precios fijos, anunciados de antemano'],
  },
  offers: {
    anchorId: 'precios',
    eyebrow: 'Ofertas y precios',
    title: 'Cuatro paquetes, un precio conocido antes de empezar',
    intro:
      'El diagnóstico es gratuito y sin compromiso. Después, un precio fijo según lo que haya que actualizar, no una tarifa por horas que se dispara.',
    cards: [
      {
        title: 'Diagnóstico',
        price: 'Gratis',
        description:
          'Me envías la dirección de la web. En 24 h te digo por escrito si está afectada por el fallo del 21 de octubre de 2026, qué versión de PHP sirve y qué hacer. Sin compromiso.',
        isHighlighted: false,
      },
      {
        title: 'Web corporativa WordPress',
        price: '190 €',
        description:
          'Copia de seguridad fuera del servidor, prueba en una copia, cambio de versión de PHP en el hosting, actualización de WordPress, del tema y de los plugins, control del parche, prueba de la portada y de la administración, informe escrito.',
        isHighlighted: true,
      },
      {
        title: 'Tienda o web cargada',
        price: '390 €',
        description:
          'Todo el paquete de web corporativa, más los plugins numerosos, los módulos de pago y de envío, la prueba de un pedido y de los formularios, y la reparación si un plugin se rompe por el camino.',
        isHighlighted: false,
      },
      {
        title: 'Software de gestión, intranet, aplicación',
        price: 'Desde 690 €',
        description:
          'Auditoría del código y de las dependencias, subida de versión de PHP y del framework (Laravel, Symfony o propio), pruebas en una copia, puesta en producción acompañada. Presupuesto en 48 h tras una llamada.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Seguimiento: actualizaciones mensuales y vigilancia por 100 € al mes, sin permanencia.',
      'Precios netos, IVA no aplicable (art. 293 B del CGI francés). Intervención a distancia, en toda Francia y Europa.',
    ],
    ctaLabel: 'Enviar mi dirección',
    highlightLabel: 'El más solicitado',
    toolLinkText: 'Comprobar primero mi web gratis',
  },
  included: {
    anchorId: 'incluido',
    eyebrow: 'En cada intervención',
    title: 'Qué está incluido, sea cual sea el paquete',
    intro:
      'Las mismas precauciones para una web corporativa y para una tienda, porque ahí es donde las actualizaciones salen mal.',
    items: [
      {
        title: 'Copia de seguridad fuera del servidor',
        description: 'Archivos y base de datos copiados fuera del hosting antes de tocar nada.',
      },
      {
        title: 'Prueba en una copia',
        description:
          'La nueva versión de PHP se prueba primero en una copia de la web, nunca directamente en producción.',
      },
      {
        title: 'Vuelta atrás posible',
        description: 'Si un plugin se rompe y no se puede sustituir el mismo día, la web vuelve a su estado anterior.',
      },
      {
        title: 'Parche verificado',
        description: 'El número servido se controla tras la intervención: 8.2.35, 8.3.36, 8.4.27 u 8.5.12 como mínimo.',
      },
      {
        title: 'Informe escrito',
        description: 'Qué se ha hecho, qué se ha actualizado, qué queda por vigilar, en un lenguaje claro.',
      },
      {
        title: 'Sin cortes sin avisar',
        description:
          'La web sigue en línea durante la preparación. Si un cambio necesita un minuto de parada, se avisa.',
      },
    ],
  },
  audiences: {
    anchorId: 'para-quien',
    eyebrow: 'Para quién',
    title: 'Webs, tiendas, software y hostings cubiertos',
    intro: 'Todo lo que funciona con PHP, en cualquier hosting que permita elegir la versión.',
    items: [
      {
        title: 'WordPress y WooCommerce',
        description: 'Temas y plugins actualizados junto con PHP, y un plugin antiguo sustituido cuando bloquea.',
      },
      {
        title: 'PrestaShop, Magento, Joomla, Drupal',
        description: 'Subida de versión de PHP compatible con la versión del CMS, módulos de pago probados.',
      },
      {
        title: 'Software de gestión, intranet, extranet',
        description: 'Aplicaciones Laravel, Symfony o a medida, con auditoría de dependencias antes de la subida.',
      },
      {
        title: 'Hosting compartido o servidor',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, VPS o servidor dedicado.',
      },
    ],
  },
  method: {
    eyebrow: 'Cómo va',
    title: 'Cinco pasos, de tu mensaje al informe',
    intro: 'Nada que instalar por tu parte. Basta un acceso al hosting, que recuperas al final si lo deseas.',
    steps: [
      {
        label: 'Dirección',
        title: 'Me envías la dirección de la web',
        description: 'Por el formulario, con tu hosting si lo conoces. Si no, lo averiguo yo.',
      },
      {
        label: 'Diagnóstico',
        title: 'Respuesta escrita en 24 h',
        description: 'Versión de PHP servida, plataforma, hosting y el paquete adecuado. Gratis, sin compromiso.',
      },
      {
        label: 'Preparación',
        title: 'Copia de seguridad y copia de la web',
        description: 'Todo se copia fuera del servidor y la nueva versión se prueba en una copia.',
      },
      {
        label: 'Actualización',
        title: 'Cambio de versión y control',
        description: 'PHP, el CMS, el tema y los plugins, y luego la verificación del parche y de las páginas clave.',
      },
      {
        label: 'Informe',
        title: 'Qué se ha hecho, por escrito',
        description: 'Y qué habrá que vigilar. La factura llega después, no antes.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de escribirme',
    questions: [
      {
        question: 'Mi hosting dice que no se requiere ninguna acción. ¿Por qué hacer algo?',
        answer:
          'Porque ese mensaje vale para las ramas de PHP que el proyecto PHP todavía corrige, de 8.2 a 8.5. Una web que sigue en PHP 8.1, 8.0 o 7.4 no tiene ninguna versión corregida que recibir, en ningún hosting, salvo Infomaniak, que aplica un parche propio. El diagnóstico gratuito te dice en 24 h en qué caso estás.',
      },
      {
        question: '¿Cuánto dura la intervención?',
        answer:
          'Una o dos horas para una web corporativa, media jornada para una tienda con muchos módulos, y un presupuesto tras una auditoría para un software de gestión. La preparación se hace sin cortar la web.',
      },
      {
        question: '¿Se caerá mi web?',
        answer:
          'No durante la preparación y las pruebas, que se hacen en una copia. El cambio de versión en sí tarda unos minutos en la mayoría de los hostings, y se te avisa de la hora.',
      },
      {
        question: '¿Y si un plugin o un tema se rompe?',
        answer:
          'Eso es justo lo que la prueba en una copia revela antes de producción. Un plugin roto se actualiza, se sustituye por uno equivalente o, si nada es posible el mismo día, la web vuelve a su estado anterior y decidimos juntos cómo seguir.',
      },
      {
        question: '¿Con qué hostings trabajas?',
        answer:
          'Con todos los que permiten elegir la versión de PHP: OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, LWS, Gandi, y servidores VPS o dedicados. Las guías paso a paso de cada uno están en esta web si prefieres hacerlo tú.',
      },
      {
        question: 'No conozco mi versión de PHP ni mi hosting.',
        answer:
          'No es un problema. La herramienta de comprobación gratuita lee la versión cuando el servidor la muestra y reconoce el hosting, y el diagnóstico hace el resto. Solo necesitas la dirección de la web.',
      },
      {
        question: '¿También actualizas WordPress, el tema y los plugins?',
        answer:
          'Sí, está incluido en los paquetes de web corporativa y tienda. Cambiar PHP sin actualizar el resto es la mejor manera de romper una web, y lo contrario no protege del fallo.',
      },
      {
        question: '¿Cómo se paga?',
        answer:
          'Un diagnóstico gratuito, un precio anunciado antes de la intervención y una factura al terminar, pagada por transferencia. Precios netos, IVA no aplicable. Sin suscripción obligatoria: el seguimiento mensual es una opción que puedes cancelar cuando quieras.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para hacerlo tú, o entender qué pasa',
    intro: 'El fallo del 21 de octubre de 2026 explicado, y el paso a paso en cada hosting.',
  },
  contactCta: {
    title: 'Envíame la dirección de tu web',
    description: 'Diagnóstico gratuito en 24 h, y luego un precio fijo anunciado antes de cualquier intervención.',
    button: 'Enviar mi dirección',
  },
  mobileContactBar: {
    text: '¿Necesitas una actualización?',
    buttonLabel: 'Enviar mi dirección',
  },
}
