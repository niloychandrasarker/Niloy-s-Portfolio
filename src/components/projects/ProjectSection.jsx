import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const categories = [
  "All",
  "Java Spring Boot",
  "MERN App",
  "React",
  "TypeScript",
  "Next.js",
  "AI/ML",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

const categoryMap = {
  "Java Spring Boot": [
    "WorkHive",
    "Ecommerce Multivendor",
    "Kidora - Kids Product E-commerce Platform",
  ],
  "MERN App": [
    "RabitLog - A Blogging Platform",
    "CivicPortal - Multipurpose Civic Support Portal",
  ],
  React: [
    "WorkHive",
    "CivicPortal - Multipurpose Civic Support Portal",
    "Fosoldut - AI-Powered Farming Assistant",
    "Kidora - Kids Product E-commerce Platform",
    "RabitLog - A Blogging Platform",
    "Ecommerce Multivendor",
  ],
  TypeScript: ["Ecommerce Multivendor"],
  MySQL: ["WorkHive", "Ecommerce Multivendor"],
  PostgreSQL: ["Kidora - Kids Product E-commerce Platform"],
  MongoDB: [
    "RabitLog - A Blogging Platform",
    "CivicPortal - Multipurpose Civic Support Portal",
  ],
  "AI/ML": ["Fosoldut - AI-Powered Farming Assistant"],
};

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    import("../../data/projects.json")
      .then((mod) => setProjects(mod.default || []))
      .catch(() => setProjects([]));
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          categoryMap[activeCategory]?.includes(project.name)
        );

  return (
    <section className="py-10 md:py-10 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my work — a collection of projects showcasing engineering,
            design, and problem-solving.
          </p>
        </div>

        {/* Filtering Section */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center py-6 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-base focus:outline-none transition-all duration-200
                ${
                  activeCategory === cat
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
