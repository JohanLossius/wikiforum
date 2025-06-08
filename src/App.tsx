import { useColorMode } from './colorModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingPageCards from './components/LandingPageCards';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  const { colorMode } = useColorMode();

 useEffect(() => {
    document.documentElement.classList.remove('dark', 'read');
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (colorMode === 'read') {
      document.documentElement.classList.add('read');
    }
  }, [colorMode]);


  return (
    <>
      <Navbar />
      <Hero />
      <LandingPageCards />
      <Footer />
    </>
  );
}


export default App;