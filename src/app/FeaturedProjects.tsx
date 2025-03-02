import Link from "next/link";
import Image from "next/image";
import { projects } from "./data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        Projects
      </h3>

      <div className="w-full h-auto flex gap-4">
        <div className="w-1/2 h-[450px] relative">
          <Link
            href={featuredProjects[0].detailsLink}
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            <Image
              src={featuredProjects[0].image}
              alt={featuredProjects[0].name}
              width={1408}
              height={768}
              className="object-cover rounded-lg shadow-md"
            />
          </Link>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-full h-1/2 relative">
            <Link
              href={featuredProjects[1].detailsLink}
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              <Image
                src={featuredProjects[1].image}
                alt={featuredProjects[1].name}
                width={704}
                height={396}
                className="object-cover rounded-lg shadow-md"
              />
            </Link>
          </div>

          <div className="w-full h-1/2 flex gap-4">
            <div className="w-1/2 relative">
              <Link
                href={featuredProjects[2].detailsLink}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                <Image
                  src={featuredProjects[2].image}
                  alt={featuredProjects[2].name}
                  width={352}
                  height={198}
                  className="object-cover rounded-lg shadow-md"
                />
              </Link>
            </div>
            <div className="w-1/2 relative">
              <Link
                href={featuredProjects[3].detailsLink}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                <Image
                  src={featuredProjects[3].image}
                  alt={featuredProjects[3].name}
                  width={352}
                  height={198}
                  className="object-cover rounded-lg shadow-md"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
