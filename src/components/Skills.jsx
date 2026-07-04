import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS / Tailwind", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 75 },
      { name: "Vite", level: 70 },
      { name: "Figma", level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Skills & Expertise
        </motion.h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Technologies I use to build fast, modern, and scalable web experiences
        </p>

        
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}