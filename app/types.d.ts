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
  features: Features[];
};

export type Features = {
  name: string;
  description: string;
};

export type StrapiResponse<T> = {
  data: T[];
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
  features: Features[];
  image?: StrapiImage;
};
