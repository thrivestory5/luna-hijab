export interface ProductGalleryItem {
  id: number;
  card: string;
  full: string;
  thumb: string;
  variant: string;
}

export interface ProductColorOption {
  name: string;
  hex: string;
  imageIndex: number;
  indices: number[];
}

export interface Product {
  id: number;
  sku: string;
  rawName: string;
  name: string;
  brand: 'Luna' | 'Kemayu' | 'GZ' | string;
  subtitle: string;
  fabric: string;
  price: number;
  formattedPrice: string;
  permalink: string;
  primaryImage: string;
  secondaryImage: string;
  highResImage: string;
  gallery: ProductGalleryItem[];
  colorOptions: ProductColorOption[];
  isNew: boolean;
  isCoutureReserve: boolean;
}

export interface EditorialLook {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  season: string;
  image: string;
  secondaryImage: string;
  caption: string;
  featuredProductId: number;
  featuredSku: string;
  featuredName: string;
  featuredPrice: string;
}

export const BRAND_ASSETS = {
  logo: 'https://lunahijab.co.id/wp-content/uploads/2026/05/LOGO-LUNA_no-shadow-br.png',
  logoCompact: 'https://lunahijab.co.id/wp-content/uploads/2026/05/LOGO-LUNA_no-shadow-br-216x300.png',
  editorialHero1: 'https://lunahijab.co.id/wp-content/uploads/2026/06/C5-1229x1536.jpg',
  editorialHero2: 'https://lunahijab.co.id/wp-content/uploads/2026/06/K-1229x1536.jpg',
  editorialAurellia: 'https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AURELLIA-1-B.png',
  atelierCampaign: 'https://lunahijab.co.id/wp-content/uploads/2026/05/ChatGPT-Image-May-21-2026-10_08_38-AM-1024x683.png',
  ctaBackdrop: 'https://lunahijab.co.id/wp-content/uploads/2021/07/fashion-designer-template-cta-bg-img.jpg',
  whatsappConcierge: 'https://wa.me/6281237364254',
  customerCarePhone: '082178925096',
  customerCareEmail: 'online@lunahijab.co.id',
  atelierLocation: 'Kudus, Jawa Tengah, Indonesia',
  coordinates: '6°48\'17"S 110°50\'26"E',
};

export const EDITORIAL_LOOKBOOK: EditorialLook[] = [
  {
    id: 'look-01',
    number: '01',
    title: 'SILHOUETTE OF STILLNESS',
    subtitle: 'LUNA SIGNATURE COUTURE',
    season: 'AUTUMN / WINTER 2026',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/06/C5-1229x1536.jpg',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-768x1152.png',
    caption: 'Fluid architectural pleats meet weightless matte silk crepe. Designed for quiet presence and effortless movement.',
    featuredProductId: 3980,
    featuredSku: 'G.569',
    featuredName: 'Kiana I',
    featuredPrice: 'Rp 1.260.000',
  },
  {
    id: 'look-02',
    number: '02',
    title: 'THE SOVEREIGN DRAPE',
    subtitle: 'ATELIER RESERVE',
    season: 'PRIVATE COLLECTION',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D.png',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-scaled.png',
    caption: 'Our pinnacle couture piece crafted in artisanal organza silk with hand-applied crystal embroidery.',
    featuredProductId: 3818,
    featuredSku: 'G.511',
    featuredName: 'Diora I',
    featuredPrice: 'Rp 3.600.000',
  },
  {
    id: 'look-03',
    number: '03',
    title: 'POETRY IN MOTION',
    subtitle: 'KEMAYU HERITAGE',
    season: 'RESORT ARCHIVE 2026',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/06/K-1229x1536.jpg',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748.png',
    caption: 'Delicate Nusantara heritage motifs reimagined through contemporary feminine tailoring and breathable botanical twill.',
    featuredProductId: 3595,
    featuredSku: 'GK.67',
    featuredName: 'Selyn I',
    featuredPrice: 'Rp 805.000',
  },
  {
    id: 'look-04',
    number: '04',
    title: 'LUMINOUS GRACE',
    subtitle: 'LUNA EDITION N° 570',
    season: 'CURATED SERIES',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-scaled.png',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-scaled.png',
    caption: 'Tonal layering and sculptural cuffs bring refined opulence to formal gatherings and intimate celebrations.',
    featuredProductId: 3969,
    featuredSku: 'G.570',
    featuredName: 'Kalyani I',
    featuredPrice: 'Rp 1.390.000',
  },
  {
    id: 'look-05',
    number: '05',
    title: 'MONOLITH TAILORING',
    subtitle: 'GZ CONTEMPORARY',
    season: 'URBAN ATELIER',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707.jpg',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924.jpg',
    caption: 'Sharp lapels, structured shoulders, and elongated modest silhouettes engineered for the modern metropolitan woman.',
    featuredProductId: 3471,
    featuredSku: 'SET ROK',
    featuredName: 'GZ Jxiu 70015',
    featuredPrice: 'Rp 1.200.000',
  },
  {
    id: 'look-06',
    number: '06',
    title: 'GILDED SERENITY',
    subtitle: 'LUNA RESERVE',
    season: 'GALA ARCHIVE',
    image: 'https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E.png',
    secondaryImage: 'https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D.png',
    caption: 'Timeless proportions that transcend generations, honoring the Maison Luna philosophy of elegance for every age.',
    featuredProductId: 3836,
    featuredSku: 'G.517',
    featuredName: 'Lady I',
    featuredPrice: 'Rp 2.275.000',
  },
];

