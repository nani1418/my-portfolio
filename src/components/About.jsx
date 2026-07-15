import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { about } from '../data/portfolioData'

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionTitle title="About Me" subtitle="Building with purpose, precision, and curiosity." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        <article className="gradient-card">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">Professional Summary</h3>
            <p className="text-slate-600 transition-colors duration-300 dark:text-slate-300">{about.summary}</p>
          </div>
        </article>
        <article className="gradient-card">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">Career Goals</h3>
            <p className="text-slate-600 transition-colors duration-300 dark:text-slate-300">{about.goals}</p>
          </div>
        </article>
        <article className="gradient-card">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">Passion</h3>
            <p className="text-slate-600 transition-colors duration-300 dark:text-slate-300">{about.passion}</p>
          </div>
        </article>
      </motion.div>
    </section>
  )
}

export default About
