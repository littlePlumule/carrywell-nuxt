import { useFavorite } from '~/composables/useFavorite'
import { useProducts } from '~/composables/useProduct'
import type { Product } from '~/types/product'

export function useFavoriteProducts() {
  const { favoriteIds } = useFavorite()

  const favoriteFilter = computed<(product: Product) => boolean>(() => {
    return (product: Product) => favoriteIds.value.includes(product.id)
  })

  const { products, sortMethod } = useProducts(16, 16, favoriteFilter)

  return {
    products,
    sortMethod,
  }
}
