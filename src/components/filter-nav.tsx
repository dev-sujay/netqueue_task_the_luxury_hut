import * as React from "react"
import { ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function FilterNav() {
  const [activeFilters, setActiveFilters] = React.useState<string[]>(["BRANDS: ROLEX"])

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center divide-x border-b border-t py-4">
          <div className="justify-self-start">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-[15px] font-questrial font-light tracking-wider"
                >
                  SORT BY
                  <ChevronDown className="h-2.5 w-2.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Newest First</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex justify-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  WATCH BRANDS
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Rolex</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Omega</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Cartier</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  JEWELLERY BRANDS
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Cartier</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Tiffany & Co.</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Van Cleef & Arpels</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  CONDITION
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">New</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Pre-owned</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Vintage</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  ITEMS
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Watches</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Rings</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Necklaces</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  GENDER
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Men</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Women</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Unisex</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-[15px] font-questrial font-light">
                  FILTER BY PRICE
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-[15px] font-questrial">Under £5,000</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">£5,000 - £10,000</DropdownMenuItem>
                <DropdownMenuItem className="text-[15px] font-questrial">Over £10,000</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="justify-self-end">
            <Button variant="ghost" className="text-[15px] font-questrial font-light">
              MORE FILTER
            </Button>
          </div>
        </div>

        <div className="border-b py-2">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-[12px] font-questrial"
              onClick={() => setActiveFilters([])}
            >
              CLEAR
            </Button>
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="flex items-center gap-1 text-[12px] font-questrial">
                {filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 p-0 hover:bg-transparent"
                  onClick={() => setActiveFilters(activeFilters.filter((f) => f !== filter))}
                >
                  <X className="h-2 w-2" />
                  <span className="sr-only">Remove {filter} filter</span>
                </Button>
              </Badge>
            ))}
          </div>
          <p className="text-[12px] text-muted-foreground font-questrial">1-40 OF 249 RESULTS</p>
        </div>
      </div>
    </section>
  )
}

