import { marqueeWords } from "@/data/content";

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink-soft py-5">
      <div
        className={`flex shrink-0 items-center gap-10 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-sans text-2xl font-medium uppercase tracking-tight text-paper sm:text-4xl">
              {w}
            </span>
            <span className="text-2xl text-silver-dim sm:text-4xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
