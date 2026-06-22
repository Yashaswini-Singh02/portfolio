import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="container-grid py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="section-label">I — who</span>
          <h2 className="mt-4 font-serif text-3xl italic leading-tight text-paper sm:text-4xl">
            the human behind the commits
          </h2>
        </div>
        <span className="section-label hidden sm:inline">profile</span>
      </div>
      <div className="mt-8 hairline" />

      <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-serif text-2xl leading-snug text-paper sm:text-[2.6rem] sm:leading-[1.2]">
              I&apos;m a full-stack engineer who lives at the intersection of{" "}
              <span className="italic accent-text">clean interfaces</span> and{" "}
              <span className="italic accent-text">on-chain logic</span>. I build fast, ship faster,
              and obsess over the details nobody notices until they&apos;re gone.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl font-mono text-sm leading-relaxed text-paper-dim">
              {profile.blurb} Off the clock you&apos;ll find me deep in a binge-watch,
              poking at a new chain, or chasing the next prediction market. I also wrote a
              research paper on the Design, Simulation &amp; Optimization of Perovskite-Silicon
              Tandem Solar Cells — because curiosity doesn&apos;t clock out.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.15}>
            <p className="section-label mb-5">Traits</p>
            <ul className="flex flex-col">
              {profile.adjectives.map((a, i) => (
                <li
                  key={a}
                  className="group flex items-baseline gap-4 border-b border-line py-3"
                >
                  <span className="font-mono text-xs accent-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-lg text-paper transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[color:var(--accent)]">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
