import Link from "next/link";
import { SearchHeader } from "@/components/grocery/SearchHeader";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <>
      <SearchHeader />
      <main className="px-4 pt-4">
        <h1 className="mb-4 text-lg font-bold">Kategori</h1>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-2 rounded-[var(--radius-card)] bg-card p-4 shadow-sm"
            >
              <div className="aspect-square w-full rounded-2xl bg-zinc-200" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          Pilih kategori untuk melihat produk.
        </p>
        <Link
          href="/"
          className="mt-4 block text-center text-sm font-medium text-primary"
        >
          Kembali ke Beranda
        </Link>
      </main>
    </>
  );
}
