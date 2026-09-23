const GITHUB_API_URL = "https://api.github.com";

/**
 * Fetch public repositories for a GitHub user.
 */
export async function fetchGitHubRepos(username) {
  if (!username || !username.trim()) {
    throw new Error("GitHub username is required.");
  }

  const response = await fetch(
    `${GITHUB_API_URL}/users/${encodeURIComponent(
      username.trim()
    )}/repos?sort=updated&direction=desc&per_page=6`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("GitHub user was not found.");
    }

    if (response.status === 403) {
      throw new Error(
        "GitHub API rate limit reached. Please try again later."
      );
    }

    throw new Error(
      `GitHub API request failed (${response.status}).`
    );
  }

  const repositories = await response.json();

  return repositories.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    html_url: repo.html_url,
    homepage: repo.homepage,
    updated_at: repo.updated_at,
  }));
}