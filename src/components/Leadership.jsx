import { Users, Award, Code, Lightbulb, Trophy, Target } from "lucide-react";

const Leadership = () => {
  const roles = [
    {
      id: 1,
      title: "Director of Competitive Programming",
      organization: "NITER Computer Club",
      description:
        "Leading competitive programming initiatives and organizing technical events at university level",
      icon: Award,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      period: "2024 - Present",
    },
    {
      id: 2,
      title: "Programming Mentor",
      organization: "NITER Computer Club",
      description:
        "Mentoring and guiding junior students in programming fundamentals and problem-solving techniques",
      icon: Users,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      period: "2023 - 2424",
    },
    {
      id: 3,
      title: "Event Organizer & Lead",
      organization: "University Tech Events",
      description:
        "Leading and organizing university-level hackathons, coding competitions, and technical events",
      icon: Trophy,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      period: "2024",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-10 md:py-10 bg-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Leadership & Mentoring
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Empowering the next generation of programmers and leading technical
            initiatives
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                className={`relative group rounded-2xl p-6 bg-white border-2 border-gray-200 shadow-lg hover-lift overflow-hidden animate-scale-in stagger-${Math.min(
                  index + 1,
                  10
                )}`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${role.iconBg} rounded-xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 bg-linear-to-br ${role.color} bg-clip-text`}
                      style={{
                        color: role.color.split(" ")[0].replace("from-", ""),
                      }}
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {role.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm font-semibold bg-linear-to-r ${role.color} bg-clip-text text-transparent mb-3`}
                    >
                      {role.organization}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {role.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{role.period}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-32 h-32 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
