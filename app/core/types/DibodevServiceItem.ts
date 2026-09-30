/**
 * Type definitions for the DibodevServiceItem component props.
 * @type {DibodevServiceItemProps}
 * @property {string} title - The title of the service card.
 * @property {string} description - A short description of the service.
 * @property {string} price - Optional price line displayed at the bottom of the card (e.g. "À partir de 1 500 €").
 * @property {string} accentColor - Saturated accent colour (price line, hover border).
 * @property {string} accentBackground - Pastel background of the icon tile.
 */
export type DibodevServiceItemProps = {
  title: string
  description: string
  price: string
  accentColor: string
  accentBackground: string
}
