import React, { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, Sparkles, User } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';
import { CustomerProfile } from '../lib/supabase';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  activeBrand: string;
  currentRoute?: string;
  currentUser: CustomerProfile | null;
  onSelectBrand: (brand: string) => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  activeBrand,
  currentRoute = '/',
  currentUser,
  onSelectBrand,
  onOpenCart,
  onOpenContact,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavBrand = (brand: string) => {
    onSelectBrand(brand);
    setMobileMenuOpen(false);
    onNavigate('/katalog');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentRoute !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Subtle Top Silk Ribbon */}
      <div className="bg-obsidian text-alabaster/90 text-[10px] uppercase tracking-[0.28em] py-2 px-4 text-center border-b border-champagne/20">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-champagne" />
          <span>LUNA INDONESIA — EXCLUSIVE MODEST COUTURE • FREE NATIONWIDE SHIPPING</span>
        </span>
      </div>

      {/* Floating Glass Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-alabaster/85 backdrop-blur-xl shadow-xs' : 'py-5 bg-alabaster/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-obsidian/[0.08] px-5 md:px-8 py-3.5 shadow-[0_4px_24px_rgba(28,24,21,0.04)] flex items-center justify-between">
            {/* Left Brand Emblem + Wordmark */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            >
              <img
                src={BRAND_ASSETS.logoCompact}
                alt="Luna Indonesia"
                className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <span className="font-serif text-xl md:text-2xl tracking-[0.26em] uppercase font-normal text-obsidian block leading-none">
                  LUNA
                </span>
                <span className="text-[8.5px] tracking-[0.38em] uppercase text-champagne font-medium block mt-1">
                  INDONESIA
                </span>
              </div>
            </a>

            {/* Center Navigation Pills */}
            <nav className="hidden lg:flex items-center gap-1 bg-alabaster/80 p-1 rounded-full border border-obsidian/[0.06]">
              <button
                onClick={() => onNavigate('/')}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  currentRoute === '/'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Beranda
              </button>

              <button
                onClick={() => handleNavBrand('ALL')}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                  currentRoute === '/katalog' && activeBrand === 'ALL'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Katalog
              </button>

              {[
                { label: 'Luna', value: 'Luna' },
                { label: 'Kemayu', value: 'Kemayu' },
                { label: 'GZ', value: 'GZ' },
              ].map((item) => {
                const isActive = currentRoute === '/katalog' && activeBrand === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavBrand(item.value)}
                    className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                        : 'text-obsidian/65 hover:text-obsidian'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => scrollToSection('runway-lookbook')}
                className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-obsidian/65 hover:text-obsidian transition-colors"
              >
                Lookbook
              </button>
              <button
                onClick={() => scrollToSection('atelier-story')}
                className="px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-obsidian/65 hover:text-obsidian transition-colors"
              >
                Our Story
              </button>
            </nav>

            {/* Right Utility Controls */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {currentUser ? (
                <>
                  <button
                    onClick={onOpenContact}
                    className="hidden xl:inline-block px-4 py-2 rounded-full border border-obsidian/15 text-[10.5px] uppercase tracking-[0.18em] text-obsidian hover:border-obsidian transition-colors"
                  >
                    Concierge
                  </button>

                  <button
                    onClick={onOpenCart}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.18em] hover:bg-brass transition-colors shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-champagne" />
                    <span className="hidden sm:inline">Bag</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-white/15 text-[10px]">
                      {cartCount}
                    </span>
                  </button>

                  {/* User Profile Photo to the Right of Bag Button */}
                  <button
                    type="button"
                    onClick={() => onNavigate('/login')}
                    title={`${currentUser.nama} (${currentUser.email})`}
                    aria-label="Profil Member"
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-champagne bg-travertine flex items-center justify-center shadow-xs hover:scale-105 transition-transform shrink-0"
                  >
                    {currentUser.foto_url ? (
                      <img
                        src={currentUser.foto_url}
                        alt={currentUser.nama}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <span className="font-serif text-xs font-semibold text-obsidian">
                        {currentUser.nama.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate('/login')}
                  title="Login / Register Member"
                  aria-label="Login Member"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-alabaster hover:bg-travertine border border-obsidian/15 text-[10.5px] uppercase tracking-[0.18em] text-obsidian transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-brass" />
                  <span className="hidden sm:inline">Login</span>
                </button>
              )}

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-9 h-9 rounded-full bg-alabaster flex items-center justify-center text-obsidian"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-alabaster text-obsidian flex flex-col justify-between p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-5 border-b border-obsidian/10">
            <div className="flex items-center gap-2.5">
              <img src={BRAND_ASSETS.logoCompact} alt="Luna" className="h-8 w-auto" />
              <span className="font-serif text-xl tracking-[0.28em] uppercase">LUNA</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-obsidian"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-auto space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="block w-full text-left font-serif text-3xl font-normal text-obsidian hover:text-brass transition-colors"
            >
              Beranda
            </button>
            {[
              { title: 'Katalog Koleksi', val: 'ALL' },
              { title: 'Luna Couture', val: 'Luna' },
              { title: 'Kemayu Heritage', val: 'Kemayu' },
              { title: 'GZ Tailoring', val: 'GZ' },
              { title: 'Saved Wishlist', val: 'WISHLIST' },
            ].map((item) => (
              <button
                key={item.val}
                onClick={() => handleNavBrand(item.val)}
                className="block w-full text-left font-serif text-3xl font-normal text-obsidian hover:text-brass transition-colors"
              >
                {item.title}
              </button>
            ))}

            <div className="pt-6 border-t border-obsidian/10 flex flex-col gap-3.5 text-xs uppercase tracking-[0.22em] text-taupe">
              <button onClick={() => scrollToSection('runway-lookbook')} className="text-left">
                Editorial Lookbook
              </button>
              <button onClick={() => scrollToSection('atelier-story')} className="text-left">
                Our Story
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-left"
              >
                Contact &amp; Concierge
              </button>
            </div>
          </div>

          <div className="pt-5 border-t border-obsidian/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-taupe">
            <span>Kudus, Central Java</span>
            <a
              href={BRAND_ASSETS.whatsappConcierge}
              target="_blank"
              rel="noreferrer"
              className="text-brass font-medium"
            >
              WhatsApp VIP →
            </a>
          </div>
        </div>
      )}
    </>
  );
};
