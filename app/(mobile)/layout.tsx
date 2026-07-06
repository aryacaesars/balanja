import { BottomNav } from "@/components/grocery/BottomNav";
import { CartProvider } from "@/lib/cart-context";

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <div className="mx-auto min-h-dvh max-w-md bg-surface pb-24 text-foreground">
        {children}
        <BottomNav />
      </div>
    </CartProvider>
  );
}
