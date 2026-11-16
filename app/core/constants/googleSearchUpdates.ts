import type { DibodevGoogleSearchUpdate } from '~/core/types/DibodevGoogleUpdateImpact'

/** Google's Search Status Dashboard, where every ranking update is announced and closed. */
export const GOOGLE_SEARCH_STATUS_DASHBOARD_URL: string = 'https://status.search.google.com/summary'

/** Day the dashboard was last re-read for the list below: move it at each re-read. */
export const GOOGLE_SEARCH_UPDATES_READ_AT: string = '2026-11-16'

/** Ranking updates of 2026 read on the dashboard, newest first. A new update is one more line here: the tool, the test and the calendar of the page follow. Set `endDate` the day Google announces the end. */
export const GOOGLE_SEARCH_UPDATES: DibodevGoogleSearchUpdate[] = [
  {
    id: 'november-2026-core',
    name: 'November 2026 core update',
    kind: 'core',
    startDate: '2026-11-10',
    endDate: null,
    incidentUrl: 'https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc',
  },
  {
    id: 'september-2026-spam',
    name: 'September 2026 spam update',
    kind: 'spam',
    startDate: '2026-09-24',
    endDate: '2026-10-08',
    incidentUrl: 'https://status.search.google.com/incidents/XhUDXP7A67iHCD2kmbVu',
  },
  {
    id: 'may-2026-core',
    name: 'May 2026 core update',
    kind: 'core',
    startDate: '2026-05-21',
    endDate: '2026-06-02',
    incidentUrl: 'https://status.search.google.com/incidents/wdAXJk6LRRihEjpzEeWE',
  },
  {
    id: 'march-2026-core',
    name: 'March 2026 core update',
    kind: 'core',
    startDate: '2026-03-27',
    endDate: '2026-04-08',
    incidentUrl: 'https://status.search.google.com/incidents/7eTbAa2jWdToLkraZj5y',
  },
]

/** The newest update: the one the tool and the test compare with by default. */
export const LATEST_GOOGLE_SEARCH_UPDATE: DibodevGoogleSearchUpdate =
  GOOGLE_SEARCH_UPDATES[0] as DibodevGoogleSearchUpdate
