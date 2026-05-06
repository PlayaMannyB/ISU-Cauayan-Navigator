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
      className={`absolute bottom-0 left-0 right-0 bg-white/92 dark:bg-isu-charcoal/95 backdrop-blur-xl border-t border-white/50 dark:border-isu-mint/20 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] rounded-t-[2rem] transition-transform duration-500 ease-out z-[1000] ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      style={{
        height: '38%'
      }}>
      
      <div className="w-full flex justify-center pt-3 pb-1">
        <div className="w-12 h-1.5 bg-gray-300 dark:bg-isu-mint/30 rounded-full" />
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-gray-100/80 dark:bg-white/10 text-gray-500 dark:text-isu-mint rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
        aria-label="Close panel">
        
        <X className="w-5 h-5" />
      </button>

      <div className="flex h-[calc(100%-1.5rem)] p-5 pt-2 gap-4">
        <div className="w-2/5 h-full max-h-[160px] rounded-2xl overflow-hidden shadow-sm shrink-0 relative">
          <img
            src={imageUrl}
            alt={name}
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
          <h2 className="text-base font-bold text-gray-900 dark:text-white leading-tight mb-3 uppercase">
            {name}
          </h2>

          <div className="flex-1 overflow-y-auto pr-2">
            <h3 className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider flex items-center">
              <Info className="w-3 h-3 mr-1" /> Available Rooms
            </h3>
            {rooms.length === 0 ?
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
                No rooms registered.
              </p> :

            <ul className="space-y-1.5">
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