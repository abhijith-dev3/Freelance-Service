import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "100%",
    label: "Responsive Designs",
  },
  {
    value: "24h",
    label: "Average Response",
  },
  {
    value: "5★",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Results that speak for themselves
        </motion.h2>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900 text-center shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-500">
                {item.value}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}