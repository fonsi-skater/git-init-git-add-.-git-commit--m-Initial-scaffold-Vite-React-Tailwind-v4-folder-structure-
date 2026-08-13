import FadeIn from "../ui/FadeIn.jsx"

const USERNAME = "fonsi-skater"

function GithubActivity() {
  return (
    <section id="github-activity" className="px-6 md:px-16 py-24 bg-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-8">GitHub Activity</span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="glass rounded-2xl p-6 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/e0a63c/${USERNAME}`}
              alt={`${USERNAME}'s GitHub contribution graph`}
              className="w-full min-w-[600px]"
            />
          </div>
          <p className="mt-3 text-xs text-brand-cream/40">
            Live contribution history from{" "}
            <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
              github.com/{USERNAME}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default GithubActivity
