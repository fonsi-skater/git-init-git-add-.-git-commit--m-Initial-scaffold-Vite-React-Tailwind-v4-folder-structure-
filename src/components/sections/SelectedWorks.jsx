import { useEffect, useState } from "react"
import { Star, ExternalLink } from "lucide-react"
import { fetchGithubRepos } from "../../lib/github.js"

function SelectedWorks() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    fetchGithubRepos()
      .then((data) => {
        setRepos(data)
        setStatus("done")
      })
      .catch(() => setStatus("error"))
  }, [])

  return (
    <section id="selected-works" className="px-6 md:px-16 py-24 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-12">Selected Works</span>

        {status === "loading" && <p className="text-brand-cream/50">Loading projects...</p>}
        {status === "error" && <p className="text-brand-cream/50">Couldn't load projects right now.</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="group block glass rounded-2xl p-6 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-display italic text-lg text-brand-cream group-hover:text-brand-gold transition">{repo.name}</h3>
                <ExternalLink size={14} className="text-brand-cream/40" />
              </div>
              <p className="mt-2 text-sm text-brand-cream/60 line-clamp-3">{repo.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-brand-cream/40">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWorks
