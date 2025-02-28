import Image from "next/image";

export default function Banner() {
  return (
<section className="w-full px-6 sm:px-12 lg:px-20 py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Projects Header */}
    <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
      Projects
    </h3>

    {/* Image Grid */}
    <div className="w-full h-auto flex gap-4">
      {/* Left side - 50% width */}
      <div className="w-1/2 h-[450px] relative">
        <Image
          src="/blog.jpg"
          alt="Banner Image 1"
          width={1408}
          height={768}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right side - 50% width */}
      <div className="w-1/2 flex flex-col gap-4">
        {/* Top half - 50% of right side */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/code-visualizer.jpg"
            alt="Banner Image 2"
            width={704}
            height={396}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Bottom half - Split in two */}
        <div className="w-full h-1/2 flex gap-4">
          <div className="w-1/2 relative">
            <Image
              src="/impressionist.jpg"
              alt="Banner Image 3"
              width={352}
              height={198}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/js-orm-sandbox.jpg"
              alt="Banner Image 4"
              width={352}
              height={198}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
