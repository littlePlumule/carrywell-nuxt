<template>
  <nav class="step">
    <ul class="step__list" :style="{ '--step-pos': stepPos }">
      <li
        v-for="stepItem in stepList"
        :key="stepItem.number"
        class="step__item hl4"
        :class="{ 'step__item--active': step >= stepItem.number }"
      >
        <span class="step__number">{{ stepItem.number }}</span>
        <h3 class="step__title">{{ stepItem.title }}</h3>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  step: number
}>()

const stepList = [
  { number: 1, title: '購物車' },
  { number: 2, title: '填寫資料' },
  { number: 3, title: '完成訂單' },
]

const stepPos = computed(() => {
  switch (props.step) {
    case 1:
      return '10%'
    case 2:
      return '50%'
    case 3:
      return '100%'
    default:
      return '0%'
  }
})
</script>
