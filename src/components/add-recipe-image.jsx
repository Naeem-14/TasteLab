export default function AddRecipeImage() {
  return (
    <section className="">
      <label
        htmlFor="file-upload"
        className="group flex aspect-video h-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-white text-center text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700 md:aspect-auto"
      >
        <svg
          className="mb-2 h-8 w-8 text-slate-400 transition-transform duration-200 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        <span className="text-sm font-semibold">
          Click to upload or drag and drop
        </span>
        <span className="mt-1 text-xs">PNG, JPG</span>

        <input id="file-upload" type="file" className="sr-only" />
      </label>
    </section>
  );
}
