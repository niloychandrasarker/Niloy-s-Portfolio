import Hero from "./Hero";
import Education from "./Education";
import Skills from "./Skills";
import ProblemSolving from "./ProblemSolving";
import ProjectSection from "./projects/ProjectSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Education />
      <Skills />
      <ProjectSection />
      <ProblemSolving />
    </>
  );
};

export default Home;
