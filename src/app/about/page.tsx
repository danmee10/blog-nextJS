export default function AboutMePage() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        About Me
      </h3>
      <p className="text-lg mb-4">
        I am a full-stack web developer with experience in React, Next.js,
        Node.js, and Express.js. I am also familiar with TypeScript, GraphQL,
        and MongoDB. I have a passion for web development and I am always
        looking to learn new things.
      </p>
      <p className="text-lg mb-4">
        Over the years, I have worked on various projects ranging from small
        business websites to large-scale web applications. My goal is to create
        efficient, scalable, and user-friendly applications that provide a great
        user experience.
      </p>
      <p className="text-lg mb-4">
        In my free time, I enjoy contributing to open-source projects, exploring
        new technologies, and writing technical articles on my blog. I believe
        in continuous learning and strive to stay updated with the latest trends
        in web development.
      </p>
      <h4 className="text-2xl font-bold mt-6 mb-4">Skills</h4>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>TypeScript</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
      </ul>
      <h4 className="text-2xl font-bold mt-6 mb-4">Contact</h4>
      <p className="text-lg mb-4">
        Feel free to reach out to me via email at{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-email@example.com
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/your-profile"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}