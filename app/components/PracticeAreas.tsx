const areas = [
  {
    icon: "/images/icons/enterprise.svg",
    title: "Direito Empresarial",
    description:
      "Atuação contenciosa e consultiva para empresas de pequeno e médio porte, com elaboração e revisão de contratos empresariais, pareceres jurídicos, relatórios de risco, análises de contingências, atos societários e outros.",
  },
  {
    icon: "/images/icons/civil.svg",
    title: "Direito Cível",
    description:
      'Atuação consultiva com caráter de orientação e contenciosa em todas as fases processuais de assuntos relacionados ao direito civil em geral. Atuação extrajudicial e judicial, incluindo ações perante o Juizado Especial Cível ("Pequenas Causas").',
  },
  {
    icon: "/images/icons/civil.svg",
    title: "Cobrança e Recuperação de Crédito",
    description:
      "Ajuizamento e condução de ações monitórias, execuções, cobranças e habilitação/impugnação de crédito em falências e recuperações judiciais. Experiência em recuperação de ativos e estratégias de cobrança judicial e extrajudicial.",
  },
  {
    icon: "/images/icons/labor.svg",
    title: "Direito Trabalhista",
    description:
      "Atuação consultiva para empresas para orientação acerca da admissão, manutenção e demissão de funcionários, pagamento ou não de adicionais legais, jornada de trabalho e outras dúvidas do dia a dia da relação de trabalho.",
  },
  {
    icon: "/images/icons/contracts.svg",
    title: "Direito Contratual",
    description:
      "Análise negociação e elaboração de contratos entre pessoas físicas e pessoas jurídicas, tais como de prestação de serviços, compra e venda, cessão de ponto comercial e outros.",
  },
  {
    icon: "/images/icons/civil.svg",
    title: "Direito do Consumidor",
    description:
      "Atuação consultiva e contenciosa judicial e extrajudicial para pessoas físicas e empresas em demandas consumeristas.",
  },
  {
    icon: "/images/icons/civil.svg",
    title: "Direito Imobiliário",
    description:
      "Atuação consultiva para análise de contratos de compra e venda de imóveis e de locação. Atuação contenciosa judicial para demandas relacionadas à locação, tais como despejo e renovatória de locação.",
  },
  {
    icon: "/images/icons/family.svg",
    title: "Direito de Família e Sucessões",
    description:
      "Atuação consultiva e contenciosa judicial para casamentos, divórcios, inventários, testamentos, reconhecimento de maternidade e paternidade e outros.",
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-blue-main py-16 px-6 lg:py-24 lg:px-16">
      {/* Mobile layout */}
      <div className="lg:hidden">
        <h2 className="font-serif font-bold text-purple-main text-3xl leading-tight mb-8">
          Áreas de
          <br />
          Atuação
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col gap-2">
              <img src={area.icon} alt="" className="w-10 h-10 opacity-60" />
              <h3 className="font-sans font-bold text-purple-main text-sm leading-snug">
                {area.title}
              </h3>
              <p className="font-sans text-white/70 text-xs leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex gap-16 items-start">
        {/* Left: title 1/3 */}
        <div className="w-1/3 sticky top-24">
          <h2 className="font-serif font-bold text-purple-main text-5xl leading-tight">
            Áreas de
            <br />
            Atuação
          </h2>
        </div>

        {/* Right: accordion 2/3 */}
        <div className="w-2/3">
          {areas.map((area, i) => (
            <div key={area.title}>
              <hr className="border-white/20" />
              <details className="group">
                <summary className="flex items-center gap-4 py-5 select-none">
                  <img src={area.icon} alt="" className="w-8 h-8 opacity-60 shrink-0" />
                  <span className="font-sans font-bold text-white text-base flex-1">
                    {area.title}
                  </span>
                  {/* +/- marker */}
                  <span className="font-sans text-purple-main text-2xl leading-none w-6 text-center shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="font-sans text-white text-sm leading-relaxed pb-5 pl-12 pr-4">
                  {area.description}
                </p>
              </details>
            </div>
          ))}
          <hr className="border-white/20" />
        </div>
      </div>
    </section>
  );
}
