"use client";

import { useState, type ReactNode } from "react";
import { profile, socials } from "@/data/content";

const CALENDLY_URL = "https://calendly.com/yashaswini_singh/30-minute-meeting";

const ICONS: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  "X / Twitter": (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.96 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    </svg>
  ),
  Devfolio: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M3 3h11.5a6.5 6.5 0 0 1 0 13H7v5H3V3Zm4 4v5h7.5a2.5 2.5 0 0 0 0-5H7Z" />
    </svg>
  ),
};

const CalendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden className="h-4 w-4">
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 2.5v4M16 2.5v4" strokeLinecap="round" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line pt-14 sm:pt-20">
      <div className="container-grid">
        <div className="flex items-center justify-between gap-4">
          <span className="section-label">VI — contact</span>
          <span className="section-label hidden sm:inline">say hi</span>
        </div>

        <div className="mt-14">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-paper-dim">
            Got an idea worth building?
          </p>
          <button
            onClick={copyEmail}
            data-cursor="hover"
            className="group mt-6 block w-full text-left"
          >
            <span className="block break-all font-serif text-[clamp(1.4rem,4vw,3rem)] font-light leading-[1.05] text-paper transition-colors duration-500 group-hover:text-accent">
              {profile.email}
            </span>
            <span className="mt-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-paper-dim">
              {copied ? "✓ copied to clipboard" : "click to copy →"}
            </span>
          </button>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="group mt-8 inline-flex items-center gap-3 border border-line px-5 py-3 transition-colors duration-500 hover:border-accent hover:bg-ink-soft"
          >
            <span className="text-paper-dim transition-colors group-hover:text-accent">
              {CalendarIcon}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper transition-colors group-hover:text-accent">
              Book a 30-min call
            </span>
            <span className="text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-ink px-4 py-7 transition-colors duration-500 hover:bg-ink-soft"
            >
              <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-paper-dim transition-colors group-hover:text-accent">
                <span className="text-paper-dim transition-colors group-hover:text-accent">
                  {ICONS[s.label]}
                </span>
                {s.label}
              </p>
              <p className="mt-3 flex items-center gap-2 font-sans text-base text-paper transition-colors group-hover:text-acid">
                {s.handle}
                <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </p>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-paper-dim">
            © {new Date().getFullYear()} {profile.shortName}. Built with Next.js, Framer Motion &amp; too much coffee.
          </p>
          <p className="font-mono text-xs text-paper-dim">
            Designed in the dark · {profile.ens}
          </p>
        </div>
      </div>
    </footer>
  );
}
