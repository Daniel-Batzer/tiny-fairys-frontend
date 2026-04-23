import type { Fairy } from "~/types";
import type { Route } from "./+types/index";

import { AnimatePresence, motion } from "framer-motion";
import FairyCard from "~/components/FairyCard";
import { mapStrapiFairyToFairy } from "~/utils/mapper/strapi-mapper";
import { GetAllFairys } from "~/utils/mapper/strapi-api";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Fairys" },
    {
      name: "description",
      content: "A collection of fairys that you can use for tinyd6 as ...",
    },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ fairies: Fairy[] }> {
  const strapiFairies = await GetAllFairys();

  const fairies = strapiFairies.map((item) => mapStrapiFairyToFairy(item));

  return { fairies };
}

const FairysPage = ({ loaderData }: Route.ComponentProps) => {
  const { fairies } = loaderData as { fairies: Fairy[] };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Fairies</h2>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-8 md:grid-cols-2 ">
          {fairies.map((fairy) => (
            <motion.div key={fairy.id} layout>
              <FairyCard fairy={fairy} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FairysPage;
