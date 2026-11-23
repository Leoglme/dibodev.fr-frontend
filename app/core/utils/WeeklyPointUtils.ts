import type { DashboardDelta } from '~/core/types/Dashboard'
import type {
  DashboardWeeklyDoneItem,
  DashboardWeeklyExperimentProgress,
  DashboardWeeklyMetricKey,
  DashboardWeeklyMetricValue,
  DashboardWeeklyPoint,
  DashboardWeeklyTarget,
} from '~/core/types/DashboardWeeklyPoint'
import type {
  DashboardPointTimelineEntry,
  DashboardWeeklyChannelComparison,
  DashboardWeeklyChannelDefinition,
  DashboardWeeklyDoneEntry,
  DashboardWeeklyDoneGroup,
  DashboardWeeklyDoneKindDefinition,
  DashboardWeeklyHistoryBar,
  DashboardWeeklyMetricComparison,
  DashboardWeeklySelection,
  DashboardWeeklyTargetProgress,
} from '~/core/types/DashboardWeeklyPointsPage'
import {
  DASHBOARD_WEEKLY_AI_TEST_ANSWER_COUNT,
  DASHBOARD_WEEKLY_CHANNELS,
  DASHBOARD_WEEKLY_DONE_KINDS,
  DASHBOARD_WEEKLY_METRICS,
} from '~/core/constants/dashboardWeeklyPoints'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'

/** Calculations of the weekly points page: selection, evolutions, groupings, labels and the plain-text report. */
export class WeeklyPointUtils {
  public static readonly MISSING_VALUE_LABEL: string = '—'
  public static readonly NO_COMPARISON_LABEL: string = 'Sans comparaison'
  private static readonly DAY_MS: number = 86_400_000
  private static readonly DAYS_BETWEEN_POINTS: number = 7
  private static readonly MINUS_SIGN: string = '−'
  private static readonly NO_BREAK_SPACE: string = ' '
  private static readonly SMALLEST_BAR_PERCENT: number = 2
  private static readonly WEB_URL_PATTERN: RegExp = /^https?:\/\//i

  /**
   * Orders the points from the oldest to the latest.
   *
   * @param {DashboardWeeklyPoint[]} points - The points, in any order.
   * @returns {DashboardWeeklyPoint[]} A sorted copy.
   */
  public static sortPoints(points: DashboardWeeklyPoint[]): DashboardWeeklyPoint[] {
    return [...points].sort((a: DashboardWeeklyPoint, b: DashboardWeeklyPoint): number => a.number - b.number)
  }

  /**
   * Picks the opened point (the latest by default) and the one it is compared to (the one before it by default).
   *
   * @param {DashboardWeeklyPoint[]} sortedPoints - The points, oldest first.
   * @param {string} requestedOpenedId - Point asked in the address, empty when none.
   * @param {string} requestedComparedId - Comparison point asked in the address, empty when none.
   * @returns {DashboardWeeklySelection} Both points, null when they do not exist.
   */
  public static resolveSelection(
    sortedPoints: DashboardWeeklyPoint[],
    requestedOpenedId: string,
    requestedComparedId: string,
  ): DashboardWeeklySelection {
    const requestedIndex: number = sortedPoints.findIndex(
      (point: DashboardWeeklyPoint): boolean => point.id === requestedOpenedId,
    )
    const openedIndex: number = requestedIndex >= 0 ? requestedIndex : sortedPoints.length - 1
    const openedPoint: DashboardWeeklyPoint | null = sortedPoints[openedIndex] ?? null

    if (!openedPoint) {
      return { openedPoint: null, comparedPoint: null }
    }
    const requestedComparedPoint: DashboardWeeklyPoint | null =
      sortedPoints.find(
        (point: DashboardWeeklyPoint): boolean => point.id === requestedComparedId && point.id !== openedPoint.id,
      ) ?? null

    return { openedPoint, comparedPoint: requestedComparedPoint ?? sortedPoints[openedIndex - 1] ?? null }
  }

  /**
   * Formats a figure: French number, "19 sur 20" for the monthly AI test.
   *
   * @param {DashboardWeeklyMetricKey} metricKey - The figure.
   * @param {number} value - Its value.
   * @returns {string} The readable value.
   */
  public static formatMetricValue(metricKey: DashboardWeeklyMetricKey, value: number): string {
    const formattedValue: string = DashboardFormatUtils.formatNumber(value)

    if (metricKey === 'aiTestCitations') {
      return `${formattedValue} sur ${DASHBOARD_WEEKLY_AI_TEST_ANSWER_COUNT}`
    }
    return formattedValue
  }

