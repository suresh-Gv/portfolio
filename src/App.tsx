import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import LoadingScreen from './components/common/LoadingScreen';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import { AppThemeProvider } from './context/ThemeContext';

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <AppThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={handleLoadComplete} />}
      </AnimatePresence>
      {!loading && <Portfolio />}
    </AppThemeProvider>
  );
}
