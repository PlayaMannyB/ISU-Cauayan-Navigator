
export function StudentManual() {
  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-isu-charcoal">
      <div className="px-4 py-5">
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Student Manual</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          View the ISU Cauayan Student Manual PDF
        </p>
      </div>

      <div className="flex-1 px-4 pb-5">
        <div className="w-full h-[75vh] rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-white/10 bg-white dark:bg-isu-charcoal-light">
          <iframe
            title="Student Manual"
            src="/Student-Manual.pdf"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

