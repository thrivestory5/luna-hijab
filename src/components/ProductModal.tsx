import React, { useState, useEffect } from 'react';
import { X, Heart, Check } from 'lucide-react';
import { BRAND_ASSETS, Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  onAddToCart: (product: Product, variant: string, size: string, image: string) => void;
}

const SIZES = ['S', 'M', 'L', 'XL', 'All Size'];

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('All Size');
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    setSelectedGalleryIdx(0);
  }, [product?.id]);

  if (!product) return null;

  const activeImage = product.gallery[selectedGalleryIdx] || product.gallery[0];
  const hasColorOptions = Boolean(product.colorOptions && product.colorOptions.length > 0);
  const activeColorOption = hasColorOptions
    ? product.colorOptions.find((opt) => opt.indices.includes(selectedGalleryIdx)) ||
      product.colorOptions[0]
    : null;

  const activeVariantLabel = activeColorOption ? activeColorOption.name : activeImage.variant;

  const handleAdd = () => {
    onAddToCart(product, activeVariantLabel, selectedSize, activeImage.card);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Luna Indonesia, saya ingin memesan:\n\n` +
      `• Koleksi: ${product.rawName} (${product.brand})\n` +
      (activeColorOption ? `• Warna: ${activeColorOption.name}\n` : '') +
      `• Ukuran: ${selectedSize}\n` +
      `• Harga: ${product.formattedPrice}\n\n` +
      `Mohon informasi ketersediaan. Terima kasih.`
  );

  return (
    <div
      className="fixed inset-0 z-[105] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-obsidian/50 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white text-obsidian border border-obsidian/10 shadow-2xl grid grid-cols-1 md:grid-cols-12"
      >
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full bg-alabaster flex items-center justify-center text-obsidian/70 hover:text-obsidian transition-colors"
        >
          <X className="w-4 h-4 stroke-[1.25]" />
        </button>

        {/* Left Portrait & Circular Photo Thumbnails (6 cols) */}
        <div className="md:col-span-6 bg-alabaster p-5 sm:p-6 flex flex-col justify-between">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-travertine">
            <img
              key={activeImage.full || activeImage.card}
              src={activeImage.full || activeImage.card}
              alt={`${product.rawName} - ${activeVariantLabel}`}
              className="w-full h-full object-cover object-top animate-fadeIn"
            />
            <div className="absolute top-3.5 left-3.5 pointer-events-none">
              <span className="inline-block px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-xs text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-obsidian shadow-xs">
                {product.brand.toUpperCase()} ATELIER
              </span>
            </div>
          </div>

          {product.gallery.length > 1 && (
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-taupe mb-2.5">
                {activeColorOption
                  ? `${activeColorOption.name.toUpperCase()} — PHOTO ${selectedGalleryIdx + 1} OF ${product.gallery.length}`
                  : `PHOTO ${selectedGalleryIdx + 1} OF ${product.gallery.length}`}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {product.gallery.map((item, idx) => (
                  <button
                    key={`${item.id}-${idx}`}
                    type="button"
                    onClick={() => setSelectedGalleryIdx(idx)}
                    className={`w-9 h-9 rounded-full overflow-hidden shrink-0 border transition-all ${
                      selectedGalleryIdx === idx
                        ? 'border-obsidian ring-1 ring-obsidian scale-105 opacity-100'
                        : 'border-obsidian/15 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.thumb}
                      alt={item.variant}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Clean Details (6 cols) */}
        <div className="md:col-span-6 p-6 sm:p-8 md:p-9 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-5">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-champagne">
                {product.brand.toUpperCase()} ATELIER — {product.sku}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-obsidian mt-1">
                {product.rawName}
              </h2>
              <p className="font-serif text-xl font-semibold text-obsidian mt-2">
                {product.formattedPrice}
              </p>
            </div>

            <p className="text-xs text-taupe font-light leading-relaxed border-t border-b border-obsidian/10 py-3.5">
              {activeColorOption ? `${activeColorOption.name} — ` : ''}
              {product.fabric.trim()}. Designed for fluid movement, breathable comfort, and
              timeless modest elegance. Includes complimentary nationwide delivery.
            </p>

            {/* Colour Selector — Only shown if the product actually has colour options */}
            {hasColorOptions && activeColorOption && (
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-taupe">COLOUR</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-obsidian font-medium">
                    {activeColorOption.name}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.colorOptions.map((opt) => {
                    const isSelected = activeColorOption.name === opt.name;
                    const optThumb = product.gallery[opt.imageIndex]?.thumb;
                    return (
                      <button
                        key={opt.name}
                        type="button"
                        onClick={() => setSelectedGalleryIdx(opt.imageIndex)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] border transition-all ${
                          isSelected
                            ? 'border-obsidian bg-obsidian text-alabaster shadow-xs'
                            : 'border-obsidian/15 bg-alabaster/50 text-obsidian hover:border-obsidian/50'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0 overflow-hidden"
                          style={{ backgroundColor: opt.hex }}
                        >
                          {optThumb && (
                            <img
                              src={optThumb}
                              alt={opt.name}
                              className="w-full h-full object-cover object-top opacity-85"
                            />
                          )}
                        </span>
                        <span className="tracking-wide">{opt.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector + Always-Visible Size Guide */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] uppercase tracking-[0.24em] text-taupe">SIZE</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  SIZE GUIDE (CM)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {SIZES.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 rounded-lg text-xs uppercase tracking-[0.18em] border transition-colors ${
                      selectedSize === sz
                        ? 'border-obsidian bg-obsidian text-alabaster'
                        : 'border-obsidian/20 text-obsidian hover:border-obsidian'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {/* Always-Visible Size Guide Box */}
              <div className="mt-3.5 p-4 rounded-xl bg-alabaster text-[11px] space-y-1.5 font-light border border-obsidian/[0.06]">
                <div className="grid grid-cols-3 text-taupe uppercase tracking-wider pb-1.5 border-b border-obsidian/10">
                  <span>SIZE</span>
                  <span>BUST (LD)</span>
                  <span>LENGTH (PB)</span>
                </div>
                <div
                  className={`grid grid-cols-3 pt-1 ${
                    selectedSize === 'S' || selectedSize === 'M'
                      ? 'text-obsidian font-medium'
                      : 'text-obsidian/75'
                  }`}
                >
                  <span>S / M</span>
                  <span>96–100 cm</span>
                  <span>138 cm</span>
                </div>
                <div
                  className={`grid grid-cols-3 ${
                    selectedSize === 'L' || selectedSize === 'XL'
                      ? 'text-obsidian font-medium'
                      : 'text-obsidian/75'
                  }`}
                >
                  <span>L / XL</span>
                  <span>106–112 cm</span>
                  <span>140 cm</span>
                </div>
                <div
                  className={`grid grid-cols-3 ${
                    selectedSize === 'All Size' ? 'text-obsidian font-medium' : 'text-obsidian/75'
                  }`}
                >
                  <span>All Size</span>
                  <span>108 cm</span>
                  <span>140 cm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2.5 pt-2">
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 rounded-xl bg-brass text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-obsidian transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                {addedFeedback ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <span>Add to Bag</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                aria-label="Save to wishlist"
                className="px-4 rounded-xl border border-obsidian/20 hover:border-obsidian flex items-center justify-center transition-colors"
              >
                <Heart
                  className={`w-4 h-4 stroke-[1.25] ${isWishlisted ? 'fill-obsidian' : ''}`}
                />
              </button>
            </div>

            <a
              href={`${BRAND_ASSETS.whatsappConcierge}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3.5 px-6 rounded-xl border border-obsidian/25 text-center text-[11px] uppercase tracking-[0.24em] text-obsidian hover:border-obsidian transition-colors"
            >
              Order via WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
