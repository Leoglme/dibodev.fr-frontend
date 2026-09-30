/** Where the phone link is displayed; also the tracked `location` of the click. */
export type PhoneLinkVariant = 'navbar' | 'menu' | 'footer'

/**
 * Type definitions for the PhoneLink component props.
 * @type {PhoneLinkProps}
 * @property {PhoneLinkVariant} variant - Display variant (size and colour).
 * @property {string} class - Extra classes merged into the link.
 */
export type PhoneLinkProps = {
  variant: PhoneLinkVariant
  class: string
}