  /**
   * Builds the evolution between two values: a percentage, or points for the monthly AI test.
   *
   * @param {DashboardWeeklyMetricKey} metricKey - The figure.
   * @param {number | null} currentValue - Value of the opened point.
   * @param {number | null} previousValue - Value of the compared point.
   * @returns {DashboardDelta | null} The evolution, null when a value is missing or the previous one is zero.
   */
  public static buildEvolution(
    metricKey: DashboardWeeklyMetricKey,
    currentValue: number | null,
    previousValue: number | null,
  ): DashboardDelta | null {
    if (currentValue === null || previousValue === null) {
      return null
    }
    if (metricKey === 'aiTestCitations') {
      const difference: number = currentValue - previousValue
      return {
        value: difference,
        text: WeeklyPointUtils.formatSignedNumber(difference),
        favourable: difference === 0 ? null : difference > 0,
      }
    }
    if (previousValue === 0) {
      return null
    }
    const percent: number = Math.round(((currentValue - previousValue) / previousValue) * 100)
    return {
      value: percent,
      text: `${WeeklyPointUtils.formatSignedNumber(percent)}${WeeklyPointUtils.NO_BREAK_SPACE}%`,
      favourable: percent === 0 ? null : percent > 0,
    }
  }

  /**
   * Puts one figure of the opened point next to the same figure of the compared point.
   *
   * @param {DashboardWeeklyMetricKey} metricKey - The figure.
   * @param {DashboardWeeklyPoint} openedPoint - The opened point.
   * @param {DashboardWeeklyPoint | null} comparedPoint - The compared point, null when there is none.
   * @returns {DashboardWeeklyMetricComparison} Both values, their labels and the evolution.
   */
  public static buildMetricComparison(
    metricKey: DashboardWeeklyMetricKey,
    openedPoint: DashboardWeeklyPoint,
    comparedPoint: DashboardWeeklyPoint | null,
  ): DashboardWeeklyMetricComparison {
    const currentMetric: DashboardWeeklyMetricValue | null = openedPoint.metrics[metricKey] ?? null
    const previousMetric: DashboardWeeklyMetricValue | null = comparedPoint?.metrics[metricKey] ?? null
    const currentValue: number | null = currentMetric?.value ?? null
    const previousValue: number | null = previousMetric?.value ?? null

    return {
      metricKey,
      label: DASHBOARD_WEEKLY_METRICS[metricKey].label,
      channelLabel: DASHBOARD_WEEKLY_METRICS[metricKey].channelLabel,
      hint: DASHBOARD_WEEKLY_METRICS[metricKey].hint,
      currentValue,
      previousValue,
      currentLabel:
        currentValue === null
          ? WeeklyPointUtils.MISSING_VALUE_LABEL
          : WeeklyPointUtils.formatMetricValue(metricKey, currentValue),
      previousLabel: WeeklyPointUtils.buildPreviousLabel(metricKey, comparedPoint, previousValue),
      delta: WeeklyPointUtils.buildEvolution(metricKey, currentValue, previousValue),
      rebuiltNote: currentMetric?.origin === 'rebuilt' ? (currentMetric.note ?? null) : null,
    }
  }

  /**
   * Compares the two points channel by channel; a figure absent from both points is left out.
   *
   * @param {DashboardWeeklyPoint} openedPoint - The opened point.
   * @param {DashboardWeeklyPoint | null} comparedPoint - The compared point, null when there is none.
   * @returns {DashboardWeeklyChannelComparison[]} The four channels, in display order.
   */
  public static buildChannelComparisons(
    openedPoint: DashboardWeeklyPoint,
    comparedPoint: DashboardWeeklyPoint | null,
  ): DashboardWeeklyChannelComparison[] {
    return DASHBOARD_WEEKLY_CHANNELS.map(
      (channel: DashboardWeeklyChannelDefinition): DashboardWeeklyChannelComparison => {
        const headline: DashboardWeeklyMetricComparison = WeeklyPointUtils.buildMetricComparison(
          channel.headlineMetric,
          openedPoint,
          comparedPoint,
        )
        return {
          channel,
          headline,
          headlineCaption: WeeklyPointUtils.buildHeadlineCaption(channel, headline),
          metrics: channel.metrics
            .map(
              (metricKey: DashboardWeeklyMetricKey): DashboardWeeklyMetricComparison =>
                WeeklyPointUtils.buildMetricComparison(metricKey, openedPoint, comparedPoint),
            )
            .filter(
              (comparison: DashboardWeeklyMetricComparison): boolean =>
                comparison.currentValue !== null || comparison.previousValue !== null,
            ),
        }
      },
    )
  }

