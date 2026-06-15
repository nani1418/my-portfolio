import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { owner } from '../data/portfolioData'

const typingWords = ['Software Developer', 'React Builder', 'ML Enthusiast']

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = typingWords[wordIndex]
    const speed = isDeleting ? 40 : 90

    const timer = setTimeout(() => {
      const nextText = isDeleting
        ? currentWord.slice(0, displayText.length - 1)
        : currentWord.slice(0, displayText.length + 1)

      setDisplayText(nextText)

      if (!isDeleting && nextText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % typingWords.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section id="home" className="section-shell flex min-h-[92vh] items-center py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card w-full rounded-3xl border border-cyan-300/20 p-8 md:p-12"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-fuchsia-300">Welcome to my portfolio</p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              I&apos;m {owner.name}
            </h1>
            <p className="mt-5 text-xl text-cyan-300 md:text-2xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="mt-6 max-w-3xl text-slate-300">{owner.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#resume" className="glow-button">
                View Resume
              </a>
              <a href="#contact" className="ghost-button">
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {owner.socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-fuchsia-500/30 hover:shadow-[0_0_16px_rgba(34,211,238,0.5)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/70 via-cyan-400/60 to-indigo-500/70 p-[2px]">
            <div className="glass-card rounded-[2rem] p-3">
              <img
                src={owner.profileImage}
                alt={`${owner.name} profile`}
                className="h-80 w-full rounded-[1.5rem] object-cover object-top md:h-96"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
