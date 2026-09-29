import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BRAND_ASSETS } from '../data/products';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.8,
      ease: 'power3.inOut',
      onUpdate: () => {
        setProgress(Math.round(counter.val));
      },
    })
      .to(
        contentRef.current,
        {
          opacity: 0,
          y: -24,
          duration: 0.45,
          ease: 'power3.in',
        },
        '-=0.15'
      )
      .to(
        topPanelRef.current,
        {
          yPercent: -100,
          duration: 0.95,
          ease: 'expo.inOut',
        },
        '-=0.1'
      )
      .to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 0.95,
          ease: 'expo.inOut',
        },
        '<'
      )
      .set(containerRef.current, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[120] flex flex-col justify-between pointer-events-auto overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Curtain */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-obsidian border-b border-champagne/20 will-change-transform"
      />
      {/* Bottom Curtain */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-obsidian will-change-transform"
      />

      {/* Foreground Editorial Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-between h-full px-6 py-8 md:px-14 md:py-12 text-alabaster"
      >
        <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.25em] uppercase text-alabaster/60">
          <span>MAISON LUNA INDONESIA</span>
          <span>ARCHIVE EDITION — 2026</span>
          <span className="hidden md:inline">{BRAND_ASSETS.coordinates}</span>
        </div>

        <div className="my-auto flex flex-col items-center text-center">
          <img
            src={BRAND_ASSETS.logoCompact}
            alt="Luna Indonesia"
            className="w-12 md:w-14 h-auto mb-6 brightness-0 invert opacity-90"
          />
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-champagne mb-3">
            LUNA • KEMAYU • GZ
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl tracking-[0.16em] uppercase font-light text-alabaster">
            LUNA INDONESIA
          </h1>
          <p className="mt-3 font-serif italic text-lg md:text-2xl text-alabaster/70">
            Haute Modest Couture &amp; Timeless Silhouette
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-alabaster/15 pt-6">
          <div className="space-y-1">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-alabaster/50">
              CURATING ATELIER ARCHIVE
            </p>
            <div className="w-40 sm:w-64 h-[2px] bg-alabaster/10 overflow-hidden">
              <div
                className="h-full bg-champagne transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter text-champagne leading-none">
            {String(progress).padStart(2, '0')}
            <span className="text-xl md:text-2xl text-alabaster/40 ml-1">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
