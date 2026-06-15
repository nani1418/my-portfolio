import { motion } from 'framer-motion'
import { certifications } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionTitle title="Certifications" subtitle="Continuous learning with industry-recognized credentials." />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((certification, index) => (
          <motion.article
            key={certification.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="gradient-card"
          >
            <div className="glass-card rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white">{certification.title}</h3>
              {certification.certificateUrl ? (
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button inline-flex px-4 py-2 text-sm"
                  >
                    View
                  </a>
                  <a
                    href={certification.certificateUrl}
                    download
                    className="glow-button inline-flex px-4 py-2 text-sm"
                  >
                    Download
                  </a>
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
