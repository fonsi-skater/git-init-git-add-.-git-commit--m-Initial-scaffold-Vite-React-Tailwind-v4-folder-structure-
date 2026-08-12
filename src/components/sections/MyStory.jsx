import { useSiteContent } from "../../lib/content.js"

function MyStory() {
  const { content } = useSiteContent()

  return (
    <section id="my-story" className="px-6 md:px-12 py-20 bg-white text-brand-dark">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid">My Story</span>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg md:text-xl leading-relaxed text-brand-dark/80">{content.myStory}</p>
        </div>
      </div>
    </section>
  )
}

export default MyStory
