import Header from "../../../components/Header";
import { getReadme } from "../../../utils/github";
import ReactMarkdown from "react-markdown";

export default async function ProjectPage({
  params,
}: {
  params: { name: string };
}) {
  const readme = await getReadme(params.name);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">{params.name}</h1>
        <div className="bg-white rounded-lg shadow-md p-6 prose prose-slate max-w-none">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
