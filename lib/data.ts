export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  seller?: string;
};

export type Category = {
  id: string;
  name: string;
};

export const heroPromo: Product = {
  id: "promo-sop",
  name: "Paket Bikin Sop",
  price: 45000,
  image:
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
};

export const categories: Category[] = [
  { id: "sayur", name: "Sayur" },
  { id: "buah", name: "Buah" },
  { id: "daging", name: "Daging" },
  { id: "bumbu", name: "Bumbu" },
  { id: "lainnya", name: "Lainnya" },
];

export const products: Product[] = [
  { id: "1", name: "Wortel Segar", price: 10000, seller: "Toko Pak Budi" },
  { id: "2", name: "Tomat Merah", price: 10000, seller: "Toko Pak Budi" },
  { id: "3", name: "Bayam Hijau", price: 8000, seller: "Toko Ibu Siti" },
  { id: "4", name: "Kentang", price: 12000, seller: "Toko Ibu Siti" },
  { id: "5", name: "Bawang Merah", price: 15000, seller: "Toko Pak Budi" },
  { id: "6", name: "Cabai Merah", price: 18000, seller: "Toko Pak Budi" },
];
