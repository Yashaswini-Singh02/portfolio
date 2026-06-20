import { awards } from "@/data/content";
import Reveal from "./Reveal";

export default function Awards() {
  return (
    <section className="container-grid py-24 sm:py-32">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="section-label">V — wins</span>
          <h2 className="mt-4 font-sans text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            the trophy shelf
          </h2>
        </div>
        <span className="section-label hidden sm:inline">11× hackathon winner</span>
      </div>
      <div className="mt-8 hairline" />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {awards.map((a, i) => (
          <Reveal key={a.event} delay={i * 0.06}>
            <div className="group relative flex h-full flex-col justify-between gap-10 bg-ink p-7 transition-colors duration-500 hover:bg-ink-soft">
              <span className="accent-bg absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-smooth group-hover:scale-x-100" />
              <div className="flex items-start justify-between">
                <span className="text-chrome animate-chrome-shift font-sans text-5xl font-bold tracking-tight">
                  {a.place}
                </span>
                <span className="font-pixel text-[10px] text-silver-dim">{a.year}</span>
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold tracking-tight text-paper transition-colors group-hover:text-accent">
                  {a.event}
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-paper-dim">
                  {a.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
