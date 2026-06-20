"use client";

import { useState } from "react";
import { profile, socials } from "@/data/content";

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
    <footer id="contact" className="relative overflow-hidden border-t border-line pt-24 sm:pt-32">
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
            <span className="block break-all font-serif text-[clamp(1.8rem,7vw,6rem)] font-light leading-[0.95] text-paper transition-colors duration-500 group-hover:text-accent">
              {profile.email}
            </span>
            <span className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-paper-dim">
              {copied ? "✓ copied to clipboard" : "click to copy →"}
            </span>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-ink px-1 py-7 transition-colors duration-500 hover:bg-ink-soft"
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-paper-dim">
                {s.label}
              </p>
              <p className="mt-2 flex items-center gap-2 font-sans text-base text-paper transition-colors group-hover:text-acid">
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
