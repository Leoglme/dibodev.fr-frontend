/**
 * @type {import("prettier").Options}
 *
 * Pas besoin d'import pour prettier concernant les plugins il peuvent être importer directement
 * Mais dois correspondre exactement au nom du package !
 *
 * prettier.config.js nouvelle syntaxe depuis la version 3.x
 */
export default {
  semi: false, // Utiliser de point-virgule à la fin des lignes.
  singleQuote: true, // Utilise des guillemets simples à la place des guillemets doubles.
  endOfLine: 'lf', // Utilise des sauts de ligne UNIX.
  tabWidth: 2, // Utilise des tabulations de 2 espaces.
  printWidth: 120, // Limite la largeur de la ligne à 120 caractères.
  bracketSpacing: true, // Ajoute un espace après les accolades ouvrantes et avant les accolades fermantes.
  plugins: ['prettier-plugin-tailwindcss'], // Ajoute le plugin pour le formattage de TailwindCSS.
}
