"use client";

import { GitHubCalendar } from "react-github-calendar";

const USERNAME = "Yashaswini-Singh02";

// dark, on-palette ramp — empty cells blend into the card, hot cells hit the accent
const THEME = {
  light: ["#1a1a1a", "#5a2208", "#92380e", "#c14310", "#e94f0b"],
  dark: ["#1a1a1a", "#5a2208", "#92380e", "#c14310", "#e94f0b"],
};

export default function GithubGraph() {
  return (
    <div className="container-grid mt-10 sm:mt-14">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-soft/60 p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="section-label">~/contributions</span>
            <h3 className="mt-3 font-serif text-2xl font-light italic leading-tight text-paper sm:text-3xl">
              the commit garden
            </h3>
            <p className="mt-2 font-mono text-xs leading-relaxed text-paper-dim">
              A year of late-night builds, one square at a time.
            </p>
          </div>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="group/cta inline-flex items-center gap-2 whitespace-nowrap font-pixel text-[10px] uppercase tracking-[0.1em] text-accent"
          >
            @{USERNAME}
            <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        <div className="mt-8 overflow-x-auto pb-1 text-paper-dim">
          <GitHubCalendar
            username={USERNAME}
            theme={THEME}
            colorScheme="dark"
            blockSize={11}
            blockMargin={3}
            blockRadius={2}
            fontSize={11}
            showColorLegend={false}
          />
        </div>
      </div>
    </div>
  );
}
