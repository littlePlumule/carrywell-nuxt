<template>
  <li class="cart__item">
    <button class="cart__item-remove" @click="$emit('remove', item.id)">
      <TheIcon name="remove" class="cart__remove-icon hl5" />
    </button>
    <div class="cart__item-content">
      <div class="cart__item-picture">
        <img :src="item.image" alt="long wallet" />
      </div>
      <h3 class="cart__item-name hl5">{{ item.title }}</h3>
    </div>
    <div class="cart__item-quantity">
      <button
        class="cart__quantity-button hl5"
        @click="$emit('decrease', item.id)"
      >
        -
      </button>
      <input
        type="number"
        :value="item.quantity"
        min="1"
        readonly
        class="cart__quantity-input hl5"
      />
      <button
        class="cart__quantity-button hl5"
        @click="$emit('increase', item.id)"
      >
        +
      </button>
    </div>
    <span class="cart__item-price hl5">{{ item.price * item.quantity }}</span>
  </li>
</template>

<script setup lang="ts">
import TheIcon from '~/components/shared/TheIcon.vue'
import type { CartItem } from '~/types/cart'

defineProps<{
  item: CartItem
}>()

defineEmits<{
  (e: 'remove', id: string): void
  (e: 'decrease', id: string): void
  (e: 'increase', id: string): void
}>()
</script>

<style lang="scss">
.cart {
  &__item {
    display: grid;
    grid-template-columns: 60px 2fr 1fr 60px;
    border-bottom: 1px solid var(--regal-blue);
    color: var(--regal-blue);
    column-gap: 20px;
  }

  &__item {
    padding: 10px 0;
  }

  &__header {
    font-weight: var(--bold);
  }

  &__headline:first-child {
    visibility: hidden;
  }

  &__item {
    font-weight: var(--semi-bold);
  }

  &__item-remove {
    width: fit-content;
    height: fit-content;
    margin: auto;
  }

  &__remove-icon {
    // padding: 10px;
    margin-left: 20px;
    font-weight: var(--bold);
    color: var(--nobel);
  }

  &__item-remove:hover &__remove-icon {
    color: var(--burgundy);
  }

  &__item-content {
    display: flex;
    align-items: center;
  }

  &__item-picture {
    width: 80px;
    background-image: linear-gradient(var(--white), var(--alice-blue));
    margin-right: 20px;
  }

  &__item-quantity {
    display: flex;
    align-items: center;
  }

  &__quantity-button {
    flex-grow: 1;
    padding: 8px 16px;
    flex-shrink: 0;
    border: 1px solid var(--regal-blue);
  }

  &__quantity-input {
    flex-grow: 2;
    padding: 8px 16px;
    text-align: center;
    width: 60%;
    min-width: 50px;
    border-radius: unset;
    border: unset;
    border-top: 1px solid var(--regal-blue);
    border-bottom: 1px solid var(--regal-blue);
    outline: unset;
  }

  &__item-price {
    height: fit-content;
    margin: auto 0;
    color: var(--burgundy);

    &::before {
      content: '$';
      font-size: var(--xxs);
    }
  }
}

@media screen and (max-width: 768px) {
  .cart {
    &__item {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'product price' 'quantity remove';
      gap: 10px;
    }

    &__headline:nth-child(1),
    &__headline:nth-child(3),
    &__headline:nth-child(4) {
      display: none;
    }

    &__item-remove {
      grid-area: remove;
    }

    &__remove-icon {
      margin-left: unset;
    }

    &__item-content {
      grid-area: product;
    }

    &__item-quantity {
      grid-area: quantity;
    }

    &__item-price {
      grid-area: price;
    }
  }
}
</style>
