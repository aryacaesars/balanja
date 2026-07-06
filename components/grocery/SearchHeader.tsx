"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6h15l-1.5 9H7.5L6 6ZM6 6 5 3H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SearchHeader() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-10 bg-surface px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm"
          aria-label="Menu"
        >
          <MenuIcon />
        </button>

        <div className="flex min-w-0 flex-1 items-center rounded-full bg-card px-4 py-2.5 shadow-sm">
          <input
            type="search"
            placeholder="Cari sayuran..."
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-zinc-400"
          />
        </div>

        <Link
          href="/cart"
          className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-sm"
          aria-label="Keranjang"
        >
          <CartIcon />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
