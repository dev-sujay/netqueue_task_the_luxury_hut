import { Link } from "react-router-dom"
import { Heart, Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  name: string
  image: string
  price: number
  originalPrice: number
  inStock: boolean
  discount?: number
}

export function ProductCard({ id, name, image, price, originalPrice, inStock, discount }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col" onClick={() => console.log(id)}>
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute left-4 right-4 top-4 z-10 flex justify-between">
          <div className="flex gap-2">
            {inStock && (
              <Badge variant="secondary" className="h-7 text-[0.625rem] font-questrial">
                IN STOCK
              </Badge>
            )}
            {discount && (
              <Badge variant="destructive" className="h-7 text-[0.625rem] font-questrial">
                -{discount}%
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="grid grid-cols-2">
              <Button className="rounded-none bg-black text-white hover:bg-black/90 h-12 text-[0.6875rem] font-questrial">
                <ShoppingBag className="h-5 w-5 mr-2" />
                ADD TO CART
              </Button>
              <Button
                variant="secondary"
                className="rounded-none bg-[#F8F8F8] hover:bg-[#F0F0F0] text-black h-12 text-[0.6875rem] font-questrial"
              >
                <Search className="h-5 w-5 mr-2" />
                QUICK VIEW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 text-center py-3">
        <span className="text-[0.6875rem] text-muted-foreground tracking-wider font-questrial">PRE-OWNED</span>
        <h3 className="text-xs tracking-wider font-questrial truncate">{name}</h3>
        <div className="flex items-center justify-center gap-4">
          {originalPrice > price && (
            <span className="text-md text-muted-foreground line-through font-questrial">
              £{originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-md font-questrial">£{price.toLocaleString()}</span>
        </div>
        <Link
          to="#"
          className="text-xs text-muted-foreground hover:text-foreground tracking-wider font-questrial"
        >
          AUTHENTICITY CERTIFICATE
        </Link>
      </div>
    </div>
  )
}

