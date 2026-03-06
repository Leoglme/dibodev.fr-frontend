<template>
  <DibodevBadge :backgroundColor="categoryBackgroundColor" :textColor="categoryColor" :size="props.size">
    {{ displayLabel }}
  </DibodevBadge>
</template>
<script setup lang="ts">
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevBadgeSize } from '~/core/types/DibodevBadge'
import type { DibodevProjectCategory } from '~/core/types/DibodevProject'
import { CATEGORY_KEYS } from '~/core/constants/projectEnums'
import type { CategoryKey } from '~/core/constants/projectEnums'

const { t } = useI18n()

/** Couleurs par CategoryKey */
const categoryKeyColors: Record<CategoryKey, { color: string; backgroundColor: string }> = {
  'site-web': { color: '#2711BB', backgroundColor: '#D6D0FB' },
  'application-mobile': { color: '#1E90FF', backgroundColor: '#ADD8E6' },
  saas: { color: '#6B21A8', backgroundColor: '#E9D5FF' },
  'application-metier': { color: '#0B6623', backgroundColor: '#D0F0C0' },
  logiciel: { color: '#800080', backgroundColor: '#E6E6FA' },
  ia: { color: '#FF8C00', backgroundColor: '#FFE4B5' },
}

const isCategoryKey = (v: string): v is CategoryKey => (CATEGORY_KEYS as readonly string[]).includes(v)

/* PROPS */
const props = withDefaults(
  defineProps<{
    category: string
    size?: DibodevBadgeSize
  }>(),
  {
    size: 'md',
  },
)

/* DATAS */
const categories: DibodevProjectCategory[] = [
  {
    name: 'Site web',
    color: '#2711BB',
    backgroundColor: '#D6D0FB',
  },
  {
    name: 'Application métier',
    color: '#0B6623',
    backgroundColor: '#D0F0C0',
  },
  {
    name: 'IA',
    color: '#FF8C00',
    backgroundColor: '#FFE4B5',
  },
  {
    name: 'Santé',
    color: '#8B0000',
    backgroundColor: '#FFC0CB',
  },
  {
    name: 'Application mobile',
    color: '#1E90FF',
    backgroundColor: '#ADD8E6',
  },
  {
    name: 'Logiciel',
    color: '#800080',
    backgroundColor: '#E6E6FA',
  },
  {
    name: 'Voyage',
    color: '#FF4500',
    backgroundColor: '#FFDAB9',
  },
  {
    name: 'Gaming',
    color: '#228B22',
    backgroundColor: '#98FB98',
  },
  {
    name: 'Jeu',
    color: '#DAA520',
    backgroundColor: '#FFFACD',
  },
  {
    name: 'SaaS',
    color: '#6B21A8',
    backgroundColor: '#E9D5FF',
  },
  {
    name: 'Web app',
    color: '#1E40AF',
    backgroundColor: '#DBEAFE',
  },
  {
    name: 'API',
    color: '#0369A1',
    backgroundColor: '#E0F2FE',
  },
  {
    name: 'Back-office',
    color: '#0D9488',
    backgroundColor: '#CCFBF1',
  },
  {
    name: 'Landing page',
    color: '#C2410C',
    backgroundColor: '#FFEDD5',
  },
]

const displayLabel: ComputedRef<string> = computed((): string => {
  if (isCategoryKey(props.category)) return t(`projects.categories.${props.category}`)
  return props.category
})

const categoryColor: ComputedRef<string> = computed((): string => {
  if (isCategoryKey(props.category)) return categoryKeyColors[props.category]?.color ?? '#2711BB'
  const cat = categories.find((c) => c.name === props.category)
  return cat ? cat.color : '#2711BB'
})

const categoryBackgroundColor: ComputedRef<string> = computed((): string => {
  if (isCategoryKey(props.category)) return categoryKeyColors[props.category]?.backgroundColor ?? '#D6D0FB'
  const cat = categories.find((c) => c.name === props.category)
  return cat ? cat.backgroundColor : '#D6D0FB'
})
</script>
