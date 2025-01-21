export type Option = {
  w: number
  h: number
  q: number
  fm: 'webp' | 'jpg'
}

export const getOptimizedImageUrl = (
  url: string,
  option: Partial<Option> = {},
): string => {
  const urlObj = new URL(url)
  for (const [key, value] of Object.entries(option)) {
    urlObj.searchParams.set(key, String(value))
  }
  return urlObj.toString()
}
