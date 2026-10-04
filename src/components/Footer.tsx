import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';

interface FooterProps {
  onSelectBrand: (brand: string) => void;
  onOpenConcierge: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectBrand, onOpenConcierge, onNavigate }) => {
  const handleBrandJump = (brand: string) => {
    onSelectBrand(brand);
    if (onNavigate) {
      onNavigate('/katalog');
    } else {
      const el = document.getElementById('collection-archive');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="pt-16 pb-16 bg-alabaster text-obsidian">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 space-y-16">
        {/* Rounded-3xl Dark Espresso & Champagne VIP Society Card ("Special Offer for Members") */}
        <div className="relative rounded-3xl overflow-hidden bg-obsidian text-alabaster p-8 sm:p-12 md:p-16 shadow-2xl border border-champagne/30">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${BRAND_ASSETS.ctaBackdrop})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/75" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne/20 border border-champagne/40 text-champagne text-[10px] uppercase tracking-[0.26em]">
                <Sparkles className="w-3 h-3" />
                <span>SPECIAL OFFER FOR MEMBERS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-alabaster leading-tight">
                Join the <em className="italic font-light text-champagne">Luna Indonesia</em>{' '}
                Member Society
              </h2>
              <p className="text-xs sm:text-sm text-alabaster/75 font-light leading-relaxed">
                Enjoy private pre-order access to new Luna Couture, Kemayu, and GZ releases,
                exclusive member pricing, and personalized styling via our Kudus VIP WhatsApp
                Concierge.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={BRAND_ASSETS.whatsappConcierge}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.22em] font-semibold hover:bg-alabaster transition-colors shadow-lg"
              >
                <span>Join Member</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConcierge}
                className="px-7 py-4 rounded-full border border-alabaster/25 text-alabaster text-xs uppercase tracking-[0.22em] hover:border-champagne hover:text-champagne transition-colors"
              >
                Contact Atelier
              </button>
            </div>
          </div>
        </div>

        {/* Clean White Rounded Footer Card */}
        <div className="rounded-3xl bg-white border border-obsidian/[0.08] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-obsidian/10">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_ASSETS.logoCompact}
                  alt="Luna Indonesia"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <span className="font-serif text-xl tracking-[0.28em] uppercase block text-obsidian">
                    LUNA INDONESIA
                  </span>
                  <span className="text-[9px] tracking-[0.32em] uppercase text-champagne font-medium block">
                    MAISON DE MODEST COUTURE
                  </span>
                </div>
              </div>
              <p className="text-xs text-taupe font-light max-w-sm leading-relaxed">
                Koleksi eksklusif dengan bahan terbaik dan desain timeless untuk semua usia.
              </p>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne">
                Brands
              </h3>
              <ul className="space-y-2 text-xs font-light text-obsidian/75">
                <li>
                  <button onClick={() => handleBrandJump('Luna')} className="hover:text-obsidian">
                    Luna Couture
                  </button>
                </li>
                <li>
                  <button onClick={() => handleBrandJump('Kemayu')} className="hover:text-obsidian">
                    Kemayu
                  </button>
                </li>
                <li>
                  <button onClick={() => handleBrandJump('GZ')} className="hover:text-obsidian">
                    GZ Tailoring
                  </button>
                </li>
                <li>
                  <button onClick={() => handleBrandJump('ALL')} className="hover:text-obsidian">
                    View All
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-3">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne">
                Information
              </h3>
              <ul className="space-y-2 text-xs font-light text-obsidian/75">
                <li>
                  <a href="#atelier-story" className="hover:text-obsidian">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#runway-lookbook" className="hover:text-obsidian">
                    Our Story
                  </a>
                </li>
                <li>
                  <button onClick={onOpenConcierge} className="hover:text-obsidian">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h3 className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne">
                Customer Care
              </h3>
              <ul className="space-y-2.5 text-xs font-light text-obsidian/75">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brass shrink-0" />
                  <span>{BRAND_ASSETS.atelierLocation}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brass shrink-0" />
                  <a
                    href={`tel:${BRAND_ASSETS.customerCarePhone}`}
                    className="hover:text-obsidian"
                  >
                    {BRAND_ASSETS.customerCarePhone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brass shrink-0" />
                  <a
                    href={`mailto:${BRAND_ASSETS.customerCareEmail}`}
                    className="hover:text-obsidian"
                  >
                    {BRAND_ASSETS.customerCareEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] uppercase tracking-[0.22em] text-taupe">
            <span>© 2026 Luna Indonesia</span>
            <span>Luna • Kemayu • GZ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
