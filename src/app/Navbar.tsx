import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:text-gray-400 transition-colors">
            Sandbox Docs
          </h1>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          href="/blog-posts"
          className="hover:text-gray-400 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-400 transition-colors"
        >
          Projects
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors">
          About
        </Link>
      </div>
    </nav>
  );
}