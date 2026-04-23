import type { Spell, StrapiResponse, StrapiSpell } from "~/types";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Spells" },
    {
      name: "description",
      content: "A collection of spells that you can use for tinyd6 as ...",
    },
  ];
}

const SpellsPage = ({ loaderData }: Route.ComponentProps) => {
  return <></>;
};

export default SpellsPage;
