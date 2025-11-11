import "./App.css";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";
import ProjectSection from "./components/projects/ProjectSection";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top on route change, and remove hash from URL
    if (location.pathname === "/" && location.hash) {
      // Remove hash from URL on home page refresh
      window.history.replaceState(null, "", "/");
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
