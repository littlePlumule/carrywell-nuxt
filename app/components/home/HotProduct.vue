<template>
  <section class="main-hot-product container">
    <h2 class="main-hot-product__headline hl3">熱門商品</h2>
    <div class="main-hot-product__wrap">
      <div class="main-hot-product__advertise">
        <img
          class="main-hot-product__advertise-image"
          src="~/assets/images/hotProduct.png"
          alt="advertise image"
        />
      </div>
      <ul class="main-hot-product__product-list">
        <li
          v-for="product in products"
          :key="product.id"
          class="main-hot-product__product-item"
        >
          <NuxtLink
            class="main-hot-product__product-link"
            :to="`/product/${product.category}/${product.id}`"
          >
            <figure class="main-hot-product__product-picture">
              <img
                class="main-hot-product__product-image"
                :src="product.image"
                :alt="`${product.title} image`"
              />
            </figure>
            <div class="main-hot-product__product-description">
              <h3 class="main-hot-product__product-title hl5">
                {{ product.title }}
              </h3>
              <span class="main-hot-product__product-price hl5">
                {{ product.price }}
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink
      class="main-hot-product__more-button secondary-button hl4"
      to="/product"
    >
      More
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProduct'

const { products } = useProducts(5, 0)
</script>

<style lang="scss" scoped>
.main-hot-product {
  &__wrap {
    column-gap: var(--xxl);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2em;
  }

  &__advertise {
    overflow: hidden;
    max-width: 500px;
    background-image: linear-gradient(var(--white), var(--alice-blue));
    aspect-ratio: 1 / 1;

    &-image {
      object-fit: contain;
      vertical-align: middle;
      transition: 0.3s;
    }
  }

  &__product-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__product-link {
    width: fit-content;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--regal-blue);
    padding-block: 10px;
    height: 100%;
  }

  &__product-item:first-of-type > &__product-link {
    border-top: 1px solid var(--regal-blue);
  }

  &__product-picture {
    overflow: hidden;
    background-image: linear-gradient(var(--white), var(--alice-blue));
    margin-right: var(--s);
    aspect-ratio: 1 / 1;
    width: 80px;
  }

  &__product-image {
    width: 100%;
    vertical-align: middle;
    transition: 0.3s;
  }

  &__product-link:hover > &__product-picture > &__product-image {
    transform: scale(1.1);
  }

  &__product-title {
    color: var(--regal-blue);
    font-weight: var(--bold);
  }

  &__product-price {
    display: block;
    color: var(--burgundy);
    font-weight: var(--bold);
    margin-top: 10px;

    &::before {
      content: '$';
      font-size: var(--xxs);
    }
  }

  &__more-button {
    display: block;
    width: fit-content;
    margin: var(--l) auto;
    padding: 8px var(--m);
    font-family: var(--noto-serif-tc);
  }
}

@media screen and (max-width: 872px) {
  .main-hot-product {
    &__product-list {
      width: 100%;
      align-items: center;
      margin-top: 40px;
    }

    &__product-description {
      display: flex;
      align-items: center;
    }

    &__product-price {
      margin-top: 0px;
      margin-left: var(--s);
    }
  }
}
</style>
