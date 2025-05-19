import React from 'react';

interface CardData {
  image: string;
  title: string;
  subtitle: string;
}

interface CardSectionProps {
  title: string;
  cards: CardData[];
}

const CardSection: React.FC<CardSectionProps> = ({ title, cards }) => (
  <section className="my-12">
    <h2 className={`text-xl font-semibold text-center ${['Most popular', 'Useful'].includes(title) ? 'text-2xl tracking-wide mb-6' : 'mb-2'}`}>{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto justify-items-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`bg-[#E6F7D9] ${['Most popular', 'Useful'].includes(title) ? '' : 'rounded-md'} overflow-hidden w-72 shadow-md`}
        >
          <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <div className="font-medium mb-1 text-center dark:text-[#23211B]">{card.title}</div>
            <div className="text-xs opacity-80 text-center dark:text-[#23211B]">{card.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CardSection; 