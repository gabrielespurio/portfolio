import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center justify-between px-6 md:px-12 transition-all duration-300">
        <div className="font-display font-bold text-xl tracking-tighter text-foreground">
          &lt;GE /&gt;
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#" className="hover:text-primary transition-colors">Habilidades</a>
          <a href="#" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
