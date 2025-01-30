import { ProductCard } from "@/components/product-card";
import ProductsContext from "@/context/ProductsContext";
import { useState, useEffect, useContext } from "react";

export function ProductGrid() {
  const [noOfColumns, setNoOfColumns] = useState(4); // Default for large screens
  const { products, loading, setPageNum, pageNum, total } =
    useContext(ProductsContext);

  const loadMore = () => {
    try {
      if (pageNum < Math.ceil(total / 10)) {
        setPageNum(pageNum + 1);
      }
    } catch (error) {
      console.error("Error loading more products:", error);
    }
  };

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
              <ProductCard product={product} loading={loading} />
            </div>
          );
        })}
      </div>
      {total > products?.length && (
        <div className="flex justify-center mt-12">
          <button
            className="px-16 py-3 border border-black/80 text-sm tracking-wider hover:bg-black/5 transition-colors"
            onClick={loadMore}
            disabled={loading}
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
}
