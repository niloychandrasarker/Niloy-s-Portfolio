import { useState, useEffect } from "react";
import problemSolvingData from "../data/problemSolving.json";

const ProblemSolving = () => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    console.log("Problem Solving data:", problemSolvingData);
    setPlatforms(problemSolvingData);
  }, []);

  return (
    <section id="problem-solving" className="py-10 md:py-10 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Problem Solving Activities
          </h2>
          <p className="text-base text-gray-400">
            My Competitive Programming Journey
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Loading platforms...</p>
            </div>
          ) : (
            platforms.map((platform, index) => (
              <div
                key={platform.id}
                className={`bg-white rounded-lg shadow-sm hover-lift border border-gray-200 animate-scale-in stagger-${Math.min(
                  index + 1,
                  10
                )}`}
              >
                {/* Card Content */}
                <div className="p-8 pt-12 flex flex-col items-center text-center">
                  {/* Platform Logo */}
                  <div className="w-48 h-24 mb-8 flex items-center justify-center">
                    <img
                      src={platform.logo}
                      alt={platform.title}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/vite.svg";
                      }}
                    />
                  </div>

                  {/* Platform Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {platform.title}
                  </h3>

                  {/* Peak Rating/Stats */}
                  <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                    <span className="font-semibold text-red-600">
                      {platform.peakRating}
                    </span>
                    {platform.peakRating && "  "}
                    {platform.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-8 px-2">
                    {platform.description}
                  </p>

                  {/* Divider Line */}
                  <div className="w-full border-t border-gray-300 mb-4"></div>

                  {/* View Profile Button */}
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded transition-colors duration-300"
                  >
                    {platform.username}
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
