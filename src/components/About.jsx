import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

     
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            I build websites that don’t just look good —{" "}
            <span className="text-indigo-500">they bring results.</span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            I help startups, entrepreneurs, and small businesses turn their ideas into
            fast, modern, and responsive websites that actually convert visitors into customers.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            My focus is simple: clean design, strong performance, and user experience that builds trust instantly.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-xl font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >


          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🚀 My Approach
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              I focus on performance-first development with clean UI, scalable structure, and modern design systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🎯 What I Focus On
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Conversion-focused design, fast loading speed, mobile-first responsiveness, and smooth user experience.
            </p>
          </div>

        
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              💡 Mindset
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
              Every pixel should have a purpose. Every interaction should feel intentional and premium.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}