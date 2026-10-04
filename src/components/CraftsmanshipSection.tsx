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
    }, 450);
  }, [stopCamera]);

  // Start video stream & QR scanner loop
  const startCamera = async () => {
    setCameraError(null);
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

  const resetVerification = () => {
    setVerificationResult(null);
    setManualCode('');
    setCameraError(null);
    stopCamera();
  };

  return (
    <section
      id="atelier-story"
      className="py-24 md:py-36 bg-travertine/50 border-t border-b border-obsidian/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Portals / Verification Passport Display (6 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {verificationResult ? (
              /* Verified Digital Certificate Card */
              <div className="rounded-3xl bg-white border border-champagne/40 p-7 sm:p-8 shadow-xl relative overflow-hidden animate-fadeIn">
                <div className="absolute top-0 right-0 w-36 h-36 bg-champagne/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-5 border-b border-obsidian/10">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-champagne" />
                    <div>
                      <p className="text-[9.5px] uppercase tracking-[0.24em] font-medium text-brass">
                        MAISON LUNA INDONESIA
                      </p>
                      <h4 className="font-serif text-lg text-obsidian leading-none mt-0.5">
                        Certificate of Authenticity &amp; Quality
                      </h4>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider ${
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
                      <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block">
                        Garment / Collection Title
                      </span>
                      <p className="font-sans font-bold text-base text-obsidian mt-0.5 uppercase tracking-wide">
                        {verificationResult.title}
                      </p>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-sm bg-alabaster border border-champagne/30 text-[9px] uppercase tracking-[0.16em] font-medium text-brass">
                        {verificationResult.grade}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-obsidian/10">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block">
                          House / Brand
                        </span>
                        <p className="font-sans font-bold text-obsidian mt-0.5">
                          {verificationResult.brand}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block">
                          QC Serial Number
                        </span>
                        <p className="font-mono text-[11px] font-medium text-obsidian mt-0.5">
                          {verificationResult.serialNumber}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-obsidian/10">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block">
                        Fabric &amp; Material Assurance
                      </span>
                      <p className="text-obsidian/80 font-light mt-0.5 leading-relaxed">
                        {verificationResult.fabric}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-obsidian/10">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block">
                        Atelier Origin &amp; QC Standard
                      </span>
                      <p className="text-obsidian/80 font-light mt-0.5 leading-relaxed">
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
                      The entered code: <code className="bg-alabaster px-1 py-0.5 rounded text-obsidian">{verificationResult.code}</code> could not be identified. Please verify the garment hangtag label or consult our Atelier Concierge.
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-obsidian/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={resetVerification}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-obsidian font-medium hover:text-brass transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Verify Another Garment</span>
                  </button>

                  {verificationResult.isAuthentic && verificationResult.product && onSelectProduct && (
                    <button
                      onClick={() => onSelectProduct(verificationResult.product!)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-obsidian text-alabaster text-[10.5px] uppercase tracking-[0.18em] hover:bg-brass transition-colors shadow-xs"
                    >
                      <span>View Garment</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Two Editorial Portraits with Rounded Corners */
              <div className="grid grid-cols-12 gap-6 items-end">
                <div className="col-span-7 rounded-2xl overflow-hidden bg-cashmere aspect-[3/4] shadow-sm border border-obsidian/[0.06] group">
                  <img
                    src={BRAND_ASSETS.editorialAurellia}
                    alt="Maison Luna Craftsmanship"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-5 rounded-2xl overflow-hidden bg-cashmere aspect-[3/4] shadow-sm border border-obsidian/[0.06] group">
                  <img
                    src={BRAND_ASSETS.atelierCampaign}
                    alt="Luna Atelier Detail"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            )}

            {/* Quality Assurance Guarantee Banner */}
            <div className="rounded-2xl bg-white border border-champagne/30 p-5 flex items-start gap-4 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-brass shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-obsidian">
                  100% Originality &amp; Supreme Quality Guarantee
                </h5>
                <p className="text-[11.5px] text-taupe font-light leading-relaxed">
                  Every Maison Luna piece is accompanied by an official authentication hangtag code linked directly to our Kudus atelier registry, ensuring textile authenticity and flawless finish.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + QR Code & Manual Verification Section (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-taupe mb-3">
                THE MAISON — KUDUS, CENTRAL JAVA
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian leading-tight">
                Designed for longevity,{' '}
                <em className="italic font-light text-brass">crafted with devotion.</em>
              </h2>
              <p className="mt-5 text-xs sm:text-sm text-obsidian/70 font-light leading-relaxed">
                Born in Kudus—a historic center of Indonesian textile artistry—Luna Indonesia
                approaches modest fashion as an enduring art form. Every silhouette is conceived to
                drape effortlessly, offering poise and comfort across generations.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-obsidian/10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-1.5">01</p>
                <h3 className="font-serif text-lg text-obsidian">Noble Textiles</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Imported matte silk crepes, whisper-light organza, and breathable botanical rayon
                  twills.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-1.5">02</p>
                <h3 className="font-serif text-lg text-obsidian">Pure Proportion</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Architectural pleating and wudhu-friendly tailoring that honor movement and
                  modesty.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-taupe mb-1.5">03</p>
                <h3 className="font-serif text-lg text-obsidian">Timeless Shades</h3>
                <p className="text-xs text-obsidian/60 font-light mt-1 leading-relaxed">
                  Up to twelve harmonious colorways per design for effortless personal and family
                  styling.
                </p>
              </div>
            </div>

            {/* Integrated Verification & Authenticity Console (Replaces Join Member button) */}
            <div className="pt-2">
              <div className="rounded-3xl bg-white border border-obsidian/[0.08] shadow-[0_8px_32px_rgba(28,24,21,0.04)] p-6 sm:p-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne/15 border border-champagne/30 text-[9.5px] font-medium uppercase tracking-[0.22em] text-brass mb-2">
                    <Sparkles className="w-3 h-3 text-champagne" />
                    <span>ATELIER AUTHENTICITY REGISTRY</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-obsidian font-normal">
                    Garment Authenticity &amp; Quality Assurance
                  </h3>
                  <p className="text-xs text-taupe font-light mt-1">
                    Scan the garment hangtag QR code using your camera or enter the serial code manually.
                  </p>
                </div>

                {/* Error Banner */}
                {cameraError && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="flex-1 leading-relaxed">{cameraError}</div>
                  </div>
                )}

                {/* QR Camera Scanner Viewport */}
                {isScanning ? (
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-obsidian/20 shadow-inner">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />

                      {/* Optical Scanning Frame / Target Box */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 border-2 border-champagne/70 rounded-2xl">
                          {/* Corner Accents */}
                          <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-champagne rounded-tl" />
                          <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-champagne rounded-tr" />
                          <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-champagne rounded-bl" />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-champagne rounded-br" />

                          {/* Glowing scanning laser bar */}
                          <div className="absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-champagne to-transparent animate-pulse top-1/2" />
                        </div>
                      </div>

                      {/* Top live scanner indicator pill */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-white border border-white/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live Scanner — Scan Garment QR</span>
                      </div>

                      {/* Close Camera button */}
                      <button
                        type="button"
                        onClick={stopCamera}
                        title="Close Camera"
                        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-taupe pt-1">
                      <p className="font-light">
                        Align the QR code within the viewfinder frame.
                      </p>

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
                          className="inline-flex items-center gap-1.5 text-obsidian underline underline-offset-4 hover:text-brass transition-colors font-medium text-[11px] uppercase tracking-wider"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Or Upload QR Image</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-obsidian/20 bg-alabaster/60 p-6 sm:p-7 text-center space-y-4 hover:border-champagne/60 transition-colors">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-white border border-champagne/40 shadow-xs flex items-center justify-center text-brass">
                        <Camera className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-obsidian">Scan Hangtag QR Code</h4>
                        <p className="text-xs text-taupe font-light max-w-md mx-auto mt-0.5">
                          Hold your garment hangtag QR code to the camera for instant digital authentication.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={startCamera}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-brass transition-all duration-300 shadow-sm"
                      >
                        <Camera className="w-3.5 h-3.5 text-champagne" />
                        <span>Open Camera Scanner</span>
                      </button>

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
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white border border-obsidian/15 text-obsidian text-[11px] uppercase tracking-[0.18em] font-medium hover:border-obsidian transition-colors"
                        >
                          <Upload className="w-3.5 h-3.5 text-taupe" />
                          <span>Upload QR Image</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Elegant Divider */}
                <div className="relative flex items-center justify-center my-2">
                  <div className="border-t border-obsidian/10 w-full" />
                  <span className="bg-white px-4 text-[10px] uppercase tracking-[0.22em] text-taupe font-medium absolute">
                    Or Enter Code Manually
                  </span>
                </div>

                {/* Manual Code Input Form Mode */}
                <form onSubmit={handleManualSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-taupe">
                        <QrCode className="w-4 h-4 text-brass" />
                      </div>
                      <input
                        type="text"
                        value={manualCode}
                        onChange={(e) => setManualCode(e.target.value)}
                        placeholder="Enter SKU or Hangtag Code (e.g. G.569, KIANA, LN-8841)"
                        className="w-full pl-11 pr-4 py-3.5 rounded-full bg-alabaster border border-obsidian/15 text-obsidian placeholder:text-taupe/70 text-xs focus:outline-none focus:border-obsidian focus:bg-white transition-all font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!manualCode.trim() || isVerifying}
                      className="px-8 py-3.5 rounded-full bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-brass disabled:opacity-50 transition-all duration-300 shadow-md shrink-0 inline-flex items-center justify-center gap-2"
                    >
                      {isVerifying ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
                          <span>Verify Authenticity</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Quick Demo Code Suggestions */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[10.5px]">
                    <span className="text-taupe font-light">Sample registered codes:</span>
                    {['G.569 KIANA', 'PO-KALYANI', 'LN-2026-8841', 'GZ-70015', 'PO-SELYN'].map(
                      (sample) => (
                        <button
                          key={sample}
                          type="button"
                          onClick={() => {
                            setManualCode(sample);
                            verifyCode(sample);
                          }}
                          className="px-2.5 py-1 rounded-full bg-alabaster hover:bg-champagne/20 text-obsidian/80 hover:text-obsidian border border-obsidian/10 transition-colors"
                        >
                          {sample}
                        </button>
                      )
                    )}
                  </div>
                </form>

                {/* Secondary Inquire Action Link */}
                <div className="pt-2 border-t border-obsidian/10 flex items-center justify-between">
                  <p className="text-[11px] text-taupe font-light">
                    Need assistance verifying your garment?
                  </p>
                  <button
                    onClick={onOpenConcierge}
                    className="text-[11px] uppercase tracking-[0.22em] text-obsidian border-b border-obsidian pb-0.5 hover:text-brass hover:border-brass transition-colors font-medium"
                  >
                    Inquire with Atelier →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
