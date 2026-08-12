import { useSiteContent } from "../../lib/content.js"

function PathToMastery() {
  const { content } = useSiteContent()

  return (
    <section id="path-to-mastery" className="px-6 md:px-12 py-20 bg-brand-dark/[0.02] text-brand-dark">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid mb-10">My Path To Mastery In UI/UX Design</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {content.pathToMastery.map((m) => (
            <div key={m.year} className="border-l-2 border-brand-light/30 pl-4">
              <p className="text-sm font-semibold text-brand-mid">{m.year}</p>
              <h3 className="mt-1 font-semibold text-brand-dark">{m.title}</h3>
              <p className="mt-2 text-sm text-brand-dark/70">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PathToMastery
