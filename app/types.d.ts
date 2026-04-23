export type Project = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type Fairy = {
  id: number;
  documentId: string;
  image: string;
  title: string;
  description: string;
  hp: number;
  type: ElementType;
  features: Features[];
};

export type Spell = {
  id: number;
  documentId: string;
  image: string;
  title: string;
  type: ElementType;
  description: string;
  normal: string;
  expert: string;
  special: string;
  master: string;
  legend: string;
};

export type Features = {
  name: string;
  description: string;
  rule: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiSingleResponse<T> = {
  data: T;
};

export type StrapiImage = {
  url: string;
  formats?: {
    thumbnail?: {
      url: string;
    };
    small?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
  };
};

export type StrapiProject = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: {
        url: string;
      };
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  };
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type StrapiFairy = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  hp: number;
  type: ElementType;
  features: Features[];
  image?: StrapiImage;
};

export type StrapiSpell = Omit<Spell, "image"> & {
  image?: StrapiImage;
};

export type ElementType = "fire" | "water" | "earth" | "air";
