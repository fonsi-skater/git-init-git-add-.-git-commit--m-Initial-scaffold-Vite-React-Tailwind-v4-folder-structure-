import { useSiteContent } from "../../lib/content.js"
import AuroraBackground from "../ui/AuroraBackground.jsx"

function MyStory() {
  const { content } = useSiteContent()

  return (
    <section id="my-story" className="relative px-6 md:px-16 py-24 bg-brand-dark overflow-hidden">
      <AuroraBackground className="opacity-40" />
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80">My Story</span>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg md:text-2xl font-display italic leading-relaxed text-brand-cream/90">{content.myStory}</p>
        </div>
      </div>
    </section>
  )
}

export default MyStory
