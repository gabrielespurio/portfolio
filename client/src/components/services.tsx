import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Sparkles,
  Bot
} from "lucide-react";

import iconGestao from "@assets/Gemini_Generated_Image_f453ohf453ohf453_1764948813807.png";
import iconMobile from "@assets/Gemini_Generated_Image_fb4vbvfb4vbvfb4v_1764948813808.png";
import iconIA from "@assets/Gemini_Generated_Image_6eljzi6eljzi6elj_1764948813806.png";
import iconChatbot from "@assets/Gemini_Generated_Image_dhol0zdhol0zdhol_1764948813806.png";

type ServiceType = {
  id: number;
  image?: string;
  icon?: typeof Bot;
  title: string;
  description: string;
  features: string[];
  gradient: string;
};

const services: ServiceType[] = [
  {
    id: 1,
    image: iconGestao,
    title: "Sistemas de Gestão",
    description: "Soluções completas para gerenciamento empresarial, desde controle financeiro até gestão de equipes e processos.",
    features: ["ERP Personalizado", "Dashboards", "Relatórios"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    image: iconMobile,
    title: "Aplicativos Móveis",
    description: "Apps nativos e híbridos para iOS e Android, com foco em performance e experiência do usuário.",
    features: ["React Native", "iOS & Android", "UI/UX"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    image: iconIA,
    title: "Sistemas com IA",
    description: "Integração de inteligência artificial para automatizar processos e gerar insights valiosos.",
    features: ["Machine Learning", "Análise Preditiva", "Automação"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    image: iconChatbot,
    title: "Chatbots",
    description: "Chatbots inteligentes para atendimento 24/7, integrados às principais plataformas de comunicação.",
    features: ["WhatsApp", "Telegram", "Web Chat"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    icon: Bot,
    title: "Agentes Inteligentes",
    description: "Agentes autônomos de atendimento com processamento de linguagem natural e aprendizado contínuo.",
    features: ["NLP Avançado", "Multi-canal", "Self-learning"],
    gradient: "from-amber-500 to-orange-500",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

function ServiceIcon({ service, size = "normal" }: { service: ServiceType; size?: "normal" | "large" }) {
  if (service.image) {
    return (
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-full object-contain"
        style={{ imageRendering: 'auto' }}
        loading="eager"
      />
    );
  }
  if (service.icon) {
    const Icon = service.icon;
    const iconSize = size === "large" ? "w-10 h-10" : "w-8 h-8";
    return <Icon className={`${iconSize} text-amber-400`} />;
  }
  return null;
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/5 px-4 py-1.5">
            <Sparkles className="w-3 h-3 mr-2" />
            Soluções Digitais
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Serviços mais procurados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforme sua empresa com tecnologia de ponta. Conheça as soluções que mais impactam negócios.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.slice(0, 3).map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              data-testid={`card-service-${service.id}`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500`} />
              
              <div className="relative h-full bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 bg-white/5 p-1">
                  <ServiceIcon service={service} size="large" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <Badge 
                      key={feature} 
                      variant="secondary" 
                      className="bg-white/5 text-white/80 border border-white/10 text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-white/70 hover:text-white hover:bg-white/5 group/btn"
                  data-testid={`button-service-${service.id}`}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
        >
          {services.slice(3, 5).map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              data-testid={`card-service-${service.id}`}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500`} />
              
              <div className="relative h-full bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white/5 p-1">
                    <ServiceIcon service={service} size="large" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="secondary" 
                        className="bg-white/5 text-white/80 border border-white/10 text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-white/70 hover:text-white hover:bg-white/5 group/btn flex-shrink-0"
                    data-testid={`button-service-${service.id}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-full p-2 pl-6 border border-white/10">
            <span className="text-white/80 text-sm">Precisa de uma solução personalizada?</span>
            <Button 
              className="bg-white text-primary hover:bg-gray-100 font-semibold rounded-full px-6"
              onClick={() => window.open('https://wa.me/5517992204822', '_blank')}
              data-testid="button-custom-solution"
            >
              Vamos conversar
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
