import { useState, useEffect, useRef, useContext } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductsContext from "@/context/ProductsContext";

interface FloatingSearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FloatingSearchBar({ isOpen, onClose }: FloatingSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { filters, setFilters } = useContext(ProductsContext);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    console.log("Search term:", searchTerm);
    setFilters((prev) => ({
      ...prev,
      search : searchTerm
    }));
  };

  console.log(filters);

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-background border-b shadow-md p-4 animate-in slide-in-from-top duration-300">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search for watches, jewelry, and more..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button size="icon" onClick={handleSubmit} type="button">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
        <Button type="button" variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </form>
    </div>
  );
}
