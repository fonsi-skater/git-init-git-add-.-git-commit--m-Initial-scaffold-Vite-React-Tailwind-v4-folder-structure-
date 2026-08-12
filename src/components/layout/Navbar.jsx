import { Download, Menu } from "lucide-react"

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6 text-white">
      <span className="text-sm font-medium">With 7+ Years of Experience</span>

      <nav className="hidden md:flex items-center gap-4">
        <a href="#contact" className="px-4 py-2 rounded-full bg-brand-dark/40 backdrop-blur border border-white/20 text-sm font-medium hover:bg-brand-dark/60 transition">
          Let's Talk
        </a>
        <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium hover:bg-white/20 transition">
          My Resume <Download size={14} />
        </a>
        <button aria-label="Open menu" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
          <Menu size={16} />
        </button>
      </nav>

      <button aria-label="Open menu" className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
        <Menu size={16} />
      </button>
    </header>
  )
}

export default Navbar
