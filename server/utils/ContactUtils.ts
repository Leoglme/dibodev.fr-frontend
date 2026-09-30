/** Contact helpers: greeting name, international phone number, and tel:, WhatsApp and mailto: links. */
export class ContactUtils {
  /** Civilities typed before a surname ("M. Dupont"): the greeting then keeps the whole name. */
  private static readonly CIVILITY_PATTERN: RegExp = /^(m|mr|mme|mlle|mrs|ms|miss|dr|sr|sra|srta)\.?$/i

  /**
   * Extracts the name to greet someone with: the first word of the typed name, or the whole name after a civility.
   *
   * @param {string} fullName - Name as typed in a form.
   * @returns {string} The greeting name, with a capital first letter.
   */
  public static extractGreetingName(fullName: string): string {
    const normalizedName: string = fullName.trim().replace(/\s+/g, ' ')
    const firstWord: string = normalizedName.split(' ')[0] ?? ''
    const isCivility: boolean = ContactUtils.CIVILITY_PATTERN.test(firstWord)
    const greetingName: string = !firstWord || isCivility ? normalizedName : firstWord

    return greetingName.charAt(0).toLocaleUpperCase('fr') + greetingName.slice(1)
  }

  /**
   * Converts a phone number as typed in a form to the international format ("+33612345678").
   *
   * @param {string} rawPhone - Phone number as typed.
   * @returns {string | null} The international number, or null when the format is not recognized.
   */
  public static toInternationalPhone(rawPhone: string): string | null {
    const compactPhone: string = rawPhone.replace(/[\s.\-()]/g, '')

    if (/^\+\d{8,15}$/.test(compactPhone)) {
      return compactPhone
    }
    if (/^00\d{8,15}$/.test(compactPhone)) {
      return `+${compactPhone.slice(2)}`
    }
    if (/^0\d{9}$/.test(compactPhone)) {
      return `+33${compactPhone.slice(1)}`
    }
    return null
  }

  /**
   * Builds the tel: link of a phone number as typed in a form.
   *
   * @param {string} rawPhone - Phone number as typed.
   * @returns {string} The tel: link, international when the format is recognized.
   */
  public static buildTelHref(rawPhone: string): string {
    const internationalPhone: string | null = ContactUtils.toInternationalPhone(rawPhone)
    return `tel:${internationalPhone ?? rawPhone.replace(/[^\d+]/g, '')}`
  }

  /**
   * Builds the WhatsApp link of a phone number, except for unknown formats and French landlines.
   *
   * @param {string} rawPhone - Phone number as typed.
   * @returns {string | null} The WhatsApp link, or null when the number cannot be on WhatsApp.
   */
  public static buildWhatsappUrl(rawPhone: string): string | null {
    const internationalPhone: string | null = ContactUtils.toInternationalPhone(rawPhone)
    if (!internationalPhone) {
      return null
    }

    const isFrenchNumber: boolean = internationalPhone.startsWith('+33')
    const isFrenchMobile: boolean = /^\+33[67]/.test(internationalPhone)
    if (isFrenchNumber && !isFrenchMobile) {
      return null
    }
    return `https://wa.me/${internationalPhone.slice(1)}`
  }

  /**
   * Builds a mailto: link that opens a new e-mail with a subject.
   *
   * @param {string} email - Recipient address.
   * @param {string} subject - Subject of the new e-mail.
   * @returns {string} The mailto: link.
   */
  public static buildMailtoHref(email: string, subject: string): string {
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }
}
