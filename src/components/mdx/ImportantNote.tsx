export function ImportantNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900/50 dark:bg-yellow-900/10">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white">
        !
      </div>
      <div className="text-sm text-yellow-800 dark:text-yellow-200">
        {children}
      </div>
    </div>
  );
}
