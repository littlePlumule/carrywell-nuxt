<template>
  <aside class="sidebar">
    <h3 class="sidebar__title hl5">商品分類</h3>
    <ul class="sidebar__list">
      <li
        v-for="category in categories"
        :key="category.path"
        class="sidebar__item"
        :class="{
          'sidebar__item--active': route.params.category === category.path,
        }"
      >
        <router-link
          class="sidebar__link hl7"
          :to="`/product/${category.path}`"
        >
          {{ category.label }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { categories } from '~/constant/categories'
const route = useRoute()
</script>
