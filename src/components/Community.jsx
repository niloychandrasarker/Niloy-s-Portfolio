import React from "react";

const Community = () => {
  const platforms = [
    {
      id: 1,
      name: "LinkedIn",
      icon: "linkedin",
      title: "LinkedIn",
      description: "Connections with a network of tech professionals.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      buttonText: "Profile",
      link: "https://www.linkedin.com/in/niloy-chandra-sarker-01a0aa257/",
    },
    {
      id: 2,
      name: "Facebook",
      icon: "facebook",
      title: "Facebook",
      description:
        "Personal life, useful posts and updates regarding competitive programming and software engineering.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      buttonText: "Profile",
      buttonText2: "",
      link: "https://www.facebook.com/share/19jtzmQzWr/",
      link2: "",
    },
    {
      id: 3,
      name: "Personal Blog",
      icon: "blog",
      title: "Personal Blog",
      description:
        "Long-form posts and technical write-ups on life, algorithms, systems, and engineering.",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      iconBg: "bg-gray-100",
      buttonText: "Blog Website",
      link: "https://rabitlog.vercel.app/",
    },
    {
      id: 4,
      name: "GitHub",
      icon: "github",
      title: "GitHub",
      description: "Open source projects and repositories.",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      iconBg: "bg-gray-100",
      buttonText: "Profile",
      link: "https://github.com/niloychandrasarker",
    },
    {
      id: 5,
      name: "Codeforces",
      icon: "codeforces",
      title: "Codeforces",
      description: "Educational blogs, editorials, and topic lists.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      buttonText: "Profile",
      link: "https://codeforces.com/profile/niloysarker_cs",
    },
  ];

  const SocialIcon = ({ platform }) => {
    const icons = {
      linkedin: (
        <svg className="w-32 h-32" fill="#0077B5" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      github: (
        <svg className="w-32 h-32" fill="#181717" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      facebook: (
        <svg className="w-32 h-32" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      blog: (
        <svg className="w-82 h-32 " viewBox="0 0 100 100">
          <text x="5" y="70" fontSize="60" fontWeight="bold" fill="#6B7280">
            .blog
          </text>
        </svg>
      ),
      codeforces: (
        <img
          src="https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg"
          alt="Codeforces"
          className="w-32 h-32"
        />
      ),
    };
    return icons[platform];
  };

  return (
    <section
      id="community"
      className="py-10 md:py-10 bg-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Community & Reach
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Building connections and sharing knowledge across platforms
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={platform.id}
              className={`relative group rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in stagger-${Math.min(
                index + 1,
                10
              )}`}
            >
              {/* Content */}
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-4">
                  <SocialIcon platform={platform.icon} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {platform.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {platform.description}
                </p>

                {/* Divider Line */}
                <div className="w-full border-t border-gray-200 mb-3"></div>

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap justify-center">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {platform.buttonText}
                  </a>
                  {platform.buttonText2 && (
                    <a
                      href={platform.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                    >
                      {platform.buttonText2}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
