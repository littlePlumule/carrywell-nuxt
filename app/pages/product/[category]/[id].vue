<template>
  <section class="product-detail">
    <header class="product-detail__header">
      <div class="product-detail__picture-wrap">
        <div class="product-detail__picture-large">
          <img :src="selectedImage" :alt="`${selectedProduct?.title} img`" />
        </div>
        <div class="product-detail__picture-thumbnails">
          <button
            v-for="option in colorOptions"
            :key="option.id"
            class="product-detail__picture-thumbnail"
            :class="{
              'product-detail__picture-thumbnail--active':
                option.id === selectedColorId,
            }"
            @click="selectedColorId = option.id"
          >
            <img :src="option.image" :alt="`${selectedProduct?.title} img`" />
          </button>
        </div>
      </div>
      <section class="product-detail__description">
        <h3 class="product-detail__title hl4">
          {{ selectedProduct?.title }}
        </h3>
        <p class="product-detail__price hl4">
          {{ selectedProduct?.price }}
        </p>
        <section class="product-detail__color-wrap">
          <h4 class="product-detail__color-title hl5">顏色</h4>
          <div class="product-detail__color-list">
            <button
              v-for="option in colorOptions"
              :key="option.id"
              class="product-detail__color-item hl7"
              :class="{
                'product-detail__color-item--active':
                  option.id === selectedColorId,
              }"
              @click="selectedColorId = option.id"
            >
              {{ option.color }}
            </button>
          </div>
        </section>
        <section class="product-detail__quantity-wrap">
          <div class="product-detail__quantity-list">
            <button
              class="product-detail__quantity-minus hl5"
              @click="decrease"
            >
              -
            </button>
            <input
              type="number"
              :value="quantity"
              class="product-detail__quantity hl5"
              readonly
              min="1"
            />
            <button class="product-detail__quantity-plus hl5" @click="increase">
              +
            </button>
          </div>
          <button
            class="product-detail__favorite-button secondary-button hl5"
            @click="toggleFavorite(selectedColorId)"
          >
            {{ isFavorited ? '已加入收藏' : '加入收藏清單' }}
          </button>
        </section>
        <button
          class="product-detail__cart-button primary-button hl5"
          @click="handleAddToCart"
        >
          加入購物車
        </button>
      </section>
    </header>

    <section class="product-detail__feature">
      <h3 class="product-detail__feature-title hl5">產品特色</h3>
      <div class="product-detail__feature-content hl7">
        <p
          v-for="(feature, index) in productFeatures"
          :key="index"
          class="product-detail__feature-text"
        >
          {{ feature.label }}： <span>{{ feature.value }}</span>
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useProductDetail } from '~/composables/useProductDetail'
import { useCart } from '~/composables/useCart'
import { useFavorite } from '~/composables/useFavorite'

definePageMeta({
  middleware: ['category'],
  pageTransition: {
    name: 'wallet-fade',
    mode: 'out-in',
    css: false,
    onEnter: (el, done) => {
      const { pageIn } = useAnimations()
      pageIn(el, done)
    },
    onLeave: (el, done) => {
      const { pageOut } = useAnimations()
      pageOut(el, done)
    },
  },
})

const {
  selectedProduct,
  selectedColorId,
  selectedImage,
  colorOptions,
  productFeatures,
} = useProductDetail()

const quantity = ref(1)
function increase() {
  quantity.value++
}
function decrease() {
  if (quantity.value > 1) quantity.value--
}

const { isFavorite, toggleFavorite } = useFavorite()
const isFavorited = computed(() => isFavorite(selectedColorId.value))

const { addToCart } = useCart()
function handleAddToCart() {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value, quantity.value)
  }
}
</script>

<style lang="scss" scoped>
.product-container {
  display: flex;
  justify-content: space-between;
  margin-block: var(--xxl);
  position: relative;
}

.product-detail {
  width: 100%;
  padding: 0 2em;

  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  &__picture-wrap {
    flex-grow: 1;
    width: 45%;
    min-width: 300px;
  }

  &__picture-large {
    width: 100%;
    border: 1px solid var(--regal-blue);
    background-image: linear-gradient(var(--white), var(--alice-blue));
  }

  &__picture-thumbnails {
    display: flex;
    flex-wrap: wrap;
  }

  &__picture-thumbnail {
    border-bottom: 1px solid var(--regal-blue);
    border-right: 1px solid var(--regal-blue);
    flex-basis: 25%;
    background-image: linear-gradient(var(--white), var(--alice-blue));
    overflow: hidden;

    &:nth-child(4n + 1) {
      border-left: 1px solid var(--regal-blue);
    }

    & img {
      transition: transform 0.3s;
      height: 100%;
    }

    &:hover img,
    &--active img {
      transform: scale(1.2);
    }
  }

  &__description {
    flex-grow: 1;
    width: 45%;
    min-width: 300px;
  }

  &__title {
    color: var(--regal-blue);
    letter-spacing: 1.2px;
    font-weight: var(--bold);
    margin-bottom: 20px;
  }

  &__price {
    color: var(--burgundy);
    font-weight: var(--bold);

    &::before {
      content: '$';
      font-size: var(--xs);
    }
  }

  &__color-wrap {
    margin-top: 2em;
  }

  &__color-title,
  &__number-title {
    font-weight: var(--semi-bold);
    margin-bottom: 1.25em;
    color: var(--regal-blue);
  }

  &__color-list {
    display: flex;
    gap: 20px;
  }

  &__color-item {
    flex-grow: 1;
    border: 1px solid var(--regal-blue);
    padding: 8px;
    color: var(--regal-blue);
    background-color: var(--white);
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover,
    &--active {
      background-color: var(--regal-blue);
      color: var(--white);
    }
  }

  &__quantity-wrap {
    margin-top: 2.5em;
    display: flex;
    gap: 20px;
  }

  &__quantity-list {
    display: flex;
    flex-basis: 50%;
  }

  &__quantity-minus,
  &__quantity-plus {
    padding: 8px 16px;
    border: 1px solid var(--regal-blue);
    color: var(--regal-blue);
  }

  &__quantity {
    text-align: center;
    width: 100%;
    min-width: 50px;
    border-radius: unset;
    border: unset;
    border-top: 1px solid var(--regal-blue);
    border-bottom: 1px solid var(--regal-blue);
    outline: unset;
  }

  &__favorite-button {
    white-space: nowrap;
    padding: 8px;
    flex-grow: 1;
  }

  &__cart-button {
    width: 100%;
    padding: 8px;
    margin-top: 40px;
  }

  &__feature {
    margin-top: 40px;

    &-title {
      border-bottom: 1px solid var(--regal-blue);
      color: var(--regal-blue);
      font-weight: var(--semi-bold);
      letter-spacing: 1.2px;
    }

    &-content {
      color: var(--regal-blue);
      line-height: 2em;
      letter-spacing: 1.2px;
      padding-top: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    margin: unset;
    margin-bottom: var(--xxl);
  }
}
</style>
