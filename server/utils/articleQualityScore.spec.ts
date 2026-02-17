/**
 * Tests unitaires pour le score de qualité des articles.
 * Exécuter: npx tsx server/utils/articleQualityScore.spec.ts
 */
import { strict as assert } from 'node:assert'
import {
  computeArticleQualityScore,
  hasWeakCTA,
  hasStrongCTA,
  getSectionLengthViolation,
  getExampleParagraphViolation,
  getExcessiveRepetition,
  parseSections,
} from './articleValidators'
import { ARTICLE_RULES } from './articleRules'

function describe(name: string, fn: () => void) {
  console.log(`\n${name}`)
  fn()
}

function it(name: string, fn: () => void) {
  try {
    fn()
    console.log(`  ✓ ${name}`)
  } catch (err) {
    console.error(`  ✗ ${name}`)
    throw err
  }
}

describe('jaccardSimilarity / getExcessiveRepetition', () => {
  it('détecte une similarité élevée', () => {
    const sections = [
      'annulation coach sportif dernière minute',
      'annulation coach sportif dernière minute problème',
    ]
    const { excessive } = getExcessiveRepetition(sections)
    assert.strictEqual(excessive, true)
  })

  it('accepte des sections différentes', () => {
    const sections = ['coach sportif matin', 'trésorerie acompte organisation']
    const { excessive } = getExcessiveRepetition(sections)
    assert.strictEqual(excessive, false)
  })
})

describe('getSectionLengthViolation', () => {
  it('détecte une intro trop longue', () => {
    const long = 'x'.repeat(700)
    const { exceeded, max } = getSectionLengthViolation(long, 0)
    assert.strictEqual(exceeded, true)
    assert.strictEqual(max, ARTICLE_RULES.maxCharsIntro)
  })

  it('accepte une section dans les limites', () => {
    const short = 'Court.'
    const { exceeded } = getSectionLengthViolation(short, 0)
    assert.strictEqual(exceeded, false)
  })

  it('retourne maxCharsExample pour section 4', () => {
    const { max } = getSectionLengthViolation('x', 4)
    assert.strictEqual(max, ARTICLE_RULES.maxCharsExample)
  })
})

describe('getExampleParagraphViolation', () => {
  it('détecte plus d\'un paragraphe', () => {
    const content = 'Paragraphe un.\n\nParagraphe deux.'
    const { violated, paragraphCount } = getExampleParagraphViolation(content)
    assert.strictEqual(violated, true)
    assert.strictEqual(paragraphCount, 2)
  })

  it('accepte 1 paragraphe unique', () => {
    const content = 'Un seul paragraphe sans saut double.'
    const { violated, paragraphCount } = getExampleParagraphViolation(content)
    assert.strictEqual(violated, false)
    assert.strictEqual(paragraphCount, 1)
  })
})

describe('hasStrongCTA / hasWeakCTA', () => {
  it('rejette un CTA sans proposition', () => {
    assert.strictEqual(hasStrongCTA("On en parle ? N'hésitez pas."), false)
    assert.strictEqual(hasWeakCTA("On en parle ? N'hésitez pas."), true)
  })

  it('accepte un CTA avec audit + livrable', () => {
    const cta = `## On en parle ?
Proposons un audit gratuit pour un plan d'action adapté.`
    assert.strictEqual(hasStrongCTA(cta), true)
    assert.strictEqual(hasWeakCTA(cta), false)
  })

  it('accepte checklist personnalisée', () => {
    const cta = `## On en parle ?
Un appel pour une checklist personnalisée selon votre situation.`
    assert.strictEqual(hasStrongCTA(cta), true)
  })
})

describe('computeArticleQualityScore', () => {
  it('donne un score élevé pour un article bien structuré', () => {
    const content = `
## Introduction
Un coach sportif à domicile utilise souvent WhatsApp et Excel pour gérer ses créneaux.

## Ce que ça vous coûte
La perte de temps et la trésorerie impactent la croissance.

## Pourquoi les solutions classiques ne suffisent pas
WhatsApp et l'agenda papier ont des limites.

## La solution adaptée à votre métier
Confirmations, rappels, acompte.

## Exemple concret
Scénario différent.

## Ce que je mets en place
Cadrage, prototype, mise en ligne.

## FAQ
Question 1. Réponse 1.

## On en parle ?
Proposons un court échange pour un diagnostic et des recommandations adaptées.
`
    const { score, breakdown } = computeArticleQualityScore(content)
    assert.ok(score >= 50, `score ${score} < 50`)
    assert.strictEqual(breakdown.ctaConversion, 20)
    assert.ok(breakdown.metierEnrichment > 0)
  })

  it('pénalise un CTA vague', () => {
    const content = `## On en parle ?
Contactez-moi, on en parle.`
    const { breakdown } = computeArticleQualityScore(content)
    assert.strictEqual(breakdown.ctaConversion, 0)
  })

  it('retourne un score entre 0 et 100', () => {
    const { score } = computeArticleQualityScore('x')
    assert.ok(score >= 0 && score <= 100)
  })

  it('breakdown a les 5 critères', () => {
    const { breakdown } = computeArticleQualityScore('x')
    assert.ok('concision' in breakdown)
    assert.ok('repetition' in breakdown)
    assert.ok('metierEnrichment' in breakdown)
    assert.ok('ctaConversion' in breakdown)
    assert.ok('cleanliness' in breakdown)
  })
})

describe('parseSections', () => {
  it('extrait les sections du markdown', () => {
    const content = `## Intro
Contenu intro.

## Section 2
Contenu 2.`
    const sections = parseSections(content)
    assert.strictEqual(sections.length, 2)
    assert.ok(sections[0]!.includes('Contenu intro'))
    assert.ok(sections[1]!.includes('Contenu 2'))
  })
})
