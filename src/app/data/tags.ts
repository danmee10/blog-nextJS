export enum TagCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  CLOUD_DEVOPS = "Cloud & DevOps",
  SOFTWARE_ENGINEERING = "Software Engineering",
  PERFORMANCE_ML = "Performance & ML",
}

export enum Tag {
  JAVASCRIPT = "JavaScript",
  REACT = "React",
  NEXT_JS = "Next.js",
  TYPESCRIPT = "TypeScript",
  WEB_DEVELOPMENT = "Web Development",
  NODE_JS = "Node.js",
  GRAPHQL = "GraphQL",
  REST = "REST",
  APIS = "APIs",
  SERVERLESS = "Serverless",
  AWS = "AWS",
  CLOUD_COMPUTING = "Cloud Computing",
  CI_CD = "CI/CD",
  DEVOPS = "DevOps",
  DOCKER = "Docker",
  CONTAINERS = "Containers",
  DESIGN_PATTERNS = "Design Patterns",
  BEST_PRACTICES = "Best Practices",
  CLEAN_CODE = "Clean Code",
  SOFTWARE_DEVELOPMENT = "Software Development",
  EVENT_LOOP = "Event Loop",
  ASYNCHRONOUS_PROGRAMMING = "Asynchronous Programming",
  PERFORMANCE_OPTIMIZATION = "Performance Optimization",
  MACHINE_LEARNING = "Machine Learning",
  TENSORFLOW_JS = "TensorFlow.js",
  STATIC_SITE_GENERATION = "Static Site Generation",
}

export const tagCategories: Record<TagCategory, Tag[]> = {
  [TagCategory.FRONTEND]: [
    Tag.JAVASCRIPT,
    Tag.REACT,
    Tag.NEXT_JS,
    Tag.TYPESCRIPT,
    Tag.WEB_DEVELOPMENT,
  ],
  [TagCategory.BACKEND]: [
    Tag.NODE_JS,
    Tag.GRAPHQL,
    Tag.REST,
    Tag.APIS,
    Tag.SERVERLESS,
  ],
  [TagCategory.CLOUD_DEVOPS]: [
    Tag.AWS,
    Tag.CLOUD_COMPUTING,
    Tag.CI_CD,
    Tag.DEVOPS,
    Tag.DOCKER,
    Tag.CONTAINERS,
  ],
  [TagCategory.SOFTWARE_ENGINEERING]: [
    Tag.DESIGN_PATTERNS,
    Tag.BEST_PRACTICES,
    Tag.CLEAN_CODE,
    Tag.SOFTWARE_DEVELOPMENT,
  ],
  [TagCategory.PERFORMANCE_ML]: [
    Tag.EVENT_LOOP,
    Tag.ASYNCHRONOUS_PROGRAMMING,
    Tag.PERFORMANCE_OPTIMIZATION,
    Tag.MACHINE_LEARNING,
    Tag.TENSORFLOW_JS,
    Tag.STATIC_SITE_GENERATION,
  ],
};

export const tags = Object.entries(tagCategories).reduce((acc, [category, tags]) => {
  tags.forEach(tag => {
    acc[tag] = { name: tag, category: category as TagCategory };
  });
  return acc;
}, {} as Record<Tag, { name: Tag; category: TagCategory }>);