import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search as SearchIcon,
  MapPin,
  ChevronLeft,
  Building } from
'lucide-react';
import { ROOMS_LIST, BUILDINGS_LIST } from '../data/campusGeoJSON';
interface ResultItem {
  id: string;
  title: string;
  type: 'room' | 'building';
  buildingId: number;
}
export function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('302');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(query.length, query.length);
    }
  }, []);
  const results: ResultItem[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return BUILDINGS_LIST.slice(0, 8).map((b) => ({
        id: `b-${b.id}`,
        title: b.name,
        type: 'building' as const,
        buildingId: b.id
      }));
    }
    const roomMatches: ResultItem[] = ROOMS_LIST.filter(
      (r) =>
      r.room.toLowerCase().includes(q) ||
      r.buildingName.toLowerCase().includes(q)
    ).
    slice(0, 6).
    map((r) => ({
      id: `r-${r.buildingId}-${r.room}`,
      title: `${r.buildingName}, ${r.room}`,
      type: 'room' as const,
      buildingId: r.buildingId
    }));
    const buildingMatches: ResultItem[] = BUILDINGS_LIST.filter((b) =>
    b.name.toLowerCase().includes(q)
    ).
    slice(0, 4).
    map((b) => ({
      id: `b-${b.id}`,
      title: b.name,
      type: 'building' as const,
      buildingId: b.id
    }));
    return [...roomMatches, ...buildingMatches];
  }, [query]);
  const topMatchId = results[0]?.id;
  const handleSelect = (item: ResultItem) => {
    navigate(`/map?building=${item.buildingId}`);
  };
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal">
      {/* Header */}
      <div className="bg-white dark:bg-isu-charcoal-light px-4 py-3 flex items-center shadow-sm dark:shadow-none dark:border-b dark:border-white/5 z-10 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
          
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-2 text-isu-gold dark:text-isu-mint font-semibold text-lg">
          Search Rooms
        </h1>
      </div>

      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        {/* Search Input */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-isu-green dark:text-isu-mint" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block w-full pl-11 pr-4 py-4 bg-white/80 dark:bg-isu-charcoal-light/80 backdrop-blur-md border border-gray-200 dark:border-isu-mint/20 rounded-2xl text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-isu-gold/50 dark:focus:ring-isu-mint/50 focus:border-isu-gold dark:focus:border-isu-mint shadow-sm text-base font-medium transition-all caret-isu-gold dark:caret-isu-mint"
            placeholder="Search Building or Room..." />
          
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-isu-charcoal-light rounded-2xl shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 overflow-hidden">
          {results.length === 0 ?
          <div className="p-8 text-center text-sm text-gray-400 dark:text-gray-500">
              No matches for "{query}"
            </div> :

          results.map((result) => {
            const isTop = result.id === topMatchId && query.trim().length > 0;
            return (
              <button
                key={result.id}
                onClick={() => handleSelect(result)}
                className={`w-full text-left px-5 py-4 flex items-center space-x-4 border-b border-gray-50 dark:border-white/5 last:border-0 transition-colors ${isTop ? 'bg-isu-gold/10 dark:bg-isu-mint/10 hover:bg-isu-gold/15 dark:hover:bg-isu-mint/15' : 'hover:bg-gray-50 dark:hover:bg-white/5'}`}>
                
                  <div
                  className={`p-2 rounded-full shrink-0 ${isTop ? 'bg-isu-gold/25 dark:bg-isu-mint/20 text-isu-gold dark:text-isu-mint' : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500'}`}>
                  
                    {result.type === 'room' ?
                  <MapPin className="w-5 h-5" /> :

                  <Building className="w-5 h-5" />
                  }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                    className={`text-sm truncate ${isTop ? 'font-bold text-gray-900 dark:text-isu-mint' : 'font-medium text-gray-500 dark:text-gray-400'}`}>
                    
                      {result.title}
                    </p>
                  </div>
                </button>);

          })
          }
        </div>

        {/* Footer Hint */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
            Tap recommendation to view on map.
          </p>
        </div>
      </div>
    </div>);

}