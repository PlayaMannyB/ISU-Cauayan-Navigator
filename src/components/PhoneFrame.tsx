import React from 'react';
export function PhoneFrame({ children }: {children: React.ReactNode;}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-6 bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="w-full h-[100dvh] sm:h-[850px] sm:max-h-[90vh] sm:max-w-[400px] bg-white dark:bg-isu-charcoal sm:rounded-[3rem] sm:border-[8px] border-gray-900 dark:border-isu-charcoal-light overflow-hidden relative shadow-2xl flex flex-col transition-colors duration-300">
        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50 dark:bg-isu-charcoal">
          {children}
        </div>
      </div>
    </div>);

}