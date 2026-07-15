import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { experience } from '../data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionTitle
        title="Experience"
        subtitle="Hands-on internship experience focused on AI and machine learning."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-fuchsia-400/60 to-transparent" />

        <div className="space-y-8">
          {experience.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative ml-12"
              >
                <span className="absolute -left-[38px] top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-white text-cyan-600 shadow-[0_0_16px_rgba(34,211,238,0.2)] transition-colors duration-300 dark:border-cyan-300/60 dark:bg-slate-900 dark:text-cyan-300 dark:shadow-[0_0_16px_rgba(34,211,238,0.45)]">
                  <Icon />
                </span>

                <div className="gradient-card">
                  <div className="glass-card rounded-2xl p-6">
                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-300">{item.duration}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-fuchsia-600 dark:text-fuchsia-200">{item.organization}</p>

                    <ul className="mt-4 space-y-3 text-slate-600 transition-colors duration-300 dark:text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-fuchsia-500 dark:bg-fuchsia-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
