import Image from "next/image";
import Banner from "./Banner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-geist-sans bg-gray-50 text-gray-900">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <section className="w-full px-6 sm:px-12 lg:px-20 py-12 rounded-lg">
          <Banner />
        </section>

        <section className="w-full px-8 sm:px-20">
          <h3 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
            Blog Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 transition hover:shadow-xl"
              >
                <Link
                  href={`/blog/post${i}`}
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  <Image
                    src={`/blog${i}.jpg`}
                    alt={`Blog Post ${i}`}
                    width={200}
                    height={120}
                    className="rounded-md mb-3"
                  />
                </Link>
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

      <footer className="row-start-3 flex flex-col gap-4 py-6 pe-6 w-full justify-end bg-gray-900 text-white mt-10">
        <div className="ml-auto flex gap-2">
          <a
            href="https://github.com/danmee10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHub"
              width={32}
              height={32}
              className="hover:opacity-75"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-mee-58442622/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/InBug-White.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="hover:opacity-75"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
