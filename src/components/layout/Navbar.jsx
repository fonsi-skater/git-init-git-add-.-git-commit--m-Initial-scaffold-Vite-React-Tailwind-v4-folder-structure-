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
    <header className="absolute top-0 left-0 right-0 z-30 text-brand-cream">
      <div className="flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-display italic text-lg tracking-wide">Alphonce Okoth</span>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-brand-cream/70">
          <a href="#selected-works" className="hover:text-brand-cream transition">Work</a>
          <a href="#services" className="hover:text-brand-cream transition">Services</a>
          <a href="#contact" className="hover:text-brand-cream transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-full glass text-xs text-brand-cream/60">
            Press <kbd className="border border-white/20 rounded px-1.5 py-0.5">Ctrl</kbd> <kbd className="border border-white/20 rounded px-1.5 py-0.5">K</kbd>
          </span>
          <a href="/resume.pdf" download className="flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium hover:bg-white/15 transition">Resume <Download size={14} /></a>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/15 transition">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass">
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="glass-dark mx-4 md:mx-16 rounded-2xl px-6 py-6 mb-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-display italic text-xl hover:text-brand-gold transition">
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" download className="md:hidden mt-2 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium w-fit">
              Resume <Download size={14} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
