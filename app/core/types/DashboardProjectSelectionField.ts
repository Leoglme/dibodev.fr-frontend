import type { DibodevProject } from '~/core/types/DibodevProject'

export type DashboardProjectSelectionFieldProps = {
  modelValue: string[]
  projects: DibodevProject[]
  maximumCount: number
  selectedProjectNotes: string[]
}

export type DashboardProjectSelectionReorderControl = 'handle' | 'up' | 'down'
