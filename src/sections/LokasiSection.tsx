import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function LokasiSection() {
  return (
    <section id="location" className="bg-gray-50 py-16 md:py-20 px-5">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Lokasi</span>
            <h2 className="section-title">Kunjungi Kami</h2>
            <p className="section-subtitle">Mampir aja, atau chat dulu kalo mager</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 items-start">
          {/* Info */}
          <div className="flex flex-col gap-3">
            {[
              { icon: MapPin, label: "Alamat", value: "Grand Wisata, Lambangsari, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510" },
              { icon: Clock, label: "Jam Buka", value: "Senin–Sabtu 07:15 – 20:45\nMinggu 06:15 – 20:45" },
              { icon: Phone, label: "Telepon", value: "0889 2218 561" },
            ].map(({ icon: Icon, label, value }, i) => (
              <ScrollReveal key={label} delay={i * 0.06}>
                <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <span className="w-10 h-10 bg-orange/5 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-orange" />
                  </span>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-dim mb-0.5">{label}</h4>
                    <p className="text-sm font-semibold text-text-primary whitespace-pre-line">{value}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.2}>
              <a
                href="https://maps.app.goo.gl/Jq387Nirz7o9b3Ku9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-text-primary bg-white border border-gray-200 no-underline transition-all duration-150 hover:border-gray-300 hover:bg-gray-50"
              >
                <Navigation size={16} />
                Buka di Google Maps
              </a>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal delay={0.1} threshold={0.05}>
            <div className="h-[280px] md:h-[360px] bg-white rounded-2xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.9385690762315!2d107.040543151486!3d-6.285048499999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f003fe14daf%3A0x73c16975de669681!2sOpakebab!5e0!3m2!1sen!2sid!4v1771329561043!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Opa Kebab"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
