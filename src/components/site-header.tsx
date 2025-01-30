import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Search, User2, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "./mobile-nav"
import { CartSidebar } from "./CartSidebar"
import CartContext from "@/context/CartContext"
import { FloatingSearchBar } from "./FloatingSearchBar"

export function SiteHeader() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems } = useContext(CartContext) || { totalItems: 0 }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <MobileNav />
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold tracking-tighter md:text-xl">THE LUXURY HUT</span>
          </Link>
        </div>
        <nav className="hidden flex-1 items-center justify-center space-x-4 md:flex md:space-x-6 text-sm">
          <Link to="/watches" className="text-foreground transition-colors hover:text-foreground/80">
            WATCHES
          </Link>
          <Link to="/jewellery" className="text-foreground transition-colors hover:text-foreground/80">
            JEWELLERY
          </Link>
          <Link to="/rolex" className="text-foreground transition-colors hover:text-foreground/80">
            ROLEX
          </Link>
          <Link to="/new" className="text-foreground transition-colors hover:text-foreground/80">
            NEW IN
          </Link>
          <Link to="/sale" className="text-foreground transition-colors hover:text-foreground/80">
            SALE
          </Link>
          <Link to="/sell-watch" className="text-foreground transition-colors hover:text-foreground/80">
            SELL A WATCH
          </Link>
          <Link to="/sell-rolex" className="text-foreground transition-colors hover:text-foreground/80">
            SELL ROLEX
          </Link>
          <Link to="/sell-jewellery" className="text-foreground transition-colors hover:text-foreground/80">
            SELL JEWELLERY
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <Link to="/exchange" className="text-foreground transition-colors hover:text-foreground/80">
            EXCHANGE
          </Link>
        </nav>
        <div className="flex items-center justify-end space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-transparent" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent">
            <User2 className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent hidden sm:inline-flex">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {totalItems}
              </Badge>
            )}
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FloatingSearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}

