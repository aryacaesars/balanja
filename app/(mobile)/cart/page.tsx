"use client";

import Link from "next/link";
import { SearchHeader } from "@/components/grocery/SearchHeader";
import { useCart } from "@/lib/cart-context";
import { formatRupiah } from "@/lib/format";

export default function CartPage() {
  const { items, updateQty, removeItem, totalPrice, clearCart } = useCart();

  function handleCheckout() {
    if (items.length === 0) return;
    alert("Checkout belum tersedia. Terima kasih sudah mencoba Blanja!");
  }

  return (
    <>
      <SearchHeader />
      <main className="px-4 pt-4">
        <h1 className="mb-4 text-lg font-bold">Keranjang</h1>

        {items.length === 0 ? (
          <div className="rounded-[var(--radius-card)] bg-card p-8 text-center shadow-sm">
            <p className="text-4xl">🛒</p>
            <p className="mt-4 font-medium">Keranjang masih kosong</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-white"
            >
              Belanja Sekarang
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-[var(--radius-card)] bg-card p-4 shadow-sm"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{item.name}</p>
                    <p className="text-sm text-zinc-500">
                      {formatRupiah(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="flex size-8 items-center justify-center rounded-full bg-primary-light text-primary"
                      aria-label="Kurangi jumlah"
                    >
                      −
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="flex size-8 items-center justify-center rounded-full bg-primary-light text-primary"
                      aria-label="Tambah jumlah"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="ml-1 text-xs text-red-500"
                      aria-label="Hapus item"
                    >
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-[var(--radius-card)] bg-card p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                <span className="text-lg font-bold">
                  {formatRupiah(totalPrice)}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-medium text-white"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-2 w-full py-2 text-sm text-zinc-500"
              >
                Kosongkan Keranjang
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
