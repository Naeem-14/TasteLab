export default function PagesHeader({ category, title, description }) {
  return (
    <header className="space-y-3 text-center">
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase">
        {category}
      </span>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h1>
      <p className="text-base text-slate-600">{description}</p>
    </header>
  );
}
