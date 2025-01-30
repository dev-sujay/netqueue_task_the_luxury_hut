import { Link, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/Product";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useContext, useState } from "react";
import CartContext from "@/context/CartContext";

export function ProductCard({
  product,
  loading,
}: {
  product: Product;
  loading: boolean;
}) {
  const {
    _id,
    name,
    inStock,
    salePrice,
    regularPrice,
    images,
    shortDescription,
  } = product;

  const { addToCart } = useContext(CartContext) || { addToCart: () => {} };
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("Adding to cart:", product);
    addToCart(product);
  };

  const discount =
    salePrice && regularPrice
      ? Math.round((1 - salePrice / regularPrice) * 100)
      : null;

  return (
    <div
      className="group relative flex flex-col"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute left-4 right-4 top-4 z-10 flex justify-between">
          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className="h-7 text-[0.625rem] font-questrial"
            >
              {inStock ? "IN STOCK" : "OUT OF STOCK"}
            </Badge>
            {discount && discount > 0 && (
              <Badge
                variant="destructive"
                className="h-7 text-[0.625rem] font-questrial"
              >
                -{discount}%
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
          >
            <Heart
              size={24}
              color={isWishlisted ? "red" : "black"}
              fill={isWishlisted ? "red" : "none"}
            />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        {loading ? (
          <div className="bg-gray-200 animate-pulse w-full h-full"></div>
        ) : (
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="object-cover transition-transform group-hover:scale-105 w-full h-full"
          />
        )}
        <div className="absolute inset-x-0 bottom-0">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="grid grid-cols-2">
              <Button
                className="rounded-none bg-black text-white hover:bg-black/90 h-12 text-[0.6875rem] font-questrial"
                onClick={handleAddToCart}
              >
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
        <p className="text-[0.6875rem] text-muted-foreground tracking-wider font-questrial">
          {shortDescription}
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <h3 className="text-sm font-questrial">
                {name?.length > 25 ? name.slice(0, 25) + "..." : name}
              </h3>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm font-questrial w-[200px]">{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center justify-center gap-4">
          {salePrice && salePrice < regularPrice && (
            <span className="text-md text-muted-foreground line-through font-questrial">
              £{regularPrice.toLocaleString()}
            </span>
          )}
          <span className="text-md font-questrial">
            £{(salePrice || regularPrice).toLocaleString()}
          </span>
        </div>
        <Link
          to="#"
          className="text-xs text-muted-foreground hover:text-foreground tracking-wider font-questrial"
        >
          AUTHENTICITY CERTIFICATE
        </Link>
      </div>
    </div>
  );
}
