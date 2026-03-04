<template>
  <li class="card__item">
    <NuxtLink
      class="card__link"
      :to="`/product/${product.category}/${product.id}`"
    >
      <figure class="card__picture">
        <img
          :src="product.image"
          :alt="product.title"
          class="card__image"
          loading="lazy"
        />
        <button
          :class="[
            'card__favorite',
            { 'card__favorite--active': isFavorite(product.id) },
          ]"
          @click.prevent.stop="toggleFavorite(product.id)"
        >
          <TheIcon name="favorite" class="card__favorite-icon hl5" />
        </button>
      </figure>
    </NuxtLink>
    <div class="card__description">
      <h3 class="card__title hl6">{{ product.title }}</h3>
      <span class="card__price hl6">{{ product.price }}</span>
      <button class="card__cart" @click="addToCart(product)">
        <TheIcon name="cart" class="card__cart-icon hl3" />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product'
import TheIcon from './TheIcon.vue'
import { useFavorite } from '~/composables/useFavorite'
import { useCart } from '~/composables/useCart'

defineProps<{
  product: Product
}>()

const { toggleFavorite, isFavorite } = useFavorite()
const { addToCart } = useCart()
</script>
