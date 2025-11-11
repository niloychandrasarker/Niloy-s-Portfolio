import { Trophy, Award, Medal, Star, Code, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "ICPC Asia Dhaka Regional 2024",
      subtitle: "Regionalist",
      description:
        "Qualified and participated in the prestigious ICPC Asia Dhaka Regional Contest 2024",
      logo: "https://icpc.global/static/media/icpc-full-logo.6196ada8251755f78bc4.png",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      year: "2024",
      link: "https://drive.google.com/drive/u/0/folders/1t6spoydSSq0fLyIMBMPsIqDNUJL5Reh7",
    },
    {
      id: 2,
      title: "NITER Intra-University Programming Contest",
      subtitle: "Champion",
      description:
        "Secured 1st place among all participants in the university-wide programming competition",
      logo: "Achievement_logo/Tropy.png",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      year: "2023",
      link: "https://drive.google.com/drive/u/0/folders/1zK6k556U9gmJwNGyF0XS3-7WkSdoqo7u",
    },
    {
      id: 3,
      title: "AI Hackathon",
      subtitle: "Top 5 Finalist",
      description:
        "Achieved top 5 position among numerous participants in competitive AI hackathon",
      logo: "Achievement_logo/Tropy.png",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      year: "2024",
      link: "https://www.linkedin.com/posts/niloy-chandra-sarker-01a0aa257_honored-to-receive-the-certificate-of-participation-activity-7362421730490929152-NZps?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD8yHZYB9wXmx-Jy-tQhRTiOi9Iq4Bh8RT4",
    },
    {
      id: 4,
      title: "Codeforces",
      subtitle: "Pupil (Rated Contestant)",
      description:
        "Achieved Pupil rank on Codeforces through consistent competitive programming performance",
      logo: "https://art.npanuhin.me/SVG/Codeforces/Codeforces.colored.svg",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      year: "2024",
      link: "https://codeforces.com/profile/niloysarker_cs",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-10 md:py-10 bg-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Achievements & Recognition
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Notable accomplishments in competitive programming and hackathons
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`relative group rounded-2xl p-6 bg-white border-2 border-gray-200 shadow-lg hover-lift overflow-hidden animate-scale-in stagger-${Math.min(
                  index + 1,
                  10
                )}`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex gap-4">
                  {/* Logo */}
                  <div
                    className={`shrink-0 w-14 h-14 ${achievement.iconBg} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    <img
                      src={achievement.logo}
                      alt={achievement.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {achievement.subtitle}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Link Icon */}
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Decorative Badge */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Medal className="w-24 h-24 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
