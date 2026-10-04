import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { EDITORIAL_LOOKBOOK, Product } from '../data/products';

interface PinnedLookbookProps {
  products: Product[];
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onSelectProduct: (product: Product) => void;
}

export const PinnedLookbook: React.FC<PinnedLookbookProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onSelectProduct,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVariantIdx, setActiveVariantIdx] = useState<Record<string, number>>({});
  const [expandedSwatches, setExpandedSwatches] = useState<Record<string, boolean>>({});

  const findLookProduct = (productId: number, fallbackSku: string): Product | undefined => {
    return (
      products.find((p) => p.id === productId) ||
      products.find((p) => p.rawName.includes(fallbackSku)) ||
      products[0]
    );
  };

  const scrollTrack = (dir: 'prev' | 'next') => {
    if (!scrollContainerRef.current) return;
    const distance = 420;
    scrollContainerRef.current.scrollBy({
      left: dir === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="runway-lookbook"
      className="py-24 md:py-36 bg-travertine/60 border-b border-obsidian/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Clean Editorial Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe mb-2">
              SEASONAL JOURNAL
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian">
              Editorial Lookbook ’26
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTrack('prev')}
              aria-label="Previous look"
              className="w-10 h-10 rounded-full bg-white border border-obsidian/15 flex items-center justify-center text-obsidian/70 hover:text-obsidian hover:border-obsidian transition-colors"
            >
              <ChevronLeft className="w-4 h-4 stroke-[1.25]" />
            </button>
            <button
              onClick={() => scrollTrack('next')}
              aria-label="Next look"
              className="w-10 h-10 rounded-full bg-white border border-obsidian/15 flex items-center justify-center text-obsidian/70 hover:text-obsidian hover:border-obsidian transition-colors"
            >
              <ChevronRight className="w-4 h-4 stroke-[1.25]" />
            </button>
          </div>
        </div>

        {/* Horizontal Gallery Using Signature Rounded White Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-7 md:gap-8 overflow-x-auto no-scrollbar pb-4"
        >
          {EDITORIAL_LOOKBOOK.map((look) => {
            const matchedProduct = findLookProduct(look.featuredProductId, look.featuredSku);
            const isSaved = matchedProduct ? wishlist.includes(matchedProduct.id) : false;
            const selectedIdx = activeVariantIdx[look.id];
            const displayImage =
              matchedProduct && selectedIdx !== undefined && matchedProduct.gallery[selectedIdx]
                ? matchedProduct.gallery[selectedIdx].card
                : look.image;
            const isExpanded = !!expandedSwatches[look.id];
            const visibleSwatches = matchedProduct
              ? isExpanded
                ? matchedProduct.gallery
                : matchedProduct.gallery.slice(0, 5)
              : [];
            const remainingCount = matchedProduct ? matchedProduct.gallery.length - 5 : 0;

            return (
              <article
                key={look.id}
                onClick={() => matchedProduct && onSelectProduct(matchedProduct)}
                className="w-[82vw] sm:w-[340px] md:w-[360px] shrink-0 group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white border border-obsidian/[0.08] shadow-[0_4px_24px_rgba(24,22,21,0.03)] hover:shadow-[0_12px_36px_rgba(24,22,21,0.08)] transition-all duration-500"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-cashmere">
                  <img
                    src={displayImage}
                    alt={look.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-expo group-hover:scale-[1.04]"
                  />

                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                      LOOK {look.number} — ATELIER
                    </span>
                  </div>

                  {matchedProduct && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(matchedProduct.id);
                      }}
                      aria-label={`Save ${look.featuredName}`}
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-obsidian/15 hover:bg-white/90 backdrop-blur-xs flex items-center justify-center text-obsidian/80 hover:text-obsidian transition-all duration-300"
                    >
                      <Heart
                        className={`w-4 h-4 stroke-[1.4] ${
                          isSaved ? 'fill-obsidian text-obsidian' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-champagne">
                      {look.subtitle}
                    </p>
                    <h3 className="font-serif text-[1.35rem] leading-snug font-normal text-obsidian mt-1 group-hover:text-brass transition-colors">
                      {look.featuredSku} {look.featuredName.toUpperCase()}
                    </h3>
                    <p className="text-[11.5px] text-taupe font-light mt-1 line-clamp-1">
                      {look.caption}
                    </p>

                    {matchedProduct && matchedProduct.gallery.length > 1 && (
                      <div
                        className="mt-3.5 flex flex-wrap items-center gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {visibleSwatches.map((g, gIdx) => (
                          <button
                            key={`${g.id}-${gIdx}`}
                            type="button"
                            onMouseEnter={() =>
                              setActiveVariantIdx((prev) => ({ ...prev, [look.id]: gIdx }))
                            }
                            onClick={() =>
                              setActiveVariantIdx((prev) => ({ ...prev, [look.id]: gIdx }))
                            }
                            title={g.variant}
                            className={`w-6 h-6 rounded-full overflow-hidden border transition-all ${
                              (selectedIdx ?? 0) === gIdx
                                ? 'border-obsidian ring-1 ring-obsidian scale-105'
                                : 'border-obsidian/15 opacity-75 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={g.thumb}
                              alt={g.variant}
                              loading="lazy"
                              className="w-full h-full object-cover object-top"
                            />
                          </button>
                        ))}
                        {remainingCount > 0 && !isExpanded && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedSwatches((prev) => ({ ...prev, [look.id]: true }))
                            }
                            className="text-[11px] text-taupe hover:text-obsidian pl-1"
                          >
                            +{remainingCount}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-obsidian/10 flex items-center justify-between">
                    <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-obsidian">
                      {look.featuredPrice}
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
    </section>
  );
};
