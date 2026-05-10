
import { ExternalLink, Share2 } from 'lucide-react';

const APP_URL = 'https://isu-cauayan-navigator.vercel.app/';

export function ShareCard() {
  return (
    <div className="rounded-2xl p-4 bg-white/70 dark:bg-isu-charcoal-light/80 border border-gray-100 dark:border-white/5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-3">
          <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-isu-green dark:text-isu-mint">
            <Share2 className="w-5 h-5" strokeWidth={2} />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Share the App</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Scan or tap the link.
            </p>
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

      <div className="mt-4 flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 flex-shrink-0">
          <img
            src="/ISU%20Cauayan%20Navigator.png"
            alt="ISU Cauayan Navigator QR code"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wider font-semibold text-isu-gold dark:text-isu-mint">
            App link
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300 break-all mt-1">{APP_URL}</p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center text-xs font-semibold text-isu-green dark:text-isu-mint hover:underline"
          >
            Copy / open link
          </a>
        </div>
      </div>
    </div>
  );
}

