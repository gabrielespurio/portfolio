import { motion } from "framer-motion";

const experience = [
  {
    id: 1,
    role: "Desenvolvedor Full Stack Senior",
    company: "TechSolutions Inc.",
    period: "2022 - Presente",
    description: "Liderança técnica de equipe frontend, migração de legado para Next.js e implementação de CI/CD."
  },
  {
    id: 2,
    role: "Desenvolvedor Mobile",
    company: "AppNova Startups",
    period: "2020 - 2022",
    description: "Desenvolvimento de 5 aplicativos publicados nas lojas (iOS/Android) utilizando Flutter e React Native."
  },
  {
    id: 3,
    role: "Desenvolvedor Junior",
    company: "WebStudio Digital",
    period: "2019 - 2020",
    description: "Manutenção de sites institucionais, criação de landing pages e integração com APIs REST."
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground">Minha jornada e crescimento no mercado de tecnologia.</p>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 space-y-12">
          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)] group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.role}</h3>
                <span className="hidden sm:inline text-muted-foreground">•</span>
                <span className="text-primary font-medium">{item.company}</span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-semibold uppercase tracking-wide">
                  {item.period}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
