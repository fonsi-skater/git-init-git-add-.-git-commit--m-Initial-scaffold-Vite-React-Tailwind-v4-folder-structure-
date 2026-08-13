import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { marked } from "marked"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import { fetchRepoDetail } from "../lib/github.js"
import AuroraBackground from "../components/ui/AuroraBackground.jsx"
import FadeIn from "../components/ui/FadeIn.jsx"

function ProjectDetail() {
  const { name } = useParams()
  const [repo, setRepo] = useState(null)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    fetchRepoDetail(name)
      .then((data) => {
        setRepo(data)
        setStatus("done")
      })
      .catch(() => setStatus("error"))
  }, [name])

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-brand-dark text-brand-cream/60">Loading...</div>
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-brand-cream gap-4">
        <p>Couldn't load this project.</p>
        <Link to="/" className="px-5 py-2.5 rounded-full glass text-sm">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-brand-dark grain overflow-hidden">
      <AuroraBackground className="opacity-30" />
      <div className="relative z-10 px-6 md:px-16 py-16 max-w-3xl mx-auto">
        <Link to="/#selected-works" className="inline-flex items-center gap-2 text-sm text-brand-cream/60 hover:text-brand-cream transition mb-10">
          <ArrowLeft size={14} /> Back to Selected Works
        </Link>

        <FadeIn>
          <h1 className="font-display italic text-brand-gold text-4xl md:text-6xl leading-tight">{repo.name}</h1>
          <p className="mt-4 text-brand-cream/70 text-lg">{repo.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {repo.language && <span className="px-3 py-1.5 rounded-full glass text-xs text-brand-cream/80">{repo.language}</span>}
            <span className="px-3 py-1.5 rounded-full glass text-xs text-brand-cream/80 flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
            {repo.topics.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full glass text-xs text-brand-teal">{t}</span>
            ))}
          </div>

          <a href={repo.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm hover:bg-white/15 transition">
            View on GitHub <ExternalLink size={14} />
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 pt-10 border-t border-white/10">
            {repo.readme ? (
              <div
                className="prose prose-invert max-w-none prose-headings:font-display prose-headings:italic prose-a:text-brand-teal prose-strong:text-brand-cream"
                dangerouslySetInnerHTML={{ __html: marked.parse(repo.readme) }}
              />
            ) : (
              <p className="text-brand-cream/50">No README available for this project yet.</p>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default ProjectDetail
