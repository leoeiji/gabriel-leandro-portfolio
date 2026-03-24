export function About() {
  return (
    <section id="sobre" className="relative">
      <div className="flex flex-col lg:flex-row lg:min-h-[700px]">
        {/* Dark bg — top on mobile, left 1/3 on desktop */}
        <div className="relative h-[280px] lg:h-auto lg:w-1/3 overflow-hidden">
          <img
            src="/images/profile/sobre-bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Purple section — bottom on mobile, right 2/3 on desktop */}
        <div
          className="bg-purple-main flex flex-col justify-center
                        pt-[170px] pb-12 px-8
                        lg:w-2/3 lg:pt-16 lg:pl-[280px] lg:pr-20 lg:py-16"
        >
          <h2 className="font-serif font-bold text-blue-main leading-none mb-6 text-[52px] lg:text-[80px]">
            Sobre
          </h2>
          <div className="flex flex-col gap-4 font-sans text-[15px] lg:text-[16px] text-blue-main leading-relaxed max-w-[560px]">
            <p>
              Sou advogado com <strong>pós-graduação em Direito Empresarial pela FGV</strong> e sólida atuação
              em consultivo e contencioso cível (massificado e estratégico). Ao longo de minha experiência
              profissional, trabalhei em empresas e escritórios de advocacia atendendo tanto{" "}
              <strong>pessoas físicas,</strong> como <strong>pessoas jurídicas.</strong>
            </p>
            <p>
              Tenho experiência em <strong>todas as fases processuais,</strong> elaboração de peças,
              pareceres, realização de despachos e audiências, e gestão de carteira de processos. Além do
              contencioso cível, possuo vivência em due diligence, auditorias jurídicas, análise de
              contingências e elaboração de relatórios jurídicos pontuais.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile photo — positioned at the dark/purple boundary, centered */}
      <img
        src="/images/profile/gabriel.jpg"
        alt="Gabriel Leandro"
        className="lg:hidden absolute top-[280px] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[220px] object-cover object-top z-10"
      />

      {/* Desktop photo — centered on the 1/3 dividing line */}
      <img
        src="/images/profile/gabriel.jpg"
        alt="Gabriel Leandro"
        className="hidden lg:block absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[280px] object-cover object-top z-10"
      />
    </section>
  );
}
