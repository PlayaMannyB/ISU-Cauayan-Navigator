
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import {
  APP_CREDIT,
  type CreditPerson
} from '../data/campusCredit';


function PersonRow({ person }: { person: CreditPerson }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2.5 h-2.5 mt-2 rounded-full bg-isu-gold dark:bg-isu-mint shrink-0" />
      <div className="min-w-0">
        <div className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
          {person.name}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
          {person.role}
        </div>
      </div>
    </div>
  );
}

export function Credit() {
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
        <h1 className="ml-2 text-white dark:text-isu-mint font-semibold text-lg">Credits</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        <div className="rounded-2xl bg-white/70 dark:bg-isu-charcoal-light/60 border border-gray-100 dark:border-white/5 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 dark:text-gray-400">
            About This Project
          </p>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mt-2">
            {APP_CREDIT.projectTitle}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
            {APP_CREDIT.projectNote}
          </p>
        </div>

        <div className="rounded-2xl bg-white/70 dark:bg-isu-charcoal-light/60 border border-gray-100 dark:border-white/5 p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-900 dark:text-white">The Project Team</p>
          <div className="mt-4 space-y-4">
            {APP_CREDIT.people.map((person: CreditPerson) => (
              <PersonRow key={person.name} person={person} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-isu-charcoal-light rounded-2xl p-5 shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">Final Requirement for HCI 1</p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
            Prof. Remiebie Andres
          </p>
        </div>
      </div>
    </div>
  );
}

