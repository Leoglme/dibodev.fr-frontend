/**
 * Text helpers shared by the tests: placeholders in templates and lists joined in the language of the test.
 * @class QuizTextUtils
 */
export class QuizTextUtils {
  /**
   * Replaces the `{name}` placeholders of a template.
   * @param {string} template - The template.
   * @param {Record<string, string>} values - The value of each placeholder.
   * @returns {string} The filled text.
   */
  public static fillTemplate(template: string, values: Record<string, string>): string {
    return template.replace(/\{(\w+)\}/g, (placeholder: string, name: string): string => values[name] ?? placeholder)
  }

  /**
   * Joins words with commas and the language's conjunction ("a, b et c").
   * @param {string[]} words - The words.
   * @param {string} conjunction - "et", "and" or "y".
   * @returns {string} The sentence fragment.
   */
  public static joinWithConjunction(words: string[], conjunction: string): string {
    if (words.length <= 1) return words.join('')
    return `${words.slice(0, -1).join(', ')} ${conjunction} ${words[words.length - 1]}`
  }
}
