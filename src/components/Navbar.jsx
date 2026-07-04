import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl px-6 py-4 shadow-xl">

          
          <a
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            Abhi<span className="text-indigo-500">.</span>
          </a>

          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          
          <a
            href="#contact"
            className="hidden md:flex rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold hover:scale-105 hover:bg-indigo-700 transition"
          >
            Hire Me
          </a>

        
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

    
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white dark:bg-neutral-900 shadow-xl backdrop-blur-xl p-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-indigo-500 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-4 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white hover:bg-indigo-700 transition"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}