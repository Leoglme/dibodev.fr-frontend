export type DibodevPhotoSlideshowSlide = {
  id: string
  imageUrl: string
  imageSrcset: string
  imageAlt: string
  title: string
  subtitle: string
}

export type DibodevPhotoSlideshowNavigationMethod = 'photo' | 'swipe' | 'marker'

/** Emitted only when the visitor changes the slide by hand, never by auto-play. */
export type DibodevPhotoSlideshowNavigation = {
  slideId: string
  method: DibodevPhotoSlideshowNavigationMethod
}

export type DibodevPhotoSlideshowProps = {
  slides: DibodevPhotoSlideshowSlide[]
  accessibleName: string
  captionIntro: string
}
