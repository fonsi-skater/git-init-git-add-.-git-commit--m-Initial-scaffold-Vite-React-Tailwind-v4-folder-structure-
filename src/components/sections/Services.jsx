import { useSiteContent } from "../../lib/content.js"
import FadeIn from "../ui/FadeIn.jsx"

function Services() {
  const { content } = useSiteContent()

  return (
    <section id="services" className="px-6 md:px-16 py-24 bg-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-12">Services</span>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-display italic text-xl text-brand-gold">{s.title}</h3>
                <p className="mt-2 text-sm text-brand-cream/70">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
