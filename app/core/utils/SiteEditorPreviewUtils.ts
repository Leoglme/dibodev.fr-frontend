import type { SiteEditorPreviewMessage } from '~/core/types/SiteEditorPreview'
import { SITE_EDITOR_PREVIEW_CHANNEL } from '~/core/constants/siteEditorPreview'

/**
 * Messaging between the site editor and the preview page it frames (same origin only).
 */
export class SiteEditorPreviewUtils {
  /**
   * Sends a message to the other window, readable by this origin only.
   * @param {Window | null | undefined} targetWindow - The window to send the message to.
   * @param {SiteEditorPreviewMessage} message - The message.
   * @returns {void}
   */
  public static postMessage(targetWindow: Window | null | undefined, message: SiteEditorPreviewMessage): void {
    targetWindow?.postMessage(message, window.location.origin)
  }

  /**
   * Reads a message event, keeping it only when it comes from the expected window, this origin and this channel.
   * @param {MessageEvent} event - The received event.
   * @param {Window | null | undefined} expectedSource - The only window allowed to send the message.
   * @returns {SiteEditorPreviewMessage | null} The message, or null when the event is not a trusted editor message.
   */
  public static readMessage(
    event: MessageEvent,
    expectedSource: Window | null | undefined,
  ): SiteEditorPreviewMessage | null {
    const isTrustedSender: boolean =
      expectedSource != null && event.source === expectedSource && event.origin === window.location.origin
    const data: unknown = event.data
    const isEditorMessage: boolean =
      data !== null &&
      typeof data === 'object' &&
      (data as Record<string, unknown>).channel === SITE_EDITOR_PREVIEW_CHANNEL
    return isTrustedSender && isEditorMessage ? (data as SiteEditorPreviewMessage) : null
  }
}
