import React, { useState } from 'react';
import { Heart, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS, Product } from '../data/products';

interface HeroSectionProps {
  featuredProducts: Product[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onSelectProduct: (product: Product) => void;
  onExploreArchive: () => void;
  onExploreLookbook: () => void;
}

const getCategoryTag = (product: Product): string => {
  if (product.isCoutureReserve) return 'COUTURE TULLE & VEIL';
  if (product.brand === 'Luna') return 'SIGNATURE SILK & VOILE';
  if (product.brand === 'Kemayu') return 'HERITAGE BOTANICAL WEAVE';
  return 'ARCHITECTURAL TAILORING';
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredProducts,
  wishlist,
  onToggleWishlist,
  onSelectProduct,
  onExploreArchive,
  onExploreLookbook,
}) => {
  const [activeVariantIdx, setActiveVariantIdx] = useState<Record<number, number>>({});
  const [expandedSwatches, setExpandedSwatches] = useState<Record<number, boolean>>({});

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
                <span>Shop Collection</span>
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
                  src={BRAND_ASSETS.editorialHero1}
                  alt="Luna Signature Campaign"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-sm bg-white/95 text-[8.5px] font-medium uppercase tracking-[0.18em] text-obsidian">
                    LUNA CAMPAIGN
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-champagne">
                  AUTUMN / WINTER ’26
                </p>
                <h2 className="font-serif text-lg text-obsidian mt-0.5">Luna Signature</h2>
                <div className="mt-2.5 pt-2.5 border-t border-obsidian/10 flex items-center justify-between text-[11px]">
                  <span className="font-serif font-semibold text-obsidian">41 Pieces</span>
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
                    src={BRAND_ASSETS.editorialHero2}
                    alt="Kemayu Editorial Campaign"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-sm bg-white/95 text-[8px] font-medium uppercase tracking-[0.18em] text-obsidian">
                      KEMAYU
                    </span>
                  </div>
                </div>
                <div className="p-3.5 bg-white">
                  <p className="text-[8.5px] font-medium uppercase tracking-[0.18em] text-champagne">
                    HERITAGE LINE
                  </p>
                  <h2 className="font-serif text-base text-obsidian mt-0.5">Kemayu Series</h2>
                  <div className="mt-2 pt-2 border-t border-obsidian/10 flex items-center justify-between text-[10.5px]">
                    <span className="font-serif font-semibold text-obsidian">10 Pieces</span>
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

        {/* PART 2: "Latest Collection" 4-Card Spotlight (Matching Reference Image 1 & 2) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne mb-1.5">
                NEW ARRIVALS &amp; PRE-ORDER
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-obsidian">
                Latest Collection
              </h2>
            </div>
            <button
              onClick={onExploreArchive}
              className="text-xs uppercase tracking-[0.22em] text-obsidian/70 hover:text-obsidian border-b border-obsidian/25 pb-1 self-start sm:self-auto transition-colors"
            >
              View All 72 Pieces →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {featuredProducts.map((product) => {
              const selectedGalleryIndex = activeVariantIdx[product.id] ?? 0;
              const currentImageObj =
                product.gallery[selectedGalleryIndex] || product.gallery[0];
              const isSaved = wishlist.includes(product.id);
              const isExpanded = !!expandedSwatches[product.id];
              const visibleSwatches = isExpanded
                ? product.gallery
                : product.gallery.slice(0, 5);
              const remainingCount = product.gallery.length - 5;

              return (
                <article
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white border border-obsidian/[0.08] shadow-[0_4px_24px_rgba(24,22,21,0.03)] hover:shadow-[0_12px_36px_rgba(24,22,21,0.08)] transition-all duration-500"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                    <img
                      src={currentImageObj.card}
                      alt={`${product.rawName} - ${currentImageObj.variant}`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                    />

                    <div className="absolute top-3.5 left-3.5 pointer-events-none">
                      <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                        {product.brand.toUpperCase()} ATELIER
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      aria-label={`Save ${product.rawName}`}
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-obsidian/15 hover:bg-white/90 backdrop-blur-xs flex items-center justify-center text-obsidian/80 hover:text-obsidian transition-all duration-300"
                    >
                      <Heart
                        className={`w-4 h-4 stroke-[1.4] ${
                          isSaved ? 'fill-obsidian text-obsidian' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-champagne">
                        {getCategoryTag(product)}
                      </p>

                      <h3 className="font-serif text-[1.35rem] leading-snug font-normal text-obsidian mt-1 group-hover:text-brass transition-colors">
                        {product.rawName}
                      </h3>

                      <p className="text-[11.5px] text-taupe font-light mt-1 line-clamp-1">
                        {currentImageObj.variant} — {product.fabric.trim()}
                      </p>

                      {product.gallery.length > 1 && (
                        <div
                          className="mt-3.5 flex flex-wrap items-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {visibleSwatches.map((g, gIdx) => (
                            <button
                              key={g.id || gIdx}
                              type="button"
                              onMouseEnter={() =>
                                setActiveVariantIdx((prev) => ({ ...prev, [product.id]: gIdx }))
                              }
                              onClick={() =>
                                setActiveVariantIdx((prev) => ({ ...prev, [product.id]: gIdx }))
                              }
                              title={`${g.variant} (Photo ${gIdx + 1} of ${product.gallery.length})`}
                              className={`w-6 h-6 rounded-full overflow-hidden border transition-all duration-200 ${
                                selectedGalleryIndex === gIdx
                                  ? 'border-obsidian ring-1 ring-obsidian scale-105 opacity-100'
                                  : 'border-obsidian/15 opacity-75 hover:opacity-100 hover:border-obsidian/50'
                              }`}
                            >
                              <img
                                src={g.thumb}
                                alt={g.variant}
                                className="w-full h-full object-cover object-top"
                              />
                            </button>
                          ))}

                          {remainingCount > 0 && !isExpanded && (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedSwatches((prev) => ({ ...prev, [product.id]: true }))
                              }
                              className="text-[11px] font-normal text-taupe hover:text-obsidian pl-1 transition-colors"
                            >
                              +{remainingCount}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-obsidian/10 flex items-center justify-between">
                      <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-obsidian">
                        {product.formattedPrice}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
