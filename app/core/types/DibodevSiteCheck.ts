export type DibodevSiteCheckErrorKind = 'invalid' | 'unreachable' | 'rateLimited' | 'failed'

export type DibodevSiteCheckContactPrefill<TVerdict extends string> = {
  site: string | null
  verdict: TVerdict | null
}
