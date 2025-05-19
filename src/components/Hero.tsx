import { useState } from 'react';
import HeroImage from '../assets/HeroImage.png';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  showSearch?: boolean;
}

const Hero = ({
  title = "Velkommen",
  subtitle = "Hva kan vi hjelpe deg med?",
  imageUrl,
  showSearch = true,
}: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Søker etter:', searchQuery);
  };

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl || HeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="relative h-[400px] w-full" style={backgroundStyle}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 py-8">
        <h1 className="text-5xl font-extrabold mb-2">{title}</h1>
        <p className="text-base mb-4">{subtitle}</p>

        {showSearch && (
          <form onSubmit={handleSearch} className="w-full max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søk her..."
              className="w-full px-4 py-2 rounded-md text-black"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Hero;