import { Link } from "react-router-dom";

const ProjectCard = ({ project, index = 0 }) => {
  const { id, name, description, thumbnail, stack } = project;

  // Handle both array and object stack formats
  const displayStack = Array.isArray(stack)
    ? stack
    : typeof stack === "object" && stack !== null
    ? Object.values(stack).flat()
    : [];

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg hover-lift border border-gray-200 animate-scale-in stagger-${Math.min(
        index + 1,
        10
      )}`}
    >
      {/* Thumbnail at top */}
      <div className="relative h-64 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
        <img
          src={thumbnail || "/vite.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/vite.svg";
          }}
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Project Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Pills */}
        {displayStack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {displayStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-md bg-gray-100 border border-gray-300 px-3 py-0.5 text-xs font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Divider line */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* View Button - Blue theme (smaller, centered) */}
        <div className="flex justify-center">
          <Link
            to={`/projects/${id}`}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-xs font-semibold transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
