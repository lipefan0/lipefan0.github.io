import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Meu Portfólio
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

