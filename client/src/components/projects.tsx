import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from "@assets/generated_images/service_marketplace_app_mockup.png";
import project2 from "@assets/generated_images/burger_restaurant_landing_page_mockup.png";
import project3 from "@assets/generated_images/analytics_dashboard_mockup.png";

const projects = [
  {
    id: 1,
    title: "App Mobile - Marketplace de serviços",
    category: "Mobile Development",
    image: project1,
    tags: ["React Native", "Figma", "Node.js", "SQL"],
    description: "Plataforma completa conectando profissionais e clientes, com agendamento, pagamentos seguros e avaliações em tempo real.",
    year: "2024"
  },
  {
    id: 2,
    title: "Landing Page - Hamburgueria Artesanal",
    category: "Web Design",
    image: project2,
    tags: ["React", "Figma", "Tailwind"],
    description: "Site moderno e apetitoso para hamburgueria gourmet, focado em conversão e experiência visual imersiva.",
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Projetos Destaques</h2>
            <p className="text-muted-foreground">Conheça meus trabalhos mais recentes.</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary/10">
            Ver todos os projetos <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex w-full ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              <div className="w-full md:w-[85%] lg:w-[75%] relative group">
                
                {/* Neon Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition duration-500 group-hover:blur-md animate-pulse" />
                
                <div className="relative flex flex-col md:flex-row gap-6 lg:gap-8 bg-[#0f1035] p-6 md:p-8 rounded-2xl border border-white/10 h-full">
                  
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden aspect-video md:aspect-auto group-hover:shadow-2xl transition-all duration-500">
                     <div className="absolute top-3 left-3 z-20">
                      <Badge className="bg-black/60 text-white backdrop-blur-md border border-white/10">
                        {project.year}
                      </Badge>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center w-full md:w-1/2">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-3 border-primary/50 text-primary bg-primary/5 px-3 py-1">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/5 text-blue-100 border border-white/10 font-medium px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <Button className="bg-white text-primary hover:bg-gray-100 font-semibold rounded-full px-6 group/btn">
                        Ver Detalhes
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 hover:text-white text-white/70">
                        <Github className="w-5 h-5" />
                      </Button>
                    </div>
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
