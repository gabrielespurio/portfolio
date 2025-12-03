import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Node.js", icon: "🟩", color: "bg-green-100 text-green-700 border-green-200" },
  { name: "Flutter", icon: "🦋", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { name: "Android", icon: "🤖", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { name: "iOS", icon: "🍎", color: "bg-gray-100 text-gray-800 border-gray-200" },
  { name: "Python", icon: "🐍", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { name: "SQL", icon: "🗄️", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { name: "JavaScript", icon: "📜", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { name: "TypeScript", icon: "📘", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { name: "Next.js", icon: "▲", color: "bg-neutral-100 text-neutral-800 border-neutral-200" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-background relative z-10">
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
              whileHover={{ y: -5, scale: 1.05 }}
              className={`
                flex items-center gap-3 px-6 py-4 rounded-2xl border-2 cursor-default shadow-sm transition-colors
                ${skill.color}
              `}
            >
              <span className="text-2xl" role="img" aria-label={skill.name}>{skill.icon}</span>
              <span className="font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
