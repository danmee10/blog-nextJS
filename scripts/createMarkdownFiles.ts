import { promises as fs } from "fs";
import { join } from "path";

const blogPosts = [
  {
    id: 1,
    name: "Exploring the Future of Full-Stack JavaScript",
    description:
      "A deep dive into the evolving landscape of JavaScript development",
    image: "/blog-posts/full-stack-javascript-future.jpg",
    slug: "full-stack-javascript-future",
    bucket: "blog-posts",
  },
  {
    id: 2,
    name: "Mastering React: Tips and Best Practices",
    description: "How to take your React development skills to the next level",
    image: "/blog-posts/mastering-react.jpg",
    slug: "mastering-react",
    bucket: "blog-posts",
  },
  {
    id: 3,
    name: "Building Serverless Applications with AWS",
    description:
      "A guide to deploying scalable applications with AWS serverless technologies",
    image: "/blog-posts/serverless-aws.jpg",
    slug: "serverless-aws",
    bucket: "blog-posts",
  },
  {
    id: 4,
    name: "JavaScript Design Patterns Every Developer Should Know",
    description: "Improving your codebase with proven design patterns",
    image: "/blog-posts/js-design-patterns.jpg",
    slug: "js-design-patterns",

    bucket: "blog-posts",
  },
  {
    id: 5,
    name: "GraphQL vs REST: Which API is Right for You?",
    description:
      "A comparison of GraphQL and REST and which one suits your project better.",
    image: "/blog-posts/graphql-vs-rest.jpg",
    slug: "graphql-vs-rest",
    bucket: "blog-posts",
  },
  {
    id: 6,
    name: "Getting Started with TypeScript in a Node.js Project",
    description:
      "How to integrate TypeScript into your Node.js application for type safety.",
    image: "/blog-posts/starting-with-typescript-node.jpg",
    slug: "starting-with-typescript-node",
    bucket: "blog-posts",
  },
  {
    id: 7,
    name: "Understanding the JavaScript Event Loop",
    description:
      "A beginner’s guide to understanding asynchronous programming in JavaScript.",
    image: "/blog-posts/javascript-event-loop.png",
    slug: "javascript-event-loop",

    bucket: "blog-posts",
  },
  {
    id: 8,
    name: "Best Practices for Writing Clean and Maintainable Code",
    description:
      "Strategies and techniques to write clean, readable, and maintainable code.",
    image: "/blog-posts/clean-code-best-practices.jpg",
    slug: "clean-code-best-practices",

    bucket: "blog-posts",
  },
  {
    id: 9,
    name: "Continuous Integration and Continuous Deployment (CI/CD) Explained",
    description:
      "How CI/CD pipelines work and why they’re crucial for modern software development.",
    image: "/blog-posts/ci-cd-explained.jpg",
    slug: "ci-cd-explained",
    bucket: "blog-posts",
  },
  {
    id: 10,
    name: "A Beginner’s Guide to Docker and Containers",
    description:
      "Learn the basics of Docker and containers, and how they can simplify your development workflow.",
    image: "/blog-posts/docker-containers-guide.jpg",
    slug: "docker-containers-guide",
    bucket: "blog-posts",
  },
  {
    id: 11,
    name: "Introduction to Machine Learning with TensorFlow.js",
    description:
      "An introduction to machine learning concepts and how to implement them using TensorFlow.js.",
    image: "/blog-posts/machine-learning-tensorflowjs.jpg",
    slug: "machine-learning-tensorflowjs",

    bucket: "blog-posts",
  },
  {
    id: 12,
    name: "Optimizing Performance in React Applications",
    description:
      "Techniques and best practices to improve the performance of your React applications.",
    image: "/blog-posts/react-performance-optimization.jpg",
    slug: "react-performance-optimization",

    bucket: "blog-posts",
  },
  {
    id: 13,
    name: "Building and Deploying a Personal Blog with Next.js",
    description:
      "A step-by-step guide to building and deploying a static blog using Next.js and Vercel.",
    image: "/blog-posts/building-nextjs-blog.jpg",
    slug: "building-nextjs-blog",

    bucket: "blog-posts",
  },
];

async function createMarkdownFiles(pwd:string) {
  const outputDir = `${pwd}/src/app/blog-markdown`;

  try {
    // Ensure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    for (const post of blogPosts) {
      const filePath = join(outputDir, `${post.slug}.md`);
      const content = `<!-- Empty file for blog post: "${post.name}" -->\n`;

      // Write the empty Markdown file
      await fs.writeFile(filePath, content, "utf8");
      console.log(`Created: ${filePath}`);
    }

    console.log("All Markdown files have been created successfully.");
  } catch (error) {
    console.error("Error creating Markdown files:", error);
  }
}

const pathArg = process.argv[2]; 
createMarkdownFiles(pathArg);
