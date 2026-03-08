<template>
  <div class="favorite-page">
    <main v-if="products.length > 0" class="favorite-container container">
      <section class="product">
        <ProductHeader
          v-model:sort-method="sortMethod"
          product-title="收藏清單"
        />
        <ul ref="cardList" class="card__list">
          <TheCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </ul>
      </section>
    </main>

    <TheEmpty
      v-else
      title="還沒有收藏的商品"
      description="快去逛逛，把喜歡的商品加入收藏吧！"
      link="/product"
      link-name="Shop Now"
    />
  </div>
</template>

<script setup lang="ts">
import ProductHeader from '~/components/product/ProductHeader.vue'
import TheCard from '~/components/shared/TheCard.vue'
import TheEmpty from '~/components/shared/TheEmpty.vue'
import { useFavoriteProducts } from '~/composables/useFavoriteProducts'

definePageMeta({
  bannerTitle: 'Favorite',
})

const { products, sortMethod } = useFavoriteProducts()
</script>

<style lang="scss" scoped>
.favorite-container {
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
</style>
