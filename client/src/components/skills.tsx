import { motion } from "framer-motion";

const skills = [
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-500/50" 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    color: "bg-green-500/10 text-green-300 border-green-500/20 hover:border-green-500/50" 
  },
  { 
    name: "Next.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", 
    // Next.js icon is black, might need filter for dark mode or a white version. 
    // Using a white SVG filter via CSS or class for the image if needed, or just a background.
    // Let's add a white bg for Next.js or use a different source.
    // Actually, devicon has nextjs-original-wordmark or plain. 
    // Let's try simpleicons for nextjs white.
    customIcon: "https://cdn.simpleicons.org/nextdotjs/white",
    color: "bg-white/5 text-white border-white/10 hover:border-white/30" 
  },
  { 
    name: "React Native", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-500/50" 
  },
  { 
    name: "Figma", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    color: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-500/50" 
  },
  { 
    name: "SQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:border-indigo-500/50" 
  },
];

export default function Skills() {
  return (
    <section className="py-24 relative z-10">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Minhas Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino para transformar ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`
                flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] group
                ${skill.color}
              `}
            >
              <div className="w-16 h-16 flex items-center justify-center relative">
                 {/* Glow behind icon */}
                 <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <img 
                  src={skill.customIcon || skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 object-contain relative z-10 drop-shadow-lg"
                 />
              </div>
              <span className="font-semibold tracking-wide text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
