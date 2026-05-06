import React from 'react';
export function PhoneFrame({ children }: {children: React.ReactNode;}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-6 bg-gray-100 dark:bg-black transition-colors duration-300">
      <div className="w-full h-[100dvh] sm:h-[850px] sm:max-h-[90vh] sm:max-w-[400px] bg-white dark:bg-isu-charcoal sm:rounded-[3rem] sm:border-[8px] border-gray-900 dark:border-isu-charcoal-light overflow-hidden relative shadow-2xl flex flex-col transition-colors duration-300">
        {/* iOS Status Bar */}
        <div className="h-12 w-full bg-isu-green dark:bg-isu-charcoal flex justify-between items-end px-6 pb-2 text-white dark:text-isu-mint text-xs font-medium z-50 shrink-0">
          <span>9:41</span>
          <div className="flex space-x-2 items-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
            </svg>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-gray-50 dark:bg-isu-charcoal">
          {children}
        </div>
      </div>
    </div>);

}