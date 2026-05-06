import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Map as MapIcon, Search, Info } from 'lucide-react';
export function BottomNav() {
  const navItems = [
  {
    path: '/',
    icon: Home,
    label: 'Home'
  },
  {
    path: '/map',
    icon: MapIcon,
    label: 'Map'
  },
  {
    path: '/search',
    icon: Search,
    label: 'Search'
  },
  {
    path: '/about',
    icon: Info,
    label: 'About'
  }];

  return (
    <nav className="bg-white/85 dark:bg-isu-charcoal/85 backdrop-blur-md border-t border-gray-200 dark:border-isu-mint/15 px-6 py-3 pb-6 sm:pb-3 flex justify-between items-center z-50 shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] max-w-md mx-auto w-full">
      {navItems.map((item) =>
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === '/'}
        className={({ isActive }) =>
        `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${isActive ? 'text-isu-green dark:text-isu-mint scale-110' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`
        }>
        
          <item.icon className="w-6 h-6" strokeWidth={2.5} />
          <span className="text-[10px] font-medium opacity-0 h-0 overflow-hidden">
            {item.label}
          </span>
        </NavLink>
      )}
    </nav>);

}