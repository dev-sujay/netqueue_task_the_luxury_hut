import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import ProductsContext from "@/context/ProductsContext";

const materials = [
  "10ct Gold",
  "14ct Gold",
  "15ct gold",
  "18ct Gold",
  "19.2CT",
  "19ct Gold",
  "24ct Gold",
];

export function FilterSidebar() {
  const [open, setOpen] = React.useState(false);
  const { products, filters, setFilters } = React.useContext(ProductsContext);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="text-[15px] font-questrial font-light"
        >
          MORE FILTER
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="flex flex-row items-center justify-between border-b pb-4">
          <SheetTitle className="text-xl font-normal">FILTER</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-6">
          <div className="flex flex-wrap gap-2">
            {Object.keys(filters)?.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setFilters({});
                }}
                className="text-xs"
              >
                CLEAR
              </Button>
            )}
            {Object.keys(filters)?.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="flex items-center gap-1 text-[12px] font-questrial"
              >
                {filter}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 p-0 hover:bg-transparent"
                  onClick={() => {
                    setFilters((prev) => {
                      const newFilters = { ...prev };
                      delete newFilters[filter];
                      return newFilters;
                    });
                  }}
                >
                  <X className="h-2 w-2" />
                  <span className="sr-only">Remove {filter} filter</span>
                </Button>
              </Badge>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="case-size">
              <AccordionTrigger className="text-base font-normal">
                CASE SIZE
              </AccordionTrigger>
              <AccordionContent>
                {/* Add case size options here */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="material">
              <AccordionTrigger className="text-base font-normal">
                MATERIAL
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {materials.map((material) => (
                    <label
                      key={material}
                      className="flex items-center gap-2 text-sm"
                      onClick={() => {
                        setFilters((prev) => ({
                          ...prev,
                          material: material,
                        }));
                      }}
                    >
                      <Checkbox
                        id={material}
                        checked={filters.material === material}
                      />
                      <span>{material}</span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="age">
              <AccordionTrigger className="text-base font-normal">
                AGE
              </AccordionTrigger>
              <AccordionContent>{/* Add age options here */}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="movement">
              <AccordionTrigger className="text-base font-normal">
                MOVEMENT
              </AccordionTrigger>
              <AccordionContent>
                {/* Add movement options here */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button
            className="w-full bg-black text-white hover:bg-black/90"
            onClick={() => setOpen(false)}
          >
            SHOW {products.length} PRODUCTS
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
