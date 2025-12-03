import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@assets/generated_images/e-commerce_mobile_app_mockup.png";
import project2 from "@assets/generated_images/corporate_website_mockup.png";
import project3 from "@assets/generated_images/analytics_dashboard_mockup.png";

const projects = [
  {
    id: 1,
    title: "App Mobile - E-commerce",
    category: "Mobile Development",
    image: project1,
    tags: ["Flutter", "Firebase", "Dart"],
    description: "Aplicativo completo de compras com carrinho, pagamentos e rastreamento em tempo real.",
    year: "2024"
  },
  {
    id: 2,
    title: "Site Institucional - FinTech",
    category: "Web Development",
    image: project2,
    tags: ["React", "Tailwind", "Framer Motion"],
    description: "Landing page de alta conversão para startup financeira com animações fluidas.",
    year: "2023"
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "Web App",
    image: project3,
    tags: ["Next.js", "TypeScript", "Recharts"],
    description: "Painel administrativo para visualização de dados complexos e gestão de métricas.",
    year: "2023"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Projetos Destaques</h2>
            <p className="text-muted-foreground">Uma linha do tempo dos meus trabalhos recentes.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
            Ver todos os projetos <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(124,58,237,0.6)] z-10" />
              
              <div className="flex flex-col lg:flex-row gap-6 glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-colors bg-card/40 backdrop-blur-md">
                {/* Image Section */}
                <div className="w-full lg:w-1/3 relative h-48 lg:h-auto rounded-lg overflow-hidden shrink-0">
                   <div className="absolute top-3 left-3 z-20">
                    <Badge className="bg-black/60 text-white backdrop-blur-md border border-white/10">
                      {project.year}
                    </Badge>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
                      {project.category}
                    </Badge>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-white/80 border border-white/10 font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 sm:flex-none bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all rounded-full">
                      Ver Detalhes
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full border-white/10 hover:bg-white/10 hover:text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
