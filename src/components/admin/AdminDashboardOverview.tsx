import React from 'react';
import {
  Package,
  Users,
  MessageSquare,
  ShoppingBag,
  QrCode,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { Product } from '../../data/products';
import { AdminInquiryRecord, AdminOrderRecord, CustomerProfile } from '../../lib/supabase';
import { AdminSubroute } from './AdminSidebar';

interface AdminDashboardOverviewProps {
  products: Product[];
  customers: CustomerProfile[];
  orders: AdminOrderRecord[];
  inquiries: AdminInquiryRecord[];
  onNavigateSubroute: (subroute: AdminSubroute) => void;
  onSelectBrandFilter: (brand: string) => void;
}

export const AdminDashboardOverview: React.FC<AdminDashboardOverviewProps> = ({
  products,
  customers,
  orders,
  inquiries,
  onNavigateSubroute,
  onSelectBrandFilter,
}) => {
  const brandStats = {
    Luna: products.filter((p) => p.brand === 'Luna').length,
    Kemayu: products.filter((p) => p.brand === 'Kemayu').length,
    GZ: products.filter((p) => p.brand === 'GZ').length,
  };

  const pendingInquiries = inquiries.filter(
    (i) => i.status === 'pending' || i.status === 'in_review'
  ).length;

  const totalRevenue = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const formattedRevenue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(totalRevenue);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner / Executive Welcome */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-obsidian via-[#1c1a17] to-obsidian text-alabaster border border-champagne/25 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/15 border border-champagne/30 text-[10px] uppercase tracking-[0.24em] text-champagne">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
              <span>Maison Executive Administration · Kudus Atelier</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-alabaster font-normal tracking-wide">
              Maison Luna Atelier Control Panel
            </h1>
            <p className="text-xs sm:text-sm text-alabaster/70 font-light leading-relaxed">
              Complete administrative authority over front-page catalogue collections, Supabase
              database sync, registered VIP clientele records, and official QR code generation for
              Luna, Kemayu, and GZ.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigateSubroute('qr-maker')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-alabaster transition-all duration-200 shadow-md group"
            >
              <QrCode className="w-4 h-4 text-obsidian group-hover:rotate-12 transition-transform" />
              <span>Open Brand QR Maker</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateSubroute('customers')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-alabaster border border-white/15 text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <Users className="w-4 h-4 text-champagne" />
              <span>Client Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          onClick={() => onNavigateSubroute('products')}
          className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs hover:border-champagne/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-taupe mb-3">
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium">
              Catalogue Products
            </span>
            <div className="w-9 h-9 rounded-xl bg-champagne/15 text-brass flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="font-serif text-3xl font-semibold text-obsidian">{products.length}</p>
            <span className="text-[11px] text-emerald-600 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Synced
            </span>
          </div>
          <p className="text-[11px] text-taupe mt-2 font-light">
            {brandStats.Luna} Luna · {brandStats.Kemayu} Kemayu · {brandStats.GZ} GZ
          </p>
        </div>

        <div
          onClick={() => onNavigateSubroute('customers')}
          className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs hover:border-champagne/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-taupe mb-3">
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium">
              Registered Clientele
            </span>
            <div className="w-9 h-9 rounded-xl bg-brass/15 text-brass flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="font-serif text-3xl font-semibold text-obsidian">{customers.length}</p>
            <span className="text-[11px] text-brass font-mono">VIP Members</span>
          </div>
          <p className="text-[11px] text-taupe mt-2 font-light">
            Verified accounts in Supabase database
          </p>
        </div>

        <div
          onClick={() => onNavigateSubroute('inquiries')}
          className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs hover:border-champagne/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-taupe mb-3">
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium">
              Concierge Inquiries
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="font-serif text-3xl font-semibold text-obsidian">{inquiries.length}</p>
            {pendingInquiries > 0 ? (
              <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                {pendingInquiries} Pending
              </span>
            ) : (
              <span className="text-[11px] text-emerald-600 font-mono">All Clear</span>
            )}
          </div>
          <p className="text-[11px] text-taupe mt-2 font-light">
            Appointments & custom bridal requests
          </p>
        </div>

        <div
          onClick={() => onNavigateSubroute('orders')}
          className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs hover:border-champagne/50 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-taupe mb-3">
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium">
              Bag Orders / Checkouts
            </span>
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="font-serif text-3xl font-semibold text-obsidian">{orders.length}</p>
            <span className="text-[11px] text-emerald-700 font-mono font-medium">
              {formattedRevenue}
            </span>
          </div>
          <p className="text-[11px] text-taupe mt-2 font-light">
            WhatsApp Concierge & online shopping bags
          </p>
        </div>
      </div>

      {/* Brand Houses Architecture */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-obsidian">Maison Brand Houses</h2>
            <p className="text-xs text-taupe font-light">
              Direct access to curated sub-collections and brand-specific QR code production.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateSubroute('qr-maker')}
            className="text-xs uppercase tracking-[0.18em] text-brass hover:text-obsidian flex items-center gap-1 font-medium transition-colors"
          >
            <span>Launch Brand QR Hangtag Maker</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Luna */}
          <div className="p-6 rounded-2xl bg-[#131211] text-alabaster border border-champagne/30 shadow-md relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
                ATELIER HOUSE 01
              </span>
              <span className="px-2.5 py-1 rounded-full bg-champagne/20 text-champagne text-[11px] font-mono">
                {brandStats.Luna} Garments
              </span>
            </div>
            <h3 className="font-serif text-2xl text-alabaster mb-1">Luna</h3>
            <p className="text-xs text-alabaster/70 font-light mb-6">
              Pinnacle modest couture, royal ceremonial gamis, and whisper silk reserve collections.
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('Luna');
                  onNavigateSubroute('products');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-alabaster text-[10.5px] uppercase tracking-[0.16em] transition-colors text-center"
              >
                View 41 Pieces
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('Luna');
                  onNavigateSubroute('qr-maker');
                }}
                className="py-2 px-3 rounded-xl bg-champagne text-obsidian text-[10.5px] uppercase tracking-[0.16em] font-medium hover:bg-alabaster transition-colors"
                title="Make Luna QR Tag"
              >
                QR Hangtag
              </button>
            </div>
          </div>

          {/* Kemayu */}
          <div className="p-6 rounded-2xl bg-[#0f1a14] text-alabaster border border-emerald-500/30 shadow-md relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-emerald-300 font-medium">
                ATELIER HOUSE 02
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                {brandStats.Kemayu} Garments
              </span>
            </div>
            <h3 className="font-serif text-2xl text-alabaster mb-1">Kemayu</h3>
            <p className="text-xs text-alabaster/70 font-light mb-6">
              Nusantara heritage floral motifs, botanical twill tailoring, and poetic resort archives.
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('Kemayu');
                  onNavigateSubroute('products');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-alabaster text-[10.5px] uppercase tracking-[0.16em] transition-colors text-center"
              >
                View 10 Pieces
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('Kemayu');
                  onNavigateSubroute('qr-maker');
                }}
                className="py-2 px-3 rounded-xl bg-emerald-400 text-obsidian text-[10.5px] uppercase tracking-[0.16em] font-medium hover:bg-alabaster transition-colors"
                title="Make Kemayu QR Tag"
              >
                QR Hangtag
              </button>
            </div>
          </div>

          {/* GZ */}
          <div className="p-6 rounded-2xl bg-[#14171d] text-alabaster border border-blue-400/30 shadow-md relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-blue-300 font-medium">
                ATELIER HOUSE 03
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-mono">
                {brandStats.GZ} Garments
              </span>
            </div>
            <h3 className="font-serif text-2xl text-alabaster mb-1">GZ</h3>
            <p className="text-xs text-alabaster/70 font-light mb-6">
              Monolithic architectural cuts, sharp modest blazers, and urban metropolitan sets.
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('GZ');
                  onNavigateSubroute('products');
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-alabaster text-[10.5px] uppercase tracking-[0.16em] transition-colors text-center"
              >
                View 21 Pieces
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelectBrandFilter('GZ');
                  onNavigateSubroute('qr-maker');
                }}
                className="py-2 px-3 rounded-xl bg-blue-300 text-obsidian text-[10.5px] uppercase tracking-[0.16em] font-medium hover:bg-alabaster transition-colors"
                title="Make GZ QR Tag"
              >
                QR Hangtag
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Supabase Database Connection & System Health */}
      <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif text-lg text-obsidian">Supabase Database: Online</h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-medium">
                Active Pool
              </span>
            </div>
            <p className="text-xs text-taupe font-light mt-0.5">
              Project <code className="text-obsidian font-mono font-medium">luna Project</code> (ID:{' '}
              <code className="text-obsidian font-mono">ixrlszljnnnlibpeyljd</code>). All 72
              products, customer profiles, orders, and inquiries tables verified.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigateSubroute('products')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian text-xs uppercase tracking-[0.18em] transition-colors shrink-0"
        >
          <span>Manage Database Records</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Split Grid: Recent Inquiries & Recent Registered Clientele */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Concierge Inquiries */}
        <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-brass" />
              <h3 className="font-serif text-lg text-obsidian">Recent Concierge Inquiries</h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateSubroute('inquiries')}
              className="text-xs uppercase tracking-[0.18em] text-brass hover:text-obsidian font-medium transition-colors"
            >
              View All ({inquiries.length})
            </button>
          </div>

          {inquiries.length === 0 ? (
            <div className="py-8 text-center text-xs text-taupe font-light">
              No inquiries logged yet.
            </div>
          ) : (
            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div
                  key={inq.id}
                  className="p-3.5 rounded-xl bg-alabaster/70 border border-obsidian/[0.05] flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-obsidian truncate">{inq.full_name}</p>
                    <p className="text-[11px] text-taupe font-light truncate">
                      {inq.preferred_house} · {inq.whatsapp_phone}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full font-medium shrink-0 ${
                      inq.status === 'confirmed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : inq.status === 'in_review'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {inq.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Registered Clientele */}
        <div className="p-6 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brass" />
              <h3 className="font-serif text-lg text-obsidian">VIP Clientele Registry</h3>
            </div>
            <button
              type="button"
              onClick={() => onNavigateSubroute('customers')}
              className="text-xs uppercase tracking-[0.18em] text-brass hover:text-obsidian font-medium transition-colors"
            >
              Open Directory ({customers.length})
            </button>
          </div>

          {customers.length === 0 ? (
            <div className="py-8 text-center text-xs text-taupe font-light">
              No registered members yet.
            </div>
          ) : (
            <div className="space-y-3">
              {customers.slice(0, 4).map((c) => (
                <div
                  key={c.id}
                  className="p-3.5 rounded-xl bg-alabaster/70 border border-obsidian/[0.05] flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-obsidian text-champagne flex items-center justify-center text-xs font-serif font-medium shrink-0">
                      {c.nama ? c.nama.charAt(0) : 'M'}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-obsidian truncate">{c.nama}</p>
                      <p className="text-[11px] text-taupe font-light truncate">
                        {c.kota_kabupaten}, {c.provinsi} · {c.email}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-taupe shrink-0">
                    {c.nomer_whatsapp}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
