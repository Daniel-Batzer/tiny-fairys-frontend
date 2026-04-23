import { Link } from "react-router";
import type { Fairy } from "~/types";

type FairyCardProps = {
  fairy: Fairy;
};

const truncateText = (text: string, maxLength = 120) => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const FairyCard = ({ fairy }: FairyCardProps) => {
  return (
    <Link
      to={`/fairies/${fairy.documentId}`}
      className="flex h-64 overflow-hidden rounded-xl bg-gray-800 shadow-md transition hover:scale-[1.01]"
    >
      <div className="h-full aspect-3/4 shrink-0 overflow-hidden rounded-l-xl bg-gray-900">
        <img
          src={fairy.image}
          alt={fairy.title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-blue-400">{fairy.title}</h3>

            <span className="rounded bg-gray-700 px-2 py-1 text-sm">
              {fairy.hp} TP
            </span>
          </div>

          <p className="text-sm text-gray-300">
            {truncateText(fairy.description)}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {fairy.features?.map((feature) => (
            <span
              key={feature.name}
              className="rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
            >
              {feature.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FairyCard;
