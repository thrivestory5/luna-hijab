import { createClient } from '@supabase/supabase-js';
import { Product, ProductColorOption, ProductGalleryItem } from '../data/products';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://ixrlszljnnnlibpeyljd.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cmxzemxqbm5ubGlicGV5bGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NzIzNTIsImV4cCI6MjEwNjM0ODM1Mn0.t1Mha7QgqywN6Y2tle7pcU53rjcTIASZZE7ojIqcdGk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
