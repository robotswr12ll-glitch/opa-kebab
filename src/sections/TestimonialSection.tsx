import { ScrollReveal } from "@/components/ScrollReveal";

export function TestimonialSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-5">
      <div className="max-w-[600px] mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold italic text-text-primary leading-relaxed mb-6">
              &ldquo;Kebab sebelah masjid, ga pelit daging. Buktinya? Dateng aja.&rdquo;
            </p>
            <p className="text-sm font-bold text-orange">Guru MTK</p>
            <p className="text-xs text-text-dim mt-0.5">Pelanggan Setia</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
