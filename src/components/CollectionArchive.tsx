import React, { useMemo, useState } from 'react';
import { Search, Heart, X, SlidersHorizontal } from 'lucide-react';
import { Product } from '../data/products';

interface CollectionArchiveProps {
  products: Product[];
  activeBrand: string;
  onSelectBrand: (brand: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, variantName: string, image: string) => void;
}

const getCategoryTag = (product: Product): string => {
  if (product.isCoutureReserve) return 'COUTURE TULLE & VEIL';
  if (product.brand === 'Luna') return 'SIGNATURE SILK & VOILE';
  if (product.brand === 'Kemayu') return 'HERITAGE BOTANICAL WEAVE';
  return 'ARCHITECTURAL TAILORING';
};

export const CollectionArchive: React.FC<CollectionArchiveProps> = ({
  products,
  activeBrand,
  onSelectBrand,
  searchQuery,
  onSearchChange,
  wishlist,
  onToggleWishlist,
  onSelectProduct,
}) => {
  const [sortBy, setSortBy] = useState<'curated' | 'price-asc' | 'price-desc'>('curated');
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [activeVariantIdx, setActiveVariantIdx] = useState<Record<number, number>>({});
  const [expandedSwatches, setExpandedSwatches] = useState<Record<number, boolean>>({});

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeBrand === 'WISHLIST') {
      list = list.filter((p) => wishlist.includes(p.id));
    } else if (activeBrand === 'RESERVE') {
      list = list.filter((p) => p.isCoutureReserve);
    } else if (activeBrand !== 'ALL') {
      list = list.filter((p) => p.brand.toLowerCase() === activeBrand.toLowerCase());
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.rawName.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, activeBrand, searchQuery, sortBy, wishlist]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleCardVariantChange = (
    e: React.MouseEvent,
    productId: number,
    galleryIdx: number
  ) => {
    e.stopPropagation();
    setActiveVariantIdx((prev) => ({ ...prev, [productId]: galleryIdx }));
  };

  const toggleExpandSwatches = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    setExpandedSwatches((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <section id="collection-archive" className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne mb-1.5">
              COMPLETE CATALOGUE
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-obsidian">
              The Atelier Archive
            </h2>
          </div>
          <p className="text-xs text-taupe font-light max-w-sm leading-relaxed">
            Explore all {products.length} pieces across Luna, Kemayu, and GZ. Hover or click the
            circular photo swatches on each item to preview every colorway.
          </p>
        </div>

        {/* Rounded Filter & Search Control Bar */}
        <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* Pill Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {[
              { id: 'ALL', label: 'All Pieces', count: products.length },
              {
                id: 'Luna',
                label: 'Luna',
                count: products.filter((p) => p.brand === 'Luna').length,
              },
              {
                id: 'Kemayu',
                label: 'Kemayu',
                count: products.filter((p) => p.brand === 'Kemayu').length,
              },
              {
                id: 'GZ',
                label: 'GZ',
                count: products.filter((p) => p.brand === 'GZ').length,
              },
              {
                id: 'RESERVE',
                label: 'Couture Reserve',
                count: products.filter((p) => p.isCoutureReserve).length,
              },
              {
                id: 'WISHLIST',
                label: 'Saved',
                count: wishlist.length,
              },
            ].map((tab) => {
              const active = activeBrand === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onSelectBrand(tab.id);
                    setVisibleCount(16);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all ${
                    active
                      ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                      : 'bg-alabaster text-obsidian/65 hover:text-obsidian'
                  }`}
                >
                  {tab.label}{' '}
                  <span
                    className={`text-[10px] ml-1 ${
                      active ? 'text-champagne' : 'text-taupe'
                    }`}
                  >
                    ({tab.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Pills */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2 stroke-[1.5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  setVisibleCount(24);
                }}
                placeholder="Search Kiana, Lyorna, Diora..."
                aria-label="Search collection"
                className="w-full pl-9 pr-8 py-2 rounded-full bg-alabaster border border-obsidian/10 text-xs text-obsidian placeholder:text-taupe focus:outline-none focus:border-brass font-light"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-obsidian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center px-4 py-2 rounded-full bg-alabaster border border-obsidian/10">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brass mr-2 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                aria-label="Sort collection"
                className="bg-transparent text-[11px] uppercase tracking-[0.18em] text-obsidian focus:outline-none cursor-pointer font-normal"
              >
                <option value="curated">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 px-6 text-center rounded-2xl bg-white border border-obsidian/[0.08]">
            <p className="font-serif text-2xl font-normal text-obsidian">
              No pieces match your current selection.
            </p>
            <button
              onClick={() => {
                onSelectBrand('ALL');
                onSearchChange('');
              }}
              className="mt-5 px-7 py-3 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.22em] hover:bg-brass transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Luxury Boutique Card Grid (Matching Reference Image 1 + Image 2 Photo Swatches) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
            {displayedProducts.map((product) => {
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
                  {/* Top Portrait Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                    <img
                      src={currentImageObj.card}
                      alt={`${product.rawName} - ${currentImageObj.variant}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                    />

                    {/* Top-Left White Rectangular Atelier Badge */}
                    <div className="absolute top-3.5 left-3.5 pointer-events-none">
                      <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                        {product.brand.toUpperCase()} ATELIER
                      </span>
                    </div>

                    {/* Top-Right Circular Translucent Wishlist Button */}
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

                  {/* White Card Information Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      {/* Gold Category Overline */}
                      <p className="text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-champagne">
                        {getCategoryTag(product)}
                      </p>

                      {/* Serif Product Title (e.g. G.520 LYORNA 1) */}
                      <h3 className="font-serif text-[1.35rem] leading-snug font-normal text-obsidian mt-1 group-hover:text-brass transition-colors">
                        {product.rawName}
                      </h3>

                      {/* Muted 1-Line Fabric & Shade Description */}
                      <p className="text-[11.5px] text-taupe font-light mt-1 line-clamp-1">
                        {currentImageObj.variant} — {product.fabric.trim()}
                      </p>

                      {/* Circular Photo Thumbnail Swatches for ALL Item Photos */}
                      {product.gallery.length > 1 && (
                        <div
                          className="mt-3.5 flex flex-wrap items-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {visibleSwatches.map((g, gIdx) => (
                            <button
                              key={`${g.id}-${gIdx}`}
                              type="button"
                              onMouseEnter={(e) => handleCardVariantChange(e, product.id, gIdx)}
                              onClick={(e) => handleCardVariantChange(e, product.id, gIdx)}
                              title={`${g.variant} (Photo ${gIdx + 1} of ${product.gallery.length})`}
                              aria-label={`Preview ${g.variant}`}
                              className={`w-6 h-6 rounded-full overflow-hidden border transition-all duration-200 ${
                                selectedGalleryIndex === gIdx
                                  ? 'border-obsidian ring-1 ring-obsidian scale-105 opacity-100'
                                  : 'border-obsidian/15 opacity-75 hover:opacity-100 hover:border-obsidian/50'
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
                              onClick={(e) => toggleExpandSwatches(e, product.id)}
                              title={`Show all ${product.gallery.length} photos`}
                              className="text-[11px] font-normal text-taupe hover:text-obsidian pl-1 transition-colors"
                            >
                              +{remainingCount}
                            </button>
                          )}

                          {isExpanded && product.gallery.length > 5 && (
                            <button
                              type="button"
                              onClick={(e) => toggleExpandSwatches(e, product.id)}
                              className="text-[10px] uppercase tracking-wider text-taupe hover:text-obsidian pl-1"
                            >
                              Less
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Hairline Divider + Bottom Price & Detail Row */}
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
        )}

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-16 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-taupe mb-4">
              Showing {displayedProducts.length} of {filteredProducts.length} pieces
            </p>
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="px-10 py-4 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors shadow-md"
            >
              Load More Pieces
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
