import React, { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { PRODUCTS, Product } from './data/products';
import { AdminProfile, CustomerProfile, fetchCatalogProducts } from './lib/supabase';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AtelierHouses } from './components/AtelierHouses';
import { CollectionArchive } from './components/CollectionArchive';
import { PinnedLookbook } from './components/PinnedLookbook';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { ProductModal } from './components/ProductModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';
import { CustomerAuthPage } from './components/CustomerAuthPage';
import { AdminPortalPage } from './components/AdminPortalPage';

const normalizeRoute = (pathname: string): '/' | '/login' | '/admlog' | '/admin' => {
  const clean = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  if (clean === '/login') return '/login';
  if (clean === '/admlog') return '/admlog';
  if (clean === '/admin') return '/admin';
  return '/';
};

export function App() {
  const [currentRoute, setCurrentRoute] = useState<'/' | '/login' | '/admlog' | '/admin'>('/');
  const [catalogProducts, setCatalogProducts] = useState<Product[]>(PRODUCTS);
  const [currentUser, setCurrentUser] = useState<CustomerProfile | null>(null);
  const [adminUser, setAdminUser] = useState<AdminProfile | null>(null);

  const [activeBrand, setActiveBrand] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [conciergeOpen, setConciergeOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync URL pathname & browser history navigation
  useEffect(() => {
    const initial = normalizeRoute(window.location.pathname);
    setCurrentRoute(initial);
    if (initial === '/login') {
      setAuthModalOpen(true);
    }
    const handlePopState = () => {
      const next = normalizeRoute(window.location.pathname);
      setCurrentRoute(next);
      setAuthModalOpen(next === '/login');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((path: string) => {
    const target = normalizeRoute(path);
    if (target === '/login') {
      setAuthModalOpen(true);
      return;
    }
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
    }
    setCurrentRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCloseAuthModal = useCallback(() => {
    setAuthModalOpen(false);
    if (window.location.pathname.toLowerCase().startsWith('/login')) {
      window.history.pushState({}, '', '/');
      setCurrentRoute('/');
    }
  }, []);

  // Sync live catalog from Supabase "luna Project" database
  useEffect(() => {
    let active = true;
    fetchCatalogProducts()
      .then((remoteProducts) => {
        if (active && remoteProducts && remoteProducts.length > 0) {
          setCatalogProducts(remoteProducts);
        }
      })
      .catch(() => {
        // Fallback to local static catalog if offline
      });
    return () => {
      active = false;
    };
  }, []);

  // Smooth inertial scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Hydration-safe session & cart restore
  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem('maison_luna_cart_v1');
      if (savedCart) setCartItems(JSON.parse(savedCart));
      const savedWish = window.localStorage.getItem('maison_luna_wishlist_v1');
      if (savedWish) setWishlist(JSON.parse(savedWish));
      const savedCustomer = window.localStorage.getItem('maison_luna_customer_v1');
      if (savedCustomer) setCurrentUser(JSON.parse(savedCustomer));
      const savedAdmin = window.sessionStorage.getItem('maison_luna_admin_v1');
      if (savedAdmin) setAdminUser(JSON.parse(savedAdmin));
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('maison_luna_cart_v1', JSON.stringify(cartItems));
    } catch {
      // Ignore quota errors
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      window.localStorage.setItem('maison_luna_wishlist_v1', JSON.stringify(wishlist));
    } catch {
      // Ignore quota errors
    }
  }, [wishlist]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  }, []);

  const handleCustomerAuthSuccess = useCallback(
    (profile: CustomerProfile) => {
      setCurrentUser(profile);
      try {
        window.localStorage.setItem('maison_luna_customer_v1', JSON.stringify(profile));
      } catch {
        // Ignore storage errors
      }
      showToast(`Selamat datang, ${profile.nama}`);
    },
    [showToast]
  );

  const handleCustomerLogout = useCallback(() => {
    setCurrentUser(null);
    try {
      window.localStorage.removeItem('maison_luna_customer_v1');
    } catch {
      // Ignore storage errors
    }
    showToast('Anda telah keluar dari akun member');
  }, [showToast]);

  const handleAdminLoginSuccess = useCallback(
    (admin: AdminProfile) => {
      setAdminUser(admin);
      try {
        window.sessionStorage.setItem('maison_luna_admin_v1', JSON.stringify(admin));
      } catch {
        // Ignore storage errors
      }
      showToast(`Login Admin: ${admin.username}`);
    },
    [showToast]
  );

  const handleAdminLogout = useCallback(() => {
    setAdminUser(null);
    try {
      window.sessionStorage.removeItem('maison_luna_admin_v1');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleToggleWishlist = useCallback(
    (productId: number) => {
      setWishlist((prev) => {
        const exists = prev.includes(productId);
        const next = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
        showToast(exists ? 'Removed from Saved' : 'Saved to Wishlist');
        return next;
      });
    },
    [showToast]
  );

  const handleAddToCart = useCallback(
    (product: Product, variant: string, size: string, image: string) => {
      const key = `${product.id}-${variant}-${size}`;
      setCartItems((prev) => {
        const existing = prev.find((i) => i.key === key);
        if (existing) {
          return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i));
        }
        return [
          ...prev,
          {
            key,
            product,
            variant,
            size,
            image,
            quantity: 1,
          },
        ];
      });
      showToast(`${product.name} added to bag`);
    },
    [showToast]
  );

  const handleQuickAdd = useCallback(
    (product: Product, variant: string, image: string) => {
      handleAddToCart(product, variant, 'All Size', image);
      setCartOpen(true);
    },
    [handleAddToCart]
  );

  const handleUpdateCartQty = useCallback((key: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.key === key ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleRemoveCartItem = useCallback((key: string) => {
    setCartItems((prev) => prev.filter((item) => item.key !== key));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleOpenSearch = () => {
    const archive = document.getElementById('collection-archive');
    if (archive) {
      archive.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  // Route: /admlog or /admin
  if (currentRoute === '/admlog' || currentRoute === '/admin') {
    return (
      <AdminPortalPage
        route={currentRoute}
        adminUser={adminUser}
        products={catalogProducts}
        onAdminLoginSuccess={handleAdminLoginSuccess}
        onAdminLogout={handleAdminLogout}
        onNavigate={handleNavigate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-alabaster text-obsidian selection:bg-cashmere">
      {/* Subtle Minimal Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[115] px-6 py-3 bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.22em] shadow-lg animate-fadeIn">
          {toastMessage}
        </div>
      )}

      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        activeBrand={activeBrand}
        currentUser={currentUser}
        onSelectBrand={setActiveBrand}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={handleOpenSearch}
        onOpenContact={() => setConciergeOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroSection
          featuredProducts={catalogProducts.slice(0, 4)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onExploreArchive={() => {
            const el = document.getElementById('collection-archive');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreLookbook={() => {
            const el = document.getElementById('runway-lookbook');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <AtelierHouses onSelectHouse={(brand) => setActiveBrand(brand)} />

        <CollectionArchive
          products={catalogProducts}
          activeBrand={activeBrand}
          onSelectBrand={setActiveBrand}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onQuickAdd={handleQuickAdd}
        />

        <PinnedLookbook
          products={catalogProducts}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        <CraftsmanshipSection onOpenConcierge={() => setConciergeOpen(true)} />
      </main>

      <Footer
        onSelectBrand={setActiveBrand}
        onOpenConcierge={() => setConciergeOpen(true)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <ConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
      />

      <CustomerAuthPage
        isOpen={authModalOpen}
        currentUser={currentUser}
        onAuthSuccess={handleCustomerAuthSuccess}
        onLogout={handleCustomerLogout}
        onClose={handleCloseAuthModal}
      />
    </div>
  );
}

export default App;
