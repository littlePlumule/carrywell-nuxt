<template>
  <main class="empty-container container">
    <section class="empty-state">
      <h2 class="empty-state__title hl3">{{ title }}</h2>
      <p v-if="description" class="empty-state__description hl5">
        {{ description }}
      </p>
      <NuxtLink
        v-if="link"
        class="empty-state__link secondary-button hl4"
        :to="link"
        >{{ linkName }}</NuxtLink
      >
    </section>
  </main>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  link?: string
  linkName?: string
}

withDefaults(defineProps<Props>(), {
  description: '',
  link: '',
  linkName: '',
})
</script>

<style lang="scss" scoped>
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
