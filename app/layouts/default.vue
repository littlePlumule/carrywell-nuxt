<template>
  <div>
    <main>
      <slot></slot>
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '~/components/shared/TheFooter.vue'
</script>
