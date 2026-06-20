import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Marquee reverse />
        <Skills />
        <Awards />
        <Currently />
        <Contact />
      </main>
    </>
  );
}
