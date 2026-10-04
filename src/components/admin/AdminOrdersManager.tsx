import React, { useState } from 'react';
import { ShoppingBag, Search, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { AdminOrderRecord } from '../../lib/supabase';

interface AdminOrdersManagerProps {
  orders: AdminOrderRecord[];
}

export const AdminOrdersManager: React.FC<AdminOrdersManagerProps> = ({ orders }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = orders.filter((o) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const matchId = o.id.toLowerCase().includes(q);
    const matchChannel = o.channel.toLowerCase().includes(q);
    const matchItems = o.items.some(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q) ||
        item.variant.toLowerCase().includes(q)
    );
    return matchId || matchChannel || matchItems;
  });

  const totalGross = orders.reduce((sum, o) => sum + (o.total_amount || 0), 0);
  const formattedGross = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(totalGross);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
              BAG CHECKOUT & TRANSACTION ARCHIVE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] text-emerald-700 font-mono">public.orders</span>
          </div>
          <h1 className="font-serif text-3xl text-obsidian">Customer Bag Orders</h1>
          <p className="text-xs text-taupe font-light">
            Order logs initiated via WhatsApp Atelier Concierge and online bag checkout.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">Total Transaction Volume</p>
            <p className="font-serif text-2xl font-semibold text-obsidian">{formattedGross}</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-obsidian/[0.08] bg-alabaster/60 text-[10px] uppercase tracking-[0.2em] text-taupe font-medium">
                <th className="py-4 px-6">Order ID & Date</th>
                <th className="py-4 px-4">Items Reserved</th>
                <th className="py-4 px-4">Channel</th>
                <th className="py-4 px-6 text-right">Order Valuation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian/[0.06] text-xs">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-taupe font-light">
                    No order transactions recorded yet.
                  </td>
                </tr>
              ) : (
                filtered.map((order) => (
                  <tr key={order.id} className="hover:bg-alabaster/40 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-mono text-xs font-semibold text-obsidian block">
                        ORD-{order.id.slice(0, 8).toUpperCase()}
                      </span>
                      <span className="text-[11px] text-taupe font-light flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3 text-taupe" />
                        {new Date(order.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </td>

                    <td className="py-4 px-4 max-w-md">
                      <div className="space-y-1.5">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass shrink-0"></span>
                            <span className="font-medium text-obsidian">{item.name}</span>
                            <span className="font-mono text-[10.5px] text-taupe">({item.sku})</span>
                            <span className="text-taupe">·</span>
                            <span className="text-taupe">Qty: {item.quantity}</span>
                            <span className="text-taupe">·</span>
                            <span className="text-taupe">{item.size}</span>
                          </div>
                        ))}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.14em] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {order.channel.replace('_', ' ')}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <span className="font-serif text-base font-semibold text-obsidian font-mono">
                        {order.formatted_total}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
