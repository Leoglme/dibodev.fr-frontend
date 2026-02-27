<template>
  <div class="relative z-10 w-full">
    <div class="h-full rounded-lg border border-gray-600 bg-gray-800 p-4">
      <template v-if="!props.load && props.item">
        <div v-if="hasSlot('card-header')" class="mb-4 space-y-4">
          <slot name="card-header" :item="props.item" />
          <DibodevDivider dark class="my-4" />
        </div>

        <div
          v-for="field in props.fields"
          :key="`field-${field.key}`"
          class="flex gap-2 py-2"
          :class="field.layout === 'column' ? 'flex-col' : 'justify-between'"
        >
          <div class="text-base font-medium text-gray-100">
            {{ field.label }}
          </div>
          <div class="flex flex-col justify-end gap-2 break-words text-right text-sm font-medium text-gray-200">
            <slot v-if="hasSlot(field.key)" :name="field.key" :item="props.item" />
            <template v-else>
              {{
                field.formatValue
                  ? field.formatValue(getValue(props.item, field.key))
                  : getValue(props.item, field.key)
              }}
            </template>
          </div>
        </div>
      </template>

      <div v-else class="flex items-center justify-center py-8">
        <DibodevSpinner />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, SetupContext } from 'vue'
import { useSlots } from 'vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import DibodevDivider from '~/components/decorators/DibodevDivider.vue'
import type {
  DibodevTableCardField,
  DibodevTableCardItem,
  DibodevTableCardProps,
} from '~/core/types/DibodevTableCard'

const props: DibodevTableCardProps = defineProps({
  fields: { type: Array as PropType<DibodevTableCardField[]>, required: true },
  item: { type: Object as PropType<DibodevTableCardItem>, default: null },
  load: { type: Boolean, default: false },
})

const slots: SetupContext['slots'] = useSlots()

const hasSlot: (name: string) => boolean = (name: string): boolean => !!slots[name]

const getValue = (item: DibodevTableCardItem, path: string): unknown => {
  return path.split('.').reduce((obj: unknown, key: string) => (obj as Record<string, unknown>)?.[key], item)
}
</script>
