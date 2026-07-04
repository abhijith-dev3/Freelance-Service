import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white dark:bg-black"
    >
   
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

       
        <div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300 mb-6"
          >
            🚀 Available for freelance work
          </motion.p>

          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Building websites that{" "}
            <span className="text-indigo-500">help businesses grow.</span>
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg"
          >
            I design and build fast, modern, and responsive websites that
            convert visitors into customers and help brands stand out online.
          </motion.p>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900 shadow-2xl overflow-hidden">

            
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-gray-500">portfolio.js</span>
            </div>

        
            <div className="p-6 font-mono text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <span className="text-purple-500">const</span> developer = {"{"}
              </p>
              <p className="pl-4">name: "Abhi",</p>
              <p className="pl-4">role: "Frontend Developer",</p>
              <p className="pl-4">stack: ["React", "Tailwind", "JS"],</p>
              <p className="pl-4">focus: "clean UI & performance",</p>
              <p className="pl-4 text-green-500">available: true</p>
              <p>{"}"}</p>
            </div>
          </div>

        
          <div className="absolute -top-6 -right-6 bg-white dark:bg-neutral-800 shadow-lg px-4 py-2 rounded-xl text-sm font-semibold">
            ⚡ Fast & Modern UI
          </div>
        </motion.div>
      </div>
    </section>
  );
}