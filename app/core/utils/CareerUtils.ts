const CAREER_START_YEAR: number = 2019
const CAREER_START_MONTH_INDEX: number = 3

/**
 * Figures about Léo's career shown on the site.
 */
export class CareerUtils {
  /**
   * Counts the full years of experience since April 2019, so the figure goes up by itself every April.
   * @param {Date} today - Date to count up to.
   * @returns {number} Whole years of experience.
   */
  public static getYearsOfExperience(today: Date = new Date()): number {
    const hasReachedStartMonth: boolean = today.getMonth() >= CAREER_START_MONTH_INDEX
    return today.getFullYear() - CAREER_START_YEAR - (hasReachedStartMonth ? 0 : 1)
  }
}
