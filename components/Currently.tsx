import { currently } from "@/data/content";
import Reveal from "./Reveal";

export default function Currently() {
  return (
    <section className="container-grid py-20 sm:py-28">
      <div className="relative overflow-hidden border border-line bg-ink-soft/60 p-7 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="section-label">right now</span>
          <span className="inline-flex items-center gap-2 font-pixel text-[10px] uppercase tracking-[0.05em] text-silver-dim">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            live status
          </span>
        </div>

        <h2 className="text-chrome animate-chrome-shift mt-6 max-w-3xl font-pixel text-2xl leading-tight sm:text-4xl">
          what i&apos;m up to
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {currently.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="group h-full bg-ink p-6 transition-colors duration-500 hover:bg-ink-soft">
                <p className="font-pixel text-[9px] uppercase tracking-[0.05em] text-accent">
                  {c.label}
                </p>
                <p className="mt-3 font-sans text-lg font-medium leading-snug text-paper">
                  {c.value}
                </p>
                <span className="mt-4 block h-px w-8 origin-left bg-silver-dim transition-transform duration-500 ease-smooth group-hover:scale-x-[3]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
