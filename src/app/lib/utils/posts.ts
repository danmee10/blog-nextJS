import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/app/blog-markdown");

export interface PostData {
  name: string;
  contentHtml: string;
}

export async function getPostsDataByName(name: string) {
  // Get file names under /posts
  const fileContents = fs.readFileSync(`${postsDirectory}/${name}.md`, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    name,
    contentHtml,
  };
}