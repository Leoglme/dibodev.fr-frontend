export type HomePageContent = {
  featuredProjectSlugs: string[]
}

/** saved is the content committed on the repository, deployed the one bundled in the running build. */
export type HomePageContentResponse = {
  saved: HomePageContent
  deployed: HomePageContent
}

export type SaveFeaturedProjectsBody = {
  projectSlugs: string[]
}

export type SaveFeaturedProjectsResponse = {
  saved: HomePageContent
  hasNewCommit: boolean
}
