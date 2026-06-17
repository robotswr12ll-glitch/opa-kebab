import { StickyNav } from "@/sections/StickyNav";
import { HeroSection } from "@/sections/HeroSection";
import { FeaturedSection } from "@/sections/FeaturedSection";
import { MenuSection } from "@/sections/MenuSection";
import { JadwalSection } from "@/sections/JadwalSection";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { LokasiSection } from "@/sections/LokasiSection";
import { Footer } from "@/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <StickyNav />
      <main>
        <HeroSection />
        <FeaturedSection />
        <MenuSection />
        <JadwalSection />
        <TestimonialSection />
        <LokasiSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
