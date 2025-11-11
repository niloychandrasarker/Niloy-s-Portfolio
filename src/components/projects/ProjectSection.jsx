import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    import("../../data/projects.json")
      .then((mod) => setProjects(mod.default || []))
      .catch(() => setProjects([]));
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white" id="projects">
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

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
