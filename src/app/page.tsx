import { FeaturedProjects } from "./FeaturedProjects";
import { FeaturedBlogPosts } from "./FeaturedBlogPosts";

export default function Home() {
  return (
    <div className="flex flex-col sm:gap-6 row-start-2 max-w-4xl">
      <section className="w-full px-6 sm:px-12 lg:px-20 py-6 rounded-lg">
        <FeaturedProjects />
      </section>

      <section className="w-full px-6 sm:px-12 lg:px-20 py-6 rounded-lg">
        <FeaturedBlogPosts />
      </section>
    </div>
  );
}
