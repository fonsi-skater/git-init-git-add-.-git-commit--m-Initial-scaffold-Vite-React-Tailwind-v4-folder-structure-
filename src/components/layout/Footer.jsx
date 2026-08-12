import { Globe, Mail, Phone } from "lucide-react"
import { useSiteContent } from "../../lib/content.js"

function Footer() {
  const { content } = useSiteContent()

  return (
    <footer className="px-6 md:px-12 py-16 bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold text-lg">Alphonce Okoth</h3>
          <p className="mt-2 text-sm text-white/60">{content.footerBio}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/></svg>
            </a>
            <a href="#" aria-label="Portfolio" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"><Globe size={14} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li><a href="#my-story" className="hover:text-white transition">My Story</a></li>
            <li><a href="#path-to-mastery" className="hover:text-white transition">Path to Mastery</a></li>
            <li><a href="#selected-works" className="hover:text-white transition">Selected Works</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            {content.services.map((s) => <li key={s.title}>{s.title}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white/80">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2"><Mail size={14} /> {content.footerEmail}</li>
            <li className="flex items-center gap-2"><Phone size={14} /> {content.footerPhone}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>&copy; 2026 Alphonce Okoth. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="/admin" className="hover:text-white transition">Admin</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
