import { useState } from "react"
import { Download, Menu, X } from "lucide-react"

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "#my-story", label: "My Story" },
    { href: "#path-to-mastery", label: "Path to Mastery" },
    { href: "#selected-works", label: "Selected Works" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-20 text-white">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <span className="text-sm font-medium">With 7+ Years of Experience</span>

        <nav className="hidden md:flex items-center gap-4">
          <a href="#contact" className="px-4 py-2 rounded-full bg-brand-dark/40 backdrop-blur border border-white/20 text-sm font-medium hover:bg-brand-dark/60 transition">Let's Talk</a>
          <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium hover:bg-white/20 transition">My Resume <Download size={14} /></a>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>

        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="bg-brand-dark/95 backdrop-blur border-t border-white/10 px-6 md:px-12 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium hover:text-brand-light transition">
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" download className="md:hidden mt-2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium w-fit">
              My Resume <Download size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
