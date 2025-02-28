import Image from "next/image";
import Banner from "./Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-geist-sans bg-gray-50 text-gray-900">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <Banner />

        <section className="w-full px-8 sm:px-20">
          <h3 className="text-2xl font-semibold text-gray-800 text-center sm:text-left mb-4">
            Blog Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl"
              >
                <Image
                  src={`/blog${i}.jpg`}
                  alt={`Blog Post ${i}`}
                  width={200}
                  height={120}
                  className="rounded-md mb-3"
                />
                <Link
                  href={`/blog/post${i}`}
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  Blog Post {i}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex flex-col items-center gap-4 text-center py-6">
        <h3 className="text-xl font-semibold">Contact Me</h3>
        <p className="text-gray-700">Dan Mee</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
