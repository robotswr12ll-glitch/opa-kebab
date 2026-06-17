import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Favorit", href: "#featured" },
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#location" },
];

export function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionRefs = useCallback((node: HTMLElement | null) => {
    if (!node) return;
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
          });
        },
        { threshold: 0.2 }
      );
    }
    observerRef.current.observe(node);
  }, []);

  useEffect(() => {
    const sections = ["featured", "menu", "schedule", "location"];
    const elements: HTMLElement[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) { sectionRefs(el); elements.push(el); }
    });
    return () => {
      if (observerRef.current) elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, [sectionRefs]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        "bg-white/90 backdrop-blur-xl border-b",
        isScrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      )}
    >
      <div className="max-w-[900px] mx-auto flex items-center justify-between px-5 md:px-6 h-[56px]">
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 no-underline">
          <span className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center text-white font-black text-sm">
            OK
          </span>
          <span className="font-bold text-sm text-text-primary tracking-tight">Opa Kebab</span>
        </a>

        <button
          className="md:hidden flex flex-col gap-[4px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={cn("block w-5 h-[1.5px] bg-text-primary transition-all duration-300", mobileOpen && "translate-y-[2.75px] rotate-45")} />
          <span className={cn("block w-5 h-[1.5px] bg-text-primary transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={cn("block w-5 h-[1.5px] bg-text-primary transition-all duration-300", mobileOpen && "-translate-y-[2.75px] -rotate-45")} />
        </button>

        <ul className={cn(
          "md:flex md:static md:bg-transparent md:border-none md:p-0 md:opacity-100 md:visible md:translate-y-0 md:flex-row md:gap-1",
          "fixed top-[56px] left-0 right-0 bg-white flex-col p-4 gap-0 border-b border-gray-100",
          "transition-all duration-300 list-none m-0",
          mobileOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible"
        )}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-150 no-underline",
                  activeSection === link.href ? "text-orange" : "text-text-dim hover:text-text-primary hover:bg-gray-50"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
