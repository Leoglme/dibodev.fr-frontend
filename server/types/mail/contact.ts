export type ProjectType = 'Site web' | 'Application mobile' | 'Autre'
export type PagesRange = '1–3' | '3–6' | '6–10' | '10+'

export type ContactFormPayload = {
  projectType: ProjectType | null
  pagesRange: PagesRange | null
  budget: number
  fullName: string
  email: string
  message: string
}
