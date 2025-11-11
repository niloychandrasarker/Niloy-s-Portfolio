import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Download,
  Briefcase,
} from "lucide-react";
import { ReactTyped } from "react-typed";

// Custom Discord Icon
const DiscordIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/niloychandrasarker",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/niloy-chandra-sarker-01a0aa257/",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19jtzmQzWr/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: DiscordIcon,
      href: "https://discord.com/channels/@me",
      label: "Discord",
      color: "hover:text-indigo-600",
      isCustom: true,
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/qr/N3UIESWA44JHC1",
      label: "WhatsApp",
      color: "hover:text-green-600",
      isCustom: true,
    },
    {
      icon: Mail,
      href: "mailto:niloysarker.cs@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ];

  const handleDownloadResume = () => {
    // Open Google Drive resume link in new tab
    window.open(
      "https://drive.google.com/file/d/1L0esQnhaphtO9BauKcqz4_HD8-zQwyHU/view?usp=sharing",
      "_blank"
    );
  };

  const handleHireMe = () => {
    // Scroll to contact section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-gray-950"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-2">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Niloy Chandra Sarker
              </h1>
            </div>

            {/* Animated Typing Bio */}
            <div className="animate-fade-in-up animation-delay-200 h-16 sm:h-20">
              <ReactTyped
                strings={[
                  "I'm a <span class='text-blue-600 font-bold'>Full Stack Developer</span>",
                  "I'm a <span class='text-purple-600 font-bold'>Problem Solver</span>",
                  "I'm a <span class='text-indigo-600 font-bold'>Tech Innovator</span>",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
              Software Engineer | Full Stack Developer passionate about creating
              innovative solutions | Researching AI/ML-driven automation and
              intelligent applications | Competitive Programmer with strong
              problem-solving skills
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <button
                onClick={handleHireMe}
                className="group relative px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Briefcase size={20} />
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button
                onClick={handleDownloadResume}
                className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-xl hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.isCustom ? (
                      <Icon
                        size={18}
                        className="text-gray-700 dark:text-gray-300 group-hover:text-current transition-colors"
                      />
                    ) : (
                      <Icon
                        size={18}
                        className="text-gray-700 dark:text-gray-300 group-hover:text-current transition-colors"
                      />
                    )}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-400">
            <div className="relative group">
              {/* Neon Glow Effect - Animated Border */}
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl opacity-75 blur group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse"></div>

              {/* Main White Card Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-2xl w-80 sm:w-96">
                {/* Profile Image with Static Gradient Border */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6">
                  {/* Static Gradient Border */}
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                      <img
                        src="/Hero/hero_image.jpg"
                        alt="Niloy Chandra Sarker"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/250x250/3b82f6/ffffff?text=Profile";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-3 tracking-wide">
                  NILOY CHANDRA SARKER
                </h2>

                {/* Title */}
                <p className="text-gray-600 dark:text-gray-400 text-center text-base sm:text-lg mb-8">
                  Full Stack Web Developer
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-2.5 bg-gray-800 dark:bg-gray-700 rounded-full hover:bg-linear-to-r hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        aria-label={social.label}
                      >
                        {social.isCustom ? (
                          <Icon
                            size={18}
                            className="text-white transition-colors"
                          />
                        ) : (
                          <Icon
                            size={18}
                            className="text-white transition-colors"
                          />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
            <span className="text-sm font-medium">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
