export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-5">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-7 h-7 bg-orange rounded-lg flex items-center justify-center text-white font-black text-xs">OK</span>
          <span className="font-bold text-sm text-text-primary">Opa Kebab</span>
        </div>
        <p className="text-sm font-semibold text-orange mb-6">Kebab Sebelah Masjid ga Pelit Daging</p>
        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-text-dim">&copy; 2026 Opa Kebab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
