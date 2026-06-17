import { MapPin, Clock, Phone, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-20 px-5">
      <div className="max-w-[700px] mx-auto text-center">
        {/* Halal Badge */}
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-text-dim mb-8">
          <Check size={12} className="text-green-600" />
          Halal Certified
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/Opakebab.png" alt="Opa Kebab" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
        </div>

        {/* Brand */}
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-2">
          Opa Kebab
        </h1>
        <p className="text-lg md:text-xl font-semibold text-orange mb-10">
          Ga Pelit Daging
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-3 md:gap-4 mb-10 flex-wrap">
          {[
            { num: "2+", label: "Tahun" },
            { num: "40+", label: "Menu" },
            { num: "4.8", label: "Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-3 md:px-6 md:py-4 bg-gray-50 rounded-xl min-w-[90px]">
              <span className="text-xl md:text-2xl font-bold text-orange">{s.num}</span>
              <span className="block text-xs text-text-dim mt-0.5 font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Info Chips */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {[
            { icon: MapPin, text: "Grand Wisata, Tambun Selatan" },
            { icon: Clock, text: "09:00 - 21:00 WIB" },
            { icon: Phone, text: "0889 2218 561" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-1.5 text-xs text-text-dim bg-gray-50 px-3 py-2 rounded-full">
              <Icon size={12} />
              {text}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3 justify-center flex-col md:flex-row">
          <a
            href="https://gofood.link/a/F26rxK3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gojek no-underline transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Pesan di GoFood
          </a>
          <a
            href="https://wa.me/628892218561?text=Halo%20Opa%20Kebab,%20saya%20mau%20pesan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-wa no-underline transition-all duration-150 hover:opacity-90 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
