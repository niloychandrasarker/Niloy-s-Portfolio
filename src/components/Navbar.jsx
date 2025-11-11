import { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const navRef = useRef(null);

  // Full ordered list (first 5 visible on desktop, rest under More)
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home" },
      { id: "education", label: "Education", href: "#education" },
      { id: "skills", label: "Skills", href: "#skills" },
      { id: "projects", label: "Projects", href: "#projects" },
      {
        id: "problem-solving",
        label: "Problem Solving",
        href: "#problem-solving",
      },
      { id: "achievements", label: "Achievements", href: "#achievements" },
      {
        id: "leadership",
        label: "Leadership / Mentoring",
        href: "#leadership",
      },
      { id: "community", label: "Community / Reach", href: "#community" },
      { id: "blog", label: "Blog", href: "#blog" },
      { id: "testimonials", label: "Testimonials", href: "#testimonials" },
      { id: "contact", label: "Contact", href: "#contact" }, // moved to bottom
    ],
    []
  );

  // Determine visible nav items and more items based on screen width
  const [visibleItems, setVisibleItems] = useState(navItems.slice(0, 5));
  const [dropdownItems, setDropdownItems] = useState(navItems.slice(5));

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navItems]);

  // Responsive: 5 visible on desktop/tablet, all on mobile
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // Mobile: Show all in mobile menu; hide More
        setVisibleItems(navItems);
        setDropdownItems([]);
        setShowMoreMenu(false);
      } else {
        // Desktop/Tablet: First 5 visible, rest in More
        setVisibleItems(navItems.slice(0, 5));
        const rest = navItems.slice(5);
        setDropdownItems(rest);
        setShowMoreMenu(rest.length > 0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navItems]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scroll to section or navigate to home
  const handleNavClick = (e, href) => {
    e.preventDefault();

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }

    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Add/remove helper class on <html> when mobile menu is open
  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) root.classList.add("mobile-menu-open");
    else root.classList.remove("mobile-menu-open");
    return () => root.classList.remove("mobile-menu-open");
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo/Name */}
          <div className="shrink-0 animate-slide-in-left">
            <button
              onClick={() => navigate("/")}
              className="text-3xl md:text-4xl font-normal text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer hover-scale"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Niloy Chandra Sarker
            </button>
          </div>

          {/* Center: Spacing */}
          <div className="grow"></div>

          {/* Right: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {visibleItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-600 to-blue-600 transform transition-transform duration-300 ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            ))}

            {/* More Dropdown for Desktop */}
            {showMoreMenu && dropdownItems.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg flex items-center group ${
                    dropdownItems.some((item) => item.id === activeSection)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  More
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-600 to-blue-600 transform transition-transform duration-300 ${
                      dropdownItems.some((item) => item.id === activeSection)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 ring-1 ring-black dark:ring-gray-700 ring-opacity-5 animate-fade-in">
                    {dropdownItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          activeSection === item.id
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
