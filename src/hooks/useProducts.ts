import { useState, useEffect } from "react";
import { getProducts } from "@/api/productApi";
import { Product } from "@/types/Product";

export const useProducts = (filters: Record<string, string>) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(filters);
        setProducts(data?.products ?? []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products, loading, error };
};
