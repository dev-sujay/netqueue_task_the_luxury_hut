import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/hooks/useProducts";
import { useState, useEffect } from "react";

export function ProductGrid({ filters }: { filters: Record<string, string> }) {
  const [noOfColumns, setNoOfColumns] = useState(4); // Default for large screens
  const { products, loading, error } = useProducts(filters);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setNoOfColumns(1); // Small screens
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setNoOfColumns(2); // Medium screens
      } else {
        setNoOfColumns(4); // Large screens
      }
    };

    updateColumns(); // Set initial value
    window.addEventListener("resize", updateColumns); // Listen to screen resize

    return () => {
      window.removeEventListener("resize", updateColumns); // Cleanup listener
    };
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container px-8 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => {
          const isLastRow =
            Math.floor(index / noOfColumns) ===
            Math.floor((products.length - 1) / noOfColumns);
          const isFirstInRow = index % noOfColumns === 0;
          const isLastInRow = (index + 1) % noOfColumns === 0;

          return (
            <div
              key={product._id}
              className={[
                "border-gray-300", // Common border color
                !isLastRow && "border-b", // Bottom border for all but the last row
                isFirstInRow && "border-r", // Right border for the first item in a row
                !isFirstInRow && !isLastInRow && "border-r", // Left & right borders for middle items
                noOfColumns === 1 && "border-r-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <ProductCard {...product} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-16 py-3 border border-black/80 text-sm tracking-wider hover:bg-black/5 transition-colors">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
