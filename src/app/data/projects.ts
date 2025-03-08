import { Tag } from "./tags";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  detailsLink: string;
  demoLink?: string;
  sourceLinks: string[];
  tags: Tag[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Personal Blog / Portfolio Website",
    description:
      "A personal blog and portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/blog.jpg",
    detailsLink: "/projects/blog",
    demoLink: "https://sandboxDocs.com",
    sourceLinks: ["https://github.com/danmee10/blog-nextJS"],
    tags: [Tag.NEXT_JS, Tag.TAILWIND_CSS, Tag.WEB_DEVELOPMENT],
  },
  {
    id: 2,
    name: "Code Visualizer",
    description:
      "A tool that creates visualizations of complicated code paths to help developers understand their code better.",
    image: "/projects/code-visualizer.jpg",
    detailsLink: "/projects/code-visualizer",
    sourceLinks: ["https://github.com/danmee10/code-visualizer"],
    tags: [Tag.JAVASCRIPT, Tag.WEB_DEVELOPMENT, Tag.TOOLS],
  },
  {
    id: 3,
    name: "JS ORM Sandbox",
    description:
      "A VSCode plugin that allows a dev to interact with their development DB using the DSL of their given ORM.",
    image: "/projects/js-orm-sandbox.jpg",
    detailsLink: "/projects/js-orm-sandbox",
    sourceLinks: ["https://github.com/danmee10/js-orm-sandbox"],
    tags: [Tag.JAVASCRIPT, Tag.TYPESCRIPT, Tag.DEVTOOLS],
  },
  {
    id: 4,
    name: "Real-Time Data Visualization Dashboard",
    description:
      "A dynamic dashboard that visualizes real-time data using WebSockets and D3.js.",
    image: "/projects/rt-data-viz.jpg",
    detailsLink: "/projects/data-visualization-dashboard",
    demoLink: "https://data-dashboard-demo.com",
    sourceLinks: ["https://github.com/danmee10/data-visualization-dashboard"],
    tags: [Tag.JAVASCRIPT, Tag.D3_JS, Tag.WEBSOCKETS],
  },
  {
    id: 5,
    name: "AI-Powered Sentiment Analysis Tool",
    description:
      "An app that analyzes text sentiment using machine learning models to provide insights.",
    image: "/projects/ai-sentiment.jpg",
    detailsLink: "/projects/sentiment-analysis-tool",
    demoLink: "https://sentiment-analysis-tool-demo.com",
    sourceLinks: ["https://github.com/danmee10/sentiment-analysis-tool"],
    tags: [Tag.MACHINE_LEARNING, Tag.NLP, Tag.PYTHON],
  },
  {
    id: 6,
    name: "Personal Finance Tracker",
    description:
      "An application to track your expenses, create budgets, and visualize spending habits.",
    image: "/projects/personal-finance-tracker.jpg",
    detailsLink: "/projects/personal-finance-tracker",
    demoLink: "https://finance-tracker-demo.com",
    sourceLinks: ["https://github.com/danmee10/personal-finance-tracker"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.FINTECH],
  },
  {
    id: 7,
    name: "E-Commerce Platform with Custom CMS",
    description:
      "A fully functional e-commerce platform with an integrated content management system (CMS).",
    image: "/projects/ecommerce-platform.jpg",
    detailsLink: "/projects/e-commerce-platform",
    demoLink: "https://e-commerce-platform-demo.com",
    sourceLinks: ["https://github.com/danmee10/e-commerce-platform"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.ECOMMERCE],
  },
  {
    id: 8,
    name: "Task Management App with Real-Time Collaboration",
    description:
      "A task management application that allows users to collaborate in real time on projects and tasks.",
    image: "/projects/task-management-app.jpg",
    detailsLink: "/projects/task-management-app",
    demoLink: "https://task-management-app-demo.com",
    sourceLinks: ["https://github.com/danmee10/task-management-app"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.COLLABORATION],
  },
  {
    id: 9,
    name: "Weather Forecasting App",
    description:
      "A weather app that provides up-to-date weather forecasts and alerts based on user location.",
    image: "/projects/weather-forecasting-app.jpg",
    detailsLink: "/projects/weather-forecasting-app",
    demoLink: "https://weather-forecasting-app-demo.com",
    sourceLinks: ["https://github.com/danmee10/weather-forecasting-app"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.WEATHER],
  },
  {
    id: 10,
    name: "Chatbot with Natural Language Processing",
    description:
      "A chatbot application powered by NLP to provide conversational support for various topics.",
    image: "/projects/chatbot-nlp.jpg",
    detailsLink: "/projects/chatbot-nlp",
    demoLink: "https://chatbot-nlp-demo.com",
    sourceLinks: ["https://github.com/danmee10/chatbot-nlp"],
    tags: [Tag.MACHINE_LEARNING, Tag.NLP, Tag.CHATBOT],
  },
  {
    id: 11,
    name: "Photo Editing Web App",
    description:
      "A web-based photo editor with basic tools for cropping, resizing, and adding filters.",
    image: "/projects/photo-editing-web-app.jpg",
    detailsLink: "/projects/photo-editing-web-app",
    demoLink: "https://photo-editing-web-app-demo.com",
    sourceLinks: ["https://github.com/danmee10/photo-editing-web-app"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.PHOTO_EDITING],
  },
  {
    id: 12,
    name: "Real-Time Messaging Platform",
    description:
      "A real-time messaging app with support for text, images, and video chat.",
    image: "/projects/real-time-messaging-platform.jpg",
    detailsLink: "/projects/real-time-messaging-platform",
    demoLink: "https://real-time-messaging-demo.com",
    sourceLinks: ["https://github.com/danmee10/real-time-messaging-platform"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.REAL_TIME],
  },
  {
    id: 13,
    name: "Travel Planning App",
    description:
      "An app that helps users plan and organize their trips with itinerary tracking and flight/hotel bookings.",
    image: "/projects/travel-planning-app.jpg",
    detailsLink: "/projects/travel-planning-app",
    demoLink: "https://travel-planning-app-demo.com",
    sourceLinks: ["https://github.com/danmee10/travel-planning-app"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.TRAVEL],
  },
  {
    id: 14,
    name: "Fitness Tracking App",
    description:
      "An app that tracks physical activities, workouts, and provides progress insights.",
    image: "/projects/fitness-tracking-app.jpg",
    detailsLink: "/projects/fitness-tracking-app",
    demoLink: "https://fitness-tracking-app-demo.com",
    sourceLinks: ["https://github.com/danmee10/fitness-tracking-app"],
    tags: [Tag.JAVASCRIPT, Tag.REACT, Tag.FITNESS],
  },
  {
    id: 15,
    name: "Automated Content Curation System",
    description:
      "A system that uses machine learning to curate relevant content from various sources for your blog.",
    image: "/projects/content-curation-system.jpg",
    detailsLink: "/projects/content-curation-system",
    demoLink: "https://content-curation-demo.com",
    sourceLinks: ["https://github.com/danmee10/content-curation-system"],
    tags: [Tag.MACHINE_LEARNING, Tag.CONTENT_CURATION, Tag.BLOGGING],
  },
];
