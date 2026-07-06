import { SearchHeader } from "@/components/grocery/SearchHeader";

export default function OrdersPage() {
  return (
    <>
      <SearchHeader />
      <main className="flex min-h-[60dvh] flex-col items-center justify-center px-4 pt-4">
        <div className="rounded-[var(--radius-card)] bg-card p-8 text-center shadow-sm">
          <p className="text-4xl">📦</p>
          <h1 className="mt-4 text-lg font-bold">Belum ada pesanan</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Pesanan kamu akan muncul di sini setelah checkout.
          </p>
        </div>
      </main>
    </>
  );
}
