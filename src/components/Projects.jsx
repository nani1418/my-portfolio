import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import SectionTitle from './SectionTitle'
import { projects } from '../data/portfolioData'

const filters = ['All', 'Web', 'ML', 'Portfolio']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="section-shell">
      <SectionTitle title="Projects" subtitle="Selected work that demonstrates product thinking and technical depth." />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-950 hover:shadow-[0_0_16px_rgba(217,70,239,0.45)]'
                : 'border border-slate-300 bg-slate-100/50 text-slate-600 hover:bg-slate-200/50 hover:text-slate-800 dark:border-white/20 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/15 dark:hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="gradient-card"
          >
            <div className="glass-card overflow-hidden rounded-2xl">
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover transition duration-500 hover:scale-105" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-slate-600 transition-colors duration-300 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-cyan-700 transition-colors duration-300 dark:border-white/15 dark:bg-white/5 dark:text-cyan-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-100/50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-fuchsia-500/10 hover:shadow-[0_0_16px_rgba(217,70,239,0.2)] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-fuchsia-500/30 dark:hover:shadow-[0_0_16px_rgba(217,70,239,0.4)]"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
