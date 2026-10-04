import React, { useMemo, useState } from 'react';
import { Search, Heart, X, SlidersHorizontal, ArrowLeft, Sparkles, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface KatalogPageProps {
  products: Product[];
  activeBrand: string;
  onSelectBrand: (brand: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, variantName: string, image: string) => void;
  onNavigate: (path: string) => void;
}

const getCategoryTag = (product: Product): string => {
  if (product.isCoutureReserve) return 'COUTURE TULLE & VEIL';
  if (product.brand === 'Luna') return 'SIGNATURE SILK & VOILE';
  if (product.brand === 'Kemayu') return 'HERITAGE BOTANICAL WEAVE';
  return 'ARCHITECTURAL TAILORING';
};

export const KatalogPage: React.FC<KatalogPageProps> = ({
  products,
  activeBrand,
  onSelectBrand,
  searchQuery,
  onSearchChange,
  wishlist,
  onToggleWishlist,
  onSelectProduct,
  onQuickAdd,
  onNavigate,
}) => {
  const [sortBy, setSortBy] = useState<'curated' | 'price-asc' | 'price-desc'>('curated');
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [activeVariantIdx, setActiveVariantIdx] = useState<Record<number, number>>({});
  const [expandedSwatches, setExpandedSwatches] = useState<Record<number, boolean>>({});

  const brandCounts = useMemo(() => {
    return {
      all: products.length,
      luna: products.filter((p) => p.brand === 'Luna').length,
      kemayu: products.filter((p) => p.brand === 'Kemayu').length,
      gz: products.filter((p) => p.brand === 'GZ').length,
      wishlist: wishlist.length,
    };
  }, [products, wishlist]);

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
          p.brand.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
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

  const handleResetFilters = () => {
    onSelectBrand('ALL');
    onSearchChange('');
    setSortBy('curated');
  };

  return (
    <div className="pt-6 pb-24 md:pt-8 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 space-y-10 md:space-y-14">
        {/* Breadcrumb + Header Banner */}
        <div className="rounded-3xl bg-white border border-obsidian/[0.08] shadow-[0_8px_32px_rgba(28,24,21,0.04)] p-6 sm:p-10 md:p-14">
          <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-taupe mb-5">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 hover:text-obsidian transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Beranda</span>
            </button>
            <span>/</span>
            <span className="text-obsidian font-medium">Katalog Koleksi</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-alabaster border border-champagne/30 text-[10px] font-medium uppercase tracking-[0.24em] text-brass">
                <Sparkles className="w-3 h-3 text-champagne" />
                <span>MAISON LUNA INDONESIA — THE COMPLETE ARCHIVE</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-obsidian tracking-tight leading-[1.08]">
                Katalog Koleksi <br />
                <em className="italic font-light text-brass">Busana Modest Couture.</em>
              </h1>
              <p className="text-xs sm:text-sm text-taupe font-light leading-relaxed">
                Jelajahi {products.length} karya busana modest couture eksklusif dengan material terbaik
                dan desain timeless across tiga rumah mode:{' '}
                <strong className="font-medium text-obsidian">Luna Couture</strong>,{' '}
                <strong className="font-medium text-obsidian">Kemayu Heritage</strong>, dan{' '}
                <strong className="font-medium text-obsidian">GZ Tailoring</strong>.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-obsidian/10">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">
                  {brandCounts.all}
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Total Pieces
                </p>
              </div>
              <div className="w-px h-10 bg-obsidian/10" />
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-brass">
                  03
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Atelier Houses
                </p>
              </div>
              <div className="w-px h-10 bg-obsidian/10" />
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-obsidian">
                  100%
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-taupe mt-0.5">
                  Authentic Kudus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar + Controls Card */}
        <div className="rounded-2xl bg-white border border-obsidian/[0.08] p-5 sm:p-7 shadow-[0_4px_24px_rgba(28,24,21,0.03)] space-y-5">
          {/* Brand Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: `Semua Koleksi (${brandCounts.all})` },
              { id: 'Luna', label: `Luna Couture (${brandCounts.luna})` },
              { id: 'Kemayu', label: `Kemayu Heritage (${brandCounts.kemayu})` },
              { id: 'GZ', label: `GZ Tailoring (${brandCounts.gz})` },
              { id: 'WISHLIST', label: `Saved Wishlist (${brandCounts.wishlist})` },
            ].map((tab) => {
              const active = activeBrand === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectBrand(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    active
                      ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                      : 'bg-alabaster text-obsidian/70 hover:text-obsidian hover:bg-travertine'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input & Sort Dropdown Row */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-obsidian/10">
            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari nama model, kode produk, atau bahan..."
                className="w-full pl-9 pr-9 py-2.5 rounded-full bg-alabaster border border-obsidian/15 text-xs text-obsidian placeholder:text-taupe/70 focus:outline-none focus:border-obsidian transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-obsidian transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Counter */}
            <div className="flex items-center justify-between md:justify-end gap-4">
              <p className="text-xs text-taupe font-light">
                Menampilkan{' '}
                <strong className="font-medium text-obsidian">
                  {filteredProducts.length}
                </strong>{' '}
                produk
              </p>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-taupe hidden sm:inline-block" />
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as 'curated' | 'price-asc' | 'price-desc')
                  }
                  className="px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 text-xs text-obsidian focus:outline-none focus:border-obsidian cursor-pointer"
                >
                  <option value="curated">Kurasi Koleksi (Default)</option>
                  <option value="price-asc">Harga: Rendah ke Tinggi</option>
                  <option value="price-desc">Harga: Tinggi ke Rendah</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(activeBrand !== 'ALL' || searchQuery.trim() !== '') && (
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">Filter Aktif:</span>
              {activeBrand !== 'ALL' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-[11px]">
                  <span>Rumah Mode: {activeBrand}</span>
                  <button
                    type="button"
                    onClick={() => onSelectBrand('ALL')}
                    className="hover:text-obsidian"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery.trim() !== '' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brass/10 border border-brass/30 text-brass text-[11px]">
                  <span>Cari: &ldquo;{searchQuery}&rdquo;</span>
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="hover:text-obsidian"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[11px] underline text-taupe hover:text-obsidian ml-1 transition-colors"
              >
                Reset Semua
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
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
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-travertine">
                    <img
                      src={currentImageObj.card}
                      alt={`${product.rawName} - ${currentImageObj.variant}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-[1.04]"
                    />

                    {/* Brand Pill */}
                    <div className="absolute top-3.5 left-3.5 pointer-events-none">
                      <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                        {product.brand.toUpperCase()} ATELIER
                      </span>
                    </div>

                    {/* Wishlist Button */}
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

                  {/* Product Details Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] text-champagne">
                        {getCategoryTag(product)}
                      </p>

                      <h3 className="font-sans font-bold text-base sm:text-lg leading-snug text-obsidian mt-1 uppercase tracking-wide group-hover:text-brass transition-colors">
                        {product.rawName}
                      </h3>

                      <p className="text-[11.5px] text-taupe font-light mt-1 line-clamp-1">
                        {currentImageObj.variant} — {product.fabric.trim()}
                      </p>

                      {/* Color Swatches */}
                      {product.gallery.length > 1 && (
                        <div
                          className="mt-3.5 flex flex-wrap items-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {visibleSwatches.map((g, gIdx) => (
                            <button
                              key={g.id || gIdx}
                              type="button"
                              onMouseEnter={(e) =>
                                handleCardVariantChange(e, product.id, gIdx)
                              }
                              onClick={(e) =>
                                handleCardVariantChange(e, product.id, gIdx)
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
                              onClick={(e) => toggleExpandSwatches(e, product.id)}
                              className="text-[11px] font-normal text-taupe hover:text-obsidian pl-1 transition-colors"
                            >
                              +{remainingCount}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Price and Action Row */}
                    <div className="mt-4 pt-3.5 border-t border-obsidian/10 flex items-center justify-between">
                      <span className="font-sans font-bold text-[1.05rem] tracking-tight text-obsidian">
                        {product.formattedPrice}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickAdd(product, currentImageObj.variant, currentImageObj.card);
                          }}
                          title="Tambah ke Bag"
                          className="w-8 h-8 rounded-full bg-alabaster hover:bg-obsidian hover:text-alabaster flex items-center justify-center text-obsidian transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-[11px] font-light text-taupe group-hover:text-obsidian transition-colors inline-flex items-center gap-1">
                          <span>Detail</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="rounded-3xl bg-white border border-obsidian/[0.08] p-12 sm:p-20 text-center space-y-4 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-alabaster flex items-center justify-center mx-auto text-taupe">
              <Search className="w-7 h-7 stroke-[1.25]" />
            </div>
            <h3 className="font-serif text-2xl text-obsidian">
              Koleksi Tidak Ditemukan
            </h3>
            <p className="text-xs text-taupe max-w-md mx-auto font-light leading-relaxed">
              Tidak ada produk yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo; pada kategori yang dipilih.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-6 py-3 rounded-full bg-obsidian text-alabaster text-xs uppercase tracking-[0.2em] hover:bg-brass transition-colors shadow-xs"
              >
                Tampilkan Semua Koleksi
              </button>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {displayedProducts.length < filteredProducts.length && (
          <div className="pt-8 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-full border border-obsidian/20 bg-white text-obsidian text-xs uppercase tracking-[0.22em] hover:bg-obsidian hover:text-alabaster transition-all duration-300 shadow-xs"
            >
              Muat Koleksi Lainnya ({filteredProducts.length - displayedProducts.length} Lagi)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
