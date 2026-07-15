import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import { owner } from '../data/portfolioData'

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionTitle title="Contact" subtitle="Let’s collaborate on impactful software and ML projects." />
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="gradient-card"
        >
          <div className="glass-card rounded-2xl p-6">
            {/* Placeholder form for quick contact capture */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-300/80 bg-slate-100/50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-fuchsia-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:bg-transparent"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-slate-300/80 bg-slate-100/50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-fuchsia-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:bg-transparent"
              />
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full rounded-xl border border-slate-300/80 bg-slate-100/50 px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-fuchsia-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:focus:bg-transparent"
              />
              <button type="button" className="glow-button w-full">
                Send Message
              </button>
            </div>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="gradient-card"
        >
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">Direct Contact</h3>
            <div className="mt-5 space-y-4 text-slate-600 transition-colors duration-300 dark:text-slate-300">
              <a href={`tel:+91${owner.phone}`} className="flex items-center gap-3 transition hover:text-fuchsia-600 dark:hover:text-fuchsia-300">
                <FaPhone /> +91 {owner.phone}
              </a>
              <a href={`mailto:${owner.email}`} className="flex items-center gap-3 transition hover:text-fuchsia-600 dark:hover:text-fuchsia-300">
                <FaEnvelope /> {owner.email}
              </a>
              <a href={`mailto:${owner.altEmail}`} className="flex items-center gap-3 transition hover:text-fuchsia-600 dark:hover:text-fuchsia-300">
                <FaEnvelope /> {owner.altEmail}
              </a>
              <a href={owner.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-fuchsia-600 dark:hover:text-fuchsia-300">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={owner.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-fuchsia-600 dark:hover:text-fuchsia-300">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
