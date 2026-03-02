import { products } from '~/mocks/products'
import type { Product } from '~/types/product'
import type { SortOption } from '~/constant/sort'

type FilterFn = (product: Product) => boolean

export function useProducts(
  limitSize = 12,
  step = 12,
  filterRef?: Ref<FilterFn | null>,
) {
  const limit = ref(limitSize)
  const sortMethod = ref<SortOption>('最新上架')

  watch(filterRef ?? ref(null), () => {
    limit.value = limitSize
  })

  const filteredProducts = computed<Product[]>(() => {
    if (!filterRef?.value) return products
    return products.filter(filterRef.value)
  })

  const sortedProducts = computed<Product[]>(() => {
    const products = [...filteredProducts.value]
    switch (sortMethod.value) {
      case '價格高到低':
        return products.sort((a, b) => b.price - a.price)
      case '價格低到高':
        return products.sort((a, b) => a.price - b.price)
      default:
        return products
    }
  })

  const limitProducts = computed<Product[]>(() => {
    return sortedProducts.value.slice(0, limit.value)
  })

  const hasMore = computed(() => {
    return limit.value < sortedProducts.value.length
  })

  const loadMore = () => {
    if (hasMore.value) {
      limit.value += step
    }
  }

  return {
    products: limitProducts,
    sortMethod,
    hasMore,
    loadMore,
  }
}
