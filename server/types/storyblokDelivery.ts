export type StoryblokSpaceResponse = {
  space?: { version?: number }
}

export type StoryblokStoriesPage<T> = {
  stories?: T[]
}
