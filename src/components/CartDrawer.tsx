import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { BRAND_ASSETS, Product } from '../data/products';
import { recordCheckoutOrder } from '../lib/supabase';

export interface CartItem {
  key: string;
  product: Product;
  variant: string;
  size: string;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const formattedSubtotal = `Rp ${subtotal.toLocaleString('id-ID')}`;

  const handleRecordOrder = () => {
    recordCheckoutOrder({
      items: items.map((item) => ({
        productId: item.product.id,
        sku: item.product.sku,
        name: item.product.rawName,
        variant: item.variant,
        size: item.size,
        price: item.product.price,
        quantity: item.quantity,
      })),
      totalAmount: subtotal,
      formattedTotal: formattedSubtotal,
    }).catch(() => {
      // Non-blocking telemetry
    });
  };

  const buildWhatsAppCheckoutUrl = () => {
    const lines = items.map(
      (item, idx) =>
        `${idx + 1}. ${item.product.rawName} (${item.variant}, Size: ${item.size}) x${
          item.quantity
        } — Rp ${(item.product.price * item.quantity).toLocaleString('id-ID')}`
    );
    const message =
      `Halo Luna Indonesia, saya ingin memesan:\n\n` +
      lines.join('\n') +
      `\n\nTotal: ${formattedSubtotal}\nMohon informasi pembayaran. Terima kasih.`;
    return `${BRAND_ASSETS.whatsappConcierge}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className="fixed inset-0 z-[110] bg-obsidian/45 backdrop-blur-xs flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="w-full max-w-md bg-alabaster text-obsidian h-full flex flex-col justify-between border-l border-obsidian/10 shadow-2xl"
        aria-label="Shopping Bag"
      >
        <div className="px-7 py-6 border-b border-obsidian/10 flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-[0.26em] font-normal">
            Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
          </h2>
          <button
            onClick={onClose}
            aria-label="Close bag"
            className="text-obsidian/60 hover:text-obsidian transition-colors"
          >
            <X className="w-4 h-4 stroke-[1.25]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-6 divide-y divide-obsidian/10">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <p className="font-serif text-2xl font-light text-obsidian">Your bag is empty</p>
              <p className="text-xs text-obsidian/60 font-light mt-2 max-w-xs">
                Explore our Luna, Kemayu, and GZ collections to add pieces to your bag.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} className="py-5 first:pt-0 flex gap-4">
                <img
                  src={item.image}
                  alt={item.product.rawName}
                  className="w-20 h-28 rounded-xl object-cover object-top bg-travertine shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-sans font-bold text-sm text-obsidian uppercase tracking-wide">{item.product.name}</h3>
                      <button
                        onClick={() => onRemoveItem(item.key)}
                        className="text-[10px] uppercase tracking-widest text-taupe hover:text-obsidian"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-[11px] text-taupe font-light mt-0.5">
                      {item.product.sku} • {item.variant} • {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center border border-obsidian/20">
                      <button
                        onClick={() => onUpdateQty(item.key, -1)}
                        aria-label="Decrease quantity"
                        className="p-1.5 text-obsidian/70 hover:text-obsidian"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-light">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.key, 1)}
                        aria-label="Increase quantity"
                        className="p-1.5 text-obsidian/70 hover:text-obsidian"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-sans font-bold text-xs text-obsidian tracking-tight">
                      Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-7 bg-travertine/50 border-t border-obsidian/10 space-y-5">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-obsidian/60 font-light">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between text-sm font-normal text-obsidian pt-2 border-t border-obsidian/10">
                <span className="uppercase tracking-[0.2em] text-xs">Subtotal</span>
                <span>{formattedSubtotal}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={buildWhatsAppCheckoutUrl()}
                onClick={handleRecordOrder}
                target="_blank"
                rel="noreferrer"
                className="block w-full py-4 bg-obsidian text-alabaster text-center text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors"
              >
                Checkout via WhatsApp
              </a>
              <div className="flex items-center justify-between pt-1 text-[10px] uppercase tracking-[0.2em] text-taupe">
                <a
                  href="https://lunahijab.co.id/cart/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-obsidian"
                >
                  Official Webstore →
                </a>
                <button onClick={onClearCart} className="hover:text-obsidian">
                  Clear Bag
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
