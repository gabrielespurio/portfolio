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
    description: "Aplicativo completo de compras com carrinho, pagamentos e rastreamento em tempo real."
  },
  {
    id: 2,
    title: "Site Institucional - FinTech",
    category: "Web Development",
    image: project2,
    tags: ["React", "Tailwind", "Framer Motion"],
    description: "Landing page de alta conversão para startup financeira com animações fluidas."
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    category: "Web App",
    image: project3,
    tags: ["Next.js", "TypeScript", "Recharts"],
    description: "Painel administrativo para visualização de dados complexos e gestão de métricas."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Projetos Destaques</h2>
            <p className="text-muted-foreground">Alguns dos meus melhores trabalhos recentes.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
            Ver todos os projetos <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-full">
                    Ver Detalhes
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full border-slate-200">
                    <Github className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
