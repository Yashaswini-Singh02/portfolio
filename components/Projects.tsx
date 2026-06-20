"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/content";

type Project = (typeof projects)[number];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-grid">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label">II — what</span>
            <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-paper sm:text-6xl">
              selected work
            </h2>
            <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-paper-dim">
              A stacked deck of the things I&apos;ve shipped.{" "}
              <span className="text-paper">Scroll</span> to deal the next one.
            </p>
          </div>
          <span className="section-label hidden sm:inline">~/showcase · {projects.length}</span>
        </div>
        <div className="mt-8 hairline" />
      </div>

      {/* the stacking deck */}
      <div ref={containerRef} className="relative">
        {projects.map((p, i) => {
          const targetScale = 1 - (projects.length - i) * 0.04;
          return (
            <Card
              key={p.name}
              i={i}
              project={p}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="container-grid">
        <p className="mt-12 font-mono text-xs text-paper-dim">
          More on{" "}
          <a
            href="https://devfolio.co/@YS9/projects"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-paper"
          >
            devfolio
          </a>{" "}
          &amp;{" "}
          <a
            href="https://github.com/Yashaswini-Singh02"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-paper"
          >
            github
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Card({
  i,
  project: p,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const mediaFirst = i % 2 === 0;

  return (
    <div className="sticky top-0 flex min-h-screen items-center justify-center px-4 py-8 sm:px-8">
      <motion.article
        style={{ scale, y: i * 14 }}
        className="group grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-line bg-ink-soft shadow-[0_50px_140px_-50px_rgba(0,0,0,0.95)] md:h-[66vh] md:max-h-[640px] md:grid-cols-2"
      >
        {/* media frame */}
        <div className={`relative min-h-[240px] md:min-h-0 ${mediaFirst ? "" : "md:order-2"}`}>
          <ProjectMedia project={p} />
        </div>

        {/* details */}
        <div
          className={`flex flex-col justify-between gap-6 p-7 sm:p-10 ${
            mediaFirst ? "" : "md:order-1"
          }`}
        >
          <div className="flex items-center gap-2">
            {p.meta.map((m) => (
              <MetaPill key={m} label={m} />
            ))}
          </div>

          <div>
            <h3 className="font-serif text-5xl font-light leading-[0.9] text-paper sm:text-7xl">
              {p.name}
            </h3>
            <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-paper-dim">
              {p.tagline}
            </p>
            <p className="mt-5 font-pixel text-[9px] uppercase tracking-[0.08em] text-paper-dim">
              {p.role}
            </p>
            <ul className="mt-4 space-y-2">
              {p.points.map((pt, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="select-none font-mono text-sm" style={{ color: p.accent }}>
                    —
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-paper sm:text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-paper-dim"
                >
                  {s}
                </span>
              ))}
            </div>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group/cta inline-flex items-center gap-2 whitespace-nowrap font-pixel text-[10px] uppercase tracking-[0.1em]"
              style={{ color: p.accent }}
            >
              visit
              <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectMedia({ project: p }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = p.image && !failed;

  return (
    <div className="relative h-full w-full overflow-hidden bg-ink">
      {/* browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-3 bg-ink/70 px-4 py-2.5 backdrop-blur-sm">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-lilac" />
          <span className="h-2.5 w-2.5 rounded-full bg-magenta" />
        </span>
        <span className="truncate font-mono text-[11px] text-paper-dim">
          <span className="text-paper-dim/50">https://</span>
          {p.domain}
        </span>
      </div>

      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.image}
          alt={`${p.name} preview`}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
        />
      ) : (
        // branded placeholder until a real asset is dropped in /public/projects
        <div
          className="bg-scanlines relative flex h-full w-full items-center justify-center overflow-hidden"
          style={{ background: p.accent }}
        >
          <span className="font-serif text-[26vw] font-light leading-none text-black/15 md:text-[12vw]">
            {p.name.charAt(0)}
          </span>
          <span className="absolute bottom-4 left-4 font-pixel text-[9px] uppercase tracking-[0.1em] text-black/60">
            asset incoming
          </span>
        </div>
      )}
    </div>
  );
}

function MetaPill({ label }: { label: string }) {
  const live = label === "live";
  const soft = label === "freelance" || label === "shipped" || label === "devnet";
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 font-pixel text-[8px] uppercase tracking-[0.05em] ${
        live
          ? "border-accent/40 text-accent"
          : soft
          ? "border-lilac/30 text-lilac"
          : "border-line text-paper-dim"
      }`}
    >
      {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
      {label}
    </span>
  );
}
