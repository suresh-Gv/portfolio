import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import { AppThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <AppThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        <Education />
        <Resume />
      </main>
      <Footer />
      <BackToTop />
    </AppThemeProvider>
  );
}
