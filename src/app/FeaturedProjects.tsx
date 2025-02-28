import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        Projects
      </h3>

      <div className="w-full h-auto flex gap-4">
        <div className="w-1/2 h-[450px] relative">
          <Link
            href={`/blog/personal-blog-setup`}
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            <Image
              src="/blog.jpg"
              alt="Banner Image 1"
              width={1408}
              height={768}
              className="object-cover rounded-lg shadow-md"
            />
          </Link>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-full h-1/2 relative">
            <Link
              href={`/blog/code-visualizer`}
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              <Image
                src="/code-visualizer.jpg"
                alt="Banner Image 2"
                width={704}
                height={396}
                className="object-cover rounded-lg shadow-md"
              />
            </Link>
          </div>

          <div className="w-full h-1/2 flex gap-4">
            <div className="w-1/2 relative">
              <Link
                href={`/blog/impressionist`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                <Image
                  src="/impressionist.jpg"
                  alt="Banner Image 3"
                  width={352}
                  height={198}
                  className="object-cover rounded-lg shadow-md"
                />
              </Link>
            </div>
            <div className="w-1/2 relative">
              <Link
                href={`/blog/js-orm-sandbox`}
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                <Image
                  src="/js-orm-sandbox.jpg"
                  alt="Banner Image 4"
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
