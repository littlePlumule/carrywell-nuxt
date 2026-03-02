<template>
  <NuxtLayout :name="LayoutType.Default">
    <main class="empty-container container">
      <section class="empty-state">
        <h2 class="empty-state__title hl3">找不到頁面</h2>
        <p class="empty-state__description hl5">
          您造訪的頁面不存在或已被移除。
        </p>
        <NuxtLink class="empty-state__link secondary-button hl4" to="/"
          >Go Home</NuxtLink
        >
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { LayoutType } from './constants/layouts'
</script>

<style lang="scss">
.empty-container {
  margin-block: var(--xxl);
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-state {
  text-align: center;
  color: var(--regal-blue);

  &__title {
    font-weight: var(--bold);
    margin-bottom: 1em;
  }

  &__description {
    font-weight: var(--semi-bold);
    color: var(--regal-blue);
  }

  &__link {
    display: block;
    margin: 0 auto;
    width: fit-content;
    padding: 8px var(--m);
    margin-top: 1em;
    font-family: var(--noto-serif-tc);
  }
}
</style>
