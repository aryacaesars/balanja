"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  match: (pathname: string) => boolean;
};

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3L12 3Z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 2h12v20l-2-1.5L14 22l-2-1.5L10 22 8 20.5 6 22V2Zm2 4v2h8V6H8Zm0 4v2h8v-2H8Zm0 4v2h5v-2H8Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 4h-2l-1 2H2v2h1.1l2.4 9.6L7 20h12v-2H8.3l-.4-2H18a2 2 0 0 0 1.9-1.5L22 6H6.3L5.8 4H7Zm1 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4Z" />
    </svg>
  );
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Beranda",
    icon: <HomeIcon />,
    match: (pathname) => pathname === "/",
  },
  {
    href: "/categories",
    label: "Kategori",
    icon: <GridIcon />,
    match: (pathname) => pathname.startsWith("/categories"),
  },
  {
    href: "/orders",
    label: "Pesanan",
    icon: <ReceiptIcon />,
    match: (pathname) => pathname.startsWith("/orders"),
  },
  {
    href: "/cart",
    label: "Keranjang",
    icon: <CartIcon />,
    match: (pathname) => pathname.startsWith("/cart"),
  },
  {
    href: "/profile",
    label: "Profil",
    icon: <UserIcon />,
    match: (pathname) => pathname.startsWith("/profile"),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      aria-label="Navigasi utama"
    >
      <div className="flex items-center justify-between gap-1.5 rounded-full bg-card p-2 shadow-lg">
        {navItems.map((item) => {
          const isActive = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-1 items-center justify-center rounded-full py-2.5 transition-colors ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-primary-light text-primary"
              }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
