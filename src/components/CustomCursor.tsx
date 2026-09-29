import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.38, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.38, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTrigger = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTrigger) {
        const label = cursorTrigger.getAttribute('data-cursor') || '';
        setCursorLabel(label);
        setIsHovered(true);
        return;
      }

      const clickable = target.closest('a, button, input, select, textarea, [role="button"]');
      if (clickable) {
        setCursorLabel('');
        setIsHovered(true);
      } else {
        setCursorLabel('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[110] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-champagne mix-blend-difference will-change-transform"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[109] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ease-expo will-change-transform ${
          cursorLabel
            ? 'w-24 h-24 bg-obsidian/90 text-alabaster border border-champagne/60 backdrop-blur-md shadow-2xl'
            : isHovered
            ? 'w-12 h-12 border border-champagne bg-champagne/10'
            : 'w-8 h-8 border border-obsidian/30'
        }`}
      >
        {cursorLabel && (
          <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-center px-2 leading-tight text-champagne">
            {cursorLabel}
          </span>
        )}
      </div>
    </>
  );
};
