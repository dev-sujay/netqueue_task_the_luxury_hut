import { useContext, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FilterSidebar } from "./filter-sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProductsContext from "@/context/ProductsContext";

export function FilterNav() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const { total, products, loading, filters, setFilters } =
    useContext(ProductsContext);

  const brands = [
    "Rolex",
    "Breitling",
    "Orient",
    "Casio",
    "Seiko",
    "Tissot",
    "Hublot",
  ];
  const jewelleryBrands = ["Cartier", "Tiffany & Co.", "Van Cleef & Arpels"];
  const conditions = ["New", "Pre-owned", "Vintage"];
  const items = ["Watches", "Rings", "Necklaces"];
  const genders = ["Men", "Women", "Unisex"];
  const suggestedPrices = [
    { label: "Under £5,000", min: 0, max: 5000 },
    { label: "£5,000 - £10,000", min: 5000, max: 10000 },
    { label: "£10,000 - £20,000", min: 10000, max: 20000 },
    { label: "Over £20,000", min: 20000, max: 50000 },
  ];

  const handlePriceChange = (type: "min" | "max", value: number) => {
    const newValue = Math.max(0, Math.min(value, 50000));
    setPriceRange((prev) => ({
      ...prev,
      [type]:
        type === "min"
          ? Math.min(newValue, prev.max - 1000)
          : Math.max(newValue, prev.min + 1000),
    }));
  };

  const handlePriceFilter = () => {
    setFilters((prev) => ({
      ...prev,
      minPrice: priceRange.min.toString(),
      maxPrice: priceRange.max.toString(),
    }));
  };

  const getLeftPercentage = () => (priceRange.min / 50000) * 100;
  const getRightPercentage = () => ((50000 - priceRange.max) / 50000) * 100;

  // Process filters for display
  const displayedFilters = [];
  const { minPrice, maxPrice, sortBy, sortOrder, ...otherFilters } = filters;

  // Price Filter
  if (minPrice !== undefined || maxPrice !== undefined) {
    const min = minPrice || "0";
    const max = maxPrice || "50000";
    displayedFilters.push({
      key: "price",
      label: `Price: £${parseFloat(
        min as string
      ).toLocaleString()} - £${parseFloat(max as string).toLocaleString()}`,
      onRemove: () => {
        const newFilters = { ...otherFilters };
        if (sortBy !== undefined) newFilters.sortBy = sortBy;
        if (sortOrder !== undefined) newFilters.sortOrder = sortOrder;
        setFilters(newFilters);
        setPriceRange({ min: 0, max: 50000 });
      },
    });
  }

  // Sort Filter
  if (sortBy && sortOrder) {
    let sortLabel = "";
    switch (sortBy) {
      case "regularPrice":
        sortLabel = `Sorted by Price: ${
          sortOrder === "asc" ? "Low to High" : "High to Low"
        }`;
        break;
      case "createdAt":
        sortLabel = "Sorted by Newest First";
        break;
      default:
        sortLabel = `Sorted by ${sortBy} (${sortOrder})`;
    }
    displayedFilters.push({
      key: "sort",
      label: sortLabel,
      onRemove: () => {
        const newFilters = { ...otherFilters };
        if (minPrice !== undefined) newFilters.minPrice = minPrice;
        if (maxPrice !== undefined) newFilters.maxPrice = maxPrice;
        delete newFilters.sortBy;
        delete newFilters.sortOrder;
        setFilters(newFilters);
      },
    });
  }

  // Other Filters
  Object.entries(otherFilters).forEach(([key, value]) => {
    displayedFilters.push({
      key,
      label: `${key}: ${value}`,
      onRemove: () => {
        const newFilters = { ...filters };
        delete newFilters[key];
        setFilters(newFilters);
      },
    });
  });

  const CustomPriceContent = () => (
    <div className="p-4 w-[400px] md:w-[500px] lg:w-[800px]">
      <div className="space-y-4">
        {/* Price Range Slider */}
        <div className="relative pt-6">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="absolute h-2 bg-blue-500 rounded"
              style={{
                left: `${getLeftPercentage()}%`,
                right: `${getRightPercentage()}%`,
              }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={50000}
            value={priceRange.min}
            onChange={(e) => handlePriceChange("min", Number(e.target.value))}
            className="absolute w-full h-2 appearance-none pointer-events-none opacity-0"
            color="black"
          />
          <input
            type="range"
            min={0}
            max={50000}
            value={priceRange.max}
            onChange={(e) => handlePriceChange("max", Number(e.target.value))}
            className="absolute w-full h-2 appearance-none pointer-events-none opacity-0"
            color="black"
          />
        </div>

        {/* Price Inputs */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="text-sm text-gray-600">Min Price</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">£</span>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  handlePriceChange("min", Number(e.target.value))
                }
                className="w-full pl-7 pr-3 py-1 border rounded"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm text-gray-600">Max Price</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">£</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  handlePriceChange("max", Number(e.target.value))
                }
                className="w-full pl-7 pr-3 py-1 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Quick Selection Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {suggestedPrices.map((range) => (
            <Button
              key={range.label}
              variant="outline"
              className="text-[13px] font-questrial"
              onClick={() => {
                setPriceRange({ min: range.min, max: range.max });
              }}
            >
              {range.label}
            </Button>
          ))}
        </div>

        <Button className="w-full font-questrial" onClick={handlePriceFilter}>
          Apply Price Filter
        </Button>
      </div>
    </div>
  );

  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center divide-y md:divide-y-0 md:divide-x border-b border-t py-4">
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
                <DropdownMenuItem
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "regularPrice",
                      sortOrder: "asc",
                    }))
                  }
                >
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "regularPrice",
                      sortOrder: "desc",
                    }))
                  }
                >
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: "createdAt",
                      sortOrder: "desc",
                    }))
                  }
                >
                  Newest First
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 relative z-20">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-wrap justify-center gap-4 md:gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    WATCH BRANDS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                      {brands.map((brand) => (
                        <li key={brand}>
                          <NavigationMenuLink asChild>
                            <div
                              className="..."
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  watchBrand: brand,
                                }))
                              }
                            >
                              {brand}
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                      {jewelleryBrands.map((brand) => (
                        <li key={brand}>
                          <NavigationMenuLink asChild>
                            <div
                              className="..."
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  jewelryBrand: brand,
                                }))
                              }
                            >
                              {brand}
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                      {conditions.map((condition) => (
                        <li key={condition}>
                          <NavigationMenuLink asChild>
                            <div
                              className="..."
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  condition: condition,
                                }))
                              }
                            >
                              {condition}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[15px] font-questrial font-light">
                    ITEMS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                      {items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <div
                              className="..."
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  category: item,
                                }))
                              }
                            >
                              {item}
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
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                      {genders.map((gender) => (
                        <li key={gender}>
                          <NavigationMenuLink asChild>
                            <div
                              className="..."
                              onClick={() =>
                                setFilters((prev) => ({
                                  ...prev,
                                  gender: gender,
                                }))
                              }
                            >
                              {gender}
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
                    <CustomPriceContent />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="justify-self-end">
            <FilterSidebar />
          </div>
        </div>

        <div className="border-b py-2 flex flex-col justify-center items-center">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {displayedFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-[12px] font-questrial"
                onClick={() => {
                  setFilters({});
                  setPriceRange({ min: 0, max: 50000 });
                }}
              >
                CLEAR
              </Button>
            )}
            {displayedFilters.map((filter) => (
              <Badge
                key={filter.key}
                variant="secondary"
                className="flex items-center gap-1 text-[12px] font-questrial"
              >
                {filter.label}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 p-0 hover:bg-transparent"
                  onClick={filter.onRemove}
                >
                  <X className="h-2 w-2" />
                  <span className="sr-only">Remove {filter.key} filter</span>
                </Button>
              </Badge>
            ))}
          </div>
          {loading ? (
            <p className="text-[12px] text-muted-foreground font-questrial"></p>
          ) : (
            <p className="text-[12px] text-muted-foreground font-questrial mt-3">
              {products?.length} OF {total} RESULTS
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FilterNav;
