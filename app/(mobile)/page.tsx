import { CategoryGrid } from "@/components/grocery/CategoryGrid";
import { HeroBanner } from "@/components/grocery/HeroBanner";
import { ProductGrid } from "@/components/grocery/ProductGrid";
import { SearchHeader } from "@/components/grocery/SearchHeader";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <SearchHeader />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <ProductGrid products={products} />
      </main>
    </>
  );
}
