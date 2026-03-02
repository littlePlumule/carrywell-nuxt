<template>
  <header class="product__header">
    <h3 class="product__headline hl4">{{ productTitle }}</h3>
    <div class="product__sort">
      <button class="product__sort-trigger" @click="toggleTrigger">
        <span class="product__sort-selected hl7">{{ sortMethod }}</span>
        <span class="product__sort-arrow">
          <TheIcon name="downArrow" class="product__sort-arrow-icon hl5" />
        </span>
      </button>
      <ul
        class="product__sort-option-list"
        :class="{ 'product__sort-option-list--active': trigger }"
      >
        <li
          v-for="option in options"
          :key="option"
          class="product__sort-option-item hl7"
          @click="handleSelect(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import TheIcon from '../shared/TheIcon.vue'

defineProps<{
  productTitle: string
}>()

const options = ['最新上架', '價格低到高', '價格高到低'] as const
type SortOption = (typeof options)[number]

const sortMethod = defineModel<SortOption>('sortMethod')

const trigger = ref(false)

function toggleTrigger() {
  trigger.value = !trigger.value
}

function handleSelect(option: SortOption) {
  sortMethod.value = option
  trigger.value = false
}
</script>

<style lang="scss" scoped>
.product {
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 40px;
  }

  &__headline {
    font-weight: var(--bold);
    color: var(--regal-blue);
    line-height: 32px;
    border-bottom: 1px solid var(--regal-blue);
  }
}
.product__sort {
  display: flex;
  align-items: center;
  position: relative;

  &-trigger {
    display: flex;
    align-items: center;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    border: 1px solid var(--regal-blue);
    padding: 0.2em 0.5em;
  }

  &-selected {
    margin-right: 8px;
  }

  &-option-list {
    display: none;
    color: var(--regal-blue);
    font-weight: var(--semi-bold);
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    text-align: center;
    z-index: 1;
    background-color: var(--white);
  }

  &-option-list--active {
    display: block;
  }

  &-option-item {
    padding: 0.5em 0.2em;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: var(--regal-blue);
      color: var(--white);
    }
  }
}
</style>
