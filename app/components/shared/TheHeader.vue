<template>
  <div class="header-wrapper">
    <header class="main-header">
      <div class="container-large">
        <h1 class="main-header__logo">
          <NuxtLink class="main-header__logo-link hl2" to="/">
            CarryWell
          </NuxtLink>
        </h1>
        <nav class="main-header__navbar">
          <div class="main-header__menu" :class="menuClass" @click="toggleMenu">
            <TheIcon :name="menuIcon" class="main-header__menu-icon hl3" />
          </div>
          <ul class="main-header__nav-list" :class="navListClass">
            <li
              v-for="item in navItem"
              :key="item.path"
              class="main-header__nav-item"
              :class="getNavItemClass(item.path)"
              @click="closeMenu"
            >
              <NuxtLink class="main-header__nav-link hl5" :to="item.path">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- User Icons -->
        <ul class="main-header__icon-list">
          <li
            v-for="iconItem in personNavItem"
            :key="iconItem.path"
            class="main-header__icon-item"
            :class="getIconItemClass(iconItem.path)"
          >
            <NuxtLink class="main-header__icon-link" :to="iconItem.path">
              <span
                v-if="iconItem.quantity && iconItem.quantity > 0"
                class="main-header__icon-quantity"
              >
                {{ iconItem.quantity }}
              </span>
              <TheIcon
                :name="iconItem.iconName"
                class="main-header__icon hl4"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import TheIcon from './TheIcon.vue'
import { useCart } from '~/composables/useCart'
import { useFavorite } from '~/composables/useFavorite'

const route = useRoute()

const { totalItem } = useCart()
const { favoriteCount } = useFavorite()

const navItem = [
  { label: '首頁', path: '/' },
  { label: '商品列表', path: '/product' },
  { label: '品牌介紹', path: '/about' },
]

const personNavItem = computed(() => [
  {
    iconName: 'favoriteOutline',
    path: '/favorite',
    name: '收藏',
    quantity: favoriteCount.value,
  },
  {
    iconName: 'bag',
    path: '/cart',
    name: '購物車',
    quantity: totalItem.value,
  },
  {
    iconName: 'profile',
    path: '/login',
    name: '會員',
  },
])

const isMenuActive = ref(false)

const menuIcon = computed(() => (isMenuActive.value ? 'remove' : 'menu'))

const menuClass = computed(() => ({
  'main-header__menu--active': isMenuActive.value,
}))

const navListClass = computed(() => ({
  'main-header__nav-list--active': isMenuActive.value,
}))

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

function closeMenu() {
  isMenuActive.value = false
}

function isActive(path: string) {
  if (path === '/product') {
    return route.path.startsWith('/product')
  }
  return route.path === path
}

function getNavItemClass(path: string) {
  return {
    'main-header__nav-item--active': isActive(path),
  }
}

function getIconItemClass(path: string) {
  return {
    'main-header__icon-item--active': route.path === path,
  }
}
</script>
