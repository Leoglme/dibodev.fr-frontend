<template>
  <div class="relative z-10 min-w-0 max-w-full w-full text-gray-200">
    <!-- Card layout (responsive) -->
    <div v-if="showTableCard" class="flex flex-col gap-8 md:grid md:gap-8">
      <DibodevSpinner v-if="props.load" class="relative left-1/2 top-1/2" />
      <div v-else-if="displayItems.length > 0" class="flex w-full flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        <DibodevTableCard
          v-for="(item, index) in displayItems"
          :key="`card-${index}-${getRowKey(item)}`"
          :fields="(props.cardFields || props.fields) as DibodevTableCardField[]"
          :item="item"
          :load="props.load"
        >
          <template v-if="hasSlot('card-header')" #card-header="slotProps">
            <slot name="card-header" v-bind="slotProps" />
          </template>
          <template
            v-for="(field, i) in fieldsWithSlot"
            :key="`slot-${i}-${field.key}`"
            #[field.key]="slotProps"
          >
            <slot :name="field.key" v-bind="slotProps" />
          </template>
        </DibodevTableCard>
      </div>
      <p v-else class="flex w-full items-center justify-center text-center text-gray-200">
        <span class="text-sm font-semibold">Aucun résultat</span>
      </p>
    </div>

    <!-- Table layout -->
    <div v-else class="flex min-w-0 max-w-full flex-col">
      <div class="min-w-0 w-full overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden rounded-lg border border-gray-600 bg-gray-800 shadow-sm">
            <table class="min-w-full divide-y divide-gray-600">
              <thead class="bg-gray-700/50">
                <tr class="divide-x divide-gray-600">
                  <th
                    v-for="(field, i) in props.fields"
                    :key="`head-${i}-${field.key}`"
                    scope="col"
                    class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-100 sm:px-6"
                    :class="[field.cellsClasses, { 'cursor-pointer': props.clickable }]"
                  >
                    {{ field.label }}
                  </th>
                </tr>
              </thead>

              <tbody v-if="displayItems.length > 0 && !props.load" class="divide-y divide-gray-600">
                <tr
                  v-for="(item, i) in displayItems"
                  :key="`row-${i}-${getRowKey(item)}`"
                  class="divide-x divide-gray-600 bg-gray-800 hover:bg-gray-750"
                  :class="{ 'cursor-pointer': props.clickable }"
                  @click="props.clickable ? $emit('click', getRowKey(item)) : undefined"
                >
                  <template v-for="field in props.fields" :key="`cell-${i}-${field.key}`">
                    <td
                      class="h-px w-px whitespace-nowrap px-4 py-3 text-sm text-gray-200 sm:px-6"
                      :class="field.cellsClasses"
                      :style="field.setTdStyle ? field.setTdStyle(item) : undefined"
                    >
                      <template v-if="hasSlot(field.key)">
                        <slot :name="field.key" :item="item" />
                      </template>
                      <template v-else>
                        {{
                          field.formatValue
                            ? field.formatValue(getValue(item, field.key))
                            : getValue(item, field.key)
                        }}
                      </template>
                    </td>
                  </template>
                </tr>
              </tbody>

              <tbody v-else>
                <tr class="text-center">
                  <td v-if="props.load" :colspan="props.fields.length" class="py-8">
                    <DibodevSpinner class="relative left-1/2 top-1/2" />
                  </td>
                  <td v-else :colspan="props.fields.length" class="py-8 text-gray-200">Aucun résultat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, SetupContext } from 'vue'
import { useSlots, ref, computed, onMounted, onUnmounted } from 'vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import DibodevTableCard from '~/components/cards/DibodevTableCard.vue'
import type {
  DibodevTableProps,
  DibodevTableField,
  DibodevTableItem,
} from '~/core/types/DibodevTable'
import type { DibodevTableCardField } from '~/core/types/DibodevTableCard'

const props = withDefaults(
  defineProps<DibodevTableProps>(),
  {
    cardFields: null,
    clickable: false,
    switchToCardAt: null,
    rowKey: 'id',
  },
)

defineEmits<{
  (event: 'click', id: string | number): void
}>()

const slots: SetupContext['slots'] = useSlots()

const screenWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

const showTableCard = computed((): boolean => {
  return typeof props.switchToCardAt === 'number' ? screenWidth.value <= props.switchToCardAt : false
})

const fieldsWithSlot = computed((): DibodevTableField[] => {
  return (props.cardFields || props.fields).filter((field: DibodevTableField) => hasSlot(field.key))
})

const displayItems = computed((): DibodevTableItem[] => props.items)

function hasSlot(name: string): boolean {
  return !!slots[name]
}

function getValue(item: DibodevTableItem | null, path: string): unknown {
  if (!item) return null
  return path.split('.').reduce((obj: unknown, key: string) => (obj as Record<string, unknown>)?.[key], item)
}

function getRowKey(item: DibodevTableItem): string | number {
  const key = props.rowKey ?? 'id'
  const value = (item as Record<string, unknown>)[key]
  return value !== undefined && value !== null ? String(value) : ''
}

function updateScreenWidth(): void {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateScreenWidth)
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScreenWidth)
  }
})
</script>
