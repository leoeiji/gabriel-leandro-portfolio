import { Header } from "~/components/Header";
import { Button } from "~/components/Button";

export function Hero() {
  return (
    <section className="relative h-[800px] bg-blue-main overflow-hidden">
      <Header />

      {/* Decorative */}
      <img
        src="/images/decorative/subtract-hero.svg"
        alt=""
        aria-hidden="true"
        className="absolute h-[1080px] w-[747px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: "calc(50% + 470.85px)", top: "50%" }}
      />

      {/* Content */}
      <div
        className="absolute flex flex-col gap-6 w-full lg:max-w-[55vw] px-8 lg:pl-17.5 lg:pr-0 -translate-y-1/2"
        style={{ top: "50%" }}
      >
        <h1 className="font-serif font-bold text-[36px] lg:text-[64px] text-purple-main leading-tight">
          Advocacia com experiência e comprometimento.
        </h1>
        <p className="font-sans font-normal text-[16px] text-white leading-[1.2]">
          Atuação consultiva e contenciosa para pessoas físicas e empresas nas áreas cível,
          empresarial, trabalhista e mais.
        </p>
        <div className="pt-4">
          <Button href="#contato" label="Entre em contato" />
        </div>
      </div>
    </section>
  );
}
