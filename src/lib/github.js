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
