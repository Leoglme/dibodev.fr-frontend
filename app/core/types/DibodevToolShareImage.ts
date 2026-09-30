export type DibodevToolShareImageIcon = 'car' | 'truck' | 'bike' | 'wrench'

/** `highlight` is drawn in violet wherever it appears in `titleLines`. */
export type DibodevToolShareImageProps = {
  titleLines: string[]
  highlight: string
  subtitle: string
  badge: string
  icon: DibodevToolShareImageIcon
}

/** `isAfterSpaced` is false when the text after the highlight sticks to it ("autoescuela?"), true for "auto-école ?". */
export type DibodevToolShareImageLineParts = {
  before: string
  highlight: string
  after: string
  isAfterSpaced: boolean
}
