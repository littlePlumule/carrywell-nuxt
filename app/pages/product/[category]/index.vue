<template>
  <section class="product">
    <ProductHeader
      v-model:sort-method="sortMethod"
      :product-title="productTitle"
    />

    <ul ref="cardList" class="card__list">
      <TheCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div ref="sentinel" class="scroll-sentinel" />
  </section>
</template>

<script setup lang="ts">
import ProductHeader from '~/components/product/ProductHeader.vue'
import TheCard from '~/components/shared/TheCard.vue'
import { useCategory } from '~/composables/useCategory'
import { useProducts } from '~/composables/useProduct'
import { useInfiniteScroll } from '~/composables/useInfiniteScroll'
import type { CategoryPath } from '~/constant/categories'
import type { Product } from '~/types/product'

definePageMeta({
  middleware: ['category'],
})

const route = useRoute()
const { productTitle } = useCategory()

const category = computed(() => route.params.category as CategoryPath)

const categoryFilter = computed(() => {
  if (!category.value || category.value === 'hot') {
    return null
  }

  return (product: Product) => product.category === category.value
})

const { products, sortMethod, hasMore, loadMore } = useProducts(
  12,
  12,
  categoryFilter,
)

const sentinel = ref<HTMLElement | null>(null)

useInfiniteScroll({
  sentinel,
  canLoadMore: hasMore,
  onLoadMore: loadMore,
  rootMargin: '200px',
})
</script>

<style lang="scss">
.product-container {
  display: flex;
  justify-content: space-between;
  margin-block: var(--xxl);
  position: relative;
}

.product {
  flex-grow: 1;
}

.card__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  gap: var(--xxl) var(--l);
}

.scroll-sentinel {
  height: 1px;
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    margin: unset;
    margin-bottom: var(--xxl);
  }

  .product {
    width: 100%;
  }
}
</style>
