const FAVORITE_KEY = 'favoriteProductIds'
import { useStorage } from './useStorage'

export function useFavorite() {
  const favoriteIds = useStorage<string[]>(FAVORITE_KEY, [])

  function toggleFavorite(productId: string) {
    const index = favoriteIds.value.indexOf(productId)

    switch (index) {
      case -1:
        favoriteIds.value.push(productId)
        break
      default:
        favoriteIds.value.splice(index, 1)
    }
  }

  function isFavorite(productId: string) {
    return favoriteIds.value.includes(productId)
  }

  const favoriteCount = computed(() => favoriteIds.value.length)

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    favoriteCount,
  }
}
