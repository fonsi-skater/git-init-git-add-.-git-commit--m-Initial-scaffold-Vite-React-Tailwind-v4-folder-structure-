const USERNAME = "fonsi-skater"

export async function fetchGithubRepos() {
  const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=9`)
  if (!res.ok) throw new Error("Failed to fetch repos")
  const data = await res.json()
  return data
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided.",
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
    }))
}

export async function fetchRepoDetail(name) {
  const res = await fetch(`https://api.github.com/repos/${USERNAME}/${name}`)
  if (!res.ok) throw new Error("Repo not found")
  const repo = await res.json()

  let readme = ""
  try {
    const readmeRes = await fetch(`https://raw.githubusercontent.com/${USERNAME}/${name}/${repo.default_branch}/README.md`)
    if (readmeRes.ok) readme = await readmeRes.text()
  } catch {
    readme = ""
  }

  return {
    name: repo.name,
    description: repo.description || "No description provided.",
    url: repo.html_url,
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics || [],
    updatedAt: repo.updated_at,
    readme,
  }
}
