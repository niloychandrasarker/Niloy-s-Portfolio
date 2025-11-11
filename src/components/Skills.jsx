import { useEffect, useState, useMemo } from "react";
// Removed framer-motion for simplicity
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";

// Fallback icon if mapping fails
const FallbackIcon = () => (
  <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600" />
);

// Accent colors removed for ultra-simple layout

// Animation removed for simpler static rendering

// Removed progress coloring; kept placeholder removed to satisfy linter
// (If reintroduced, map levels to colors here.)

const Skills = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    import("../data/skills.json")
      .then((mod) => setData(mod.default || {}))
      .catch(() => setData({}));
  }, []);

  const categories = useMemo(() => Object.keys(data), [data]);

  return (
    <section
      id="skills"
      className="py-10 md:py-10 bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A snapshot of the tools, languages, and platforms I work with.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, catIndex) => {
            const skills = data[cat] || [];
            return (
              <div
                key={cat}
                className={`relative animate-slide-up stagger-${Math.min(
                  catIndex + 1,
                  10
                )}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-gray-200 mb-3">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => {
                    const IconComp =
                      Fa[skill.icon] ||
                      Si[skill.icon] ||
                      Tb[skill.icon] ||
                      FallbackIcon;
                    return (
                      <span
                        key={skill.name + cat}
                        className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 hover-scale cursor-pointer"
                        style={{
                          animationDelay: `${
                            catIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      >
                        <span className="text-base leading-none flex items-center justify-center text-gray-600 dark:text-gray-300">
                          <IconComp />
                        </span>
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
