import { SearchHeader } from "@/components/grocery/SearchHeader";

export default function ProfilePage() {
  return (
    <>
      <SearchHeader />
      <main className="px-4 pt-4">
        <div className="rounded-[var(--radius-card)] bg-card p-6 shadow-sm">
          <div className="mx-auto size-20 rounded-full bg-zinc-200" />
          <h1 className="mt-4 text-center text-lg font-bold">Pengguna Blanja</h1>
          <p className="mt-1 text-center text-sm text-zinc-500">
            user@blanja.id
          </p>
        </div>

        <ul className="mt-4 space-y-2">
          {["Alamat Pengiriman", "Metode Pembayaran", "Pengaturan Akun"].map(
            (item) => (
              <li
                key={item}
                className="rounded-[var(--radius-card)] bg-card px-4 py-3 text-sm font-medium shadow-sm"
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </main>
    </>
  );
}
