// src/components/LandingPageCards.tsx
import React from 'react';
import { motion } from 'framer-motion';
import CardSection from './CardSection';
import wikiIcon from '../assets/wiki-icon.png';
import forumIcon from '../assets/forum-icon.png';
import supportIcon from '../assets/support-icon.png';

const LandingPageCards = () => {
  const cards = [
    {
      title: "WIKI",
      description: "Utforsk vår kunnskapsbase med artikler og guider",
      icon: wikiIcon,
    },
    {
      title: "FORUM",
      description: "Diskuter med andre brukere i vårt fellesskap",
      icon: forumIcon,
    },
    {
      title: "SUPPORT",
      description: "Få hjelp fra vårt supportteam når du trenger det",
      icon: supportIcon,
    }
  ];

  return (
<div className="container mx-auto px-4 transform -translate-y-16">
  <div className="flex flex-col md:flex-row gap-8 justify-center">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        className="w-[250px] scale-90 bg-[#D9D9D9] dark:bg-[#2E2C26] read:bg-[#D9D9D9] rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg"
      >
        <div className="flex flex-col h-full">
          <div className="bg-gray-200 flex items-center justify-center h-40">
            <img src={card.icon} alt={card.title + ' icon'} className="h-20 w-20 object-contain" />
          </div>
          <div className="bg-[#CC92F5] py-6 flex items-center justify-center">
            <span className="text-2xl font-bold text-black">{card.title}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Most popular cards */}
  <CardSection
    title="Most popular"
    cards={[
      {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        title: 'Community',
        subtitle: '2',
      },
      {
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
        title: 'Responsive design',
        subtitle: '',
      },
    ]}
  />

  <hr className="my-12 border-gray-300 dark:border-gray-700 w-full max-w-2xl mx-auto" />

  {/* Useful cards */}
  <CardSection
    title="Useful"
    cards={[
      {
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80',
        title: 'Cyber security',
        subtitle: '',
      },
      {
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80',
        title: 'How do I write articles?',
        subtitle: '',
      },
      {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        title: 'Career change?',
        subtitle: '',
      },
      {
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
        title: 'Rent a cabin',
        subtitle: '',
      },
    ]}
  />
</div>

  );
};

export default LandingPageCards;