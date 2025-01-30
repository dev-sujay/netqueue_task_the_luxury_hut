import { useEffect, useState, useRef } from "react";
import ProductsContext from "./ProductsContext";
import { Product } from "@/types/Product";
import { getProducts } from "@/api/productApi";

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNum, setPageNum] = useState<number>(1);
  const [filters, setFilters] = useState<Record<string, string | number>>({});

  const prevFilters = useRef<Record<string, string | number>>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts({
          ...filters,
          pageNum: pageNum,
          pageSize: 10,
        });
        setTotal(data?.total ?? 0);

        // Check if filters have changed
        const filtersChanged = JSON.stringify(prevFilters.current) !== JSON.stringify(filters);

        if (filtersChanged) {
          // Reset pageNum to 1 and set new products
          setPageNum(1);
          setProducts(data.products);
        } else {
          // If it's a page change, append the products
          if (pageNum > 1) {
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
          } else {
            setProducts(data.products);
          }
        }

        // Update the previous filters
        prevFilters.current = filters;

        setError(null); // Ensure that error is always a string
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, pageNum]);

  const value = { products, loading, error, total, setPageNum, pageNum, filters, setFilters };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;