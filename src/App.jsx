import { Header } from './components/header/header.jsx';
import { MainContent } from './components/mainContent/mainContent.jsx';
import { Footer } from './components/footer/footer.jsx';
import { BannerSection } from './components/bannerSection/bannerSection.jsx';
import AboutMeSection from './components/aboutMeSection/aboutMeSection.jsx';
import TechSection from './components/techSection/techSection.jsx';
import ProjectsSection from './components/projectsSection/projectsSection.jsx';

function App() {

  return (
    <>
      <Header />
      <MainContent>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
