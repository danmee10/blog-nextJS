export default function AboutMePage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h3 className="text-4xl font-semibold mb-6 border-b-4 border-gray-900 pb-3">
        About This Site
      </h3>

      <p className="text-xl mb-6 leading-relaxed text-gray-700">
        Welcome to my personal space where I share insights, articles, and
        experiments on web technologies. This blog showcases my deep dive into
        various tools and practices, particularly around JavaScript/TypeScript,
        serverless architectures, and full-stack development.
      </p>

      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">
          What You&apos;ll Find Here
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            <strong>In-depth Articles:</strong> Explore thought pieces on
            current web technologies and development best practices.
          </li>
          <li>
            <strong>Personal Projects:</strong> View and follow along with
            various personal projects that demonstrate my technical expertise
            and problem-solving skills.
          </li>
          <li>
            <strong>Case Studies:</strong> I share multi-part blog posts on the
            approaches I consider for web applications, detailing the pros and
            cons of each solution.
          </li>
        </ul>
      </div>

      <p className="text-lg text-gray-600">
        Whether you&apos;re a fellow developer, a tech enthusiast, or someone
        interested in web development, this site aims to offer both practical
        insights and inspiration for building high-quality, scalable
        applications.
      </p>
    </div>
  );
}