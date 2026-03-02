<template>
  <section class="main-category container">
    <h2 class="main-category__headline hl3">類別推薦</h2>
    <ul class="main-category__list">
      <li
        v-for="category in categoryList"
        :key="category.id"
        class="main-category__item"
      >
        <NuxtLink class="main-category__link" :to="category.link">
          <figure class="main-category__picture">
            <img
              :src="category.image"
              :alt="category.alt"
              class="main-category__image"
            />
          </figure>
          <h3 class="main-category__title hl5">{{ category.title }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import longWalletCategoryImage from '~/assets/images/long-wallet.png'
import walletCategoryImage from '~/assets/images/wallet.png'
import shortWalletCategoryImage from '~/assets/images/short-wallet.png'
import coinPurseCategoryImage from '~/assets/images/coin-purse.png'

interface Category {
  id: number
  title: string
  image: string
  alt: string
  link: string
}

const mainCategory: Category[] = [
  {
    id: 1,
    title: '皮夾 / 短夾',
    image: shortWalletCategoryImage,
    alt: 'short wallet image',
    link: '/product/short-wallet',
  },
  {
    id: 2,
    title: '皮夾 / 中夾',
    image: walletCategoryImage,
    alt: 'wallet image',
    link: '/product/mid-wallet',
  },
  {
    id: 3,
    title: '皮夾 / 長夾',
    image: longWalletCategoryImage,
    alt: 'long wallet image',
    link: '/product/long-wallet',
  },
  {
    id: 4,
    title: '零錢包',
    image: coinPurseCategoryImage,
    alt: 'coin purse wallet',
    link: '/product/coin-purse',
  },
]

const props = defineProps<{
  categories?: Category[]
}>()

const categoryList = computed<Category[]>(() => {
  return props.categories ?? mainCategory
})
</script>

<style lang="scss" scoped>
.main-category {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
    gap: 20px;
  }

  &__picture {
    background-image: linear-gradient(var(--white), var(--alice-blue));
    width: 100%;
  }

  &__image {
    vertical-align: middle;
    transform: scale(1);
    transition: transform 0.3s;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
  }

  &__item:hover &__image {
    transform: scale(1.05);
  }

  &__title {
    color: var(--regal-blue);
    font-weight: var(--bold);
    background-color: var(--white);
    padding: 8px var(--xxs);
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  // .main-category {
  //   &__list {
  //     grid-template-columns: 1fr 1fr;
  //   }
  // }
}
</style>
