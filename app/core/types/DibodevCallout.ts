export type DibodevCalloutTone = 'white' | 'tint'

export type DibodevCalloutToneClasses = {
  frame: string
  iconBadge: string
}

/** `emphasizedIntro` is the bold opening of the sentence ("Avant de signer :"), `text` its rest. */
export type DibodevCalloutProps = {
  icon: string
  emphasizedIntro: string
  text: string
  footnote: string
  tone: DibodevCalloutTone
}
