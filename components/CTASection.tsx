'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Start Your Green Energy Journey Today
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of homes and businesses across India that are saving money and the planet with AeroSun Energy. Get a free consultation today.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-accent hover:text-white hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
