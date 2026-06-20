"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, stats } from "@/data/content";
import RetroScene from "./RetroScene";

const ease = [0.16, 1, 0.3, 1] as const;

const BOOT = [
  "NEW LAYER // PORTFOLIO OS   v2.6",
  "(c) 2026  yashaswini singh shaktawat",
  "",
  "> initializing renderer ............ ok",
  "> loading projects ................. ok",
  "> painting sunset .................. ok",
  "> establishing on-chain uplink ..... ok",
];

type Phase = "boot" | "ready" | "entered";

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dims, setDims] = useState({ w: 1280, h: 720 });
  const entered = phase === "entered";

  // full-bleed target size, measured from the window
  useEffect(() => {
    const measure = () =>
      setDims({ w: window.innerWidth, h: Math.round(window.innerHeight * 0.9) });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // boot sequence
  useEffect(() => {
    if (phase !== "boot") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach((_, i) => timers.push(setTimeout(() => setStep(i + 1), 180 * (i + 1))));
    const start = 180 * BOOT.length + 150;
    timers.push(
      setTimeout(() => {
        const id = setInterval(() => {
          setProgress((p) => {
            if (p >= 100) {
              clearInterval(id);
              setPhase("ready");
              return 100;
            }
            return Math.min(100, p + 4);
          });
        }, 24);
        timers.push(id as unknown as ReturnType<typeof setTimeout>);
      }, start)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [phase]);

  // lock the page until the visitor enters
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  const enter = () => phase === "ready" && setPhase("entered");

  const filled = Math.round(progress / 5);
  const bar = "█".repeat(filled) + "░".repeat(20 - filled);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden py-10"
    >
      <motion.div
        className="mx-auto w-full"
        animate={{ maxWidth: entered ? dims.w : 880 }}
        transition={{ duration: 1, ease }}
      >
        {/* bezel — collapses to nothing on enter */}
        <motion.div
          className="relative overflow-hidden border-line bg-ink-card"
          animate={{
            padding: entered ? 0 : 16,
            borderRadius: entered ? 0 : 26,
            borderWidth: entered ? 0 : 1,
          }}
          transition={{ duration: 1, ease }}
        >
          {/* top vent row */}
          <AnimatePresence>
            {!entered && (
              <motion.div
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-3 flex items-center justify-between px-2"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#e94f0b]" />
                  <span className="font-pixel text-[9px] uppercase tracking-[0.1em] text-paper-dim">
                    power
                  </span>
                </div>
                <span className="font-pixel text-[9px] uppercase tracking-[0.1em] text-paper-dim">
                  YSS-2400
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* screen */}
          <motion.div
            onClick={enter}
            role={phase === "ready" ? "button" : undefined}
            tabIndex={phase === "ready" ? 0 : -1}
            onKeyDown={(e) => e.key === "Enter" && enter()}
            aria-label={phase === "ready" ? "Enter the portfolio" : undefined}
            className={`crt-screen crt-flicker relative w-full overflow-hidden ${
              phase === "ready" ? "cursor-pointer" : "cursor-default"
            }`}
            animate={{ height: entered ? dims.h : 460, borderRadius: entered ? 0 : 12 }}
            transition={{ duration: 1, ease }}
          >
            {/* the painted landscape */}
            <div className="absolute inset-0 z-0">
              <RetroScene />
            </div>

            {/* legibility scrim */}
            <motion.div
              className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
              animate={{ opacity: entered ? 1 : 0.55 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="absolute inset-0 z-[1] bg-ink"
              animate={{ opacity: entered ? 0 : 0.45 }}
              transition={{ duration: 0.8 }}
            />

            {/* boot / identity */}
            <div className="relative z-[2] flex h-full flex-col p-5 sm:p-10">
              <AnimatePresence mode="wait">
                {!entered ? (
                  <motion.div
                    key="boot"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col font-mono text-[11px] leading-relaxed text-paper/90 sm:text-sm"
                  >
                    {BOOT.slice(0, step).map((l, i) => (
                      <span key={i} className="whitespace-pre-wrap drop-shadow">
                        {l || "\u00A0"}
                      </span>
                    ))}
                    {step >= BOOT.length && (
                      <div className="mt-2 drop-shadow">
                        <span className="text-accent">[ {bar} ]</span>{" "}
                        <span className="text-paper-dim">{progress}%</span>
                      </div>
                    )}
                    <div className="mt-auto">
                      {phase === "ready" ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="inline-flex items-center gap-3 font-pixel text-[11px] uppercase tracking-[0.1em] text-paper sm:text-xs"
                        >
                          <span className="text-accent">▶</span>
                          <span className="border-b border-accent pb-0.5">click to enter</span>
                          <span className="animate-blink text-accent">_</span>
                        </motion.span>
                      ) : (
                        <span className="font-mono text-xs text-paper-dim">
                          booting<span className="animate-blink">_</span>
                        </span>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="id"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45, ease }}
                    className="mt-auto"
                  >
                    <div className="flex items-center gap-2 font-pixel text-[9px] uppercase tracking-[0.12em] text-paper-dim">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      portfolio // 2026
                    </div>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {profile.role}
                    </p>
                    <h1 className="mt-2 font-serif text-[clamp(2.4rem,9vw,7rem)] font-light leading-[0.9] text-paper">
                      Yashaswini <span className="italic">Singh</span> Shaktawat
                    </h1>
                    <p className="mt-4 max-w-xl font-mono text-xs leading-relaxed text-paper-dim sm:text-sm">
                      {profile.intro}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-paper-dim">
                      <span className="text-accent">{profile.ens}</span>
                      <span>{profile.location}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* bottom bezel control row */}
          <AnimatePresence>
            {!entered && (
              <motion.div
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-3 flex items-center justify-between px-2"
              >
                <span className="font-serif text-sm italic text-paper-dim">Singh · Studio</span>
                <div className="flex items-center gap-3">
                  <span className="font-pixel text-[9px] uppercase tracking-[0.1em] text-paper-dim">
                    vol
                  </span>
                  <span className="h-4 w-4 rounded-full border border-line bg-ink" />
                  <span className="h-4 w-4 rounded-full border border-line bg-ink" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* after entering: stats line + a way forward */}
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="container-grid mt-8 flex flex-col items-center gap-6"
          >
            <div className="grid w-full max-w-3xl grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink px-3 py-4 text-center">
                  <div className="font-serif text-2xl font-light text-paper">{s.value}</div>
                  <div className="mt-1 font-pixel text-[8px] uppercase tracking-[0.06em] text-paper-dim">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 font-pixel text-[10px] uppercase tracking-[0.1em] text-paper-dim transition-colors hover:text-paper"
            >
              scroll to explore
              <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
