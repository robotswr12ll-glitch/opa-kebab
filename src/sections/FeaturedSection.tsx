import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  { name: "Kebab Besar", desc: "Kebab jumbo dengan daging melimpah, sayuran segar, dan saus spesial rahasia.", price: "Rp 18.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/608ac6b6-fccf-445c-8d3a-63f483a8f5e2_Go-Biz_20250221_055741.jpeg?auto=format", best: true },
  { name: "Beef Burger", desc: "Patty daging sapi juicy dengan roti burger premium dan sayuran segar.", price: "Rp 16.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/911f0e8b-7632-4295-8cb0-c39ed29ba7f4_Go-Biz_20220828_132406.jpeg?auto=format", best: false },
  { name: "Roti Maryam", desc: "Roti maryam autentik, gurih, dan renyah. Cocok untuk camilan kapan saja.", price: "Rp 13.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c3ad119f-3e1d-4375-8806-496bcaa9b2ed_Go-Biz_20220811_123407.jpeg?auto=format", best: false },
  { name: "Kebab Besar Telur", desc: "Kombinasi sempurna kebab jumbo dengan telur dadar yang lembut.", price: "Rp 15.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/608ac6b6-fccf-445c-8d3a-63f483a8f5e2_Go-Biz_20250221_055741.jpeg?auto=format", best: false },
  { name: "HotDog", desc: "Sosis premium dalam roti lembut dengan saus dan topping melimpah.", price: "Rp 18.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ce59e0dc-24fc-4a6e-b9c5-7c3a08006edf_Go-Biz_20220811_122212.jpeg?auto=format", best: false },
  { name: "Jus Alpukat", desc: "Jus alpukat segar dan creamy. Pilihan terbaik untuk menemani makanan.", price: "Rp 18.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a71fd169-9293-4bfa-9cd7-712e6943397b_Go-Food-Merchant_20250804_172752.jpeg?auto=format", best: false },
  { name: "Kebab Pisang Keju", desc: "Varian manis dengan pisang dan keju leleh. Camilan unik dan mengenyangkan.", price: "Rp 13.000", img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/12c09d26-41f3-457a-b379-803365cce713_Go-Biz_20241229_135512.jpeg?auto=format", best: false },
  { name: "Kebab Daging Sapi", desc: "Daging sapi premium dibungkus tortilla dengan mayo dan lettuce segar.", price: "Rp 18.000", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop", best: false },
];

export function FeaturedSection() {
  return (
    <section id="featured" className="bg-gray-50 py-16 md:py-20 px-5">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Best Seller</span>
            <h2 className="section-title">Menu Favorit</h2>
            <p className="section-subtitle">Yang paling sering dipesan, bukan berarti yang lain ga enak</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 hover:border-gray-200 hover:shadow-sm group">
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  {item.best && (
                    <span className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider text-white bg-orange px-2.5 py-1 rounded-full">
                      Laris
                    </span>
                  )}
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-text-primary mb-1">{item.name}</h3>
                  <p className="text-xs text-text-dim leading-relaxed mb-3 line-clamp-2">{item.desc}</p>
                  <span className="text-sm font-bold text-orange">{item.price}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
