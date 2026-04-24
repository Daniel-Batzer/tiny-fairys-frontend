import type { Spell } from "~/types";
import type { Route } from "./+types";
import { GetAllSpells } from "~/utils/mapper/strapi-api";
import { mapStrapiSpellToSpell } from "~/utils/mapper/strapi-mapper";
import { AnimatePresence, motion } from "framer-motion";
import SpellCard from "~/components/SpellCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Spells" },
    {
      name: "description",
      content: "A collection of spells that you can use for tinyD6",
    },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ spells: Spell[] }> {
  const strapiSpells = await GetAllSpells();
  const spells = strapiSpells.map((item) => mapStrapiSpellToSpell(item));
  return { spells };
}

const SpellsPage = ({ loaderData }: Route.ComponentProps) => {
  const { spells } = loaderData as { spells: Spell[] };
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Spells</h2>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-8 md:grid-cols-2">
          {spells.map((spell) => (
            <motion.div key={spell.id} layout>
              <SpellCard spell={spell} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SpellsPage;
