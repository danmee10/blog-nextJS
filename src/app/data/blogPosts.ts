export interface BlogPost {
  id: number;
  heading: string;
  subHeading: string;
  name: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    heading: "Exploring the Future of Full-Stack JavaScript",
    subHeading:
      "A deep dive into the evolving landscape of JavaScript development",
    image: "/blog-posts/full-stack-javascript-future.jpg",
    name: "full-stack-javascript-future",
    tags: ["JavaScript", "Full-Stack", "Web Development"],
  },
  {
    id: 2,
    heading: "Mastering React: Tips and Best Practices",
    subHeading: "How to take your React development skills to the next level",
    image: "/blog-posts/mastering-react.jpg",
    name: "mastering-react",
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 3,
    heading: "Building Serverless Applications with AWS",
    subHeading:
      "A guide to deploying scalable applications with AWS serverless technologies",
    image: "/blog-posts/serverless-aws.jpg",
    name: "serverless-aws",
    tags: ["Serverless", "AWS", "Cloud Computing"],
  },
  {
    id: 4,
    heading: "JavaScript Design Patterns Every Developer Should Know",
    subHeading: "Improving your codebase with proven design patterns",
    image: "/blog-posts/js-design-patterns.jpg",
    name: "js-design-patterns",
    tags: ["JavaScript", "Design Patterns", "Best Practices"],
  },
  {
    id: 5,
    heading: "GraphQL vs REST: Which API is Right for You?",
    subHeading:
      "A comparison of GraphQL and REST and which one suits your project better.",
    image: "/blog-posts/graphql-vs-rest.jpg",
    name: "graphql-vs-rest",
    tags: ["GraphQL", "REST", "APIs"],
  },
  {
    id: 6,
    heading: "Getting Started with TypeScript in a Node.js Project",
    subHeading:
      "How to integrate TypeScript into your Node.js application for type safety.",
    image: "/blog-posts/starting-with-typescript-node.jpg",
    name: "starting-with-typescript-node",
    tags: ["TypeScript", "Node.js", "JavaScript"],
  },
  {
    id: 7,
    heading: "Understanding the JavaScript Event Loop",
    subHeading:
      "A beginner’s guide to understanding asynchronous programming in JavaScript.",
    image: "/blog-posts/javascript-event-loop.png",
    name: "javascript-event-loop",
    tags: ["JavaScript", "Event Loop", "Asynchronous Programming"],
  },
  {
    id: 8,
    heading: "Best Practices for Writing Clean and Maintainable Code",
    subHeading:
      "Strategies and techniques to write clean, readable, and maintainable code.",
    image: "/blog-posts/clean-code-best-practices.jpg",
    name: "clean-code-best-practices",
    tags: ["Best Practices", "Clean Code", "Software Development"],
  },
  {
    id: 9,
    heading:
      "Continuous Integration and Continuous Deployment (CI/CD) Explained",
    subHeading:
      "How CI/CD pipelines work and why they’re crucial for modern software development.",
    image: "/blog-posts/ci-cd-explained.jpg",
    name: "ci-cd-explained",
    tags: ["CI/CD", "DevOps", "Software Development"],
  },
  {
    id: 10,
    heading: "A Beginner’s Guide to Docker and Containers",
    subHeading:
      "Learn the basics of Docker and containers, and how they can simplify your development workflow.",
    image: "/blog-posts/docker-containers-guide.jpg",
    name: "docker-containers-guide",
    tags: ["Docker", "Containers", "DevOps"],
  },
  {
    id: 11,
    heading: "Introduction to Machine Learning with TensorFlow.js",
    subHeading:
      "An introduction to machine learning concepts and how to implement them using TensorFlow.js.",
    image: "/blog-posts/machine-learning-tensorflowjs.jpg",
    name: "machine-learning-tensorflowjs",
    tags: ["Machine Learning", "TensorFlow.js", "JavaScript"],
  },
  {
    id: 12,
    heading: "Optimizing Performance in React Applications",
    subHeading:
      "Techniques and best practices to improve the performance of your React applications.",
    image: "/blog-posts/react-performance-optimization.jpg",
    name: "react-performance-optimization",
    tags: ["React", "Performance Optimization", "JavaScript"],
  },
  {
    id: 13,
    heading: "Building and Deploying a Personal Blog with Next.js",
    subHeading:
      "A step-by-step guide to building and deploying a static blog using Next.js and Vercel.",
    image: "/blog-posts/building-nextjs-blog.jpg",
    name: "building-nextjs-blog",
    tags: ["Next.js", "Static Site Generation", "Web Development"],
  },
];