  /**
   * Groups what was done by kind (new pages, articles, updates, steps), empty groups left out.
   *
   * @param {DashboardWeeklyDoneItem[]} doneItems - Everything done during the point.
   * @returns {DashboardWeeklyDoneGroup[]} The groups, in display order.
   */
  public static groupDoneItems(doneItems: DashboardWeeklyDoneItem[]): DashboardWeeklyDoneGroup[] {
    return DASHBOARD_WEEKLY_DONE_KINDS.map(
      (definition: DashboardWeeklyDoneKindDefinition): DashboardWeeklyDoneGroup => ({
        ...definition,
        entries: doneItems
          .filter((doneItem: DashboardWeeklyDoneItem): boolean => doneItem.kind === definition.kind)
          .map(
            (doneItem: DashboardWeeklyDoneItem): DashboardWeeklyDoneEntry => ({
              title: doneItem.title,
              detail: doneItem.detail,
              webUrl: WeeklyPointUtils.toWebUrl(doneItem.url),
            }),
          ),
      }),
    ).filter((group: DashboardWeeklyDoneGroup): boolean => group.entries.length > 0)
  }

  /**
   * Builds the bars of one figure across every point; a point without the figure gets an empty bar.
   *
   * @param {DashboardWeeklyPoint[]} sortedPoints - The points, oldest first.
   * @param {DashboardWeeklyMetricKey} metricKey - The figure to draw.
   * @param {string} openedPointId - Id of the opened point.
   * @param {string | null} comparedPointId - Id of the compared point, null when there is none.
   * @returns {DashboardWeeklyHistoryBar[]} One bar per point.
   */
  public static buildMetricHistory(
    sortedPoints: DashboardWeeklyPoint[],
    metricKey: DashboardWeeklyMetricKey,
    openedPointId: string,
    comparedPointId: string | null,
  ): DashboardWeeklyHistoryBar[] {
    const highestValue: number = Math.max(
      0,
      ...sortedPoints.map((point: DashboardWeeklyPoint): number => point.metrics[metricKey]?.value ?? 0),
    )
    return sortedPoints.map((point: DashboardWeeklyPoint): DashboardWeeklyHistoryBar => {
      const value: number | null = point.metrics[metricKey]?.value ?? null
      return {
        pointId: point.id,
        value,
        valueLabel: value === null ? '' : DashboardFormatUtils.formatNumber(value),
        heightPercent:
          value === null || highestValue === 0
            ? 0
            : Math.max(WeeklyPointUtils.SMALLEST_BAR_PERCENT, Math.round((value / highestValue) * 100)),
        isOpenedPoint: point.id === openedPointId,
        isComparedPoint: point.id === comparedPointId,
      }
    })
  }

  /**
   * Writes the text alternative of the bar chart of one figure.
   *
   * @param {DashboardWeeklyPoint[]} sortedPoints - The points, oldest first.
   * @param {DashboardWeeklyMetricKey} metricKey - The figure drawn.
   * @returns {string} A sentence listing every value, then the points without one.
   */
  public static describeMetricHistory(
    sortedPoints: DashboardWeeklyPoint[],
    metricKey: DashboardWeeklyMetricKey,
  ): string {
    const label: string = DASHBOARD_WEEKLY_METRICS[metricKey].label
    const measuredValues: string[] = []
    const pointIdsWithoutValue: string[] = []

    for (const point of sortedPoints) {
      const value: number | null = point.metrics[metricKey]?.value ?? null

      if (value === null) {
        pointIdsWithoutValue.push(point.id)
      } else {
        measuredValues.push(`${WeeklyPointUtils.formatMetricValue(metricKey, value)} au point ${point.id}`)
      }
    }
    if (measuredValues.length === 0) {
      return `${label} : aucun relevé.`
    }
    const missingSentence: string =
      pointIdsWithoutValue.length > 0 ? ` Pas de relevé pour ${pointIdsWithoutValue.join(', ')}.` : ''

    return `${label} : ${measuredValues.join(', ')}.${missingSentence}`
  }

