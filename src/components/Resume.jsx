import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionTitle title="Resume" subtitle="Download my latest resume for detailed experience and achievements." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="gradient-card"
      >
        <div className="glass-card rounded-2xl p-8 text-center">
          <p className="mb-6 text-slate-600 transition-colors duration-300 dark:text-slate-300">
            Nalam Venkata Naga Vamsi Krishna — latest resume (PDF)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume-vamsi-krishna.pdf"
              target="_blank"
              rel="noreferrer"
              className="ghost-button inline-flex"
            >
              View Resume
            </a>
            <a
              href="/resume-vamsi-krishna.pdf"
              download="Nalam_Vamsi_Krishna_Resume.pdf"
              className="glow-button inline-flex"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume
