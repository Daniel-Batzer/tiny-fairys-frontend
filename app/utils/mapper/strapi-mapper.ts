import type { Fairy, StrapiFairy } from "~/types";

const toImageUrl = (baseUrl: string, path?: string) => {
  if (!path) return "/images/no-image.png";
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path}`;
};

export const mapStrapiFairyToFairy = (
  item: StrapiFairy,
  baseUrl: string,
): Fairy => ({
  id: item.id,
  documentId: item.documentId,
  title: item.title,
  description: item.description,
  hp: item.hp,
  features: item.features,
  type: item.type,
  image: toImageUrl(
    baseUrl,
    item.image?.formats?.medium?.url ??
      item.image?.formats?.small?.url ??
      item.image?.url,
  ),
});
