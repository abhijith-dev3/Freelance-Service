import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$10 - $20",
    description: "Perfect for simple landing pages or personal websites.",
    features: [
      "1 Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Fast Delivery",
    ],
  },
  {
    name: "Professional",
    price: "$40 - $50",
    description: "Best choice for freelancers and small businesses.",
    features: [
      "Up to 5 Pages",
      "Modern UI/UX Design",
      "Responsive + Mobile First",
      "SEO Optimization",
      "Animations (Framer Motion)",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "$200+",
    description: "For startups and companies that want premium quality.",
    features: [
      "Full Website / SaaS UI",
      "Custom Design System",
      "Advanced Animations",
      "Performance Optimization",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Pricing Plans
        </motion.h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Transparent pricing based on value, not hourly confusion
        </p>

        
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border transition shadow-sm hover:shadow-xl ${
                plan.highlight
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 scale-105"
                  : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900"
              }`}
            >

            
              {plan.highlight && (
                <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                  Most Popular
                </span>
              )}

              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>

              
              <p className="text-2xl font-bold text-indigo-500 mt-2">
                {plan.price}
              </p>

              
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {plan.description}
              </p>

              
              <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              
              <a
                href="#contact"
                className={`mt-6 block text-center px-5 py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:scale-105"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}