import { HeroSection } from "@/components/hero-section";
import { FilterNav } from "@/components/filter-nav";
import { ProductGrid } from "@/components/product-grid";
import { InstagramSection } from "@/components/instagram-section";
import { SocialConnect } from "@/components/social-connect";
import { FeaturesSection } from "@/components/features-section";
import ProductsProvider from "@/context/ProductsProvider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsProvider>
        <FilterNav />
        <ProductGrid />
      </ProductsProvider>
      <InstagramSection />
      <SocialConnect />
      <FeaturesSection />
    </main>
  );
}
