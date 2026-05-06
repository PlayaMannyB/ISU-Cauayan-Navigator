import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Compass, Eye, Target, Leaf } from 'lucide-react';
import { ISU_INFO } from '../data/isuMetadata';
export function About() {
  const navigate = useNavigate();
  const sections = [
  {
    icon: Compass,
    label: 'Mandate',
    text: ISU_INFO.mandate,
    accent: 'from-isu-green'
  },
  {
    icon: Eye,
    label: 'Vision',
    text: ISU_INFO.vision,
    accent: 'from-isu-gold'
  },
  {
    icon: Target,
    label: 'Mission',
    text: ISU_INFO.mission,
    accent: 'from-isu-green-light'
  }];

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal overflow-hidden">
      {/* Header */}
      <div className="bg-isu-green dark:bg-isu-charcoal-light px-4 py-3 flex items-center shadow-md dark:border-b dark:border-isu-mint/20 z-10 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-white dark:text-isu-mint hover:bg-white/10 rounded-full transition-colors">
          
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-2 text-white dark:text-isu-mint font-semibold text-lg">
          About
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {/* Splash Card */}
        <div className="rounded-3xl p-6 bg-isu-green dark:bg-isu-charcoal-light dark:border dark:border-isu-mint/30 text-white relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/isu_new_seal_512x512.png"
              alt="ISU Seal"
              className="w-14 h-14 rounded-full bg-white p-1 shadow-md" />
            
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 dark:text-isu-mint">
                Established {ISU_INFO.founded}
              </p>
              <h2 className="text-base font-bold leading-tight dark:text-isu-mint">
                {ISU_INFO.name}
              </h2>
              <p className="text-xs opacity-80 dark:text-isu-mint/70">
                {ISU_INFO.campus}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-1.5 bg-white/15 dark:bg-isu-mint/15 px-3 py-1 rounded-full">
            <Leaf className="w-3 h-3 text-isu-gold dark:text-isu-mint" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-isu-gold dark:text-isu-mint">
              Smart-Green University
            </span>
          </div>
        </div>

        {/* Mandate / Vision / Mission */}
        {sections.map((s, idx) =>
        <div
          key={idx}
          className="bg-white dark:bg-isu-charcoal-light rounded-2xl p-5 shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5">
          
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-isu-green/10 dark:bg-isu-mint/15 flex items-center justify-center text-isu-green dark:text-isu-mint">
                <s.icon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-isu-green dark:text-isu-mint">
                {s.label}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {s.text}
            </p>
          </div>
        )}

        {/* App Info */}
        <div className="bg-white dark:bg-isu-charcoal-light rounded-2xl p-5 shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            ISU Cauayan Navigator · v1.0
          </p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
            Built with real campus GeoJSON data.
          </p>
        </div>
      </div>
    </div>);

}