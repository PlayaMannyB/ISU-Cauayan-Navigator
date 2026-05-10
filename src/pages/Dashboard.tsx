import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Map as MapIcon,
  Building2,
  Utensils,
  ShieldAlert,
  Info,
  ChevronRight,
  Sparkles } from
'lucide-react';
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
  {
    title: 'Buildings (Academic & Admin)',
    icon: Building2,
    path: '/search',
    primary: false
  },
  {
    title: 'Student Manual',
    icon: Info,
    path: '/student-manual',
    primary: false,
    description: 'View the Student Manual PDF'
  },
  {
    title: 'Emergency Locations',
    icon: ShieldAlert,
    path: '/map',
    primary: false,
    accent: 'text-red-500',
    bgAccent: 'bg-red-50 dark:bg-red-500/10'
  },
  {
    title: 'About the App',
    icon: Info,
    path: '/about',
    primary: false
  }];

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal">
      <Header scrolled={scrolled} />

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        
        {/* Smart-Green Welcome Banner */}
        <div className="rounded-2xl p-4 bg-isu-green dark:bg-isu-charcoal-light dark:border dark:border-isu-mint/25 text-white dark:text-isu-mint relative overflow-hidden">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-4 h-4 text-isu-gold dark:text-isu-mint" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-90">
              Smart-Green University
            </p>
          </div>
          <h2 className="text-base font-semibold leading-snug">
            Welcome to{' '}
            <span className="text-isu-gold dark:text-isu-mint">
              {ISU_INFO.campus}
            </span>
          </h2>
          <p className="text-xs opacity-80 mt-1">
            Find any building or room across campus instantly.
          </p>
        </div>

        {/* Search Bar Placeholder */}
        <div
          onClick={() => navigate('/search')}
          className="bg-white/70 dark:bg-isu-charcoal-light/80 backdrop-blur-xl border border-white/40 dark:border-isu-mint/20 shadow-glass rounded-2xl p-4 flex items-center space-x-3 cursor-text transition-transform active:scale-[0.98]">
          
          <Search className="w-5 h-5 text-isu-green dark:text-isu-mint" />
          <span className="text-gray-400 dark:text-gray-500 text-sm font-medium truncate">
            Search Building (e.g., CCSICT) or Room...
          </span>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-3 pb-6">
          {menuItems.map((item, index) =>
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`w-full text-left flex items-center justify-between p-4 rounded-2xl transition-all active:scale-[0.98] shadow-sm ${item.primary ? 'bg-isu-green dark:bg-isu-charcoal-light dark:border dark:border-isu-mint/40 text-white dark:text-isu-mint shadow-md min-h-[80px]' : `bg-white dark:bg-isu-charcoal-light text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-white/5 min-h-[64px] ${item.bgAccent || ''}`}`}>
            
              <div className="flex items-center space-x-4">
                <div
                className={`p-2.5 rounded-xl ${item.primary ? 'bg-white/15 text-white dark:text-isu-mint' : `bg-gray-50 dark:bg-white/5 ${item.accent || 'text-isu-green dark:text-isu-mint'}`}`}>
                
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h3
                  className={`font-semibold ${item.primary ? 'text-base' : 'text-sm'}`}>
                  
                    {item.title}
                  </h3>
                  {item.description &&
                <p className="text-white/80 dark:text-isu-mint/70 text-xs mt-0.5">
                      {item.description}
                    </p>
                }
                </div>
              </div>
              <ChevronRight
              className={`w-5 h-5 ${item.primary ? 'text-white/70 dark:text-isu-mint/70' : 'text-gray-300 dark:text-gray-600'}`} />
            
            </button>
          )}
        </div>
      </div>
    </div>);

}