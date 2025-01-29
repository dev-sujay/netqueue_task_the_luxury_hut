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

interface FilterOption {
  id: string;
  label: string;
}

const materials: FilterOption[] = [
  { id: "10ct-gold", label: "10ct Gold" },
  { id: "14ct-gold", label: "14ct Gold" },
  { id: "15ct-gold", label: "15ct gold" },
  { id: "18ct-gold", label: "18ct Gold" },
  { id: "19.2ct", label: "19.2CT" },
  { id: "19ct-gold", label: "19ct Gold" },
  { id: "24ct-gold", label: "24ct Gold" },
];

export function FilterSidebar() {
  const [open, setOpen] = React.useState(false);
  const [activeFilters, setActiveFilters] = React.useState<string[]>([
    "brands-rolex",
  ]);

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(activeFilters.filter((id) => id !== filterId));
  };

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
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs"
            >
              CLEAR
            </Button>
            {activeFilters.includes("brands-rolex") && (
              <Badge variant="secondary" className="text-xs">
                BRANDS: ROLEX
                <button
                  onClick={() => removeFilter("brands-rolex")}
                  className="ml-2"
                >
                  ×
                </button>
              </Badge>
            )}
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
                      key={material.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox id={material.id} />
                      <span>{material.label}</span>
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

          <Button className="w-full bg-black text-white hover:bg-black/90" onClick={() => setOpen(false)}>
            SHOW 201 PRODUCTS
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
