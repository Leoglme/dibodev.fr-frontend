/** One card of the free tools hub; `toolId` is tracked on click, `null` for the contact card. */
export type DibodevFreeToolCard = {
  key: string
  title: string
  description: string
  icon: string
  meta: string
  linkLabel: string
  to: string
  toolId: string | null
}

export type DibodevFreeToolsSectionProps = {
  eyebrow: string
  title: string
  intro: string
  tools: DibodevFreeToolCard[]
  trackingLocation: string
}
