import { owner } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-slate-400 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  )
}

export default Footer
