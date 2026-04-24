import { Link } from "react-router";
import type { Spell } from "~/types";
import { truncateText } from "~/utils/helpers";

export type SpellCardProps = {
  spell: Spell;
};

const SpellCard = ({ spell }: SpellCardProps) => {
  const eleColor =
    spell.type === "fire"
      ? "bg-red-500"
      : spell.type === "water"
        ? "bg-blue-500"
        : spell.type === "earth"
          ? "bg-green-500"
          : "bg-gray-500";

  return (
    <Link
      className="flex h-64 overflow-hidden rounded-xl bg-gray-800 shadow-md transition hover:scale-[1.01]"
      to={`/spells/${spell.documentId}`}
    >
      <div className="h-full aspect-3/4 shrink-0 overflow-hidden rounded-l-xl bg-gray-900">
        <img
          src={spell.image}
          alt={spell.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-blue-400">{spell.title}</h3>
            <span className={`rounded-xl ${eleColor} p-1.5 text-sm`}></span>
          </div>

          <p className="text-sm text-gray-300">
            {truncateText(spell.description)}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
            2 - 4
          </span>
          <p className="text-sm">{spell.normal}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 items-center">
          <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300">
            5 - 6
          </span>
          <p className="text-sm">{spell.normal}</p>
        </div>
      </div>
    </Link>
  );
};

export default SpellCard;
