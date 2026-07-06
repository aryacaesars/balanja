"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";
import { formatRupiah } from "@/lib/format";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="overflow-hidden rounded-[var(--radius-card)] bg-card shadow-sm">
      <div className="relative aspect-square bg-zinc-200">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 50vw, 224px"
          />
        ) : null}
        <span className="absolute bottom-2 right-2 rounded-full bg-card px-2.5 py-1 text-xs font-bold text-foreground shadow-sm">
          {formatRupiah(product.price)}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="size-7 shrink-0 rounded-full bg-zinc-200" />
        <button
          type="button"
          onClick={() => addItem(product)}
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-white"
        >
          Pesan
        </button>
      </div>
    </article>
  );
}
