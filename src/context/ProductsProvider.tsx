import { useEffect, useState } from "react";
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
          //if pagenum is more than one then append the products
          if (pageNum > 1) {
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
          } else {
            setProducts(data.products);
          }
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
