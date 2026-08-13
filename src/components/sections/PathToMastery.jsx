import { useSiteContent } from "../../lib/content.js"
import FadeIn from "../ui/FadeIn.jsx"

function PathToMastery() {
  const { content } = useSiteContent()

  return (
    <section id="path-to-mastery" className="px-6 md:px-16 py-24 bg-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-12">My Path To Mastery</span>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {content.pathToMastery.map((m, i) => (
            <FadeIn key={m.year} delay={i * 0.1}>
              <div className="glass rounded-2xl p-5 h-full">
                <p className="font-display italic text-brand-gold text-lg">{m.year}</p>
                <h3 className="mt-2 font-semibold text-brand-cream">{m.title}</h3>
                <p className="mt-2 text-sm text-brand-cream/60">{m.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PathToMastery
