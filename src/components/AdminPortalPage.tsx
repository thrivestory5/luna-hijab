import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  Shield,
  Lock,
  User,
  Users,
  ShoppingBag,
  MessageSquare,
  Package,
  RefreshCw,
  LogOut,
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

interface AdminPortalPageProps {
  route: '/admlog' | '/admin';
  adminUser: AdminProfile | null;
  products: Product[];
  onAdminLoginSuccess: (admin: AdminProfile) => void;
  onAdminLogout: () => void;
  onNavigate: (path: string) => void;
}

export const AdminPortalPage: React.FC<AdminPortalPageProps> = ({
  route,
  adminUser,
  products,
  onAdminLoginSuccess,
  onAdminLogout,
  onNavigate,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<'customers' | 'orders' | 'inquiries' | 'catalog'>(
    'customers'
  );
  const [customers, setCustomers] = useState<CustomerProfile[]>([]);
  const [orders, setOrders] = useState<AdminOrderRecord[]>([]);
  const [inquiries, setInquiries] = useState<AdminInquiryRecord[]>([]);
  const [dataLoading, setDataLoading] = useState(false);

  // Redirect unauthenticated /admin access to /admlog, and authenticated /admlog to /admin
  useEffect(() => {
    if (route === '/admin' && !adminUser) {
      onNavigate('/admlog');
    } else if (route === '/admlog' && adminUser) {
      onNavigate('/admin');
    }
  }, [route, adminUser, onNavigate]);

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
    if (adminUser && route === '/admin') {
      loadDashboard();
    }
  }, [adminUser, route, loadDashboard]);

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!identifier.trim() || !password) {
      setLoginError('Masukkan username/email admin dan password.');
      return;
    }

    setLoginLoading(true);
    try {
      const res = await loginAdminAccount(identifier.trim(), password);
      if (res.error || !res.data) {
        setLoginError(res.error || 'Login admin gagal.');
      } else {
        onAdminLoginSuccess(res.data);
        onNavigate('/admin');
      }
    } finally {
      setLoginLoading(false);
    }
  };

  // Render /admlog login screen if not authenticated
  if (route === '/admlog' || !adminUser) {
    return (
      <div className="min-h-screen bg-obsidian text-alabaster flex flex-col justify-center py-12 px-4 sm:px-8">
        <div className="max-w-md w-full mx-auto">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-alabaster/60 hover:text-alabaster mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Butik</span>
          </button>

          <div className="rounded-3xl bg-white text-obsidian p-8 sm:p-10 shadow-2xl border border-champagne/25">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-obsidian text-champagne flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9.5px] uppercase tracking-[0.26em] text-champagne font-medium">
                  ATELIER EXECUTIVE PORTAL
                </p>
                <h1 className="font-serif text-2xl text-obsidian">Admin Access (/admlog)</h1>
              </div>
            </div>

            {loginError && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {loginError}
              </div>
            )}

            <form onSubmit={handleAdminSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                  Admin Username / Email *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Masukkan username atau email admin"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="Masukkan password admin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors disabled:opacity-60"
              >
                {loginLoading ? 'Memverifikasi...' : 'Masuk ke halaman /admin'}
              </button>
            </form>

            <p className="mt-6 pt-5 border-t border-obsidian/10 text-[11px] text-taupe font-light leading-relaxed">
              Terhubung ke tabel <code className="text-obsidian font-mono">public.admin_users</code>{' '}
              pada Supabase <strong>luna Project</strong>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render /admin Dashboard
  return (
    <div className="min-h-screen bg-alabaster text-obsidian">
      {/* Top Admin Header */}
      <header className="bg-obsidian text-alabaster border-b border-champagne/20 py-4 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={BRAND_ASSETS.logoCompact} alt="Luna" className="h-8 w-auto" />
            <div>
              <span className="font-serif text-lg tracking-[0.24em] uppercase block leading-none">
                LUNA ATELIER ADMIN
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-champagne block mt-1">
                SIGNED IN AS {adminUser.full_name.toUpperCase()} ({adminUser.username})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadDashboard}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[10.5px] uppercase tracking-[0.18em] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${dataLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-4 py-2 rounded-full border border-alabaster/25 hover:border-alabaster text-[10.5px] uppercase tracking-[0.18em] transition-colors"
            >
              Lihat Webstore
            </button>
            <button
              type="button"
              onClick={() => {
                onAdminLogout();
                onNavigate('/admlog');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brass text-alabaster text-[10.5px] uppercase tracking-[0.18em] hover:bg-champagne transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 space-y-8">
        {/* Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs">
            <div className="flex items-center justify-between text-taupe">
              <span className="text-[10px] uppercase tracking-[0.22em]">Registered Members</span>
              <Users className="w-4 h-4 text-brass" />
            </div>
            <p className="font-serif text-3xl font-semibold text-obsidian mt-2">
              {customers.length}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs">
            <div className="flex items-center justify-between text-taupe">
              <span className="text-[10px] uppercase tracking-[0.22em]">Bag Checkouts</span>
              <ShoppingBag className="w-4 h-4 text-brass" />
            </div>
            <p className="font-serif text-3xl font-semibold text-obsidian mt-2">{orders.length}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs">
            <div className="flex items-center justify-between text-taupe">
              <span className="text-[10px] uppercase tracking-[0.22em]">Concierge Inquiries</span>
              <MessageSquare className="w-4 h-4 text-brass" />
            </div>
            <p className="font-serif text-3xl font-semibold text-obsidian mt-2">
              {inquiries.length}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs">
            <div className="flex items-center justify-between text-taupe">
              <span className="text-[10px] uppercase tracking-[0.22em]">Supabase Catalog</span>
              <Package className="w-4 h-4 text-brass" />
            </div>
            <p className="font-serif text-3xl font-semibold text-obsidian mt-2">
              {products.length}
            </p>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-obsidian/10 pb-4">
          {[
            { id: 'customers', label: `Member Terdaftar (${customers.length})` },
            { id: 'orders', label: `Pesanan Masuk (${orders.length})` },
            { id: 'inquiries', label: `Pesan Concierge (${inquiries.length})` },
            { id: 'catalog', label: `Katalog Produk (${products.length})` },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id as typeof activeTab)}
              className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.18em] transition-colors ${
                activeTab === t.id
                  ? 'bg-obsidian text-alabaster font-medium'
                  : 'bg-white text-obsidian/70 hover:text-obsidian border border-obsidian/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'customers' && (
          <div className="rounded-2xl bg-white border border-obsidian/[0.08] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-alabaster border-b border-obsidian/10 text-[10px] uppercase tracking-[0.18em] text-taupe">
                    <th className="py-3.5 px-4">Member</th>
                    <th className="py-3.5 px-4">Email (Username)</th>
                    <th className="py-3.5 px-4">WhatsApp</th>
                    <th className="py-3.5 px-4">Alamat Lengkap</th>
                    <th className="py-3.5 px-4">Wilayah &amp; Kode Pos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-obsidian/10">
                  {customers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-10 text-center text-taupe">
                        Belum ada member yang terdaftar.
                      </td>
                    </tr>
                  ) : (
                    customers.map((c) => (
                      <tr key={c.id} className="hover:bg-alabaster/50">
                        <td className="py-3.5 px-4 flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden bg-travertine border border-champagne shrink-0 flex items-center justify-center">
                            {c.foto_url ? (
                              <img
                                src={c.foto_url}
                                alt={c.nama}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="font-serif text-sm text-brass">
                                {c.nama.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                          <span className="font-medium text-obsidian">{c.nama}</span>
                        </td>
                        <td className="py-3.5 px-4 text-obsidian/80">{c.email}</td>
                        <td className="py-3.5 px-4 text-obsidian/80">{c.nomer_whatsapp}</td>
                        <td className="py-3.5 px-4 text-obsidian/80 max-w-xs">{c.alamat}</td>
                        <td className="py-3.5 px-4 text-obsidian/75">
                          Kel. {c.kelurahan_desa}, Kec. {c.kecamatan}, {c.kota_kabupaten},{' '}
                          {c.provinsi} ({c.kode_pos})
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="rounded-2xl bg-white border border-obsidian/[0.08] p-6 space-y-4">
            {orders.length === 0 ? (
              <p className="text-xs text-taupe text-center py-8">Belum ada pesanan tercatat.</p>
            ) : (
              orders.map((o) => (
                <div
                  key={o.id}
                  className="p-4 rounded-xl bg-alabaster border border-obsidian/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                      {new Date(o.created_at).toLocaleString('id-ID')}
                    </p>
                    <div className="text-xs text-obsidian space-y-0.5">
                      {o.items.map((item, i) => (
                        <p key={i}>
                          • {item.name} ({item.variant}, {item.size}) x{item.quantity}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="font-serif text-lg font-semibold text-obsidian">
                    {o.formatted_total}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="rounded-2xl bg-white border border-obsidian/[0.08] p-6 space-y-4">
            {inquiries.length === 0 ? (
              <p className="text-xs text-taupe text-center py-8">
                Belum ada pesan concierge yang masuk.
              </p>
            ) : (
              inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-xl bg-alabaster border border-obsidian/10 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-xs text-obsidian">{inq.full_name}</span>
                    <span className="text-[10px] text-taupe">{inq.whatsapp_phone}</span>
                  </div>
                  <p className="text-xs text-obsidian/75 font-light">{inq.notes}</p>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="p-3.5 rounded-2xl bg-white border border-obsidian/[0.08] flex items-center gap-3.5"
              >
                <img
                  src={p.primaryImage}
                  alt={p.rawName}
                  className="w-14 h-18 rounded-xl object-cover object-top bg-travertine shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[9.5px] uppercase tracking-[0.18em] text-champagne">
                    {p.brand}
                  </p>
                  <p className="font-serif text-sm text-obsidian truncate">{p.rawName}</p>
                  <p className="text-xs font-medium text-obsidian mt-0.5">{p.formattedPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
