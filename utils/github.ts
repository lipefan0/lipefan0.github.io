const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = "lipefan0"; // Substitua pelo seu username do GitHub

export async function getRepositories() {
  const response = await fetch(
    `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`
  );
  return response.json();
}

export async function getReadme(repo: string) {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.raw",
        },
      }
    );

    if (!response.ok) {
      return "# Readme não encontrado";
    }

    const data = await response.text();
    return data;
  } catch {
    return "# Erro ao carregar o readme";
  }
}
