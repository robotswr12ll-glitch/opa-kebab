import { useState } from "react";
import { Layers, Plus, Croissant, CupSoda, GlassWater, ChevronDown, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface MenuItem { name: string; price: string; desc: string; }
interface MenuCategory { id: string; title: string; icon: LucideIcon; items: MenuItem[]; }

const menuData: MenuCategory[] = [
  {
    id: "kebab", title: "Kebab", icon: Layers,
    items: [
      { name: "Kebab Besar", price: "Rp 18.000", desc: "Kebab jumbo dengan isian melimpah" },
      { name: "Kebab Daging Sapi", price: "Rp 18.000", desc: "Daging sapi premium, tortilla, mayo & lettuce" },
      { name: "Kebab Daging Ayam", price: "Rp 16.000", desc: "Ayam panggang juicy dengan sayuran segar" },
      { name: "Kebab Besar Sosis", price: "Rp 15.000", desc: "Kombinasi daging dan sosis" },
      { name: "Kebab Besar Telur", price: "Rp 15.000", desc: "Dengan telur dadar spesial" },
      { name: "Kebab Pisang Keju", price: "Rp 13.000", desc: "Varian manis dengan keju leleh" },
      { name: "Kebab Pisang Coklat", price: "Rp 12.000", desc: "Pisang dengan coklat leleh" },
      { name: "Kebab Kecil", price: "Rp 10.000", desc: "Ukuran regular, rasa maksimal" },
    ],
  },
  {
    id: "burger", title: "Burger", icon: Plus,
    items: [
      { name: "Beef Burger Hitam", price: "Rp 17.000", desc: "Patty daging dengan roti hitam premium" },
      { name: "Beef Burger", price: "Rp 16.000", desc: "Classic beef burger juicy" },
      { name: "Chick Burger Hitam", price: "Rp 16.000", desc: "Ayam crispy dengan roti hitam" },
      { name: "Chick Burger", price: "Rp 15.000", desc: "Chicken burger crispy" },
      { name: "HotDog", price: "Rp 18.000", desc: "Sosis premium dengan topping" },
    ],
  },
  {
    id: "roti-snack", title: "Roti & Snack", icon: Croissant,
    items: [
      { name: "Roti Maryam Ala Pizza", price: "Rp 15.000", desc: "Maryam dengan topping pizza" },
      { name: "Roti Maryam", price: "Rp 13.000", desc: "Classic roti maryam gurih" },
      { name: "Sosis Goreng", price: "Rp 10.000", desc: "Sosis crispy goreng" },
    ],
  },
  {
    id: "jus", title: "Aneka Jus", icon: CupSoda,
    items: [
      { name: "Jus Alpukat", price: "Rp 18.000", desc: "Creamy dan menyegarkan" },
      { name: "Jus Mangga", price: "Rp 20.000", desc: "Manis alami buah mangga segar" },
      { name: "Jus Strawberry", price: "Rp 18.000", desc: "Segar dengan rasa berry" },
      { name: "Jus Jambu", price: "Rp 18.000", desc: "Kaya vitamin C" },
      { name: "Jus Melon", price: "Rp 18.000", desc: "Manis dan menyegarkan" },
      { name: "Jus Semangka", price: "Rp 18.000", desc: "Segar perfect untuk cuaca panas" },
      { name: "Jus Sirsak", price: "Rp 18.000", desc: "Manis sedikit asam, menyegarkan" },
      { name: "Jus Jeruk", price: "Rp 18.000", desc: "Segar dan kaya vitamin" },
      { name: "Jus Buah Naga", price: "Rp 18.000", desc: "Warna menarik, rasa lembut" },
      { name: "Jus Mix/Campur", price: "Rp 18.000", desc: "Kombinasi buah pilihan" },
    ],
  },
  {
    id: "minuman", title: "Minuman", icon: GlassWater,
    items: [
      { name: "Teh Tarik", price: "Rp 10.000", desc: "Teh tarik creamy khas" },
      { name: "Pulpy Orange", price: "Rp 8.000", desc: "Jeruk dengan serat alami" },
      { name: "Pocari Sweat", price: "Rp 8.000", desc: "Minuman isotonik" },
      { name: "Teh Botol", price: "Rp 7.000", desc: "Teh dalam kemasan botol" },
      { name: "Nipis Madu", price: "Rp 6.000", desc: "Jeruk nipis dengan madu" },
      { name: "Teh Pucuk", price: "Rp 5.000", desc: "Teh dalam kemasan" },
      { name: "Floridina", price: "Rp 5.000", desc: "Minuman sari buah" },
      { name: "Air Mineral Botol", price: "Rp 5.000", desc: "Air mineral 600ml" },
      { name: "Kopi Hitam", price: "Rp 5.000", desc: "Kopi robusta strong" },
      { name: "Aqua Gelas", price: "Rp 1.000", desc: "Air mineral gelas kecil" },
    ],
  },
];

function AccordionItem({ category, isOpen, onToggle }: { category: MenuCategory; isOpen: boolean; onToggle: () => void }) {
  const Icon = category.icon;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-150">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 bg-orange/5 rounded-xl flex items-center justify-center">
            <Icon size={20} className="text-orange" />
          </span>
          <span className="text-sm font-bold text-text-primary">{category.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-medium text-text-dim bg-gray-100 px-2.5 py-1 rounded-full">{category.items.length} menu</span>
          <ChevronDown size={18} className={cn("text-text-dim transition-transform duration-300", isOpen && "rotate-180 text-orange")} />
        </div>
      </button>
      <div className={cn("grid transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="px-5 pb-4 border-t border-gray-50">
            {category.items.map((item, idx) => (
              <div key={idx} className={cn("flex items-start justify-between py-3", idx > 0 && "border-t border-gray-50")}>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{item.name}</div>
                  <div className="text-xs text-text-dim mt-0.5">{item.desc}</div>
                </div>
                <span className="text-sm font-bold text-orange whitespace-nowrap ml-4 shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState("kebab");
  return (
    <section id="menu" className="bg-white py-16 md:py-20 px-5">
      <div className="max-w-[640px] mx-auto">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Menu Lengkap</span>
            <h2 className="section-title">Semua Menu</h2>
            <p className="section-subtitle">Ketuk buat buka, ketuk lagi buat tutup. Simple.</p>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-3">
          {menuData.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.05}>
              <AccordionItem category={cat} isOpen={active === cat.id} onToggle={() => setActive(a => a === cat.id ? "" : cat.id)} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
