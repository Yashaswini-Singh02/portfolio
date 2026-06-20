import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Silkscreen, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Pixel / terminal voice — eyebrows, level badges, the skill tree
const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
});

// Editorial voice — the human / about section
const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yashaswini Singh Shaktawat — Full-Stack Engineer",
  description:
    "Full-stack engineer building fast interfaces and on-chain logic. Web3, prediction markets, DeFi & trading terminals. 11× hackathon winner.",
  keywords: [
    "Yashaswini Singh Shaktawat",
    "Full-stack engineer",
    "Web3",
    "Next.js",
    "DeFi",
    "prediction markets",
    "Solana",
  ],
  authors: [{ name: "Yashaswini Singh Shaktawat" }],
  openGraph: {
    title: "Yashaswini Singh Shaktawat — Full-Stack Engineer",
    description:
      "Full-stack engineer building fast interfaces and on-chain logic. 11× hackathon winner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${pixel.variable} ${serif.variable}`}
    >
      <body className="bg-ink bg-scanlines text-paper antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
