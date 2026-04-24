import type { Fairy, Spell, StrapiFairy, StrapiSpell } from "~/types";

export const mapStrapiFairyToFairy = (item: StrapiFairy): Fairy => ({
  id: item.id,
  documentId: item.documentId,
  title: item.title,
  description: item.description,
  hp: item.hp,
  features: item.features,
  type: item.type,
  image:
    item.image?.formats?.medium?.url ??
    item.image?.formats?.small?.url ??
    item.image?.url ??
    "/images/no-image.png",
});

export const mapStrapiSpellToSpell = (item: StrapiSpell): Spell => ({
  id: item.id,
  documentId: item.documentId,
  title: item.title,
  description: item.description,
  type: item.type,
  image:
    (item.image?.formats?.medium?.url ??
    item.image?.formats?.small?.url ??
    item.image?.url ??
    item.type === "fire")
      ? "/images/elements/fire.png"
      : item.type === "water"
        ? "/images/elements/water.png"
        : item.type === "earth"
          ? "/images/elements/earth.png"
          : item.type === "air"
            ? "/images/elements/air.png"
            : "/images/no-image.png",
  normal: item.normal,
  expert: item.expert,
  special: item.special,
  master: item.master,
  legend: item.legend,
});
