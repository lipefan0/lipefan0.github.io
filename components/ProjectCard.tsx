import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
}

export default function ProjectCard({
  name,
  description,
  stars,
  language,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${name}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>⭐ {stars}</span>
          <span>{language}</span>
        </div>
      </div>
    </Link>
  );
}
