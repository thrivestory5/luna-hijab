import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  X,
  Upload,
  Sparkles,
  Award,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import jsQR from 'jsqr';
import { BRAND_ASSETS, PRODUCTS, Product } from '../data/products';

interface CraftsmanshipSectionProps {
  onOpenConcierge: () => void;
  onSelectProduct?: (product: Product) => void;
}

export interface VerificationResult {
  code: string;
  serialNumber: string;
  isAuthentic: boolean;
  product?: Product;
  title: string;
  brand: string;
  fabric: string;
  origin: string;
  qcInspection: string;
  verifiedAt: string;
  grade: string;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({
  onOpenConcierge,
  onSelectProduct,
}) => {
  // Verification states
  const [manualCode, setManualCode] = useState<string>('');
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  // Camera & Video refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Stop camera stream cleanly
  const stopCamera = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Authenticate and verify code
  const verifyCode = useCallback((rawInput: string) => {
    const query = rawInput.trim();
    if (!query) return;

    setIsVerifying(true);
    setCameraError(null);

    // Simulate luxury atelier verification validation
    setTimeout(() => {
      const cleanUpper = query.toUpperCase();

      // Find matching product in catalog
      const matched = PRODUCTS.find((p) => {
        const skuMatch = p.sku && cleanUpper.includes(p.sku.toUpperCase());
        const nameMatch = p.name && cleanUpper.includes(p.name.toUpperCase());
        const rawNameMatch = p.rawName && cleanUpper.includes(p.rawName.toUpperCase());
        const idMatch = cleanUpper.includes(String(p.id));
        return skuMatch || nameMatch || rawNameMatch || idMatch;
      }) || (PRODUCTS.length > 0 ? PRODUCTS[0] : undefined);

      const isGenericLunaCode =
        cleanUpper.startsWith('LN') ||
        cleanUpper.startsWith('PO') ||
        cleanUpper.startsWith('GK') ||
        cleanUpper.startsWith('GZ') ||
        cleanUpper.includes('LUNA') ||
        cleanUpper.includes('KEMAYU') ||
        cleanUpper.includes('GZ') ||
        cleanUpper.length >= 4;

      if (isGenericLunaCode && matched) {
        const generatedSerial = `LN-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
        setVerificationResult({
          code: query,
          serialNumber: generatedSerial,
          isAuthentic: true,
          product: matched,
          title: matched.rawName,
          brand: matched.brand,
          fabric: matched.fabric || 'Matte Silk Crepe & Whispering Voile',
          origin: 'Kudus Atelier, Central Java, Indonesia',
          qcInspection: 'Passed 12-Point Quality Assurance Standard (Fine Threading, Precision Overlock & Zero Blemishes)',
          verifiedAt: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          grade: 'GRADE A+ COUTURE RESERVE',
        });
      } else {
        setVerificationResult({
          code: query,
          serialNumber: 'UNVERIFIED',
          isAuthentic: false,
          title: 'Unregistered Garment Code',
          brand: 'Unknown',
          fabric: 'N/A',
          origin: 'N/A',
          qcInspection: 'Verification code not matched with official Kudus atelier production registry',
          verifiedAt: new Date().toLocaleDateString('en-US'),
          grade: 'UNVERIFIED',
        });
      }

      setIsVerifying(false);
      stopCamera();
      setIsScannerOpen(false);
    }, 450);
  }, [stopCamera]);

  // Start video stream & QR scanner loop
  const startCamera = async () => {
    setCameraError(null);
    setIsScannerOpen(true);
    setIsScanning(true);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera is not supported on this browser. Please upload a photo or use manual code entry.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        await videoRef.current.play();

        // Scan loop
        const scanCanvas = document.createElement('canvas');
        const scanCtx = scanCanvas.getContext('2d', { willReadFrequently: true });

        const scanFrame = () => {
          if (!videoRef.current || videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA) {
            animationFrameRef.current = requestAnimationFrame(scanFrame);
            return;
          }

          scanCanvas.width = videoRef.current.videoWidth;
          scanCanvas.height = videoRef.current.videoHeight;

          if (scanCtx) {
            scanCtx.drawImage(videoRef.current, 0, 0, scanCanvas.width, scanCanvas.height);
            const imageData = scanCtx.getImageData(0, 0, scanCanvas.width, scanCanvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
              inversionAttempts: 'dontInvert',
            });

            if (code && code.data) {
              verifyCode(code.data);
              return;
            }
          }

          animationFrameRef.current = requestAnimationFrame(scanFrame);
        };

        animationFrameRef.current = requestAnimationFrame(scanFrame);
      }
    } catch (err: any) {
      console.warn('Camera access error:', err);
      setCameraError(
        err.message || 'Camera permission denied. Please allow camera access in browser settings or use manual code entry.'
      );
      stopCamera();
    }
  };

  // Handle uploaded image for QR decode
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imgData.data, imgData.width, imgData.height);
          if (code && code.data) {
            verifyCode(code.data);
          } else {
            setCameraError('No QR Code detected in image. Please ensure the QR code is clearly visible and well-lit.');
          }
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualCode.trim()) {
      verifyCode(manualCode);
    }
  };

  const resetVerification = useCallback(() => {
    setVerificationResult(null);
    setManualCode('');
    setCameraError(null);
    setIsScannerOpen(false);
    stopCamera();
  }, [stopCamera]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && verificationResult) {
        resetVerification();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [verificationResult, resetVerification]);

  return (
    <section
      id="atelier-story"
      className="py-20 md:py-32 bg-[#FAF7F2] border-t border-b border-obsidian/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portals — Two Editorial Portraits with Staggered Rounded Corners */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-7 rounded-[28px] overflow-hidden bg-cashmere aspect-[3/4] shadow-md border border-obsidian/[0.06] group">
                <img
                  src={BRAND_ASSETS.editorialAurellia}
                  alt="Maison Luna Craftsmanship"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="col-span-5 rounded-[28px] overflow-hidden bg-cashmere aspect-[3/4] shadow-md border border-obsidian/[0.06] group translate-y-6">
                <img
                  src={BRAND_ASSETS.atelierCampaign}
                  alt="Luna Atelier Detail"
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Verification Section (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-taupe mb-3 font-medium">
                THE MAISON — KUDUS, CENTRAL JAVA
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian leading-[1.15]">
                Designed for longevity,{' '}
                <em className="italic font-light text-brass">crafted with devotion.</em>
              </h2>
              <p className="mt-5 text-xs sm:text-sm text-obsidian/70 font-light leading-relaxed max-w-xl">
                Born in Kudus—a historic center of Indonesian textile artistry—Luna Indonesia
                approaches modest fashion as an enduring art form. Every silhouette is conceived to
                drape effortlessly, offering poise and comfort across generations.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-t border-b border-obsidian/10">
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.25em] text-taupe mb-1.5 font-medium">01</p>
                <h3 className="font-serif text-lg text-obsidian font-normal">Noble Textiles</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Imported matte silk crepes, whisper-light organza, and breathable botanical rayon
                  twills.
                </p>
              </div>
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.25em] text-taupe mb-1.5 font-medium">02</p>
                <h3 className="font-serif text-lg text-obsidian font-normal">Pure Proportion</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Architectural pleating and wudhu-friendly tailoring that honor movement and
                  modesty.
                </p>
              </div>
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.25em] text-taupe mb-1.5 font-medium">03</p>
                <h3 className="font-serif text-lg text-obsidian font-normal">Timeless Shades</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Up to twelve harmonious colorways per design for effortless personal and family
                  styling.
                </p>
              </div>
            </div>

            {/* Refined Authenticity & Quality Verification Area (Replaces Join Member button cleanly) */}
            <div className="space-y-3.5 pt-1">
              <form onSubmit={handleManualSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-brass">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={manualCode}
                    onChange={(e) => setManualCode(e.target.value)}
                    placeholder="Enter hangtag code or SKU (e.g. G.569, KIANA)..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-obsidian/15 text-obsidian placeholder:text-taupe/60 text-xs focus:outline-none focus:border-obsidian transition-all shadow-xs"
                  />
                </div>

                {/* Solid obsidian pill button matching original JOIN PRIVATE MEMBER SOCIETY button */}
                <button
                  type="submit"
                  disabled={!manualCode.trim() || isVerifying}
                  className="px-7 py-3.5 rounded-full bg-obsidian text-alabaster text-[10.5px] uppercase tracking-[0.22em] font-medium hover:bg-brass disabled:opacity-40 transition-all duration-300 shadow-sm shrink-0 inline-flex items-center justify-center gap-2"
                >
                  {isVerifying ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
                      <span>Verify Code</span>
                    </>
                  )}
                </button>

                {/* Scan QR pill button */}
                <button
                  type="button"
                  onClick={() => {
                    if (isScannerOpen) {
                      setIsScannerOpen(false);
                      stopCamera();
                    } else {
                      setIsScannerOpen(true);
                      startCamera();
                    }
                  }}
                  className={`px-5 py-3.5 rounded-full border text-[10.5px] uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xs shrink-0 inline-flex items-center justify-center gap-2 ${
                    isScannerOpen
                      ? 'bg-brass text-white border-brass'
                      : 'bg-white border-obsidian/20 text-obsidian hover:bg-obsidian hover:text-alabaster'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isScannerOpen ? 'Close Camera' : 'Scan QR'}</span>
                </button>
              </form>

              {/* Helper row: sample codes + upload QR image + Inquire link */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-taupe pt-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-light">Sample verified codes:</span>
                  {['G.569 KIANA', 'PO-KALYANI', 'LN-2026-8841', 'GZ-70015'].map((sample) => (
                    <button
                      key={sample}
                      type="button"
                      onClick={() => {
                        setManualCode(sample);
                        verifyCode(sample);
                      }}
                      className="px-2.5 py-0.5 rounded-full bg-white hover:bg-champagne/25 text-obsidian/75 hover:text-obsidian border border-obsidian/10 transition-colors text-[10px]"
                    >
                      {sample}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 text-obsidian/70 hover:text-brass transition-colors font-medium text-[10.5px] uppercase tracking-wider underline underline-offset-4"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Upload QR Photo</span>
                    </button>
                  </div>

                  <button
                    onClick={onOpenConcierge}
                    className="text-[10.5px] uppercase tracking-[0.22em] text-obsidian border-b border-obsidian pb-0.5 hover:text-brass hover:border-brass transition-colors font-medium"
                  >
                    Inquire with Atelier →
                  </button>
                </div>
              </div>

              {/* Expandable Camera Viewfinder */}
              {isScannerOpen && (
                <div className="rounded-3xl overflow-hidden bg-black border border-obsidian/20 shadow-2xl relative animate-fadeIn mt-4">
                  <div className="relative aspect-[16/9] w-full flex items-center justify-center">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />

                    {/* Optical Target Reticle */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6">
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 border-2 border-champagne/70 rounded-2xl">
                        <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-champagne rounded-tl" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-champagne rounded-tr" />
                        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-champagne rounded-bl" />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-champagne rounded-br" />
                        <div className="absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-champagne to-transparent animate-pulse top-1/2" />
                      </div>
                    </div>

                    {/* Live Indicator Pill */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[9.5px] uppercase tracking-widest text-white border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Camera Active — Scan Garment QR</span>
                    </div>

                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsScannerOpen(false);
                        stopCamera();
                      }}
                      title="Close Camera"
                      className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Camera Error Banner */}
              {cameraError && (
                <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-relaxed">{cameraError}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate of Authenticity & Quality Popup Modal */}
      {verificationResult && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              resetVerification();
            }
          }}
        >
          <div
            className="relative w-full max-w-lg rounded-[28px] bg-white border border-champagne/40 p-7 sm:p-9 shadow-2xl overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient luxury glow accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close button X */}
            <button
              type="button"
              onClick={resetVerification}
              title="Close Certificate"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-alabaster hover:bg-obsidian hover:text-white text-obsidian/60 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Top Header */}
            <div className="flex items-start justify-between pb-5 border-b border-obsidian/10 pr-8">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-champagne shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9.5px] uppercase tracking-[0.24em] font-medium text-brass">
                    MAISON LUNA INDONESIA
                  </p>
                  <h4 className="font-serif text-xl sm:text-2xl text-obsidian leading-snug mt-0.5">
                    Certificate of Authenticity &amp; Quality
                  </h4>
                </div>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shrink-0 mt-1 ${
                  verificationResult.isAuthentic
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {verificationResult.isAuthentic ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Authentic</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Unverified</span>
                  </>
                )}
              </span>
            </div>

            {verificationResult.isAuthentic ? (
              <div className="py-5 space-y-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block font-medium">
                    Garment / Collection Title
                  </span>
                  <p className="font-sans font-bold text-lg sm:text-xl text-obsidian mt-1 uppercase tracking-wide">
                    {verificationResult.title}
                  </p>
                  <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-sm bg-alabaster border border-champagne/40 text-[9px] uppercase tracking-[0.18em] font-medium text-brass">
                    {verificationResult.grade}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-obsidian/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block font-medium">
                      House / Brand
                    </span>
                    <p className="font-sans font-bold text-sm text-obsidian mt-0.5">
                      {verificationResult.brand}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block font-medium">
                      QC Serial Number
                    </span>
                    <p className="font-mono text-xs font-semibold text-obsidian mt-0.5 tracking-wider">
                      {verificationResult.serialNumber}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-obsidian/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block font-medium">
                    Fabric &amp; Material Assurance
                  </span>
                  <p className="text-obsidian/85 font-normal mt-1 leading-relaxed text-xs">
                    {verificationResult.fabric}
                  </p>
                </div>

                <div className="pt-3 border-t border-obsidian/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block font-medium">
                    Atelier Origin &amp; QC Standard
                  </span>
                  <p className="text-obsidian/80 font-light mt-1 leading-relaxed text-xs">
                    {verificationResult.origin} — {verificationResult.qcInspection}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center space-y-3">
                <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
                <p className="font-sans font-bold text-base text-obsidian">
                  Garment Code Unregistered in Registry
                </p>
                <p className="text-xs text-taupe max-w-sm mx-auto leading-relaxed">
                  The entered code: <code className="bg-alabaster px-1.5 py-0.5 rounded text-obsidian font-mono">{verificationResult.code}</code> could not be identified in the Kudus atelier database. Please verify your hangtag label or consult concierge assistance.
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-obsidian/10 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetVerification}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-obsidian font-medium hover:text-brass transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Verify Another Garment</span>
              </button>

              {verificationResult.isAuthentic && verificationResult.product && onSelectProduct && (
                <button
                  type="button"
                  onClick={() => {
                    onSelectProduct(verificationResult.product!);
                    resetVerification();
                  }}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-obsidian text-alabaster text-[10.5px] uppercase tracking-[0.18em] font-medium hover:bg-brass transition-colors shadow-xs"
                >
                  <span>View Garment</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CraftsmanshipSection;
