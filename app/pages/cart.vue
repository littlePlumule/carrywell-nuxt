<template>
  <div class="cart-page">
    <main v-if="cartItems.length > 0" class="cart container">
      <CartStep :step="1" />

      <div class="cart__wrap">
        <section class="cart__content">
          <header class="cart__header">
            <h3 class="cart__headline hl5">刪除</h3>
            <h3 class="cart__headline hl5">產品</h3>
            <h3 class="cart__headline hl5">數量</h3>
            <h3 class="cart__headline hl5">價格</h3>
          </header>
          <ul class="cart__list">
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :item="item"
              @remove="removeFromCart"
              @decrease="decreaseQuantity"
              @increase="updateQuantity(item.id, item.quantity + 1)"
            />
          </ul>
        </section>
        <CartSummary
          :totalPrice="totalPrice"
          :shippingFee="shippingFee"
          :totalAmount="totalAmount"
        />
      </div>
    </main>

    <TheEmpty
      v-else
      title="購物車是空的"
      description="快去逛逛，把喜歡的商品加進來吧！"
      link="/product"
      link-name="Shop Now"
    />
  </div>
</template>

<script setup lang="ts">
import TheEmpty from '~/components/shared/TheEmpty.vue'
import CartStep from '~/components/cart/CartStep.vue'
import CartItem from '~/components/cart/CartItem.vue'
import CartSummary from '~/components/cart/CartSummary.vue'
import { useCart } from '~/composables/useCart'

definePageMeta({
  bannerTitle: 'Cart',
})

const {
  cartItems,
  totalPrice,
  shippingFee,
  totalAmount,
  removeFromCart,
  updateQuantity,
  decreaseQuantity,
} = useCart()
</script>

<style lang="scss" scoped>
.cart.container {
  margin: var(--xxl) auto;
}

.cart {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
    position: relative;
    padding: 0 2em;
  }

  &__content {
    flex-grow: 1;
    width: 70%;
    min-width: 576px;
    margin-bottom: 60px;
  }

  &__header {
    display: grid;
    grid-template-columns: 60px 2fr 1fr 60px;
    border-bottom: 1px solid var(--regal-blue);
    color: var(--regal-blue);
    column-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .cart {
    &__content {
      min-width: unset;
    }

    &__header {
      grid-template-columns: auto 1fr;
    }
  }
}
</style>
