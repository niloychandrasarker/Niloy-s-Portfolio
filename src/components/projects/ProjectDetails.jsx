import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    import("../../data/projects.json")
      .then((mod) => setProjects(mod.default || []))
      .catch(() => setProjects([]));
  }, []);

  const project = useMemo(
    () => projects.find((p) => p.id === id),
    [projects, id]
  );

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16  from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft className="w-3 h-3" />
            Home
          </Link>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <Link
            to="/projects"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <span className="text-gray-900 dark:text-white font-medium truncate max-w-xs">
            {project.name}
          </span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          {/* Project Title & Description */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Project Thumbnail with Enhanced Design */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.thumbnail || "/vite.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  loading="eager"
                  onError={(e) => (e.currentTarget.src = "/vite.svg")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Moved up */}
        {(project.frontendUrl || project.backendUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <HiOutlineExternalLink className="text-xl group-hover:rotate-12 transition-transform" />
                View Live Demo
              </a>
            )}
            {project.frontendUrl && (
              <a
                href={project.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                Frontend Code
              </a>
            )}
            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-blue-600 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                Backend Code
              </a>
            )}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                Project Overview
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Purpose Section */}
            {project.purpose && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-800 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                  Purpose
                </h2>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  {project.purpose}
                </p>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures &&
              Array.isArray(project.keyFeatures) &&
              project.keyFeatures.length > 0 && (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                    Key Features
                  </h2>
                  <div className="grid gap-4">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
                      >
                        <span className=" w-7 h-7 flex items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                          ✓
                        </span>
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6 sticky top-24">
            {/* Project Metadata */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                Project Details
              </h3>
              <div className="space-y-4">
                {/* Project Type */}
                {project.projectType && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Type
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      {project.projectType}
                    </span>
                  </div>
                )}

                {/* Status */}
                {project.status && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Status
                    </span>
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-lg ${
                        project.status === "Completed"
                          ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          : "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Role */}
                {project.role && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Role
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white text-right max-w-[60%]">
                      {project.role}
                    </span>
                  </div>
                )}

                {/* Team Size */}
                {project.teamSize && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Team Size
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {project.teamSize}{" "}
                      {project.teamSize === 1 ? "member" : "members"}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies Used */}
            {project.stack && typeof project.stack === "object" && (
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                  Tech Stack
                </h3>
                <div className="space-y-5">
                  {Object.entries(project.stack).map(
                    ([category, techs]) =>
                      Array.isArray(techs) &&
                      techs.length > 0 && (
                        <div key={category}>
                          <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2.5 uppercase tracking-wider">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 hover:shadow-md transition-shadow"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        {Array.isArray(project.gallery) && project.gallery.length > 0 && (
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
              Project Gallery
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={src}
                    alt={`${project.name} screenshot ${idx + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = "/vite.svg")}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <p className="text-white text-sm font-medium">
                      Screenshot {idx + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
