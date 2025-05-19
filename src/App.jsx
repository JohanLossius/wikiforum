// src/App.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingPageCards from './components/LandingPageCards';
import Footer from './components/Footer';
import { useColorMode } from './colorModeContext';

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className={colorMode === 'dark' ? 'dark' : colorMode === 'read' ? 'read' : ''}>
      <Navbar />
      <Hero />
      <LandingPageCards />
      <Footer />
    </div>
  );
}

export default App;