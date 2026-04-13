import Hero from "~/components/Hero";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website development" },
  ];
}

export default function Home() {
  if (typeof window === "undefined") {
    console.log("Welcome to The Friendly Dev! Servermessage");
  } else {
    console.log("Welcome to The Friendly Dev! Clientmessage");
  }

  return (
    <section>
      <Hero name="Daniel" />
    </section>
  );
}
