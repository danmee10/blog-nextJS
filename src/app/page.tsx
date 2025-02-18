import Image from "next/image";
import Carousel from "./Carousel";
import Link from "next/link";

export default function Home() {
  const carouselItems = [
    <Image
      key="1"
      height={500}
      width={500}
      className="dark:invert"
      src="/blog.png"
      alt="Tech Blog"
      priority
    />,
    <Image
      key="2"
      height={500}
      width={500}
      className="dark:invert"
      src="/code-visualizer.png"
      alt="Code visualizer"
      priority
    />,
    <Image
      key="3"
      height={500}
      width={500}
      className="dark:invert"
      src="/js-orm-sandbox.png"
      alt="JS ORM Sandbox"
      priority
    />,
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3>Projects</h3>
        <Carousel items={carouselItems} />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h3>Blog posts</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="/blog1.png"
              alt="Blog Post 1"
              width={100}
              height={100}
              className="mb-2"
            />
            <Link href="/blog/post1">Blog Post 1</Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/blog2.png"
              alt="Blog Post 2"
              width={100}
              height={100}
              className="mb-2"
            />
            <Link href="/blog/post2">Blog Post 2</Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/blog3.png"
              alt="Blog Post 3"
              width={100}
              height={100}
              className="mb-2"
            />
            <Link href="/blog/post3">Blog Post 3</Link>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex flex-col items-center">
          <h3>Contact Me</h3>
          <p>Dan Mee</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