  /**
   * Measures how far the opened point is from a goal set for the next one.
   *
   * @param {DashboardWeeklyTarget} target - The goal.
   * @param {DashboardWeeklyPoint} openedPoint - The point whose figures are read.
   * @returns {DashboardWeeklyTargetProgress} The progress; `percent` is null when the goal follows no measured figure.
   */
  public static buildTargetProgress(
    target: DashboardWeeklyTarget,
    openedPoint: DashboardWeeklyPoint,
  ): DashboardWeeklyTargetProgress {
    const value: number | null = target.metric ? (openedPoint.metrics[target.metric]?.value ?? null) : null
    const goalLabel: string = DashboardFormatUtils.formatNumber(target.goal)

    if (value === null || target.goal <= 0) {
      return { label: target.label, progressLabel: `Objectif : ${goalLabel}`, percent: null }
    }
    return {
      label: target.label,
      progressLabel: `${DashboardFormatUtils.formatNumber(value)} sur ${goalLabel}`,
      percent: Math.round((value / target.goal) * 100),
    }
  }

  /**
   * Converts the progress of an experiment into a gauge width.
   *
   * @param {DashboardWeeklyExperimentProgress} progress - A measured value and its goal.
   * @returns {number} A percentage from 0 to 100.
   */
  public static buildExperimentProgressPercent(progress: DashboardWeeklyExperimentProgress): number {
    if (progress.goal <= 0) {
      return 0
    }
    return Math.max(0, Math.min(100, Math.round((progress.value / progress.goal) * 100)))
  }

  /**
   * Builds the buttons of the point timeline.
   *
   * @param {DashboardWeeklyPoint[]} sortedPoints - The points, oldest first.
   * @returns {DashboardPointTimelineEntry[]} One entry per point, with its short and long date.
   */
  public static buildTimelineEntries(sortedPoints: DashboardWeeklyPoint[]): DashboardPointTimelineEntry[] {
    return sortedPoints.map(
      (point: DashboardWeeklyPoint): DashboardPointTimelineEntry => ({
        id: point.id,
        dateLabel: WeeklyPointUtils.formatShortDay(point.date),
        longDateLabel: WeeklyPointUtils.formatLongDay(point.date, false),
      }),
    )
  }

  /**
   * Formats a day as "22 nov.".
   *
   * @param {string} isoDay - A day (YYYY-MM-DD).
   * @returns {string} The short date, or a dash when the day is invalid.
   */
  public static formatShortDay(isoDay: string): string {
    const day: Date | null = WeeklyPointUtils.parseDay(isoDay)
    return day
      ? day.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', timeZone: 'UTC' })
      : WeeklyPointUtils.MISSING_VALUE_LABEL
  }

