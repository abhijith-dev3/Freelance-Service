import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">

    
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-bold"
        >
          Let’s Work Together
        </motion.h2>

        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Have an idea? Let’s build it 🚀
        </p>

    
        <div className="grid md:grid-cols-3 gap-6 mt-16">

     
          <motion.a
            href="tel:8943445730"
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl border bg-gray-50 dark:bg-neutral-900 block"
          >
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="text-gray-600 mt-2">8943445730</p>
          </motion.a>

          
          <motion.a
            href="mailto:abhijith4389@gmail.com"
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl border bg-gray-50 dark:bg-neutral-900 block"
          >
            <h3 className="text-xl font-semibold">📧 Email</h3>
            <p className="text-gray-600 mt-2">abhijith4389@gmail.com</p>
          </motion.a>

      
          <motion.a
            href="https://wa.me/918943445730"
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl border bg-gray-50 dark:bg-neutral-900 block"
          >
            <h3 className="text-xl font-semibold">💬 WhatsApp</h3>
            <p className="text-gray-600 mt-2">Quick response chat,click</p>
          </motion.a>

        </div>

      </div>
    </section>
  );
}