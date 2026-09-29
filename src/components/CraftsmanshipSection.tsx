import React from 'react';
import { BRAND_ASSETS } from '../data/products';

interface CraftsmanshipSectionProps {
  onOpenConcierge: () => void;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({ onOpenConcierge }) => {
  return (
    <section
      id="atelier-story"
      className="py-24 md:py-36 bg-travertine/50 border-t border-b border-obsidian/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Portraits with Rounded Corners (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-7 rounded-2xl overflow-hidden bg-cashmere aspect-[3/4] shadow-sm border border-obsidian/[0.06]">
              <img
                src={BRAND_ASSETS.editorialAurellia}
                alt="Maison Luna Craftsmanship"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="col-span-5 rounded-2xl overflow-hidden bg-cashmere aspect-[3/4] shadow-sm border border-obsidian/[0.06]">
              <img
                src={BRAND_ASSETS.atelierCampaign}
                alt="Luna Atelier Detail"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Quiet Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
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

            <div className="pt-4 flex flex-wrap items-center gap-8">
              <a
                href={BRAND_ASSETS.whatsappConcierge}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-xl bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors"
              >
                Join Private Member Society
              </a>
              <button
                onClick={onOpenConcierge}
                className="text-[11px] uppercase tracking-[0.24em] text-obsidian border-b border-obsidian pb-1 hover:text-brass hover:border-brass transition-colors"
              >
                Inquire with Atelier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
