import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

interface AtelierHousesProps {
  onSelectHouse: (brand: string) => void;
  onNavigate?: (path: string) => void;
}

interface HouseItem {
  id: string;
  name: string;
  images: string[];
  tintColor: string;
  alt: string;
  baseIntervalMs: number;
}

const HOUSES: HouseItem[] = [
  {
    id: 'Luna',
    name: 'Luna',
    images: [
      'https://lunahijab.co.id/wp-content/uploads/2026/06/K-scaled.jpg',
      'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-scaled.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-scaled.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E.png',
    ],
    tintColor: '#838271',
    alt: 'Luna Haute Modest Couture',
    baseIntervalMs: 4400,
  },
  {
    id: 'Kemayu',
    name: 'Kemayu',
    images: [
      'https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AURELLIA-1-B.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630-768x768.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629-768x768.png',
      'https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749-768x769.png',
    ],
    tintColor: '#9b938e',
    alt: 'Kemayu Heritage Nusantara Weave',
    baseIntervalMs: 5100,
  },
  {
    id: 'GZ',
    name: 'GZ',
    images: [
      'https://lunahijab.co.id/wp-content/uploads/2026/06/C5-scaled.jpg',
      'https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707.jpg',
      'https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924.jpg',
      'https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239-768x768.jpg',
      'https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796-768x768.jpg',
    ],
    tintColor: '#d3cbc5',
    alt: 'GZ Architectural Tailoring Ensembles',
    baseIntervalMs: 4700,
  },
];

interface HousePanelProps {
  house: HouseItem;
  onChoose: (brand: string) => void;
}

const HousePanel: React.FC<HousePanelProps> = ({ house, onChoose }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const nextRandomSlide = useCallback(() => {
    setActiveIdx((prev) => {
      const len = house.images.length;
      if (len <= 1) return 0;
      // Pick a random next image distinct from the current one
      const offset = 1 + Math.floor(Math.random() * (len - 1));
      return (prev + offset) % len;
    });
  }, [house.images.length]);

  useEffect(() => {
    if (isHovered) return;

    // Organic random timing jitter around base interval (± 600ms)
    const randomJitter = Math.floor(Math.random() * 1200) - 600;
    const duration = Math.max(3200, house.baseIntervalMs + randomJitter);

    timerRef.current = window.setTimeout(() => {
      nextRandomSlide();
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIdx, isHovered, house.baseIntervalMs, nextRandomSlide]);

  return (
    <article
      onClick={() => onChoose(house.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onChoose(house.id);
        }
      }}
      className="group relative cursor-pointer overflow-hidden min-h-[440px] sm:min-h-[520px] md:min-h-[750px] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center focus:outline-none"
    >
      {/* Background Slides with Silky Crossfade */}
      {house.images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`${house.name} Editorial ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
            idx === activeIdx
              ? 'opacity-100 scale-100 group-hover:scale-105'
              : 'opacity-0 pointer-events-none scale-102'
          }`}
        />
      ))}

      {/* Tint Overlay (matching original dim ratio + gradient) */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-40 pointer-events-none"
        style={{ backgroundColor: house.tintColor }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35 transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/30 pointer-events-none" />

      {/* Centered Brand Name & Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none">
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
  );
};

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
      {/* 3-Column Edge-to-Edge Full Bleed Section matching lunahijab.co.id with multi-photo random slideshow */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
        {HOUSES.map((house) => (
          <HousePanel
            key={house.id}
            house={house}
            onChoose={handleChoose}
          />
        ))}
      </div>
    </section>
  );
};

export default AtelierHouses;
