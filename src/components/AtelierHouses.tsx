import React from 'react';
import { BRAND_ASSETS } from '../data/products';

interface AtelierHousesProps {
  onSelectHouse: (brand: string) => void;
}

const HOUSES = [
  {
    id: 'Luna',
    badge: 'LUNA ATELIER',
    overline: 'SIGNATURE SILK & COUTURE RESERVE',
    title: 'HOUSE I — LUNA COUTURE',
    subtitle: 'Flowing Matte Silk Crepes, Organza Overlays & Hand-Embellished Gamis',
    priceRange: '41 Archive Pieces',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-768x1152.png',
  },
  {
    id: 'Kemayu',
    badge: 'KEMAYU ATELIER',
    overline: 'HERITAGE BOTANICAL WEAVE',
    title: 'HOUSE II — KEMAYU',
    subtitle: 'Modern Nusantara Romance & Breathable Botanical Rayon Twills',
    priceRange: '10 Archive Pieces',
    image:
      'https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748.png',
  },
  {
    id: 'GZ',
    badge: 'GZ ATELIER',
    overline: 'ARCHITECTURAL TAILORING',
    title: 'HOUSE III — GZ TAILORING',
    subtitle: 'Structured Blazers, Two-Piece Skirt Ensembles & Urban Separates',
    priceRange: '21 Archive Pieces',
    image:
      'https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707.jpg',
  },
];

export const AtelierHouses: React.FC<AtelierHousesProps> = ({ onSelectHouse }) => {
  const handleChoose = (brand: string) => {
    onSelectHouse(brand);
    const archive = document.getElementById('collection-archive');
    if (archive) {
      archive.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="atelier-houses" className="py-24 md:py-32 border-b border-obsidian/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe mb-2">THE HOUSES</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-obsidian">
              Three Expressions of Modesty
            </h2>
          </div>
          <a
            href={BRAND_ASSETS.whatsappConcierge}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.22em] text-obsidian/60 hover:text-obsidian border-b border-obsidian/20 pb-1 transition-colors self-start sm:self-auto"
          >
            Private Styling Consultation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {HOUSES.map((house) => (
            <article
              key={house.id}
              onClick={() => handleChoose(house.id)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white border border-obsidian/[0.08] shadow-[0_4px_24px_rgba(24,22,21,0.03)] hover:shadow-[0_12px_36px_rgba(24,22,21,0.08)] transition-all duration-500"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                <img
                  src={house.image}
                  alt={house.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-[1.04]"
                />
                <div className="absolute top-3.5 left-3.5 pointer-events-none">
                  <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                    {house.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-champagne">
                    {house.overline}
                  </p>
                  <h3 className="font-serif text-[1.35rem] leading-snug font-normal text-obsidian mt-1 group-hover:text-brass transition-colors">
                    {house.title}
                  </h3>
                  <p className="text-[11.5px] text-taupe font-light mt-1 line-clamp-1">
                    {house.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-obsidian/10 flex items-center justify-between">
                  <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-obsidian">
                    {house.priceRange}
                  </span>
                  <span className="text-[11px] font-light text-taupe group-hover:text-obsidian transition-colors inline-flex items-center gap-1">
                    <span>Detail</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
