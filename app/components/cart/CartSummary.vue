<template>
  <aside class="cart__summary">
    <h3 class="cart__summary-title hl5">訂單摘要</h3>
    <dl class="cart__summary-list">
      <div class="cart__summary-item">
        <dt class="cart__summary-label hl7">商品總計</dt>
        <dd class="cart__summary-price hl7">{{ totalPrice }}</dd>
      </div>
      <div class="cart__summary-item">
        <dt class="cart__summary-label hl7">運費總計</dt>
        <dd class="cart__summary-price hl7">
          {{ shippingFee }}
        </dd>
      </div>
      <div class="cart__summary-item cart__summary-total">
        <dt class="cart__summary-label hl6">總共金額</dt>
        <dd class="cart__summary-price hl6">
          {{ totalAmount }}
        </dd>
      </div>
    </dl>
    <NuxtLink to="/login" class="cart__checkout primary-button hl5">
      前往結帳
    </NuxtLink>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  totalPrice: number
  shippingFee: number
  totalAmount: number
}>()
</script>

<style lang="scss">
.cart {
  &__summary {
    flex-grow: 1;
    width: 20%;
    min-width: 200px;
    color: var(--regal-blue);
    position: sticky;
    height: 100%;
    top: 100px;

    &-title {
      font-weight: var(--bold);
      text-align: center;
      border-bottom: 1px solid var(--regal-blue);
      color: var(--regal-blue);
    }

    &-item {
      display: flex;
      justify-content: space-between;
      padding: 1em 0;

      &:nth-child(2) {
        padding-top: 0;
      }
    }

    &-price {
      color: var(--burgundy);

      &::before {
        content: '$';
        font-size: 12px;
      }
    }

    &-total {
      border-top: 1px solid var(--regal-blue);
    }

    &-total > &-price::before {
      content: '$';
      font-size: 14px;
    }
  }

  &__checkout {
    display: block;
    text-align: center;
    width: 100%;
    padding: 8px 0;
    font-weight: var(--semi-bold);
    cursor: pointer;
  }
}
</style>
