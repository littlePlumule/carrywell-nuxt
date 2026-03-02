import type { CartItem } from '~/types/cart'
import type { Product } from '~/types/product'
import { useStorage } from './useStorage'

const CART_KEY = 'cartItems'

export function useCart() {
  const cartItems = useStorage<CartItem[]>(CART_KEY, [])
  function addToCart(product: Product, quantity = 1) {
    const existing = cartItems.value.find(
      (item: CartItem) => item.id === product.id,
    )

    if (existing) {
      existing.quantity += quantity
    } else {
      cartItems.value.push({ ...product, quantity })
    }
  }

  function removeFromCart(productId: string) {
    cartItems.value = cartItems.value.filter(
      (item: CartItem) => item.id !== productId,
    )
  }

  function updateQuantity(productId: string, quantity: number) {
    const item = cartItems.value.find((item: CartItem) => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  function getQuantity(productId: string): number {
    const item = cartItems.value.find((item: CartItem) => item.id === productId)
    return item ? item.quantity : 0
  }

  function decreaseQuantity(productId: string) {
    const item = cartItems.value.find((item: CartItem) => item.id === productId)
    if (!item) return
    if (item.quantity <= 1) {
      removeFromCart(productId)
    } else {
      item.quantity--
    }
  }

  const totalItem = computed(() =>
    cartItems.value.reduce(
      (sum: number, item: CartItem) => sum + item.quantity,
      0,
    ),
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0,
    ),
  )

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getQuantity,
    decreaseQuantity,
    totalItem,
    totalPrice,
  }
}
