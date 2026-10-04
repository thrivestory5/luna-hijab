import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Camera,
  CheckCircle2,
  LogOut,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';
import {
  CustomerProfile,
  loginCustomerAccount,
  registerCustomerAccount,
  updateCustomerAvatar,
  uploadCustomerAvatar,
} from '../lib/supabase';
import {
  INDONESIAN_PROVINCES,
  WilayahItem,
  KodePosSuggestion,
  fetchRegenciesByProvince,
  fetchDistrictsByRegency,
  fetchVillagesByDistrict,
  fetchKodePosSuggestions,
  searchByKodePos,
  resolveWilayahFromKodePos,
} from '../lib/wilayahIndonesia';

interface CustomerAuthPageProps {
  isOpen: boolean;
  currentUser: CustomerProfile | null;
  onAuthSuccess: (profile: CustomerProfile) => void;
  onLogout: () => void;
  onClose: () => void;
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const CustomerAuthPage: React.FC<CustomerAuthPageProps> = ({
  isOpen,
  currentUser,
  onAuthSuccess,
  onLogout,
  onClose,
}) => {
  // Login is the default tab when opened
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register State
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomerWhatsapp, setNomerWhatsapp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kotaKabupaten, setKotaKabupaten] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kelurahanDesa, setKelurahanDesa] = useState('');
  const [kodePos, setKodePos] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  // Cascading Wilayah Indonesia IDs & Options
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
  const [regencyOptions, setRegencyOptions] = useState<WilayahItem[]>([]);
  const [districtOptions, setDistrictOptions] = useState<WilayahItem[]>([]);
  const [villageOptions, setVillageOptions] = useState<WilayahItem[]>([]);
  const [kodePosOptions, setKodePosOptions] = useState<KodePosSuggestion[]>([]);
  const [loadingWilayah, setLoadingWilayah] = useState<
    'kota' | 'kecamatan' | 'kelurahan' | 'kodepos' | null
  >(null);
  const [activeDropdown, setActiveDropdown] = useState<
    'provinsi' | 'kota' | 'kecamatan' | 'kelurahan' | 'kodepos' | null
  >(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const profileFileInputRef = useRef<HTMLInputElement | null>(null);

  // Reset to default "login" tab every time the popup opens
  useEffect(() => {
    if (isOpen) {
      setMode('login');
      setErrorMsg('');
      setSuccessMsg('');
      setActiveDropdown(null);
    }
  }, [isOpen]);

  // Close active dropdown when clicking outside its field wrapper (allows scrollbar dragging)
  useEffect(() => {
    if (!activeDropdown) return;
    const handleMouseDownOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest(`[data-wilayah-field="${activeDropdown}"]`)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleMouseDownOutside);
    return () => document.removeEventListener('mousedown', handleMouseDownOutside);
  }, [activeDropdown]);

  if (!isOpen) return null;

  // Filtered suggestion lists (show full list if current value is empty or already an exact selected match)
  const filteredProvinces =
    provinsi.trim().length >= 1
      ? INDONESIAN_PROVINCES.some(
          (p) => p.name.toLowerCase() === provinsi.trim().toLowerCase()
        )
        ? INDONESIAN_PROVINCES
        : INDONESIAN_PROVINCES.filter((p) =>
            p.name.toLowerCase().includes(provinsi.trim().toLowerCase())
          )
      : [];

  const isExactRegency = regencyOptions.some(
    (r) => r.name.toLowerCase() === kotaKabupaten.trim().toLowerCase()
  );
  const filteredRegencies = regencyOptions.filter((r) =>
    kotaKabupaten.trim() && !isExactRegency
      ? r.name.toLowerCase().includes(kotaKabupaten.trim().toLowerCase())
      : true
  );

  const isExactDistrict = districtOptions.some(
    (d) => d.name.toLowerCase() === kecamatan.trim().toLowerCase()
  );
  const filteredDistricts = districtOptions.filter((d) =>
    kecamatan.trim() && !isExactDistrict
      ? d.name.toLowerCase().includes(kecamatan.trim().toLowerCase())
      : true
  );

  const isExactVillage = villageOptions.some(
    (v) => v.name.toLowerCase() === kelurahanDesa.trim().toLowerCase()
  );
  const filteredVillages = villageOptions.filter((v) =>
    kelurahanDesa.trim() && !isExactVillage
      ? v.name.toLowerCase().includes(kelurahanDesa.trim().toLowerCase())
      : true
  );

  const isExactKodePos = kodePosOptions.some((k) => k.code === kodePos.trim());
  const filteredKodePos = kodePosOptions.filter((k) =>
    kodePos.trim() && !isExactKodePos
      ? k.code.includes(kodePos.trim()) ||
        k.label.toLowerCase().includes(kodePos.trim().toLowerCase())
      : true
  );

  const handleChooseProvince = async (item: WilayahItem) => {
    setProvinsi(item.name);
    setSelectedProvinceId(item.id);
    setKotaKabupaten('');
    setKecamatan('');
    setKelurahanDesa('');
    setKodePos('');
    setRegencyOptions([]);
    setDistrictOptions([]);
    setVillageOptions([]);
    setKodePosOptions([]);
    setActiveDropdown(null);

    setLoadingWilayah('kota');
    try {
      const regencies = await fetchRegenciesByProvince(item.id);
      setRegencyOptions(regencies);
    } finally {
      setLoadingWilayah((prev) => (prev === 'kota' ? null : prev));
    }
  };

  const handleChooseRegency = async (item: WilayahItem) => {
    setKotaKabupaten(item.name);
    setKecamatan('');
    setKelurahanDesa('');
    setKodePos('');
    setDistrictOptions([]);
    setVillageOptions([]);
    setKodePosOptions([]);
    setActiveDropdown(null);

    setLoadingWilayah('kecamatan');
    try {
      const districts = await fetchDistrictsByRegency(item.id);
      setDistrictOptions(districts);
    } finally {
      setLoadingWilayah((prev) => (prev === 'kecamatan' ? null : prev));
    }
  };

  const handleChooseDistrict = async (item: WilayahItem) => {
    setKecamatan(item.name);
    setKelurahanDesa('');
    setKodePos('');
    setVillageOptions([]);
    setActiveDropdown(null);

    setLoadingWilayah('kelurahan');
    try {
      const villages = await fetchVillagesByDistrict(item.id);
      setVillageOptions(villages);
    } finally {
      setLoadingWilayah((prev) => (prev === 'kelurahan' ? null : prev));
    }

    const kp = await fetchKodePosSuggestions({
      provinceId: selectedProvinceId,
      provinsi,
      kotaKabupaten,
      kecamatan: item.name,
    });
    setKodePosOptions(kp);
  };

  const handleChooseVillage = async (item: WilayahItem) => {
    setKelurahanDesa(item.name);
    setActiveDropdown(null);

    setLoadingWilayah('kodepos');
    try {
      const kp = await fetchKodePosSuggestions({
        provinceId: selectedProvinceId,
        provinsi,
        kotaKabupaten,
        kecamatan,
        kelurahanDesa: item.name,
      });
      setKodePosOptions(kp);
      if (kp.length === 1 && !kodePos) {
        setKodePos(kp[0].code);
      }
    } finally {
      setLoadingWilayah((prev) => (prev === 'kodepos' ? null : prev));
    }
  };

  const applyKodePosAutoFill = async (item: KodePosSuggestion) => {
    if (!item.province && !item.regency && !item.district && !item.village) return;

    // Instant optimistic fill before Emsifa options finish resolving
    if (item.province) setProvinsi(item.province);
    if (item.regency) setKotaKabupaten(item.regency);
    if (item.district) setKecamatan(item.district);
    if (item.village) setKelurahanDesa(item.village);

    const resolved = await resolveWilayahFromKodePos(item);
    if (resolved.provinceId) setSelectedProvinceId(resolved.provinceId);
    if (resolved.provinsi) setProvinsi(resolved.provinsi);
    if (resolved.kotaKabupaten) setKotaKabupaten(resolved.kotaKabupaten);
    if (resolved.kecamatan) setKecamatan(resolved.kecamatan);
    if (resolved.kelurahanDesa) setKelurahanDesa(resolved.kelurahanDesa);
    if (resolved.regencies.length > 0) setRegencyOptions(resolved.regencies);
    if (resolved.districts.length > 0) setDistrictOptions(resolved.districts);
    if (resolved.villages.length > 0) setVillageOptions(resolved.villages);
  };

  const handleChooseKodePos = async (item: KodePosSuggestion) => {
    setKodePos(item.code);
    setActiveDropdown(null);
    await applyKodePosAutoFill(item);
  };

  const handleKodePosChange = async (value: string) => {
    setKodePos(value);
    setActiveDropdown('kodepos');

    const clean = value.trim();
    if (clean.length < 3) return;

    setLoadingWilayah('kodepos');
    try {
      const results = await searchByKodePos(clean);
      if (results.length > 0) {
        setKodePosOptions(results);
        if (clean.length === 5) {
          const exactMatches = results.filter((r) => r.code === clean);
          const primaryMatch = exactMatches[0] || results[0];
          await applyKodePosAutoFill(primaryMatch);
          if (exactMatches.length === 1) {
            setActiveDropdown(null);
          }
        }
      }
    } finally {
      setLoadingWilayah((prev) => (prev === 'kodepos' ? null : prev));
    }
  };

  const handleSelectPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Mohon pilih file gambar (JPG, PNG, atau WEBP).');
      return;
    }
    setPhotoFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateExistingUserPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentUser) return;
    setLoading(true);
    setErrorMsg('');
    try {
      const uploadedUrl = await uploadCustomerAvatar(file);
      const res = await updateCustomerAvatar(currentUser.id, currentUser.email, uploadedUrl);
      if (res.error) {
        setErrorMsg(res.error);
      } else if (res.data) {
        onAuthSuccess(res.data);
        setSuccessMsg('Foto profil berhasil diperbarui.');
      }
    } catch {
      setErrorMsg('Gagal mengunggah foto profil.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const cleanEmail = loginEmail.trim().toLowerCase();
    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMsg('Format email tidak valid (contoh: nama@email.com).');
      return;
    }
    if (!loginPassword) {
      setErrorMsg('Silakan masukkan password Anda.');
      return;
    }
    if (loginPassword.length < 8) {
      setErrorMsg('Password minimal 8 karakter.');
      return;
    }

    setLoading(true);
    try {
      const result = await loginCustomerAccount(cleanEmail, loginPassword);
      if (result.error || !result.data) {
        setErrorMsg(result.error || 'Gagal masuk. Periksa email dan password Anda.');
      } else {
        onAuthSuccess(result.data);
        onClose();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const cleanEmail = email.trim().toLowerCase();
    if (!nama.trim()) {
      setErrorMsg('Nama lengkap wajib diisi.');
      return;
    }
    if (!EMAIL_REGEX.test(cleanEmail)) {
      setErrorMsg('Format email tidak valid (contoh: nama@email.com).');
      return;
    }
    if (password.length < 8) {
      setErrorMsg('Password minimal 8 karakter.');
      return;
    }
    if (
      !alamat.trim() ||
      !provinsi.trim() ||
      !kotaKabupaten.trim() ||
      !kecamatan.trim() ||
      !kelurahanDesa.trim() ||
      !kodePos.trim() ||
      !nomerWhatsapp.trim()
    ) {
      setErrorMsg('Mohon lengkapi seluruh data alamat dan nomer WhatsApp Anda.');
      return;
    }

    setLoading(true);
    try {
      let uploadedFotoUrl: string | null = photoPreview;
      if (photoFile) {
        uploadedFotoUrl = await uploadCustomerAvatar(photoFile);
      }

      const result = await registerCustomerAccount({
        nama: nama.trim(),
        email: cleanEmail,
        password,
        alamat: alamat.trim(),
        provinsi: provinsi.trim(),
        kota_kabupaten: kotaKabupaten.trim(),
        kecamatan: kecamatan.trim(),
        kelurahan_desa: kelurahanDesa.trim(),
        kode_pos: kodePos.trim(),
        nomer_whatsapp: nomerWhatsapp.trim(),
        foto_url: uploadedFotoUrl,
      });

      if (result.error || !result.data) {
        setErrorMsg(result.error || 'Gagal mendaftar. Silakan coba lagi.');
      } else {
        onAuthSuccess(result.data);
        onClose();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-obsidian/55 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className={`relative w-full ${
          currentUser ? 'max-w-2xl' : mode === 'login' ? 'max-w-md' : 'max-w-2xl'
        } max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-obsidian border border-obsidian/10 shadow-2xl p-6 sm:p-9 transition-all duration-300`}
      >
        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close login popup"
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-alabaster flex items-center justify-center text-obsidian/70 hover:text-obsidian transition-colors"
        >
          <X className="w-4 h-4 stroke-[1.25]" />
        </button>

        {/* Brand Header inside Popup */}
        <div className="flex items-center gap-2.5 mb-6">
          <img src={BRAND_ASSETS.logoCompact} alt="Luna Indonesia" className="h-7 w-auto" />
          <div>
            <span className="font-serif text-base tracking-[0.24em] uppercase text-obsidian block leading-none">
              LUNA INDONESIA
            </span>
            <span className="text-[8.5px] uppercase tracking-[0.28em] text-champagne font-medium block mt-0.5">
              MAISON LUNA PRIVILÈGE
            </span>
          </div>
        </div>

        {/* Logged-in Member Profile Popup View */}
        {currentUser ? (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-obsidian/10">
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-travertine border-2 border-champagne shadow-md flex items-center justify-center">
                  {currentUser.foto_url ? (
                    <img
                      src={currentUser.foto_url}
                      alt={currentUser.nama}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <span className="font-serif text-2xl text-brass">
                      {currentUser.nama.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => profileFileInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-obsidian text-alabaster flex items-center justify-center shadow-md hover:bg-brass transition-colors"
                  title="Ubah Foto Profil"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
                <input
                  ref={profileFileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleUpdateExistingUserPhoto}
                  className="hidden"
                />
              </div>

              <div className="text-center sm:text-left flex-1">
                <p className="text-[9.5px] uppercase tracking-[0.24em] text-champagne font-medium">
                  MEMBER AKUN AKTIF
                </p>
                <h2 className="font-serif text-2xl text-obsidian mt-0.5">{currentUser.nama}</h2>
                <p className="text-xs text-taupe font-light mt-0.5">{currentUser.email}</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-obsidian/20 text-[10.5px] uppercase tracking-[0.2em] text-obsidian hover:bg-obsidian hover:text-alabaster transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-alabaster">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-taupe">
                  Alamat Email
                </p>
                <p className="text-obsidian font-medium mt-1">{currentUser.email}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-alabaster">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-taupe">Nomer WhatsApp</p>
                <p className="text-obsidian font-medium mt-1">{currentUser.nomer_whatsapp}</p>
              </div>
              <div className="sm:col-span-2 p-3.5 rounded-2xl bg-alabaster">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-taupe">Alamat Lengkap</p>
                <p className="text-obsidian font-medium mt-1">{currentUser.alamat}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-alabaster">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-taupe">
                  Kelurahan / Desa &amp; Kecamatan
                </p>
                <p className="text-obsidian font-medium mt-1">
                  {currentUser.kelurahan_desa}, Kec. {currentUser.kecamatan}
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-alabaster">
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-taupe">
                  Kota / Kabupaten, Provinsi &amp; Kode Pos
                </p>
                <p className="text-obsidian font-medium mt-1">
                  {currentUser.kota_kabupaten}, {currentUser.provinsi} ({currentUser.kode_pos})
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Unauthenticated Popup: Login (Default) or Register */
          <div>
            {/* Mode Switcher Tabs — Login First & Default */}
            <div className="inline-flex p-1 rounded-full bg-alabaster border border-obsidian/[0.08] mb-6 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg('');
                }}
                className={`flex-1 sm:flex-initial px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                  mode === 'login'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Masuk (Login)
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setErrorMsg('');
                }}
                className={`flex-1 sm:flex-initial px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                  mode === 'register'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Daftar (Register)
              </button>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {errorMsg}
              </div>
            )}

            {mode === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <h2 className="font-serif text-3xl text-obsidian">Masuk ke Akun Anda</h2>
                  <p className="text-xs text-taupe font-light mt-1">
                    Gunakan alamat email Anda untuk masuk ke akun member.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                    Alamat Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
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
                      minLength={8}
                      placeholder="Minimal 8 karakter"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors disabled:opacity-60"
                >
                  {loading ? 'Memproses...' : 'Masuk Sekarang'}
                </button>

                <p className="text-center text-xs text-taupe font-light pt-2">
                  Belum memiliki akun?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setErrorMsg('');
                    }}
                    className="text-obsidian font-medium underline hover:text-brass"
                  >
                    Daftar Member Baru →
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3.5 border-b border-obsidian/10">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-obsidian">
                      Registrasi Member Baru
                    </h2>
                    <p className="text-xs text-taupe font-light mt-0.5">
                      Gunakan alamat email aktif Anda untuk pendaftaran akun.
                    </p>
                  </div>

                  {/* Opsi Menambahkan Foto Profil */}
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-13 h-13 rounded-full overflow-hidden bg-alabaster border-2 border-dashed border-champagne hover:border-obsidian cursor-pointer flex items-center justify-center shrink-0 transition-colors"
                      title="Tambahkan Foto Profil"
                    >
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Preview Foto"
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Camera className="w-4 h-4 text-brass" />
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[10.5px] uppercase tracking-[0.18em] text-obsidian font-medium underline hover:text-brass"
                      >
                        {photoPreview ? 'Ubah Foto' : 'Tambah Foto Profil'}
                      </button>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleSelectPhoto}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Nama lengkap Anda"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Alamat Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="nama@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        minLength={8}
                        placeholder="Minimal 8 karakter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Nomer WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxxx"
                        value={nomerWhatsapp}
                        onChange={(e) => setNomerWhatsapp(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Alamat Lengkap *
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Nama jalan, nomor rumah, RT/RW, patokan"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  {/* PROVINSI — Shows suggestions after typing 1+ letter */}
                  <div
                    data-wilayah-field="provinsi"
                    className={`relative ${activeDropdown === 'provinsi' ? 'z-50' : 'z-10'}`}
                  >
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Provinsi *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Ketik huruf untuk cari Provinsi"
                        value={provinsi}
                        onClick={() => setActiveDropdown('provinsi')}
                        onFocus={() => setActiveDropdown('provinsi')}
                        onChange={(e) => {
                          setProvinsi(e.target.value);
                          setActiveDropdown('provinsi');
                        }}
                        className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        onClick={() =>
                          setActiveDropdown((prev) => (prev === 'provinsi' ? null : 'provinsi'))
                        }
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-taupe hover:text-obsidian transition-colors"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === 'provinsi' ? 'rotate-180 text-obsidian' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {activeDropdown === 'provinsi' && provinsi.trim().length >= 1 && (
                      <div className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl overflow-hidden bg-white border border-obsidian/20 shadow-[0_12px_32px_rgba(28,24,21,0.18)]">
                        {filteredProvinces.length > 0 ? (
                          <ul
                            data-lenis-prevent
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            className="max-h-44 overflow-y-auto overscroll-contain divide-y divide-obsidian/[0.06]"
                          >
                            {filteredProvinces.map((item) => {
                              const isSelected =
                                item.name.toLowerCase() === provinsi.trim().toLowerCase();
                              return (
                                <li key={item.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleChooseProvince(item)}
                                    className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors ${
                                      isSelected
                                        ? 'bg-alabaster font-medium text-brass'
                                        : 'text-obsidian hover:bg-alabaster'
                                    }`}
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <div className="px-3.5 py-2.5 text-xs text-taupe">
                            Provinsi tidak ditemukan.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* KOTA / KABUPATEN — Shows all Kota/Kabupaten in chosen province on click */}
                  <div
                    data-wilayah-field="kota"
                    className={`relative ${activeDropdown === 'kota' ? 'z-50' : 'z-10'}`}
                  >
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                      Kota / Kabupaten *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        autoComplete="off"
                        placeholder={
                          provinsi ? 'Klik untuk pilih Kota / Kabupaten' : 'Pilih Provinsi dahulu'
                        }
                        value={kotaKabupaten}
                        onClick={() => setActiveDropdown('kota')}
                        onFocus={() => setActiveDropdown('kota')}
                        onChange={(e) => {
                          setKotaKabupaten(e.target.value);
                          setActiveDropdown('kota');
                        }}
                        className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        onClick={() =>
                          setActiveDropdown((prev) => (prev === 'kota' ? null : 'kota'))
                        }
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-taupe hover:text-obsidian transition-colors"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === 'kota' ? 'rotate-180 text-obsidian' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {activeDropdown === 'kota' && (
                      <div className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-xl overflow-hidden bg-white border border-obsidian/20 shadow-[0_12px_32px_rgba(28,24,21,0.18)]">
                        {loadingWilayah === 'kota' ? (
                          <div className="px-3.5 py-2.5 text-xs text-taupe">
                            Memuat daftar Kota / Kabupaten...
                          </div>
                        ) : !selectedProvinceId ? (
                          <div className="px-3.5 py-2.5 text-xs text-taupe">
                            Pilih Provinsi dari daftar saran terlebih dahulu.
                          </div>
                        ) : filteredRegencies.length > 0 ? (
                          <ul
                            data-lenis-prevent
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            className="max-h-44 overflow-y-auto overscroll-contain divide-y divide-obsidian/[0.06]"
                          >
                            {filteredRegencies.map((item) => {
                              const isSelected =
                                item.name.toLowerCase() === kotaKabupaten.trim().toLowerCase();
                              return (
                                <li key={item.id}>
                                  <button
                                    type="button"
                                    onClick={() => handleChooseRegency(item)}
                                    className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors ${
                                      isSelected
                                        ? 'bg-alabaster font-medium text-brass'
                                        : 'text-obsidian hover:bg-alabaster'
                                    }`}
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <div className="px-3.5 py-2.5 text-xs text-taupe">
                            Kota / Kabupaten tidak ditemukan.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* KECAMATAN, KELURAHAN / DESA, & KODE POS IN ONE ROW */}
                  <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* KECAMATAN — Opens upward so it is never clipped by the bottom of the modal */}
                    <div
                      data-wilayah-field="kecamatan"
                      className={`relative ${activeDropdown === 'kecamatan' ? 'z-50' : 'z-10'}`}
                    >
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                        Kecamatan *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          autoComplete="off"
                          placeholder={
                            kotaKabupaten ? 'Pilih Kecamatan' : 'Pilih Kota/Kab dahulu'
                          }
                          value={kecamatan}
                          onClick={() => setActiveDropdown('kecamatan')}
                          onFocus={() => setActiveDropdown('kecamatan')}
                          onChange={(e) => {
                            setKecamatan(e.target.value);
                            setActiveDropdown('kecamatan');
                          }}
                          className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          onClick={() =>
                            setActiveDropdown((prev) =>
                              prev === 'kecamatan' ? null : 'kecamatan'
                            )
                          }
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-taupe hover:text-obsidian transition-colors"
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              activeDropdown === 'kecamatan' ? 'rotate-180 text-obsidian' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {activeDropdown === 'kecamatan' && (
                        <div className="absolute left-0 w-full sm:w-[240px] bottom-full mb-1.5 z-50 rounded-xl overflow-hidden bg-white border border-obsidian/20 shadow-[0_12px_32px_rgba(28,24,21,0.18)]">
                          {loadingWilayah === 'kecamatan' ? (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Memuat daftar Kecamatan...
                            </div>
                          ) : districtOptions.length === 0 ? (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Pilih Kota / Kabupaten atau ketik Kode Pos dahulu.
                            </div>
                          ) : filteredDistricts.length > 0 ? (
                            <ul
                              data-lenis-prevent
                              onWheel={(e) => e.stopPropagation()}
                              onTouchMove={(e) => e.stopPropagation()}
                              className="max-h-44 overflow-y-auto overscroll-contain divide-y divide-obsidian/[0.06]"
                            >
                              {filteredDistricts.map((item) => {
                                const isSelected =
                                  item.name.toLowerCase() === kecamatan.trim().toLowerCase();
                                return (
                                  <li key={item.id}>
                                    <button
                                      type="button"
                                      onClick={() => handleChooseDistrict(item)}
                                      className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors ${
                                        isSelected
                                          ? 'bg-alabaster font-medium text-brass'
                                          : 'text-obsidian hover:bg-alabaster'
                                      }`}
                                    >
                                      {item.name}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Kecamatan tidak ditemukan.
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* KELURAHAN / DESA — Opens upward so it is never clipped by the bottom of the modal */}
                    <div
                      data-wilayah-field="kelurahan"
                      className={`relative ${activeDropdown === 'kelurahan' ? 'z-50' : 'z-10'}`}
                    >
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                        Kelurahan / Desa *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          autoComplete="off"
                          placeholder={
                            kecamatan ? 'Pilih Kelurahan / Desa' : 'Pilih Kecamatan dahulu'
                          }
                          value={kelurahanDesa}
                          onClick={() => setActiveDropdown('kelurahan')}
                          onFocus={() => setActiveDropdown('kelurahan')}
                          onChange={(e) => {
                            setKelurahanDesa(e.target.value);
                            setActiveDropdown('kelurahan');
                          }}
                          className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          onClick={() =>
                            setActiveDropdown((prev) =>
                              prev === 'kelurahan' ? null : 'kelurahan'
                            )
                          }
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-taupe hover:text-obsidian transition-colors"
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              activeDropdown === 'kelurahan' ? 'rotate-180 text-obsidian' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {activeDropdown === 'kelurahan' && (
                        <div className="absolute left-0 w-full sm:w-[240px] bottom-full mb-1.5 z-50 rounded-xl overflow-hidden bg-white border border-obsidian/20 shadow-[0_12px_32px_rgba(28,24,21,0.18)]">
                          {loadingWilayah === 'kelurahan' ? (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Memuat daftar Kelurahan / Desa...
                            </div>
                          ) : villageOptions.length === 0 ? (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Pilih Kecamatan atau ketik Kode Pos dahulu.
                            </div>
                          ) : filteredVillages.length > 0 ? (
                            <ul
                              data-lenis-prevent
                              onWheel={(e) => e.stopPropagation()}
                              onTouchMove={(e) => e.stopPropagation()}
                              className="max-h-44 overflow-y-auto overscroll-contain divide-y divide-obsidian/[0.06]"
                            >
                              {filteredVillages.map((item) => {
                                const isSelected =
                                  item.name.toLowerCase() === kelurahanDesa.trim().toLowerCase();
                                return (
                                  <li key={item.id}>
                                    <button
                                      type="button"
                                      onClick={() => handleChooseVillage(item)}
                                      className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors ${
                                        isSelected
                                          ? 'bg-alabaster font-medium text-brass'
                                          : 'text-obsidian hover:bg-alabaster'
                                      }`}
                                    >
                                      {item.name}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <div className="px-3.5 py-2.5 text-xs text-taupe">
                              Kelurahan / Desa tidak ditemukan.
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* KODE POS — Typing Kode Pos first auto-fills Provinsi, Kota/Kab, Kecamatan, & Kelurahan/Desa */}
                    <div
                      data-wilayah-field="kodepos"
                      className={`relative ${activeDropdown === 'kodepos' ? 'z-50' : 'z-10'}`}
                    >
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1">
                        Kode Pos *
                      </label>
                      <div className="relative w-full">
                        <input
                          type="text"
                          required
                          autoComplete="off"
                          placeholder="Ketik / pilih Kode Pos"
                          value={kodePos}
                          onClick={() => setActiveDropdown('kodepos')}
                          onFocus={() => setActiveDropdown('kodepos')}
                          onChange={(e) => handleKodePosChange(e.target.value)}
                          className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          onClick={() =>
                            setActiveDropdown((prev) => (prev === 'kodepos' ? null : 'kodepos'))
                          }
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-taupe hover:text-obsidian transition-colors"
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              activeDropdown === 'kodepos' ? 'rotate-180 text-obsidian' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {activeDropdown === 'kodepos' &&
                        (loadingWilayah === 'kodepos' || filteredKodePos.length > 0) && (
                          <div className="absolute right-0 w-full sm:w-[330px] bottom-full mb-1.5 z-50 rounded-xl overflow-hidden bg-white border border-obsidian/20 shadow-[0_12px_32px_rgba(28,24,21,0.18)]">
                            {loadingWilayah === 'kodepos' ? (
                              <div className="px-3.5 py-2.5 text-xs text-taupe">
                                Mencari wilayah dari Kode Pos...
                              </div>
                            ) : (
                              <ul
                                data-lenis-prevent
                                onWheel={(e) => e.stopPropagation()}
                                onTouchMove={(e) => e.stopPropagation()}
                                className="max-h-44 overflow-y-auto overscroll-contain divide-y divide-obsidian/[0.06]"
                              >
                                {filteredKodePos.map((item) => {
                                  const isSelected =
                                    item.code === kodePos.trim() &&
                                    (!item.village ||
                                      item.village.toLowerCase() ===
                                        kelurahanDesa.trim().toLowerCase());
                                  return (
                                    <li key={item.id}>
                                      <button
                                        type="button"
                                        onClick={() => handleChooseKodePos(item)}
                                        className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors ${
                                          isSelected
                                            ? 'bg-alabaster font-medium text-brass'
                                            : 'text-obsidian hover:bg-alabaster'
                                        }`}
                                      >
                                        {item.label}
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-brass text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-obsidian transition-colors disabled:opacity-60 shadow-xs"
                >
                  {loading ? 'Mendaftarkan Akun...' : 'Daftar & Masuk Sekarang'}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
