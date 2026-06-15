function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  )
}

export default AnimatedBackground
