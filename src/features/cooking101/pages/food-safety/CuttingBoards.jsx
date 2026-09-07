export default  function CuttingBoards ({cuttingBoards}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Cross-Contamination Prevention
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Standard kitchen color-coding system to prevent foodborne illness
          transmission.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cuttingBoards.map((board) => (
          <div
            key={board.label}
            className={`flex flex-col justify-between space-y-4 rounded-2xl border ${board.border} ${board.lightBg} p-5`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-4 w-4 shrink-0 rounded-full ${board.color}`}
              />
              <h3 className="text-base font-bold text-slate-900">
                {board.label}
              </h3>
            </div>

            <div>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Primary Usage
              </span>
              <p className="mt-0.5 text-sm font-bold text-slate-800">
                {board.usage}
              </p>
            </div>

            <p className="border-t border-slate-200/60 pt-3 text-xs leading-relaxed text-slate-600">
              {board.tips}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}