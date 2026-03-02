import { products } from '~/mocks/products'
import type { Product } from '~/types/product'

export function useProductDetail() {
  const route = useRoute()

  const productId = computed(() => route.params.id as string)
  const category = computed(() => route.params.category as string)

  const baseProduct = computed(() =>
    products.find(
      (product: Product) =>
        product.id === productId.value && product.category === category.value,
    ),
  )

  const colorOptions = computed(() => {
    return baseProduct.value?.description?.colorSelection ?? []
  })

  const selectedColorId = ref(productId.value)

  const selectedProduct = computed(() =>
    products.find((product: Product) => product.id === selectedColorId.value),
  )

  const selectedImage = computed(
    () => selectedProduct.value?.image ?? baseProduct.value?.image,
  )

  const productFeatures = computed(() => {
    if (!baseProduct.value) {
      return []
    }

    const d = baseProduct.value.description

    return [
      { label: '材質', value: d.material },
      { label: '設計風格', value: `${d.designStyle}個` },
      { label: '卡位', value: `${d.cardSlot}個` },
      { label: '鈔票夾層', value: `${d.cardSlot}層` },
      { label: '零錢袋', value: d.coinBag },
      { label: '尺寸', value: d.size },
      { label: '重量', value: d.weight },
      { label: '適用對象', value: d.applicableObjects },
      {
        label: '顏色選擇',
        value: d.colorSelection.map((c) => c.color).join('、'),
      },
      { label: '保養方式', value: d.maintenanceMethod },
      { label: '產地', value: d.Origin },
    ]
  })

  return {
    baseProduct,
    selectedProduct,
    selectedColorId,
    selectedImage,
    colorOptions,
    productFeatures,
  }
}
