import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartProvider";
import Header from "./components/header-up";
import ProductsProvider from "./context/ProductsProvider";
import ProductDetails from "./pages/ProductDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
    <Router>
      <ProductsProvider>
      <div className="relative flex min-h-screen flex-col font-questrial">
        <Header/>
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <SiteFooter />
      </div>
      </ProductsProvider>
      <Toaster/>
    </Router>
    </CartProvider>
  );
}

export default App;
