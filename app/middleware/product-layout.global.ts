import { LayoutType } from '~/constant/layouts'

export default defineNuxtRouteMiddleware((to) => {
  const startsWithProduct = to.path.startsWith('/product')
  if (startsWithProduct) {
    to.meta.layout = LayoutType.Product
  }
  if (startsWithProduct && !to.meta.bannerTitle) {
    to.meta.bannerTitle = 'Product'
  }
})
