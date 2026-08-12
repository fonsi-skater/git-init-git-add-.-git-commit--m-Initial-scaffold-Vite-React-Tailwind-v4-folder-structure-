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
    <section id="selected-works" className="px-6 md:px-12 py-20 bg-white text-brand-dark">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid mb-10">Selected Works</span>

        {status === "loading" && <p className="text-brand-dark/60">Loading projects...</p>}
        {status === "error" && <p className="text-brand-dark/60">Couldn't load projects right now.</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-2xl border border-brand-dark/10 hover:border-brand-mid transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-brand-dark group-hover:text-brand-mid transition">{repo.name}</h3>
                <ExternalLink size={14} className="text-brand-dark/40" />
              </div>
              <p className="mt-2 text-sm text-brand-dark/60 line-clamp-3">{repo.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-brand-dark/50">
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
