import { FeaturedProjects } from "./FeaturedProjects";
import { FeaturedBlogPosts } from "./FeaturedBlogPosts";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <section className="w-full px-6 sm:px-12 lg:px-20 py-12 rounded-lg">
          <FeaturedProjects />
        </section>

        <section className="w-full px-6 sm:px-12">
          <FeaturedBlogPosts />
        </section>
      </main>

      <Footer />
    </div>
  );
}
