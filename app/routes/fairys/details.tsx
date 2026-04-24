import type { Fairy, Spell } from "~/types";
import type { Route } from "./+types/details";
import { Link } from "react-router";
import {
  mapStrapiFairyToFairy,
  mapStrapiSpellToSpell,
} from "~/utils/mapper/strapi-mapper";
import { GetFairyById, GetSpellsByElement } from "~/utils/mapper/strapi-api";

type DetailsLoaderData = {
  fairy: Fairy;
  spells: Spell[];
};

export async function loader({
  params,
}: Route.LoaderArgs): Promise<DetailsLoaderData> {
  const fairyId = params.id;
  if (!fairyId) {
    throw new Response("Missing fairy id", { status: 400 });
  }

  const strapiFairy = await GetFairyById(fairyId);

  if (!strapiFairy) {
    throw new Response("Fairy not found", { status: 404 });
  }

  const fairy = mapStrapiFairyToFairy(strapiFairy);

  const strapiSpells = await GetSpellsByElement(fairy.type);
  const spells = strapiSpells.map((item) => mapStrapiSpellToSpell(item));

  return { fairy, spells };
}

const FairyDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { spells, fairy } = loaderData;

  if (!fairy) {
    return <p>Fee nicht gefunden.</p>;
  }

  return (
    <section className="mx-auto max-w-4xl">
      <Link to="/fairies" className="mb-6 inline-block text-sm text-blue-400">
        ← Zurück zur Übersicht
      </Link>

      <div className="grid gap-8 md:grid-cols-[320px_1fr]">
        <div>
          <img
            src={fairy.image}
            alt={fairy.title}
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h1 className="mb-3 text-3xl font-bold text-blue-400">
              {fairy.title}
            </h1>

            <div className="mb-4">
              <span className="rounded bg-gray-700 px-3 py-1 text-sm">
                {fairy.hp} TP
              </span>
            </div>
          </div>

          <p className="mb-6 text-gray-300 italic">{fairy.description}</p>

          <div className="mb-8">
            <h2 className="mb-3 text-xl font-semibold">Erbfähigkeiten</h2>
            <div className="space-y-3">
              {fairy.features?.map((feature) => (
                <div key={feature.name} className="rounded-lg bg-gray-800 p-4">
                  <h3 className="mb-1 font-semibold text-blue-300">
                    {feature.name}
                  </h3>
                  {"description" in feature && feature.description ? (
                    <div>
                      <p className="text-sm text-gray-300 italic">
                        {feature.description}
                      </p>
                      <p className="text-sm text-gray-200 mt-2">
                        {feature.rule}
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="mb-3 text-xl font-semibold">Spells</h2>
        <div className="space-y-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {spells.length > 0 ? (
            spells.map((spell) => (
              <div
                key={spell.id}
                className="flex h-full flex-col rounded-lg bg-gray-800 p-4"
              >
                <h3 className="font-semibold text-blue-300">{spell.title}</h3>
                <p className="mt-1 text-sm text-gray-300">
                  {spell.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400">Keine Spells vorhanden.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FairyDetailsPage;
