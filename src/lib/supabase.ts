/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';
import { Product, ProductColorOption, ProductGalleryItem } from '../data/products';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://ixrlszljnnnlibpeyljd.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cmxzemxqbm5ubGlicGV5bGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NzIzNTIsImV4cCI6MjEwNjM0ODM1Mn0.t1Mha7QgqywN6Y2tle7pcU53rjcTIASZZE7ojIqcdGk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface CustomerProfile {
  id: string;
  nama: string;
  email: string;
  alamat: string;
  provinsi: string;
  kota_kabupaten: string;
  kecamatan: string;
  kelurahan_desa: string;
  kode_pos: string;
  nomer_whatsapp: string;
  foto_url: string | null;
  created_at: string;
  is_archived?: boolean;
}

export interface AdminProfile {
  id: string;
  username: string;
  email: string | null;
  full_name: string;
  created_at: string;
}

export interface AdminOrderRecord {
  id: string;
  items: Array<{
    productId: number;
    sku: string;
    name: string;
    variant: string;
    size: string;
    price: number;
    quantity: number;
  }>;
  total_amount: number;
  formatted_total: string;
  channel: string;
  created_at: string;
}

export interface AdminInquiryRecord {
  id: string;
  full_name: string;
  whatsapp_phone: string;
  preferred_house: string;
  preferred_date: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

interface DbProductRow {
  id: number;
  sku: string;
  raw_name: string;
  name: string;
  brand: string;
  subtitle: string;
  fabric: string;
  price: number;
  formatted_price: string;
  permalink: string;
  primary_image: string;
  secondary_image: string;
  high_res_image: string;
  gallery: ProductGalleryItem[];
  color_options: ProductColorOption[];
  is_new: boolean;
  is_couture_reserve: boolean;
}

export async function fetchCatalogProducts(): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: false });

  if (error || !data || data.length === 0) {
    return null;
  }

  return (data as DbProductRow[]).map((row) => ({
    id: Number(row.id),
    sku: row.sku,
    rawName: row.raw_name,
    name: row.name,
    brand: row.brand,
    subtitle: row.subtitle,
    fabric: row.fabric,
    price: row.price,
    formattedPrice: row.formatted_price,
    permalink: row.permalink,
    primaryImage: row.primary_image,
    secondaryImage: row.secondary_image,
    highResImage: row.high_res_image,
    gallery: Array.isArray(row.gallery) ? row.gallery : [],
    colorOptions: Array.isArray(row.color_options) ? row.color_options : [],
    isNew: Boolean(row.is_new),
    isCoutureReserve: Boolean(row.is_couture_reserve),
  }));
}

export async function createConciergeInquiry(payload: {
  fullName: string;
  emailOrPhone: string;
  message: string;
}): Promise<boolean> {
  const { error } = await supabase.from('concierge_inquiries').insert({
    full_name: payload.fullName,
    whatsapp_phone: payload.emailOrPhone,
    preferred_house: 'Maison Luna Atelier',
    notes: payload.message,
  });

  return !error;
}

export async function recordCheckoutOrder(payload: {
  items: Array<{
    productId: number;
    sku: string;
    name: string;
    variant: string;
    size: string;
    price: number;
    quantity: number;
  }>;
  totalAmount: number;
  formattedTotal: string;
}): Promise<boolean> {
  const { error } = await supabase.from('orders').insert({
    items: payload.items,
    total_amount: payload.totalAmount,
    formatted_total: payload.formattedTotal,
    channel: 'whatsapp_concierge',
  });

  return !error;
}

/**
 * Resize image client-side and upload to Supabase Storage `avatars` bucket
 */
