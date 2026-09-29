import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappUrl = `${BRAND_ASSETS.whatsappConcierge}?text=${encodeURIComponent(
    `Halo Luna Indonesia,\n\nNama: ${name || 'Client'}\nEmail: ${email || '-'}\nPesan: ${message}`
  )}`;

  return (
    <div
      className="fixed inset-0 z-[115] bg-obsidian/45 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="relative w-full max-w-lg bg-alabaster text-obsidian border border-obsidian/10 shadow-2xl p-8 sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close contact window"
          className="absolute top-6 right-6 text-obsidian/60 hover:text-obsidian transition-colors"
        >
          <X className="w-4 h-4 stroke-[1.25]" />
        </button>

        <p className="text-[10px] uppercase tracking-[0.28em] text-taupe mb-2">CLIENT CARE</p>
        <h2 className="font-serif text-3xl font-light text-obsidian">Contact the Atelier</h2>
        <p className="text-xs text-obsidian/60 font-light mt-1.5 leading-relaxed">
          {BRAND_ASSETS.atelierLocation} • {BRAND_ASSETS.customerCarePhone} •{' '}
          {BRAND_ASSETS.customerCareEmail}
        </p>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <h3 className="font-serif text-2xl font-light text-obsidian">Thank you, {name}.</h3>
            <p className="text-xs text-obsidian/65 font-light max-w-sm mx-auto leading-relaxed">
              Your inquiry has been noted. For immediate assistance, you may also continue on
              WhatsApp.
            </p>
            <div className="pt-2 flex items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.22em]"
              >
                Open WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 border border-obsidian/20 text-[11px] uppercase tracking-[0.22em]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {error && <p className="text-xs text-red-800">{error}</p>}

            <div>
              <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 bg-transparent border-b border-obsidian/20 text-xs focus:outline-none focus:border-obsidian font-light"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 bg-transparent border-b border-obsidian/20 text-xs focus:outline-none focus:border-obsidian font-light"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.22em] text-taupe mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full py-2 bg-transparent border-b border-obsidian/20 text-xs focus:outline-none focus:border-obsidian font-light"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              <button
                type="submit"
                className="px-8 py-3.5 bg-obsidian text-alabaster text-[11px] uppercase tracking-[0.24em] hover:bg-brass transition-colors"
              >
                Send Message
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] uppercase tracking-[0.2em] text-obsidian/60 hover:text-obsidian underline"
              >
                WhatsApp Direct →
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
