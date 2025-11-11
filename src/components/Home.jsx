import Hero from "./Hero";
import Education from "./Education";
import Skills from "./Skills";
import ProblemSolving from "./ProblemSolving";
import ProjectSection from "./projects/ProjectSection";
import Achievements from "./Achievements";
import Leadership from "./Leadership";
import Community from "./Community";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const scrollToHome = () => {
  const homeSection = document.querySelector("#home");
  if (homeSection) {
    window.scrollTo({
      top: homeSection.offsetTop - 80,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Home = () => {
  const [showHomeBtn, setShowHomeBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button if at the top (home section)
      if (window.scrollY < 100) setShowHomeBtn(false);
      else setShowHomeBtn(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Education />
      <Skills />
      <ProjectSection />
      <ProblemSolving />
      <Achievements />
      <Leadership />
      <Community />
      <Blog />
      <Contact />
      <Footer />
      {/* Floating Home Button - only show if not at top */}
      {showHomeBtn && (
        <button
          onClick={scrollToHome}
          className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-lg p-2 transition-all duration-200 flex items-center justify-center"
          aria-label="Go to Home"
          style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.12)" }}
        >
          {/* Upward chevron icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Home;
