import type { Fairy, StrapiFairy, StrapiResponse } from "~/types";
import type { Route } from "./+types/index";

import { AnimatePresence, motion } from "framer-motion";

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
  const url = `${import.meta.env.VITE_API_URL}/fairies?populate=*`;
  const res = await fetch(url);
  const json: StrapiResponse<StrapiFairy> = await res.json();
  const fairies = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    features: item.features,
    hp: item.hp,
  }));

  return { fairies };
}

const FairysPage = ({ loaderData }: Route.ComponentProps) => {
  const { fairies } = loaderData as { fairies: Fairy[] };

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Fairies</h2>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {fairies.map((fairy) => (
            <motion.div key={fairy.id} layout>
              <p>{fairy.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FairysPage;
