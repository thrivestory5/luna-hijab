import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS, Product } from '../data/products';

interface HeroSectionProps {
  featuredProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onExploreArchive: () => void;
  onExploreLookbook: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredProducts,
  onSelectProduct,
  onExploreArchive,
  onExploreLookbook,
}) => {

  return (
    <section id="top" className="pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 space-y-20 md:space-y-28">
        {/* PART 1: Split Editorial Flagship Banner */}
        <div className="rounded-3xl bg-white border border-obsidian/[0.08] shadow-[0_12px_48px_rgba(28,24,21,0.05)] p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Column (6 cols) */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-alabaster border border-champagne/30 text-[10px] font-medium uppercase tracking-[0.24em] text-brass">
              <Sparkles className="w-3 h-3 text-champagne" />
              <span>MAISON LUNA INDONESIA — 2026 COLLECTION</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-[4.15rem] font-normal tracking-tight leading-[1.06] text-obsidian">
              Timeless Modesty, <br />
              <em className="italic font-light text-brass">Crafted in Silk &amp; Grace.</em>
            </h1>

            <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed max-w-lg">
              “Koleksi eksklusif dengan bahan terbaik dan desain timeless untuk semua usia.”
              Discover signature modest couture across our three houses:{' '}
              <strong className="font-medium text-obsidian">Luna</strong>,{' '}
              <strong className="font-medium text-obsidian">Kemayu</strong>, and{' '}
              <strong className="font-medium text-obsidian">GZ</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreArchive}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-brass transition-all duration-300 shadow-md"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-champagne" />
              </button>

              <button
                onClick={onExploreLookbook}
                className="px-7 py-4 rounded-full bg-alabaster border border-obsidian/15 text-obsidian text-[11px] uppercase tracking-[0.22em] hover:border-obsidian transition-colors"
              >
                Editorial Lookbook
              </button>
            </div>

            <div className="pt-6 border-t border-obsidian/10 grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">72+</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Exclusive Pieces
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">03</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Signature Houses
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">VIP</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Atelier Concierge
                </p>
              </div>
            </div>
          </div>

          {/* Right Layered Rounded Campaign Portraits (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 sm:gap-6 items-center">
            {/* Primary Campaign Card */}
            <div
              onClick={() => featuredProducts[0] && onSelectProduct(featuredProducts[0])}
              className="col-span-7 group cursor-pointer rounded-2xl overflow-hidden bg-alabaster border border-obsidian/[0.08] shadow-md"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                <img
                  src={featuredProducts[0]?.primaryImage || BRAND_ASSETS.editorialHero1}
                  alt={featuredProducts[0]?.rawName || 'Luna Signature Campaign'}
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-sm bg-white/95 text-[8.5px] font-medium uppercase tracking-[0.18em] text-obsidian">
                    LUNA ATELIER
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-champagne">
                  AUTUMN / WINTER ’26
                </p>
                <h2 className="font-sans font-bold text-base md:text-lg text-obsidian mt-0.5 uppercase tracking-wide">
                  {featuredProducts[0]?.rawName || 'Luna Signature'}
                </h2>
                <div className="mt-2.5 pt-2.5 border-t border-obsidian/10 flex items-center justify-between text-[11px]">
                  <span className="font-sans font-bold text-sm text-obsidian tracking-tight">
                    {featuredProducts[0]?.formattedPrice || 'Atelier Collection'}
                  </span>
                  <span className="text-taupe group-hover:text-obsidian">Detail →</span>
                </div>
              </div>
            </div>

            {/* Secondary Campaign Card + Guarantee Pill */}
            <div className="col-span-5 space-y-4 sm:space-y-6">
              <div
                onClick={() => featuredProducts[1] && onSelectProduct(featuredProducts[1])}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-alabaster border border-obsidian/[0.08] shadow-md"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                  <img
                    src={featuredProducts[1]?.primaryImage || BRAND_ASSETS.editorialHero2}
                    alt={featuredProducts[1]?.rawName || 'Luna Couture Campaign'}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-sm bg-white/95 text-[8px] font-medium uppercase tracking-[0.18em] text-obsidian">
                      LUNA COUTURE
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-white">
                  <p className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-champagne">
                    SIGNATURE SERIES
                  </p>
                  <h2 className="font-sans font-bold text-sm md:text-base text-obsidian mt-0.5 uppercase tracking-wide">
                    {featuredProducts[1]?.rawName || 'Luna Reserve'}
                  </h2>
                  <div className="mt-2 pt-2 border-t border-obsidian/10 flex items-center justify-between text-[10.5px]">
                    <span className="font-sans font-bold text-xs sm:text-sm text-obsidian tracking-tight">
                      {featuredProducts[1]?.formattedPrice || 'Atelier Reserve'}
                    </span>
                    <span className="text-taupe group-hover:text-obsidian">Detail →</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-alabaster border border-champagne/30 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                <p className="text-[11px] text-obsidian/75 leading-relaxed font-light">
                  Handcrafted in our <strong className="font-medium text-obsidian">Kudus</strong>{' '}
                  atelier with breathable premium linings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
