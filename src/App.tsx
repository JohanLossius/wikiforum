import { useColorMode } from './colorModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingPageCards from './components/LandingPageCards';
import Footer from './components/Footer';

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