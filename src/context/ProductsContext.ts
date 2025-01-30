import { Product } from "@/types/Product";
import { createContext } from "react";

const ProductsContext = createContext<{
    products: Product[];
    loading: boolean;
    error: string | null;
    total: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
    pageNum: number;
    filters: Record<string, string | number>;
    setFilters: React.Dispatch<React.SetStateAction<Record<string, string | number>>>;
  }>({
    products: [],
    loading: true,
    error: null,
    total: 0,
    setPageNum: () => {},
    pageNum: 1,
    filters: {},
    setFilters: () => {},
  });

 export default ProductsContext