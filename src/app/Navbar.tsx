import Link from 'next/link'

export function Navbar() {
  const linkClasses = "hover:text-gray-400 transition-colors";
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
        <Link href="/blog-posts" className={linkClasses}>
          Blog
        </Link>
        <Link href="/projects" className={linkClasses}>
          Projects
        </Link>
        <Link href="/about" className={linkClasses}>
          About
        </Link>
      </div>
    </nav>
  );
};