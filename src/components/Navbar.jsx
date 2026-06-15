import { useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { navLinks, owner } from '../data/portfolioData'

function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          {owner.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-300 transition-all duration-300 hover:text-fuchsia-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="rounded-full border border-white/20 bg-white/10 p-2 text-slate-100 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_14px_rgba(34,211,238,0.5)]"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/10 p-2 text-slate-100 transition-all duration-300 hover:shadow-[0_0_14px_rgba(217,70,239,0.5)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 backdrop-blur-xl md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-200 transition hover:text-fuchsia-300"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
