import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useContext } from "react"
import CartContext from "@/context/CartContext"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const context = useContext(CartContext) || {
    cart: [],
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    totalItems: 0,
    totalPrice: 0,
  }
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = context

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto mt-8">
          <div className="space-y-4 pr-4">
            {cart.map((item) => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.images[0] || "/placeholder.svg"} alt={item.name} className="h-16 w-16 object-cover" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                    -
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                    +
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => removeFromCart(item._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 space-y-4 border-t pt-4">
          <div className="flex justify-between">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Price:</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>
          <Button className="w-full" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button className="w-full" variant="default">
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

