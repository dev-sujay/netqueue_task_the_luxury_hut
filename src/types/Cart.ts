import { Product } from "./Product";

export interface CartItem extends Product {
  quantity: number
}

export interface CartContextType {
    cart: CartItem[]
    addToCart: (product: Product, quantity?: number) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
  }