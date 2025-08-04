export const dibodevServiceIconNames: string[] = ['apps', 'mobile', 'seo', 'cloud-computing'] as const

/**
 * Type definitions for the dibodev service component icon
 * @type {DibodevServiceIconName}
 */
export type DibodevServiceIconName = (typeof dibodevServiceIconNames)[number]

/**
 * Type definitions for the DibodevServiceIcon component props.
 * @type {DibodevServiceIconProps}
 * @property {DibodevServiceIconName} serviceIconName - The name of the service icon to display.
 */
export type DibodevServiceIconProps = {
  serviceIconName: DibodevServiceIconName
}
