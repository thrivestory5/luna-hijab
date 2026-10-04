import React from 'react';
import {
  LayoutDashboard,
  Package,
  Users,
  QrCode,
  MessageSquare,
  ShoppingBag,
  ExternalLink,
  LogOut,
  Shield,
  Sparkles,
} from 'lucide-react';
import { BRAND_ASSETS } from '../../data/products';
import { AdminProfile } from '../../lib/supabase';

export type AdminSubroute =
  | 'dashboard'
  | 'products'
  | 'customers'
  | 'qr-maker'
  | 'inquiries'
  | 'orders';

interface AdminSidebarProps {
  currentSubroute: AdminSubroute;
  adminUser: AdminProfile;
  productCount: number;
  customerCount: number;
  inquiryCount: number;
  orderCount: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onNavigateSubroute: (subroute: AdminSubroute) => void;
  onAdminLogout: () => void;
  onNavigateStorefront: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentSubroute,
  adminUser,
  productCount,
  customerCount,
  inquiryCount,
  orderCount,
  isOpenMobile,
  onCloseMobile,
  onNavigateSubroute,
  onAdminLogout,
  onNavigateStorefront,
}) => {
  const navItems: Array<{
    id: AdminSubroute;
    label: string;
    path: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number | string;
    badgeColor?: string;
  }> = [
    {
      id: 'dashboard',
      label: 'Executive Overview',
      path: '/admin',
      icon: LayoutDashboard,
    },
    {
      id: 'products',
      label: 'Products & Catalog',
      path: '/admin/products',
      icon: Package,
      badge: productCount,
      badgeColor: 'bg-champagne/20 text-champagne',
    },
    {
      id: 'customers',
      label: 'Clientele & Users',
      path: '/admin/customers',
      icon: Users,
      badge: customerCount,
      badgeColor: 'bg-brass/25 text-champagne',
    },
    {
      id: 'qr-maker',
      label: 'Brand QR Maker',
      path: '/admin/qr-maker',
      icon: QrCode,
      badge: 'Luna · Kemayu · GZ',
      badgeColor: 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/30',
    },
    {
      id: 'inquiries',
      label: 'Concierge Inquiries',
      path: '/admin/inquiries',
      icon: MessageSquare,
      badge: inquiryCount,
      badgeColor: 'bg-white/10 text-alabaster',
    },
    {
      id: 'orders',
      label: 'Bag Orders',
      path: '/admin/orders',
      icon: ShoppingBag,
      badge: orderCount,
      badgeColor: 'bg-white/10 text-alabaster',
    },
  ];

  const content = (
    <div className="flex flex-col h-full bg-obsidian text-alabaster border-r border-champagne/15 select-none">
      {/* Brand Identity Header */}
      <div className="p-6 border-b border-champagne/15">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-champagne/10 border border-champagne/30 flex items-center justify-center p-1.5 shrink-0">
            <img
              src={BRAND_ASSETS.logoCompact}
              alt="Maison Luna"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="overflow-hidden">
            <span className="font-serif text-sm tracking-[0.22em] uppercase block text-alabaster font-medium truncate">
              MAISON LUNA
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[9.5px] uppercase tracking-[0.2em] text-champagne block truncate">
                ATELIER ADMIN PORTAL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5 custom-scrollbar">
        <p className="px-3 pb-2 text-[9px] uppercase tracking-[0.26em] text-champagne/60 font-medium">
          Maison Operations
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSubroute === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigateSubroute(item.id);
                onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-champagne/20 to-champagne/5 text-alabaster border border-champagne/40 shadow-sm'
                  : 'text-alabaster/70 hover:text-alabaster hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? 'text-champagne' : 'text-alabaster/40 group-hover:text-champagne'
                  }`}
                />
                <span
                  className={`text-xs tracking-[0.06em] truncate ${
                    isActive ? 'font-medium text-alabaster' : 'font-light'
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono shrink-0 ml-2 ${
                    item.badgeColor || 'bg-white/10 text-alabaster'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="pt-6">
          <p className="px-3 pb-2 text-[9px] uppercase tracking-[0.26em] text-champagne/60 font-medium">
            Brand Ecosystem
          </p>
          <div className="px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-alabaster/70">Luna Couture</span>
              <span className="text-champagne font-mono">41 Garments</span>
            </div>
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-alabaster/70">Kemayu Heritage</span>
              <span className="text-champagne font-mono">10 Garments</span>
            </div>
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-alabaster/70">GZ Contemporary</span>
              <span className="text-champagne font-mono">21 Garments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Admin User Profile & Footer Controls */}
      <div className="p-4 border-t border-champagne/15 bg-black/20 space-y-3">
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-8 h-8 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne text-xs font-serif shrink-0">
            {adminUser.full_name ? adminUser.full_name.charAt(0) : 'A'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-alabaster font-medium truncate leading-tight">
              {adminUser.full_name}
            </p>
            <p className="text-[10px] text-champagne/70 font-mono truncate">
              @{adminUser.username}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={onNavigateStorefront}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-alabaster/80 hover:text-alabaster text-[10px] uppercase tracking-[0.16em] transition-colors"
            title="Open Live Boutique Storefront"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="truncate">Storefront</span>
          </button>
          <button
            type="button"
            onClick={onAdminLogout}
            className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-200 text-[10px] uppercase tracking-[0.16em] transition-colors"
            title="Sign Out of Atelier Admin"
          >
            <LogOut className="w-3 h-3" />
            <span className="truncate">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 h-screen sticky top-0 z-30">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[85vw] h-full z-10 shadow-2xl animate-slideRight">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
