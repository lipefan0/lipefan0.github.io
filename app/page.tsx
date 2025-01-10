import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { getRepositories } from "../utils/github";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  created_at: string;
}

export default async function Home() {
  const repositories = await getRepositories();

  const sortedRepositories = repositories.sort(
    (a: Repository, b: Repository) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRepositories.map((repo: Repository) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description ?? ""}
              stars={repo.stargazers_count}
              language={repo.language ?? ""}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
