import { categories, type CategoryPath } from '~/constant/categories'

export function useCategory() {
  const route = useRoute()

  const category = computed(() => route.params.category as CategoryPath)

  const productTitle = computed(() => {
    const found = categories.find((c) => c.path === category.value)
    return found?.label ?? '商品列表'
  })

  return {
    category,
    productTitle,
  }
}
