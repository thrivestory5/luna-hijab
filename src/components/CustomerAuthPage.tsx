import React, { useState, useRef } from 'react';
import { ArrowLeft, Camera, CheckCircle2, LogOut, Mail, Lock, User, Phone, MapPin } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';
import {
  CustomerProfile,
  loginCustomerAccount,
  registerCustomerAccount,
  updateCustomerAvatar,
  uploadCustomerAvatar,
} from '../lib/supabase';

interface CustomerAuthPageProps {
  currentUser: CustomerProfile | null;
  onAuthSuccess: (profile: CustomerProfile) => void;
  onLogout: () => void;
  onBackToStore: () => void;
}

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const CustomerAuthPage: React.FC<CustomerAuthPageProps> = ({
  currentUser,
  onAuthSuccess,
  onLogout,
  onBackToStore,
}) => {
  const [mode, setMode] = useState<'register' | 'login'>('register');
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

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const profileFileInputRef = useRef<HTMLInputElement | null>(null);

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
      setErrorMsg('Username harus berupa format email yang valid (contoh: nama@email.com).');
      return;
    }
    if (!loginPassword) {
      setErrorMsg('Silakan masukkan password Anda.');
      return;
    }

    setLoading(true);
    try {
      const result = await loginCustomerAccount(cleanEmail, loginPassword);
      if (result.error || !result.data) {
        setErrorMsg(result.error || 'Gagal masuk. Periksa email dan password Anda.');
      } else {
        onAuthSuccess(result.data);
        onBackToStore();
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
      setErrorMsg('Format email tidak valid. Email akan digunakan sebagai username login.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password minimal 6 karakter.');
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
        onBackToStore();
      }
    } finally {
      setLoading(false);
    }
  };

  // If already logged in, show Member Profile & Address Card
  if (currentUser) {
    return (
      <div className="min-h-screen bg-alabaster text-obsidian py-10 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBackToStore}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-obsidian/70 hover:text-obsidian mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Butik Luna</span>
          </button>

          <div className="rounded-3xl bg-white border border-obsidian/[0.08] shadow-[0_12px_48px_rgba(28,24,21,0.06)] p-7 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-7 border-b border-obsidian/10">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-travertine border-2 border-champagne shadow-md flex items-center justify-center">
                  {currentUser.foto_url ? (
                    <img
                      src={currentUser.foto_url}
                      alt={currentUser.nama}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <span className="font-serif text-3xl text-brass">
                      {currentUser.nama.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => profileFileInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-obsidian text-alabaster flex items-center justify-center shadow-md hover:bg-brass transition-colors"
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
                <p className="text-[10px] uppercase tracking-[0.25em] text-champagne font-medium">
                  MAISON LUNA PRIVILÈGE MEMBER
                </p>
                <h1 className="font-serif text-3xl text-obsidian mt-1">{currentUser.nama}</h1>
                <p className="text-xs text-taupe font-light mt-0.5">{currentUser.email}</p>
              </div>

              <button
                type="button"
                onClick={onLogout}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-obsidian/20 text-[11px] uppercase tracking-[0.2em] text-obsidian hover:bg-obsidian hover:text-alabaster transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            </div>

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
              <div className="p-4 rounded-2xl bg-alabaster">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Email (Username)
                </p>
                <p className="text-obsidian font-medium mt-1">{currentUser.email}</p>
              </div>
              <div className="p-4 rounded-2xl bg-alabaster">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">Nomer WhatsApp</p>
                <p className="text-obsidian font-medium mt-1">{currentUser.nomer_whatsapp}</p>
              </div>
              <div className="sm:col-span-2 p-4 rounded-2xl bg-alabaster">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">Alamat Lengkap</p>
                <p className="text-obsidian font-medium mt-1">{currentUser.alamat}</p>
              </div>
              <div className="p-4 rounded-2xl bg-alabaster">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Kelurahan / Desa &amp; Kecamatan
                </p>
                <p className="text-obsidian font-medium mt-1">
                  {currentUser.kelurahan_desa}, Kec. {currentUser.kecamatan}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-alabaster">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Kota / Kabupaten, Provinsi &amp; Kode Pos
                </p>
                <p className="text-obsidian font-medium mt-1">
                  {currentUser.kota_kabupaten}, {currentUser.provinsi} ({currentUser.kode_pos})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-alabaster text-obsidian py-10 px-4 sm:px-8 flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToStore}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-obsidian/70 hover:text-obsidian transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Butik</span>
          </button>

          <div className="flex items-center gap-2.5">
            <img src={BRAND_ASSETS.logoCompact} alt="Luna Indonesia" className="h-7 w-auto" />
            <span className="font-serif text-lg tracking-[0.25em] uppercase">LUNA INDONESIA</span>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-obsidian/[0.08] shadow-[0_16px_60px_rgba(28,24,21,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Editorial Portrait Panel (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 bg-travertine p-6 flex-col justify-between relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] w-full shadow-sm">
              <img
                src={BRAND_ASSETS.editorialHero1}
                alt="Luna Couture"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="pt-5">
              <p className="text-[9.5px] uppercase tracking-[0.24em] text-brass font-medium">
                MAISON LUNA PRIVILÈGE
              </p>
              <h2 className="font-serif text-2xl text-obsidian mt-1 leading-snug">
                Keanggunan Abadi dalam Setiap Detail.
              </h2>
              <p className="text-xs text-taupe font-light mt-2 leading-relaxed">
                Daftarkan akun member Anda untuk kemudahan pemesanan, penyimpanan alamat pengiriman,
                dan layanan prioritas Atelier Luna.
              </p>
            </div>
          </div>

          {/* Right Form Container (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-10">
            {/* Mode Switcher Tabs */}
            <div className="inline-flex p-1 rounded-full bg-alabaster border border-obsidian/[0.08] mb-7">
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setErrorMsg('');
                }}
                className={`px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                  mode === 'register'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Daftar Member (Register)
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setErrorMsg('');
                }}
                className={`px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all ${
                  mode === 'login'
                    ? 'bg-obsidian text-alabaster font-medium shadow-xs'
                    : 'text-obsidian/65 hover:text-obsidian'
                }`}
              >
                Masuk (Login)
              </button>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
                {errorMsg}
              </div>
            )}

            {mode === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-5 max-w-md">
                <div>
                  <h1 className="font-serif text-3xl text-obsidian">Masuk ke Akun Anda</h1>
                  <p className="text-xs text-taupe font-light mt-1">
                    Gunakan alamat email yang telah Anda daftarkan sebagai username.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                    Email (Username) *
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
                      placeholder="Masukkan password"
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
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-obsidian/10">
                  <div>
                    <h1 className="font-serif text-3xl text-obsidian">Registrasi Member Baru</h1>
                    <p className="text-xs text-taupe font-light mt-1">
                      Email Anda akan digunakan sebagai username untuk login.
                    </p>
                  </div>

                  {/* Opsi Menambahkan Foto Profil */}
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="w-14 h-14 rounded-full overflow-hidden bg-alabaster border-2 border-dashed border-champagne hover:border-obsidian cursor-pointer flex items-center justify-center shrink-0 transition-colors"
                      title="Tambahkan Foto Profil"
                    >
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="Preview Foto"
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Camera className="w-5 h-5 text-brass" />
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-[11px] uppercase tracking-[0.18em] text-obsidian font-medium underline hover:text-brass"
                      >
                        {photoPreview ? 'Ubah Foto' : 'Tambah Foto Profil'}
                      </button>
                      <p className="text-[10px] text-taupe font-light mt-0.5">
                        Tampil di sebelah tombol Bag
                      </p>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
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
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Email (Username Login) *
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
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-3.5 h-3.5 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        placeholder="Minimal 6 karakter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
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
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
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

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Provinsi *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Jawa Tengah"
                      value={provinsi}
                      onChange={(e) => setProvinsi(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Kota / Kabupaten *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Kab. Kudus"
                      value={kotaKabupaten}
                      onChange={(e) => setKotaKabupaten(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Kecamatan *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Kota Kudus"
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Kelurahan / Desa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Panjunan"
                      value={kelurahanDesa}
                      onChange={(e) => setKelurahanDesa(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-taupe mb-1.5">
                      Kode Pos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: 59317"
                      value={kodePos}
                      onChange={(e) => setKodePos(e.target.value)}
                      className="w-full sm:w-1/2 px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 text-xs focus:outline-none focus:border-obsidian"
                    />
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
        </div>
      </div>
    </div>
  );
};
