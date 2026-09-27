import { useCallback, useState } from 'react';
import { ExternalLink, Share2, X } from 'lucide-react';

const APP_URL = 'https://isu-cauayan-navigator.vercel.app/';
const QR_SRC = '/ISU%20Cauayan%20Navigator.png';

export function ShareCard() {
  const [qrOpen, setQrOpen] = useState(false);

  const openQr = useCallback(() => setQrOpen(true), []);
  const closeQr = useCallback(() => setQrOpen(false), []);

  return (
    <>
      <section className="rounded-lg p-4 bg-white dark:bg-isu-charcoal-light border border-gray-200 dark:border-white/10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start space-x-3">
            <Share2 className="w-5 h-5 mt-0.5 text-isu-green dark:text-isu-mint" strokeWidth={2} aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-base text-gray-900 dark:text-white">Share the app</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scan or tap the link.</p>
            </div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 px-3 rounded-lg bg-isu-green dark:bg-isu-charcoal text-white dark:text-isu-mint hover:bg-isu-green-light dark:hover:bg-isu-charcoal-light active:scale-95 transition-colors text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint"
            aria-label="Open app link">
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Open
          </a>
        </div>

        <div className="mt-4">
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={openQr}
              className="w-48 h-48 rounded-lg overflow-hidden bg-white border border-gray-200 dark:border-white/10 flex-shrink-0 active:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint"
              aria-label="Fullscreen QR code"
            >
              <img src={QR_SRC} alt="ISU Cauayan Navigator QR code" className="w-full h-full object-cover" />
            </button>

            <div className="w-full min-w-0">
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
                className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-isu-green dark:text-isu-mint hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint">
                Copy link
              </button>
            </div>
          </div>
        </div>
      </section>

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
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-[2100] min-h-11 min-w-11 p-2.5 rounded-full bg-white dark:bg-isu-charcoal-light text-gray-800 dark:text-white shadow-lg active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint"
              aria-label="Close QR code fullscreen">
              <X className="w-5 h-5 mx-auto" aria-hidden="true" />
            </button>

            <img
              src={QR_SRC}
              alt="ISU Cauayan Navigator QR code fullscreen"
              className="w-full h-auto rounded-lg bg-white p-4 shadow-2xl"
            />

            {/* Visible bottom spacing so content isn't flush on mobile */}
            <div className="h-2" />
          </div>
        </div>
      )}
    </>
  );
}

