import React, { useCallback, useState } from 'react';
import { ExternalLink, Share2, X } from 'lucide-react';

const APP_URL = 'https://isu-cauayan-navigator.vercel.app/';
const QR_SRC = '/ISU%20Cauayan%20Navigator.png';

export function ShareCard() {
  const [qrOpen, setQrOpen] = useState(false);

  const openQr = useCallback(() => setQrOpen(true), []);
  const closeQr = useCallback(() => setQrOpen(false), []);

  return (
    <>
      <div className="rounded-2xl p-4 bg-white/70 dark:bg-isu-charcoal-light/80 border border-gray-100 dark:border-white/5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-isu-green dark:text-isu-mint">
              <Share2 className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Share the App</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scan or tap the link.</p>
            </div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-isu-green dark:bg-isu-charcoal-light text-white dark:text-isu-mint hover:opacity-90 transition-opacity text-xs font-semibold"
            aria-label="Open app link">
            <ExternalLink className="w-4 h-4" />
            Open
          </a>
        </div>

        <div className="mt-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={openQr}
              className="w-32 h-32 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 flex-shrink-0"
              aria-label="Fullscreen QR code"
            >
              <img src={QR_SRC} alt="ISU Cauayan Navigator QR code" className="w-full h-full object-cover" />
            </button>

            {/* On mobile: place link + copy button under the QR */}
            <div className="w-full sm:w-auto min-w-0">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-isu-gold dark:text-isu-mint">
                App link
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 break-all mt-1">{APP_URL}</p>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(APP_URL);
                  } catch {
                    // Fallback for browsers where clipboard write may be blocked
                    const el = document.createElement('textarea');
                    el.value = APP_URL;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                  }
                  window.open(APP_URL, '_blank', 'noreferrer');
                }}
                className="mt-2 inline-flex items-center text-xs font-semibold text-isu-green dark:text-isu-mint hover:underline">
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>

      {qrOpen && (
        <div
          className="fixed inset-0 z-[2000] bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="QR code fullscreen"
          onClick={closeQr}>
          {/* Prevent closing when clicking the QR image itself */}
          <div
            className="relative max-w-[560px] w-full"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <button
              type="button"
              onClick={closeQr}
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-[2100] p-2.5 rounded-full bg-white/90 dark:bg-isu-charcoal-light/90 text-gray-800 dark:text-white shadow-lg">
              <X className="w-5 h-5" />
            </button>

            <img
              src={QR_SRC}
              alt="ISU Cauayan Navigator QR code fullscreen"
              className="w-full h-auto rounded-3xl bg-white p-4 shadow-2xl"
            />

            {/* Visible bottom spacing so content isn't flush on mobile */}
            <div className="h-2" />
          </div>
        </div>
      )}
    </>
  );
}

