const projects = [
  {
    title: "Fintech Mobile App Redesign",
    category: "UI/UX Design",
    image: "/images/project-1.jpg",
  },
  {
    title: "E-commerce Dashboard",
    category: "Product Design",
    image: "/images/project-2.jpg",
  },
  {
    title: "Healthcare Booking Platform",
    category: "UX Research + UI",
    image: "/images/project-3.jpg",
  },
]

function SelectedWorks() {
  return (
    <section id="selected-works" className="px-6 md:px-12 py-20 bg-white text-brand-dark">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid mb-10">
          Selected Works
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group block">
              <div className="aspect-4/3 rounded-2xl bg-brand-light/10 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" onError={(e) => { e.currentTarget.style.display = "none" }} />
              </div>
              <h3 className="mt-4 font-semibold text-brand-dark">{p.title}</h3>
              <p className="text-sm text-brand-dark/60">{p.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWorks
