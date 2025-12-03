import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", color: "bg-blue-500/10 text-blue-300 border-blue-500/30" },
  { name: "Node.js", icon: "🟩", color: "bg-green-500/10 text-green-300 border-green-500/30" },
  { name: "Flutter", icon: "🦋", color: "bg-sky-500/10 text-sky-300 border-sky-500/30" },
  { name: "Android", icon: "🤖", color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30" },
  { name: "iOS", icon: "🍎", color: "bg-gray-500/10 text-gray-200 border-gray-500/30" },
  { name: "Python", icon: "🐍", color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30" },
  { name: "SQL", icon: "🗄️", color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30" },
  { name: "JavaScript", icon: "📜", color: "bg-amber-500/10 text-amber-300 border-amber-500/30" },
  { name: "TypeScript", icon: "📘", color: "bg-blue-600/10 text-blue-300 border-blue-600/30" },
  { name: "Next.js", icon: "▲", color: "bg-white/5 text-white border-white/20" },
];

export default function Skills() {
  return (
    <section className="py-20 relative z-10">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Minhas Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um conjunto diversificado de tecnologias para construir aplicações completas e escaláveis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className={`
                flex items-center gap-3 px-6 py-4 rounded-2xl border cursor-default backdrop-blur-sm transition-all
                ${skill.color}
              `}
            >
              <span className="text-2xl drop-shadow-md" role="img" aria-label={skill.name}>{skill.icon}</span>
              <span className="font-semibold tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
