import React from 'react';
import { useNavigate } from 'react-router-dom';
interface HeaderProps {
  scrolled?: boolean;
}
export function Header({ scrolled = false }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header
      className={`sticky top-0 bg-isu-green dark:bg-isu-charcoal dark:border-b dark:border-isu-mint/20 flex items-center shadow-md z-40 shrink-0 transition-all duration-300 ${scrolled ? 'px-4 py-2' : 'px-4 py-3'}`}>
      
      <button
        onClick={() => navigate('/')}
        className="flex items-center group focus:outline-none"
        aria-label="Return to dashboard">
        
        <img
          src="/isu_new_seal_512x512.png"
          alt="ISU Seal"
          className={`rounded-full bg-white p-0.5 shadow-sm transition-all duration-300 group-hover:scale-105 ${scrolled ? 'w-7 h-7' : 'w-9 h-9'}`} />
        
        <h1
          className={`ml-3 text-white dark:text-isu-mint font-semibold tracking-wide transition-all duration-300 ${scrolled ? 'text-sm' : 'text-lg'}`}>
          
          ISU Cauayan Navigator
        </h1>
      </button>
    </header>);

}