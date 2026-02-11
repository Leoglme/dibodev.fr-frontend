<template>
  <DibodevBadge :backgroundColor="categoryBackgroundColor" :textColor="categoryColor" :size="props.size">
    {{ props.category }}
  </DibodevBadge>
</template>
<script setup lang="ts">
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import { computed } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import type { DibodevBadgeSize } from '~/core/types/DibodevBadge'
import type { DibodevProjectCategory } from '~/core/types/DibodevProject'

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

/* COMPUTED */
const categoryColor: ComputedRef<string> = computed((): string => {
  const category: DibodevProjectCategory | undefined = categories.find((cat) => cat.name === props.category)
  return category ? category.color : '#2711BB'
})

const categoryBackgroundColor: ComputedRef<string> = computed((): string => {
  const category: DibodevProjectCategory | undefined = categories.find((cat) => cat.name === props.category)
  return category ? category.backgroundColor : '#D6D0FB'
})
</script>
