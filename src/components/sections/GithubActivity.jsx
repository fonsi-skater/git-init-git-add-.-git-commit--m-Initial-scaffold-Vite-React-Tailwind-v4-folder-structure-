import { GitHubCalendar } from "react-github-calendar"
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
            <GitHubCalendar
              username={USERNAME}
              colorScheme="dark"
              theme={{
                dark: ["#1a1a1e", "#3d3020", "#7a5a24", "#b8842e", "#e0a63c"],
              }}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-brand-cream/40">
            <p>
              Hover any square for the exact date and commit count. Data pulled live from{" "}
              <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">
                github.com/{USERNAME}
              </a>
            </p>
            <div className="flex items-center gap-1">
              <span>Less</span>
              {["#1a1a1e", "#3d3020", "#7a5a24", "#b8842e", "#e0a63c"].map((c) => (
                <span key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
              ))}
              <span>More</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default GithubActivity
