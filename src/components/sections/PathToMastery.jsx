const milestones = [
  { year: "2018", title: "Started in Graphic Design", desc: "Built a foundation in visual design principles, layout, and color theory." },
  { year: "2020", title: "Transitioned to UI Design", desc: "Began designing interfaces for web and mobile products." },
  { year: "2022", title: "Grew into UX Research", desc: "Added user research, testing, and information architecture to the toolkit." },
  { year: "2024", title: "Product Design Leadership", desc: "Leading end-to-end design across startups and product teams." },
]

function PathToMastery() {
  return (
    <section id="path-to-mastery" className="px-6 md:px-12 py-20 bg-brand-dark/[0.02] text-brand-dark">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid mb-10">My Path To Mastery In UI/UX Design</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((m) => (
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
