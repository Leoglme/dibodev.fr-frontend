export type DibodevGeoApiTown = {
  nom: string
  code: string
  codesPostaux?: string[]
  departement?: { code: string; nom: string }
}

export type DibodevTownSearchInputProps = {
  id: string
  label: string
  value: string
  placeholder: string
  maxLength: number
}
