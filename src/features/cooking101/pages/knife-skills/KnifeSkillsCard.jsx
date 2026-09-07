import { difficulty, info } from "../../../../data/icons";

export default function KnifeSkillsCard({ knifeSkill }) {
  return (
    <article className="mb-6 inline-block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
      {/* 1. Header & Quick Tags */}
      <div className="p-6 pb-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {knifeSkill.category}
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-sm font-medium text-slate-700">
            <span className="scale-80">{difficulty}</span>{" "}
            {knifeSkill.difficulty}
          </span>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {knifeSkill.skillName}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {knifeSkill.description}
        </p>
      </div>

      {/* 2. Visual Media */}
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={knifeSkill.image}
          alt={knifeSkill.skillName}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        {/* 3. Specs & Gear Banner */}
        <div className="mb-6 space-y-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-3.5 text-xs text-slate-700">
          {knifeSkill.recommendedTool && (
            <div className="flex items-center gap-2">
              <span className="shrink-0 font-bold text-slate-900">Tool:</span>
              <span className="font-medium text-slate-800">
                {knifeSkill.recommendedTool}
              </span>
            </div>
          )}
          {knifeSkill.targetDimensions && (
            <div className="flex items-center gap-2 border-t border-slate-200/60 pt-2">
              <span className="shrink-0 font-bold text-slate-900">Specs:</span>
              <span className="text-slate-600">
                {knifeSkill.targetDimensions}
              </span>
            </div>
          )}
        </div>

        {/* 4. Step-by-Step Instructions */}
        <div>
          <div className="mb-4 border-b border-slate-200/80 pb-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Instructions
            </h2>
          </div>

          <ol className="flex flex-col gap-3">
            {knifeSkill.instructions?.map((step, index) => (
              <li
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-slate-300 hover:bg-slate-200/60"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-0.5 leading-relaxed text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* 5. Pro Tip Footer */}
        {knifeSkill.proTip && (
          <div className="mt-6 flex gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-4 text-sm">
            <span className="shrink-0 text-base text-accent">{info}</span>
            <div className="space-y-0.5">
              <span className="text-xs font-bold tracking-wide text-accent uppercase">
                Chef's Pro Tip
              </span>
              <p className="leading-relaxed text-slate-700">
                {knifeSkill.proTip}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}