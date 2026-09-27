import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Map as MapIcon,
  ShieldAlert,
  Info,
  ChevronRight } from
'lucide-react';
import { ShareCard } from '../components/ShareCard';
import { Header } from '../components/Header';
import { ISU_INFO } from '../data/isuMetadata';
export function Dashboard() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handle = () => setScrolled(el.scrollTop > 24);
    el.addEventListener('scroll', handle);
    return () => el.removeEventListener('scroll', handle);
  }, []);
  const menuItems = [
  {
    title: 'Interactive Map (Live View)',
    icon: MapIcon,
    path: '/map',
    primary: true,
    description: 'Explore the live campus GeoJSON'
  },
  // Removed redundant "Buildings" button; use the Search button instead

  {
    title: 'Student Manual',
    icon: Info,
    path: '/student-manual',
    primary: false,
    description: 'View the Student Manual PDF'
  },
  {
    title: 'Emergency Hotlines',
    icon: ShieldAlert,
    path: '/emergency-hotlines',
    primary: false,
    accent: 'text-red-500',
    bgAccent: 'bg-red-50 dark:bg-red-500/10'
  },
  {
    title: 'Credits',
    icon: Info,
    path: '/credit',
    primary: false
  },
];

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal">
      <Header scrolled={scrolled} />

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        
        {/* Smart-Green Welcome Banner */}
        <section className="rounded-2xl p-5 bg-isu-green dark:bg-isu-charcoal-light dark:border dark:border-isu-mint/25 text-white dark:text-isu-mint relative overflow-hidden">
          <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-isu-gold dark:text-isu-mint">
            Smart-Green University
          </p>
          <h2 className="mt-2 text-lg font-semibold leading-snug">
            Welcome to{' '}
            <span className="text-isu-gold dark:text-isu-mint">
              {ISU_INFO.campus}
            </span>
          </h2>
          <p className="text-xs text-white/80 dark:text-gray-300 mt-1">
            Find any building or room across campus instantly.
          </p>
        </section>

        {/* Search entry point */}
        <button
          type="button"
          onClick={() => navigate('/search')}
          className="w-full min-h-14 bg-white dark:bg-isu-charcoal-light border border-gray-200 dark:border-white/10 rounded-lg p-4 flex items-center space-x-3 text-left cursor-text transition-colors active:bg-gray-100 dark:active:bg-white/10 hover:border-isu-green/50 dark:hover:border-isu-mint/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint">
          
          <Search className="w-5 h-5 text-isu-green dark:text-isu-mint" />
          <span className="text-gray-400 dark:text-gray-500 text-sm font-medium truncate">
            Search Building (e.g., CCSICT) or Room...
          </span>
        </button>

        {/* Share Card + Navigation Cards */}
        <div className="space-y-3">
            <div className="space-y-3 pb-6">
              <ShareCard />

              {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full text-left flex items-center justify-between p-4 rounded-lg transition-colors active:bg-gray-100 dark:active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint ${item.primary ? 'bg-isu-green dark:bg-isu-charcoal-light dark:border dark:border-isu-mint/40 text-white dark:text-isu-mint shadow-md min-h-[80px] hover:bg-isu-green-light dark:hover:bg-isu-charcoal-light' : `bg-white dark:bg-isu-charcoal-light text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/5 min-h-[64px] hover:border-isu-green/40 dark:hover:border-isu-mint/40 ${item.bgAccent || ''}`}`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      item.primary
                        ? 'bg-white/15 text-white dark:text-isu-mint'
                        : `bg-gray-50 dark:bg-white/5 ${item.accent || 'text-isu-green dark:text-isu-mint'}`
                    }`}
                  >
                    <item.icon className="w-6 h-6" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className={`font-semibold ${item.primary ? 'text-base' : 'text-sm'}`}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-white/80 dark:text-isu-mint/70 text-xs mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <ChevronRight
                  className={`w-5 h-5 ${
                    item.primary ? 'text-white/70 dark:text-isu-mint/70' : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>);

}