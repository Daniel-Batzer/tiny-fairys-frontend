import FeaturedProjects from "~/components/FeaturedProjects";
import type { Route } from "./+types/index";
import type { Project, StrapiProject, StrapiResponse } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website development" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch featured projects");
  }

  const projectJson: StrapiResponse<StrapiProject> = await res.json();
  const projects = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : "/images/no-image.png",
    url: item.url,
    category: item.category,
    date: item.date,
    featured: item.featured,
  }));

  return { projects };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
};

export default HomePage;
