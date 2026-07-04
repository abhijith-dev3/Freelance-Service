import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects take 3–10 days depending on complexity. Simple landing pages are faster, while full websites take longer.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can completely redesign your current website to make it modern, faster, and more conversion-focused.",
  },
  {
    question: "Do you provide hosting and deployment?",
    answer:
      "Yes. I can deploy your website on platforms like Vercel or Netlify and help you connect your domain.",
  },
  {
    question: "Can I edit the website later?",
    answer:
      "Yes. The code is clean and structured so you can easily update content or I can guide you if needed.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I mainly use React, Tailwind CSS, and Framer Motion to build fast, modern, and responsive websites.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">

      
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Everything you need to know before starting a project
        </p>

   
        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
           
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

     
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-black"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}