import { categories, type CategoryPath } from '~/constant/categories'

export default defineNuxtRouteMiddleware((to) => {
  const category = to.params.category as string | undefined

  if (category) {
    const ValidPath = categories.map((item) => item.path)
    if (!ValidPath.includes(category as CategoryPath)) {
      throw createError({ statusCode: 404, statusMessage: '分類不存在' })
    }
  }
})
