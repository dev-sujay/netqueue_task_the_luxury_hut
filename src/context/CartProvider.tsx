import  {  useState, useEffect, useCallback, type ReactNode } from "react"
import type { Product } from "@/types/Product"
import { CartItem } from "@/types/Cart"
import CartContext from "./CartContext"

// Create the CartProvider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id)
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...prevCart, { ...product, quantity }]
    })
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item._id === productId ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = item.salePrice || item.regularPrice
    return total + itemPrice * item.quantity
  }, 0)

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