export const PRODUCTS: Product[] = [
  {
    "id": 3980,
    "sku": "G.569",
    "rawName": "G.569 KIANA 1",
    "name": "Kiana 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1260000,
    "formattedPrice": "Rp 1.260.000",
    "permalink": "https://lunahijab.co.id/produk/g-569-kiana-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-G-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-scaled.png",
    "gallery": [
      {
        "id": 3981,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-H-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3985,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-G-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3984,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-F-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3983,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-E-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3982,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KIANA-1-D-300x300.png",
        "variant": "Photo 05"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3969,
    "sku": "G.570",
    "rawName": "G.570 KALYANI 1",
    "name": "Kalyani 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1390000,
    "formattedPrice": "Rp 1.390.000",
    "permalink": "https://lunahijab.co.id/produk/g-570-kalyani-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-K-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-scaled.png",
    "gallery": [
      {
        "id": 3970,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-B-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3971,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-K-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3972,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-J-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3973,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-I-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3974,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-H-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3975,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-G-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3976,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-F-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3977,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-E-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3978,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-D-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3979,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-KALYANI-1-C-300x300.png",
        "variant": "Photo 10"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3961,
    "sku": "G.560",
    "rawName": "G.560 ASHALINA 1",
    "name": "Ashalina 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1190000,
    "formattedPrice": "Rp 1.190.000",
    "permalink": "https://lunahijab.co.id/produk/g-560-ashalina-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-G-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-I-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-G-scaled.png",
    "gallery": [
      {
        "id": 3962,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-G-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3968,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-I-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3967,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-H-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3966,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-F-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3965,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3964,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-D-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3963,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ASHALINA-1-B-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3950,
    "sku": "G.531",
    "rawName": "G.531 MIHRA 1",
    "name": "Mihra 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1320000,
    "formattedPrice": "Rp 1.320.000",
    "permalink": "https://lunahijab.co.id/produk/g-531-mihra-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-I-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-scaled.png",
    "gallery": [
      {
        "id": 3951,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-A-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3952,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-I-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3953,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-H-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3954,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-G-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3955,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-F-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3956,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-E-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3957,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-D-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3958,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-C-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3959,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIHRA-1-B-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3937,
    "sku": "G.425",
    "rawName": "G.425 ARISHYA 1",
    "name": "Arishya 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 915000,
    "formattedPrice": "Rp 915.000",
    "permalink": "https://lunahijab.co.id/produk/g-425-arishya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-L-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3938,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3939,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-L-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-L-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3940,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-K-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3941,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-J-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3942,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-I-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3943,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-H-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3944,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3945,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-F-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3946,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-E-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3947,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-C-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3948,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-B-300x300.png",
        "variant": "Photo 11"
      },
      {
        "id": 3949,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARISHYA-1-A-300x300.png",
        "variant": "Photo 12"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3925,
    "sku": "G.539",
    "rawName": "G.539 ILLIANNA 1",
    "name": "Illianna 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 865000,
    "formattedPrice": "Rp 865.000",
    "permalink": "https://lunahijab.co.id/produk/g-539-illianna-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-C-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-C-scaled.png",
    "gallery": [
      {
        "id": 3926,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-C-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3927,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3928,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-D-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3929,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-E-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3930,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-F-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3931,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-G-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3932,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-H-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3933,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-I-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3934,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-J-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3935,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-K-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3936,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-L-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ELLIANNA-1-L-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3917,
    "sku": "G.447",
    "rawName": "G.447 SYAHIBA 1",
    "name": "Syahiba 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 970000,
    "formattedPrice": "Rp 970.000",
    "permalink": "https://lunahijab.co.id/produk/g-447-syahiba-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3918,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3919,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3920,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3921,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3922,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3923,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3924,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SYAHIBA-1-G-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3914,
    "sku": "G.533",
    "rawName": "G.533 FLOREN 1",
    "name": "Floren 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1155000,
    "formattedPrice": "Rp 1.155.000",
    "permalink": "https://lunahijab.co.id/produk/g-533-floren-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-H-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-scaled.png",
    "gallery": [
      {
        "id": 3915,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-300x300.png",
        "variant": "Terracotta Rust (Floren 1)"
      },
      {
        "id": 3916,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-H-300x300.png",
        "variant": "Terracotta Rust (Floren 1)"
      },
      {
        "id": 3876,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      }
    ],
    "isNew": true,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Terracotta Rust (Floren 1)",
        "hex": "#A85642",
        "imageIndex": 0,
        "indices": [
          0,
          1
        ]
      },
      {
        "name": "Midnight Berry (Floren 2)",
        "hex": "#2A1E2E",
        "imageIndex": 2,
        "indices": [
          2
        ]
      }
    ]
  },
  {
    "id": 3912,
    "sku": "G.543",
    "rawName": "G.543 TANAYA 2",
    "name": "Tanaya 2",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 795000,
    "formattedPrice": "Rp 795.000",
    "permalink": "https://lunahijab.co.id/produk/g-543-tanaya-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-scaled.png",
    "gallery": [
      {
        "id": 3913,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TANAYA-2-C-300x300.png",
        "variant": "Photo 01"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3900,
    "sku": "G.526",
    "rawName": "G.526 SHENA 1",
    "name": "Shena 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1275000,
    "formattedPrice": "Rp 1.275.000",
    "permalink": "https://lunahijab.co.id/produk/g-526-shena-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-F-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-K-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-F-scaled.png",
    "gallery": [
      {
        "id": 3901,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-F-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3911,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-K-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3910,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-J-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3909,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-I-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3908,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-H-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3907,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-G-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3906,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-E-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3905,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-D-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3904,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-C-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3903,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-B-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3902,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-SHENA-1-A-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3888,
    "sku": "G.524",
    "rawName": "G.524 REANA 2",
    "name": "Reana 2",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 2250000,
    "formattedPrice": "Rp 2.250.000",
    "permalink": "https://lunahijab.co.id/produk/g-524-reana-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-K-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-scaled.png",
    "gallery": [
      {
        "id": 3889,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-I-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3899,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-K-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3898,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-J-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3897,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-H-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3896,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-G-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3895,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3894,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-E-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3893,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-D-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3892,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-C-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3891,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-B-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3890,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-REANA-2-A-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3875,
    "sku": "G.533",
    "rawName": "G.533 FLOREN 2",
    "name": "Floren 2",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1155000,
    "formattedPrice": "Rp 1.155.000",
    "permalink": "https://lunahijab.co.id/produk/g-533-floren-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-K-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-scaled.png",
    "gallery": [
      {
        "id": 3876,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-L-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3887,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-K-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3886,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-J-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3885,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-I-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3884,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-H-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3883,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-G-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3882,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-F-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3880,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-D-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3879,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-A-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3878,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-C-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3877,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-2-B-300x300.png",
        "variant": "Midnight Berry (Floren 2)"
      },
      {
        "id": 3915,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-FLOREN-1-D-300x300.png",
        "variant": "Terracotta Rust (Floren 1)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Midnight Berry (Floren 2)",
        "hex": "#2A1E2E",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ]
      },
      {
        "name": "Terracotta Rust (Floren 1)",
        "hex": "#A85642",
        "imageIndex": 11,
        "indices": [
          11
        ]
      }
    ]
  },
  {
    "id": 3867,
    "sku": "G.520",
    "rawName": "G.520 LYORNA 2",
    "name": "Lyorna 2",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1325000,
    "formattedPrice": "Rp 1.325.000",
    "permalink": "https://lunahijab.co.id/produk/g-520-lyorna-2-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-F-1-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-scaled.png",
    "gallery": [
      {
        "id": 3868,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3874,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-F-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-F-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-F-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3873,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-E-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-E-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-E-2-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3872,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-D-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-D-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3871,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-C-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-C-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3870,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-B-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-B-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-B-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3869,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-A-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-A-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-A-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3858,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Dusty Rose Blush (Lyorna 2)",
        "hex": "#CFA4A8",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "Midnight Navy (Lyorna 1)",
        "hex": "#1E2433",
        "imageIndex": 7,
        "indices": [
          7
        ]
      }
    ]
  },
  {
    "id": 3857,
    "sku": "G.520",
    "rawName": "G.520 LYORNA 1",
    "name": "Lyorna 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1290000,
    "formattedPrice": "Rp 1.290.000",
    "permalink": "https://lunahijab.co.id/produk/g-520-lyorna-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-I-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-scaled.png",
    "gallery": [
      {
        "id": 3858,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3859,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-I-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3860,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-H-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3861,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-G-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3862,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-E-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3863,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-D-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3864,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-C-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3865,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-B-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3866,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-A-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      },
      {
        "id": 3868,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-2-G-1-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Midnight Navy (Lyorna 1)",
        "hex": "#1E2433",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ]
      },
      {
        "name": "Dusty Rose Blush (Lyorna 2)",
        "hex": "#CFA4A8",
        "imageIndex": 9,
        "indices": [
          9
        ]
      }
    ]
  },
  {
    "id": 3847,
    "sku": "G.518",
    "rawName": "G.518 LAVENA 1",
    "name": "Lavena 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1350000,
    "formattedPrice": "Rp 1.350.000",
    "permalink": "https://lunahijab.co.id/produk/g-518-lavena-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-F-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-B-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-F-scaled.png",
    "gallery": [
      {
        "id": 3848,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-F-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3849,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-B-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3850,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-C-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3851,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3852,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3853,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-G-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3854,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-H-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3855,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAVENA-1-I-300x300.png",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3836,
    "sku": "G.517",
    "rawName": "G.517 LADY 1",
    "name": "Lady 1",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 2275000,
    "formattedPrice": "Rp 2.275.000",
    "permalink": "https://lunahijab.co.id/produk/g-517-lady-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-H-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E-scaled.png",
    "gallery": [
      {
        "id": 3838,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-E-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3839,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-H-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3840,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-G-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3841,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-F-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3842,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-D-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3843,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-C-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3844,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-B-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3845,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LADY-1-A-300x300.png",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3826,
    "sku": "G.515",
    "rawName": "G.515 MARCELLA 1",
    "name": "Marcella 1",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 1945000,
    "formattedPrice": "Rp 1.945.000",
    "permalink": "https://lunahijab.co.id/produk/g-515-marcella-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-F-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-F-scaled.png",
    "gallery": [
      {
        "id": 3827,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-F-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3828,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3829,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3830,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3831,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-D-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3832,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-E-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3833,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3834,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-H-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3835,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MARCELLA-1-I-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3824,
    "sku": "G.514",
    "rawName": "G.514 ENOORA 1",
    "name": "Enoora 1",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 1870000,
    "formattedPrice": "Rp 1.870.000",
    "permalink": "https://lunahijab.co.id/produk/g-514-enoora-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3825,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/ENOORA-1-D-300x300.png",
        "variant": "Photo 01"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3818,
    "sku": "G.511",
    "rawName": "G.511 DIORA 1",
    "name": "Diora 1",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 3600000,
    "formattedPrice": "Rp 3.600.000",
    "permalink": "https://lunahijab.co.id/produk/g-511-diora-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-C-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3819,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3822,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-C-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3821,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3820,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/DIORA-1-A-300x300.png",
        "variant": "Photo 04"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3809,
    "sku": "G.509",
    "rawName": "G.509 AURELLIA 1",
    "name": "Aurellia 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1175000,
    "formattedPrice": "Rp 1.175.000",
    "permalink": "https://lunahijab.co.id/produk/g-509-aurellia-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-G-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3810,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3816,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-G-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3815,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-F-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3814,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-E-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3813,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-C-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3812,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-B-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3811,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-AURELLIA-1-A-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3802,
    "sku": "G.507",
    "rawName": "G.507 VANYA 1",
    "name": "Vanya 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1110000,
    "formattedPrice": "Rp 1.110.000",
    "permalink": "https://lunahijab.co.id/produk/g-507-vanya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-C-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-C-scaled.png",
    "gallery": [
      {
        "id": 3803,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-C-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3804,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3805,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3806,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3807,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3808,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-VANYA-REV-1-F-300x300.png",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3794,
    "sku": "G.506",
    "rawName": "G.506 MIRA 1",
    "name": "Mira 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1295000,
    "formattedPrice": "Rp 1.295.000",
    "permalink": "https://lunahijab.co.id/produk/g-506-mira-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-G-768x1365.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-F-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-G.png",
    "gallery": [
      {
        "id": 3795,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-G-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-G.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-G-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3801,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-F-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-F.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-F-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3800,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-E-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-E.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-E-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3799,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-D-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-D.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3798,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-C-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-C.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-C-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3797,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-B-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-B.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-B-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3796,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-A.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MIRA-1-A-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3787,
    "sku": "G.505",
    "rawName": "G.505 TIFFANY 1",
    "name": "Tiffany 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1140000,
    "formattedPrice": "Rp 1.140.000",
    "permalink": "https://lunahijab.co.id/produk/g-505-tiffany-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-E-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-G-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-E-scaled.png",
    "gallery": [
      {
        "id": 3788,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-E-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3793,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-G-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3792,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-F-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3791,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3790,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-C-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3789,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-TIFFANY-1-B-300x300.png",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3777,
    "sku": "G.503",
    "rawName": "G.503 SHANUM 1",
    "name": "Shanum 1",
    "brand": "Luna",
    "subtitle": "Atelier Reserve — Hand-Embellished Couture",
    "fabric": "Artisanal Organza Silk, French Tulle & Hand-Sewn Crystal Beadwork",
    "price": 2175000,
    "formattedPrice": "Rp 2.175.000",
    "permalink": "https://lunahijab.co.id/produk/g-503-shanum-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D-scaled.png",
    "gallery": [
      {
        "id": 3779,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3786,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3785,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3784,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-C-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-C-1-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3783,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3782,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3781,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3780,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.-503-SHANUM-1-H-300x300.png",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3767,
    "sku": "G.501",
    "rawName": "G.501 LAURESTINE 1",
    "name": "Laurestine 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1580000,
    "formattedPrice": "Rp 1.580.000",
    "permalink": "https://lunahijab.co.id/produk/g-501-laurestine-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-G-768x1365.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-A-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-G.png",
    "gallery": [
      {
        "id": 3768,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-G-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-G.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-G-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3769,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-A.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3770,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-B-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-B.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3771,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-C-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-C.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3772,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-D-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-D.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-D-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3773,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-E-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-E.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-E-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3774,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-F-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-F.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LAURESTINE-1-F-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3758,
    "sku": "G.500",
    "rawName": "G.500 WINONA 3",
    "name": "Winona 3",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1780000,
    "formattedPrice": "Rp 1.780.000",
    "permalink": "https://lunahijab.co.id/produk/g-500-winona-3/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-1-1-scaled-e1789629851917-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-8-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-1-1-scaled-e1789629851917.jpg",
    "gallery": [
      {
        "id": 3759,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-1-1-scaled-e1789629851917-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-1-1-scaled-e1789629851917.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-1-1-scaled-e1789629851917-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3760,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-8-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-8-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-8-300x300.jpg",
        "variant": "Photo 02"
      },
      {
        "id": 3761,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-7-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-7-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-7-300x300.jpg",
        "variant": "Photo 03"
      },
      {
        "id": 3762,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-6-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-6-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-6-300x300.jpg",
        "variant": "Photo 04"
      },
      {
        "id": 3763,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-5-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-5-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-5-300x300.jpg",
        "variant": "Photo 05"
      },
      {
        "id": 3764,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-2-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-2-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-2-300x300.jpg",
        "variant": "Photo 06"
      },
      {
        "id": 3765,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-3-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-3-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-3-300x300.jpg",
        "variant": "Photo 07"
      },
      {
        "id": 3766,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-4-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-4-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.500-WINONA-3-4-300x300.jpg",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": true,
    "colorOptions": []
  },
  {
    "id": 3745,
    "sku": "G.530",
    "rawName": "G.530 LAYLA 1",
    "name": "Layla 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 985000,
    "formattedPrice": "Rp 985.000",
    "permalink": "https://lunahijab.co.id/produk/g-530-layla-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-G-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-G-scaled.png",
    "gallery": [
      {
        "id": 3748,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-G-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3756,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3755,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3754,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3753,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-D-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3752,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-E-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3751,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-F-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-F-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-F-1-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3750,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-H-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-H-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-H-1-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3749,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.530-LAYLA-1-I-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3728,
    "sku": "G.527",
    "rawName": "G.527 FARANISYA 1",
    "name": "Faranisya 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1270000,
    "formattedPrice": "Rp 1.270.000",
    "permalink": "https://lunahijab.co.id/produk/g-527-faranisya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-A-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-K-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-A-scaled.png",
    "gallery": [
      {
        "id": 3731,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-A-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3742,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-K-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3741,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-J-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3740,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-I-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3739,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-H-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3738,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-G-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3737,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-F-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3736,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-E-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-E-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-E-1-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3735,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-D-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3734,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-C-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-C-1-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3732,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.527-FARANISYA-1-B-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3713,
    "sku": "G.523",
    "rawName": "G.523 HANNA 1",
    "name": "Hanna 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1245000,
    "formattedPrice": "Rp 1.245.000",
    "permalink": "https://lunahijab.co.id/produk/g-523-hanna-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-G-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-B-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-G-scaled.png",
    "gallery": [
      {
        "id": 3714,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-G-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3716,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-B-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3717,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-C-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3718,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3719,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3720,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3721,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-H-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3722,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-I-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3723,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-J-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3724,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-K-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3725,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-L-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-L-300x300.png",
        "variant": "Photo 11"
      },
      {
        "id": 3726,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-M-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-M-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-M-300x300.png",
        "variant": "Photo 12"
      },
      {
        "id": 3727,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-N-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-N-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-N-300x300.png",
        "variant": "Photo 13"
      },
      {
        "id": 3715,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.523-HANNA-1-A-300x300.png",
        "variant": "Photo 14"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3704,
    "sku": "G.522",
    "rawName": "G.522 ZEEVA 1",
    "name": "Zeeva 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1195000,
    "formattedPrice": "Rp 1.195.000",
    "permalink": "https://lunahijab.co.id/produk/g-522-zeeva-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-C-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-J-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-C-scaled.png",
    "gallery": [
      {
        "id": 3705,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-C-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3711,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-J-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3710,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-I-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3709,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-H-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3708,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-G-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3707,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-B-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3706,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/G.522-ZEEVA-1-A-300x300.png",
        "variant": "Photo 07"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3691,
    "sku": "G.521",
    "rawName": "G.521 MELUNA 1",
    "name": "Meluna 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1165000,
    "formattedPrice": "Rp 1.165.000",
    "permalink": "https://lunahijab.co.id/produk/g-521-meluna-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-D-scaled.png",
    "gallery": [
      {
        "id": 3692,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3702,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3701,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3700,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3699,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3698,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3697,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3696,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-H-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3695,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-I-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3694,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-J-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3693,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-MELUNA-1-K-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3682,
    "sku": "G.492",
    "rawName": "G.492 ARSILLA 4",
    "name": "Arsilla 4",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 975000,
    "formattedPrice": "Rp 975.000",
    "permalink": "https://lunahijab.co.id/produk/g-492-arsilla-4/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-B-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-B-scaled.png",
    "gallery": [
      {
        "id": 3683,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-B-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3690,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3689,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-C-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3688,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3687,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3686,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3685,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3684,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-ARSILLA-4-H-300x300.png",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3673,
    "sku": "G.477",
    "rawName": "G.477 ARUNA KITS 2",
    "name": "Aruna Kits 2",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 910000,
    "formattedPrice": "Rp 910.000",
    "permalink": "https://lunahijab.co.id/produk/g-477-aruna-kits-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-D-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-D-scaled.png",
    "gallery": [
      {
        "id": 3674,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-D-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3681,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3680,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3679,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-B-1-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3678,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3677,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3676,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3675,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/G.477-ARUNA-KITS-2-C-300x300.png",
        "variant": "Photo 08"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3662,
    "sku": "G.532",
    "rawName": "G.532 RUYA 1",
    "name": "Ruya 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 995000,
    "formattedPrice": "Rp 995.000",
    "permalink": "https://lunahijab.co.id/produk/g-532-ruya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-C-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-C-scaled.png",
    "gallery": [
      {
        "id": 3663,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-C-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3671,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3670,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3669,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3668,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3667,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3666,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3665,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-H-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3664,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-RUYA-1-I-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3650,
    "sku": "G.529",
    "rawName": "G.529 ERVA 1",
    "name": "Erva 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1340000,
    "formattedPrice": "Rp 1.340.000",
    "permalink": "https://lunahijab.co.id/produk/g-529-erva-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-B-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-B-scaled.png",
    "gallery": [
      {
        "id": 3651,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-B-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3661,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-A-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3660,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-C-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3659,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3658,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3657,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-F-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3656,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-G-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3655,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-H-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3654,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-I-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3653,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-J-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-J-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3652,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-K-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-ERVA-1-K-300x300.png",
        "variant": "Photo 11"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3639,
    "sku": "G.520",
    "rawName": "G.520 LYORNA 2",
    "name": "Lyorna 2",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1325000,
    "formattedPrice": "Rp 1.325.000",
    "permalink": "https://lunahijab.co.id/produk/g-520-lyorna-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-E-683x1024.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-A-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-E-scaled.png",
    "gallery": [
      {
        "id": 3640,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-E-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3643,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-A-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3644,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-B-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3645,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-C-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3646,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-D-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3647,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-F-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3648,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-G-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-LYORNA-2-G-300x300.png",
        "variant": "Dusty Rose Blush (Lyorna 2)"
      },
      {
        "id": 3858,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/09/PO-LYORNA-1-F-300x300.png",
        "variant": "Midnight Navy (Lyorna 1)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Dusty Rose Blush (Lyorna 2)",
        "hex": "#CFA4A8",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ]
      },
      {
        "name": "Midnight Navy (Lyorna 1)",
        "hex": "#1E2433",
        "imageIndex": 7,
        "indices": [
          7
        ]
      }
    ]
  },
  {
    "id": 3629,
    "sku": "GK.81",
    "rawName": "GK.81 JOLIE 1",
    "name": "Jolie 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 515000,
    "formattedPrice": "Rp 515.000",
    "permalink": "https://lunahijab.co.id/produk/gk-81-jolie-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-C-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630.png",
    "gallery": [
      {
        "id": 3630,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-G-scaled-e1787378562630-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3638,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-C-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3637,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-D-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3636,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-E-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3635,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-F-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3634,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-H-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-H-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3633,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-I-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-I-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3632,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-A-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-A-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3631,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.81-JOLIE-1-B-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3616,
    "sku": "GK.91",
    "rawName": "GK.91 GRISELDA 1",
    "name": "Griselda 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 485000,
    "formattedPrice": "Rp 485.000",
    "permalink": "https://lunahijab.co.id/produk/gk-91-griselda-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1-768x1174.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629.png",
    "gallery": [
      {
        "id": 3617,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1A-scaled-e1787300193629-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3628,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3627,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1B-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1B-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3626,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1C-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1C-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3625,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1D-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1D-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3624,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1E-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1E-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3623,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1F-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1F-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3622,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1G-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1G-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3621,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1H-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1H-300x300.png",
        "variant": "Photo 09"
      },
      {
        "id": 3620,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1I-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1I-300x300.png",
        "variant": "Photo 10"
      },
      {
        "id": 3619,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1J-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1J-300x300.png",
        "variant": "Photo 11"
      },
      {
        "id": 3618,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1K-768x1174.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1K-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-GRISELDA-1K-300x300.png",
        "variant": "Photo 12"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3605,
    "sku": "GK.63",
    "rawName": "GK.63 SYAKIRA 1",
    "name": "Syakira 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 720000,
    "formattedPrice": "Rp 720.000",
    "permalink": "https://lunahijab.co.id/produk/gk-63-syakira-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749.png",
    "gallery": [
      {
        "id": 3606,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-scaled-e1786433937749-300x300.png",
        "variant": "Olive Moss"
      },
      {
        "id": 3614,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-300x300.png",
        "variant": "Warm Greige"
      },
      {
        "id": 3613,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-300x300.png",
        "variant": "Warm Greige"
      },
      {
        "id": 3612,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-A-1-300x300.png",
        "variant": "Terracotta Brown"
      },
      {
        "id": 3611,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-C-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-C-1-300x300.png",
        "variant": "Terracotta Brown"
      },
      {
        "id": 3610,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-D-1-300x300.png",
        "variant": "Olive Moss"
      },
      {
        "id": 3609,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SYAKIRA-1-E-1-300x300.png",
        "variant": "Olive Moss"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Olive Moss",
        "hex": "#5E5B42",
        "imageIndex": 0,
        "indices": [
          0,
          5,
          6
        ]
      },
      {
        "name": "Warm Greige",
        "hex": "#B5ACA3",
        "imageIndex": 1,
        "indices": [
          1,
          2
        ]
      },
      {
        "name": "Terracotta Brown",
        "hex": "#8C5843",
        "imageIndex": 3,
        "indices": [
          3,
          4
        ]
      }
    ]
  },
  {
    "id": 3595,
    "sku": "GK.67",
    "rawName": "GK.67 SELYN 1",
    "name": "Selyn 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 805000,
    "formattedPrice": "Rp 805.000",
    "permalink": "https://lunahijab.co.id/produk/gk-67-selyn-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-G-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748.png",
    "gallery": [
      {
        "id": 3596,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-scaled-e1786432937748-300x300.png",
        "variant": "Lavender Mauve"
      },
      {
        "id": 3598,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-G-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-G-300x300.png",
        "variant": "Lavender Mauve"
      },
      {
        "id": 3599,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-F-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-F-300x300.png",
        "variant": "Sage Botanical"
      },
      {
        "id": 3600,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-D-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-D-300x300.png",
        "variant": "Sage Botanical"
      },
      {
        "id": 3601,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-C-1-300x300.png",
        "variant": "Lavender Mauve"
      },
      {
        "id": 3602,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-A-300x300.png",
        "variant": "Lavender Mauve"
      },
      {
        "id": 3603,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-C-300x300.jpg",
        "variant": "Dusty Slate Blue"
      },
      {
        "id": 3604,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/GK.67-SELYN-1-B-300x300.jpg",
        "variant": "Dusty Slate Blue"
      },
      {
        "id": 3597,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-H-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-H-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-SELYN-1-H-300x300.png",
        "variant": "Dusty Slate Blue"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Lavender Mauve",
        "hex": "#8E8296",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          4,
          5
        ]
      },
      {
        "name": "Sage Botanical",
        "hex": "#7D8C7D",
        "imageIndex": 2,
        "indices": [
          2,
          3
        ]
      },
      {
        "name": "Dusty Slate Blue",
        "hex": "#7A8E9E",
        "imageIndex": 6,
        "indices": [
          6,
          7,
          8
        ]
      }
    ]
  },
  {
    "id": 3586,
    "sku": "GK.47",
    "rawName": "GK.47 FIONA 1",
    "name": "Fiona 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 795000,
    "formattedPrice": "Rp 795.000",
    "permalink": "https://lunahijab.co.id/produk/gk-47-fiona-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-scaled-e1786431840256-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-scaled-e1786431840256.png",
    "gallery": [
      {
        "id": 3587,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-scaled-e1786431840256-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-scaled-e1786431840256.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-scaled-e1786431840256-300x300.png",
        "variant": "Cocoa Mauve"
      },
      {
        "id": 3594,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-300x300.png",
        "variant": "Cocoa Mauve"
      },
      {
        "id": 3593,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-B-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-B-300x300.png",
        "variant": "Cocoa Mauve"
      },
      {
        "id": 3592,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-A-1-300x300.png",
        "variant": "Sage Olive"
      },
      {
        "id": 3591,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-D-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-D-1-300x300.png",
        "variant": "Sage Olive"
      },
      {
        "id": 3590,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-F-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-F-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-F-1-300x300.png",
        "variant": "Navy Slate"
      },
      {
        "id": 3589,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-G-1-300x300.png",
        "variant": "Charcoal Black"
      },
      {
        "id": 3588,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-I-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/08/PO-FIONA-1-I-300x300.png",
        "variant": "Charcoal Black"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Cocoa Mauve",
        "hex": "#7A5C58",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2
        ]
      },
      {
        "name": "Sage Olive",
        "hex": "#6E7864",
        "imageIndex": 3,
        "indices": [
          3,
          4
        ]
      },
      {
        "name": "Navy Slate",
        "hex": "#2C3A4A",
        "imageIndex": 5,
        "indices": [
          5
        ]
      },
      {
        "name": "Charcoal Black",
        "hex": "#222224",
        "imageIndex": 6,
        "indices": [
          6,
          7
        ]
      }
    ]
  },
  {
    "id": 3565,
    "sku": "GK.36",
    "rawName": "GK.36 DERYA 1",
    "name": "Derya 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 580000,
    "formattedPrice": "Rp 580.000",
    "permalink": "https://lunahijab.co.id/produk/gk-36-derya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-scaled-e1785302987531-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-1-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-scaled-e1785302987531.png",
    "gallery": [
      {
        "id": 3566,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-scaled-e1785302987531-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-scaled-e1785302987531.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-scaled-e1785302987531-300x300.png",
        "variant": "Caramel Taupe"
      },
      {
        "id": 3585,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-1-300x300.png",
        "variant": "Dusty Mauve"
      },
      {
        "id": 3584,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-R-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-R-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-R-300x300.png",
        "variant": "Peach Blush"
      },
      {
        "id": 3583,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-N-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-N-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-N-1-300x300.png",
        "variant": "Dusty Mauve"
      },
      {
        "id": 3582,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-L-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-L-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-L-300x300.png",
        "variant": "Sage Celadon"
      },
      {
        "id": 3581,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-G-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-G-300x300.png",
        "variant": "Terracotta Rose"
      },
      {
        "id": 3580,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-C-1-300x300.png",
        "variant": "Burgundy Wine"
      },
      {
        "id": 3579,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-A-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-A-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-A-300x300.png",
        "variant": "Olive Bronze"
      },
      {
        "id": 3578,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-1-300x300.png",
        "variant": "Midnight Onyx"
      },
      {
        "id": 3577,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-300x300.png",
        "variant": "Mustard Ochre"
      },
      {
        "id": 3576,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-T-300x300.png",
        "variant": "Terracotta Rose"
      },
      {
        "id": 3575,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-300x300.png",
        "variant": "Dusty Mauve"
      },
      {
        "id": 3574,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-U-1-300x300.png",
        "variant": "Mustard Ochre"
      },
      {
        "id": 3573,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-S-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-S-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-S-1-300x300.png",
        "variant": "Dusty Mauve"
      },
      {
        "id": 3572,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-Q-300x300.png",
        "variant": "Midnight Onyx"
      },
      {
        "id": 3571,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-O-1-300x300.png",
        "variant": "Terracotta Rose"
      },
      {
        "id": 3570,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-M-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-M-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-M-1-300x300.png",
        "variant": "Olive Bronze"
      },
      {
        "id": 3569,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-J-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-J-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-J-1-300x300.png",
        "variant": "Pearl Cream"
      },
      {
        "id": 3568,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-F-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-F-300x300.png",
        "variant": "Peach Blush"
      },
      {
        "id": 3567,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-D-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-DERYA-1-D-1-300x300.png",
        "variant": "Caramel Taupe"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Caramel Taupe",
        "hex": "#A68972",
        "imageIndex": 0,
        "indices": [
          0,
          19
        ]
      },
      {
        "name": "Dusty Mauve",
        "hex": "#8C7378",
        "imageIndex": 1,
        "indices": [
          1,
          3,
          11,
          13
        ]
      },
      {
        "name": "Peach Blush",
        "hex": "#D4A396",
        "imageIndex": 2,
        "indices": [
          2,
          18
        ]
      },
      {
        "name": "Sage Celadon",
        "hex": "#78867A",
        "imageIndex": 4,
        "indices": [
          4
        ]
      },
      {
        "name": "Terracotta Rose",
        "hex": "#9E5B56",
        "imageIndex": 5,
        "indices": [
          5,
          10,
          15
        ]
      },
      {
        "name": "Burgundy Wine",
        "hex": "#5E2129",
        "imageIndex": 6,
        "indices": [
          6
        ]
      },
      {
        "name": "Olive Bronze",
        "hex": "#595432",
        "imageIndex": 7,
        "indices": [
          7,
          16
        ]
      },
      {
        "name": "Midnight Onyx",
        "hex": "#1E1E20",
        "imageIndex": 8,
        "indices": [
          8,
          14
        ]
      },
      {
        "name": "Mustard Ochre",
        "hex": "#9C7A2E",
        "imageIndex": 9,
        "indices": [
          9,
          12
        ]
      },
      {
        "name": "Pearl Cream",
        "hex": "#DFDBD2",
        "imageIndex": 17,
        "indices": [
          17
        ]
      }
    ]
  },
  {
    "id": 3557,
    "sku": "GK.20",
    "rawName": "GK.20 HAWA 2",
    "name": "Hawa 2",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 740000,
    "formattedPrice": "Rp 740.000",
    "permalink": "https://lunahijab.co.id/produk/gk-20-hawa-2/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-F-scaled-e1785241783269-768x769.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-G-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-F-scaled-e1785241783269.jpg",
    "gallery": [
      {
        "id": 3558,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-F-scaled-e1785241783269-768x769.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-F-scaled-e1785241783269.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-F-scaled-e1785241783269-300x300.jpg",
        "variant": "Cobalt Navy"
      },
      {
        "id": 3560,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-G-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-G-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-G-300x300.png",
        "variant": "Olive Moss"
      },
      {
        "id": 3561,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-I-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-I-300x300.png",
        "variant": "Terracotta Rust"
      },
      {
        "id": 3562,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-J-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-J-300x300.png",
        "variant": "Terracotta Rust"
      },
      {
        "id": 3563,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-C-768x1365.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-C-300x300.jpg",
        "variant": "Cobalt Navy"
      },
      {
        "id": 3564,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-D-768x1365.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/GK.20-HAWA-2-D-300x300.jpg",
        "variant": "Cobalt Navy"
      },
      {
        "id": 3559,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-D-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-HAWA-2-D-300x300.png",
        "variant": "Dusty Teal"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Cobalt Navy",
        "hex": "#344663",
        "imageIndex": 0,
        "indices": [
          0,
          4,
          5
        ]
      },
      {
        "name": "Olive Moss",
        "hex": "#6E6D4E",
        "imageIndex": 1,
        "indices": [
          1
        ]
      },
      {
        "name": "Terracotta Rust",
        "hex": "#9E5E4B",
        "imageIndex": 2,
        "indices": [
          2,
          3
        ]
      },
      {
        "name": "Dusty Teal",
        "hex": "#6B8487",
        "imageIndex": 6,
        "indices": [
          6
        ]
      }
    ]
  },
  {
    "id": 3548,
    "sku": "GK.65",
    "rawName": "GK.65 ADEEVA 1",
    "name": "Adeeva 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 755000,
    "formattedPrice": "Rp 755.000",
    "permalink": "https://lunahijab.co.id/produk/gk-65-adeeva-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-scaled-e1785238383735-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-I-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-scaled-e1785238383735.png",
    "gallery": [
      {
        "id": 3549,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-scaled-e1785238383735-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-scaled-e1785238383735.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-scaled-e1785238383735-300x300.png",
        "variant": "Caramel Tan"
      },
      {
        "id": 3555,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-I-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-I-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-I-300x300.png",
        "variant": "Midnight Navy"
      },
      {
        "id": 3554,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-J-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-J-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-J-300x300.png",
        "variant": "Midnight Navy"
      },
      {
        "id": 3553,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-G-1-300x300.png",
        "variant": "Caramel Tan"
      },
      {
        "id": 3552,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-D-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-D-1-300x300.png",
        "variant": "Sage Celadon"
      },
      {
        "id": 3551,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-E-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-E-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-E-1-300x300.png",
        "variant": "Sage Celadon"
      },
      {
        "id": 3550,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-A-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-A-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/07/PO-ADEEVA-1-A-1-300x300.png",
        "variant": "Berry Maroon"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Caramel Tan",
        "hex": "#B5896E",
        "imageIndex": 0,
        "indices": [
          0,
          3
        ]
      },
      {
        "name": "Midnight Navy",
        "hex": "#1F2838",
        "imageIndex": 1,
        "indices": [
          1,
          2
        ]
      },
      {
        "name": "Sage Celadon",
        "hex": "#8FA198",
        "imageIndex": 4,
        "indices": [
          4,
          5
        ]
      },
      {
        "name": "Berry Maroon",
        "hex": "#7A1F34",
        "imageIndex": 6,
        "indices": [
          6
        ]
      }
    ]
  },
  {
    "id": 3489,
    "sku": "SET",
    "rawName": "SET ROK. GZ MOLI 252076",
    "name": "Rok. Gz Moli 252076",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 1150000,
    "formattedPrice": "Rp 1.150.000",
    "permalink": "https://lunahijab.co.id/produk/set-rok-gz-moli-252076/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239.jpg",
    "gallery": [
      {
        "id": 3490,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-A-scaled-e1782128768239-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3492,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-B-300x300.jpg",
        "variant": "Photo 02"
      },
      {
        "id": 3491,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-MOLI-252076-C-300x300.jpg",
        "variant": "Photo 03"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3485,
    "sku": "SET",
    "rawName": "SET ROK. GZ JXIU 7003",
    "name": "Rok. Gz Jxiu 7003",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 1150000,
    "formattedPrice": "Rp 1.150.000",
    "permalink": "https://lunahijab.co.id/produk/set-rok-gz-jxiu-7003/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796.jpg",
    "gallery": [
      {
        "id": 3486,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-A-scaled-e1782127973796-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3488,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-B-300x300.jpg",
        "variant": "Photo 02"
      },
      {
        "id": 3487,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-7003-C-300x300.jpg",
        "variant": "Photo 03"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3480,
    "sku": "JAKET.",
    "rawName": "JAKET. EVO LEATHER 12360",
    "name": "Evo Leather 12360",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 495000,
    "formattedPrice": "Rp 495.000",
    "permalink": "https://lunahijab.co.id/produk/jaket-evo-leather-12360/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-A-scaled-e1782127341762-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-A-scaled-e1782127341762.jpg",
    "gallery": [
      {
        "id": 3481,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-A-scaled-e1782127341762-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-A-scaled-e1782127341762.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-A-scaled-e1782127341762-300x300.jpg",
        "variant": "Obsidian Black"
      },
      {
        "id": 3482,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-B-300x300.jpg",
        "variant": "Obsidian Black"
      },
      {
        "id": 3484,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-C-300x300.jpg",
        "variant": "Cognac Brown"
      },
      {
        "id": 3483,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/JAKET.-EVO-LEATHER-12360-D-300x300.jpg",
        "variant": "Cognac Brown"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Obsidian Black",
        "hex": "#1E1E20",
        "imageIndex": 0,
        "indices": [
          0,
          1
        ]
      },
      {
        "name": "Cognac Brown",
        "hex": "#6E4735",
        "imageIndex": 2,
        "indices": [
          2,
          3
        ]
      }
    ]
  },
  {
    "id": 3475,
    "sku": "CNAV.",
    "rawName": "CNAV. JAKET 66169",
    "name": "Jaket 66169",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 615000,
    "formattedPrice": "Rp 615.000",
    "permalink": "https://lunahijab.co.id/produk/cnav-jaket-66169/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-C-scaled-e1782124889942-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-A-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-C-scaled-e1782124889942.jpg",
    "gallery": [
      {
        "id": 3477,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-C-scaled-e1782124889942-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-C-scaled-e1782124889942.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-C-scaled-e1782124889942-300x300.jpg",
        "variant": "Obsidian Black"
      },
      {
        "id": 3476,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-A-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-A-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-A-300x300.jpg",
        "variant": "Espresso Brown"
      },
      {
        "id": 3478,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-B-300x300.jpg",
        "variant": "Espresso Brown"
      },
      {
        "id": 3479,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-JAKET-66169-D-300x300.jpg",
        "variant": "Obsidian Black"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Obsidian Black",
        "hex": "#1E1E20",
        "imageIndex": 0,
        "indices": [
          0,
          3
        ]
      },
      {
        "name": "Espresso Brown",
        "hex": "#4F382E",
        "imageIndex": 1,
        "indices": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": 3471,
    "sku": "SET",
    "rawName": "SET ROK. GZ JXIU 70015",
    "name": "Rok. Gz Jxiu 70015",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 1200000,
    "formattedPrice": "Rp 1.200.000",
    "permalink": "https://lunahijab.co.id/produk/set-rok-gz-jxiu-70015/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707.jpg",
    "gallery": [
      {
        "id": 3472,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-A-scaled-e1782124059707-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3473,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-B-300x300.jpg",
        "variant": "Photo 02"
      },
      {
        "id": 3474,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/SET-ROK.-GZ-JXIU-70015-C-300x300.jpg",
        "variant": "Photo 03"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3469,
    "sku": "CNPPS.",
    "rawName": "CNPPS. SWTR 555",
    "name": "Swtr 555",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 533500,
    "formattedPrice": "Rp 533.500",
    "permalink": "https://lunahijab.co.id/produk/cnpps-swtr-555/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512-768x768.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512.jpg",
    "gallery": [
      {
        "id": 3470,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNPPS.-SWTR-555-scaled-e1782123619512-300x300.jpg",
        "variant": "Photo 01"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3466,
    "sku": "CELANA.",
    "rawName": "CELANA. INSIDE 6177",
    "name": "Inside 6177",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 485000,
    "formattedPrice": "Rp 485.000",
    "permalink": "https://lunahijab.co.id/produk/celana-inside-6177/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-A-scaled-e1782116968973-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-A-scaled-e1782116968973.jpg",
    "gallery": [
      {
        "id": 3467,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-A-scaled-e1782116968973-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-A-scaled-e1782116968973.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-A-scaled-e1782116968973-300x300.jpg",
        "variant": "Pearl Ivory"
      },
      {
        "id": 3468,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA.-INSIDE-6177-B-300x300.jpg",
        "variant": "Caramel Mocha"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Pearl Ivory",
        "hex": "#EAE5DC",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Caramel Mocha",
        "hex": "#8C6C53",
        "imageIndex": 1,
        "indices": [
          1
        ]
      }
    ]
  },
  {
    "id": 3464,
    "sku": "CNAV.",
    "rawName": "CNAV. AV 3707",
    "name": "Av 3707",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 360000,
    "formattedPrice": "Rp 360.000",
    "permalink": "https://lunahijab.co.id/produk/cnav-av-3707/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375-768x768.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375.jpg",
    "gallery": [
      {
        "id": 3465,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNAV.-AV-3707-A-scaled-e1782116487375-300x300.jpg",
        "variant": "Photo 01"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3461,
    "sku": "BLZ.",
    "rawName": "BLZ. GZ JXIU 468",
    "name": "Gz Jxiu 468",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 595000,
    "formattedPrice": "Rp 595.000",
    "permalink": "https://lunahijab.co.id/produk/blz-gz-jxiu-468/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-B-scaled-e1782116173973-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-A-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-B-scaled-e1782116173973.jpg",
    "gallery": [
      {
        "id": 3462,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-B-scaled-e1782116173973-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-B-scaled-e1782116173973.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-B-scaled-e1782116173973-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3463,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-A-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-A-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLZ.-GZ-JXIU-468-A-300x300.jpg",
        "variant": "Photo 02"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3458,
    "sku": "BLAZZER.",
    "rawName": "BLAZZER. AQ 000110",
    "name": "Aq 000110",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 640000,
    "formattedPrice": "Rp 640.000",
    "permalink": "https://lunahijab.co.id/produk/blazzer-aq-000110/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924.jpg",
    "gallery": [
      {
        "id": 3459,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-A-scaled-e1782114895924-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3460,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-AQ-000110-B-300x300.jpg",
        "variant": "Photo 02"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3455,
    "sku": "BLAZZER.",
    "rawName": "BLAZZER. EVO 2W A6610",
    "name": "Evo 2W A6610",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 420000,
    "formattedPrice": "Rp 420.000",
    "permalink": "https://lunahijab.co.id/produk/blazzer-evo-2w-a6610/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-A-scaled-e1782114179482-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-A-scaled-e1782114179482.jpg",
    "gallery": [
      {
        "id": 3456,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-A-scaled-e1782114179482-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-A-scaled-e1782114179482.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-A-scaled-e1782114179482-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3457,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLAZZER.-EVO-2W-A6610-B-300x300.jpg",
        "variant": "Photo 02"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3452,
    "sku": "BLS.",
    "rawName": "BLS. WPAI 50015",
    "name": "Wpai 50015",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 610000,
    "formattedPrice": "Rp 610.000",
    "permalink": "https://lunahijab.co.id/produk/bls-wpai-50015/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-A-scaled-e1782113398890-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-B-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-A-scaled-e1782113398890.jpg",
    "gallery": [
      {
        "id": 3453,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-A-scaled-e1782113398890-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-A-scaled-e1782113398890.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-A-scaled-e1782113398890-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3454,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/BLS.-WPAI-50015-B-300x300.jpg",
        "variant": "Photo 02"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3446,
    "sku": "CELANA",
    "rawName": "CELANA CUTBRAY. SG SONIA 10220",
    "name": "Cutbray. Sg Sonia 10220",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 300000,
    "formattedPrice": "Rp 300.000",
    "permalink": "https://lunahijab.co.id/produk/celana-cutbray-sg-sonia-10220/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-A-scaled-e1782112845494-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-E-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-A-scaled-e1782112845494.jpg",
    "gallery": [
      {
        "id": 3447,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-A-scaled-e1782112845494-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-A-scaled-e1782112845494.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-A-scaled-e1782112845494-300x300.jpg",
        "variant": "Jet Black"
      },
      {
        "id": 3451,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-E-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-E-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-E-300x300.jpg",
        "variant": "Indigo Slate"
      },
      {
        "id": 3450,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-D-300x300.jpg",
        "variant": "Camel Tan"
      },
      {
        "id": 3449,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-C-300x300.jpg",
        "variant": "Camel Tan"
      },
      {
        "id": 3448,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CELANA-CUTBRAY.-SG-SONIA-10220-B-300x300.jpg",
        "variant": "Espresso Brown"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Jet Black",
        "hex": "#1C1C1E",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Indigo Slate",
        "hex": "#494E6B",
        "imageIndex": 1,
        "indices": [
          1
        ]
      },
      {
        "name": "Camel Tan",
        "hex": "#C29B70",
        "imageIndex": 2,
        "indices": [
          2,
          3
        ]
      },
      {
        "name": "Espresso Brown",
        "hex": "#4A3C35",
        "imageIndex": 4,
        "indices": [
          4
        ]
      }
    ]
  },
  {
    "id": 3431,
    "sku": "CNANYU.",
    "rawName": "CNANYU. KMJ 619",
    "name": "Kmj 619",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 295000,
    "formattedPrice": "Rp 295.000",
    "permalink": "https://lunahijab.co.id/produk/cnanyu-kmj-619/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-A-scaled-e1782110612185-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-I-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-A-scaled-e1782110612185.jpg",
    "gallery": [
      {
        "id": 3432,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-A-scaled-e1782110612185-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-A-scaled-e1782110612185.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-A-scaled-e1782110612185-300x300.jpg",
        "variant": "Sand Beige Stripe"
      },
      {
        "id": 3441,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-I-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-I-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-I-300x300.jpg",
        "variant": "Blush Grey Panel"
      },
      {
        "id": 3440,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-J-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-J-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-J-300x300.jpg",
        "variant": "Blush Grey Panel"
      },
      {
        "id": 3439,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-G-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-G-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-G-300x300.jpg",
        "variant": "Sky Slate Panel"
      },
      {
        "id": 3438,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-H-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-H-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-H-300x300.jpg",
        "variant": "Sky Slate Panel"
      },
      {
        "id": 3437,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-E-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-E-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-E-300x300.jpg",
        "variant": "Cream Ivory Stripe"
      },
      {
        "id": 3436,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-F-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-F-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-F-300x300.jpg",
        "variant": "Cream Ivory Stripe"
      },
      {
        "id": 3435,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-C-300x300.jpg",
        "variant": "Taupe Mocha Panel"
      },
      {
        "id": 3434,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-D-300x300.jpg",
        "variant": "Taupe Mocha Panel"
      },
      {
        "id": 3433,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-619-B-300x300.jpg",
        "variant": "Sand Beige Stripe"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Sand Beige Stripe",
        "hex": "#D8CFC2",
        "imageIndex": 0,
        "indices": [
          0,
          9
        ]
      },
      {
        "name": "Blush Grey Panel",
        "hex": "#C7B8B5",
        "imageIndex": 1,
        "indices": [
          1,
          2
        ]
      },
      {
        "name": "Sky Slate Panel",
        "hex": "#9EB0C2",
        "imageIndex": 3,
        "indices": [
          3,
          4
        ]
      },
      {
        "name": "Cream Ivory Stripe",
        "hex": "#EFECE6",
        "imageIndex": 5,
        "indices": [
          5,
          6
        ]
      },
      {
        "name": "Taupe Mocha Panel",
        "hex": "#9E8D7E",
        "imageIndex": 7,
        "indices": [
          7,
          8
        ]
      }
    ]
  },
  {
    "id": 3430,
    "sku": "CNANYU.",
    "rawName": "CNANYU. KMJ 907",
    "name": "Kmj 907",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 495000,
    "formattedPrice": "Rp 495.000",
    "permalink": "https://lunahijab.co.id/produk/cnanyu-kmj-907/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-A-scaled-e1782109571738-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-D-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-A-scaled-e1782109571738.jpg",
    "gallery": [
      {
        "id": 3426,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-A-scaled-e1782109571738-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-A-scaled-e1782109571738.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-A-scaled-e1782109571738-300x300.jpg",
        "variant": "Soft Blush Pink"
      },
      {
        "id": 3429,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-D-300x300.jpg",
        "variant": "Champagne Cream"
      },
      {
        "id": 3428,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-C-300x300.jpg",
        "variant": "Espresso Contrast"
      },
      {
        "id": 3427,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/CNANYU.-KMJ-907-B-300x300.jpg",
        "variant": "Champagne Cream"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Soft Blush Pink",
        "hex": "#E6D2CE",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Champagne Cream",
        "hex": "#E3DAC9",
        "imageIndex": 1,
        "indices": [
          1,
          3
        ]
      },
      {
        "name": "Espresso Contrast",
        "hex": "#5E4638",
        "imageIndex": 2,
        "indices": [
          2
        ]
      }
    ]
  },
  {
    "id": 3415,
    "sku": "GK.105",
    "rawName": "GK.105 RANIA 4",
    "name": "Rania 4",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 735500,
    "formattedPrice": "Rp 735.500",
    "permalink": "https://lunahijab.co.id/produk/gk-105-rania-4/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-A-1-1-scaled-e1781246984962-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-B-1-768x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-A-1-1-scaled-e1781246984962.png",
    "gallery": [
      {
        "id": 3418,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-A-1-1-scaled-e1781246984962-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-A-1-1-scaled-e1781246984962.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-A-1-1-scaled-e1781246984962-300x300.png",
        "variant": "Slate Blue"
      },
      {
        "id": 3416,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-B-1-768x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-B-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/06/GK.-105-RANIA-4-B-1-300x300.png",
        "variant": "Burgundy Maroon"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Slate Blue",
        "hex": "#4A586E",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Burgundy Maroon",
        "hex": "#6B2D38",
        "imageIndex": 1,
        "indices": [
          1
        ]
      }
    ]
  },
  {
    "id": 3375,
    "sku": "CNLEAVES.",
    "rawName": "CNLEAVES. SHIRT 8606",
    "name": "Shirt 8606",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 290000,
    "formattedPrice": "Rp 290.000",
    "permalink": "https://lunahijab.co.id/produk/cnleaves-shirt-8606/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.42-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-3-768x768.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.42.jpeg",
    "gallery": [
      {
        "id": 3377,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.42-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.42.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.42-300x300.jpeg",
        "variant": "Champagne Beige (37A)"
      },
      {
        "id": 3379,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-3-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-3.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-3-300x300.jpeg",
        "variant": "Crisp White (2A)"
      },
      {
        "id": 3380,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-2-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-2.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-2-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3381,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-1-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3382,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.41-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Champagne Beige (37A)",
        "hex": "#D8C8B4",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Crisp White (2A)",
        "hex": "#F4F4F2",
        "imageIndex": 1,
        "indices": [
          1
        ]
      },
      {
        "name": "Obsidian Black (1A)",
        "hex": "#1E1E20",
        "imageIndex": 2,
        "indices": [
          2,
          3,
          4
        ]
      }
    ]
  },
  {
    "id": 3368,
    "sku": "CNLEAVES.",
    "rawName": "CNLEAVES. SHIRT 8607",
    "name": "Shirt 8607",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 290000,
    "formattedPrice": "Rp 290.000",
    "permalink": "https://lunahijab.co.id/produk/cnleaves-shirt-8607/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-4-768x768.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58.jpeg",
    "gallery": [
      {
        "id": 3369,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3371,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-4-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-4.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-4-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3370,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.57-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.57.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.57-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3374,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-1-300x300.jpeg",
        "variant": "Crisp White (2A)"
      },
      {
        "id": 3373,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-2-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-2.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-2-300x300.jpeg",
        "variant": "Cream Ivory (35A)"
      },
      {
        "id": 3372,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-3-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-3.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.44.58-3-300x300.jpeg",
        "variant": "Warm Khaki (37A)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Obsidian Black (1A)",
        "hex": "#1E1E20",
        "imageIndex": 0,
        "indices": [
          0,
          1,
          2
        ]
      },
      {
        "name": "Crisp White (2A)",
        "hex": "#F4F4F2",
        "imageIndex": 3,
        "indices": [
          3
        ]
      },
      {
        "name": "Cream Ivory (35A)",
        "hex": "#EAE3D2",
        "imageIndex": 4,
        "indices": [
          4
        ]
      },
      {
        "name": "Warm Khaki (37A)",
        "hex": "#C2B29B",
        "imageIndex": 5,
        "indices": [
          5
        ]
      }
    ]
  },
  {
    "id": 3362,
    "sku": "CNLEAVES.",
    "rawName": "CNLEAVES. SHIRT 8617-1",
    "name": "Shirt 8617-1",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 290000,
    "formattedPrice": "Rp 290.000",
    "permalink": "https://lunahijab.co.id/produk/cnleaves-shirt-8617-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-1-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-768x768.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-1.jpeg",
    "gallery": [
      {
        "id": 3363,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-1-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3367,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3366,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-2-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-2.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-2-300x300.jpeg",
        "variant": "Crisp White (2A)"
      },
      {
        "id": 3365,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-3-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-3.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-3-300x300.jpeg",
        "variant": "Dove Grey (9A)"
      },
      {
        "id": 3364,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-4-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-4.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.14-4-300x300.jpeg",
        "variant": "Soft Cream (12A)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Obsidian Black (1A)",
        "hex": "#1E1E20",
        "imageIndex": 0,
        "indices": [
          0,
          1
        ]
      },
      {
        "name": "Crisp White (2A)",
        "hex": "#F4F4F2",
        "imageIndex": 2,
        "indices": [
          2
        ]
      },
      {
        "name": "Dove Grey (9A)",
        "hex": "#8C8E91",
        "imageIndex": 3,
        "indices": [
          3
        ]
      },
      {
        "name": "Soft Cream (12A)",
        "hex": "#EAE4D7",
        "imageIndex": 4,
        "indices": [
          4
        ]
      }
    ]
  },
  {
    "id": 3355,
    "sku": "CNLEAVES.",
    "rawName": "CNLEAVES. SHIRT 8910",
    "name": "Shirt 8910",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 290000,
    "formattedPrice": "Rp 290.000",
    "permalink": "https://lunahijab.co.id/produk/cnleaves-shirt-8910/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-1-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-4-768x768.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-1.jpeg",
    "gallery": [
      {
        "id": 3356,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-1-300x300.jpeg",
        "variant": "Crisp White (2A)"
      },
      {
        "id": 3358,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-4-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-4.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-4-300x300.jpeg",
        "variant": "Sage Grey (26A)"
      },
      {
        "id": 3359,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-3-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-3.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-3-300x300.jpeg",
        "variant": "Butter Cream (35A)"
      },
      {
        "id": 3361,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3360,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-2-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-2.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-2-300x300.jpeg",
        "variant": "Obsidian Black (1A)"
      },
      {
        "id": 3357,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-5-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-5.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.45.33-5-300x300.jpeg",
        "variant": "Butter Cream (35A)"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Crisp White (2A)",
        "hex": "#F4F4F2",
        "imageIndex": 0,
        "indices": [
          0
        ]
      },
      {
        "name": "Sage Grey (26A)",
        "hex": "#9BA39E",
        "imageIndex": 1,
        "indices": [
          1
        ]
      },
      {
        "name": "Butter Cream (35A)",
        "hex": "#EFE6CE",
        "imageIndex": 2,
        "indices": [
          2,
          5
        ]
      },
      {
        "name": "Obsidian Black (1A)",
        "hex": "#1E1E20",
        "imageIndex": 3,
        "indices": [
          3,
          4
        ]
      }
    ]
  },
  {
    "id": 3349,
    "sku": "CNAV.",
    "rawName": "CNAV. AT 3652",
    "name": "At 3652",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 665000,
    "formattedPrice": "Rp 665.000",
    "permalink": "https://lunahijab.co.id/produk/cnav-at-3652/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-1-768x768.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00.jpeg",
    "gallery": [
      {
        "id": 3351,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-300x300.jpeg",
        "variant": "Obsidian Black"
      },
      {
        "id": 3354,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-1-300x300.jpeg",
        "variant": "Pearl White"
      },
      {
        "id": 3352,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.01-1-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.01-1.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.01-1-300x300.jpeg",
        "variant": "Obsidian Black"
      },
      {
        "id": 3353,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-2-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-2.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-27-at-17.46.00-2-300x300.jpeg",
        "variant": "Obsidian Black"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": [
      {
        "name": "Obsidian Black",
        "hex": "#1E1E20",
        "imageIndex": 0,
        "indices": [
          0,
          2,
          3
        ]
      },
      {
        "name": "Pearl White",
        "hex": "#F4F3EF",
        "imageIndex": 1,
        "indices": [
          1
        ]
      }
    ]
  },
  {
    "id": 3340,
    "sku": "AT.604",
    "rawName": "AT.604 NOA 1",
    "name": "Noa 1",
    "brand": "GZ",
    "subtitle": "GZ — Architectural Tailoring & Separates",
    "fabric": "Structured Cotton-Wool Blend & Tailored Crepe",
    "price": 465000,
    "formattedPrice": "Rp 465.000",
    "permalink": "https://lunahijab.co.id/produk/at-604-noa-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-F-scaled-e1779605684343-768x768.jpg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-A-1-683x1024.jpg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-F-scaled-e1779605684343.jpg",
    "gallery": [
      {
        "id": 3342,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-F-scaled-e1779605684343-768x768.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-F-scaled-e1779605684343.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-F-scaled-e1779605684343-300x300.jpg",
        "variant": "Photo 01"
      },
      {
        "id": 3347,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-A-1-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-A-1-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-A-1-300x300.jpg",
        "variant": "Photo 02"
      },
      {
        "id": 3346,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-B-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-B-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-B-300x300.jpg",
        "variant": "Photo 03"
      },
      {
        "id": 3345,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-C-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-C-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-C-300x300.jpg",
        "variant": "Photo 04"
      },
      {
        "id": 3344,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-D-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-D-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-D-300x300.jpg",
        "variant": "Photo 05"
      },
      {
        "id": 3343,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-E-683x1024.jpg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-E-scaled.jpg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/NOA-E-300x300.jpg",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3332,
    "sku": "G.528",
    "rawName": "G.528 AZRINA 1",
    "name": "Azrina 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1125000,
    "formattedPrice": "Rp 1.125.000",
    "permalink": "https://lunahijab.co.id/produk/g-528-azrina-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-A-1-scaled-e1779605122364-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-B-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-A-1-scaled-e1779605122364.png",
    "gallery": [
      {
        "id": 3334,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-A-1-scaled-e1779605122364-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-A-1-scaled-e1779605122364.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-A-1-scaled-e1779605122364-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3339,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-B-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-B-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-B-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3338,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-C-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-C-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-C-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3337,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-D-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-D-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-D-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3336,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-E-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-E-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3335,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-F-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-F-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/EDIT-AZRINA-1-F-300x300.png",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3321,
    "sku": "G.557",
    "rawName": "G.557 NAUMIRA 1",
    "name": "Naumira 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 785000,
    "formattedPrice": "Rp 785.000",
    "permalink": "https://lunahijab.co.id/produk/g-557-naumira-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02255.jpg-1-scaled-e1779540653830-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02239.jpg-1-683x1024.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02255.jpg-1-scaled-e1779540653830.jpeg",
    "gallery": [
      {
        "id": 3322,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02255.jpg-1-scaled-e1779540653830-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02255.jpg-1-scaled-e1779540653830.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02255.jpg-1-scaled-e1779540653830-300x300.jpeg",
        "variant": "Photo 01"
      },
      {
        "id": 3325,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02239.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02239.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02239.jpg-1-300x300.jpeg",
        "variant": "Photo 02"
      },
      {
        "id": 3324,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02309.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02309.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02309.jpg-1-300x300.jpeg",
        "variant": "Photo 03"
      },
      {
        "id": 3323,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02404.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02404.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02404.jpg-1-300x300.jpeg",
        "variant": "Photo 04"
      },
      {
        "id": 3327,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02174.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02174.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02174.jpg-1-300x300.jpeg",
        "variant": "Photo 05"
      },
      {
        "id": 3326,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02231.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02231.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC02231.jpg-1-300x300.jpeg",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3314,
    "sku": "G.120",
    "rawName": "G.120 BRYA 12 UM",
    "name": "Brya 12 Um",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 885000,
    "formattedPrice": "Rp 885.000",
    "permalink": "https://lunahijab.co.id/produk/g-120-brya-12-um/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-C-2-scaled-e1779540029736-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-1-2-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-C-2-scaled-e1779540029736.png",
    "gallery": [
      {
        "id": 3315,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-C-2-scaled-e1779540029736-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-C-2-scaled-e1779540029736.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-C-2-scaled-e1779540029736-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3320,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-1-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-1-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-1-2-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3319,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-H-2-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3318,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-F-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-F-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-F-2-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3317,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-E-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-E-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-E-2-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3316,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-D-2-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-D-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-BRYA-12-UM-D-2-300x300.png",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3307,
    "sku": "G.120",
    "rawName": "G.120 BRYA 11 UM",
    "name": "Brya 11 Um",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 760000,
    "formattedPrice": "Rp 760.000",
    "permalink": "https://lunahijab.co.id/produk/g-120-brya-11-um/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2324.jpg-1-scaled-e1779538647867-768x768.jpeg",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2100.jpg-1-683x1024.jpeg",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2324.jpg-1-scaled-e1779538647867.jpeg",
    "gallery": [
      {
        "id": 3308,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2324.jpg-1-scaled-e1779538647867-768x768.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2324.jpg-1-scaled-e1779538647867.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2324.jpg-1-scaled-e1779538647867-300x300.jpeg",
        "variant": "Photo 01"
      },
      {
        "id": 3313,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2100.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2100.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2100.jpg-1-300x300.jpeg",
        "variant": "Photo 02"
      },
      {
        "id": 3312,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2041.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2041.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2041.jpg-1-300x300.jpeg",
        "variant": "Photo 03"
      },
      {
        "id": 3311,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2027.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2027.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2027.jpg-1-300x300.jpeg",
        "variant": "Photo 04"
      },
      {
        "id": 3310,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2017.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2017.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2017.jpg-1-300x300.jpeg",
        "variant": "Photo 05"
      },
      {
        "id": 3309,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2009.jpg-1-683x1024.jpeg",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2009.jpg-1-scaled.jpeg",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/DSC2009.jpg-1-300x300.jpeg",
        "variant": "Photo 06"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3301,
    "sku": "G.378",
    "rawName": "G.378 AMILYA 1",
    "name": "Amilya 1",
    "brand": "Luna",
    "subtitle": "Haute Modest Couture — Signature Gamis",
    "fabric": " Imported Matte Silk Crepe & Whisper Voile Lining",
    "price": 1735000,
    "formattedPrice": "Rp 1.735.000",
    "permalink": "https://lunahijab.co.id/produk/g-378-amilya-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-A-NAMA-1-scaled-e1779521149979-768x768.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-E-NAMA-1-683x1024.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-A-NAMA-1-scaled-e1779521149979.png",
    "gallery": [
      {
        "id": 3302,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-A-NAMA-1-scaled-e1779521149979-768x768.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-A-NAMA-1-scaled-e1779521149979.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-A-NAMA-1-scaled-e1779521149979-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3303,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-E-NAMA-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-E-NAMA-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-E-NAMA-1-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3304,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-D-NAMA-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-D-NAMA-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-D-NAMA-1-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3305,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-C-NAMA-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-C-NAMA-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-C-NAMA-1-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3306,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-B-NAMA-1-683x1024.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-B-NAMA-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/REV-AMILYA-1-B-NAMA-1-300x300.png",
        "variant": "Photo 05"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  },
  {
    "id": 3291,
    "sku": "GK.70",
    "rawName": "GK.70 CAROLINE 1",
    "name": "Caroline 1",
    "brand": "Kemayu",
    "subtitle": "Kemayu Heritage — Contemporary Modest Dress",
    "fabric": "Breathable Botanical Rayon Twill & Soft Dobby Weave",
    "price": 730000,
    "formattedPrice": "Rp 730.000",
    "permalink": "https://lunahijab.co.id/produk/gk-70-caroline-1/",
    "primaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-1-scaled-e1779518748328-768x769.png",
    "secondaryImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-E-768x1365.png",
    "highResImage": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-1-scaled-e1779518748328.png",
    "gallery": [
      {
        "id": 3292,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-1-scaled-e1779518748328-768x769.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-1-scaled-e1779518748328.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-1-scaled-e1779518748328-300x300.png",
        "variant": "Photo 01"
      },
      {
        "id": 3293,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-E-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-E-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-E-300x300.png",
        "variant": "Photo 02"
      },
      {
        "id": 3294,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-2-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-2-300x300.png",
        "variant": "Photo 03"
      },
      {
        "id": 3295,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-D-1-300x300.png",
        "variant": "Photo 04"
      },
      {
        "id": 3296,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-2-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-2-300x300.png",
        "variant": "Photo 05"
      },
      {
        "id": 3297,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-C-1-300x300.png",
        "variant": "Photo 06"
      },
      {
        "id": 3298,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-2-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-2-300x300.png",
        "variant": "Photo 07"
      },
      {
        "id": 3299,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-1-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-1-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-B-1-300x300.png",
        "variant": "Photo 08"
      },
      {
        "id": 3300,
        "card": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-2-768x1365.png",
        "full": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-2-scaled.png",
        "thumb": "https://lunahijab.co.id/wp-content/uploads/2026/05/PO-CAROLINE-1-A-2-300x300.png",
        "variant": "Photo 09"
      }
    ],
    "isNew": false,
    "isCoutureReserve": false,
    "colorOptions": []
  }
];
