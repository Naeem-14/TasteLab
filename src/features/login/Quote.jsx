import { quotes, quoteImages } from "./QuoteData";

const quote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteImage = quoteImages[Math.floor(Math.random() * quoteImages.length)];

export default function Quote() {
  return (
    <section className="relative hidden h-full min-h-0 min-w-0 md:inline-block">
      <img
        src={quoteImage}
        className="block h-full min-h-0 w-full rounded-3xl object-cover object-center brightness-75"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">
        <div>
          <div className="flex items-center gap-5">
            <p className="text-sm font-light uppercase">A Quote by</p>
            <div className="h-0.5 max-w-2xs flex-1 rounded-full bg-white/65"></div>
          </div>
          <h3 className="font-sans text-xl font-semibold tracking-wider">
            {quote.author}
          </h3>
        </div>

        <div>
          <h1 className="font-sans text-4xl font-bold">{quote.hook}</h1>
          <p className="mt-4 max-w-[90%] font-light">{quote.quote}</p>
        </div>
      </div>
    </section>
  );
}
