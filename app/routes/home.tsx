import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { PracticeAreas } from "~/components/PracticeAreas";
import { Contact } from "~/components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gabriel Leandro Silva" },
    { name: "description", content: "Bem-vindo ao meu portfólio!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
    </>
  );
}
