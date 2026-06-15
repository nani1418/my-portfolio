import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle title="Skills" subtitle="Technologies and tools I use to deliver quality software." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, icon: Icon, items }, index) => (
          <motion.article
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="gradient-card"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-white/10 p-2 text-fuchsia-300">
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Skills
