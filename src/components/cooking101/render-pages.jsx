import PageCard from "./page-card";
import cooking101Data from "../../data/cooking-101-data";

export default function RenderPages() {
  return (
    <>
      {cooking101Data.map((data) => (
        <section
          className="flex flex-col gap-3 border-black/20"
          key={data.category.text}
        >
          <h1 className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase">
            <span className="text-base">{data.category.icon}</span>
            <span className="text-sm">{data.category.text}</span>
          </h1>

          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.pages.map((card) => (
              <PageCard
                key={card.title}
                image={card.image}
                title={card.title}
                description={card.description}
                accent={card.accent}
              />
            ))}
          </div>

          <div className="mx-10 mt-2 h-0.5 w-auto rounded-lg bg-slate-300/50"></div>
        </section>
      ))}
    </>
  );
}
