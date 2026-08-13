import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const commands = [
    { label: "Go to My Story", action: () => scrollToSection("my-story") },
    { label: "Go to Path to Mastery", action: () => scrollToSection("path-to-mastery") },
    { label: "Go to Selected Works", action: () => scrollToSection("selected-works") },
    { label: "Go to GitHub Activity", action: () => scrollToSection("github-activity") },
    { label: "Go to Services", action: () => scrollToSection("services") },
    { label: "Go to Contact", action: () => scrollToSection("contact") },
    { label: "Download Resume", action: () => window.open("/resume.pdf", "_blank") },
    { label: "Open GitHub Profile", action: () => window.open("https://github.com/fonsi-skater", "_blank") },
    { label: "Back to Top", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  ]

  function scrollToSection(id) {
    if (window.location.pathname !== "/") {
      navigate("/")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery("")
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  function handleKeyNav(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === "Enter" && filtered[activeIndex]) {
      filtered[activeIndex].action()
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-6 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg glass-dark rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <Search size={16} className="text-brand-cream/50" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0) }}
            onKeyDown={handleKeyNav}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-brand-cream placeholder:text-brand-cream/40 focus:outline-none text-sm"
          />
          <kbd className="text-xs text-brand-cream/40 border border-white/15 rounded px-1.5 py-0.5">Esc</kbd>
        </div>

        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-3 text-sm text-brand-cream/40">No matching commands.</p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              onClick={() => { cmd.action(); setOpen(false) }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full text-left px-4 py-2.5 text-sm transition ${i === activeIndex ? "bg-white/10 text-brand-gold" : "text-brand-cream/80"}`}
            >
              {cmd.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
