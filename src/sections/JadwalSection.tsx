import { Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

const rows = [
  { day: "Senin", time: "07:15 – 20:45" },
  { day: "Selasa", time: "07:15 – 20:45" },
  { day: "Rabu", time: "07:15 – 20:45" },
  { day: "Kamis", time: "07:15 – 20:45" },
  { day: "Jumat", time: "07:15 – 20:45" },
  { day: "Sabtu", time: "07:15 – 20:45" },
  { day: "Minggu", time: "06:15 – 20:45", special: true },
];

export function JadwalSection() {
  return (
    <section id="schedule" className="bg-gray-50 py-16 md:py-20 px-5">
      <div className="max-w-[480px] mx-auto">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Jam Operasional</span>
            <h2 className="section-title">Jadwal Buka</h2>
            <p className="section-subtitle">Kapan aja bisa mampir, kecuali lagi tidur</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100 bg-orange/5">
              <Clock size={18} className="text-orange" strokeWidth={2.5} />
              <h3 className="text-sm font-bold text-orange">Jam Buka</h3>
            </div>
            <div className="px-5 py-1">
              {rows.map((row, idx) => (
                <div
                  key={row.day}
                  className={cn(
                    "flex items-center justify-between py-3",
                    !row.special && idx < rows.length - 1 && "border-b border-gray-50",
                    row.special && "bg-orange/5 -mx-5 px-5 my-0.5 rounded-lg"
                  )}
                >
                  <span className={cn("text-sm font-semibold", row.special ? "text-orange" : "text-text-primary")}>{row.day}</span>
                  <span className={cn("text-sm font-medium", row.special ? "text-orange font-bold" : "text-text-dim")}>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
