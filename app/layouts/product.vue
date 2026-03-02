<template>
  <NuxtLayout :name="LayoutType.Default">
    <main class="product-container container">
      <ProductSidebar />
      <slot />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ProductSidebar from '~/components/product/ProductSidebar.vue'
import { LayoutType } from '~/constant/layouts'
</script>

<style lang="scss">
.product-container {
  display: flex;
  justify-content: space-between;
  margin-block: var(--xxl);
  position: relative;
}

@media screen and (max-width: 768px) {
  .product-container {
    flex-direction: column;
    margin: unset;
    margin-bottom: var(--xxl);
  }
}
</style>
