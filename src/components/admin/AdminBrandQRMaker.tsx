import React, { useState, useEffect, useRef, useCallback } from 'react';
import QRCode from 'qrcode';
import {
  QrCode,
  Download,
  Printer,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Tag,
  Copy,
  Check,
  Search,
  Eye,
  Layers,
} from 'lucide-react';
import { BRAND_ASSETS, Product } from '../../data/products';

interface AdminBrandQRMakerProps {
  products: Product[];
  selectedProduct?: Product | null;
  initialBrand?: 'Luna' | 'Kemayu' | 'GZ';
}

export const AdminBrandQRMaker: React.FC<AdminBrandQRMakerProps> = ({
  products,
  selectedProduct: externalSelectedProduct,
  initialBrand = 'Luna',
}) => {
  const [selectedBrand, setSelectedBrand] = useState<'Luna' | 'Kemayu' | 'GZ'>(
    (externalSelectedProduct?.brand as 'Luna' | 'Kemayu' | 'GZ') || initialBrand
  );

  // Selected product from catalog or custom
  const [selectedProductId, setSelectedProductId] = useState<number | 'custom'>(
    externalSelectedProduct ? externalSelectedProduct.id : products[0]?.id || 3980
  );

  // Custom garment override fields
  const [customName, setCustomName] = useState('Kiana 1');
  const [customSku, setCustomSku] = useState('G.569');
  const [customFabric, setCustomFabric] = useState('Matte Silk Crepe & Whispering Voile');
  const [batchCode, setBatchCode] = useState('BATCH-2026/A');

  // Serial Number
  const [serialNumber, setSerialNumber] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedSerial, setCopiedSerial] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hangtagCardRef = useRef<HTMLDivElement | null>(null);

  // Active product object
  const activeProduct =
    selectedProductId === 'custom'
      ? null
      : products.find((p) => p.id === selectedProductId) || products[0];

  // Brand config themes
  const brandThemes = {
    Luna: {
      name: 'Luna',
      subline: 'Haute Modest Couture',
      origin: 'Maison Luna Kudus Atelier',
      codePrefix: 'LN',
      bgGradient: 'from-[#141312] via-[#1a1816] to-[#0d0c0b]',
      borderColor: 'border-champagne/40',
      accentColor: 'text-champagne',
      badgeBg: 'bg-champagne/20 text-champagne border-champagne/30',
      sealColor: 'border-champagne text-champagne',
      logoSrc: BRAND_ASSETS.logoCompact,
      ribbonHole: 'bg-[#0a0a09] border-[#d4af37]',
    },
    Kemayu: {
      name: 'Kemayu',
      subline: 'Nusantara Heritage Archive',
      origin: 'Kemayu Heritage Atelier Kudus',
      codePrefix: 'KM',
      bgGradient: 'from-[#0b1712] via-[#11241c] to-[#08120e]',
      borderColor: 'border-emerald-500/40',
      accentColor: 'text-emerald-300',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      sealColor: 'border-emerald-400 text-emerald-300',
      logoSrc: BRAND_ASSETS.logoCompact,
      ribbonHole: 'bg-[#050e09] border-[#34d399]',
    },
    GZ: {
      name: 'GZ',
      subline: 'Metropolitan Contemporary Modest',
      origin: 'GZ Architectural Atelier Kudus',
      codePrefix: 'GZ',
      bgGradient: 'from-[#12161f] via-[#181d29] to-[#0d1017]',
      borderColor: 'border-blue-400/40',
      accentColor: 'text-blue-200',
      badgeBg: 'bg-blue-400/20 text-blue-200 border-blue-400/30',
      sealColor: 'border-blue-300 text-blue-200',
      logoSrc: BRAND_ASSETS.logoCompact,
      ribbonHole: 'bg-[#080b10] border-[#93c5fd]',
    },
  };

  const theme = brandThemes[selectedBrand];

  // Generate random serial based on brand prefix, year, and SKU
  const generateNewSerial = useCallback(() => {
    const year = new Date().getFullYear();
    const skuClean = (activeProduct?.sku || customSku).replace(/[^A-Za-z0-9]/g, '');
    const rand = Math.floor(100000 + Math.random() * 900000);
    const prefix = theme.codePrefix;
    return `${prefix}-${year}-${skuClean}-${rand}`;
  }, [activeProduct, customSku, theme.codePrefix]);

  // Initial serial generation
  useEffect(() => {
    setSerialNumber(generateNewSerial());
  }, [generateNewSerial, selectedBrand, selectedProductId]);

  // Sync brand when product changes
  useEffect(() => {
    if (activeProduct && activeProduct.brand) {
      if (
        activeProduct.brand === 'Luna' ||
        activeProduct.brand === 'Kemayu' ||
        activeProduct.brand === 'GZ'
      ) {
        setSelectedBrand(activeProduct.brand);
      }
    }
  }, [activeProduct]);

  // Generate QR Code URL & Canvas
  const verificationUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/?verify=${encodeURIComponent(serialNumber)}`
      : `https://lunahijab.vercel.app/?verify=${encodeURIComponent(serialNumber)}`;

  useEffect(() => {
    if (!serialNumber) return;

    // Generate DataURL
    QRCode.toDataURL(
      verificationUrl,
      {
        width: 600,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      },
      (err, url) => {
        if (!err && url) {
          setQrDataUrl(url);
        }
      }
    );

    // Draw on hidden or visible canvas
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, verificationUrl, {
        width: 320,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      });
    }
  }, [verificationUrl, serialNumber]);

  // Copy Verification URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  // Copy Serial Number
  const handleCopySerial = () => {
    navigator.clipboard.writeText(serialNumber);
    setCopiedSerial(true);
    setTimeout(() => setCopiedSerial(false), 2000);
  };

  // Download QR PNG
  const handleDownloadQrPng = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `QR_${selectedBrand}_${serialNumber}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to draw rounded rectangles on canvas with broad compatibility
  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) => {
    ctx.beginPath();
    if (typeof (ctx as any).roundRect === 'function') {
      (ctx as any).roundRect(x, y, w, h, r);
    } else {
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
  };

  // Helper to draw centered wrapped text strictly within a maximum width
  const drawCenteredWrappedText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    centerX: number,
    startY: number,
    maxWidth: number,
    lineHeight: number
  ): number => {
    const words = text.split(' ');
    let line = '';
    let y = startY;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + (line ? ' ' : '') + words[n];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line, centerX, y);
        line = words[n];
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      ctx.fillText(line, centerX, y);
      y += lineHeight;
    }
    return y;
  };

  // Download Luxury Hangtag Card as printable PNG with rounded corners and safe margins
  const [downloadingCard, setDownloadingCard] = useState(false);

  const handleDownloadHangtagCard = async () => {
    setDownloadingCard(true);
    try {
      // 1. Prepare QR code image
      let targetQr = qrDataUrl;
      if (!targetQr) {
        targetQr = await QRCode.toDataURL(verificationUrl, {
          width: 600,
          margin: 2,
          errorCorrectionLevel: 'H',
        });
      }

      // Load QR Image
      const qrImg = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('Failed to load QR code image'));
        img.src = targetQr;
      });

      // Load Brand Logo if available
      const logoImg = await new Promise<HTMLImageElement | null>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = BRAND_ASSETS.logoCompact;
      });

      // 2. Setup Canvas
      const canvas = document.createElement('canvas');
      const width = 800;
      const height = 1400;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 3. Clear Canvas for transparency outside rounded corners
      ctx.clearRect(0, 0, width, height);

      // Card geometry
      const cardX = 20;
      const cardY = 20;
      const cardW = width - 40; // 760
      const cardH = height - 40; // 1360
      const cardRadius = 56; // Matching preview rounded-3xl

      // 4. Fill card background clipped to rounded rect
      ctx.save();
      drawRoundedRect(ctx, cardX, cardY, cardW, cardH, cardRadius);
      ctx.clip();

      const grad = ctx.createLinearGradient(0, 0, 0, height);
      if (selectedBrand === 'Luna') {
        grad.addColorStop(0, '#141312');
        grad.addColorStop(0.5, '#1a1816');
        grad.addColorStop(1, '#0d0c0b');
      } else if (selectedBrand === 'Kemayu') {
        grad.addColorStop(0, '#0b1712');
        grad.addColorStop(0.5, '#11241c');
        grad.addColorStop(1, '#08120e');
      } else {
        grad.addColorStop(0, '#12161f');
        grad.addColorStop(0.5, '#181d29');
        grad.addColorStop(1, '#0d1017');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(cardX, cardY, cardW, cardH);

      // Subtle atmospheric vignette
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        220,
        width / 2,
        height / 2,
        720
      );
      vignette.addColorStop(0, 'rgba(255, 255, 255, 0.025)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.55)');
      ctx.fillStyle = vignette;
      ctx.fillRect(cardX, cardY, cardW, cardH);
      ctx.restore();

      // 5. Outer Accent Border with rounded corners
      const borderAccent =
        selectedBrand === 'Luna' ? '#d4af37' : selectedBrand === 'Kemayu' ? '#34d399' : '#93c5fd';
      ctx.save();
      ctx.strokeStyle = borderAccent;
      ctx.lineWidth = 5;
      drawRoundedRect(ctx, cardX + 16, cardY + 16, cardW - 32, cardH - 32, 42);
      ctx.stroke();

      // 6. Inner Subtle Border with rounded corners
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1.5;
      drawRoundedRect(ctx, cardX + 28, cardY + 28, cardW - 56, cardH - 56, 32);
      ctx.stroke();
      ctx.restore();

      // 7. Lanyard Hole Punch at Top
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, 88, 22, 0, 2 * Math.PI);
      ctx.fillStyle =
        selectedBrand === 'Luna' ? '#0a0a09' : selectedBrand === 'Kemayu' ? '#050e09' : '#080b10';
      ctx.fill();
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = borderAccent;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width / 2, 88, 11, 0, 2 * Math.PI);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.stroke();
      ctx.restore();

      // 8. Brand Logo / Crest
      if (logoImg) {
        const maxLogoH = 46;
        const logoAspect = logoImg.width / logoImg.height;
        const logoW = Math.min(maxLogoH * logoAspect, 140);
        ctx.drawImage(logoImg, width / 2 - logoW / 2, 132, logoW, maxLogoH);
      } else {
        ctx.font = '26px sans-serif';
        ctx.fillStyle = borderAccent;
        ctx.textAlign = 'center';
        ctx.fillText('✦', width / 2, 158);
      }

      // 9. Brand Name & Subline
      ctx.textAlign = 'center';
      ctx.font = 'bold 34px "Playfair Display", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`MAISON ${selectedBrand.toUpperCase()}`, width / 2, 204);

      ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = borderAccent;
      ctx.fillText(theme.subline.toUpperCase(), width / 2, 232);

      // 10. Divider Line 1 (Inside Safe Bounds)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.beginPath();
      ctx.moveTo(160, 258);
      ctx.lineTo(width - 160, 258);
      ctx.stroke();

      // 11. Certificate Banner
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
      ctx.fillText('OFFICIAL CERTIFICATE OF AUTHENTICITY', width / 2, 288);

      // 12. Garment Title & SKU
      const gName = activeProduct?.name || customName;
      const gSku = activeProduct?.sku || customSku;
      ctx.font = 'bold 26px "Playfair Display", Georgia, serif';
      ctx.fillStyle = '#ffffff';
      let currentY = drawCenteredWrappedText(ctx, gName, width / 2, 332, 540, 34);

      // SKU Chip (Rounded)
      const skuText = `SKU: ${gSku}`;
      ctx.font = 'bold 14px monospace';
      const skuMetrics = ctx.measureText(skuText);
      const skuChipW = skuMetrics.width + 36;
      drawRoundedRect(ctx, width / 2 - skuChipW / 2, currentY + 4, skuChipW, 28, 6);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.fillText(skuText, width / 2, currentY + 23);
      currentY += 40;

      // 13. Fabric Line (Safe Wrapped)
      const gFabric = activeProduct?.fabric || customFabric;
      ctx.font = 'italic 14px Georgia, serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      drawCenteredWrappedText(ctx, gFabric, width / 2, currentY + 12, 540, 20);

      // 14. White QR Code Box with Rounded Corners
      const boxSize = 330;
      const boxX = (width - boxSize) / 2; // 235
      const boxY = 475;
      drawRoundedRect(ctx, boxX, boxY, boxSize, boxSize, 22);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.drawImage(qrImg, boxX + 15, boxY + 15, 300, 300);

      // 15. Serial Number Chip (Rounded)
      const serialChipW = 460;
      const serialChipH = 48;
      const serialChipY = 832;
      drawRoundedRect(ctx, width / 2 - serialChipW / 2, serialChipY, serialChipW, serialChipH, 12);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.stroke();
      ctx.font = 'bold 17px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(serialNumber, width / 2, serialChipY + 30);

      // 16. QC Seal Badge & Provenance
      const sealW = 320;
      const sealH = 30;
      const sealY = 902;
      drawRoundedRect(ctx, width / 2 - sealW / 2, sealY, sealW, sealH, 15);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();
      ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = borderAccent;
      ctx.fillText('✓ GRADE A+ COUTURE RESERVE', width / 2, sealY + 20);

      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.fillText('KUDUS ATELIER · CENTRAL JAVA · INDONESIA', width / 2, 952);

      // 17. Divider Line 2
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      ctx.beginPath();
      ctx.moveTo(160, 978);
      ctx.lineTo(width - 160, 978);
      ctx.stroke();

      // 18. Security Inscription / Scanner Instruction
      // FIXED: Restricted to maxWidth 500px so it NEVER touches or crosses the border lines!
      ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      drawCenteredWrappedText(
        ctx,
        'Scan QR code with smartphone camera or atelier scanner to verify authentic provenance & register warranty.',
        width / 2,
        1014,
        500, // 500px width inside 696px inner border guarantees over 98px padding on both sides
        22
      );

      // 19. Barcode Simulation Lines (Safe Centered)
      const barcodeY = 1084;
      const barcodeW = 320;
      const startX = width / 2 - barcodeW / 2; // 240
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      for (let i = startX; i < startX + barcodeW; i += 7) {
        const barW = (i * 7) % 5 === 0 ? 3.5 : 1.8;
        ctx.fillRect(i, barcodeY, barW, 36);
      }

      ctx.font = '12px monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText(`AUT-ID: ${serialNumber}`, width / 2, 1145);

      // 20. Trigger Download
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `Hangtag_${selectedBrand}_${gSku}_${serialNumber}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Failed to generate printable hangtag card', err);
    } finally {
      setDownloadingCard(false);
    }
  };

  // Print Hangtag
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.24em] text-champagne font-medium">
              LUXURY GARMENT AUTHENTICITY GENERATOR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
            <span className="text-[10px] text-brass font-mono">Camera QR Scanner Verified</span>
          </div>
          <h1 className="font-serif text-3xl text-obsidian">Brand QR Code & Hangtag Maker</h1>
          <p className="text-xs text-taupe font-light">
            Generate official cryptographic QR codes and high-definition luxury hangtag cards for
            Luna, Kemayu, and GZ collections.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian bg-white text-xs uppercase tracking-[0.18em] transition-colors shadow-xs"
            title="Print Hangtag via System Dialog"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadQrPng}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-obsidian/15 hover:border-obsidian bg-white text-xs uppercase tracking-[0.18em] transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download QR PNG</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadHangtagCard}
            disabled={downloadingCard}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian text-alabaster text-xs uppercase tracking-[0.18em] font-medium hover:bg-brass transition-colors shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
          >
            <Sparkles className={`w-3.5 h-3.5 text-champagne ${downloadingCard ? 'animate-spin' : ''}`} />
            <span>{downloadingCard ? 'Rendering...' : 'Download Hangtag Card'}</span>
          </button>
        </div>
      </div>

      {/* Brand Selection Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Luna */}
        <button
          type="button"
          onClick={() => setSelectedBrand('Luna')}
          className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
            selectedBrand === 'Luna'
              ? 'bg-[#141312] text-alabaster border-champagne shadow-lg scale-[1.01]'
              : 'bg-white text-obsidian border-obsidian/10 hover:border-champagne/40'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-[9.5px] uppercase tracking-[0.24em] font-medium ${
                selectedBrand === 'Luna' ? 'text-champagne' : 'text-taupe'
              }`}
            >
              BRAND HOUSE 01
            </span>
            <span
              className={`w-3.5 h-3.5 rounded-full border ${
                selectedBrand === 'Luna'
                  ? 'border-champagne bg-champagne'
                  : 'border-obsidian/20'
              }`}
            />
          </div>
          <h3 className="font-serif text-2xl font-medium">Luna</h3>
          <p
            className={`text-xs mt-1 font-light ${
              selectedBrand === 'Luna' ? 'text-alabaster/70' : 'text-taupe'
            }`}
          >
            Signature Modest Couture · Black Obsidian & Gold Foil Hangtag
          </p>
        </button>

        {/* Kemayu */}
        <button
          type="button"
          onClick={() => setSelectedBrand('Kemayu')}
          className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
            selectedBrand === 'Kemayu'
              ? 'bg-[#0b1712] text-alabaster border-emerald-500 shadow-lg scale-[1.01]'
              : 'bg-white text-obsidian border-obsidian/10 hover:border-emerald-500/40'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-[9.5px] uppercase tracking-[0.24em] font-medium ${
                selectedBrand === 'Kemayu' ? 'text-emerald-300' : 'text-taupe'
              }`}
            >
              BRAND HOUSE 02
            </span>
            <span
              className={`w-3.5 h-3.5 rounded-full border ${
                selectedBrand === 'Kemayu'
                  ? 'border-emerald-400 bg-emerald-400'
                  : 'border-obsidian/20'
              }`}
            />
          </div>
          <h3 className="font-serif text-2xl font-medium">Kemayu</h3>
          <p
            className={`text-xs mt-1 font-light ${
              selectedBrand === 'Kemayu' ? 'text-alabaster/70' : 'text-taupe'
            }`}
          >
            Nusantara Heritage · Deep Emerald & Rose Gold Hangtag
          </p>
        </button>

        {/* GZ */}
        <button
          type="button"
          onClick={() => setSelectedBrand('GZ')}
          className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
            selectedBrand === 'GZ'
              ? 'bg-[#12161f] text-alabaster border-blue-400 shadow-lg scale-[1.01]'
              : 'bg-white text-obsidian border-obsidian/10 hover:border-blue-400/40'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-[9.5px] uppercase tracking-[0.24em] font-medium ${
                selectedBrand === 'GZ' ? 'text-blue-200' : 'text-taupe'
              }`}
            >
              BRAND HOUSE 03
            </span>
            <span
              className={`w-3.5 h-3.5 rounded-full border ${
                selectedBrand === 'GZ'
                  ? 'border-blue-300 bg-blue-300'
                  : 'border-obsidian/20'
              }`}
            />
          </div>
          <h3 className="font-serif text-2xl font-medium">GZ</h3>
          <p
            className={`text-xs mt-1 font-light ${
              selectedBrand === 'GZ' ? 'text-alabaster/70' : 'text-taupe'
            }`}
          >
            Metropolitan Modest · Slate Anthracite & Platinum Silver Hangtag
          </p>
        </button>
      </div>

      {/* Main Studio Grid: Controls on Left, Live Hangtag on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Garment Specification Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-obsidian/[0.08] shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-obsidian/[0.08]">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-brass" />
                <h3 className="font-serif text-lg text-obsidian">Garment & Batch Parameters</h3>
              </div>
              <button
                type="button"
                onClick={() => setSerialNumber(generateNewSerial())}
                className="inline-flex items-center gap-1.5 text-xs text-brass hover:text-obsidian font-mono transition-colors"
                title="Regenerate cryptographic serial code"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Regenerate Serial</span>
              </button>
            </div>

            {/* Product Selector */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe mb-1.5 font-medium">
                Select Garment from {selectedBrand} Catalog ({products.filter((p) => p.brand === selectedBrand).length} items)
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === 'custom') {
                    setSelectedProductId('custom');
                  } else {
                    setSelectedProductId(parseInt(val, 10));
                  }
                }}
                className="w-full px-3.5 py-3 rounded-xl bg-alabaster border border-obsidian/15 text-xs text-obsidian focus:outline-none focus:border-obsidian"
              >
                <optgroup label={`${selectedBrand} Collection`}>
                  {products
                    .filter((p) => p.brand === selectedBrand)
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.sku} — {p.name} ({p.formattedPrice})
                      </option>
                    ))}
                </optgroup>
                <optgroup label="Other Brand Archives">
                  {products
                    .filter((p) => p.brand !== selectedBrand)
                    .map((p) => (
                      <option key={p.id} value={p.id}>
                        [{p.brand}] {p.sku} — {p.name}
                      </option>
                    ))}
                </optgroup>
                <option value="custom">✍️ Custom Garment (Enter custom SKU & Name below)</option>
              </select>
            </div>

            {/* Custom fields if selected */}
            {selectedProductId === 'custom' && (
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-alabaster border border-obsidian/10 text-xs">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-taupe mb-1">
                    Garment Name
                  </label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-obsidian/15"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-taupe mb-1">
                    SKU Code
                  </label>
                  <input
                    type="text"
                    value={customSku}
                    onChange={(e) => setCustomSku(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-obsidian/15 font-mono"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-taupe mb-1">
                    Fabric & Weave
                  </label>
                  <input
                    type="text"
                    value={customFabric}
                    onChange={(e) => setCustomFabric(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-obsidian/15"
                  />
                </div>
              </div>
            )}

            {/* Serial Number & Verification Link */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe font-medium">
                    Cryptographic Garment Serial Number
                  </label>
                  <button
                    type="button"
                    onClick={handleCopySerial}
                    className="text-[10px] text-brass hover:text-obsidian flex items-center gap-1 font-mono"
                  >
                    {copiedSerial ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value.toUpperCase())}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-alabaster border border-obsidian/15 font-mono text-xs font-semibold tracking-wider text-obsidian focus:outline-none focus:border-obsidian"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-taupe font-medium">
                    Encoded Verification URL
                  </label>
                  <button
                    type="button"
                    onClick={handleCopyUrl}
                    className="text-[10px] text-brass hover:text-obsidian flex items-center gap-1 font-mono"
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-alabaster/80 border border-obsidian/10 font-mono text-[11px] text-taupe break-all select-all">
                  {verificationUrl}
                </div>
              </div>
            </div>

            {/* QC & Atelier Origin Assurance */}
            <div className="p-4 rounded-2xl bg-alabaster/60 border border-obsidian/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-obsidian">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Atelier Quality Control & Guarantee Standard</span>
              </div>
              <p className="text-[11px] text-taupe leading-relaxed font-light">
                This QR code links directly to Maison Luna's official Kudus production ledger.
                When scanned by customers using any smartphone camera or the front-page atelier camera
                scanner, it renders the authentic Certificate of Authenticity popup with Grade A+
                inspection validation.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Luxury Hangtag Card Preview (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-taupe font-medium">
              PRINTABLE LUXURY HANGTAG PREVIEW
            </span>
            <span className="text-[10px] font-mono text-brass">Scale 1:1 Tag</span>
          </div>

          {/* Luxury Hangtag Mockup Card */}
          <div
            ref={hangtagCardRef}
            id="printable-hangtag-card"
            className={`w-full max-w-[340px] rounded-3xl p-6 bg-gradient-to-b ${theme.bgGradient} text-alabaster border-2 ${theme.borderColor} shadow-2xl relative select-none`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(0,0,0,0.5)',
            }}
          >
            {/* Lanyard Punched Hole */}
            <div className="flex justify-center -mt-2 mb-4">
              <div
                className={`w-7 h-7 rounded-full border-2 ${theme.ribbonHole} shadow-inner flex items-center justify-center`}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-black/80"></div>
              </div>
            </div>

            {/* Brand Header */}
            <div className="text-center space-y-1 mb-4">
              <div className="flex justify-center mb-1">
                <img
                  src={BRAND_ASSETS.logoCompact}
                  alt={selectedBrand}
                  className="h-8 w-auto filter drop-shadow-md brightness-110"
                />
              </div>
              <h4 className="font-serif text-2xl tracking-[0.24em] uppercase text-alabaster font-normal">
                {selectedBrand}
              </h4>
              <p className={`text-[8.5px] uppercase tracking-[0.26em] ${theme.accentColor} font-medium`}>
                {theme.subline}
              </p>
            </div>

            {/* Certificate Inscription */}
            <div className="border-t border-b border-white/15 py-2 my-3 text-center">
              <span className="text-[8px] uppercase tracking-[0.28em] text-alabaster/70 block">
                OFFICIAL CERTIFICATE OF AUTHENTICITY
              </span>
            </div>

            {/* Garment Details */}
            <div className="text-center space-y-1 my-3">
              <h5 className="font-serif text-lg text-alabaster font-medium leading-tight">
                {activeProduct?.name || customName}
              </h5>
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 font-mono text-[10px] text-alabaster">
                SKU: {activeProduct?.sku || customSku}
              </div>
              <p className="text-[10px] text-alabaster/70 font-light italic truncate px-2">
                {activeProduct?.fabric || customFabric}
              </p>
            </div>

            {/* High-Contrast QR Code Display */}
            <div className="my-5 flex flex-col items-center">
              <div className="p-3 bg-white rounded-2xl shadow-xl border border-white/20">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt={`Authenticity QR for ${serialNumber}`}
                    className="w-44 h-44 object-contain"
                  />
                ) : (
                  <div className="w-44 h-44 flex items-center justify-center text-obsidian">
                    <QrCode className="w-10 h-10 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Serial number chip */}
              <div className="mt-3 px-3 py-1 rounded-lg bg-black/40 border border-white/15 font-mono text-[10.5px] text-alabaster tracking-wider text-center">
                {serialNumber}
              </div>
            </div>

            {/* Quality Seal & Inspection Mark */}
            <div className="pt-3 border-t border-white/15 text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8.5px] uppercase tracking-[0.18em] text-champagne font-medium">
                <CheckCircle2 className="w-3 h-3 text-champagne" />
                <span>GRADE A+ COUTURE RESERVE</span>
              </div>
              <p className="text-[8px] uppercase tracking-[0.2em] text-alabaster/60 font-light block">
                KUDUS ATELIER · CENTRAL JAVA · INDONESIA
              </p>
            </div>

            {/* Security Inscription matching printable canvas */}
            <div className="mt-2.5 px-3 text-center">
              <p className="text-[7.5px] leading-tight text-alabaster/60 font-light max-w-[260px] mx-auto">
                Scan QR code with smartphone camera or atelier scanner to verify authentic provenance & register warranty.
              </p>
            </div>

            {/* Simulated Barcode */}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col items-center">
              <div className="h-6 w-48 flex justify-between items-end opacity-60">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white"
                    style={{
                      width: i % 3 === 0 ? '3px' : '1.5px',
                      height: '100%',
                    }}
                  />
                ))}
              </div>
              <span className="text-[8px] font-mono tracking-widest text-alabaster/50 mt-1">
                {serialNumber}
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="w-full max-w-[340px] grid grid-cols-2 gap-3 mt-5">
            <button
              type="button"
              onClick={handleDownloadQrPng}
              className="py-2.5 px-3 rounded-xl bg-white border border-obsidian/15 hover:border-obsidian text-obsidian text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center shadow-xs"
            >
              QR Code Only
            </button>
            <button
              type="button"
              onClick={handleDownloadHangtagCard}
              disabled={downloadingCard}
              className="py-2.5 px-3 rounded-xl bg-obsidian text-alabaster hover:bg-brass text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {downloadingCard ? 'Rendering...' : 'Full Hangtag'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
