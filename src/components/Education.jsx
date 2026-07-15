import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { education } from '../data/portfolioData'

function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionTitle
        title="Education"
        subtitle="A quick timeline of my academic journey and core learning milestones."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/70 via-cyan-400/60 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {education.map((item, index) => {
            const Icon = item.icon
            const isRight = index % 2 === 1

            return (
              <motion.article
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative md:w-1/2 ${isRight ? 'md:ml-auto md:pl-10' : 'md:pr-10'}`}
              >
                <span className={`absolute left-4 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white text-fuchsia-600 shadow-[0_0_16px_rgba(217,70,239,0.2)] transition-colors duration-300 dark:border-fuchsia-300/60 dark:bg-slate-900 dark:text-fuchsia-300 dark:shadow-[0_0_16px_rgba(217,70,239,0.45)] ${
                  isRight
                    ? 'md:right-auto md:left-0 md:-translate-x-1/2'
                    : 'md:left-auto md:right-0 md:translate-x-1/2'
                }`}>
                  <Icon />
                </span>

                <div className="gradient-card ml-12 md:ml-0">
                  <div className="glass-card rounded-2xl p-6">
                    <p className="text-sm font-medium text-cyan-600 dark:text-cyan-300">{item.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">{item.level}</h3>
                    <p className="mt-2 text-sm text-fuchsia-600 dark:text-fuchsia-200">{item.institution}</p>
                    <p className="mt-3 text-slate-600 transition-colors duration-300 dark:text-slate-300">{item.details}</p>
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

export default Education
