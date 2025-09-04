import Handlebars from 'handlebars'

export function registerHandlebarsHelpers() {
  Handlebars.registerHelper('debug', function (context) {
    console.log('registerHandlebarsHelpers:context', context)
    return JSON.stringify(context, null, 2)
  })

  // replace ${{}} with variable value (e.g., ${{price}} with 100
  Handlebars.registerHelper('interpolate', (templateString: string, context) => {
    return templateString.replace(/\${{(.*?)}}/g, (_, varName) => {
      const value = context[varName.trim()]
      return value !== undefined ? value : `\${{${varName}}}`
    })
  })
}
