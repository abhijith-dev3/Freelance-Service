import { motion } from "framer-motion";

const items = [
  "⚡ Fast Delivery",
  "📱 Mobile First",
  "🔒 Secure Code",
  "🚀 Performance Optimized",
  "🎯 SEO Friendly",
  "💎 Clean UI/UX",
];

export default function TrustBar() {
  return (
    <section className="w-full py-6 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex whitespace-nowrap"
      >
        <div className="flex gap-12 animate-[scroll_20s_linear_infinite]">
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}