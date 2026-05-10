import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const HOTLINES = [
  { label: 'ISU Cauayan Campus', value: '078-500-100' },
  { label: 'ISU Cauayan Procurement Office', value: '+63 920 955 4347' },
  { label: 'Cauayan City Emergency Hotline (Globe)', value: '0917-127-8785' },
  { label: 'Cauayan City Emergency Hotline (Smart)', value: '0999-727-5090' },
  { label: 'PNP Hotline (Cauayan)', value: '0926-618-5717' },
  { label: 'BFP Hotline (Cauayan)', value: '0926-490-5075' }
] as const;

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          // Fallback for browsers where clipboard write may be blocked
          const el = document.createElement('textarea');
          el.value = text;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
        }
      }}
      className="text-sm font-bold text-gray-900 dark:text-white break-all underline decoration-isu-green/40 dark:decoration-isu-mint/40 hover:decoration-isu-green/70 dark:hover:decoration-isu-mint/70"
      aria-label={`Copy ${label}`}
    >
      {text}
    </button>
  );
}

export function EmergencyHotlines() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal overflow-hidden">
      <div className="bg-isu-green dark:bg-isu-charcoal-light px-4 py-3 flex items-center shadow-md dark:border-b dark:border-isu-mint/20 z-10 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-white dark:text-isu-mint hover:bg-white/10 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-2 text-white dark:text-isu-mint font-semibold text-lg">Emergency Hotlines</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        <div className="rounded-2xl bg-white/90 dark:bg-isu-charcoal-light/70 border border-gray-100 dark:border-white/10 shadow-sm p-5">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Key Emergency & Contact Numbers</h2>

          <div className="mt-4 space-y-3">
            {HOTLINES.map((item) => (
              <div key={item.value} className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 mt-2 rounded-full bg-isu-green dark:bg-isu-mint shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-isu-gold dark:text-isu-mint">{item.label}</p>
                  <CopyButton text={item.value} label={item.label} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold text-isu-gold dark:text-isu-mint">Address</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-1">
              18 Dacanay, Brgy. San Fermin, Cauayan City, Isabela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

