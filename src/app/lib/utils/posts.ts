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
  const fileContents = fs.readFileSync(`${postsDirectory}/${name}.md`, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    name,
    contentHtml,
  };
}