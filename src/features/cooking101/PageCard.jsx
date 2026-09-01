export default function PageCard({ image, title, description }) {
  const imageUrl = new URL(image, import.meta.url).href;

  return (
    <article className="group relative aspect-square h-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Dynamic Gradient with Accent Variable */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 via-30% to-transparent to-70%" />

      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="mb-1 text-lg font-medium transition-all duration-500 ease-out text-shadow-black/50 text-shadow-xs group-hover:tracking-wider">
          {title}
        </h2>
        <p className="line-clamp-2 text-sm font-light text-white/75 transition duration-500 ease-out text-shadow-black/50 text-shadow-xs group-hover:text-white">
          {description}
        </p>
      </div>
    </article>
  );
}
