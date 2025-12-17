import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import profilePic from "@assets/_Image_7_1764856847485.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-primary text-white pt-20 pb-32">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-75 blur transition duration-1000 group-hover:opacity-100 animate-pulse" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={profilePic} 
                alt="Gabriel Espurio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-blue-200 font-medium tracking-wide uppercase text-sm mb-3">
              &lt;/&gt; Desenvolvedor Web & Mobile
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Gabriel Espurio<br/>Fernandes
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 font-light">
              Transformo ideias em soluções digitais modernas e funcionais
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 font-light">
              Desenvolvimento web e mobile focado em performance, qualidade e resultado para o seu negócio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold rounded-full px-8 h-12"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold rounded-full px-8 h-12 backdrop-blur-sm"
              onClick={() => window.open('https://wa.me/5517992204822', '_blank')}
            >
              Entrar em contato
              <SiWhatsapp className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}
