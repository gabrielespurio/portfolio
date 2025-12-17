import { lazy, Suspense } from "react";
import Hero from "@/components/hero";

const Services = lazy(() => import("@/components/services"));
const Skills = lazy(() => import("@/components/skills"));
const Projects = lazy(() => import("@/components/projects"));
const Contact = lazy(() => import("@/components/contact"));

function SectionLoader() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-background font-sans selection:bg-primary/30">

      <nav className="fixed top-0 w-full z-40 bg-background/95 border-b border-white/10 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="font-display font-bold text-xl tracking-tighter text-foreground">
          &lt;GE /&gt;
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projetos</a>
          <a href="#skills" className="hover:text-primary transition-colors">Habilidades</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="w-full py-6 text-center text-muted-foreground text-sm border-t border-white/10 bg-background">
        <p>© {new Date().getFullYear()} Gabriel Espurio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
