/** Geometry helpers of the dashboard charts (hand-drawn SVG, pattern DevLeadHunter). */
export class DashboardChartUtils {
  /**
   * Smooth SVG path through the points with a monotone cubic curve, which never dips below the axis on a zero day.
   *
   * @param {Array<[number, number]>} points - Points in pixels, sorted by x.
   * @returns {string} The SVG path data, empty when there are fewer than two points.
   */
  public static smoothPath(points: Array<[number, number]>): string {
    const count: number = points.length
    if (count < 2) return ''
    const deltas: number[] = []
    const slopes: number[] = []
    for (let i: number = 0; i < count - 1; i += 1) {
      const dx: number = points[i + 1]![0] - points[i]![0]
      deltas.push(dx)
      slopes.push(dx === 0 ? 0 : (points[i + 1]![1] - points[i]![1]) / dx)
    }
    const tangents: number[] = [slopes[0]!]
    for (let i: number = 1; i < count - 1; i += 1) {
      const before: number = slopes[i - 1]!
      const after: number = slopes[i]!
      tangents.push(before * after <= 0 ? 0 : (before + after) / 2)
    }
    tangents.push(slopes[count - 2]!)
    for (let i: number = 0; i < count - 1; i += 1) {
      const slope: number = slopes[i]!
      if (slope === 0) {
        tangents[i] = 0
        tangents[i + 1] = 0
        continue
      }
      const a: number = tangents[i]! / slope
      const b: number = tangents[i + 1]! / slope
      const magnitude: number = a * a + b * b
      if (magnitude > 9) {
        const factor: number = 3 / Math.sqrt(magnitude)
        tangents[i] = factor * a * slope
        tangents[i + 1] = factor * b * slope
      }
    }
    let path: string = `M ${points[0]![0].toFixed(1)} ${points[0]![1].toFixed(1)}`
    for (let i: number = 0; i < count - 1; i += 1) {
      const third: number = deltas[i]! / 3
      const [x0, y0]: [number, number] = points[i]!
      const [x1, y1]: [number, number] = points[i + 1]!
      path += ` C ${(x0 + third).toFixed(1)} ${(y0 + tangents[i]! * third).toFixed(1)}, ${(x1 - third).toFixed(1)} ${(
        y1 -
        tangents[i + 1]! * third
      ).toFixed(1)}, ${x1.toFixed(1)} ${y1.toFixed(1)}`
    }
    return path
  }

  /**
   * Round axis ceiling above a value (1, 2, 2.5, 5 or 10 times a power of ten).
   *
   * @param {number} value - Largest value to show.
   * @returns {number} The axis maximum.
   */
  public static niceMax(value: number): number {
    if (value <= 0) return 1
    const magnitude: number = Math.pow(10, Math.floor(Math.log10(value)))
    const normalized: number = value / magnitude
    const nice: number = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 2.5 ? 2.5 : normalized <= 5 ? 5 : 10
    return nice * magnitude
  }
}
