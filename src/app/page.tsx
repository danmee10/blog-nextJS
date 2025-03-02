import Image from "next/image";
import { FeaturedProjects } from "./FeaturedProjects";
import { FeaturedBlogPosts } from "./FeaturedBlogPosts";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <section className="w-full px-6 sm:px-12 lg:px-20 py-12 rounded-lg">
          <FeaturedProjects />
        </section>

        <section className="w-full px-8 sm:px-20">
          <FeaturedBlogPosts />
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
