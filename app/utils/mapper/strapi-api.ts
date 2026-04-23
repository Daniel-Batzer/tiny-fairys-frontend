import type {
  StrapiFairy,
  StrapiResponse,
  StrapiSingleResponse,
} from "~/types";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function GetStrappiResources<T>(
  path: string,
  nameOfResource: string,
): Promise<T[]> {
  const url = `${BASE_URL}/${path}?populate=*`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${nameOfResource}`);
  }

  const resources = (await response.json()) as StrapiResponse<T>;

  return resources.data ?? [];
}

export async function GetOneStrapiResource<T>(
  path: string,
  id: string,
  nameOfResource: string,
): Promise<T | null> {
  const url = `${BASE_URL}/${path}/${id}?populate=*`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${nameOfResource} with id ${id}`);
  }

  const resource = (await response.json()) as StrapiSingleResponse<T>;

  return resource.data ?? null;
}

export async function GetAllFairys() {
  return await GetStrappiResources<StrapiFairy>("fairies", "fairies");
}

export async function GetFairyById(id: string) {
  return await GetOneStrapiResource<StrapiFairy>("fairies", id, "fairy");
}
