import Link from "next/link";
import Image from "next/image";
import { projects } from "./data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 4);

  const overlayTextClasses =
    "absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-md";
  const imageWrapperClasses = "relative w-full h-full";
  const imageClasses = "object-cover rounded-lg shadow-md";
  const linkClasses = "text-lg font-medium text-blue-600 hover:underline";

  return (
    <div className="mx-auto max-w-6xl">
      <h3 className="mb-6 border-b-2 border-gray-300 pb-2 text-3xl font-bold">
        Projects
      </h3>

      <div className="flex h-auto w-full gap-4">
        {/* Primary Large Project */}
        <div className="relative h-[450px] w-full sm:w-1/2">
          <Link
            href={`/projects/${featuredProjects[0].slug}`}
            className={linkClasses}
          >
            <div className={imageWrapperClasses}>
              <Image
                src={featuredProjects[0].image}
                alt={featuredProjects[0].name}
                width={1408}
                height={768}
                className={imageClasses}
              />
              <h2 className={overlayTextClasses}>{featuredProjects[0].name}</h2>
            </div>
          </Link>
        </div>

        {/* Remaining Projects */}
        <div className="hidden w-1/2 flex-col gap-4 sm:flex">
          {/* Second Project */}
          <div className="relative h-full w-full md:h-1/2">
            <Link
              href={`/projects/${featuredProjects[1].slug}`}
              className={linkClasses}
            >
              <div className={imageWrapperClasses}>
                <Image
                  src={featuredProjects[1].image}
                  alt={featuredProjects[1].name}
                  width={704}
                  height={396}
                  className={imageClasses}
                />
                <h2 className={overlayTextClasses}>
                  {featuredProjects[1].name}
                </h2>
              </div>
            </Link>
          </div>

          {/* Third and Fourth Projects */}
          <div className="hidden h-1/2 w-full gap-4 md:flex">
            {[2, 3].map((i) => (
              <div key={i} className="relative w-1/2">
                <Link
                  href={`/projects/${featuredProjects[i].slug}`}
                  className={linkClasses}
                >
                  <div className={imageWrapperClasses}>
                    <Image
                      src={featuredProjects[i].image}
                      alt={featuredProjects[i].name}
                      width={352}
                      height={198}
                      className={imageClasses}
                    />
                    <h2 className={overlayTextClasses}>
                      {featuredProjects[i].name}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}