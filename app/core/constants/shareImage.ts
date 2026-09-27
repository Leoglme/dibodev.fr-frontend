/** 3:2 share images: LinkedIn, Facebook and X crop them to their 1.91:1 or 2:1 frame, and Slack's compact preview fills its box. */
export const SHARE_IMAGE_WIDTH: number = 1200
export const SHARE_IMAGE_HEIGHT: number = 800
/** Site background (gray-900) behind share images that do not fill their frame. */
export const SHARE_IMAGE_BACKGROUND_COLOR: string = '101623'
/** Added to the generated share image URLs: bump it when their design changes, so link preview caches fetch the new images. */
export const SHARE_IMAGE_VERSION: number = 3