  /**
   * Formats a day as "dimanche 22 novembre", with the year on request.
   *
   * @param {string} isoDay - A day (YYYY-MM-DD).
   * @param {boolean} hasYear - Whether the year is written.
   * @returns {string} The long date, or a dash when the day is invalid.
   */
  public static formatLongDay(isoDay: string, hasYear: boolean): string {
    const day: Date | null = WeeklyPointUtils.parseDay(isoDay)
    return day
      ? day.toLocaleDateString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          timeZone: 'UTC',
          ...(hasYear ? { year: 'numeric' } : {}),
        })
      : WeeklyPointUtils.MISSING_VALUE_LABEL
  }

  /**
   * Formats the measured week as "du 15 au 21 novembre" (both months are written when the week spans two).
   *
   * @param {string} weekStart - First day of the week (YYYY-MM-DD).
   * @param {string} weekEnd - Last day of the week (YYYY-MM-DD).
   * @returns {string} The range, empty when a day is invalid.
   */
  public static formatWeekRange(weekStart: string, weekEnd: string): string {
    const startDay: Date | null = WeeklyPointUtils.parseDay(weekStart)
    const endDay: Date | null = WeeklyPointUtils.parseDay(weekEnd)

    if (!startDay || !endDay) {
      return ''
    }
    const isSameMonth: boolean = weekStart.slice(0, 7) === weekEnd.slice(0, 7)
    const startLabel: string = startDay.toLocaleDateString('fr-FR', {
      day: 'numeric',
      timeZone: 'UTC',
      ...(isSameMonth ? {} : { month: 'long' }),
    })
    const endLabel: string = endDay.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', timeZone: 'UTC' })

    return `du ${startLabel} au ${endLabel}`
  }

  /**
   * Finds the day of the point that follows: the next recorded one, otherwise one week later.
   *
   * @param {DashboardWeeklyPoint[]} sortedPoints - The points, oldest first.
   * @param {DashboardWeeklyPoint} openedPoint - The opened point.
   * @returns {string} The day of the next point (YYYY-MM-DD), empty when the date of the opened point is invalid.
   */
  public static findNextPointDay(sortedPoints: DashboardWeeklyPoint[], openedPoint: DashboardWeeklyPoint): string {
    const followingPoint: DashboardWeeklyPoint | null =
      sortedPoints.find((point: DashboardWeeklyPoint): boolean => point.number > openedPoint.number) ?? null

    if (followingPoint) {
      return followingPoint.date
    }
    const openedDay: Date | null = WeeklyPointUtils.parseDay(openedPoint.date)

    if (!openedDay) {
      return ''
    }
    return new Date(openedDay.getTime() + WeeklyPointUtils.DAYS_BETWEEN_POINTS * WeeklyPointUtils.DAY_MS)
      .toISOString()
      .slice(0, 10)
  }

  /**
   * Keeps a link only when it is a web address.
   *
   * @param {string | undefined} url - The address written in the data file.
   * @returns {string | null} The address, null when missing or not http(s).
   */
  public static toWebUrl(url: string | undefined): string | null {
    return url && WeeklyPointUtils.WEB_URL_PATTERN.test(url) ? url : null
  }

  /**
   * Shortens a web address for display ("dibodev.fr/outils/calcul-tva-ht-ttc").
   *
   * @param {string} url - A web address.
   * @returns {string} The address without its protocol nor its trailing slash.
   */
  public static formatUrlForDisplay(url: string): string {
    return url.replace(WeeklyPointUtils.WEB_URL_PATTERN, '').replace(/\/$/, '')
  }

  /**
   * Writes the whole point as plain text, ready to paste in a message.
   *
   * @param {DashboardWeeklyPoint} openedPoint - The opened point.
   * @param {DashboardWeeklyPoint | null} comparedPoint - The compared point, null when there is none.
   * @returns {string} The report: title, figures, explanations, what was done, decisions and follow-ups.
   */
  public static buildReportText(openedPoint: DashboardWeeklyPoint, comparedPoint: DashboardWeeklyPoint | null): string {
    const weekRange: string = WeeklyPointUtils.formatWeekRange(openedPoint.weekStart, openedPoint.weekEnd)
    const titleLines: string[] = [
      `Point ${openedPoint.id} · ${WeeklyPointUtils.formatLongDay(openedPoint.date, true)}`,
      [weekRange ? `Semaine ${weekRange}` : '', comparedPoint ? `comparée au point ${comparedPoint.id}` : '']
        .filter((part: string): boolean => part.length > 0)
        .join(', '),
    ]
    const summaryLines: string[] = [openedPoint.headline, openedPoint.context ?? '']
    const figureLines: string[] = WeeklyPointUtils.buildChannelComparisons(openedPoint, comparedPoint)
      .filter((channelComparison: DashboardWeeklyChannelComparison): boolean => channelComparison.metrics.length > 0)
      .flatMap((channelComparison: DashboardWeeklyChannelComparison): string[] => [
        `${channelComparison.channel.label} :`,
        ...channelComparison.metrics.map(WeeklyPointUtils.buildReportFigureLine),
      ])
    const doneLines: string[] = WeeklyPointUtils.groupDoneItems(openedPoint.doneItems).flatMap(
      (group: DashboardWeeklyDoneGroup): string[] => [
        `${group.label} :`,
        ...group.entries.map(WeeklyPointUtils.buildReportDoneLine),
      ],
    )
    const sections: string[][] = [
      titleLines.filter((line: string): boolean => line.length > 0),
      summaryLines.filter((line: string): boolean => line.length > 0),
      WeeklyPointUtils.buildReportSection('Les chiffres', figureLines),
      WeeklyPointUtils.buildReportSection(
        'Ce qui explique ces chiffres',
        openedPoint.explanations.map(WeeklyPointUtils.toBulletLine),
      ),
      WeeklyPointUtils.buildReportSection('Ce qui a été fait', doneLines),
      WeeklyPointUtils.buildReportSection('Décisions', openedPoint.decisions.map(WeeklyPointUtils.toBulletLine)),
      WeeklyPointUtils.buildReportSection('À suivre', openedPoint.followUps.map(WeeklyPointUtils.toBulletLine)),
    ]
    return sections
      .filter((lines: string[]): boolean => lines.length > 0)
      .map((lines: string[]): string => lines.join('\n'))
      .join('\n\n')
  }

  /**
   * Parses a day as midnight UTC so the date never shifts with the time zone of the reader.
   *
   * @param {string} isoDay - A day (YYYY-MM-DD), or a datetime whose day is kept.
   * @returns {Date | null} The day, null when invalid.
   */
  private static parseDay(isoDay: string): Date | null {
    const day: Date = new Date(`${isoDay.slice(0, 10)}T00:00:00Z`)
    return Number.isNaN(day.getTime()) ? null : day
  }

  /**
   * Formats a whole number with its sign ("+6", "−7", "0").
   *
   * @param {number} value - The number.
   * @returns {string} The signed number, with a true minus sign.
   */
  private static formatSignedNumber(value: number): string {
    const absoluteLabel: string = DashboardFormatUtils.formatNumber(Math.abs(value))

    if (value > 0) {
      return `+${absoluteLabel}`
    }
    return value < 0 ? `${WeeklyPointUtils.MINUS_SIGN}${absoluteLabel}` : absoluteLabel
  }

  /**
   * Labels the value of the compared point: null without a compared point, a dash when it has no such figure.
   *
   * @param {DashboardWeeklyMetricKey} metricKey - The figure.
   * @param {DashboardWeeklyPoint | null} comparedPoint - The compared point, null when there is none.
   * @param {number | null} previousValue - Its value for the figure.
   * @returns {string | null} The label.
   */
  private static buildPreviousLabel(
    metricKey: DashboardWeeklyMetricKey,
    comparedPoint: DashboardWeeklyPoint | null,
    previousValue: number | null,
  ): string | null {
    if (!comparedPoint) {
      return null
    }
    return previousValue === null
      ? WeeklyPointUtils.MISSING_VALUE_LABEL
      : WeeklyPointUtils.formatMetricValue(metricKey, previousValue)
  }

  /**
   * Writes the line under the big figure of a channel ("clics, contre 73").
   *
   * @param {DashboardWeeklyChannelDefinition} channel - The channel.
   * @param {DashboardWeeklyMetricComparison} headline - Its first figure, compared.
   * @returns {string} The unit, followed by the previous value when there is one.
   */
  private static buildHeadlineCaption(
    channel: DashboardWeeklyChannelDefinition,
    headline: DashboardWeeklyMetricComparison,
  ): string {
    const unit: string = headline.currentValue === 1 ? channel.headlineUnitSingular : channel.headlineUnitPlural

    if (headline.previousValue === null || headline.previousLabel === null) {
      return unit
    }
    return `${unit}, contre ${headline.previousLabel}`
  }

  /**
   * Writes one figure of the plain-text report ("- Clics : 149 (73 avant, +104 %)").
   *
   * @param {DashboardWeeklyMetricComparison} comparison - The figure, compared.
   * @returns {string} The line.
   */
  private static buildReportFigureLine(comparison: DashboardWeeklyMetricComparison): string {
    const valueLine: string = `- ${comparison.channelLabel} : ${comparison.currentLabel}`

    if (comparison.previousLabel === null) {
      return valueLine
    }
    if (comparison.previousValue === null || comparison.delta === null) {
      return `${valueLine} (${WeeklyPointUtils.NO_COMPARISON_LABEL.toLowerCase()})`
    }
    const evolutionLabel: string = comparison.delta.favourable === null ? 'stable' : comparison.delta.text

    return `${valueLine} (${comparison.previousLabel} avant, ${evolutionLabel})`
  }

  /**
   * Writes one thing done of the plain-text report, with its link when it has one.
   *
   * @param {DashboardWeeklyDoneEntry} doneEntry - The thing done.
   * @returns {string} The line.
   */
  private static buildReportDoneLine(doneEntry: DashboardWeeklyDoneEntry): string {
    const description: string = doneEntry.detail ? `${doneEntry.title} : ${doneEntry.detail}` : doneEntry.title

    return doneEntry.webUrl ? `- ${description} (${doneEntry.webUrl})` : `- ${description}`
  }

  /**
   * Turns a sentence into a list line of the plain-text report.
   *
   * @param {string} sentence - The sentence.
   * @returns {string} The line.
   */
  private static toBulletLine(sentence: string): string {
    return `- ${sentence}`
  }

  /**
   * Heads a section of the plain-text report; an empty section disappears with its title.
   *
   * @param {string} title - The section title.
   * @param {string[]} lines - Its lines.
   * @returns {string[]} The title followed by the lines, or nothing.
   */
  private static buildReportSection(title: string, lines: string[]): string[] {
    return lines.length > 0 ? [title, ...lines] : []
  }
}
