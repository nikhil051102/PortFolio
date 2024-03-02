import Navbar from "../components/common/Navbar";
import MainSection from "../components/landing/MainSection";
import ProjectSection from "../components/landing/ProjectSection";
import SkillsSection from "../components/landing/SkillSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <ProjectSection />
      <SkillsSection />
    </>
  );
};

export default HomePage;
