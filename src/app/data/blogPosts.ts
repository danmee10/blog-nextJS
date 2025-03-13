import { ItemBucket } from "../lib/constants/ItemBucket";
import { Item } from "../lib/types/Item";
import { Tag } from "./tags";

export const blogPosts: Item[] = [
  {
    id: 1,
    name: "Exploring the Future of Full-Stack JavaScript",
    description:
      "A deep dive into the evolving landscape of JavaScript development",
    image: "/blog-posts/full-stack-javascript-future.jpg",
    slug: "full-stack-javascript-future",
    tags: [Tag.JAVASCRIPT, Tag.WEB_DEVELOPMENT, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 2,
    name: "Mastering React: Tips and Best Practices",
    description: "How to take your React development skills to the next level",
    image: "/blog-posts/mastering-react.jpg",
    slug: "mastering-react",
    tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.WEB_DEVELOPMENT, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 3,
    name: "Building Serverless Applications with AWS",
    description:
      "A guide to deploying scalable applications with AWS serverless technologies",
    image: "/blog-posts/serverless-aws.jpg",
    slug: "serverless-aws",
    tags: [Tag.SERVERLESS, Tag.AWS, Tag.CLOUD_COMPUTING, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 4,
    name: "JavaScript Design Patterns Every Developer Should Know",
    description: "Improving your codebase with proven design patterns",
    image: "/blog-posts/js-design-patterns.jpg",
    slug: "js-design-patterns",
    tags: [
      Tag.JAVASCRIPT,
      Tag.DESIGN_PATTERNS,
      Tag.BEST_PRACTICES,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 5,
    name: "GraphQL vs REST: Which API is Right for You?",
    description:
      "A comparison of GraphQL and REST and which one suits your project better.",
    image: "/blog-posts/graphql-vs-rest.jpg",
    slug: "graphql-vs-rest",
    tags: [Tag.GRAPHQL, Tag.REST, Tag.APIS, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 6,
    name: "Getting Started with TypeScript in a Node.js Project",
    description:
      "How to integrate TypeScript into your Node.js application for type safety.",
    image: "/blog-posts/starting-with-typescript-node.jpg",
    slug: "starting-with-typescript-node",
    tags: [Tag.TYPESCRIPT, Tag.NODE_JS, Tag.JAVASCRIPT, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 7,
    name: "Understanding the JavaScript Event Loop",
    description:
      "A beginner’s guide to understanding asynchronous programming in JavaScript.",
    image: "/blog-posts/javascript-event-loop.png",
    slug: "javascript-event-loop",
    tags: [
      Tag.JAVASCRIPT,
      Tag.EVENT_LOOP,
      Tag.ASYNCHRONOUS_PROGRAMMING,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 8,
    name: "Best Practices for Writing Clean and Maintainable Code",
    description:
      "Strategies and techniques to write clean, readable, and maintainable code.",
    image: "/blog-posts/clean-code-best-practices.jpg",
    slug: "clean-code-best-practices",
    tags: [
      Tag.BEST_PRACTICES,
      Tag.CLEAN_CODE,
      Tag.SOFTWARE_DEVELOPMENT,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 9,
    name: "Continuous Integration and Continuous Deployment (CI/CD) Explained",
    description:
      "How CI/CD pipelines work and why they’re crucial for modern software development.",
    image: "/blog-posts/ci-cd-explained.jpg",
    slug: "ci-cd-explained",
    tags: [Tag.CI_CD, Tag.DEVOPS, Tag.SOFTWARE_DEVELOPMENT, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 10,
    name: "A Beginner’s Guide to Docker and Containers",
    description:
      "Learn the basics of Docker and containers, and how they can simplify your development workflow.",
    image: "/blog-posts/docker-containers-guide.jpg",
    slug: "docker-containers-guide",
    tags: [Tag.DOCKER, Tag.CONTAINERS, Tag.DEVOPS, Tag.TEST_DATA],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 11,
    name: "Introduction to Machine Learning with TensorFlow.js",
    description:
      "An introduction to machine learning concepts and how to implement them using TensorFlow.js.",
    image: "/blog-posts/machine-learning-tensorflowjs.jpg",
    slug: "machine-learning-tensorflowjs",
    tags: [
      Tag.MACHINE_LEARNING,
      Tag.TENSORFLOW_JS,
      Tag.JAVASCRIPT,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 12,
    name: "Optimizing Performance in React Applications",
    description:
      "Techniques and best practices to improve the performance of your React applications.",
    image: "/blog-posts/react-performance-optimization.jpg",
    slug: "react-performance-optimization",
    tags: [
      Tag.REACT,
      Tag.PERFORMANCE_OPTIMIZATION,
      Tag.JAVASCRIPT,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
  {
    id: 13,
    name: "Building and Deploying a Personal Blog with Next.js",
    description:
      "A step-by-step guide to building and deploying a static blog using Next.js and Vercel.",
    image: "/blog-posts/building-nextjs-blog.jpg",
    slug: "building-nextjs-blog",
    tags: [
      Tag.NEXT_JS,
      Tag.STATIC_SITE_GENERATION,
      Tag.WEB_DEVELOPMENT,
      Tag.TEST_DATA,
    ],
    bucket: ItemBucket.BLOG_POST,
  },
];
