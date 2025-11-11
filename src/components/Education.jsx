import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

// Utility to compute duration text
function computeDuration(start, end) {
  try {
    if (!start) return "";
    const startDate = new Date(start + "-01");
    const endDate =
      end && end !== "present" ? new Date(end + "-01") : new Date();
    const diffMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    let parts = [];
    if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
    return parts.length ? parts.join(" ") : "< 1 mo";
  } catch {
    return "";
  }
}

const Education = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Dynamic import keeps it simple; could be replaced by fetch if hosted separately.
    import("../data/education.json")
      .then((mod) => {
        setItems(mod.default || []);
      })
      .catch(() => setItems([]));
  }, []);

  return (
    <section
      id="education"
      className="py-10 md:py-10 bg-white dark:bg-gray-950 transition-colors "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and performance overview.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {items.map((edu, i) => {
            const durationText = `${edu.startLabel} – ${
              edu.endLabel
            } · ${computeDuration(edu.start, edu.end)}`;
            return (
              <div
                key={edu.institution + edu.start}
                className={`relative group rounded-2xl p-5 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover-lift overflow-hidden animate-slide-up stagger-${
                  i + 1
                }`}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-purple-500 via-indigo-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                {/* Inner subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/0 via-purple-50/30 dark:via-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 shadow-inner">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/80x80/3b82f6/ffffff?text=Logo";
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 grow">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white leading-snug">
                      {edu.institution}
                    </h3>
                    {edu.subLabel && (
                      <p className="text-xs md:text-sm text-purple-600 dark:text-purple-400 font-medium tracking-wide">
                        {edu.subLabel}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{durationText}</span>
                      </div>
                      {/* <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-base font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-blue-600">
                    {edu.degree}
                  </p>
                  {edu.role && (
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {edu.role}
                    </p>
                  )}
                  {edu.cgpa && (
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {edu.cgpa}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
