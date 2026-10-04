import React, { useState, useEffect, useCallback } from 'react';
import {
  Menu,
  X,
  RefreshCw,
  LogOut,
  ExternalLink,
  Shield,
  Lock,
  User,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import { BRAND_ASSETS, Product } from '../data/products';
import {
  AdminInquiryRecord,
  AdminOrderRecord,
  AdminProfile,
  CustomerProfile,
  fetchAdminDashboardData,
  loginAdminAccount,
} from '../lib/supabase';
import { AdminSidebar, AdminSubroute } from './admin/AdminSidebar';
import { AdminDashboardOverview } from './admin/AdminDashboardOverview';
import { AdminProductsManager } from './admin/AdminProductsManager';
import { AdminCustomerManager } from './admin/AdminCustomerManager';
import { AdminBrandQRMaker } from './admin/AdminBrandQRMaker';
import { AdminInquiriesManager } from './admin/AdminInquiriesManager';
import { AdminOrdersManager } from './admin/AdminOrdersManager';

interface AdminPortalPageProps {
  currentPath?: string;
  adminUser: AdminProfile | null;
  products: Product[];
  onAdminLoginSuccess: (admin: AdminProfile) => void;
  onAdminLogout: () => void;
  onNavigate: (path: string) => void;
  onProductUpdated?: (product: Product) => void;
}

export const AdminPortalPage: React.FC<AdminPortalPageProps> = ({
  currentPath = '/admin',
  adminUser,
  products,
  onAdminLoginSuccess,
  onAdminLogout,
  onNavigate,
  onProductUpdated,
}) => {
  // Determine subroute from URL path (must be under /admin)
  const getSubrouteFromPath = (path: string): AdminSubroute => {
    const clean = path.replace(/\/+$/, '').toLowerCase();
    if (clean === '/admin/products') return 'products';
    if (clean === '/admin/customers') return 'customers';
    if (clean === '/admin/qr-maker' || clean === '/admin/qrmaker') return 'qr-maker';
    if (clean === '/admin/inquiries') return 'inquiries';
    if (clean === '/admin/orders') return 'orders';
    return 'dashboard';
  };

  const [currentSubroute, setCurrentSubroute] = useState<AdminSubroute>(() =>
    getSubrouteFromPath(window.location.pathname)
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  // Supabase data state
  const [localProducts, setLocalProducts] = useState<Product[]>(products);
  const [customers, setCustomers] = useState<CustomerProfile[]>([]);
  const [orders, setOrders] = useState<AdminOrderRecord[]>([]);
  const [inquiries, setInquiries] = useState<AdminInquiryRecord[]>([]);
  const [selectedProductForQR, setSelectedProductForQR] = useState<Product | null>(null);

  // Login form state
  const [identifier, setIdentifier] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Sync subroute on popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const next = getSubrouteFromPath(window.location.pathname);
      setCurrentSubroute(next);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update products when prop changes
  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  // Navigate between admin subroutes keeping URL under /admin/*
  const handleNavigateSubroute = (subroute: AdminSubroute) => {
    setCurrentSubroute(subroute);
    const targetUrl = subroute === 'dashboard' ? '/admin' : `/admin/${subroute}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load Supabase administrative dashboard data
  const loadDashboard = useCallback(async () => {
    if (!adminUser) return;
    setDataLoading(true);
    try {
      const result = await fetchAdminDashboardData(adminUser.id);
      if (result) {
        setCustomers(result.customers);
        setOrders(result.orders);
        setInquiries(result.inquiries);
      }
    } finally {
      setDataLoading(false);
    }
  }, [adminUser]);

  useEffect(() => {
    if (adminUser) {
      loadDashboard();
    }
  }, [adminUser, loadDashboard]);

  // Submit Login
  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!identifier.trim() || !password) {
      setLoginError('Please enter admin credentials.');
      return;
    }

    setLoginLoading(true);
    try {
      const res = await loginAdminAccount(identifier.trim(), password);
      if (res.error || !res.data) {
        setLoginError(res.error || 'Admin authentication failed.');
      } else {
        onAdminLoginSuccess(res.data);
        handleNavigateSubroute('dashboard');
      }
    } catch {
      setLoginError('Unable to connect to Supabase authentication service.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Quick Demo Access
  const handleQuickDemoLogin = async () => {
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await loginAdminAccount('admin', 'admin123');
      if (res.data) {
        onAdminLoginSuccess(res.data);
        handleNavigateSubroute('dashboard');
      } else {
        // Fallback demo profile
        const demo: AdminProfile = {
          id: 'c97cc0e3-a683-4a4e-adcb-b7549234744d',
          username: 'admin',
          email: 'admin@lunahijab.co.id',
          full_name: 'Maison Luna Executive',
          created_at: new Date().toISOString(),
        };
        onAdminLoginSuccess(demo);
        handleNavigateSubroute('dashboard');
      }
    } catch {
      const demo: AdminProfile = {
        id: 'c97cc0e3-a683-4a4e-adcb-b7549234744d',
        username: 'admin',
        email: 'admin@lunahijab.co.id',
        full_name: 'Maison Luna Executive',
        created_at: new Date().toISOString(),
      };
      onAdminLoginSuccess(demo);
      handleNavigateSubroute('dashboard');
    } finally {
      setLoginLoading(false);
    }
  };

  // Handlers for products
  const handleUpdateProduct = (updated: Product) => {
    setLocalProducts((prev) =>
      prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
    );
    if (onProductUpdated) {
      onProductUpdated(updated);
    }
  };

  const handleAddProduct = (newProduct: Product) => {
    setLocalProducts((prev) => [newProduct, ...prev]);
    if (onProductUpdated) {
      onProductUpdated(newProduct);
    }
  };

  // Handlers for customers
  const handleCustomerCreated = (customer: CustomerProfile) => {
    setCustomers((prev) => [customer, ...prev]);
  };

  const handleCustomerUpdated = (customer: CustomerProfile) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === customer.id ? customer : c))
    );
  };

  // 1. UN-AUTHENTICATED: Render Luxury Admin Login Screen under /admin
  if (!adminUser) {
    return (
      <div className="min-h-screen bg-obsidian text-alabaster flex flex-col justify-center py-12 px-4 sm:px-8 relative overflow-hidden select-none">
        {/* Ambient atmospheric backdrop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-champagne/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-md w-full mx-auto relative z-10">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-alabaster/60 hover:text-alabaster mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Boutique Storefront</span>
          </button>

          <div className="rounded-3xl bg-white text-obsidian p-8 sm:p-10 shadow-2xl border border-champagne/30">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-obsidian text-champagne border border-champagne/40 flex items-center justify-center p-2 shrink-0">
                <img
                  src={BRAND_ASSETS.logoCompact}
                  alt="Maison Luna"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-[9.5px] uppercase tracking-[0.28em] text-champagne font-medium">
                  EXECUTIVE ATELIER PORTAL
                </p>
                <h1 className="font-serif text-2xl text-obsidian">Maison Luna Admin</h1>
              </div>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {loginError}
              </div>
            )}

            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5 font-medium">
                  Admin Username / Email
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="admin or admin@lunahijab.co.id"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs text-obsidian focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5 font-medium">
                  Security Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password (default: admin123)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs text-obsidian focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-obsidian text-alabaster text-xs uppercase tracking-[0.24em] font-medium hover:bg-brass transition-colors disabled:opacity-60 shadow-md"
              >
                {loginLoading ? 'Authenticating...' : 'Sign In to /admin Panel'}
              </button>
            </form>

            {/* Quick Demo Access Button */}
            <div className="mt-4 pt-4 border-t border-obsidian/10">
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                disabled={loginLoading}
                className="w-full py-2.5 px-4 rounded-xl bg-champagne/15 hover:bg-champagne/30 border border-champagne/40 text-brass text-[11px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>One-Click Executive Demo Access</span>
              </button>
            </div>

            <div className="mt-5 text-center text-[10px] text-taupe font-mono">
              Database: <span className="text-obsidian font-semibold">luna Project</span> · URL:
              /admin
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED: Master Admin Layout under /admin
  return (
    <div className="min-h-screen bg-[#faf8f5] text-obsidian flex flex-col lg:flex-row font-sans">
      {/* Sidebar Navigation */}
      <AdminSidebar
        currentSubroute={currentSubroute}
        adminUser={adminUser}
        productCount={localProducts.length}
        customerCount={customers.length}
        inquiryCount={inquiries.length}
        orderCount={orders.length}
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        onNavigateSubroute={handleNavigateSubroute}
        onAdminLogout={onAdminLogout}
        onNavigateStorefront={() => onNavigate('/')}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Sticky Top Header */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-obsidian/[0.08] px-5 lg:px-10 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-obsidian/15 text-obsidian hover:bg-alabaster"
              title="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb Path */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-taupe">/admin</span>
              {currentSubroute !== 'dashboard' && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-taupe" />
                  <span className="text-obsidian font-semibold">/{currentSubroute}</span>
                </>
              )}
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={loadDashboard}
              disabled={dataLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-obsidian/10 hover:border-obsidian bg-alabaster/60 text-[10.5px] uppercase tracking-[0.16em] transition-colors"
              title="Refresh database records"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${dataLoading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian text-alabaster text-[10.5px] uppercase tracking-[0.16em] font-medium hover:bg-brass transition-colors"
              title="View Live Storefront"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Boutique</span>
            </button>
          </div>
        </header>

        {/* Dynamic Subroute View */}
        <main className="flex-1 p-5 lg:p-10 max-w-[1500px] w-full mx-auto">
          {currentSubroute === 'dashboard' && (
            <AdminDashboardOverview
              products={localProducts}
              customers={customers}
              orders={orders}
              inquiries={inquiries}
              onNavigateSubroute={handleNavigateSubroute}
              onSelectBrandFilter={(brand) => {
                setSelectedProductForQR(null);
                handleNavigateSubroute('products');
              }}
            />
          )}

          {currentSubroute === 'products' && (
            <AdminProductsManager
              products={localProducts}
              adminUser={adminUser}
              onUpdateProduct={handleUpdateProduct}
              onAddProduct={handleAddProduct}
              onSelectProductForQR={(prod) => {
                setSelectedProductForQR(prod);
                handleNavigateSubroute('qr-maker');
              }}
              onNavigateSubroute={handleNavigateSubroute}
            />
          )}

          {currentSubroute === 'customers' && (
            <AdminCustomerManager
              customers={customers}
              adminUser={adminUser}
              onRefresh={loadDashboard}
              onCustomerCreated={handleCustomerCreated}
              onCustomerUpdated={handleCustomerUpdated}
            />
          )}

          {currentSubroute === 'qr-maker' && (
            <AdminBrandQRMaker
              products={localProducts}
              selectedProduct={selectedProductForQR}
              initialBrand={
                selectedProductForQR?.brand === 'Kemayu'
                  ? 'Kemayu'
                  : selectedProductForQR?.brand === 'GZ'
                  ? 'GZ'
                  : 'Luna'
              }
            />
          )}

          {currentSubroute === 'inquiries' && (
            <AdminInquiriesManager
              inquiries={inquiries}
              adminUser={adminUser}
              onRefresh={loadDashboard}
            />
          )}

          {currentSubroute === 'orders' && <AdminOrdersManager orders={orders} />}
        </main>
      </div>
    </div>
  );
};
