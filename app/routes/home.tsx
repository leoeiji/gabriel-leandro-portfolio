import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gabriel Leandro Silva" },
    { name: "description", content: "Bem-vindo ao meu portfólio!" },
  ];
}

export default function Home() {
  return <div>Hello, World!</div>;
}
