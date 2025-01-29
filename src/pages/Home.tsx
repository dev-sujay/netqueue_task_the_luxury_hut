import { HeroSection } from "@/components/hero-section"
import { FilterNav } from "@/components/filter-nav"
import { ProductGrid } from "@/components/product-grid"
import { InstagramSection } from "@/components/instagram-section"
import { SocialConnect } from "@/components/social-connect"
import { FeaturesSection } from "@/components/features-section"
import { useState } from "react"

export default function Home() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  return (
    <main>
      <HeroSection />
      <FilterNav filters={filters} setFilters={setFilters} />
      <ProductGrid filters={filters} />
      <InstagramSection />
      <SocialConnect />
      <FeaturesSection />
    </main>
  )
}

