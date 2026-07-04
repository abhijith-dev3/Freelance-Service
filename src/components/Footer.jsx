import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Abhi<span className="text-indigo-500">.</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Building fast, modern, and conversion-focused websites that help businesses grow online.
            </p>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3 text-sm"
          >
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">
              Home
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">
              About
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">
              Projects
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500">
              Contact
            </a>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let’s build something great 🚀
            </h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Available for freelance projects and collaborations.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

      
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Abhi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}