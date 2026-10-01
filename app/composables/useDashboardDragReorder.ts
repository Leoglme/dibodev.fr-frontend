import type { ComputedRef, Ref } from 'vue'
import { onBeforeUnmount, ref } from 'vue'

export type UseDashboardDragReorderReturn = {
  draggedIndex: Ref<number | null>
  startDrag: (event: PointerEvent, index: number) => void
}

const PRIMARY_MOUSE_BUTTON: number = 0

/**
 * Reorders the same-height rows of a vertical list by dragging a handle (mouse, finger or pen).
 *
 * @param {Ref<HTMLElement | null> | ComputedRef<HTMLElement | null>} listElement - Element whose box is exactly the stack of rows.
 * @param {() => number} getRowsCount - Returns the current number of rows.
 * @param {(fromIndex: number, toIndex: number) => void} moveRow - Moves a row to another position.
 * @returns {UseDashboardDragReorderReturn} The index of the dragged row and the handler starting a drag.
 */
export function useDashboardDragReorder(
  listElement: Ref<HTMLElement | null> | ComputedRef<HTMLElement | null>,
  getRowsCount: () => number,
  moveRow: (fromIndex: number, toIndex: number) => void,
): UseDashboardDragReorderReturn {
  const draggedIndex: Ref<number | null> = ref(null)

  /**
   * Moves the dragged row to the slot under the pointer.
   *
   * @param {PointerEvent} event - The pointer move.
   * @returns {void}
   */
  function onPointerMove(event: PointerEvent): void {
    const rowsCount: number = getRowsCount()
    const listBounds: DOMRect | undefined = listElement.value?.getBoundingClientRect()
    if (draggedIndex.value === null || !listBounds || rowsCount === 0 || listBounds.height === 0) return

    // The list bounds stay still while rows animate, unlike the bounds of each row.
    const rowHeight: number = listBounds.height / rowsCount
    const hoveredIndex: number = Math.floor((event.clientY - listBounds.top) / rowHeight)
    const targetIndex: number = Math.min(rowsCount - 1, Math.max(0, hoveredIndex))
    if (targetIndex === draggedIndex.value) return

    moveRow(draggedIndex.value, targetIndex)
    draggedIndex.value = targetIndex
  }

  /**
   * Ends the drag and stops listening to the pointer.
   *
   * @returns {void}
   */
  function stopDrag(): void {
    draggedIndex.value = null
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', stopDrag)
    window.removeEventListener('pointercancel', stopDrag)
  }

  /**
   * Starts dragging a row from its handle.
   *
   * @param {PointerEvent} event - The pointer press on the handle.
   * @param {number} index - Index of the row being dragged.
   * @returns {void}
   */
  function startDrag(event: PointerEvent, index: number): void {
    if (event.pointerType === 'mouse' && event.button !== PRIMARY_MOUSE_BUTTON) return
    event.preventDefault()
    draggedIndex.value = index
    // The handle moves in the DOM while rows swap, which would drop a pointer capture: the window is listened to instead.
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', stopDrag)
    window.addEventListener('pointercancel', stopDrag)
  }

  onBeforeUnmount(stopDrag)

  return { draggedIndex, startDrag }
}
