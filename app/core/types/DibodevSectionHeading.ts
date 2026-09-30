/**
 * Type definitions for the DibodevSectionHeading component props.
 * @type {DibodevSectionHeadingProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {'left' | 'center'} align - Text alignment of the heading block.
 */
export type DibodevSectionHeadingProps = {
  eyebrow: string
  title: string
  intro: string
  align: 'left' | 'center'
}
