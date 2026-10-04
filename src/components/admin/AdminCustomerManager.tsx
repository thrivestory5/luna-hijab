import React, { useState, useMemo } from 'react';
import {
  Users,
  Search,
  Filter,
  Plus,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  Shield,
  Download,
  Edit3,
  Archive,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import {
  AdminProfile,
  CustomerProfile,
  adminCreateCustomer,
  adminUpdateCustomer,
} from '../../lib/supabase';

interface AdminCustomerManagerProps {
  customers: CustomerProfile[];
  adminUser: AdminProfile;
  onRefresh: () => void;
  onCustomerCreated: (customer: CustomerProfile) => void;
  onCustomerUpdated: (customer: CustomerProfile) => void;
}

export const AdminCustomerManager: React.FC<AdminCustomerManagerProps> = ({
  customers,
  adminUser,
  onRefresh,
  onCustomerCreated,
  onCustomerUpdated,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('ALL');
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerProfile | null>(null);
  const [editingCustomer, setEditingCustomer] = useState<CustomerProfile | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // New customer form state
  const [newClient, setNewClient] = useState({
    nama: '',
    email: '',
    password: '',
    nomer_whatsapp: '',
    alamat: '',
    provinsi: 'DKI Jakarta',
    kota_kabupaten: 'Jakarta Selatan',
    kecamatan: '',
    kelurahan_desa: '',
    kode_pos: '',
  });

  // Extract unique provinces for filter
  const provinces = useMemo(() => {
    const list = Array.from(new Set(customers.map((c) => c.provinsi).filter(Boolean)));
    return ['ALL', ...list];
  }, [customers]);

  // Filter customers
  const filteredCustomers = useMemo(() => {
    return customers.filter((c) => {
      if (c.is_archived) return false;
      const matchProv = selectedProvince === 'ALL' || c.provinsi === selectedProvince;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        c.nama.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.nomer_whatsapp.toLowerCase().includes(q) ||
        c.kota_kabupaten.toLowerCase().includes(q) ||
        c.provinsi.toLowerCase().includes(q);
      return matchProv && matchSearch;
    });
  }, [customers, selectedProvince, searchQuery]);

  const showNotification = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Name',
      'Email',
      'WhatsApp',
      'Address',
      'Kelurahan',
      'Kecamatan',
      'City',
      'Province',
      'Postal Code',
      'Registered Date',
    ];
    const rows = filteredCustomers.map((c) => [
      `"${c.id}"`,
      `"${c.nama.replace(/"/g, '""')}"`,
      `"${c.email}"`,
      `"${c.nomer_whatsapp}"`,
      `"${c.alamat.replace(/"/g, '""')}"`,
      `"${c.kelurahan_desa}"`,
      `"${c.kecamatan}"`,
      `"${c.kota_kabupaten}"`,
      `"${c.provinsi}"`,
      `"${c.kode_pos}"`,
      `"${new Date(c.created_at).toLocaleDateString('en-GB')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `maison_luna_vip_clientele_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Clientele dossier exported to CSV!');
  };

  // Submit New Customer
  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.nama.trim() || !newClient.email.trim() || !newClient.nomer_whatsapp.trim()) {
      setActionError('Please fill in Name, Email, and WhatsApp number.');
      return;
    }

    setActionLoading(true);
    setActionError(null);

    try {
      const res = await adminCreateCustomer(adminUser.id, newClient);
      if (res.error || !res.data) {
        setActionError(res.error || 'Failed to register customer.');
      } else {
        onCustomerCreated(res.data);
        setIsAddingNew(false);
        setNewClient({
          nama: '',
          email: '',
          password: '',
          nomer_whatsapp: '',
          alamat: '',
          provinsi: 'DKI Jakarta',
          kota_kabupaten: 'Jakarta Selatan',
          kecamatan: '',
          kelurahan_desa: '',
          kode_pos: '',
        });
        showNotification(`New VIP member ${res.data.nama} registered successfully!`);
      }
    } catch (err: any) {
      setActionError(err.message || 'Registration failed.');
    } finally {
      setActionLoading(false);
    }
  };

  // Submit Edit Customer
  const handleUpdateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCustomer) return;
    setActionLoading(true);
    setActionError(null);

    try {
      const res = await adminUpdateCustomer(adminUser.id, editingCustomer.id, {
        nama: editingCustomer.nama,
        email: editingCustomer.email,
        alamat: editingCustomer.alamat,
        provinsi: editingCustomer.provinsi,
        kota_kabupaten: editingCustomer.kota_kabupaten,
        kecamatan: editingCustomer.kecamatan,
        kelurahan_desa: editingCustomer.kelurahan_desa,
        kode_pos: editingCustomer.kode_pos,
        nomer_whatsapp: editingCustomer.nomer_whatsapp,
      });

      if (res.error || !res.data) {
        setActionError(res.error || 'Failed to update customer.');
      } else {
        onCustomerUpdated(res.data);
        setEditingCustomer(null);
        showNotification(`Profile for ${res.data.nama} updated.`);
      }
    } catch (err: any) {
      setActionError(err.message || 'Update failed.');
    } finally {
      setActionLoading(false);
    }
  };

  // Archive Customer
  const handleArchiveCustomer = async (customer: CustomerProfile) => {
    if (!window.confirm(`Archive VIP record for ${customer.nama}?`)) return;
    try {
      await adminUpdateCustomer(adminUser.id, customer.id, {
        ...customer,
        is_archived: true,
      });
      onCustomerUpdated({ ...customer, is_archived: true });
      showNotification(`${customer.nama} archived.`);
    } catch {
      alert('Failed to archive customer.');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
              CLIENTELE & USER PROFILE DIRECTORY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] text-emerald-700 font-mono">
              public.customer_profiles
            </span>
          </div>
          <h1 className="font-serif text-3xl text-obsidian">Clientele & User Data Management</h1>
          <p className="text-xs text-taupe font-light">
            Comprehensive registry of registered Maison Luna VIP members, delivery addresses, and
            direct concierge communication channels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian bg-white text-xs uppercase tracking-[0.18em] transition-colors"
            title="Export registered clientele to CSV spreadsheet"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian text-alabaster text-xs uppercase tracking-[0.18em] font-medium hover:bg-brass transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add VIP Client</span>
          </button>
        </div>
      </div>

      {successToast && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brass/15 text-brass flex items-center justify-center shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">Active VIP Members</p>
            <p className="font-serif text-2xl font-semibold text-obsidian">
              {filteredCustomers.length}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">WhatsApp Reachable</p>
            <p className="font-serif text-2xl font-semibold text-obsidian">100%</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-champagne/20 text-brass flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">Regions Covered</p>
            <p className="font-serif text-2xl font-semibold text-obsidian">
              {provinces.length > 1 ? provinces.length - 1 : 1} Provinces
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Province Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {provinces.map((prov) => (
            <button
              key={prov}
              type="button"
              onClick={() => setSelectedProvince(prov)}
              className={`px-3.5 py-1.5 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all shrink-0 ${
                selectedProvince === prov
                  ? 'bg-obsidian text-alabaster shadow-sm'
                  : 'bg-alabaster/80 text-obsidian/70 hover:text-obsidian hover:bg-alabaster'
              }`}
            >
              {prov === 'ALL' ? 'All Provinces' : prov}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative md:w-80 shrink-0">
          <Search className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, email, phone, city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-alabaster/70 border border-obsidian/10 text-xs text-obsidian placeholder:text-taupe/60 focus:outline-none focus:border-obsidian focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe hover:text-obsidian"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Clientele Table */}
      <div className="rounded-2xl bg-white border border-obsidian/[0.08] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-obsidian/[0.08] bg-alabaster/60 text-[10px] uppercase tracking-[0.2em] text-taupe font-medium">
                <th className="py-4 px-6">Client Identity</th>
                <th className="py-4 px-4">Contact Channels</th>
                <th className="py-4 px-4">Primary Destination / Address</th>
                <th className="py-4 px-4">City / Province</th>
                <th className="py-4 px-4">Member Since</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian/[0.06] text-xs">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-taupe font-light">
                    No clientele profiles found matching query.
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((c) => {
                  const cleanWa = c.nomer_whatsapp.replace(/\D/g, '');
                  const waNumber = cleanWa.startsWith('0')
                    ? '62' + cleanWa.slice(1)
                    : cleanWa.startsWith('62')
                    ? cleanWa
                    : '62' + cleanWa;

                  return (
                    <tr
                      key={c.id}
                      className="hover:bg-alabaster/40 transition-colors group cursor-pointer"
                    >
                      <td className="py-4 px-6" onClick={() => setSelectedCustomer(c)}>
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-obsidian text-champagne border border-champagne/40 flex items-center justify-center font-serif text-sm font-medium shrink-0 shadow-xs">
                            {c.nama ? c.nama.charAt(0) : 'V'}
                          </div>
                          <div className="min-w-0">
                            <p className="font-serif text-sm text-obsidian font-medium truncate">
                              {c.nama}
                            </p>
                            <span className="inline-block px-2 py-0.5 mt-0.5 rounded text-[9.5px] uppercase tracking-[0.14em] bg-champagne/20 text-brass font-medium">
                              VIP Society
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-obsidian">
                            <Mail className="w-3.5 h-3.5 text-taupe shrink-0" />
                            <span className="truncate">{c.email}</span>
                          </div>
                          <a
                            href={`https://wa.me/${waNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-mono transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{c.nomer_whatsapp}</span>
                          </a>
                        </div>
                      </td>

                      <td className="py-4 px-4 max-w-xs" onClick={() => setSelectedCustomer(c)}>
                        <p className="text-[11px] text-obsidian font-light line-clamp-2">
                          {c.alamat}
                        </p>
                        <p className="text-[10px] text-taupe font-mono mt-0.5">
                          Kec. {c.kecamatan || '-'}, Kel. {c.kelurahan_desa || '-'} ({c.kode_pos})
                        </p>
                      </td>

                      <td className="py-4 px-4" onClick={() => setSelectedCustomer(c)}>
                        <span className="font-medium text-obsidian block">
                          {c.kota_kabupaten}
                        </span>
                        <span className="text-[10px] text-taupe uppercase tracking-wider block">
                          {c.provinsi}
                        </span>
                      </td>

                      <td
                        className="py-4 px-4 font-mono text-[11px] text-taupe"
                        onClick={() => setSelectedCustomer(c)}
                      >
                        {new Date(c.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedCustomer(c)}
                            className="px-2.5 py-1.5 rounded-lg bg-alabaster hover:bg-obsidian hover:text-alabaster text-obsidian text-[10.5px] uppercase tracking-[0.14em] transition-colors"
                            title="View Full Client Dossier"
                          >
                            Dossier
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingCustomer(c)}
                            className="p-1.5 rounded-lg border border-obsidian/15 hover:border-obsidian text-obsidian transition-colors"
                            title="Edit Client Information"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleArchiveCustomer(c)}
                            className="p-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                            title="Archive Record"
                          >
                            <Archive className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="py-3 px-6 bg-alabaster/40 border-t border-obsidian/[0.06] flex items-center justify-between text-[11px] text-taupe font-light">
          <span>
            Registered VIPs: <strong>{filteredCustomers.length}</strong> active profiles
          </span>
          <span className="font-mono text-[10px]">
            Encrypted Database Sync · Supabase PostgreSQL
          </span>
        </div>
      </div>

      {/* Customer Full Dossier Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-obsidian/10">
            <button
              type="button"
              onClick={() => setSelectedCustomer(null)}
              className="absolute right-5 top-5 text-taupe hover:text-obsidian"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-obsidian/10">
              <div className="w-14 h-14 rounded-full bg-obsidian text-champagne border border-champagne/40 flex items-center justify-center font-serif text-xl font-medium shrink-0">
                {selectedCustomer.nama ? selectedCustomer.nama.charAt(0) : 'M'}
              </div>
              <div>
                <span className="text-[9.5px] uppercase tracking-[0.24em] text-champagne font-medium">
                  VIP CLIENTELE DOSSIER
                </span>
                <h2 className="font-serif text-2xl text-obsidian">{selectedCustomer.nama}</h2>
                <p className="text-xs text-taupe font-mono mt-0.5">
                  ID: {selectedCustomer.id.slice(0, 18)}...
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-alabaster border border-obsidian/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-taupe block mb-1">
                    Email Address
                  </span>
                  <p className="font-medium text-obsidian break-all">{selectedCustomer.email}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-alabaster border border-obsidian/[0.06]">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-taupe block mb-1">
                    WhatsApp Phone
                  </span>
                  <p className="font-mono font-medium text-emerald-700">
                    {selectedCustomer.nomer_whatsapp}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-alabaster border border-obsidian/[0.06] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-taupe block">
                  Couture Delivery Destination
                </span>
                <p className="text-obsidian font-medium leading-relaxed">
                  {selectedCustomer.alamat}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-obsidian/[0.06] text-[11px] text-taupe">
                  <div>
                    <span className="block text-[9px] uppercase">Kelurahan / Desa:</span>
                    <strong className="text-obsidian">{selectedCustomer.kelurahan_desa || '-'}</strong>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase">Kecamatan:</span>
                    <strong className="text-obsidian">{selectedCustomer.kecamatan || '-'}</strong>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase">Kota / Kabupaten:</span>
                    <strong className="text-obsidian">{selectedCustomer.kota_kabupaten}</strong>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase">Provinsi & Kode Pos:</span>
                    <strong className="text-obsidian">
                      {selectedCustomer.provinsi} ({selectedCustomer.kode_pos})
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-champagne/10 border border-champagne/20">
                <span className="text-[11px] text-brass">
                  Joined Maison Registry:{' '}
                  <strong>
                    {new Date(selectedCustomer.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </strong>
                </span>
                <span className="px-2 py-0.5 rounded text-[9.5px] uppercase tracking-[0.16em] bg-champagne/30 text-brass font-medium">
                  Verified Member
                </span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-obsidian/10 flex items-center justify-between">
              <a
                href={`https://wa.me/${selectedCustomer.nomer_whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-alabaster text-xs uppercase tracking-[0.16em] font-medium hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setEditingCustomer(selectedCustomer);
                  setSelectedCustomer(null);
                }}
                className="px-4 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian text-xs uppercase tracking-[0.16em] transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Customer Modal */}
      {editingCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-obsidian/10 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setEditingCustomer(null)}
              className="absolute right-5 top-5 text-taupe hover:text-obsidian"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
                CLIENT DATA MANAGEMENT
              </span>
              <h2 className="font-serif text-2xl text-obsidian mt-0.5">
                Edit Client: {editingCustomer.nama}
              </h2>
            </div>

            {actionError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {actionError}
              </div>
            )}

            <form onSubmit={handleUpdateCustomer} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingCustomer.nama}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, nama: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={editingCustomer.email}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                  WhatsApp Contact *
                </label>
                <input
                  type="text"
                  required
                  value={editingCustomer.nomer_whatsapp}
                  onChange={(e) =>
                    setEditingCustomer({ ...editingCustomer, nomer_whatsapp: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 font-mono focus:outline-none focus:border-obsidian"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                  Street Address
                </label>
                <textarea
                  rows={2}
                  value={editingCustomer.alamat}
                  onChange={(e) =>
                    setEditingCustomer({ ...editingCustomer, alamat: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kota / Kabupaten
                  </label>
                  <input
                    type="text"
                    value={editingCustomer.kota_kabupaten}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, kota_kabupaten: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    value={editingCustomer.provinsi}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, provinsi: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kecamatan
                  </label>
                  <input
                    type="text"
                    value={editingCustomer.kecamatan}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, kecamatan: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kelurahan
                  </label>
                  <input
                    type="text"
                    value={editingCustomer.kelurahan_desa}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, kelurahan_desa: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={editingCustomer.kode_pos}
                    onChange={(e) =>
                      setEditingCustomer({ ...editingCustomer, kode_pos: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 font-mono focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-obsidian/10">
                <button
                  type="button"
                  onClick={() => setEditingCustomer(null)}
                  className="px-5 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian text-[11px] uppercase tracking-[0.18em] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-xl bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-brass transition-colors disabled:opacity-60"
                >
                  {actionLoading ? 'Updating...' : 'Save Profile Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add New VIP Client Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-obsidian/10 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="absolute right-5 top-5 text-taupe hover:text-obsidian"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
                NEW VIP CLIENT REGISTRATION
              </span>
              <h2 className="font-serif text-2xl text-obsidian mt-0.5">
                Register VIP Atelier Member
              </h2>
            </div>

            {actionError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                {actionError}
              </div>
            )}

            <form onSubmit={handleCreateCustomer} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Raden Roro Annisa"
                    value={newClient.nama}
                    onChange={(e) => setNewClient({ ...newClient, nama: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="annisa@maisonluna.id"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="081288991234"
                    value={newClient.nomer_whatsapp}
                    onChange={(e) =>
                      setNewClient({ ...newClient, nomer_whatsapp: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 font-mono focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Initial Password
                  </label>
                  <input
                    type="password"
                    placeholder="Default: member123"
                    value={newClient.password}
                    onChange={(e) => setNewClient({ ...newClient, password: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                  Complete Street Address
                </label>
                <textarea
                  rows={2}
                  placeholder="Jl. Brawijaya Raya No. 42, Kebayoran Baru"
                  value={newClient.alamat}
                  onChange={(e) => setNewClient({ ...newClient, alamat: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kota / Kabupaten
                  </label>
                  <input
                    type="text"
                    value={newClient.kota_kabupaten}
                    onChange={(e) =>
                      setNewClient({ ...newClient, kota_kabupaten: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Provinsi
                  </label>
                  <input
                    type="text"
                    value={newClient.provinsi}
                    onChange={(e) => setNewClient({ ...newClient, provinsi: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kecamatan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kebayoran Baru"
                    value={newClient.kecamatan}
                    onChange={(e) => setNewClient({ ...newClient, kecamatan: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kelurahan
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pulo"
                    value={newClient.kelurahan_desa}
                    onChange={(e) =>
                      setNewClient({ ...newClient, kelurahan_desa: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 focus:outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1">
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    placeholder="12160"
                    value={newClient.kode_pos}
                    onChange={(e) => setNewClient({ ...newClient, kode_pos: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-alabaster border border-obsidian/15 font-mono focus:outline-none focus:border-obsidian"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-obsidian/10">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-5 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian text-[11px] uppercase tracking-[0.18em] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 rounded-xl bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-brass transition-colors disabled:opacity-60"
                >
                  {actionLoading ? 'Registering...' : 'Register VIP Member in Supabase'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
