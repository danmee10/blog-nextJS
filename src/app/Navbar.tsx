import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Sandbox Docs</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/blog" className="mr-4">
          Blog
        </Link>
        <Link href="/projects" className="mr-4">
          Projects
        </Link>
        <Link href="/about" className="mr-4">
          About
        </Link>
      </div>
    </nav>
  );
}