export function Contact() {
  return (
    <section
      id="contato"
      className="relative bg-blue-footer overflow-hidden min-h-[460px] flex flex-col px-8 pt-8 pb-[96px] lg:px-16 lg:pt-12 lg:pb-0"
    >
      {/* Contact info — top left */}
      <ul className="flex flex-col gap-4">
        <li>
          <a
            href="tel:+5511976208180"
            className="flex items-center gap-3 font-sans text-white text-sm lg:text-base hover:text-white/80 transition-colors"
          >
            <img src="/images/icons/call.svg" alt="" className="w-5 h-5 opacity-80" />
            (11) 97620-8180
          </a>
        </li>
        <li>
          <a
            href="mailto:gabriel.leandro99@gmail.com"
            className="flex items-center gap-3 font-sans text-white text-sm lg:text-base hover:text-white/80 transition-colors"
          >
            <img src="/images/icons/mail.svg" alt="" className="w-5 h-5 opacity-80" />
            gabriel.leandro99@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.glsadvocacia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-sans text-white text-sm lg:text-base hover:text-white/80 transition-colors"
          >
            <img src="/images/icons/language.svg" alt="" className="w-5 h-5 opacity-80" />
            www.glsadvocacia.com.br
          </a>
        </li>
      </ul>

      {/* Spacer — empurra copyright para baixo no mobile (fluxo) */}
      <div className="flex-1" />

      {/* Copyright — no fluxo no mobile, absolute no desktop */}
      <p className="text-right font-sans text-white/60 text-xs leading-snug lg:absolute lg:bottom-4 lg:right-16">
        © 2026 Todos os
        <br />
        direitos reservados.
      </p>

      {/* "Contato" gigante — bottom, parcialmente cortado */}
      <h2
        className="absolute bottom-0 left-0 font-serif font-bold text-purple-main leading-none select-none translate-y-[20%]"
        style={{ fontSize: "clamp(120px, 22vw, 280px)" }}
      >
        Contato
      </h2>
    </section>
  );
}
