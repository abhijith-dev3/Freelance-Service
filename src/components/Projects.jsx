import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="w-full flex justify-center py-16 " id ="projects">

    
      <div className="w-full max-w-6xl px-6 space-y-10">

        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-sm">
            Real-world style case studies and UI builds
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >

              
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-3 py-2 bg-white text-black text-sm rounded-lg font-semibold"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-3 py-2 bg-black text-white text-sm rounded-lg font-semibold"
                  >
                    Code
                  </a>
                </div>
              </div>

              
              <div className="flex flex-col flex-1 p-5 space-y-3">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

        
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                
                <div className="flex gap-4 pt-2">
                  <a className="flex items-center gap-1 text-sm text-indigo-600">
                    <FiExternalLink /> Live
                  </a>
                  <a className="flex items-center gap-1 text-sm text-gray-600">
                    <FiGithub /> Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}