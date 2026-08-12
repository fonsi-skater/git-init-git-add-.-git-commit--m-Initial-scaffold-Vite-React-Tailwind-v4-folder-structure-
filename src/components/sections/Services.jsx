import { useSiteContent } from "../../lib/content.js"

function Services() {
  const { content } = useSiteContent()

  return (
    <section id="services" className="px-6 md:px-12 py-20 bg-brand-dark text-white">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-white/10 text-white mb-10">Services</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
