import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description:
      "We discuss your goals, business needs, and target audience to understand exactly what to build.",
  },
  {
    title: "Design",
    description:
      "I create a clean, modern UI focused on user experience, performance, and conversion.",
  },
  {
    title: "Develop",
    description:
      "The design is converted into a fast, responsive, and scalable web application using modern tools.",
  },
  {
    title: "Launch",
    description:
      "Final testing, optimization, and deployment to ensure everything runs smoothly in production.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

    
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          How I Work
        </motion.h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          A simple, transparent process from idea to launch
        </p>

        
        <div className="mt-16 relative">

          
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                <div className="flex-1 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                
                <div className="hidden md:flex w-10 h-10 rounded-full bg-indigo-500 text-white items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}