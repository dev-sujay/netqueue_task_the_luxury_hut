import { CartContextType } from "@/types/Cart";
import { createContext } from "react";

 const CartContext = createContext<CartContextType | undefined>(undefined)

 export default CartContext