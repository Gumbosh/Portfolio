import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layouts/MainLayout";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainLayout>
        <AboutMeSection />
        <ProjectsSection />
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
