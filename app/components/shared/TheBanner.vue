<template>
  <slot>
    <div class="banner container-large">
      <h2 class="banner__title hl2">{{ title }}</h2>
    </div>
  </slot>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>
