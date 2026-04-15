'use client'

import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, Layers, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Innovation',
    desc: 'We pioneer hybrid solar + wind technology with IoT-enabled smart controllers and next-generation turbine designs that others are still testing.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
    title: 'Reliability',
    desc: 'Our systems are engineered and certified for 25+ years of operation, backed by round-the-clock support and rapid-response maintenance teams.',
  },
  {
    icon: <Layers className="h-8 w-8 text-accent" />,
    title: 'Scalable Solutions',
    desc: 'From a 1 kW rooftop kit to a multi-megawatt commercial array, every AeroSun system is modular and grows with your energy demands.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Designed for India',
    desc: 'Built to handle India\'s diverse climates and grid conditions — from bustling urban rooftops to remote rural off-grid sites — with local language support.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Our Advantages</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Why Choose AeroSun Energy
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 p-3 inline-block rounded-xl bg-gray-50 dark:bg-gray-700 shadow-sm">
                {r.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
