import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Projects" },
    { name: "description", content: "My website project portfolio" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const url = `${import.meta.env.VITE_API_URL}/projects?populate=*`;
  console.log(url);
  const res = await fetch(url);
  const json: StrapiResponse<StrapiProject> = await res.json();
  console.log(json);
  const projects = json.data.map((item) => ({
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

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setcurrentPage] = useState(1);
  const projectsPerPage = 10;

  const { projects } = loaderData as { projects: Project[] };

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current pages projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setcurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setcurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