export async function uploadCustomerAvatar(file: File): Promise<string> {
  const compressedDataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 320;
        let w = img.width;
        let h = img.height;
        if (w > h) {
          if (w > maxDim) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          }
        } else if (h > maxDim) {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => reject(new Error('Invalid image file'));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });

  try {
    const res = await fetch(compressedDataUrl);
    const blob = await res.blob();
    const fileName = `avatar-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
    const { error: uploadErr } = await supabase.storage
      .from('avatars')
      .upload(fileName, blob, { contentType: 'image/jpeg', upsert: false });

    if (!uploadErr) {
      const { data } = supabase.storage.from('avatars').getPublicUrl(fileName);
      if (data?.publicUrl) {
        return data.publicUrl;
      }
    }
  } catch {
    // Fallback to compressed data URL if storage upload is unavailable
  }

  return compressedDataUrl;
}

export async function registerCustomerAccount(input: {
  nama: string;
  email: string;
  password: string;
  alamat: string;
  provinsi: string;
  kota_kabupaten: string;
  kecamatan: string;
  kelurahan_desa: string;
  kode_pos: string;
  nomer_whatsapp: string;
  foto_url?: string | null;
}): Promise<{ data?: CustomerProfile; error?: string }> {
  const { data, error } = await supabase.rpc('register_customer', {
    p_nama: input.nama,
    p_email: input.email,
    p_password: input.password,
    p_alamat: input.alamat,
    p_provinsi: input.provinsi,
    p_kota_kabupaten: input.kota_kabupaten,
    p_kecamatan: input.kecamatan,
    p_kelurahan_desa: input.kelurahan_desa,
    p_kode_pos: input.kode_pos,
    p_nomer_whatsapp: input.nomer_whatsapp,
    p_foto_url: input.foto_url || null,
  });

  if (error) {
    if (error.message.includes('EMAIL_ALREADY_EXISTS')) {
      return { error: 'Email sudah terdaftar. Silakan masuk menggunakan akun Anda.' };
    }
    if (error.message.includes('INVALID_EMAIL_FORMAT')) {
      return { error: 'Format email tidak valid.' };
    }
    if (error.message.includes('PASSWORD_TOO_SHORT')) {
      return { error: 'Password harus memiliki minimal 8 karakter.' };
    }
    return { error: 'Gagal mendaftarkan akun. Silakan periksa kembali data Anda.' };
  }

  return { data: data as CustomerProfile };
}

export async function loginCustomerAccount(
  email: string,
  password: string
): Promise<{ data?: CustomerProfile; error?: string }> {
  const { data, error } = await supabase.rpc('login_customer', {
    p_email: email,
    p_password: password,
  });

  if (error || !data) {
    return { error: 'Email atau password salah. Silakan coba kembali.' };
  }

  return { data: data as CustomerProfile };
}

export async function updateCustomerAvatar(
  customerId: string,
  email: string,
  fotoUrl: string
): Promise<{ data?: CustomerProfile; error?: string }> {
  const { data, error } = await supabase.rpc('update_customer_photo', {
    p_customer_id: customerId,
    p_email: email,
    p_foto_url: fotoUrl,
  });

  if (error || !data) {
    return { error: 'Gagal memperbarui foto profil.' };
  }

  return { data: data as CustomerProfile };
}

export async function loginAdminAccount(
  identifier: string,
  password: string
): Promise<{ data?: AdminProfile; error?: string }> {
  const { data, error } = await supabase.rpc('login_admin', {
    p_identifier: identifier,
    p_password: password,
  });

  if (error || !data) {
    return { error: 'Kredensial admin tidak valid atau belum terdaftar di database.' };
  }

  return { data: data as AdminProfile };
}

export async function fetchAdminDashboardData(adminId: string): Promise<{
  customers: CustomerProfile[];
  orders: AdminOrderRecord[];
  inquiries: AdminInquiryRecord[];
} | null> {
  const { data, error } = await supabase.rpc('get_admin_dashboard_data', {
    p_admin_id: adminId,
  });

  if (error || !data) {
    return null;
  }

  const parsed = data as {
    customers?: CustomerProfile[];
    orders?: AdminOrderRecord[];
    inquiries?: AdminInquiryRecord[];
  };

  return {
    customers: Array.isArray(parsed.customers) ? parsed.customers : [],
    orders: Array.isArray(parsed.orders) ? parsed.orders : [],
    inquiries: Array.isArray(parsed.inquiries) ? parsed.inquiries : [],
  };
}

export async function adminUpsertProduct(
  adminId: string,
  product: {
    id: number;
    name: string;
    brand: string;
    sku: string;
    price: number;
    formattedPrice: string;
    fabric: string;
    subtitle: string;
    isNew: boolean;
    isCoutureReserve: boolean;
  }
): Promise<{ success: boolean; data?: any; error?: string }> {
  const { data, error } = await supabase.rpc('admin_upsert_product', {
    p_admin_id: adminId,
    p_id: product.id,
    p_name: product.name,
    p_brand: product.brand,
    p_sku: product.sku,
    p_price: product.price,
    p_formatted_price: product.formattedPrice,
    p_fabric: product.fabric,
    p_subtitle: product.subtitle,
    p_is_new: product.isNew,
    p_is_couture_reserve: product.isCoutureReserve,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, data };
}

export async function adminCreateCustomer(
  adminId: string,
  customer: {
    nama: string;
    email: string;
    password?: string;
    alamat: string;
    provinsi: string;
    kota_kabupaten: string;
    kecamatan: string;
    kelurahan_desa: string;
    kode_pos: string;
    nomer_whatsapp: string;
    foto_url?: string | null;
  }
): Promise<{ success: boolean; data?: CustomerProfile; error?: string }> {
  const { data, error } = await supabase.rpc('admin_create_customer', {
    p_admin_id: adminId,
    p_nama: customer.nama,
    p_email: customer.email,
    p_password: customer.password || 'member123',
    p_alamat: customer.alamat,
    p_provinsi: customer.provinsi,
    p_kota_kabupaten: customer.kota_kabupaten,
    p_kecamatan: customer.kecamatan,
    p_kelurahan_desa: customer.kelurahan_desa,
    p_kode_pos: customer.kode_pos,
    p_nomer_whatsapp: customer.nomer_whatsapp,
    p_foto_url: customer.foto_url || null,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, data: data as CustomerProfile };
}

export async function adminUpdateCustomer(
  adminId: string,
  customerId: string,
  customer: {
    nama: string;
    email: string;
    alamat: string;
    provinsi: string;
    kota_kabupaten: string;
    kecamatan: string;
    kelurahan_desa: string;
    kode_pos: string;
    nomer_whatsapp: string;
    is_archived?: boolean;
  }
): Promise<{ success: boolean; data?: CustomerProfile; error?: string }> {
  const { data, error } = await supabase.rpc('admin_update_customer', {
    p_admin_id: adminId,
    p_customer_id: customerId,
    p_nama: customer.nama,
    p_email: customer.email,
    p_alamat: customer.alamat,
    p_provinsi: customer.provinsi,
    p_kota_kabupaten: customer.kota_kabupaten,
    p_kecamatan: customer.kecamatan,
    p_kelurahan_desa: customer.kelurahan_desa,
    p_kode_pos: customer.kode_pos,
    p_nomer_whatsapp: customer.nomer_whatsapp,
    p_is_archived: customer.is_archived ?? false,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, data: data as CustomerProfile };
}

export async function adminUpdateInquiryStatus(
  adminId: string,
  inquiryId: string,
  status: string
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.rpc('admin_update_inquiry_status', {
    p_admin_id: adminId,
    p_inquiry_id: inquiryId,
    p_status: status,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}

