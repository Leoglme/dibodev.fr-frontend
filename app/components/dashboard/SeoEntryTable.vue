<template>
  <div class="w-full min-w-0">
    <div v-if="searchable" class="mb-3 max-w-xs">
      <input
        v-model="searchText"
        type="text"
        placeholder="Filtrer…"
        class="focus:border-primary w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none"
      />
    </div>

    <div
      v-if="visibleRows.length === 0"
      class="rounded-lg border border-gray-600 bg-gray-800 p-6 text-center text-sm text-gray-300"
    >
      Aucune donnée.
    </div>

    <div v-else class="overflow-x-auto" :class="capHeight ? 'sm:max-h-[460px] sm:overflow-y-auto' : ''">
      <table class="w-full min-w-[300px] table-fixed border-collapse text-sm">
        <thead class="sticky top-0 z-10 bg-gray-800">
          <tr class="border-b border-gray-600 text-left text-xs tracking-wide text-gray-300 uppercase">
            <th class="py-2 pr-2 font-medium">{{ keyLabel }}</th>
            <th class="w-12 px-2 py-2 text-right font-medium">Clics</th>
            <th class="w-16 px-2 py-2 text-right font-medium">Impr.</th>
            <th class="w-16 px-2 py-2 text-right font-medium">CTR</th>
            <th class="w-14 py-2 pl-2 text-right font-medium">Pos.</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in visibleRows"
            :key="row.key"
            class="border-b border-gray-700/60 transition-colors hover:bg-gray-700/40"
          >
            <td class="py-2 pr-2">
              <a
                v-if="keyKind === 'url'"
                :href="row.key"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-light block truncate hover:underline"
                :title="row.key"
              >
                {{ shortenUrl(row.key) }}
              </a>
              <span v-else-if="keyKind === 'country'" class="flex items-center gap-2 text-gray-100">
                <span class="text-base">{{ SeoDisplayUtils.countryFlag(row.key) }}</span>
                <span class="truncate">{{ SeoDisplayUtils.countryName(row.key) }}</span>
              </span>
              <span v-else-if="keyKind === 'device'" class="text-gray-100">{{
                SeoDisplayUtils.deviceLabel(row.key)
              }}</span>
              <span v-else class="block truncate text-gray-100" :title="row.key">{{ row.key }}</span>
            </td>
            <td class="px-2 py-2 text-right font-medium text-gray-100 tabular-nums">{{ row.clicks }}</td>
            <td class="px-2 py-2 text-right whitespace-nowrap text-gray-200 tabular-nums">
              {{ SeoDisplayUtils.formatInteger(row.impressions) }}
            </td>
            <td class="px-2 py-2 text-right whitespace-nowrap text-gray-200 tabular-nums">
              {{ (row.ctr * 100).toFixed(1) }} %
            </td>
            <td class="py-2 pl-2 text-right">
              <span
                class="rounded px-1.5 py-0.5 text-xs font-medium tabular-nums"
                :class="SeoDisplayUtils.positionBadgeClass(row.position)"
              >
                {{ row.position.toFixed(1) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'
import { SeoDisplayUtils } from '~/core/utils/SeoDisplayUtils'

const props = defineProps({
  entries: {
    type: Array as PropType<SearchPerformanceEntry[]>,
    default: (): SearchPerformanceEntry[] => [],
  },
  keyLabel: {
    type: String,
    required: true,
  },
  keyKind: {
    type: String as PropType<'text' | 'url' | 'country' | 'device'>,
    default: 'text',
  },
  limit: {
    type: Number,
    default: 25,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  capHeight: {
    type: Boolean,
    default: false,
  },
})

const searchText: Ref<string> = ref('')

/** Entries sorted by clicks then impressions, filtered by the search text and capped to `limit`. */
const visibleRows: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] => {
  const query: string = searchText.value.trim().toLowerCase()
  const filtered: SearchPerformanceEntry[] = query
    ? props.entries.filter((entry: SearchPerformanceEntry): boolean => entry.key.toLowerCase().includes(query))
    : props.entries
  return [...filtered]
    .sort(
      (a: SearchPerformanceEntry, b: SearchPerformanceEntry): number =>
        b.clicks - a.clicks || b.impressions - a.impressions,
    )
    .slice(0, props.limit)
})

/**
 * Strips the origin and trailing slash from a URL to keep only its readable path.
 *
 * @param {string} url - The absolute URL.
 * @returns {string} The path (or the original string when it is not a valid URL).
 */
function shortenUrl(url: string): string {
  try {
    const path: string = new URL(url).pathname.replace(/\/$/, '')
    return path === '' ? '/' : path
  } catch {
    return url
  }
}
</script>
