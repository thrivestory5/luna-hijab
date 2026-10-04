import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageCircle,
  Calendar,
  Filter,
} from 'lucide-react';
import { AdminInquiryRecord, AdminProfile, adminUpdateInquiryStatus } from '../../lib/supabase';

interface AdminInquiriesManagerProps {
  inquiries: AdminInquiryRecord[];
  adminUser: AdminProfile;
  onRefresh: () => void;
}

export const AdminInquiriesManager: React.FC<AdminInquiriesManagerProps> = ({
  inquiries,
  adminUser,
  onRefresh,
}) => {
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const filtered = inquiries.filter((inq) => {
    const matchStatus = statusFilter === 'ALL' || inq.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      inq.full_name.toLowerCase().includes(q) ||
      inq.whatsapp_phone.toLowerCase().includes(q) ||
      inq.preferred_house.toLowerCase().includes(q) ||
      (inq.notes && inq.notes.toLowerCase().includes(q));
    return matchStatus && matchQuery;
  });

  const handleStatusChange = async (inquiryId: string, nextStatus: string) => {
    setUpdatingId(inquiryId);
    try {
      await adminUpdateInquiryStatus(adminUser.id, inquiryId, nextStatus);
      onRefresh();
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
              CONCIERGE & BRIDAL CONSULTATION LEDGER
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] text-emerald-700 font-mono">
              public.concierge_inquiries
            </span>
          </div>
          <h1 className="font-serif text-3xl text-obsidian">Concierge Inquiries & Appointments</h1>
          <p className="text-xs text-taupe font-light">
            Manage private fitting reservations, bespoke bridal consultation requests, and direct
            client correspondence.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {(['ALL', 'pending', 'in_review', 'confirmed', 'resolved'] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all shrink-0 ${
                statusFilter === st
                  ? 'bg-obsidian text-alabaster shadow-sm'
                  : 'bg-alabaster/80 text-obsidian/70 hover:text-obsidian hover:bg-alabaster'
              }`}
            >
              {st === 'ALL' ? 'All Inquiries' : st.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="relative md:w-80 shrink-0">
          <Search className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search inquiries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-alabaster/70 border border-obsidian/10 text-xs text-obsidian focus:outline-none focus:border-obsidian"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-obsidian/[0.08] bg-alabaster/60 text-[10px] uppercase tracking-[0.2em] text-taupe font-medium">
                <th className="py-4 px-6">Client Name</th>
                <th className="py-4 px-4">House Requested</th>
                <th className="py-4 px-4">Preferred Date</th>
                <th className="py-4 px-4">Consultation Notes</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian/[0.06] text-xs">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-taupe font-light">
                    No concierge inquiries logged.
                  </td>
                </tr>
              ) : (
                filtered.map((inq) => {
                  const cleanWa = inq.whatsapp_phone.replace(/\D/g, '');
                  const waNumber = cleanWa.startsWith('0')
                    ? '62' + cleanWa.slice(1)
                    : cleanWa.startsWith('62')
                    ? cleanWa
                    : '62' + cleanWa;

                  return (
                    <tr key={inq.id} className="hover:bg-alabaster/40 transition-colors">
                      <td className="py-4 px-6">
                        <p className="font-serif text-sm font-medium text-obsidian">
                          {inq.full_name}
                        </p>
                        <a
                          href={`https://wa.me/${waNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-900 font-mono mt-0.5"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>{inq.whatsapp_phone}</span>
                        </a>
                      </td>

                      <td className="py-4 px-4">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[10.5px] uppercase tracking-[0.14em] bg-alabaster border border-obsidian/10 font-medium">
                          {inq.preferred_house}
                        </span>
                      </td>

                      <td className="py-4 px-4 font-mono text-[11px] text-obsidian">
                        {inq.preferred_date ? (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-taupe" />
                            <span>{inq.preferred_date}</span>
                          </div>
                        ) : (
                          <span className="text-taupe italic">Flexible</span>
                        )}
                      </td>

                      <td className="py-4 px-4 max-w-sm">
                        <p className="text-[11px] text-taupe leading-relaxed line-clamp-2">
                          {inq.notes || 'No specific requests provided.'}
                        </p>
                      </td>

                      <td className="py-4 px-4">
                        <select
                          disabled={updatingId === inq.id}
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          className={`px-3 py-1.5 rounded-lg text-[10.5px] uppercase tracking-[0.14em] font-medium border focus:outline-none ${
                            inq.status === 'confirmed'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : inq.status === 'in_review'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : inq.status === 'resolved'
                              ? 'bg-gray-100 text-gray-800 border-gray-300'
                              : 'bg-amber-50 text-amber-800 border-amber-300'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="in_review">In Review</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>

                      <td className="py-4 px-6 text-right">
                        <a
                          href={`https://wa.me/${waNumber}?text=Halo%20${encodeURIComponent(
                            inq.full_name
                          )},%20terima%20kasih%20telah%20menghubungi%20Maison%20Luna%20Atelier.%20Kami%20siap%20membantu%20konsultasi%20eksklusif%20Anda.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-alabaster text-[10.5px] uppercase tracking-[0.14em] font-medium transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
