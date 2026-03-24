import { useState } from "react";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Contato", href: "#contato" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="group flex flex-col gap-0.5 items-center justify-center px-2 py-1 relative">
      <span className="font-light text-[18px] text-white uppercase leading-none underline-offset-4 decoration-white/50 hover:underline">{label}</span>
    </a>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-6 lg:px-17.5">
        <img src="/images/logo/logo.png" alt="Gabriel Leandro Silva Advocacia" className="h-14 w-auto" />

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-5 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink key={href} label={label} href={href} />
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-blue-main z-50 flex flex-col pt-8 px-8 gap-8 transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Botão fechar */}
        <button
          className="self-end text-white p-1"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        {/* Links */}
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-light text-[18px] text-white uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
