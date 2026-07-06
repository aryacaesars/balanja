"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { heroPromo } from "@/lib/data";

export function HeroBanner() {
  const { addItem } = useCart();

  return (
    <section className="px-4">
      <div className="overflow-hidden rounded-[var(--radius-card)] bg-card shadow-sm">
        <div className="relative aspect-[16/10] w-full bg-zinc-200">
          <Image
            src={
              heroPromo.image ??
              "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80"
            }
            alt="Keranjang sayuran segar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 448px) 100vw, 448px"
          />
        </div>
        <div className="flex items-center justify-between gap-3 p-4">
          <h2 className="text-base font-bold leading-snug text-foreground">
            Bikin Sop Lebih Sat Set!
          </h2>
          <button
            type="button"
            onClick={() => addItem(heroPromo)}
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
