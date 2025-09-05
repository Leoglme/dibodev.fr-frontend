import path from 'node:path'
import fs from 'node:fs/promises'
import mjml from 'mjml'
import type { MJMLParseError } from 'mjml-core'
import Handlebars from 'handlebars'

/**
 * Result from MJML parsing.
 */
type MjmlResult = {
  html: string
  errors: MJMLParseError[]
}

/**
 * Payload for getting HTML from MJML.
 */
type MjmlGetHtmlPayload = {
  viewPath?: string
  mjmlContent?: string
  payload?: Record<string, unknown>
  layoutName?: string
  partialsNames?: string[]
}

/**
 * Service for rendering MJML templates to HTML.
 */
export default class MjmlService {
  public static partialsDirectory: string = 'partials'
  public static layoutDirectory: string = 'layouts'
  public static defaultLayoutName: string = 'main'

  /**
   * Retrieves the HTML content from an MJML template.
   *
   * @param {MjmlGetHtmlPayload} param - The payload for rendering.
   * @returns {Promise<string>} - The rendered HTML.
   * @throws {Error} - If no content is provided or MJML errors occur.
   */
  public static async getHtml({
    viewPath,
    mjmlContent,
    payload,
    layoutName,
    partialsNames,
  }: MjmlGetHtmlPayload): Promise<string> {
    if (!mjmlContent && !viewPath) {
      throw new Error('No viewPath or mjmlContent provided')
    }

    const layoutFileName: string = `${this.layoutDirectory}/${layoutName || this.defaultLayoutName}`
    let mainLayoutContent: string = await this.getMjmlContent(layoutFileName)

    let bodyContent: string | undefined = viewPath ? await this.getMjmlContent(viewPath) : mjmlContent
    if (!bodyContent) {
      throw new Error('No view content provided')
    }

    bodyContent = this.replacePlaceholders(bodyContent, payload)
    mainLayoutContent = mainLayoutContent.replace('{{body}}', bodyContent)

    if (partialsNames) {
      for (const partialName of partialsNames) {
        let partialContent: string = await this.getMjmlContent(`${this.partialsDirectory}/${partialName}`)
        partialContent = this.replacePlaceholders(partialContent, payload)
        mainLayoutContent = mainLayoutContent.replace(`{{${partialName}}}`, partialContent)
      }
    }

    const { html, errors }: MjmlResult = mjml(mainLayoutContent)

    if (errors.length) {
      console.error('MjmlService:getHtml:MJML errors:', errors)
      throw new Error('MJML conversion error')
    }

    return html
  }

  /**
   * Retrieves MJML content from a file.
   *
   * @param {string} viewPath - The path to the MJML file (without extension).
   * @returns {Promise<string>} - The MJML content.
   * @throws {Error} - If importing fails.
   */
  public static async getMjmlContent(viewPath: string): Promise<string> {
   try {
    const templatePath: string = path.resolve(process.cwd(), 'server/services/mail/mjml/templates', `${viewPath}.ts`)
    const module = await import(templatePath)
    return module.default // Récupère la chaîne exportée par le module
    } catch (error) {
    console.error(`MjmlService:getMjmlContent: Error importing MJML template: ${viewPath}`, error)
    throw error
    }
  }

  /**
   * Replaces placeholders in a given template string with corresponding values from a payload object.
   *
   * @param {string} template - The template string containing placeholders.
   * @param {Record<string, unknown>} [payload] - The payload object containing key-value pairs for replacement.
   * @returns {string} - The resulting string after replacing the placeholders with values.
   */
  private static replacePlaceholders(template: string, payload?: Record<string, unknown>): string {
    if (!payload) {
      console.warn('MjmlService:replacePlaceholders:No payload provided for template rendering.')
      return template
    }

    try {
      const compiledTemplate = Handlebars.compile(template)
      return compiledTemplate(payload, {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
      })
    } catch (error) {
      console.error('MjmlService:replacePlaceholders: Error rendering template with Handlebars:', error)
      return template // Return the raw template in case of error
    }
  }
}
