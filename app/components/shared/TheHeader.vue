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
          <div
            class="main-header__menu"
            :class="{ 'main-header__menu--active': isMenuActive }"
            @click="toggleMenu"
          >
            <TheIcon
              :name="isMenuActive ? 'remove' : 'menu'"
              class="main-header__menu-icon hl3"
            />
          </div>
          <ul
            class="main-header__nav-list"
            :class="{ 'main-header__nav-list--active': isMenuActive }"
          >
            <li
              v-for="item in navItem"
              :key="item.path"
              class="main-header__nav-item"
              :class="{
                'main-header__nav-item--active': isActive(item.path),
              }"
              @click="closeMenu"
            >
              <NuxtLink class="main-header__nav-link hl5" :to="item.path">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ul class="main-header__icon-list">
          <li
            v-for="iconItem in personNavItem"
            :key="iconItem.path"
            class="main-header__icon-item"
            :class="{
              'main-header__icon-item--active': iconItem.path === route.path,
            }"
          >
            <NuxtLink class="main-header__icon-link" :to="iconItem.path">
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

const route = useRoute()

const navItem = [
  { label: '首頁', path: '/' },
  { label: '商品列表', path: '/product' },
  { label: '品牌介紹', path: '/about' },
]

const personNavItem = [
  {
    iconName: 'favoriteOutline',
    path: '/favorite',
    name: '收藏',
  },
  { iconName: 'bag', path: '/cart', name: '購物車' },
  { iconName: 'profile', path: '/login', name: '會員' },
]

function isActive(path: string) {
  if (path === '/product') {
    return route.path.startsWith('/product')
  }
  return route.path === path
}

const isMenuActive = ref(false)
function toggleMenu() {
  isMenuActive.value = !isMenuActive.value
}

function closeMenu() {
  isMenuActive.value = false
}
</script>
