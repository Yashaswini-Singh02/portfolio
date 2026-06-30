import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yashaswini Singh Shaktawat — Resume",
  description: "Resume of Yashaswini Singh Shaktawat, Full-Stack Engineer.",
};

const RESUME_PATH = "/resume/Yashaswini_Singh_Resume.pdf";

export default function CvPage() {
  return (
    <main className="h-screen w-screen bg-ink">
      <iframe
        src={RESUME_PATH}
        title="Yashaswini Singh Shaktawat — Resume"
        className="hidden h-full w-full border-0 sm:block"
      />
      <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center sm:hidden">
        <h1 className="font-sans text-xl text-paper">
          Yashaswini Singh Shaktawat — Resume
        </h1>
        <p className="font-sans text-sm text-paper-dim">
          Inline preview isn&apos;t supported on this browser.
        </p>
        <a
          href={RESUME_PATH}
          download
          className="rounded-md bg-accent px-4 py-2 font-sans text-sm font-semibold text-ink"
        >
          Download PDF
        </a>
      </div>
    </main>
  );
}
