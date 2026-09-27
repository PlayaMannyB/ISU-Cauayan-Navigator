import React from 'react';
import { X, MapPin, Info } from 'lucide-react';
interface BuildingDetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  category: string;
  rooms: string[];
  imageUrl?: string;
}
export function BuildingDetailPanel({
  isOpen,
  onClose,
  name,
  category,
  rooms,
  imageUrl = 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
}: BuildingDetailPanelProps) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="building-panel-title"
      aria-hidden={!isOpen}
      className={`safe-area-bottom absolute bottom-0 left-0 right-0 h-[min(38%,22rem)] max-h-[90dvh] bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md border-t border-white/40 dark:border-isu-mint/20 shadow-glass rounded-t-[2rem] transition-transform duration-300 ease-out will-change-transform z-[1000] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
      
      <div className="w-full flex justify-center pt-3 pb-1" aria-hidden="true">
        <div
          className="w-12 h-1.5 bg-gray-300 dark:bg-isu-mint/30 rounded-full"
        />
      </div>

      <button
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
        className="absolute top-3 right-3 min-h-11 min-w-11 p-3 bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md text-gray-600 dark:text-isu-mint rounded-2xl border border-white/40 dark:border-isu-mint/20 shadow-glass hover:bg-white dark:hover:bg-isu-charcoal-light active:scale-95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint focus-visible:ring-offset-2 dark:focus-visible:ring-offset-isu-charcoal"
        aria-label="Close panel">
        
        <X className="w-5 h-5 mx-auto" aria-hidden="true" />
      </button>

      <div className="flex h-[calc(100%-1.5rem)] min-h-0 p-4 pt-2 gap-4 sm:p-5">
        <div className="w-2/5 h-full max-h-[160px] rounded-2xl overflow-hidden shadow-sm shrink-0 relative">
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <span className="inline-block text-[10px] font-semibold text-white bg-isu-green/90 dark:bg-isu-mint/80 dark:text-isu-charcoal px-2 py-0.5 rounded-full uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="inline-flex items-center space-x-1 text-[10px] font-semibold text-isu-gold dark:text-isu-mint mb-1 uppercase tracking-wider">
            <MapPin className="w-3 h-3" />
            <span>ISU Cauayan</span>
          </div>
          <h2
            id="building-panel-title"
            className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-3 uppercase">
            {name}
          </h2>

          <div className="flex-1 overflow-y-auto pr-2">
            <h3 className="text-[10px] font-semibold text-gray-500 dark:text-gray-300 mb-2 uppercase tracking-wider flex items-center">
              <Info className="w-3 h-3 mr-1" /> Site
            </h3>
            {rooms.length === 0 ?
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                No site details available.
              </p> :

            <ul className="space-y-2">
                {rooms.map((room, i) =>
              <li
                key={i}
                className="text-xs font-medium text-gray-700 dark:text-gray-200 flex items-center">
                
                    <div className="w-1.5 h-1.5 rounded-full bg-isu-green dark:bg-isu-mint mr-2 shrink-0" />
                    {room}
                  </li>
              )}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>);

}