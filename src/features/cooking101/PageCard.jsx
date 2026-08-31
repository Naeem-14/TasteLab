export default function PageCard({ image, title, description, accent }) {
  return (
    <article className="group relative aspect-square h-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Dynamic Gradient with Accent Variable */}
      <div
        className="absolute inset-0 bg-linear-to-t from-(--accent-color)/80 via-(--accent-color)/30 via-50% to-transparent to-85%"
        style={{
          "--accent-color": `${accent}`,
        }}
      />

      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="mb-1 text-lg font-medium transition-all duration-500 ease-out text-shadow-black/50 text-shadow-xs group-hover:tracking-wider">
          {title}
        </h2>
        <p className="line-clamp-2 text-sm font-light text-shadow-black/50 text-shadow-xs">
          {description}
        </p>
      </div>
    </article>
  );
}
