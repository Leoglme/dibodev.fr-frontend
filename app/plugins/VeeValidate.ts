import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import fr from '@vee-validate/i18n/dist/locale/fr.json'
import { required, email, numeric, min, max, min_value, max_value, integer, alpha_spaces } from '@vee-validate/rules'

export default defineNuxtPlugin(() => {
  // Règles natives
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
  defineRule('max', max)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)
  defineRule('integer', integer)
  defineRule('alpha_spaces', alpha_spaces)

  // Numeric avec message perso (si tu veux le garder)
  defineRule('numeric', (value: string | number, params: Record<string, any> = {}) => {
    if (numeric(value)) return true
    return params.message || 'Le champ doit être un nombre valide.'
  })

  // Prix avec virgule OU point (ex: 12, 12.5, 12,50)
  defineRule('price_format', (value: string) => {
    const priceRegex: RegExp = /^[0-9]+([.,][0-9]{1,2})?$/
    return priceRegex.test(value) || 'Le champ prix doit être un nombre valide avec un maximum de deux décimales.'
  })

  // Nom FR : lettres (avec accents), espaces, tirets, apostrophes — 2 à 60 chars
  defineRule('name_fr', (value: string) => {
    const ok: boolean = /^\p{L}[\p{L}\s'’-]{1,59}$/u.test(value.trim())
    return ok || 'Veuillez entrer un nom valide (lettres, espaces, tirets, apostrophes).'
  })

  // Localisation
  localize({ en, fr })
  configure({
    generateMessage: localize('fr', { names: {} }),
  })
})
