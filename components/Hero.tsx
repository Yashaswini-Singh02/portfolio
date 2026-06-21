"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { profile, stats } from "@/data/content";

const ease = [0.16, 1, 0.3, 1] as const;

const BOOT = [
  "yss.dev // portfolio terminal      v3.0",
  "(c) 2026  yashaswini singh shaktawat",
  "",
  "> mounting interface ............. ok",
  "> linking on-chain modules ....... ok",
  "> loading 11x hackathon wins ..... ok",
  "> compositing hero ............... ok",
];

type Phase = "boot" | "ready" | "entered";

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const [phase, setPhase] = useState<Phase>("boot");
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("--:--:--");
  const entered = phase === "entered";

  // ---- boot sequence ----
  useEffect(() => {
    if (phase !== "boot") return;
    if (reduce) {
      setStep(BOOT.length);
      setProgress(100);
      setPhase("ready");
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT.forEach((_, i) =>
      timers.push(setTimeout(() => setStep(i + 1), 150 * (i + 1)))
    );
    const start = 150 * BOOT.length + 120;
    timers.push(
      setTimeout(() => {
        const id = setInterval(() => {
          setProgress((p) => {
            if (p >= 100) {
              clearInterval(id);
              setPhase("ready");
              return 100;
            }
            return Math.min(100, p + 5);
          });
        }, 22);
        timers.push(id as unknown as ReturnType<typeof setTimeout>);
      }, start)
    );
    return () => timers.forEach((t) => clearTimeout(t));
  }, [phase, reduce]);

  const enter = () => setPhase((p) => (p === "ready" ? "entered" : p));

  // ---- enter on keypress (Enter / Space) ----
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && phase === "ready") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  // ---- lock scroll until entered ----
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  // ---- clock ----
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // ---- pointer parallax ----
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 45, damping: 18, mass: 0.6 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [4, -4]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [-3, 3]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-120, 120]);
  const glowY = useTransform(sy, [-0.5, 0.5], [-90, 90]);

  useEffect(() => {
    if (reduce) return;
    const el = sectionRef.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, mx, my]);

  // ---- entrance variant helpers ----
  const show = entered ? "show" : "hidden";
  const fade = (d = 0): Variants =>
    reduce
      ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4, delay: d } } }
      : {
          hidden: { opacity: 0, y: 24 },
          show: { opacity: 1, y: 0, transition: { duration: 0.85, ease, delay: d } },
        };
  const rise = (d = 0): Variants =>
    reduce
      ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4, delay: d } } }
      : {
          hidden: { y: "118%" },
          show: { y: 0, transition: { duration: 1.05, ease, delay: d } },
        };
  const grow = (d = 0): Variants =>
    reduce
      ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4, delay: d } } }
      : {
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 1.1, ease, delay: d } },
        };
  const anim = (v: Variants) => ({ variants: v, initial: "hidden" as const, animate: show });

  const filled = Math.round(progress / 5);
  const bar = "█".repeat(filled) + "░".repeat(20 - filled);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      {/* ambient: drifting grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift-slow opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#101010 1px, transparent 1px), linear-gradient(90deg, #101010 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(130% 100% at 50% 40%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(130% 100% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />
      {/* ambient: duotone wash (replaces the mountains) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/4 right-[-10%] h-[80vmin] w-[80vmin] rounded-full blur-[40px]"
        style={{
          x: reduce ? 0 : glowX,
          y: reduce ? 0 : glowY,
          background:
            "radial-gradient(circle, rgba(233,79,11,0.18) 0%, rgba(229,0,131,0.10) 40%, transparent 68%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===================== HERO CONTENT (NLC-style) ===================== */}
      <div
        className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-8 pt-7 sm:px-10 sm:pb-10 lg:px-14"
        style={{ perspective: 1400 }}
      >
        {/* corner registration marks */}
        {[
          "left-3 top-20 border-l border-t sm:left-7 sm:top-24",
          "right-3 top-20 border-r border-t sm:right-7 sm:top-24",
          "left-3 bottom-7 border-l border-b sm:left-7",
          "right-3 bottom-7 border-r border-b sm:right-7",
        ].map((pos) => (
          <motion.span
            key={pos}
            aria-hidden
            {...anim(fade(0.1))}
            className={`pointer-events-none absolute z-20 h-5 w-5 border-accent ${pos}`}
          />
        ))}

        {/* vertical ENS label pinned to the far left edge */}
        <motion.span
          aria-hidden
          {...anim(fade(0.5))}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 font-pixel text-[10px] uppercase tracking-[0.4em] text-paper-dim/50 lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          {profile.ens}
        </motion.span>

        {/* --- giant nameplate --- */}
        <motion.div
          className="flex flex-1 flex-col justify-center pt-4 pb-4"
          style={{
            rotateX: reduce ? 0 : rotateX,
            rotateY: reduce ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}

        >

          <motion.div {...anim(fade(0.15))} className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-paper-dim">
            <span className="h-2.5 w-2.5 bg-accent" />
            Full-Stack Engineer
            <span className="text-paper-dim/40">/</span>
            <span lang="ja">設計と実装</span>
          </motion.div>


          {/* line 1 */}
          <div className="overflow-hidden">
            <motion.h1
              {...anim(rise(0.2))}
              className="font-sans font-bold uppercase leading-[0.82] tracking-[-0.03em] text-paper"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}
            >
              Yashaswini
            </motion.h1>
          </div>
          <motion.div
            {...anim(grow(0.35))}
            className="mt-3 h-px w-full origin-left bg-line"
          />

          {/* line 2 */}
          <div className="mt-4 overflow-hidden">
            <motion.h1
              {...anim(rise(0.35))}
              className="font-sans font-bold uppercase leading-[0.82] tracking-[-0.03em] text-paper"
              style={{ fontSize: "clamp(3rem, 13vw, 11rem)" }}
            >
              Shaktawat
            </motion.h1>
          </div>
          <motion.div
            {...anim(grow(0.5))}
            className="relative mt-3 h-px w-full origin-left bg-line"
          >
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>

        {/* --- bottom three-part row --- */}
        <div className="grid grid-cols-1 items-end gap-8 border-t border-line pt-6 md:grid-cols-12">
          <motion.div {...anim(fade(0.6))} className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim">
              Who I am:
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-sans text-xl font-bold leading-none text-paper">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.08em] text-paper-dim">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            {...anim(fade(0.68))}
            className="font-sans text-lg leading-snug text-paper md:col-span-6 md:text-xl"
          >
            {/* Full-stack engineer building fast interfaces and{" "}
            <span className="text-accent">on-chain logic</span> — prediction markets, DeFi,
            and trading terminals, shipped at speed.
            */}
              I&apos;m a full-stack engineer who lives at the intersection of{" "}
              <span className="italic accent-text">clean interfaces</span> and{" "}
              <span className="italic accent-text">on-chain logic</span>. I build fast, ship faster,
              and obsess over the details nobody notices until they&apos;re gone.
           
          </motion.p>

          <motion.div
            {...anim(fade(0.76))}
            className="flex flex-col items-start gap-4 md:col-span-3 md:items-end"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-accent px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:text-[11px]"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-sans text-base font-bold text-paper transition-colors hover:text-accent"
            >
              Selected work
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ===================== BOOT / ENTER OVERLAY ===================== */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="boot"
            exit={{ opacity: 0, transition: { duration: 0.5, ease } }}
            onClick={enter}
            role={phase === "ready" ? "button" : undefined}
            tabIndex={phase === "ready" ? 0 : -1}
            aria-label={phase === "ready" ? "Enter portfolio" : "Loading"}
            className={`fixed inset-0 z-[100] flex flex-col justify-center bg-ink px-6 sm:px-12 ${
              phase === "ready" ? "cursor-pointer" : "cursor-default"
            }`}
          >
            {/* scanlines */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.6)" }}
            />

            <div className="relative mx-auto w-full max-w-2xl font-mono text-[12px] leading-relaxed text-paper/90 sm:text-sm">
              {BOOT.slice(0, step).map((l, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {l || "\u00A0"}
                </div>
              ))}

              {step >= BOOT.length && (
                <div className="mt-3">
                  <span className="text-accent">[ {bar} ]</span>{" "}
                  <span className="text-paper-dim">{progress}%</span>
                </div>
              )}

              <div className="mt-8 h-6">
                {phase === "ready" ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="inline-flex items-center gap-3 font-pixel text-[12px] uppercase tracking-[0.12em] text-paper"
                  >
                    <span className="text-accent">▶</span>
                    <span className="border border-accent px-3 py-1">press enter</span>
                    <span className="text-paper-dim">— or click anywhere</span>
                    <span className="animate-blink text-accent">_</span>
                  </motion.span>
                ) : (
                  <span className="font-mono text-xs text-paper-dim">
                    booting<span className="animate-blink">_</span>
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}