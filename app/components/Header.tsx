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
  return (
    <header>
      <nav className="flex items-center justify-between px-17.5 py-6">
        <img src="/images/logo/logo.png" alt="Gabriel Leandro Silva Advocacia" className="h-14 w-auto" />
        <div className="flex gap-5 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink key={href} label={label} href={href} />
          ))}
        </div>
      </nav>
    </header>
  );
}
