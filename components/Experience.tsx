"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { experience } from "@/data/content";
import CompanyLogo from "./CompanyLogo";

const ease = [0.16, 1, 0.3, 1] as const;
const ROMAN = ["I", "II", "III", "IV", "V"];

const FEATURED = ["Covalent", "Atmos Protocol", "Positions Fi"];

type Theme = { bg: string; fg: string; sub: string; chip: string };

const THEME: Record<string, Theme> = {
  Covalent: { bg: "#E94F0B", fg: "#170A03", sub: "#4A2410", chip: "#170A03" },
  "Atmos Protocol": { bg: "#CFB3D4", fg: "#1B1B1B", sub: "#5A4A5E", chip: "#1B1B1B" },
  "Positions Fi": { bg: "#141414", fg: "#F1F1F1", sub: "#9CA3AF", chip: "#E94F0B" },
  Mintair: { bg: "#F1F1F1", fg: "#141414", sub: "#6B7280", chip: "#141414" },
  "Padhai Academy": { bg: "#1B1B1B", fg: "#F1F1F1", sub: "#9CA3AF", chip: "#CFB3D4" },
};

const featured = FEATURED.map((n) => experience.find((e) => e.company === n)!).filter(Boolean);
const others = experience.filter((e) => !FEATURED.includes(e.company));

type Job = (typeof experience)[number];

export default function Experience() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const steps = featured.length - 1;
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -steps * 90]);

  // measure half the cube height for the face translateZ
  useEffect(() => {
    const el = cubeRef.current;
    if (!el) return;
    const measure = () => setRadius(el.clientHeight / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="work" className="relative py-12 sm:py-16">
      <div className="container-grid">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="section-label">III — where</span>
            <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-paper sm:text-6xl">
              experience
            </h2>
            <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-paper-dim">
              Three chapters, one rotation at a time.{" "}
              <span className="text-paper">Scroll</span> to turn the cube.
            </p>
          </div>
          <span className="section-label hidden sm:inline">scroll ⟳ rotate</span>
        </div>
        <div className="mt-10 hairline" />
      </div>

      {reduce ? (
        // accessible fallback — stacked full cards, no 3D
        <div className="container-grid mt-12 flex flex-col gap-6">
          {featured.map((job, i) => (
            <div
              key={job.company}
              className="overflow-hidden rounded-2xl"
              style={{ minHeight: "70vh" }}
            >
              <Face job={job} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div ref={wrapRef} className="relative mt-8" style={{ height: "280vh" }}>
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
            <div
              className="relative w-full max-w-3xl"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                ref={cubeRef}
                className="relative h-[58vh] max-h-[460px] w-full"
                style={{ transformStyle: "preserve-3d", rotateX }}
              >
                {featured.map((job, i) => (
                  <div
                    key={job.company}
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] [backface-visibility:hidden]"
                    style={{
                      transform: `rotateX(${i * 90}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <Face job={job} index={i} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* earlier chapters */}
      <div className="container-grid mt-8">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group flex w-full items-center justify-between border-y border-line py-6 text-left"
        >
          <span className="font-serif text-2xl font-light italic text-paper sm:text-3xl">
            {expanded ? "earlier chapters" : `the earlier chapters (${others.length})`}
          </span>
          <span className="font-pixel text-[10px] uppercase tracking-[0.1em] text-accent">
            {expanded ? "close ✕" : "show more +"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-6 pt-6">
                {others.map((job, i) => (
                  <ChapterRow key={job.company} job={job} index={featured.length + i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Face({ job, index }: { job: Job; index: number }) {
  const t = THEME[job.company] ?? THEME.Covalent;
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-6 sm:p-9"
      style={{ background: t.bg, color: t.fg }}
    >
      <div
        className="flex items-center justify-between font-pixel text-[10px] uppercase tracking-[0.1em]"
        style={{ color: t.sub }}
      >
        <span>
          {ROMAN[index]} — {job.role}
        </span>
        <span>{job.period ?? "remote"}</span>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: t.sub }}>
          {job.archetype}
        </p>
        <h3 className="mt-2 font-serif text-[clamp(2rem,5.2vw,4rem)] font-light leading-[0.9]">
          {job.company}
        </h3>
        <div className="mt-4 h-px w-16" style={{ background: t.sub }} />
        <ul className="mt-4 max-w-xl space-y-2">
          {job.points.slice(0, 3).map((p, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: t.chip }} />
              <span className="font-mono text-xs leading-relaxed" style={{ color: t.fg }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {job.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider"
              style={{ borderColor: `${t.chip}40`, color: t.sub }}
            >
              {s}
            </span>
          ))}
        </div>
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border"
          style={{ borderColor: `${t.chip}30`, background: `${t.chip}10` }}
        >
          <CompanyLogo src={job.logo} company={job.company} />
        </span>
      </div>
    </div>
  );
}

function ChapterRow({ job, index }: { job: Job; index: number }) {
  const t = THEME[job.company] ?? THEME.Mintair;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="grid grid-cols-1 gap-6 overflow-hidden rounded-2xl p-7 sm:p-10 md:grid-cols-12 md:gap-10"
      style={{ background: t.bg, color: t.fg }}
    >
      <div className="md:col-span-4">
        <div
          className="flex items-center gap-3 font-pixel text-[10px] uppercase tracking-[0.1em]"
          style={{ color: t.sub }}
        >
          <span>{ROMAN[index] ?? index + 1}</span>
          <span>· {job.period ?? "remote"}</span>
        </div>
        <h3 className="mt-3 font-serif text-3xl font-light leading-tight sm:text-4xl">
          {job.company}
        </h3>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: t.sub }}>
          {job.role}
        </p>
      </div>

      <div className="md:col-span-8">
        <ul className="space-y-2.5">
          {job.points.map((p, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: t.chip }} />
              <span className="font-mono text-xs leading-relaxed" style={{ color: t.fg }}>
                {p}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {job.stack.map((s) => (
            <span
              key={s}
              className="border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider"
              style={{ borderColor: `${t.chip}40`, color: t.sub }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
