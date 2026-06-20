"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
        scrolled ? "bg-ink/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-grid flex items-center justify-between py-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-acid transition-transform duration-500 group-hover:scale-150" />
          <span className="font-mono text-sm tracking-tight text-paper">
            YSS<span className="text-paper-dim">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-paper-dim transition-colors hover:text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 font-mono text-xs text-paper-dim">
          <span className="hidden sm:inline">IST</span>
          <span className="tabular-nums text-paper">{time || "--:--"}</span>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
        </div>
      </nav>
      <div className="hairline" />
    </motion.header>
  );
}
