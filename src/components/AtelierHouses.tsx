import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AtelierHousesProps {
  onSelectHouse: (brand: string) => void;
  onNavigate?: (path: string) => void;
}

interface HouseItem {
  id: string;
  name: string;
  image: string;
  tintColor: string;
  alt: string;
}

const HOUSES: HouseItem[] = [
  {
    id: 'Luna',
    name: 'Luna',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/06/K-scaled.jpg',
    tintColor: '#838271',
    alt: 'Luna Couture Collection',
  },
  {
    id: 'Kemayu',
    name: 'Kemayu',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AURELLIA-1-B.png',
    tintColor: '#9b938e',
    alt: 'Kemayu Heritage Collection',
  },
  {
    id: 'GZ',
    name: 'GZ',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/06/C5-scaled.jpg',
    tintColor: '#d3cbc5',
    alt: 'GZ Architectural Tailoring Collection',
  },
];

export const AtelierHouses: React.FC<AtelierHousesProps> = ({ onSelectHouse, onNavigate }) => {
  const handleChoose = (brand: string) => {
    onSelectHouse(brand);
    if (onNavigate) {
      onNavigate('/katalog');
    } else {
      const archive = document.getElementById('collection-archive');
      if (archive) {
        archive.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="atelier-houses" className="w-full relative overflow-hidden bg-obsidian">
      {/* 3-Column Edge-to-Edge Full Bleed Section matching lunahijab.co.id */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
        {HOUSES.map((house) => (
          <article
            key={house.id}
            onClick={() => handleChoose(house.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleChoose(house.id);
              }
            }}
            className="group relative cursor-pointer overflow-hidden min-h-[440px] sm:min-h-[520px] md:min-h-[750px] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center focus:outline-none"
          >
            {/* Background Image */}
            <img
              src={house.image}
              alt={house.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Tint Overlay (matching original dim ratio + gradient) */}
            <div
              className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-40"
              style={{ backgroundColor: house.tintColor }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 transition-opacity duration-500 group-hover:from-black/75 group-hover:via-black/30" />

            {/* Centered Brand Name & Cue */}
            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold sm:font-bold tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-105">
                {house.name}
              </h2>

              {/* Elegant Interactive Hover Cue */}
              <span className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-white opacity-90 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <span>Jelajahi {house.name}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AtelierHouses;
