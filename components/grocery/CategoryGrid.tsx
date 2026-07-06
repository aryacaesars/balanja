import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <section className="px-4 pt-5">
      <div className="grid grid-cols-5 gap-3">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center gap-1.5">
            <div className="aspect-square w-full rounded-2xl bg-card shadow-sm">
              <div className="flex size-full items-center justify-center p-2">
                <div className="size-full rounded-xl bg-zinc-200" />
              </div>
            </div>
            <span className="text-center text-[10px] font-medium text-foreground">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
