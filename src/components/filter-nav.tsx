import type * as React from "react"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FilterSidebar } from "./filter-sidebar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function FilterNav({
  filters,
  setFilters,
}: {
  filters: Record<string, string>
  setFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>
}) {
  const brands = ["Rolex", "Breitling", "Orient", "Casio", "Seiko", "Tissot", "Hublot"]

  const jewelleryBrands = ["Cartier", "Tiffany & Co.", "Van Cleef & Arpels"]
  const conditions = ["New", "Pre-owned", "Vintage"]
  const items = ["Watches", "Rings", "Necklaces"]
  const genders = ["Men", "Women", "Unisex"]
  const priceRanges = ["Under £5,000", "£5,000 - £10,000", "Over £10,000"]

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
          <div className="flex justify-center space-x-2 relative z-20">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    WATCH BRANDS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {brands.map((brand) => (
                        <li key={brand}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{brand}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    JEWELLERY BRANDS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {jewelleryBrands.map((brand) => (
                        <li key={brand}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{brand}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    CONDITION
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {conditions.map((condition) => (
                        <li key={condition}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{condition}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">ITEMS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{item}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    GENDER
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {genders.map((gender) => (
                        <li key={gender}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{gender}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    FILTER BY PRICE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-50">
                      {priceRanges.map((priceRange) => (
                        <li key={priceRange}>
                          <NavigationMenuLink asChild>
                            <div className="flex gap-1 items-center select-none space-y-1 rounded-md p-3  no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <span className="block  text-sm font-medium leading-none">{priceRange}</span>
                              <ChevronRight className="h-3 w-3" />
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="justify-self-end">
            <FilterSidebar />
          </div>
        </div>

        <div className="border-b py-2">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-[12px] font-questrial"
              onClick={() => setFilters({})}
            >
              CLEAR
            </Button>
            {Object.keys(filters)?.map((filter) => (
              <Badge key={filter} variant="secondary" className="flex items-center gap-1 text-[12px] font-questrial">
                {filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 p-0 hover:bg-transparent"
                  onClick={() => {
                    const temp = { ...filters }
                    delete temp[filter]
                    setFilters(temp)
                  }}
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

