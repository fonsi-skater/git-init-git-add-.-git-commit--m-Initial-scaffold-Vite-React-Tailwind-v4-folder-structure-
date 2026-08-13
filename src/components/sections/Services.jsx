import { useSiteContent } from "../../lib/content.js"

function Services() {
  const { content } = useSiteContent()

  return (
    <section id="services" className="px-6 md:px-16 py-24 bg-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-12">Services</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.services.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-6">
              <h3 className="font-display italic text-xl text-brand-gold">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-cream/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
