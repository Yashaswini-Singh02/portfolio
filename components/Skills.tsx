import { skillGroups } from "@/data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="stack" className="container-grid py-24 sm:py-32">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="section-label">IV — how</span>
          <h2 className="mt-4 font-sans text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            my weapons of choice
          </h2>
        </div>
        <span className="section-label hidden sm:inline">toolkit</span>
      </div>
      <div className="mt-8 hairline" />

      <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <h3 className="accent-text mb-6 font-mono text-xs uppercase tracking-[0.3em]">
              {group.title}
            </h3>
            <ul className="flex flex-col">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-center justify-between border-b border-line py-3"
                >
                  <span className="font-sans text-lg text-paper transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[color:var(--accent)]">
                    {item}
                  </span>
                  <span className="accent-text font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    ●
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
