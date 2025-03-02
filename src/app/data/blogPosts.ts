export interface BlogPost {
  id: number;
  heading: string;
  subHeading: string;
  image: string;
  link: string;
  markdownPath: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    heading: "Exploring the Future of Full-Stack JavaScript",
    subHeading:
      "A deep dive into the evolving landscape of JavaScript development",
    image: "/blog-posts/full-stack-javascript-future.jpg",
    link: "/blog/full-stack-javascript-future",
    markdownPath: "blog/full-stack-javascript-future.md",
    tags: ["JavaScript", "Full-Stack", "Web Development"],
  },
  {
    id: 2,
    heading: "Mastering React: Tips and Best Practices",
    subHeading: "How to take your React development skills to the next level",
    image: "/blog-posts/mastering-react.jpg",
    link: "/blog/mastering-react",
    markdownPath: "blog/mastering-react.md",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 3,
    heading: "Building Serverless Applications with AWS",
    subHeading:
      "A guide to deploying scalable applications with AWS serverless technologies",
    image: "/blog-posts/serverless-aws.jpg",
    link: "/blog/serverless-aws",
    markdownPath: "blog/serverless-aws.md",
    tags: ["Serverless", "AWS", "Cloud Computing"],
  },
  {
    id: 4,
    heading: "JavaScript Design Patterns Every Developer Should Know",
    subHeading: "Improving your codebase with proven design patterns",
    image: "/blog-posts/js-design-patterns.jpg",
    link: "/blog/js-design-patterns",
    markdownPath: "blog/js-design-patterns.md",
    tags: ["JavaScript", "Design Patterns", "Best Practices"],
  },
  {
    id: 5,
    heading: "GraphQL vs REST: Which API is Right for You?",
    subHeading:
      "A comparison of GraphQL and REST and which one suits your project better.",
    image: "/blog-posts/graphql-vs-rest.jpg",
    link: "/blog/graphql-vs-rest",
    markdownPath: "blog/graphql-vs-rest.md",
    tags: ["GraphQL", "REST", "APIs"],
  },
  {
    id: 6,
    heading: "Getting Started with TypeScript in a Node.js Project",
    subHeading:
      "How to integrate TypeScript into your Node.js application for type safety.",
    image: "/blog-posts/starting-with-typescript-node.jpg",
    link: "/blog/starting-with-typescript-node",
    markdownPath: "blog/starting-with-typescript-node.md",
    tags: ["TypeScript", "Node.js", "JavaScript"],
  },
  {
    id: 7,
    heading: "Understanding the JavaScript Event Loop",
    subHeading:
      "A beginner’s guide to understanding asynchronous programming in JavaScript.",
    image: "/blog-posts/javascript-event-loop.png",
    link: "/blog/javascript-event-loop",
    markdownPath: "blog/javascript-event-loop.md",
    tags: ["JavaScript", "Event Loop", "Asynchronous Programming"],
  },
  {
    id: 8,
    heading: "Best Practices for Writing Clean and Maintainable Code",
    subHeading:
      "Strategies and techniques to write clean, readable, and maintainable code.",
    image: "/blog-posts/clean-code-best-practices.jpg",
    link: "/blog/clean-code-best-practices",
    markdownPath: "blog/clean-code-best-practices.md",
    tags: ["Best Practices", "Clean Code", "Software Development"],
  },
  {
    id: 9,
    heading:
      "Continuous Integration and Continuous Deployment (CI/CD) Explained",
    subHeading:
      "How CI/CD pipelines work and why they’re crucial for modern software development.",
    image: "/blog-posts/ci-cd-explained.jpg",
    link: "/blog/ci-cd-explained",
    markdownPath: "blog/ci-cd-explained.md",
    tags: ["CI/CD", "DevOps", "Software Development"],
  },
  {
    id: 10,
    heading: "A Beginner’s Guide to Docker and Containers",
    subHeading:
      "Learn the basics of Docker and containers, and how they can simplify your development workflow.",
    image: "/blog-posts/docker-containers-guide.jpg",
    link: "/blog/docker-containers-guide",
    markdownPath: "blog/docker-containers-guide.md",
    tags: ["Docker", "Containers", "DevOps"],
  },
  {
    id: 11,
    heading: "Introduction to Machine Learning with TensorFlow.js",
    subHeading:
      "An introduction to machine learning concepts and how to implement them using TensorFlow.js.",
    image: "/blog-posts/machine-learning-tensorflowjs.jpg",
    link: "/blog/machine-learning-tensorflowjs",
    markdownPath: "blog/machine-learning-tensorflowjs.md",
    tags: ["Machine Learning", "TensorFlow.js", "JavaScript"],
  },
  {
    id: 12,
    heading: "Optimizing Performance in React Applications",
    subHeading:
      "Techniques and best practices to improve the performance of your React applications.",
    image: "/blog-posts/react-performance-optimization.jpg",
    link: "/blog/react-performance-optimization",
    markdownPath: "blog/react-performance-optimization.md",
    tags: ["React", "Performance Optimization", "JavaScript"],
  },
  {
    id: 13,
    heading: "Building and Deploying a Personal Blog with Next.js",
    subHeading:
      "A step-by-step guide to building and deploying a static blog using Next.js and Vercel.",
    image: "/blog-posts/building-nextjs-blog.jpg",
    link: "/blog/building-nextjs-blog",
    markdownPath: "blog/building-nextjs-blog.md",
    tags: ["Next.js", "Static Site Generation", "Web Development"],
  },
];
